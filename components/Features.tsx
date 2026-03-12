'use client';

import { Rocket, Layers, Zap, Palette, MessageCircle } from 'lucide-react';
import { FadeIn } from './FadeIn';

export function Features() {
  return (
    <section id="about" className="py-32 md:py-48 bg-primary border-y border-border-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Section - Centered Layout */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16 md:mb-24">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border-light text-xs font-bold text-text-secondary uppercase tracking-widest mb-8">
              <span className="w-2 h-2 rounded-full bg-accent-primary"></span>
              About Kanzen
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-black text-text-primary tracking-tighter leading-[1.1] mb-8 text-balance mx-auto">
              Engineering the extraordinary.
            </h2>
            <p className="text-xl text-text-secondary leading-relaxed mb-10 text-balance mx-auto max-w-2xl">
              We bridge the gap between technical mastery and strategic business vision. Our team doesn&apos;t just write code; we architect scalable digital ecosystems that drive real growth.
            </p>
            
            <div className="flex items-center justify-center gap-5 p-5 rounded-2xl bg-secondary border border-border-light shadow-sm max-w-sm mx-auto">
              <div className="w-14 h-14 rounded-full bg-primary border border-border-light flex items-center justify-center shrink-0 shadow-sm">
                <Rocket className="w-6 h-6 text-accent-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-display font-bold text-text-primary text-lg">Pushing boundaries</h4>
                <p className="text-text-secondary text-sm">Delivering excellence since day one.</p>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Bento Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            
            {/* Card 1 - Full Width */}
            <FadeIn delay={0.1} className="sm:col-span-2">
              <div className="bg-secondary rounded-[2rem] p-8 md:p-10 border border-border-light group hover:border-accent-primary/30 transition-colors h-full flex flex-col justify-between relative overflow-hidden shadow-sm hover:shadow-md">
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent-primary/5 rounded-full blur-3xl -mr-20 -mt-20 transition-opacity group-hover:opacity-100 opacity-50"></div>
                <div className="w-14 h-14 rounded-2xl bg-primary border border-border-light flex items-center justify-center mb-16 relative z-10 text-text-primary group-hover:text-accent-primary transition-colors shadow-sm">
                  <Layers className="w-6 h-6" />
                </div>
                <div className="relative z-10 max-w-lg">
                  <h4 className="text-2xl font-display font-bold text-text-primary mb-3">Future-Proof Architecture</h4>
                  <p className="text-text-secondary leading-relaxed">We build resilient systems from day one, ensuring your platform handles explosive growth without compromising performance or security.</p>
                </div>
              </div>
            </FadeIn>

            {/* Card 2 - Half Width */}
            <FadeIn delay={0.2}>
              <div className="bg-primary rounded-[2rem] p-8 border border-border-light group hover:border-accent-primary/30 transition-colors h-full flex flex-col justify-between shadow-sm hover:shadow-md">
                <div className="w-12 h-12 rounded-full bg-secondary border border-border-light flex items-center justify-center mb-12 text-text-primary group-hover:text-accent-primary transition-colors">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xl font-display font-bold text-text-primary mb-3">AI-Integrated</h4>
                  <p className="text-sm text-text-secondary leading-relaxed">Seamlessly embed machine learning capabilities to unlock operational efficiencies.</p>
                </div>
              </div>
            </FadeIn>

            {/* Card 3 - Half Width */}
            <FadeIn delay={0.3}>
              <div className="bg-primary rounded-[2rem] p-8 border border-border-light group hover:border-accent-primary/30 transition-colors h-full flex flex-col justify-between shadow-sm hover:shadow-md">
                <div className="w-12 h-12 rounded-full bg-secondary border border-border-light flex items-center justify-center mb-12 text-text-primary group-hover:text-accent-primary transition-colors">
                  <Palette className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xl font-display font-bold text-text-primary mb-3">Design-Driven</h4>
                  <p className="text-sm text-text-secondary leading-relaxed">Engineering deeply intertwined with UX principles for intuitive end products.</p>
                </div>
              </div>
            </FadeIn>

            {/* Card 4 - Full Width with Dark Theme */}
            <FadeIn delay={0.4} className="sm:col-span-2">
              <div className="bg-text-primary text-primary rounded-[2rem] p-8 md:p-10 border border-border-light group h-full flex flex-col sm:flex-row items-center justify-between gap-8 overflow-hidden relative shadow-lg">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_50%)]"></div>
                <div className="relative z-10 max-w-sm">
                  <h4 className="text-2xl font-display font-bold mb-3">Radical Transparency</h4>
                  <p className="text-primary/80 leading-relaxed">Maintain full visibility into our progress with open communication channels and collaborative sprint planning.</p>
                </div>
                <div className="relative z-10 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 group-hover:scale-110 transition-transform duration-500">
                  <MessageCircle className="w-8 h-8 text-primary" />
                </div>
              </div>
            </FadeIn>

          </div>

      </div>
    </section>
  );
}
