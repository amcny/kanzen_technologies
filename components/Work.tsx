'use client';

import { useRef, useState, useEffect } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight, MoveHorizontal } from 'lucide-react';
import Image from 'next/image';
import { FadeIn } from './FadeIn';
import { shimmer, toBase64 } from '@/lib/utils';

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
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('resize', handleScroll);
    return () => window.removeEventListener('resize', handleScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const { clientWidth } = scrollContainerRef.current;
    const scrollAmount = direction === 'left' ? -clientWidth / 1.5 : clientWidth / 1.5;
    scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <section id="work" className="py-32 md:py-48 bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(0,0,0,0.03)_0%,transparent_100%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="flex flex-col items-center text-center mb-12 md:mb-20 gap-8">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-gray-900 to-gray-600 tracking-tighter pb-4 mb-2 text-balance">
                Our Recent Work
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light mb-2 md:mb-0">
                See how we&apos;ve helped other businesses solve problems and grow with custom software.
              </p>
            </FadeIn>
          </div>
          
          <FadeIn delay={0.2} className="flex flex-col sm:flex-row items-center justify-center gap-6 shrink-0">
            <div className="flex items-center gap-2 text-gray-700 bg-gray-200/60 px-5 py-2.5 rounded-full text-sm font-medium backdrop-blur-sm border border-gray-300/50 shadow-sm">
              <MoveHorizontal className="w-4 h-4 animate-pulse" />
              <span>Swipe to explore</span>
            </div>
            
            <div className="hidden md:flex items-center gap-3">
              <button 
                onClick={() => scroll('left')} 
                disabled={!canScrollLeft} 
                className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-900 hover:bg-white hover:shadow-md disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={() => scroll('right')} 
                disabled={!canScrollRight} 
                className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-900 hover:bg-white hover:shadow-md disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </FadeIn>
        </div>

        <div 
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 md:gap-8 pb-12 -mx-6 px-6 md:-mx-12 md:px-12 hide-scrollbar"
        >
          {projects.map((project, index) => (
            <FadeIn key={project.title} delay={index * 0.1} className="w-[85vw] md:w-[50vw] lg:w-[40vw] shrink-0 snap-center">
              <div className="group cursor-pointer">
                <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden bg-gray-100 mb-8 border border-gray-200 shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Image
                    src={project.image}
                    alt={`${project.title} - ${project.category}`}
                    fill
                    placeholder="blur"
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(800, 600))}`}
                    referrerPolicy="no-referrer"
                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  />
                </div>
                <div className="flex items-start justify-between px-2">
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
                  <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 bg-white shadow-sm shrink-0 mt-2">
                    <ArrowUpRight className="w-5 h-5 text-gray-900" />
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        
        <FadeIn delay={0.4} className="mt-8 flex justify-center px-2">
          <a
            href="#"
            className="inline-flex items-center text-gray-900 font-medium hover:text-gray-600 transition-colors group"
          >
            Browse Full Portfolio
            <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
