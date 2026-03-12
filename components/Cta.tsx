'use client';

import { ArrowRight, Linkedin } from 'lucide-react';
import { FadeIn } from './FadeIn';

export function Cta() {
  return (
    <section id="contact" className="py-32 md:py-48 bg-primary border-y border-border-light relative overflow-clip">
      {/* Abstract Pattern Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Dot Grid */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(0, 0, 0, 0.12) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
            maskImage: 'linear-gradient(to top, black 40%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to top, black 40%, transparent 100%)',
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full bg-accent-primary/5 blur-[120px]" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
        <FadeIn>
          <h2 className="text-6xl md:text-8xl lg:text-[7.5rem] font-display font-black text-text-primary tracking-tighter leading-[0.9] mb-8 text-balance">
            Let&apos;s Build Something <br className="hidden md:block" /> Exceptional
          </h2>
        </FadeIn>
        
        <FadeIn delay={0.1}>
          <p className="text-xl md:text-2xl text-text-secondary max-w-2xl mx-auto mb-12 leading-relaxed">
            Partner with Kanzen Technologies to transform your ideas into powerful digital products.
          </p>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <div className="flex flex-col items-center">
            <a
              href="mailto:contact@kanzen.tech"
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-medium text-primary bg-accent-primary hover:bg-accent-primary/90 transition-colors rounded-full group shadow-lg shadow-accent-primary/20 mb-10"
            >
              Start Your Project
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <div className="flex flex-col items-center gap-4 text-text-secondary">
              <p className="text-lg">Or reach out directly to our founders:</p>
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-xl font-medium">
                <a 
                  href="https://www.linkedin.com/in/chaitanyapullagura/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 text-text-primary hover:text-accent-primary transition-colors group"
                >
                  <span className="bg-[#0A66C2]/10 text-[#0A66C2] p-1.5 rounded-md group-hover:bg-[#0A66C2] group-hover:text-white transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </span>
                  <span className="underline underline-offset-4 decoration-border-light group-hover:decoration-accent-primary/50">
                    Chaitanya Pullagura
                  </span>
                </a>
                <span className="hidden sm:block text-border-light">|</span>
                <a 
                  href="https://www.linkedin.com/in/irrinkiharsha/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 text-text-primary hover:text-accent-primary transition-colors group"
                >
                  <span className="bg-[#0A66C2]/10 text-[#0A66C2] p-1.5 rounded-md group-hover:bg-[#0A66C2] group-hover:text-white transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </span>
                  <span className="underline underline-offset-4 decoration-border-light group-hover:decoration-accent-primary/50">
                    Harsha Vardhan Irrinki
                  </span>
                </a>
              </div>
              <a href="mailto:contact@kanzen.tech" className="text-accent-primary hover:text-accent-secondary transition-colors font-medium mt-2">contact@kanzen.tech</a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
