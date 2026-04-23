'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'motion/react';
import { FadeIn } from './FadeIn';
import { Shield, Zap, HeartHandshake } from 'lucide-react';

const pillars = [
  {
    icon: Zap,
    title: "Agile Execution",
    description: "We don't do bloatware. Our engineers ship usable, high-performance features in rapid two-week sprints so your team can test the market and see faster ROI."
  },
  {
    icon: Shield,
    title: "India-Scale Architecture",
    description: "Built for massive concurrency. We design backend systems capable of handling the intense volume and varied network conditions of the Indian market without breaking a sweat."
  },
  {
    icon: HeartHandshake,
    title: "Strategic Partnership",
    description: "Consider us your virtual CTO. We provide actionable technical guidance, helping you avoid costly architecture traps so you can focus strictly on growing your revenue."
  }
];

function InteractivePillar({ pillar, index }: { pillar: typeof pillars[0], index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  
  // Real-time mouse tracking for parallax & 3D tilt (Desktop only)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    // Calculate distance from center, scale it down for a subtle effect
    mouseX.set((e.clientX - centerX) / 20);
    mouseY.set((e.clientY - centerY) / 20);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Add buttery smooth spring physics to the raw mouse values
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Glass card 3D tilt (rotates slightly based on mouse position on desktop)
  const cardRotateX = useTransform(smoothY, (v) => v * -1);
  const cardRotateY = useTransform(smoothX, (v) => v * 1);

  // Scroll visibility for the row itself
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "center center"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 1], [0.2, 1]);
  const yShift = useTransform(scrollYProgress, [0, 1], [60, 0]);

  return (
    <motion.div 
      ref={ref}
      style={{ opacity, y: yShift }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative py-12 lg:py-24 border-t border-gray-200 lg:border-t-0"
    >
      {/* Giant Background Number with Constant Floating Animation */}
      <motion.div 
        animate={{ 
          y: [-15, 15, -15],
          opacity: [0.4, 0.7, 0.4] 
        }}
        transition={{ 
          duration: 6 + index, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute right-0 md:right-10 top-1/2 -translate-y-1/2 text-[160px] md:text-[220px] lg:text-[280px] leading-none font-display font-black text-gray-200/50 group-hover:text-blue-100 transition-colors duration-700 pointer-events-none select-none z-0 tracking-tighter"
      >
        0{index + 1}
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative z-10 items-center perspective-[1200px]">
        
        {/* Left Column: Icon and Title */}
        <div className="lg:col-span-7 flex flex-col sm:flex-row items-center sm:items-start lg:items-center gap-6 lg:gap-12 text-center sm:text-left">
          <div className="shrink-0 relative">
            {/* Hover indicator dot (Desktop) */}
            <div className="hidden lg:flex w-5 h-5 rounded-full bg-white border-4 border-gray-300 absolute -left-[5.65rem] top-1/2 -translate-y-1/2 z-20 group-hover:scale-150 group-hover:border-blue-600 transition-all duration-500 ease-out" />
            
            {/* Icon Box with Constant Gentle Levitation */}
            <motion.div 
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 4 + index * 0.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-20 h-20 md:w-24 md:h-24 bg-gray-900 text-white rounded-[2rem] flex items-center justify-center transform group-hover:rotate-[15deg] group-hover:scale-110 group-hover:bg-blue-600 group-hover:shadow-[0_0_40px_rgba(37,99,235,0.4)] transition-all duration-500 ease-out mx-auto sm:mx-0 shadow-lg"
            >
              <pillar.icon className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1.5} />
            </motion.div>
          </div>
          
          <div className="flex-1 w-full relative z-10">
            <div className="flex items-center justify-center sm:justify-start gap-4 mb-2 lg:hidden">
              <span className="text-sm font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
                Phase 0{index + 1}
              </span>
            </div>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 group-hover:text-blue-900 transition-colors duration-300 text-balance lg:drop-shadow-sm">
              {pillar.title}
            </h3>
          </div>
        </div>

        {/* Right Column: Constant Floating Glass Description */}
        <div className="lg:col-span-5 relative z-20">
          <motion.div 
            animate={{ y: [-6, 6, -6] }}
            transition={{ duration: 5 + index * 0.2, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
            style={{ rotateX: cardRotateX, rotateY: cardRotateY, transformStyle: "preserve-3d" }}
            className="bg-white/90 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] transition-shadow duration-500 ease-out relative overflow-hidden text-center sm:text-left mx-auto max-w-xl lg:max-w-none"
          >
            {/* Animated blue left edge */}
            <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-600 transform origin-bottom translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out hidden sm:block" />
            
            {/* Content requires a slight Z translation to "pop" off the card when tilted */}
            <div className="transform-gpu translate-z-10">
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light">
                {pillar.description}
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </motion.div>
  );
}

export function WhyKanzen() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Connect the vertical line's height to scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });
  
  // Smooth out the line drawing
  const lineScaleY = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1]), {
    stiffness: 80,
    damping: 30
  });

  return (
    <section className="py-24 md:py-32 bg-gray-50 relative border-y border-gray-200 overflow-hidden">
       
       {/* Premium Animated Background (Orbs + Grid) */}
       <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
         {/* Glowing Orbs */}
         <motion.div 
           animate={{ 
             scale: [1, 1.2, 1],
             opacity: [0.3, 0.6, 0.3],
             x: [0, 40, 0],
             y: [0, -40, 0],
           }}
           transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
           className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full mix-blend-multiply filter blur-3xl opacity-50"
           style={{ background: "radial-gradient(circle, rgba(147,197,253,0.4) 0%, rgba(147,197,253,0) 70%)" }}
         />
         <motion.div 
           animate={{ 
             scale: [1, 1.5, 1],
             opacity: [0.2, 0.5, 0.2],
             x: [0, -30, 0],
             y: [0, 30, 0],
           }}
           transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
           className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full mix-blend-multiply filter blur-3xl opacity-50"
           style={{ background: "radial-gradient(circle, rgba(216,180,254,0.3) 0%, rgba(216,180,254,0) 70%)" }}
         />
         
         {/* Decorative subtle grid background */}
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
       </div>

       <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10" ref={containerRef}>
         
         <div className="text-center md:text-left mb-20 md:mb-32 flex flex-col md:flex-row md:items-end justify-between gap-8">
           <div className="max-w-2xl relative">
             <div className="absolute -top-10 -left-10 w-20 h-20 bg-blue-100/50 rounded-full blur-2xl pointer-events-none" />
             <FadeIn>
               <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-gray-900 tracking-tighter pb-2 leading-tight">
                 Why Partner<br className="hidden md:block"/> With Kanzen?
               </h2>
             </FadeIn>
           </div>
           <div className="max-w-md pb-3 text-center md:text-left mx-auto md:mx-0">
             <FadeIn delay={0.1}>
               <p className="text-lg md:text-xl text-gray-500 leading-relaxed font-light">
                 We don't just write code; we build resilient technical foundations that drive enterprise value.
               </p>
             </FadeIn>
           </div>
         </div>
         
         <div className="w-full flex flex-col relative">
           
           {/* Static Base Line (Gray) */}
           <div className="hidden lg:block absolute left-[5rem] top-[4rem] bottom-[4rem] w-[2px] bg-gray-200/50" />
           
           {/* Real-time Scroll Drawing Line (Blue) */}
           <motion.div 
             style={{ scaleY: lineScaleY, transformOrigin: 'top' }}
             className="hidden lg:block absolute left-[5rem] top-[4rem] bottom-[4rem] w-[2px] bg-gradient-to-b from-blue-400 via-blue-600 to-blue-400 z-10 shadow-[0_0_8px_rgba(37,99,235,0.5)]" 
           />

           {pillars.map((pillar, index) => (
             <InteractivePillar key={pillar.title} pillar={pillar} index={index} />
           ))}
         </div>
         
       </div>
    </section>
  );
}
