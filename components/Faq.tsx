'use client';

import { useState } from 'react';
import { FadeIn } from './FadeIn';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "How long does it take to build a custom application?",
    answer: "The timeline depends on the complexity of the project. A typical MVP (Minimum Viable Product) might take 6-12 weeks, while larger enterprise platforms can take 4-6 months. We work in sprints to deliver functional software early and often."
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer: "Yes, we offer comprehensive post-launch support and maintenance packages. We act as your long-term technology partner, ensuring your software remains secure, updated, and scales seamlessly with your business."
  },
  {
    question: "Who owns the source code after development?",
    answer: "You do. Upon project completion and final payment, we hand over 100% ownership of the intellectual property and source code to you. There are no vendor lock-ins."
  },
  {
    question: "What is your pricing structure?",
    answer: "We offer flexible pricing models ranging from fixed-price contracts for well-defined scopes to hourly/retainer models for ongoing development. We'll consult with you to find the structure that best fits your needs and budget."
  }
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 bg-secondary border-y border-gray-100 overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-gray-900 tracking-tighter pb-4 mb-2 text-balance">
              Frequently Asked Questions
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg text-gray-600 leading-relaxed font-light">
              Everything you need to know about partnering with us.
            </p>
          </FadeIn>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="border-b border-gray-200">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
                >
                  <span className={`text-lg md:text-xl font-medium transition-colors duration-300 ${openIndex === index ? 'text-blue-600' : 'text-gray-900 group-hover:text-blue-600'}`}>
                    {faq.question}
                  </span>
                  <span className="ml-6 shrink-0 text-gray-400 relative w-5 h-5">
                    <Plus 
                      className={`absolute inset-0 w-5 h-5 transition-all duration-300 ease-in-out ${
                        openIndex === index ? 'rotate-90 scale-50 opacity-0' : 'rotate-0 scale-100 opacity-100'
                      }`} 
                    />
                    <Minus 
                      className={`absolute inset-0 w-5 h-5 transition-all duration-300 ease-in-out ${
                        openIndex === index ? 'rotate-0 scale-100 opacity-100 text-blue-600' : '-rotate-90 scale-50 opacity-0'
                      }`} 
                    />
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                    openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-gray-600 leading-relaxed font-light pb-6">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
