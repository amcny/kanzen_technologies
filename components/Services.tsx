'use client';

import Image from 'next/image';
import { FadeIn } from './FadeIn';

const services = [
  {
    title: 'Bespoke Software Engineering',
    img1: 'https://picsum.photos/seed/software1/400/300',
    img2: 'https://picsum.photos/seed/software2/400/300',
  },
  {
    title: 'Intelligent Automation & AI',
    img1: 'https://picsum.photos/seed/ai1/400/300',
    img2: 'https://picsum.photos/seed/ai2/400/300',
  },
  {
    title: 'Scalable Web & SaaS Platforms',
    img1: 'https://picsum.photos/seed/web1/400/300',
    img2: 'https://picsum.photos/seed/web2/400/300',
  },
  {
    title: 'Native & Cross-Platform Mobile',
    img1: 'https://picsum.photos/seed/mobile1/400/300',
    img2: 'https://picsum.photos/seed/mobile2/400/300',
  },
  {
    title: 'Strategic UI/UX Design',
    img1: 'https://picsum.photos/seed/design1/400/300',
    img2: 'https://picsum.photos/seed/design2/400/300',
  },
  {
    title: 'Cloud Infrastructure & DevOps',
    img1: 'https://picsum.photos/seed/cloud1/400/300',
    img2: 'https://picsum.photos/seed/cloud2/400/300',
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-secondary border-y border-border-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-text-primary tracking-tighter mb-6 text-balance">
              Solutions Tailored for Your Growth
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
              Discover our full-service offerings — crafted to deliver reliability, scalability, and results
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center">
          {services.map((service, index) => (
            <div key={service.title} className="border border-dashed border-border-light -ml-px -mt-px h-full relative group hover:border-accent-primary hover:z-10 hover:bg-primary/50 transition-all duration-300">
              <FadeIn delay={index * 0.1} className="h-full">
                <div className="flex flex-col gap-6 items-center justify-center w-full h-full cursor-pointer p-8 md:p-12">
                  
                  {/* Small overlapping images */}
                  <div className="flex items-center justify-center">
                    <div className="z-10 -rotate-12 translate-x-3.5 transition-transform duration-300 ease-in-out group-hover:-translate-y-2">
                      <div className="w-[5rem] h-[3.8rem] md:w-[6rem] md:h-[4.5rem] border-[3px] border-primary shadow-md overflow-hidden bg-border-light">
                        <Image
                          src={service.img1}
                          alt={`${service.title} image 1`}
                          width={100}
                          height={75}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>
                    <div className="rotate-12 -translate-x-3.5 transition-transform duration-300 ease-in-out group-hover:-translate-y-2">
                      <div className="w-[5rem] h-[3.8rem] md:w-[6rem] md:h-[4.5rem] border-[3px] border-primary shadow-md overflow-hidden bg-border-light">
                        <Image
                          src={service.img2}
                          alt={`${service.title} image 2`}
                          width={100}
                          height={75}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Title */}
                  <span className="inline-block text-lg md:text-xl font-display font-bold tracking-tight text-center leading-[1.2] text-text-primary transition-transform duration-300 ease-in-out group-hover:-translate-y-1">
                    {service.title}
                  </span>
                </div>
              </FadeIn>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
