'use client';

import { Rocket, Layers, Zap, Clock, Palette, MessageCircle } from 'lucide-react';
import { FadeIn } from './FadeIn';

const features = [
  {
    title: 'Agile & Adaptive',
    description: 'We thrive in fast-paced environments, adapting quickly to market shifts to keep your product ahead of the curve.',
    icon: Rocket,
  },
  {
    title: 'Future-Proof Architecture',
    description: 'We build resilient systems from day one, ensuring your platform handles explosive growth without compromising performance.',
    icon: Layers,
  },
  {
    title: 'AI-Integrated Solutions',
    description: 'Seamlessly embed machine learning capabilities and smart automation to unlock new operational efficiencies.',
    icon: Zap,
  },
  {
    title: 'Rapid Iteration Cycles',
    description: 'We prioritize speed-to-market through continuous integration, rapid prototyping, and swift deployment phases.',
    icon: Clock,
  },
  {
    title: 'Design-Driven Engineering',
    description: 'Our engineering process is deeply intertwined with UX principles, ensuring beautiful, intuitive end products.',
    icon: Palette,
  },
  {
    title: 'Radical Transparency',
    description: 'Maintain full visibility into our progress with open communication channels and collaborative sprint planning.',
    icon: MessageCircle,
  },
];

export function Features() {
  return (
    <section id="about" className="py-32 md:py-48 bg-primary border-y border-border-light">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
          <FadeIn>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-black text-text-primary tracking-tighter mb-6 text-balance">
              The Kanzen Advantage
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
              We bridge the gap between technical mastery and strategic business vision to engineer products that stand out.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <FadeIn key={feature.title} delay={index * 0.1}>
              <div className="flex flex-col items-start">
                <div className="w-12 h-12 rounded-xl bg-primary border border-border-light flex items-center justify-center mb-6 text-accent-primary">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-bold text-text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
