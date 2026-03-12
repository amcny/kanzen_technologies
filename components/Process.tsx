'use client';

import { FadeIn } from './FadeIn';

const steps = [
  {
    number: '01',
    title: 'Strategy & Alignment',
    description: 'Deep-diving into your business objectives, user needs, and market landscape to forge a clear technical roadmap.',
  },
  {
    number: '02',
    title: 'Experience Architecture',
    description: 'Crafting intuitive user journeys and striking visual interfaces that prioritize usability and engagement.',
  },
  {
    number: '03',
    title: 'Agile Engineering',
    description: 'Writing clean, maintainable code using modern tech stacks to build robust and scalable platforms.',
  },
  {
    number: '04',
    title: 'Deployment & Evolution',
    description: 'Executing seamless launches, monitoring performance, and iterating rapidly to drive continuous growth.',
  },
];

export function Process() {
  return (
    <section id="process" className="py-32 md:py-48 bg-primary border-y border-border-light">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16 md:mb-24">
          <FadeIn>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-black text-text-primary tracking-tighter mb-6 text-balance">
              Our Methodology
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
              An agile, transparent approach focused on delivering scalable and elegant digital products efficiently.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-px bg-border-light -z-10" />

          {steps.map((step, index) => (
            <FadeIn key={step.number} delay={index * 0.1} className="relative">
              <div className="w-24 h-24 rounded-full bg-primary border border-border-light flex items-center justify-center mb-8 shadow-sm">
                <span className="text-3xl font-display font-black text-accent-primary">
                  {step.number}
                </span>
              </div>
              <h3 className="text-2xl font-display font-bold text-text-primary mb-4">
                {step.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {step.description}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
