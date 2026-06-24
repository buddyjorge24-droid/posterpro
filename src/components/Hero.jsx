import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative bg-white pt-16 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1>
              <span className="block text-sm font-semibold uppercase tracking-wide text-primary-600 sm:text-base lg:text-sm xl:text-base">
                Labor Law Compliance Simplified
              </span>
              <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                <span className="block text-gray-900">Compliance on</span>
                <span className="block text-primary-600">Autopilot.</span>
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              We Handle the Laws, You Handle the Business. Never worry about labor law fines again. We research your specific location and ship your updated federal, state, and city posters automatically every year.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <Link to="/pricing" className="inline-flex items-center px-8 py-3 border border-transparent text-base font-bold rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 transition transform hover:scale-105">
                Protect My Business
              </Link>
              <div className="mt-6 flex flex-col sm:flex-row sm:justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-500">
                <div className="flex items-center justify-center lg:justify-start">
                  <span className="text-green-500 mr-1 text-lg">✓</span> Over 10,000 businesses protected
                </div>
                <div className="flex items-center justify-center lg:justify-start">
                  <span className="text-green-500 mr-1 text-lg">✓</span> Covering all 50 states
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-2xl shadow-2xl lg:max-w-md overflow-hidden ring-1 ring-gray-200">
              <img
                className="w-full"
                src="./hero.png"
                alt="Compliant Office Wall"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
