'use client';

import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    title: 'FinTech Dashboard',
    category: 'Web Application',
    description: 'A comprehensive financial analytics platform with real-time data visualization.',
    image: 'https://picsum.photos/seed/fintech/800/600',
  },
  {
    title: 'Health AI Platform',
    category: 'AI & Automation',
    description: 'Intelligent diagnostic assistance tool powered by advanced machine learning models.',
    image: 'https://picsum.photos/seed/health/800/600',
  },
  {
    title: 'E-Commerce App',
    category: 'Mobile Development',
    description: 'Seamless shopping experience with personalized recommendations and fast checkout.',
    image: 'https://picsum.photos/seed/ecommerce/800/600',
  },
  {
    title: 'SaaS Analytics',
    category: 'UI/UX Design',
    description: 'Clean, intuitive interface for managing complex data sets and user metrics.',
    image: 'https://picsum.photos/seed/saas/800/600',
  },
];

export function Work() {
  return (
    <section id="work" className="py-32 md:py-48 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
          <div className="max-w-3xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl lg:text-7xl font-display font-black text-text-primary tracking-tighter mb-6 text-balance"
            >
              Featured Work
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg md:text-xl text-text-secondary leading-relaxed"
            >
              Explore some of our recent projects where we&apos;ve helped ambitious companies scale their digital presence.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a
              href="#"
              className="inline-flex items-center text-accent-primary font-medium hover:text-accent-secondary transition-colors group"
            >
              View All Projects
              <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
