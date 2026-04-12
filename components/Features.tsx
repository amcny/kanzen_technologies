'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useAnimation, useInView } from 'motion/react';
import { Layers, Zap, Palette, MessageCircle, MousePointer2, Code2, Cpu, Sparkles, Move } from 'lucide-react';
import { FadeIn } from './FadeIn';

const ScalabilityIllustration = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="relative w-full h-64 bg-gray-50/50 rounded-2xl border border-gray-100 overflow-hidden flex items-center justify-center p-6 group mt-8">
      <div className="absolute inset-0 bg-gradient-to-t from-blue-50/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="grid grid-cols-5 gap-2 sm:gap-3 w-full max-w-[240px] relative z-10">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            onHoverStart={() => setHoveredIndex(i)}
            onHoverEnd={() => setHoveredIndex(null)}
            animate={{
              scale: hoveredIndex === i ? 1.5 : hoveredIndex !== null && (Math.abs((hoveredIndex % 5) - (i % 5)) <= 1 && Math.abs(Math.floor(hoveredIndex / 5) - Math.floor(i / 5)) <= 1) ? 1.2 : 1,
              backgroundColor: hoveredIndex === i ? "#3b82f6" : hoveredIndex !== null && (Math.abs((hoveredIndex % 5) - (i % 5)) <= 1 && Math.abs(Math.floor(hoveredIndex / 5) - Math.floor(i / 5)) <= 1) ? "#93c5fd" : "#dbeafe",
            }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="aspect-square rounded-lg bg-blue-100 cursor-pointer border border-blue-200/50 shadow-sm"
          />
        ))}
      </div>
      
      <div className="absolute bottom-4 left-0 w-full text-center text-xs font-medium text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Hover to expand network
      </div>
    </div>
  );
};

const AiIllustration = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full h-64 bg-gray-50/50 rounded-2xl border border-gray-100 overflow-hidden flex items-center justify-center group cursor-crosshair mt-8"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.05)_0%,transparent_100%)]" />
      
      {/* Orb following mouse */}
      <motion.div
        animate={{
          x: mousePosition.x - 100,
          y: mousePosition.y - 100,
        }}
        transition={{ type: "spring", damping: 20, stiffness: 100, mass: 0.5 }}
        className="absolute top-0 left-0 w-[200px] h-[200px] bg-purple-400/20 rounded-full blur-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />

      {/* Central Core */}
      <motion.div 
        animate={{ 
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="w-20 h-20 bg-white rounded-2xl relative z-10 flex items-center justify-center border border-purple-200 shadow-lg shadow-purple-500/10 backdrop-blur-sm"
      >
        <Sparkles className="w-8 h-8 text-purple-600" />
      </motion.div>

      {/* Floating particles */}
      {[...Array(15)].map((_, i) => {
        // Use deterministic values based on index to avoid hydration mismatch
        const randomY = -((i * 7) % 60) - 30;
        const randomX = ((i * 13) % 60) - 30;
        const randomScale = ((i * 17) % 10) / 10 + 0.5;
        const randomDuration = ((i * 19) % 20) / 10 + 2;
        const randomDelay = ((i * 23) % 20) / 10;
        const leftPos = 30 + ((i * 29) % 40);

        return (
          <motion.div
            key={i}
            animate={{
              y: [0, randomY],
              x: [0, randomX],
              opacity: [0, 1, 0],
              scale: [0, randomScale, 0]
            }}
            transition={{
              duration: randomDuration,
              repeat: Infinity,
              delay: randomDelay,
              ease: "easeInOut"
            }}
            className="absolute bottom-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full"
            style={{ left: `${leftPos}%` }}
          />
        );
      })}
      
      <div className="absolute bottom-4 left-0 w-full text-center text-xs font-medium text-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Move mouse to guide AI
      </div>
    </div>
  );
};

