import { Hero } from '@/components/Hero';
import { SocialProof } from '@/components/SocialProof';
import { Services } from '@/components/Services';
import { Process } from '@/components/Process';
import { Work } from '@/components/Work';
import { Features } from '@/components/Features';
import { Testimonials } from '@/components/Testimonials';
import { Cta } from '@/components/Cta';

export default function Home() {
  return (
    <main className="min-h-screen bg-primary">
      <Hero />
      <SocialProof />
      <Services />
      <Process />
      <Work />
      <Features />
      <Testimonials />
      <Cta />
    </main>
  );
}
