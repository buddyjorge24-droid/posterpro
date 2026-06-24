import React from 'react'

const steps = [
  {
    name: 'Enter Your Location',
    description: 'Tell us where your business is. We audit your specific address for federal, state, city, and county requirements.',
    icon: '📍',
  },
  {
    name: 'We Build Your Bundle',
    description: 'Our compliance experts assemble a 100% accurate poster set. No messy stickers—just professional, full-size posters.',
    icon: '🛠️',
  },
  {
    name: 'We Ship Annually',
    description: 'Your posters arrive in 3-5 days. Every year, we automatically ship your new updated bundle before the old ones expire.',
    icon: '🚚',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Compliance on Autopilot</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Three simple steps to permanent protection.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {steps.map((step) => (
              <div key={step.name} className="relative bg-white p-10 rounded-2xl shadow-sm border border-gray-100 transition hover:shadow-md">
                <div className="text-5xl mb-6">{step.icon}</div>
                <h3 className="text-xl font-bold text-gray-900">{step.name}</h3>
                <p className="mt-4 text-gray-500 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
