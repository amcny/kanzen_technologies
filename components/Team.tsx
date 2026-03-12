'use client';

import Image from 'next/image';
import { Linkedin, Twitter, Github } from 'lucide-react';
import { FadeIn } from './FadeIn';

const team = [
  {
    name: 'Chaitanya Pullagura',
    role: 'Co-Founder & Technical Director',
    bio: 'Architecting scalable systems and leading technical strategy.',
    image: 'https://picsum.photos/seed/chaitanya/400/400',
    linkedin: 'https://www.linkedin.com/in/chaitanyapullagura/',
    github: '#',
    twitter: '#',
  },
  {
    name: 'Harsha Vardhan Irrinki',
    role: 'Co-Founder & Head of Product',
    bio: 'Crafting intuitive user experiences and driving product vision.',
    image: 'https://picsum.photos/seed/harsha/400/400',
    linkedin: 'https://www.linkedin.com/in/irrinkiharsha/',
    github: '#',
    twitter: '#',
  },
];

export function Team() {
  return (
    <section id="team" className="py-32 md:py-48 bg-primary border-t border-border-light">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
          <FadeIn>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-black text-text-primary tracking-tighter mb-6 text-balance">
              Meet the Team
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
              We are a collective of engineers, designers, and strategists dedicated to building exceptional digital products.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {team.map((member, index) => (
            <FadeIn key={member.name} delay={index * 0.1}>
              <div className="group relative p-8 md:p-10 rounded-[2.5rem] bg-secondary border border-border-light hover:border-accent-primary/30 transition-all duration-500 overflow-hidden flex flex-col sm:flex-row items-center sm:items-start gap-8 shadow-sm hover:shadow-xl hover:shadow-accent-primary/5">
                <div className="relative w-32 h-32 md:w-40 md:h-40 shrink-0 rounded-full overflow-hidden border-4 border-primary shadow-lg z-10">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                <div className="flex-1 text-center sm:text-left z-10">
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-text-primary mb-2">
                    {member.name}
                  </h3>
                  <p className="text-accent-primary font-medium mb-4 text-base md:text-lg">
                    {member.role}
                  </p>
                  <p className="text-text-secondary leading-relaxed mb-6">
                    {member.bio}
                  </p>
                  <div className="flex justify-center sm:justify-start gap-3">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-primary border border-border-light flex items-center justify-center text-text-secondary hover:bg-accent-primary hover:text-white hover:border-accent-primary transition-colors shadow-sm"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href={member.twitter}
                      className="w-10 h-10 rounded-full bg-primary border border-border-light flex items-center justify-center text-text-secondary hover:bg-accent-primary hover:text-white hover:border-accent-primary transition-colors shadow-sm"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                    <a
                      href={member.github}
                      className="w-10 h-10 rounded-full bg-primary border border-border-light flex items-center justify-center text-text-secondary hover:bg-accent-primary hover:text-white hover:border-accent-primary transition-colors shadow-sm"
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
