'use client';

import { FadeIn } from './FadeIn';

export function Vision() {
  return (
    <section className="py-24 md:py-32 bg-white border-y border-gray-100 overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.02)_0%,transparent_100%)] pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-24 text-center lg:text-left">
          <FadeIn className="flex-1 flex flex-col items-center lg:items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-xs font-bold text-gray-600 uppercase tracking-widest mb-8">
              <span className="w-2 h-2 rounded-full bg-gray-900 animate-pulse"></span>
              Our Vision
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-gray-900 to-gray-600 tracking-tighter pb-2 text-balance">
              Building for India&apos;s Evolving Ecosystem
            </h2>
          </FadeIn>
          <FadeIn delay={0.1} className="flex-1 lg:max-w-2xl">
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light mb-8 text-balance mx-auto lg:mx-0">
              We believe in locally driven innovation. Our goal is to build digital platforms that solve real-world operational bottlenecks for fast-growing Indian enterprises, particularly in Logistics, EdTech, Healthcare, and SaaS.
            </p>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light text-balance mx-auto lg:mx-0">
              By deeply understanding the technical nuances of India&apos;s ecosystem—from mobile-first consumer habits to complex regulatory logistics—we engineer custom software that automates workflows and scales reliably.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
