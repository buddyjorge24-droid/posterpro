import React from 'react'

const tiers = [
  {
    name: 'Single Location Subscription',
    price: 199,
    description: 'Perfect for small businesses with one physical office or storefront.',
    features: [
      'Federal, State, and City/County bundles',
      'Automatic annual refresh',
      '$25,000 Compliance Fine Guarantee',
      'Laminated & Durable',
      'Compliance Monitoring 24/7',
    ],
    cta: 'Protect My Business',
    mostPopular: false,
    link: 'https://buy.stripe.com/5kQ28r2cs48B6E51nv3VC00',
  },
  {
    name: 'Multi-Location Discount',
    price: 149,
    description: 'Best value for businesses with 2 or more locations (priced per location).',
    features: [
      'Everything in Single Location',
      'Centralized management',
      'Standardized compliance across all sites',
      'Dedicated Account Support',
      'Multi-Location Dashboard',
    ],
    cta: 'Save with Multi-Location',
    mostPopular: true,
    link: 'https://buy.stripe.com/4gM4gzeZe0Wp6E50jr3VC01',
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Simple, Transparent Pricing</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            One annual fee for peace of mind. No hidden costs.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-2 max-w-4xl mx-auto">
          {tiers.map((tier) => (
            <div key={tier.name} className={`relative flex flex-col p-8 bg-white border ${tier.mostPopular ? 'border-primary-600 shadow-xl scale-105' : 'border-gray-200 shadow-sm'} rounded-2xl`}>
              {tier.mostPopular && (
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/8 bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Best Value
                </div>
              )}
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">{tier.name}</h3>
                <p className="mt-4 flex items-baseline text-gray-900">
                  <span className="text-5xl font-extrabold tracking-tight">${tier.price}</span>
                  <span className="ml-1 text-xl font-semibold text-gray-500">/year</span>
                </p>
                <p className="mt-6 text-gray-500">{tier.description}</p>

                <ul className="mt-6 space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={tier.link}
                className={`mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-bold ${
                  tier.mostPopular ? 'bg-primary-600 text-white hover:bg-primary-700' : 'bg-primary-50 text-primary-700 hover:bg-primary-100'
                } transition`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
