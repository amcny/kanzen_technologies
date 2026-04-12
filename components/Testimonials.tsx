'use client';

import Image from 'next/image';
import { FadeIn } from './FadeIn';
import { shimmer, toBase64 } from '@/lib/utils';

const testimonials = [
  {
    name: 'Sujith Reddy Gopu',
    company: 'Founder of Fluent Pro',
    quote: 'Kanzen built Fluent Pro: an AI-powered English learning platform with instant, personalized feedback for students.',
    reply: 'Happy to help you make a difference. 🌟',
    image: 'https://picsum.photos/seed/sujith/100/100',
  },
  {
    name: 'Abhishek',
    company: 'Senior Business Analyst at Conquer',
    quote: 'Kanzen built our B2B e-commerce platform with contract-based catalogues, client-specific SKUs, and dynamic discount programs.',
    reply: 'Proud to build this with you. 🤝',
    image: 'https://picsum.photos/seed/abhishek/100/100',
  },
  {
    name: 'Nino Gorbach',
    company: 'COO, ATH',
    quote: 'We imagined the extraordinary: a 3D immersive experience. Kanzen brought it to life with precision and creativity.',
    reply: 'We love bringing big ideas to life. ✨',
    image: 'https://picsum.photos/seed/nino/100/100',
  },
  {
    name: 'Owner',
    company: 'Sky Garden',
    quote: 'As the owner of Sky Garden, I am very happy with the website. It is affordable, easy to use, and looks great. Customers can navigate it without any trouble. The team understood our needs and delivered exactly what we wanted. It has really helped improve our online presence and reach more people.',
    reply: 'Thank you! We loved working on the Sky Garden website and are thrilled to see it helping your business grow. 🌱',
    image: 'https://lh3.googleusercontent.com/a-/ALV-UjWwxuLCA1S_0XCUDjESBzHkhpawFBNvR6bU0b1fze0-droVZwc=w108-h108-p-rp-mo-br100',
  },
];

export function Testimonials() {
  return (
    <section className="py-32 md:py-48 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_0%,transparent_100%)] pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
          <FadeIn>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-gray-900 to-gray-600 tracking-tighter pb-4 mb-2 text-balance">
              What Our Clients Say
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light">
              Don&apos;t just take our word for it. Hear from the people who trust us to build their software.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={testimonial.name} delay={index * 0.1}>
              <div className="flex flex-col gap-6 group">
                {/* Client Message */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-100 overflow-hidden shrink-0 border border-gray-200 shadow-sm relative mt-1 group-hover:scale-110 transition-transform">
                    <Image 
                      src={testimonial.image} 
                      alt={`${testimonial.name} from ${testimonial.company}`} 
                      fill 
                      placeholder="blur"
                      blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(100, 100))}`}
                      className="object-cover" 
                      referrerPolicy="no-referrer" 
                    />
                  </div>
                  <div className="glass-panel bg-white/60 p-6 rounded-2xl rounded-tl-sm shadow-sm flex-1 group-hover:bg-white/80 transition-colors">
                    <p className="text-gray-900 font-medium leading-relaxed mb-4 font-light">
                      &quot;{testimonial.quote}&quot;
                    </p>
                    <div>
                      <p className="font-display font-bold text-gray-900 text-sm">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Agency Reply */}
                <div className="flex items-start gap-4 self-end flex-row-reverse w-[90%]">
                  <div className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center shrink-0 shadow-sm border border-gray-800 z-10 mt-1 group-hover:scale-110 transition-transform">
                    <span className="text-white font-display font-bold text-xs">K</span>
                  </div>
                  <div className="bg-gray-900 text-white p-5 rounded-2xl rounded-tr-sm shadow-md flex-1">
                    <p className="font-medium text-sm leading-relaxed">
                      {testimonial.reply}
                    </p>
                    <p className="text-xs text-white/60 mt-2 font-medium">— Kanzen Team</p>
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
