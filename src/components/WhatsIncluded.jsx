import React from 'react'

const categories = [
  { name: 'OSHA Job Safety', description: 'Mandatory health and safety information for all employees.' },
  { name: 'Minimum Wage', description: 'Current federal and state-specific minimum wage rates.' },
  { name: 'FMLA', description: 'Family and Medical Leave Act rights and eligibility.' },
  { name: 'EEO / Anti-Discrimination', description: 'Equal Employment Opportunity laws and protections.' },
  { name: 'EPPA', description: 'Employee Polygraph Protection Act information.' },
  { name: 'USERRA', description: 'Uniformed Services Employment and Reemployment Rights Act.' },
  { name: 'State-Specific Laws', description: 'Unemployment, Workers Comp, and other state mandates.' },
  { name: 'City/County Ordinances', description: 'Local minimum wage and paid sick leave requirements.' },
]

export default function WhatsIncluded() {
  return (
    <section id="whats-included" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">What's in Your Bundle?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            We provide every single poster required by federal, state, and local law.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <div key={cat.name} className="relative p-6 bg-gray-50 rounded-xl border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900">{cat.name}</h3>
              <p className="mt-2 text-sm text-gray-500">{cat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