const DesignIllustration = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="relative w-full h-64 bg-gray-50/50 rounded-2xl border border-gray-100 overflow-hidden flex items-center justify-center group mt-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(236,72,153,0.05)_0%,transparent_70%)] group-hover:bg-[radial-gradient(circle_at_top_right,rgba(236,72,153,0.1)_0%,transparent_70%)] transition-colors duration-500" />
      
      <div className="absolute top-4 left-4 text-xs font-medium text-pink-500 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Move className="w-3 h-3" /> Drag elements
      </div>

      {/* Draggable Window */}
      <motion.div 
        drag
        dragConstraints={containerRef}
        whileDrag={{ scale: 1.05, cursor: "grabbing", boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
        className="absolute top-1/4 left-[15%] w-36 h-28 bg-white rounded-xl shadow-lg border border-gray-100 p-3 cursor-grab z-20"
      >
        <div className="flex gap-1.5 mb-4">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
        </div>
        <div className="w-full h-2.5 bg-gray-100 rounded-full mb-2.5" />
        <div className="w-3/4 h-2.5 bg-gray-100 rounded-full mb-2.5" />
        <div className="w-1/2 h-2.5 bg-gray-100 rounded-full" />
      </motion.div>

      {/* Draggable Button */}
      <motion.div
        drag
        dragConstraints={containerRef}
        whileDrag={{ scale: 1.1, cursor: "grabbing", boxShadow: "0 20px 25px -5px rgb(236 72 153 / 0.3)" }}
        className="absolute bottom-[20%] right-[15%] px-5 py-2.5 bg-pink-500 text-white rounded-xl shadow-lg shadow-pink-500/20 cursor-grab z-20 text-sm font-medium flex items-center gap-2"
      >
        <MousePointer2 className="w-4 h-4" />
        Button
      </motion.div>
      
      {/* Draggable Image Placeholder */}
      <motion.div
        drag
        dragConstraints={containerRef}
        whileDrag={{ scale: 1.05, cursor: "grabbing" }}
        className="absolute top-[20%] right-[20%] w-16 h-16 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full shadow-md border-2 border-white cursor-grab z-10"
      />
    </div>
  );
};

const CommunicationIllustration = () => {
  const [messages, setMessages] = useState<{id: number, x: number, y: number, emoji: string}[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleClick = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const emojis = ['👍', '❤️', '✨', '🚀', '🔥'];
      const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
      
      const newMessage = { id: Date.now(), x, y, emoji: randomEmoji };
      setMessages(prev => [...prev, newMessage]);
      
      setTimeout(() => {
        setMessages(prev => prev.filter(m => m.id !== newMessage.id));
      }, 2000);
    }
  };

  return (
    <div 
      ref={containerRef}
      onClick={handleClick}
      className="relative w-full h-64 bg-gray-50/50 rounded-2xl overflow-hidden flex flex-col justify-center p-6 gap-5 group cursor-pointer border border-gray-100 mt-8"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="absolute top-4 left-0 w-full text-center text-xs font-medium text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Click anywhere to react
      </div>

      <motion.div 
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="self-start bg-white border border-gray-200 text-gray-700 text-sm py-3 px-5 rounded-2xl rounded-tl-sm max-w-[85%] relative z-10 shadow-sm"
      >
        Real-time sync is amazing! 🚀
      </motion.div>
      
      <motion.div 
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="self-end bg-gray-900 text-white text-sm py-3 px-5 rounded-2xl rounded-tr-sm max-w-[85%] relative z-10 shadow-md"
      >
        Everything updates instantly.
      </motion.div>

      {/* Spawned reactions */}
      {messages.map(msg => (
        <motion.div
          key={msg.id}
          initial={{ opacity: 0, scale: 0, x: msg.x - 20, y: msg.y - 20 }}
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5, 1], y: msg.y - 80 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute pointer-events-none z-20 text-3xl"
        >
          {msg.emoji}
        </motion.div>
      ))}
    </div>
  );
};

