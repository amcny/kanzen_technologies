'use client';

import { Mail, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import { FadeIn } from './FadeIn';

export function Cta() {
  return (
    <section id="contact" className="py-32 md:py-48 bg-secondary border-y border-border-light">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <FadeIn>
          <h2 className="text-5xl md:text-7xl font-display font-black text-text-primary tracking-tighter mb-6">
            Let&apos;s Collaborate
          </h2>
        </FadeIn>
        
        <FadeIn delay={0.1}>
          <p className="text-xl text-text-secondary leading-relaxed mb-12 max-w-2xl mx-auto">
            Reach out and let&apos;s explore how we can bring your ideas to life. Whether you&apos;re ready to begin or just have questions, we are happy to assist you.
          </p>
        </FadeIn>
        
        <FadeIn delay={0.2} className="flex flex-col items-center justify-center gap-8">
          <a 
            href="mailto:hello@example.com" 
            className="group inline-flex items-center gap-4 px-8 py-5 md:px-10 md:py-6 rounded-full bg-text-primary text-primary hover:bg-accent-primary transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            <Mail className="w-6 h-6" />
            <span className="text-lg md:text-xl font-bold tracking-wide">hello@example.com</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </a>

          <div className="flex items-center justify-center gap-4 pt-4">
            <a href="#" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-primary border border-border-light flex items-center justify-center text-text-primary hover:bg-accent-primary hover:text-white hover:border-accent-primary transition-all shadow-sm hover:-translate-y-1">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-primary border border-border-light flex items-center justify-center text-text-primary hover:bg-accent-primary hover:text-white hover:border-accent-primary transition-all shadow-sm hover:-translate-y-1">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
