'use client';

import Image from 'next/image';
import { FadeIn } from './FadeIn';

const testimonials = [
  {
    name: 'Sujith Reddy Gopu',
    company: 'Founder of Fluent Pro',
    quote: 'Kanzen built Fluent Pro: an AI-powered English learning platform with instant, personalized feedback for students.',
    reply: 'Excited to support your impact. 🌟',
    image: 'https://picsum.photos/seed/sujith/100/100',
  },
  {
    name: 'Abhishek',
    company: 'Senior Business Analyst at Conquer',
    quote: 'Kanzen built our B2B e-commerce platform with contract-based catalogues, client-specific SKUs, and dynamic discount programs.',
    reply: 'Proud to ship this together. 🤝',
    image: 'https://picsum.photos/seed/abhishek/100/100',
  },
  {
    name: 'Nino Gorbach',
    company: 'COO, ATH',
    quote: 'We imagined the extraordinary: a 3D immersive experience. Kanzen brought it to life with precision and creativity.',
    reply: 'Pushing boundaries is what we do. ✨',
    image: 'https://picsum.photos/seed/nino/100/100',
  },
];

export function Testimonials() {
  return (
    <section className="py-32 md:py-48 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
          <FadeIn>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-black text-text-primary tracking-tighter mb-6 text-balance">
              Client Success
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
              Don&apos;t just take our word for it. Hear from the leaders who trust us to build their core technology.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={testimonial.name} delay={index * 0.1}>
              <div className="flex flex-col gap-6">
                {/* Client Message */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-border-light overflow-hidden shrink-0 border border-white shadow-sm relative mt-1">
                    <Image src={testimonial.image} alt={`${testimonial.name} from ${testimonial.company}`} fill className="object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="bg-primary border border-border-light p-6 rounded-2xl rounded-tl-sm shadow-sm flex-1">
                    <p className="text-text-primary font-medium leading-relaxed mb-4">
                      &quot;{testimonial.quote}&quot;
                    </p>
                    <div>
                      <p className="font-display font-bold text-text-primary text-sm">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-text-secondary mt-0.5">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Agency Reply */}
                <div className="flex items-start gap-4 self-end flex-row-reverse w-[90%]">
                  <div className="w-8 h-8 rounded-full bg-text-primary flex items-center justify-center shrink-0 shadow-sm border border-white z-10 mt-1">
                    <span className="text-primary font-display font-bold text-xs">K</span>
                  </div>
                  <div className="bg-text-primary text-primary p-5 rounded-2xl rounded-tr-sm shadow-md flex-1">
                    <p className="font-medium text-sm leading-relaxed">
                      {testimonial.reply}
                    </p>
                    <p className="text-xs text-primary/70 mt-2 font-medium">— Kanzen Team</p>
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
