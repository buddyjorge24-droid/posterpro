import React, { useState } from 'react'

const faqs = [
  {
    question: "What posters are actually required for my business?",
    answer: "Every U.S. business with at least one employee must display mandatory postings from the Department of Labor (DOL), OSHA, and various state and local agencies. These include Minimum Wage, Equal Opportunity, FMLA, and Safety laws."
  },
  {
    question: "Why do I need City and County posters?",
    answer: "Many cities (like San Francisco, Chicago, or NYC) have their own local ordinances (e.g., specific sick leave or fair chance laws) that are NOT covered by standard state posters. PosterPro is one of the few services that researches and includes these local requirements automatically."
  },
  {
    question: "What happens if I am fined for non-compliance?",
    answer: "If you have our posters displayed and still receive a fine for improper labor law postings, PosterPro will reimburse the fine up to $25,000."
  },
  {
    question: "How do I know when the laws change?",
    answer: "You don't have to. We monitor every legislative change at the federal, state, and local levels. When a mandatory change occurs, we process your update immediately."
  },
  {
    question: "Do you send those update stickers or overlays?",
    answer: "No. Stickers are messy, they peel off, and they often look unprofessional. We send you a completely brand-new, high-quality poster bundle every year."
  },
  {
    question: "Can I manage multiple locations in one account?",
    answer: "Yes. Our dashboard allows you to manage subscriptions for all your locations in one place, ensuring every branch is protected."
  },
  {
    question: "Is the subscription billed monthly or annually?",
    answer: "We bill annually at $199/year. This ensures we can provide continuous monitoring and automatic shipping without interruption to your protection."
  },
  {
    question: "What if I move my business location?",
    answer: "Just update your address in your account dashboard. We will audit your new location and send you the correct posters for your new jurisdiction immediately."
  },
  {
    question: "Are the posters available in Spanish?",
    answer: "Yes. In many states, Spanish versions are legally required if a significant portion of your workforce speaks Spanish. We provide bilingual options during checkout."
  }
]

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-6 border-b border-gray-200">
      <button
        className="flex justify-between items-center w-full text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-gray-900">{question}</span>
        <span className="ml-6 flex-shrink-0">
          <svg
            className={`h-6 w-6 text-primary-600 transition-transform ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="独自19 9l-7 7-7-7" />
            {/* Fix path above - should be M19 9l-7 7-7-7 */}
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      {isOpen && (
        <div className="mt-4 text-base text-gray-500">
          {answer}
        </div>
      )}
    </div>
  );
};

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Frequently Asked Questions</h2>
        </div>
        <div className="mt-12 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  )
}
