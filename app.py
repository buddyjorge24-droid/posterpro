import os
import smtplib
import json
import subprocess
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime
from flask import Flask, render_template, request, jsonify, redirect, url_for

app = Flask(__name__)

# Lead scoring thresholds
MIN_BUDGET_FOR_HOT = 10000
MIN_BUDGET_FOR_WARM = 10000

# Notification email
NOTIFICATION_EMAIL = "nmg-construction-0f4c5f1a@ctomail.io"

# Shared file for lead notifications (read by lead agent)
LEADS_FILE = "/home/team/shared/new_leads.json"

# For storing leads in memory (we'll clear on restart)
leads_store = []

def parse_budget(budget_str):
    """Parse budget range string to a numeric value for scoring."""
    if not budget_str:
        return 0
    s = budget_str.lower().replace(',', '').replace('$', '').strip()
    # Handle ranges like "$25k-$50k" or "25000-50000" -> take the lower end
    if '-' in s:
        parts = s.split('-')
        first = parts[0].strip()
        # Handle "25k" format in first part of range
        if 'k' in first:
            try:
                return int(float(first.replace('k', '')) * 1000)
            except:
                return 0
        try:
            return int(first)
        except:
            return 0
    # Handle "under 10k" type strings
    if 'under' in s or '<' in s:
        return 5000
    # Handle "100k+" type strings
    if 'k' in s:
        try:
            num = float(s.replace('k', '').replace('+', '').strip())
            return int(num * 1000)
        except:
            return 0
    try:
        return int(s)
    except:
        return 0

def score_lead(budget, timeline, is_decision_maker):
    """
    Score a lead based on budget, timeline, and decision-maker status.
    Hot/Qualified: Budget >= $10k AND Timeline != "Just Exploring" AND decision-maker == "Yes"
    Warm: Budget >= $10k AND (timeline is real OR decision-maker is Yes)
    Cold: Everything else
    """
    budget_ok = budget >= MIN_BUDGET_FOR_HOT
    has_timeline = timeline and timeline.lower() not in ('just exploring', 'just exploring / no timeline', '')
    is_owner = is_decision_maker and is_decision_maker.lower() == 'yes'
    
    if budget_ok and has_timeline and is_owner:
        return "hot"
    elif budget_ok and (has_timeline or is_owner):
        return "warm"
    else:
        return "cold"

def write_lead_to_file(lead_data):
    """Write lead data to the shared leads file for processing."""
    try:
        os.makedirs(os.path.dirname(LEADS_FILE), exist_ok=True)
        existing = []
        if os.path.exists(LEADS_FILE):
            try:
                with open(LEADS_FILE, 'r') as f:
                    existing = json.load(f)
            except:
                existing = []
        existing.append(lead_data)
        with open(LEADS_FILE, 'w') as f:
            json.dump(existing, f, indent=2)
        return True
    except Exception as e:
        print(f"Error writing lead to file: {e}")
        return False

def send_lead_notification(lead_data):
    """Send an email notification for a qualified (hot) lead and write to shared file."""
    score = lead_data['score']
    subject = f"[{score.upper()}] New Lead: {lead_data['name']} - {lead_data['project_type']}"
    body = f"""
NEW LEAD SUBMISSION - NMG Construction
========================================
Status: {score.upper()}
Date: {lead_data['submitted_at']}

CONTACT INFO
------------
Name: {lead_data['name']}
Email: {lead_data['email']}
Phone: {lead_data['phone']}

PROJECT DETAILS
--------------
Project Type: {lead_data['project_type']}
Budget Range: {lead_data['budget_range']}
Timeline: {lead_data['timeline']}
Decision Maker: {lead_data['is_decision_maker']}
Property Type: {lead_data['property_type']}
Heard Via: {lead_data['heard_via']}

DESCRIPTION
-----------
{lead_data['description']}

LEAD SCORING
-----------
Budget >= $10k: {lead_data['_budget_ok']}
Has Real Timeline: {lead_data['_has_timeline']}
Is Decision Maker: {lead_data['_is_owner']}
"""
    # Write to shared file (this is the reliable method - lead agent reads it)
    file_written = write_lead_to_file(lead_data)
    
    # Also try sendmail as backup
    email_sent = False
    try:
        msg_text = f"To: {NOTIFICATION_EMAIL}\nSubject: {subject}\n\n{body}"
        result = subprocess.run(
            ["sendmail", "-t"],
            input=msg_text,
            capture_output=True,
            text=True,
            timeout=10
        )
        email_sent = True
    except Exception:
        try:
            msg = MIMEText(body)
            msg['Subject'] = subject
            msg['To'] = NOTIFICATION_EMAIL
            msg['From'] = 'noreply@nmgconstruction.com'
            with smtplib.SMTP('localhost', 25, timeout=10) as server:
                server.send_message(msg)
            email_sent = True
        except Exception:
            pass
    
    return email_sent or file_written, "Notification written to file"

# Routes
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/services')
def services():
    return render_template('services.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/portfolio')
def portfolio():
    return render_template('portfolio.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/api/submit-lead', methods=['POST'])
def submit_lead():
    """Handle lead form submission with scoring."""
    try:
        data = request.get_json()
        
        # Extract fields
        name = data.get('name', '').strip()
        email = data.get('email', '').strip()
        phone = data.get('phone', '').strip()
        project_type = data.get('project_type', '').strip()
        budget_range = data.get('budget_range', '').strip()
        timeline = data.get('timeline', '').strip()
        is_decision_maker = data.get('is_decision_maker', '').strip()
        property_type = data.get('property_type', '').strip()
        description = data.get('description', '').strip()
        heard_via = data.get('heard_via', '').strip()
        
        # Validate required fields
        if not name or not email:
            return jsonify({'success': False, 'message': 'Name and email are required.'}), 400
        
        # Parse budget
        budget_value = parse_budget(budget_range)
        
        # Score the lead
        score = score_lead(budget_value, timeline, is_decision_maker)
        
        # Prepare lead data
        has_timeline = timeline and timeline.lower() not in ('just exploring', 'just exploring / no timeline', '')
        is_owner = is_decision_maker and is_decision_maker.lower() == 'yes'
        
        lead = {
            'name': name,
            'email': email,
            'phone': phone,
            'project_type': project_type,
            'budget_range': budget_range,
            'budget_value': budget_value,
            'timeline': timeline,
            'is_decision_maker': is_decision_maker,
            'property_type': property_type,
            'description': description,
            'heard_via': heard_via,
            'score': score,
            '_budget_ok': budget_value >= MIN_BUDGET_FOR_HOT,
            '_has_timeline': has_timeline,
            '_is_owner': is_owner,
            'submitted_at': datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        }
        
        # Store lead
        leads_store.append(lead)
        
        # Send notification for hot leads
        email_sent = False
        email_msg = ''
        if score == 'hot':
            email_sent, email_msg = send_lead_notification(lead)
        
        return jsonify({
            'success': True,
            'score': score,
            'email_notified': email_sent,
            'message': 'Thank you! Your project details have been received.' if score != 'hot' else 'Thank you! A member of our team will contact you shortly.'
        })
    except Exception as e:
        return jsonify({'success': False, 'message': f'An error occurred: {str(e)}'}), 500

@app.route('/api/leads', methods=['GET'])
def get_leads():
    """Admin endpoint to view submitted leads."""
    return jsonify(leads_store)

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 3000))
    app.run(host='0.0.0.0', port=port, debug=False)
