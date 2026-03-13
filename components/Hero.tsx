"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Calendar, Sparkles } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLenis } from "lenis/react";

export function Hero() {
  const pathname = usePathname();
  const lenis = useLenis();

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (href.startsWith("/#") && pathname === "/") {
      e.preventDefault();
      const targetId = href.replace("/#", "");
      const element = document.getElementById(targetId);
      if (element) {
        if (lenis) {
          lenis.scrollTo(element, { offset: -80 });
        } else {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
      window.history.pushState(null, "", href);
    }
  };

  return (
    <section
      id="home"
      className="relative pt-40 pb-24 md:pt-56 md:pb-32 overflow-clip bg-primary"
    >
      {/* Premium Animated Background */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Glowing Orbs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(229,231,235,1) 0%, rgba(229,231,235,0) 70%)", transform: "translateZ(0)" }}
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(209,213,219,1) 0%, rgba(209,213,219,0) 70%)", transform: "translateZ(0)" }}
        />
        
        {/* Subtle Grid */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #000000 1px, transparent 1px), linear-gradient(to bottom, #000000 1px, transparent 1px)",
            backgroundSize: "4rem 4rem",
            maskImage:
              "radial-gradient(circle at center, black 40%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(circle at center, black 40%, transparent 80%)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center mb-10"
          >
            <div className="glass-panel inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-gray-900 hover:bg-black/5 transition-colors cursor-pointer">
              <Sparkles className="w-4 h-4 text-gray-600" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
                Accepting new projects for Q3
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl lg:text-[7rem] font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-gray-900 via-gray-800 to-gray-500 leading-[1.05] tracking-tighter pb-4 mb-4 text-balance"
          >
            Building software that <br className="hidden lg:block" />{" "}
            powers your business.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed text-balance font-light"
          >
            We partner with growing companies to create digital products that are easy to use, reliable, and designed to help you succeed.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/#contact"
              onClick={(e) => handleNavClick(e, "/#contact")}
              className="premium-glow w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-gray-900 hover:bg-gray-800 transition-colors rounded-full group"
            >
              <Calendar className="mr-2 w-5 h-5" />
              Schedule a Strategy Call
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/#work"
              onClick={(e) => handleNavClick(e, "/#work")}
              className="glass-panel w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-medium text-gray-900 hover:bg-black/5 transition-colors rounded-full"
            >
              Explore Our Portfolio
            </Link>
          </motion.div>
        </div>

        {/* Floating Code/Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-24 md:mt-32 relative max-w-5xl mx-auto perspective-1000"
        >
          <div className="absolute -inset-1 bg-gradient-to-b from-black/10 to-transparent rounded-t-[2.5rem] blur-xl opacity-50" />
          <div className="relative rounded-t-[2rem] glass-panel border-b-0 p-2 md:p-4 overflow-hidden transform rotate-x-12 translate-y-10 scale-105 origin-bottom bg-white/80">
            <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-transparent pointer-events-none" />
            
            {/* Mockup Header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-200">
              <div className="w-3 h-3 rounded-full bg-gray-300" />
              <div className="w-3 h-3 rounded-full bg-gray-300" />
              <div className="w-3 h-3 rounded-full bg-gray-300" />
            </div>
            
            {/* Mockup Content */}
            <div className="p-6 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-6 opacity-80">
              <div className="col-span-2 space-y-4">
                <div className="h-8 w-1/3 bg-gray-200 rounded-lg animate-pulse" />
                <div className="h-32 w-full bg-gray-100 rounded-xl border border-gray-200" />
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-24 bg-gray-100 rounded-xl border border-gray-200" />
                  <div className="h-24 bg-gray-100 rounded-xl border border-gray-200" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="h-full w-full bg-gray-100 rounded-xl border border-gray-200 p-4 flex flex-col gap-3">
                  <div className="h-4 w-1/2 bg-gray-200 rounded" />
                  <div className="h-2 w-full bg-gray-200 rounded" />
                  <div className="h-2 w-4/5 bg-gray-200 rounded" />
                  <div className="h-2 w-full bg-gray-200 rounded" />
                  <div className="mt-auto h-10 w-full bg-gray-200 rounded-lg" />
                </div>
              </div>
            </div>
            
            {/* Bottom Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
