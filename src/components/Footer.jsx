import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center">
              <img className="h-8 w-auto" src="/logo.png" alt="PosterPro" />
              <span className="ml-2 text-xl font-bold">PosterPro</span>
            </div>
            <p className="mt-2 text-primary-400 font-medium">Stay Compliant. Stay Protected.</p>
            <p className="mt-4 text-gray-400 max-w-xs">
              Providing small businesses with simple, automated labor law compliance. We handle the research, you handle the growth.
            </p>
            <div className="mt-6 text-gray-400 text-sm">
              <p>Email: support@posterpro.com</p>
              <p>Phone: (888) 555-0123</p>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Product</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/how-it-works" className="text-gray-400 hover:text-white transition">How It Works</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-white transition">Pricing</Link></li>
              <li><Link to="/dashboard" className="text-gray-400 hover:text-white transition">Admin Dashboard</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Company</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/#contact" className="text-gray-400 hover:text-white transition">Contact</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} PosterPro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
