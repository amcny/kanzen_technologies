'use client';

import { motion } from 'motion/react';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'Understanding goals, users, and product vision to define the roadmap.',
  },
  {
    number: '02',
    title: 'Design',
    description: 'Creating high quality UX and UI systems that are both beautiful and functional.',
  },
  {
    number: '03',
    title: 'Development',
    description: 'Engineering scalable and robust applications using modern technologies.',
  },
  {
    number: '04',
    title: 'Launch & Scale',
    description: 'Deploying, optimizing, and growing the product for long-term success.',
  },
];

export function Process() {
  return (
    <section id="process" className="py-32 md:py-48 bg-primary border-y border-border-light">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl lg:text-7xl font-display font-black text-text-primary tracking-tighter mb-6 text-balance"
          >
            How We Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-text-secondary leading-relaxed"
          >
            A streamlined, transparent process designed to turn complex ideas into elegant digital realities.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-px bg-border-light -z-10" />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
