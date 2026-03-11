'use client';

import { motion } from 'motion/react';
import { ArrowRight, Calendar, MessageCircle } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
  return (
    <section id="home" className="relative pt-40 pb-24 md:pt-56 md:pb-32 overflow-hidden bg-primary">
      {/* Abstract Pattern Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Dot Grid */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(0, 0, 0, 0.12) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
            maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
          }}
        />
        {/* Subtle Glowing Orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-accent-primary/5 blur-[120px]" />
        <div className="absolute top-[20%] right-[-10%] w-[30%] h-[40%] rounded-full bg-accent-secondary/5 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center mb-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border-light text-sm font-medium text-text-primary shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              Only 2 open slots available!
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-6xl md:text-8xl lg:text-[7.5rem] font-display font-black text-text-primary leading-[0.9] tracking-tighter mb-8 text-balance"
          >
            World-class Tech Partner, <br className="hidden md:block" /> Engineering Success.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto mb-12 leading-relaxed text-balance"
          >
            We help startups & B2B enterprises move from vision to reality, and beyond. One hand on design, the other on development.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-medium text-primary bg-text-primary hover:bg-text-primary/90 transition-colors rounded-full group shadow-xl shadow-black/10"
            >
              <Calendar className="mr-2 w-5 h-5" />
              Book a 30-Min Call
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#work"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-medium text-text-primary bg-primary hover:bg-secondary border border-border-light transition-colors rounded-full shadow-sm"
            >
              View Our Work
            </a>
          </motion.div>
        </div>

        {/* Floating Chat Testimonial Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-24 md:mt-32 relative max-w-4xl mx-auto"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20 rounded-[2.5rem] blur-2xl opacity-50" />
          <div className="relative rounded-[2rem] bg-secondary border border-border-light p-8 md:p-12 shadow-2xl shadow-black/5 flex flex-col gap-6">
            
            {/* Client Message */}
            <div className="flex items-end gap-4 max-w-[85%]">
              <div className="w-10 h-10 rounded-full bg-border-light overflow-hidden shrink-0 border border-white shadow-sm relative">
                <Image src="https://picsum.photos/seed/client1/100/100" alt="Sarah J. - CEO of FinFlow Testimonial" fill className="object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="bg-primary border border-border-light p-5 rounded-2xl rounded-bl-sm shadow-sm">
                <p className="text-text-primary font-medium leading-relaxed">
                  &quot;Kanzen built our fintech mobile app for loans and insurance, with live application tracking and a rewards system. We were close to giving up before we found them.&quot;
                </p>
                <p className="text-sm text-text-secondary mt-3 font-medium">— Sarah J., CEO of FinFlow</p>
              </div>
            </div>

            {/* Agency Reply */}
            <div className="flex items-end gap-4 max-w-[85%] self-end flex-row-reverse">
              <div className="w-10 h-10 rounded-full bg-text-primary flex items-center justify-center shrink-0 shadow-sm border border-white z-10">
                <span className="text-primary font-display font-bold text-sm">K</span>
              </div>
              <div className="bg-text-primary text-primary p-5 rounded-2xl rounded-br-sm shadow-md">
                <p className="font-medium leading-relaxed">
                  Loved building it with you. Pushing boundaries is what we do! 🚀
                </p>
                <p className="text-sm text-primary/70 mt-3 font-medium">— Kanzen Team</p>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
