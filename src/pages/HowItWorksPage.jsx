import React from 'react'
import Header from '../components/Header'
import HowItWorks from '../components/HowItWorks'
import WhatsIncluded from '../components/WhatsIncluded'
import Footer from '../components/Footer'

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <div className="bg-primary-900 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
              How PosterPro Protects You
            </h1>
            <p className="mt-4 text-xl text-primary-100">
              We take the complexity out of labor law compliance.
            </p>
          </div>
        </div>
        
        <HowItWorks />
        
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900">Expert Research Team</h2>
                <p className="mt-4 text-lg text-gray-500">
                  PosterPro was founded by compliance experts who saw small business owners getting hit with "gotcha" fines for local ordinances they didn't even know existed.
                </p>
                <p className="mt-4 text-lg text-gray-500">
                  We believe that compliance should be invisible. Our research team audits thousands of jurisdictions daily—federal, state, city, and county—so you can focus on what you do best: growing your company.
                </p>
              </div>
              <div className="mt-12 lg:mt-0 bg-gray-100 rounded-2xl p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Our Compliance Statistics</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-primary-900">U.S. States Covered</span>
                      <span className="text-sm font-medium text-primary-900">100%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-primary-600 h-2 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-primary-900">Local Jurisdictions Monitored</span>
                      <span className="text-sm font-medium text-primary-900">22,000+</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-primary-600 h-2 rounded-full" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-primary-900">Mandatory Changes in 2025</span>
                      <span className="text-sm font-medium text-primary-900">450+</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-primary-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <WhatsIncluded />
        
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Join 10,000+ protected locations.</h2>
            <div className="mt-8">
              <a href="/pricing" className="inline-flex items-center px-8 py-3 border border-transparent text-base font-bold rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 transition">
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
