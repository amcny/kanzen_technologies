'use client';

import Image from 'next/image';
import { Linkedin, Twitter, Github } from 'lucide-react';
import { FadeIn } from './FadeIn';
import { shimmer, toBase64 } from '@/lib/utils';

const team = [
  {
    name: 'Chaitanya Pullagura',
    role: 'Co-Founder & Technical Director',
    bio: 'Plans how our software is built and leads our technical team.',
    image: 'https://picsum.photos/seed/chaitanya/400/400',
    linkedin: 'https://www.linkedin.com/in/chaitanyapullagura/',
    github: '#',
    twitter: '#',
  },
  {
    name: 'Harsha Vardhan Irrinki',
    role: 'Co-Founder & Head of Product',
    bio: 'Designs how our software looks and feels, and guides the overall product.',
    image: 'https://picsum.photos/seed/harsha/400/400',
    linkedin: 'https://www.linkedin.com/in/irrinkiharsha/',
    github: '#',
    twitter: '#',
  },
];

export function Team() {
  return (
    <section id="team" className="py-32 md:py-48 bg-primary border-t border-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(0,0,0,0.03)_0%,transparent_100%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
          <FadeIn>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-gray-900 to-gray-600 tracking-tighter pb-4 mb-2 text-balance">
              Meet Our Team
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light">
              We are a group of developers, designers, and planners who love building great software.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {team.map((member, index) => (
            <FadeIn key={member.name} delay={index * 0.1}>
              <div className="group relative p-8 md:p-10 rounded-[2.5rem] glass-panel bg-white/60 border border-gray-200 hover:bg-white/80 transition-all duration-500 overflow-hidden flex flex-col sm:flex-row items-center sm:items-start gap-8 shadow-xl">
                <div className="relative w-32 h-32 md:w-40 md:h-40 shrink-0 rounded-full overflow-hidden border-4 border-gray-100 shadow-lg z-10">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    placeholder="blur"
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(400, 400))}`}
                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                <div className="flex-1 text-center sm:text-left z-10">
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-gray-500 font-medium mb-4 text-base md:text-lg uppercase tracking-wider text-sm">
                    {member.role}
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6 font-light">
                    {member.bio}
                  </p>
                  <div className="flex justify-center sm:justify-start gap-3">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-200 hover:text-gray-900 transition-colors shadow-sm"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href={member.twitter}
                      className="w-10 h-10 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-200 hover:text-gray-900 transition-colors shadow-sm"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                    <a
                      href={member.github}
                      className="w-10 h-10 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-200 hover:text-gray-900 transition-colors shadow-sm"
                    >
                      <Github className="w-4 h-4" />
                    </a>
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
