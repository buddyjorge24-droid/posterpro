import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import WhatsIncluded from '../components/WhatsIncluded'
import Pricing from '../components/Pricing'
import FAQ from '../components/FAQ'
import LeadCapture from '../components/LeadCapture'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <WhatsIncluded />
        <Pricing />
        <FAQ />
        <LeadCapture />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
