import React, { useState } from 'react'

export default function LeadCapture() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, send to API
    setSubmitted(true)
  }

  return (
    <section className="bg-primary-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-0 lg:flex-1">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Not ready to buy yet?
            </h2>
            <p className="mt-3 max-w-3xl text-lg leading-6 text-primary-100">
              Get our free compliance checklist and stay updated on the latest labor law changes.
            </p>
          </div>
          <div className="mt-8 lg:mt-0 lg:ml-8">
            {submitted ? (
              <div className="bg-green-500 text-white p-4 rounded-md">
                Thanks! We've sent the checklist to your inbox.
              </div>
            ) : (
              <form className="sm:flex" onSubmit={handleSubmit}>
                <label htmlFor="email-address" className="sr-only">Email address</label>
                <input
                  id="email-address"
                  name="email-address"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full px-5 py-3 border border-transparent placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary-700 focus:ring-white rounded-md"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  type="submit"
                  className="mt-3 w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary-700 focus:ring-white sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
                >
                  Send Me the Checklist
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
