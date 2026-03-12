import { Hero } from '@/components/Hero';
import { SocialProof } from '@/components/SocialProof';
import { Services } from '@/components/Services';
import { Process } from '@/components/Process';
import { Work } from '@/components/Work';
import { Features } from '@/components/Features';
import { Testimonials } from '@/components/Testimonials';
import { Cta } from '@/components/Cta';

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Kanzen Technologies",
    "url": "https://kanzen.tech",
    "logo": "https://kanzen.tech/logo.png",
    "description": "Kanzen Technologies builds high-performance digital products, scalable platforms, and intelligent solutions for startups and modern businesses.",
    "sameAs": [
      "https://twitter.com/kanzentech",
      "https://linkedin.com/company/kanzentech",
      "https://github.com/kanzentech"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "hello@kanzen.tech",
      "contactType": "customer service"
    }
  };

  return (
    <main className="min-h-screen bg-primary">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
