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
    "description": "Kanzen Technologies builds high-quality software, mobile apps, and digital platforms. We help businesses grow with custom technology solutions, AI integration, and expert engineering.",
    "sameAs": [
      "https://twitter.com/kanzentech",
      "https://linkedin.com/company/kanzentech",
      "https://github.com/kanzentech"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "contact@kanzentech.com",
      "contactType": "customer service"
    }
  };

  return (
    <main className="min-h-screen bg-primary relative overflow-hidden">
      {/* Global Background Decorations */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-black/[0.02] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-black/[0.015] rounded-full blur-[150px]" />
      </div>
      
      <div className="relative z-10">
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
      </div>
    </main>
  );
}
