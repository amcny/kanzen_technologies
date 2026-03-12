'use client';

import { Rocket, Layers, Zap, Clock, Palette, MessageCircle } from 'lucide-react';
import { FadeIn } from './FadeIn';

const features = [
  {
    title: 'Startup-focused development',
    description: 'We understand the pace and agility required to build products that win in competitive markets.',
    icon: Rocket,
  },
  {
    title: 'Scalable architecture',
    description: 'Systems designed to grow with your user base, ensuring reliability and performance at scale.',
    icon: Layers,
  },
  {
    title: 'AI-ready solutions',
    description: 'Future-proof your business with intelligent features and automated workflows.',
    icon: Zap,
  },
  {
    title: 'Fast delivery cycles',
    description: 'Iterative development and rapid prototyping to get your product to market faster.',
    icon: Clock,
  },
  {
    title: 'Design-first thinking',
    description: 'Every line of code is guided by a commitment to exceptional user experience and aesthetics.',
    icon: Palette,
  },
  {
    title: 'Transparent communication',
    description: 'Clear, consistent updates and collaborative planning throughout the project lifecycle.',
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
              Why Choose Kanzen
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
              We combine technical expertise with a deep understanding of business goals to deliver exceptional results.
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
