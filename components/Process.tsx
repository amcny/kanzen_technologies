'use client';

import { FadeIn } from './FadeIn';
import { motion } from 'motion/react';

const steps = [
  {
    number: '01',
    title: 'Planning & Strategy',
    description: 'We start by understanding your goals, your users, and your market to create a clear plan for success.',
  },
  {
    number: '02',
    title: 'Design & User Experience',
    description: 'We design clean, easy-to-use interfaces that your customers will love.',
  },
  {
    number: '03',
    title: 'Development & Building',
    description: 'Our team writes high-quality code to build fast, secure, and reliable software.',
  },
  {
    number: '04',
    title: 'Launch & Support',
    description: 'We help you launch smoothly and provide ongoing support to keep your software running perfectly.',
  },
];

export function Process() {
  return (
    <section id="process" className="py-32 md:py-48 bg-primary border-y border-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.03)_0%,transparent_70%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
          <FadeIn>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-gray-900 to-gray-600 tracking-tighter pb-4 mb-2 text-balance">
              How We Work
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light">
              A simple, clear process to turn your ideas into reality.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent -z-10" />

          {steps.map((step, index) => (
            <FadeIn key={step.number} delay={index * 0.1} className="relative group">
              <div className="w-24 h-24 rounded-full flex items-center justify-center mb-8 relative overflow-hidden">
                {/* Background subtle circle */}
                <div className="absolute inset-0 bg-gray-50 rounded-full scale-50 group-hover:scale-100 transition-transform duration-700 ease-out" />
                
                {/* Animated SVG Circle */}
                <motion.svg 
                  className="absolute inset-0 w-full h-full -rotate-90 drop-shadow-sm" 
                  viewBox="0 0 100 100"
                >
                  <circle 
                    cx="50" cy="50" r="48" 
                    className="fill-transparent stroke-gray-200/50" 
                    strokeWidth="1" 
                  />
                  <motion.circle 
                    cx="50" cy="50" r="48" 
                    className="fill-transparent stroke-gray-900" 
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.2 }}
                  />
                </motion.svg>

                {/* Animated Text Drawing */}
                <motion.svg 
                  className="absolute inset-0 w-full h-full" 
                  viewBox="0 0 100 100"
                >
                  {/* Outline drawing */}
                  <motion.text
                    x="50%"
                    y="52%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    className="text-[28px] font-display font-black fill-transparent stroke-gray-900"
                    strokeWidth="1"
                    initial={{ strokeDasharray: "0 200" }}
                    whileInView={{ strokeDasharray: "200 0" }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 2, ease: "easeOut", delay: index * 0.2 + 0.2 }}
                  >
                    {step.number}
                  </motion.text>
                  
                  {/* Solid fill fade in */}
                  <motion.text
                    x="50%"
                    y="52%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    className="text-[28px] font-display font-black fill-gray-900"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 1, ease: "easeOut", delay: index * 0.2 + 1.2 }}
                  >
                    {step.number}
                  </motion.text>
                </motion.svg>
              </div>
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">
                {step.description}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
