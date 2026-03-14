'use client';

import { FadeIn } from './FadeIn';

export function Vision() {
  return (
    <section className="py-24 md:py-32 bg-white border-y border-gray-100 overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.02)_0%,transparent_100%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
            <FadeIn className="flex flex-col items-center lg:items-start">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-xs font-bold text-gray-600 uppercase tracking-widest mb-8">
                <span className="w-2 h-2 rounded-full bg-gray-900 animate-pulse"></span>
                Our Vision
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-gray-900 to-gray-600 tracking-tighter pb-6 mb-2 text-balance mx-auto lg:mx-0">
                Building for India's Evolving Ecosystem
              </h2>
            </FadeIn>
            <FadeIn delay={0.1} className="flex flex-col items-center lg:items-start">
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light mb-8 text-balance max-w-2xl mx-auto lg:mx-0">
                We believe in locally driven innovation and bold investment. Our goal is to build solutions tailored specifically for India's diverse and rapidly growing digital landscape.
              </p>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light text-balance max-w-2xl mx-auto lg:mx-0">
                By understanding the unique challenges and opportunities within the region, we engineer platforms that empower businesses to scale efficiently and sustainably.
              </p>
            </FadeIn>
          </div>
          <FadeIn delay={0.2} className="flex justify-center lg:justify-end">
            <div className="w-full max-w-[504px] h-[800px] rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white relative">
              <iframe 
                src="https://www.linkedin.com/embed/feed/update/urn:li:share:7438473722358919168" 
                height="100%" 
                width="100%" 
                frameBorder="0" 
                allowFullScreen 
                title="Embedded post"
                className="absolute inset-0 w-full h-full"
                data-lenis-prevent
              ></iframe>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
