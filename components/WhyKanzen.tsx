'use client';

import { FadeIn } from './FadeIn';
import { Shield, Zap, HeartHandshake } from 'lucide-react';

const pillars = [
  {
    icon: Zap,
    title: "Speed to Market",
    description: "We employ agile methodologies and reusable components to rapidly deliver high-quality software without reinventing the wheel."
  },
  {
    icon: Shield,
    title: "Engineering Excellence",
    description: "No shortcuts. We write secure, testable, and scalable code designed to handle the scale and demands of modern business environments."
  },
  {
    icon: HeartHandshake,
    title: "True Partnership",
    description: "We don't just build and vanish. We act as an extension of your team, providing strategic guidance and long-term support to ensure your success."
  }
];

export function WhyKanzen() {
  return (
    <section className="py-24 md:py-32 bg-primary relative overflow-hidden">
       <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
         <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
           <FadeIn>
             <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-gray-900 to-gray-600 tracking-tighter pb-4 text-balance">
               Why Choose Kanzen?
             </h2>
           </FadeIn>
           <FadeIn delay={0.1}>
             <p className="text-lg md:text-xl text-gray-500 leading-relaxed font-light">
               We combine deep technical expertise with a business-first mindset to deliver software that actually moves the needle.
             </p>
           </FadeIn>
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
           {pillars.map((pillar, index) => (
             <FadeIn key={pillar.title} delay={0.2 + (index * 0.1)}>
               <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow h-full">
                 <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                   <pillar.icon className="w-7 h-7 text-blue-600" />
                 </div>
                 <h3 className="text-2xl font-bold font-display text-gray-900 mb-4">{pillar.title}</h3>
                 <p className="text-gray-600 leading-relaxed font-light">
                   {pillar.description}
                 </p>
               </div>
             </FadeIn>
           ))}
         </div>
       </div>
    </section>
  );
}
