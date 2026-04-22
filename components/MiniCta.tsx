'use client';

import { FadeIn } from './FadeIn';
import { ArrowRight, Calendar } from 'lucide-react';
import Link from 'next/link';

export function MiniCta() {
  return (
    <section className="py-20 bg-gray-900 overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)] pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
            Ready to upgrade your digital capabilities?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how customized software solutions can streamline your operations and drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              data-cal-namespace="business-call"
              data-cal-link="kanzentechnologies/business-call"
              data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":1,"theme":"light"}'
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-medium text-gray-900 bg-white hover:bg-gray-100 transition-colors rounded-full group"
            >
              <Calendar className="mr-2 w-5 h-5" />
              Book a Strategy Call
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
