'use client';

import { Mail, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import { FadeIn } from './FadeIn';

export function Cta() {
  return (
    <section id="contact" className="py-32 md:py-48 bg-white border-y border-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.03)_0%,transparent_100%)] pointer-events-none" />
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
        <FadeIn>
          <h2 className="text-5xl md:text-7xl font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-gray-900 to-gray-600 tracking-tighter pb-4 mb-2">
            Let&apos;s Work Together
          </h2>
        </FadeIn>
        
        <FadeIn delay={0.1}>
          <p className="text-xl text-gray-600 leading-relaxed mb-12 max-w-2xl mx-auto font-light">
            Send us a message to talk about your project. Whether you are ready to start or just have questions, we are here to help.
          </p>
        </FadeIn>
        
        <FadeIn delay={0.2} className="flex flex-col items-center justify-center gap-8">
          <a 
            href="mailto:contact@kanzentech.com" 
            className="premium-glow group inline-flex items-center gap-4 px-8 py-5 md:px-10 md:py-6 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition-all duration-300 shadow-xl hover:shadow-black/10 hover:-translate-y-1"
          >
            <Mail className="w-6 h-6" />
            <span className="text-lg md:text-xl font-bold tracking-wide">contact@kanzentech.com</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </a>

          <div className="flex items-center justify-center gap-4 pt-4">
            <a href="#" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full glass-panel flex items-center justify-center text-gray-900 hover:bg-gray-50 hover:border-gray-300 transition-all hover:-translate-y-1 shadow-sm">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full glass-panel flex items-center justify-center text-gray-900 hover:bg-gray-50 hover:border-gray-300 transition-all hover:-translate-y-1 shadow-sm">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
