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
  return (
    <section className="py-20 md:py-32 bg-primary border-b border-gray-100 overflow-clip relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/[0.02] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <FadeIn>
          <p className="text-center text-xs font-semibold text-text-secondary uppercase tracking-[0.2em] mb-16">
            Trusted by growing companies worldwide
          </p>
        </FadeIn>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 hover:opacity-100 transition-all duration-500">
          {logos.map((logo, index) => (
            <FadeIn key={logo.id} delay={index * 0.1}>
              <div className="flex items-center justify-center h-12 px-6">
                <span className="text-xl font-display font-bold text-gray-900 tracking-tight">
                  {logo.name}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
