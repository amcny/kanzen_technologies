'use client';

import { FadeIn } from './FadeIn';

const logos = [
  { name: 'Acme Corp', id: 1 },
  { name: 'Global Tech', id: 2 },
  { name: 'Nexus', id: 3 },
  { name: 'Stark Ind', id: 4 },
  { name: 'Wayne Ent', id: 5 },
];

export function SocialProof() {
  // Duplicate logos to create a seamless loop
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="py-20 md:py-24 bg-white border-b border-gray-100 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/[0.02] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <FadeIn>
          <p className="text-center text-xs md:text-sm font-semibold text-gray-400 uppercase tracking-[0.15em] md:tracking-[0.2em] mb-10 md:mb-12 px-4">
            Trusted by growing companies worldwide
          </p>
        </FadeIn>
        
        <div className="relative flex overflow-hidden opacity-60 hover:opacity-100 transition-opacity duration-500">
          {/* Gradient masks for smooth fade in/out on edges - moved here so they don't cover the text */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

          <div className="flex animate-marquee whitespace-nowrap items-center shrink-0 min-w-full justify-around">
            {duplicatedLogos.map((logo, index) => (
              <div key={`${logo.id}-${index}`} className="flex items-center justify-center h-12 px-8 md:px-16">
                <span className="text-lg md:text-2xl font-display font-bold text-gray-800 tracking-tight">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
          <div className="flex animate-marquee whitespace-nowrap items-center shrink-0 min-w-full justify-around" aria-hidden="true">
            {duplicatedLogos.map((logo, index) => (
              <div key={`${logo.id}-dup-${index}`} className="flex items-center justify-center h-12 px-8 md:px-16">
                <span className="text-lg md:text-2xl font-display font-bold text-gray-800 tracking-tight">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
