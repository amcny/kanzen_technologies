'use client';

import { Code2, Cpu, Globe, Smartphone, PenTool, Cloud } from 'lucide-react';
import { FadeIn } from './FadeIn';

const services = [
  {
    title: 'Bespoke Software Engineering',
    description: 'Tailored applications engineered to solve complex challenges, ensuring high performance and limitless scalability.',
    icon: Code2,
  },
  {
    title: 'Intelligent Automation & AI',
    description: 'Leveraging cutting-edge machine learning and automated workflows to optimize your business operations.',
    icon: Cpu,
  },
  {
    title: 'Scalable Web & SaaS Platforms',
    description: 'Architecting robust cloud-native applications and SaaS products with exceptional user experiences.',
    icon: Globe,
  },
  {
    title: 'Native & Cross-Platform Mobile',
    description: 'Crafting fluid, high-performance mobile applications for iOS and Android ecosystems.',
    icon: Smartphone,
  },
  {
    title: 'Strategic UI/UX Design',
    description: 'Data-driven, user-centric design systems that elevate brand identity and product usability.',
    icon: PenTool,
  },
  {
    title: 'Cloud Infrastructure & DevOps',
    description: 'Designing resilient cloud architectures and automated pipelines for secure, rapid deployment.',
    icon: Cloud,
  },
];

export function Services() {
  return (
    <section id="services" className="py-32 md:py-48 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16 md:mb-24">
          <FadeIn>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-black text-text-primary tracking-tighter mb-6 text-balance">
              Our Expertise
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
              From concept to deployment, we provide comprehensive engineering and design services to build products that drive real business value.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <FadeIn key={service.title} delay={index * 0.1}>
              <div className="group p-10 md:p-12 rounded-[2rem] bg-primary border border-border-light hover:border-border-light/80 hover:shadow-xl hover:shadow-black/5 transition-all duration-500 hover:-translate-y-1 h-full">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-6 border border-border-light group-hover:bg-accent-primary group-hover:border-accent-primary transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-text-primary group-hover:text-primary transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-display font-bold text-text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {service.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
