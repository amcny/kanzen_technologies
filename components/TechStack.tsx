'use client';

import { FadeIn } from './FadeIn';

const technologies = [
  { name: "React", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Next.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { name: "Node.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "TypeScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "Python", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "Tailwind CSS", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "PostgreSQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { name: "MongoDB", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
  { name: "AWS", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Google Cloud", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg" },
  { name: "Docker", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  { name: "Kubernetes", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg" },
  { name: "Flutter", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" },
  { name: "Firebase", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg" },
  { name: "Redis", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" }
];

export function TechStack() {
  // Duplicate arrays to create a seamless loop
  const duplicatedTechs = [...technologies, ...technologies, ...technologies, ...technologies];

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
      
      <div className="relative flex overflow-hidden group mt-12 py-8 bg-gray-50/50 border-y border-gray-100">
        {/* Gradient masks for smooth fade in/out on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-gray-50/50 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-gray-50/50 to-transparent z-20 pointer-events-none" />

        <div className="flex animate-marquee whitespace-nowrap items-center shrink-0 min-w-full justify-around">
          {duplicatedTechs.map((tech, idx) => (
            <div 
              key={`tech-1-${idx}`} 
              className="mx-6 md:mx-10 flex flex-col items-center justify-center opacity-70 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110"
              title={tech.name}
            >
              {/* @eslint-disable-next-line @next/next/no-img-element */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={tech.url} 
                alt={`${tech.name} logo`} 
                className="w-10 h-10 md:w-12 md:h-12 object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <div className="flex animate-marquee whitespace-nowrap items-center shrink-0 min-w-full justify-around" aria-hidden="true">
          {duplicatedTechs.map((tech, idx) => (
            <div 
              key={`tech-2-${idx}`} 
              className="mx-6 md:mx-10 flex flex-col items-center justify-center opacity-70 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110"
              title={tech.name}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={tech.url} 
                alt={`${tech.name} logo`} 
                className="w-10 h-10 md:w-12 md:h-12 object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
