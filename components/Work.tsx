'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, MoveRight } from 'lucide-react';
import Image from 'next/image';
import { FadeIn } from './FadeIn';
import { shimmer, toBase64 } from '@/lib/utils';
import { useInView } from 'motion/react';

const projects = [
  {
    title: 'Teacher Info',
    category: 'Web Portal',
    description: 'Central source for information and updates for Andhra Pradesh Teachers.',
    image: 'https://i.ibb.co/Dfv2QQQ8/Screenshot-2026-04-22-at-7-50-50-PM.png',
    slug: 'ap-teacher-info',
    liveUrl: 'https://teacherinfo.net/',
  },
  {
    title: 'Sky Garden Family Restaurant',
    category: 'Marketing Website',
    description: 'A vibrant marketing website for Sky Garden Family Restaurant, featuring their menu, ambiance, and online presence.',
    image: 'https://i.ibb.co/XxRq6fLs/Screenshot-2026-03-19-at-10-40-31-AM.png',
    slug: 'sky-garden',
    liveUrl: 'https://amcny.github.io/sky-garden/',
  },
  {
    title: 'NIT AP: ECE Student App',
    category: 'Mobile Application',
    description: 'A comprehensive app for ECE students to seamlessly manage timetables, track attendance, and access academic records via WSDC integration.',
    image: 'https://play-lh.googleusercontent.com/njc4K88pOp-MmScjFY4C-x1IbmKqiavUrWUf4Ycx-4VcwE_EPx84RtmPyMmEzykjPYQ=w1052-h592-rw',
    slug: 'nit-ap-ece',
    liveUrl: 'https://play.google.com/store/apps/details?id=com.nitstudent.app',
  },
  {
    title: 'NIT AP Freshers App',
    category: 'Mobile Application',
    description: 'An intuitive companion app designed specifically for incoming freshers to navigate campus life, track grades, and stay updated with class schedules.',
    image: 'https://play-lh.googleusercontent.com/0ugxCI4zvQZ82hHDgafVECxW398uEeV4Ocya1ZIG9YfIh4TxxOCHvfT2VvAJdZsXaSs=w1052-h592-rw',
    slug: 'nit-ap-freshers',
    liveUrl: 'https://play.google.com/store/apps/details?id=com.nitapfreshers.app',
  },
  {
    title: 'NIT AP: Mess App',
    category: 'Mobile Application',
    description: 'A dedicated platform for students to access daily mess menus, receive real-time food updates, and seamlessly navigate between different hostel dining facilities.',
    image: 'https://play-lh.googleusercontent.com/mQIvnv1DGflJRVhJ5pLKj6Xl2-GzKBSjzzcRisaPSBJa5RTNYqH31HsFcR1Luu2Q9mV8ou1_FYb-EKy-ojlTmEE=w1052-h592-rw',
    slug: 'nit-ap-mess',
    liveUrl: 'https://play.google.com/store/apps/details?id=com.nitmess.com',
  },
  {
    title: 'Student Outing Management',
    category: 'AI & Security',
    description: 'An advanced facial recognition system designed to automate and secure the student outing process for the NIT Andhra Pradesh campus.',
    image: 'https://i.ibb.co/Rk5wC4GT/image.png',
    slug: 'student-outing',
    liveUrl: 'https://kanzen.tech',
  },
];

export function Work() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const isInView = useInView(scrollContainerRef, { amount: 0.2 });

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || isPaused || !isInView) return;

    const interval = setInterval(() => {
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      
      if (container.scrollLeft >= maxScrollLeft - 10) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        const firstChild = container.children[0] as HTMLElement;
        if (firstChild) {
          const scrollAmount = firstChild.offsetWidth + 24;
          container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      }
    }, 2500);

    return () => clearInterval(interval);
  }, [isPaused, isInView]);

  return (
    <section id="work" className="py-32 md:py-48 bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(0,0,0,0.03)_0%,transparent_100%)] pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        <div className="flex flex-col items-center text-center mb-12 md:mb-20 gap-8">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-gray-900 to-gray-600 tracking-tighter pb-4 mb-2 text-balance">
                Our Recent Work
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light mb-2 md:mb-0">
                See how we&apos;ve helped other businesses solve problems and grow with custom software.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="flex items-center justify-center gap-2 mt-8 text-gray-500 animate-pulse">
                <span className="text-sm font-medium uppercase tracking-widest">Swipe to explore</span>
                <MoveRight className="w-5 h-5" />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      <div 
        ref={scrollContainerRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
        className="relative z-10 flex overflow-x-auto snap-x snap-mandatory gap-6 md:gap-8 pb-12 px-6 md:px-12 xl:px-[calc((100vw-1280px)/2+3rem)] scroll-pl-6 md:scroll-pl-12 xl:scroll-pl-[calc((100vw-1280px)/2+3rem)] after:content-[''] after:shrink-0 after:w-px [&::-webkit-scrollbar]:hidden" 
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {projects.map((project, index) => (
          <div key={project.title} className="w-[85vw] sm:w-[70vw] md:w-[45vw] lg:w-[40vw] xl:w-[500px] shrink-0 snap-start">
            <FadeIn delay={index * 0.1} className="h-full">
              <Link 
                href={`/work/${project.slug}`}
                className="group block h-full"
              >
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
              </Link>
            </FadeIn>
          </div>
        ))}
        </div>
    </section>
  );
}
