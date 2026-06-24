import React from 'react'
import Header from '../components/Header'
import Pricing from '../components/Pricing'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <div className="bg-primary-900 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
              Compliance Pricing Plans
            </h1>
            <p className="mt-4 text-xl text-primary-100">
              Choose the right level of protection for your business.
            </p>
          </div>
        </div>
        <Pricing />
        <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Compare Plans</h2>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="py-4 font-semibold text-gray-900">Feature</th>
                <th className="py-4 font-semibold text-gray-900">Single Location</th>
                <th className="py-4 font-semibold text-gray-900">Multi-Location</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="py-4 text-gray-600">Federal/State Posters</td>
                <td className="py-4 text-green-600">✓ Included</td>
                <td className="py-4 text-green-600">✓ Included</td>
              </tr>
              <tr>
                <td className="py-4 text-gray-600">City/County Research</td>
                <td className="py-4 text-green-600">✓ Included</td>
                <td className="py-4 text-green-600">✓ Included</td>
              </tr>
              <tr>
                <td className="py-4 text-gray-600">Automatic Updates</td>
                <td className="py-4 text-green-600">✓ Included</td>
                <td className="py-4 text-green-600">✓ Included</td>
              </tr>
              <tr>
                <td className="py-4 text-gray-600">Fine Guarantee</td>
                <td className="py-4 text-gray-900">$25,000</td>
                <td className="py-4 text-gray-900">$25,000</td>
              </tr>
              <tr>
                <td className="py-4 text-gray-600">Central Dashboard</td>
                <td className="py-4 text-gray-400">Basic</td>
                <td className="py-4 text-green-600">✓ Advanced</td>
              </tr>
            </tbody>
          </table>
        </div>
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
