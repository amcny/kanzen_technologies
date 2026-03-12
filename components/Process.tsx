'use client';

import { FadeIn } from './FadeIn';

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
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-gray-900 to-gray-600 tracking-tighter pb-4 mb-2 text-balance">
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
              <div className="w-24 h-24 rounded-full glass-panel flex items-center justify-center mb-8 relative overflow-hidden transition-transform duration-500 group-hover:scale-110 group-hover:border-gray-300">
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors duration-500" />
                <span className="text-3xl font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-gray-900 to-gray-500 relative z-10">
                  {step.number}
                </span>
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
