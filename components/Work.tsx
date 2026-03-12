'use client';

import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { FadeIn } from './FadeIn';

const projects = [
  {
    title: 'Financial Intelligence Hub',
    category: 'Web Application',
    description: 'An enterprise-grade analytics dashboard featuring real-time data processing and interactive visualizations.',
    image: 'https://picsum.photos/seed/fintech/800/600',
  },
  {
    title: 'MedTech AI Assistant',
    category: 'AI & Automation',
    description: 'A sophisticated diagnostic tool leveraging predictive AI models to assist healthcare professionals.',
    image: 'https://picsum.photos/seed/health/800/600',
  },
  {
    title: 'Next-Gen Retail App',
    category: 'Mobile Development',
    description: 'A frictionless mobile shopping experience featuring AI-driven product recommendations and instant checkout.',
    image: 'https://picsum.photos/seed/ecommerce/800/600',
  },
  {
    title: 'DataOps SaaS Platform',
    category: 'UI/UX Design',
    description: 'A streamlined, powerful interface designed for managing massive datasets and tracking core business metrics.',
    image: 'https://picsum.photos/seed/saas/800/600',
  },
];

export function Work() {
  return (
    <section id="work" className="py-32 md:py-48 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center mb-16 md:mb-24 gap-8">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-black text-text-primary tracking-tighter mb-6 text-balance">
                Selected Projects
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-6">
                Discover how we&apos;ve empowered innovative brands to achieve their technological goals and scale effectively.
              </p>
            </FadeIn>
          </div>
          <FadeIn delay={0.2} direction="up">
            <a
              href="#"
              className="inline-flex items-center text-accent-primary font-medium hover:text-accent-secondary transition-colors group"
            >
              Browse Full Portfolio
              <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <FadeIn key={project.title} delay={index * 0.1}>
              <div className="group cursor-pointer">
                <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden bg-primary mb-8 border border-border-light shadow-sm">
                  <Image
                    src={project.image}
                    alt={`${project.title} - ${project.category}`}
                    fill
                    referrerPolicy="no-referrer"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-text-primary/0 group-hover:bg-text-primary/10 transition-colors duration-300" />
                </div>
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-accent-primary mb-2">
                      {project.category}
                    </p>
                    <h3 className="text-2xl font-display font-bold text-text-primary mb-3 group-hover:text-accent-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed max-w-md">
                      {project.description}
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-border-light flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 bg-primary">
                    <ArrowUpRight className="w-5 h-5 text-text-primary" />
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
