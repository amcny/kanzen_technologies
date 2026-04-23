import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import type { Metadata } from 'next';

export function generateStaticParams() {
  return [
    { slug: 'custom-software-development' },
    { slug: 'ai-automation' },
    { slug: 'web-development' },
    { slug: 'mobile-app-development' },
    { slug: 'ui-ux-design' },
    { slug: 'cloud-server-management' },
  ];
}

const serviceDetails: Record<string, { title: string, description: string, extendedDescription: string[], features: string[], keywords: string, whyUs: string }> = {
    'custom-software-development': {
      title: 'Custom Software Development',
      description: 'We build tailored enterprise software solutions designed to scale your operations, secure your data, and accelerate your business growth in India and globally.',
      extendedDescription: [
        'Off-the-shelf software often forces you to adapt your workflows to fit its limitations. With our custom software development services, we build technology around your unique business logic.',
        'Whether you need a complex ERP system, specialized CRM, or a unique internal tool to streamline your logistics and operations, our engineering team architects solutions that are secure, highly scalable, and completely yours.',
        'We specialize in building distributed systems using Next.js, Node.js, and robust cloud architectures to ensure 99.9% uptime and enterprise-grade security.'
      ],
      features: ['Enterprise Architecture', 'API Integration & Middleware', 'Legacy System Modernization', 'Workflow Automation', 'Scalable Microservices'],
      keywords: 'Custom software development, enterprise software, custom ERP, scalable solutions software, India custom software agency',
      whyUs: 'We don\'t just write code; we align technology with your P&L. By mapping our agile engineering process to your business KPIs, we ensure your custom software delivers immediate ROI.',
    },
    'ai-automation': {
      title: 'AI & Business Automation',
      description: 'Automate manual tasks and unlock data-driven insights with bespoke Artificial Intelligence and Machine Learning workflow integrations.',
      extendedDescription: [
        'Artificial Intelligence is no longer just a buzzword; it is a critical competitive advantage. We help businesses integrate practical AI to reduce operational costs and eliminate human error.',
        'From intelligent document processing and custom LLM chatbots to predictive analytics in supply chain management, we build secure AI solutions that integrate seamlessly into your existing workflows.',
        'Our focus is on tangible outcomes. We deploy automated data pipelines that turn hours of manual spreadsheet work into seconds of automated processing.'
      ],
      features: ['Custom ChatGPT Integrations', 'Predictive Analytics', 'Workflow Automation (Zapier/Make)', 'Computer Vision Systems', 'Natural Language Processing (NLP)'],
      keywords: 'AI integration, business automation India, custom LLM solutions, workflow automation services, machine learning consulting',
      whyUs: 'We prioritize secure, pragmatic AI implementations. Your data stays yours, and we deploy models that solve real bottlenecks instead of just building expensive science experiments.',
    },
    'web-development': {
      title: 'Web & SaaS Development',
      description: 'Launch lightning-fast, highly responsive web applications and SaaS platforms engineered for high conversions and massive scale.',
      extendedDescription: [
        'Your web platform is the digital face of your business. We engineer extremely fast, SEO-optimized, and dynamic web applications that perform perfectly under heavy traffic.',
        'Using Next.js, React, and modern serverless infrastructure, we build complex SaaS products, interactive dashboards, and e-commerce platforms that offer app-like experiences right in the browser.',
        'Performance is our priority. We rigorously optimize Core Web Vitals, ensuring that your users get instantaneous load times and seamless interactions on any device.'
      ],
      features: ['SaaS Architecture', 'E-Commerce Platforms', 'Customer Portals', 'Performance Optimization', 'Progressive Web Apps (PWAs)'],
      keywords: 'Web application development, SaaS developer India, Next.js experts, React development company, high-performance web apps',
      whyUs: 'We build for speed and conversion. Our deep expertise in the modern web ecosystem ensures your application out-performs competitors in both user retention and search engine rankings.',
    },
    'mobile-app-development': {
      title: 'Mobile App Development',
      description: 'Engage your audience on the go with native and cross-platform mobile apps for iOS and Android, built for speed and seamless UX.',
      extendedDescription: [
        'A great mobile app requires more than just making a website fit on a small screen. It requires deep integration with device capabilities and ultra-smooth animations.',
        'We develop powerful iOS and Android applications using React Native and Flutter, allowing a single codebase to deliver high-performance native experiences.',
        'From real-time chat applications to complex field service tools, we handle the entire lifecycle—from UI UX design to App Store deployments and OTA (Over The Air) updates.'
      ],
      features: ['Cross-platform Development', 'Native iOS/Android', 'Push Notifications & Real-Time Sync', 'Offline-First Architectures', 'App Store Optimization'],
      keywords: 'Mobile app development India, React Native agency, iOS app developers, Android cross-platform, enterprise mobile apps',
      whyUs: 'We treat mobile apps as critical business engines. With a focus on high retention rates, we build offline-ready architectures so your users can rely on your app anywhere, anytime.',
    },
    'ui-ux-design': {
      title: 'UI/UX Design',
      description: 'Transform complex user journeys into beautiful, frictionless interfaces that delight users and drive business conversions.',
      extendedDescription: [
        'Good design is obvious; great design is invisible. We craft digital experiences that feel intuitive, reducing friction and guiding users naturally toward their goals.',
        'Our design process is rooted in extensive market research and wireframing. We build high-fidelity interactive prototypes to validate user flows before a single line of code is written.',
        'We ensure that every platform we design not only looks stunning but also meets international accessibility standards (WCAG) and employs psychological principles to boost user engagement.'
      ],
      features: ['User Journey Mapping', 'High-Fidelity Prototyping', 'Design Systems', 'Usability Testing', 'Conversion Rate Optimization (CRO)'],
      keywords: 'UI UX design agency, website redesign services, app wireframing, user experience consulting, digital product design',
      whyUs: 'We bridge the gap between design and development. Because we are an engineering-led team, our designs are not only beautiful but strictly feasible, saving you weeks of development rework.',
    },
    'cloud-server-management': {
      title: 'Cloud & Infrastructure Management',
      description: 'Secure, scalable, and highly available cloud infrastructure solutions using AWS, Google Cloud, and modern DevOps practices.',
      extendedDescription: [
        'Downtime is expensive. We architect and manage cloud infrastructure that automatically scales with your traffic while keeping server costs strictly optimized.',
        'Moving away from legacy servers? We lead seamless cloud migrations, containerizing applications with Docker and Kubernetes to ensure they can run anywhere, robustly.',
        'Security is built-in, not bolted on. We implement continuous integration/continuous deployment (CI/CD) pipelines, automated database backups, and strict IAM roles to protect your proprietary data.'
      ],
      features: ['AWS / GCP Architecture', 'Docker & Kubernetes', 'CI/CD Pipelines', 'Serverless Deployments', '24/7 Monitoring & Backups'],
      keywords: 'Cloud infrastructure management, DevOps agency India, AWS consulting, Cloud migration services, serverless deployment',
      whyUs: 'We provide peace of mind. Our infrastructure setups are auditable, redundant, and built with automated catastrophe recovery, so you can focus on your business instead of server alerts.',
    },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceDetails[slug];
  
  if (!service) {
    return { title: 'Service Not Found' };
  }

  return {
    title: `${service.title} Services`,
    description: service.description,
    keywords: service.keywords.split(', '),
    openGraph: {
      title: `${service.title} | Kanzen Technologies`,
      description: service.description,
      type: 'article',
    }
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceDetails[slug];

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-primary pt-32 pb-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full" style={{ background: "radial-gradient(circle, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0) 70%)" }} />
      
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        <Link href="/#services" scroll={false} className="inline-flex items-center text-gray-500 hover:text-gray-900 mb-12 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Services
        </Link>
        
        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-display font-black text-gray-900 mb-6 tracking-tight">
            {service.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed mb-4">
            {service.description}
          </p>
        </div>
        
        <div className="space-y-16">
          {/* Extended Description */}
          <div className="prose prose-lg text-gray-600 font-light leading-relaxed max-w-none">
            {service.extendedDescription.map((paragraph, idx) => (
              <p key={idx} className="mb-6">{paragraph}</p>
            ))}
          </div>

          {/* Key Deliverables / Features */}
          <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100">
            <h3 className="text-2xl font-display font-bold text-gray-900 mb-8">Capabilities & Offerings</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Why Kanzen for this service */}
          <div>
            <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">Why Partner With Us?</h3>
            <p className="text-lg text-gray-600 font-light leading-relaxed">
              {service.whyUs}
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 pt-10 border-t border-gray-200">
          <h4 className="text-2xl font-display font-bold text-gray-900 mb-4">Ready to start?</h4>
          <p className="text-gray-600 mb-6">Schedule a free consultation to discuss your {service.title.toLowerCase()} requirements.</p>
          <button
             data-cal-namespace="business-call"
              data-cal-link="kanzentechnologies/business-call"
            className="inline-flex text-white bg-gray-900 hover:bg-gray-800 px-6 py-3 rounded-full font-medium transition cursor-pointer"
          >
            Tell us about your project
          </button>
        </div>
      </div>
    </main>
  );
}
