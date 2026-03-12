'use client';

import { Rocket, Layers, Zap, Palette, MessageCircle } from 'lucide-react';
import { FadeIn } from './FadeIn';

export function Features() {
  return (
    <section id="about" className="py-32 md:py-48 bg-primary border-y border-gray-100 overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.03)_0%,transparent_100%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Section - Centered Layout */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16 md:mb-24">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-xs font-bold text-gray-600 uppercase tracking-widest mb-8">
              <span className="w-2 h-2 rounded-full bg-gray-900 animate-pulse"></span>
              About Kanzen
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-gray-900 to-gray-600 tracking-tighter leading-[1.1] pb-4 mb-4 text-balance mx-auto">
              The pursuit of perfection.
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-10 text-balance mx-auto max-w-2xl font-light">
              In Japanese, <strong>Kanzen</strong> means completeness, perfection, and continuous improvement. We embody this philosophy by bridging the gap between technical mastery and strategic business vision to build software that drives real growth.
            </p>
            
            <div className="flex items-center justify-center gap-5 p-5 rounded-2xl glass-panel max-w-sm mx-auto">
              <div className="w-14 h-14 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center shrink-0">
                <Rocket className="w-6 h-6 text-gray-900" />
              </div>
              <div className="text-left">
                <h4 className="font-display font-bold text-gray-900 text-lg">Always moving forward</h4>
                <p className="text-gray-500 text-sm">Doing great work from the start.</p>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Bento Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            
            {/* Card 1 - Full Width */}
            <FadeIn delay={0.1} className="sm:col-span-2">
              <div className="glass-panel bg-white/60 rounded-[2rem] p-8 md:p-10 group hover:bg-white/80 transition-colors h-full flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-black/5 rounded-full blur-3xl -mr-20 -mt-20 transition-opacity group-hover:opacity-100 opacity-50"></div>
                <div className="w-14 h-14 rounded-2xl bg-gray-100 border border-gray-200 flex items-center justify-center mb-16 relative z-10 text-gray-900 group-hover:scale-110 transition-transform">
                  <Layers className="w-6 h-6" />
                </div>
                <div className="relative z-10 max-w-lg">
                  <h4 className="text-2xl font-display font-bold text-gray-900 mb-3">Built to Last</h4>
                  <p className="text-gray-600 leading-relaxed font-light">We build software that can handle more users and data as your business grows, without slowing down.</p>
                </div>
              </div>
            </FadeIn>

            {/* Card 2 - Half Width */}
            <FadeIn delay={0.2}>
              <div className="glass-panel bg-white/60 rounded-[2rem] p-8 group hover:bg-white/80 transition-colors h-full flex flex-col justify-between">
                <div className="w-12 h-12 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center mb-12 text-gray-900 group-hover:scale-110 transition-transform">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xl font-display font-bold text-gray-900 mb-3">Smart Features</h4>
                  <p className="text-sm text-gray-600 leading-relaxed font-light">We add artificial intelligence to your software to help automate tasks and save time.</p>
                </div>
              </div>
            </FadeIn>

            {/* Card 3 - Half Width */}
            <FadeIn delay={0.3}>
              <div className="glass-panel bg-white/60 rounded-[2rem] p-8 group hover:bg-white/80 transition-colors h-full flex flex-col justify-between">
                <div className="w-12 h-12 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center mb-12 text-gray-900 group-hover:scale-110 transition-transform">
                  <Palette className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xl font-display font-bold text-gray-900 mb-3">Focus on Design</h4>
                  <p className="text-sm text-gray-600 leading-relaxed font-light">We make sure everything we build looks great and is easy for people to use.</p>
                </div>
              </div>
            </FadeIn>

            {/* Card 4 - Full Width with Dark Theme (Inverted) */}
            <FadeIn delay={0.4} className="sm:col-span-2">
              <div className="bg-gray-900 text-white rounded-[2rem] p-8 md:p-10 border border-gray-800 group h-full flex flex-col sm:flex-row items-center justify-between gap-8 overflow-hidden relative shadow-2xl">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05),transparent_50%)]"></div>
                <div className="relative z-10 max-w-sm">
                  <h4 className="text-2xl font-display font-bold mb-3">Clear Communication</h4>
                  <p className="text-white/70 leading-relaxed font-light">We keep you in the loop every step of the way, so you always know what we are working on.</p>
                </div>
                <div className="relative z-10 w-16 h-16 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20 group-hover:scale-110 transition-transform duration-500">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
              </div>
            </FadeIn>

          </div>

      </div>
    </section>
  );
}
