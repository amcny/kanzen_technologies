'use client';

import { FadeIn } from './FadeIn';
import { ArrowRight, Calendar } from 'lucide-react';
import { motion } from 'motion/react';

export function MiniCta() {
  return (
    <section className="py-24 md:py-32 bg-gray-50 border-y border-gray-200 relative overflow-hidden">
      {/* Premium Animated Background (Orbs + Grid) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden transform-gpu">
        {/* Glowing Orbs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.7, 0.4],
            x: [0, 40, 0],
            y: [0, -40, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-[10%] w-[50vw] h-[50vw] -translate-y-1/2 rounded-full opacity-40 will-change-transform transform-gpu"
          style={{ background: "radial-gradient(circle, rgba(147,197,253,0.3) 0%, rgba(147,197,253,0) 70%)" }}
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/2 right-[10%] w-[50vw] h-[50vw] -translate-y-1/2 rounded-full opacity-40 will-change-transform transform-gpu"
          style={{ background: "radial-gradient(circle, rgba(216,180,254,0.3) 0%, rgba(216,180,254,0) 70%)" }}
        />
        
        {/* Decorative subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      </div>

      <div className="max-w-[1000px] mx-auto px-6 md:px-12 relative z-10 text-center">
        <FadeIn>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-gray-900 to-gray-600 tracking-tighter pb-4 mb-2">
            Ready to upgrade your digital capabilities?
          </h2>
          <p className="text-gray-600 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Let&apos;s discuss how customized software solutions can streamline your operations and drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              data-cal-namespace="business-call"
              data-cal-link="kanzentechnologies/business-call"
              data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":1,"theme":"light"}'
              className="premium-glow w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-gray-900 hover:bg-gray-800 transition-colors rounded-full group shadow-xl shadow-gray-900/10"
            >
              <Calendar className="mr-2 w-5 h-5" />
              Tell us about your project
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
