import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img className="h-10 w-auto" src="/logo.png" alt="PosterPro" />
              <span className="ml-2 text-xl font-bold text-primary-900">PosterPro</span>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link to="/how-it-works" className="text-gray-600 hover:text-primary-600 font-medium">How It Works</Link>
            <Link to="/pricing" className="text-gray-600 hover:text-primary-600 font-medium">Pricing</Link>
            <Link to="/#faq" className="text-gray-600 hover:text-primary-600 font-medium">FAQ</Link>
            <Link to="/#contact" className="text-gray-600 hover:text-primary-600 font-medium">Contact</Link>
          </nav>
          <div className="flex items-center">
            <Link to="/pricing" className="bg-primary-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-primary-700 transition">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
