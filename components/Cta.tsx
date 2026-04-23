'use client';

import { useState } from 'react';
import { Mail, Instagram, Linkedin, ArrowRight, CheckCircle2 } from 'lucide-react';
import { FadeIn } from './FadeIn';

export function Cta() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-white border-y border-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.03)_0%,transparent_100%)] pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Text & Info */}
          <div className="flex flex-col justify-center text-center lg:text-left">
            <FadeIn>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-gray-900 to-gray-600 tracking-tighter pb-4 mb-2">
                Let&apos;s Build Your Next Project
              </h2>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10 font-light">
                Whether you need a custom SaaS platform, a mobile application, or want to explore AI automation for your business, drop us a line. We build specifically for India&apos;s digital ecosystem.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.2} className="flex flex-col items-center lg:items-start gap-6">
              <a 
                href="mailto:kanzen.technology@gmail.com" 
                className="group inline-flex items-center justify-center lg:justify-start gap-4 text-gray-900 hover:text-gray-600 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-lg font-medium tracking-wide">kanzen.technology@gmail.com</span>
              </a>

              <div className="flex items-center justify-center lg:justify-start gap-4 pt-4">
                <a href="#" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-900 hover:bg-gray-50 hover:border-gray-300 transition-all hover:-translate-y-1 shadow-sm" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-900 hover:bg-gray-50 hover:border-gray-300 transition-all hover:-translate-y-1 shadow-sm" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Form */}
          <FadeIn delay={0.3} className="w-full max-w-lg mx-auto lg:mx-0 lg:ml-auto">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 relative overflow-hidden">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600 font-light">Thank you for reaching out. We will get back to you shortly.</p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-8 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none transition-all bg-gray-50/50 focus:bg-white"
                      placeholder="Rahul Kumar"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none transition-all bg-gray-50/50 focus:bg-white"
                      placeholder="rahul@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">Mobile Number (Optional)</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none transition-all bg-gray-50/50 focus:bg-white"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">Project Details</label>
                    <textarea 
                      id="message" 
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none transition-all bg-gray-50/50 focus:bg-white resize-none"
                      placeholder="Tell us a bit about what you want to build..."
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="mt-2 w-full inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-white bg-gray-900 hover:bg-gray-800 transition-all rounded-xl disabled:opacity-70 disabled:cursor-not-allowed group"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    {!isSubmitting && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                  </button>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