export function Features() {
  return (
    <section id="about" className="py-32 md:py-48 bg-white border-y border-gray-100 overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.02)_0%,transparent_100%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20 md:mb-32">
          <FadeIn>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-200 text-xs font-bold text-gray-600 uppercase tracking-widest mb-8 cursor-default"
            >
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              About Kanzen
            </motion.div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-gray-900 to-gray-600 tracking-tighter leading-[1.1] pb-4 mb-6 text-balance mx-auto">
              The pursuit of perfection.
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-12 text-balance mx-auto max-w-2xl font-light">
              The word <strong>Kanzen</strong> (完全) is Japanese for perfection or completeness. We believe in writing code that is not just functional, but crafted with precision, care, and a deep focus on quality.
            </p>
            
            <motion.div 
              whileHover={{ y: -5 }}
              className="flex items-center justify-center gap-5 p-6 rounded-3xl bg-gray-50 border border-gray-100 max-w-sm mx-auto hover:shadow-lg transition-all cursor-default"
            >
              <div className="w-16 h-16 rounded-2xl bg-white border border-gray-200 flex items-center justify-center shrink-0 shadow-sm relative overflow-hidden group">
                <motion.div 
                  className="absolute inset-0 bg-blue-100 origin-bottom"
                  initial={{ scaleY: 0 }}
                  whileHover={{ scaleY: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <Code2 className="w-7 h-7 text-gray-900 relative z-10 group-hover:text-blue-600 transition-colors" />
              </div>
              <div className="text-left">
                <h4 className="font-display font-bold text-gray-900 text-lg">Crafted with care</h4>
                <p className="text-gray-500 text-sm">Doing great work from the start.</p>
              </div>
            </motion.div>
          </FadeIn>
        </div>

        {/* Bento Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
            
            {/* Card 1 - Scalability */}
            <FadeIn delay={0.1} className="md:col-span-1">
              <div className="bg-white border border-gray-200/80 rounded-[2.5rem] p-8 md:p-10 group hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-200 transition-all duration-500 h-full flex flex-col justify-between relative overflow-hidden">
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                    <Layers className="w-6 h-6" />
                  </div>
                  <h4 className="text-2xl font-display font-bold text-gray-900 mb-3">Built to Scale</h4>
                  <p className="text-gray-600 leading-relaxed font-light">We build software that can handle more users and data as your business grows, without slowing down or breaking.</p>
                </div>
                <ScalabilityIllustration />
              </div>
            </FadeIn>

            {/* Card 2 - AI */}
            <FadeIn delay={0.2} className="md:col-span-1">
              <div className="bg-white border border-gray-200/80 rounded-[2.5rem] p-8 md:p-10 group hover:shadow-2xl hover:shadow-purple-500/10 hover:border-purple-200 transition-all duration-500 h-full flex flex-col justify-between relative overflow-hidden">
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center mb-6 text-purple-600 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h4 className="text-2xl font-display font-bold text-gray-900 mb-3">Smart Features</h4>
                  <p className="text-gray-600 leading-relaxed font-light">We integrate artificial intelligence to automate complex workflows, saving your team hundreds of hours.</p>
                </div>
                <AiIllustration />
              </div>
            </FadeIn>

            {/* Card 3 - Design */}
            <FadeIn delay={0.3} className="md:col-span-1">
              <div className="bg-white border border-gray-200/80 rounded-[2.5rem] p-8 md:p-10 group hover:shadow-2xl hover:shadow-pink-500/10 hover:border-pink-200 transition-all duration-500 h-full flex flex-col justify-between relative overflow-hidden">
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-pink-50 border border-pink-100 flex items-center justify-center mb-6 text-pink-600 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                    <Palette className="w-6 h-6" />
                  </div>
                  <h4 className="text-2xl font-display font-bold text-gray-900 mb-3">Obsessive Design</h4>
                  <p className="text-gray-600 leading-relaxed font-light">We obsess over every pixel and interaction to ensure your product is not just usable, but delightful.</p>
                </div>
                <DesignIllustration />
              </div>
            </FadeIn>

            {/* Card 4 - Communication */}
            <FadeIn delay={0.4} className="md:col-span-1">
              <div className="bg-white border border-gray-200/80 rounded-[2.5rem] p-8 md:p-10 group hover:shadow-2xl hover:shadow-gray-900/10 hover:border-gray-300 transition-all duration-500 h-full flex flex-col justify-between relative overflow-hidden">
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gray-100 border border-gray-200 flex items-center justify-center mb-6 text-gray-900 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <h4 className="text-2xl font-display font-bold text-gray-900 mb-3">Clear Communication</h4>
                  <p className="text-gray-600 leading-relaxed font-light">No black boxes. We keep you in the loop every step of the way with transparent updates and agile delivery.</p>
                </div>
                <CommunicationIllustration />
              </div>
            </FadeIn>

          </div>

      </div>
    </section>
  );
}
