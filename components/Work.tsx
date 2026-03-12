'use client';

import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { FadeIn } from './FadeIn';

const projects = [
  {
    title: 'Financial Dashboard',
    category: 'Web Application',
    description: 'A secure dashboard that helps businesses track their money and make better decisions.',
    image: 'https://picsum.photos/seed/fintech/800/600',
  },
  {
    title: 'Healthcare AI Tool',
    category: 'AI & Automation',
    description: 'A smart tool that helps doctors diagnose patients faster and more accurately.',
    image: 'https://picsum.photos/seed/health/800/600',
  },
  {
    title: 'Modern Shopping App',
    category: 'Mobile Development',
    description: 'A mobile app that makes buying products quick and easy, with smart recommendations.',
    image: 'https://picsum.photos/seed/ecommerce/800/600',
  },
  {
    title: 'Data Management Platform',
    category: 'UI/UX Design',
    description: 'An easy-to-use platform for organizing large amounts of business data.',
    image: 'https://picsum.photos/seed/saas/800/600',
  },
];

export function Work() {
  return (
    <section id="work" className="py-32 md:py-48 bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(0,0,0,0.03)_0%,transparent_100%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center mb-16 md:mb-24 gap-8">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-gray-900 to-gray-600 tracking-tighter pb-4 mb-2 text-balance">
                Our Recent Work
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6 font-light">
                See how we&apos;ve helped other businesses solve problems and grow with custom software.
              </p>
            </FadeIn>
          </div>
          <FadeIn delay={0.2} direction="up">
            <a
              href="#"
              className="inline-flex items-center text-gray-900 font-medium hover:text-gray-600 transition-colors group"
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
                <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden bg-gray-100 mb-8 border border-gray-200 shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Image
                    src={project.image}
                    alt={`${project.title} - ${project.category}`}
                    fill
                    referrerPolicy="no-referrer"
                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  />
                </div>
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500 mb-2 uppercase tracking-wider">
                      {project.category}
                    </p>
                    <h3 className="text-2xl font-display font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed max-w-md font-light">
                      {project.description}
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 bg-white/60 backdrop-blur-sm shadow-sm">
                    <ArrowUpRight className="w-5 h-5 text-gray-900" />
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
