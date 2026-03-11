'use client';

import { motion } from 'motion/react';
import { Code2, Cpu, Globe, Smartphone, PenTool, Cloud } from 'lucide-react';

const services = [
  {
    title: 'Custom Software Development',
    description: 'Bespoke software solutions tailored to your unique business needs, built for scale and performance.',
    icon: Code2,
  },
  {
    title: 'AI & Automation Solutions',
    description: 'Integrating intelligent algorithms and automation to streamline operations and unlock new capabilities.',
    icon: Cpu,
  },
  {
    title: 'Web & SaaS Development',
    description: 'High-performance web applications and scalable SaaS platforms designed for modern users.',
    icon: Globe,
  },
  {
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile experiences that engage users and drive growth.',
    icon: Smartphone,
  },
  {
    title: 'UI/UX Design',
    description: 'Human-centered design systems that create intuitive, beautiful, and accessible interfaces.',
    icon: PenTool,
  },
  {
    title: 'Cloud & DevOps',
    description: 'Robust cloud architectures and CI/CD pipelines for reliable, fast, and secure deployments.',
    icon: Cloud,
  },
];

export function Services() {
  return (
    <section id="services" className="py-32 md:py-48 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl lg:text-7xl font-display font-black text-text-primary tracking-tighter mb-6 text-balance"
          >
            Capabilities
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-text-secondary leading-relaxed"
          >
            We deliver end-to-end technology solutions, combining engineering excellence with strategic design to build products that matter.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-10 md:p-12 rounded-[2rem] bg-primary border border-border-light hover:border-border-light/80 hover:shadow-xl hover:shadow-black/5 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-6 border border-border-light group-hover:bg-accent-primary group-hover:border-accent-primary transition-colors duration-300">
                <service.icon className="w-6 h-6 text-text-primary group-hover:text-primary transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-display font-bold text-text-primary mb-3">
                {service.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
