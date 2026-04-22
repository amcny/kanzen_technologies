'use client';

import { FadeIn } from './FadeIn';

const technologies = [
  "React", "Next.js", "Node.js", "TypeScript", "Python", "Tailwind CSS",
  "PostgreSQL", "MongoDB", "AWS", "Google Cloud", "Docker", "Kubernetes",
  "React Native", "Flutter", "Firebase", "Redis"
];

export function TechStack() {
  return (
    <section className="py-20 bg-white overflow-hidden relative border-y border-gray-100">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 mb-12">
         <FadeIn>
           <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest mb-2">
             Modern Tech Stack
           </p>
           <h2 className="text-center text-2xl md:text-3xl font-display font-bold text-gray-900 max-w-2xl mx-auto">
             We build with scalable, enterprise-grade technologies
           </h2>
         </FadeIn>
      </div>
      
      <div className="relative flex overflow-x-hidden group mt-12 py-8 bg-gray-50/50 border-y border-gray-100">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...technologies, ...technologies, ...technologies].map((tech, idx) => (
            <span 
              key={idx} 
              className="mx-6 text-xl md:text-3xl font-display font-black text-transparent bg-clip-text bg-gradient-to-br from-gray-200 to-gray-400 opacity-50 select-none"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
