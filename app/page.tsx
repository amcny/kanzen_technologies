import { Hero } from '@/components/Hero';
import { SocialProof } from '@/components/SocialProof';
import { Services } from '@/components/Services';
import { Process } from '@/components/Process';
import { Work } from '@/components/Work';
import { MiniCta } from '@/components/MiniCta';
import { WhyKanzen } from '@/components/WhyKanzen';
import { TechStack } from '@/components/TechStack';
import { Features } from '@/components/Features';
import { Vision } from '@/components/Vision';
import { Faq } from '@/components/Faq';
import { Testimonials } from '@/components/Testimonials';
import { Cta } from '@/components/Cta';

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Kanzen Technologies",
    "url": "https://kanzen.tech",
    "logo": "https://kanzen.tech/logo.png",
    "description": "Kanzen Technologies builds custom enterprise software, mobile apps, and SaaS platforms. We help fast-growing businesses in India scale with tailored technology and AI integrations.",
    "sameAs": [
      "https://twitter.com/kanzentech",
      "https://linkedin.com/company/kanzentech",
      "https://github.com/kanzentech"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "kanzen.technology@gmail.com",
      "contactType": "customer service"
    }
  };

  return (
    <main className="min-h-screen bg-primary relative overflow-hidden">
      {/* Global Background Decorations */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full" style={{ background: "radial-gradient(circle, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0) 70%)" }} />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full" style={{ background: "radial-gradient(circle, rgba(0,0,0,0.015) 0%, rgba(0,0,0,0) 70%)" }} />
      </div>
      
      <div className="relative z-10">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Hero />
        <SocialProof />
        <TechStack />
        <WhyKanzen />
        <Services />
        <Process />
        <Work />
        <MiniCta />
        <Features />
        <Vision />
        <Faq />
        <Testimonials />
        <Cta />
      </div>
    </main>
  );
}
