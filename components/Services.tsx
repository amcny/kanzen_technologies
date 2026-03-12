'use client';

import Image from 'next/image';
import { FadeIn } from './FadeIn';

const services = [
  {
    title: 'Custom Software Development',
    img1: 'https://picsum.photos/seed/software1/400/300',
    img2: 'https://picsum.photos/seed/software2/400/300',
  },
  {
    title: 'AI & Automation',
    img1: 'https://picsum.photos/seed/ai1/400/300',
    img2: 'https://picsum.photos/seed/ai2/400/300',
  },
  {
    title: 'Web & Web App Development',
    img1: 'https://picsum.photos/seed/web1/400/300',
    img2: 'https://picsum.photos/seed/web2/400/300',
  },
  {
    title: 'Mobile App Development',
    img1: 'https://picsum.photos/seed/mobile1/400/300',
    img2: 'https://picsum.photos/seed/mobile2/400/300',
  },
  {
    title: 'UI/UX Design',
    img1: 'https://picsum.photos/seed/design1/400/300',
    img2: 'https://picsum.photos/seed/design2/400/300',
  },
  {
    title: 'Cloud & Server Management',
    img1: 'https://picsum.photos/seed/cloud1/400/300',
    img2: 'https://picsum.photos/seed/cloud2/400/300',
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-white border-y border-gray-100 overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.03)_0%,transparent_100%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-gray-900 to-gray-600 tracking-tighter pb-4 mb-2 text-balance">
              How We Can Help You Grow
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light">
              Everything you need to build, launch, and grow your digital products.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center">
          {services.map((service, index) => (
            <div key={service.title} className="border border-dashed border-gray-200 -ml-px -mt-px h-full relative group hover:border-gray-300 hover:z-10 hover:bg-gray-50 transition-all duration-500">
              <FadeIn delay={index * 0.1} className="h-full">
                <div className="flex flex-col gap-6 items-center justify-center w-full h-full cursor-pointer p-8 md:p-12">
                  
                  {/* Small overlapping images */}
                  <div className="flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-black/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="z-10 -rotate-12 translate-x-3.5 transition-transform duration-500 ease-out group-hover:-translate-y-3 group-hover:-rotate-6 group-hover:scale-110">
                      <div className="w-[5rem] h-[3.8rem] md:w-[6rem] md:h-[4.5rem] border-[3px] border-white shadow-xl overflow-hidden bg-gray-100 rounded-lg">
                        <Image
                          src={service.img1}
                          alt={`${service.title} image 1`}
                          width={100}
                          height={75}
                          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>
                    <div className="rotate-12 -translate-x-3.5 transition-transform duration-500 ease-out group-hover:-translate-y-3 group-hover:rotate-6 group-hover:scale-110">
                      <div className="w-[5rem] h-[3.8rem] md:w-[6rem] md:h-[4.5rem] border-[3px] border-white shadow-xl overflow-hidden bg-gray-100 rounded-lg">
                        <Image
                          src={service.img2}
                          alt={`${service.title} image 2`}
                          width={100}
                          height={75}
                          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Title */}
                  <span className="inline-block text-lg md:text-xl font-display font-bold tracking-tight text-center leading-[1.2] text-gray-700 group-hover:text-gray-900 transition-all duration-500 ease-out group-hover:-translate-y-1">
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
