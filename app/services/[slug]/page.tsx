import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

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

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // Simple placeholder data for now
  const serviceDetails: Record<string, { title: string, description: string }> = {
    'custom-software-development': {
      title: 'Custom Software Development',
      description: 'We build custom software solutions tailored to your specific business needs. From internal tools to customer-facing applications, we ensure high performance, security, and scalability.',
    },
    'ai-automation': {
      title: 'AI & Automation',
      description: 'Integrate artificial intelligence into your workflows. We help automate repetitive tasks, analyze data, and build smart features that save you time and money.',
    },
    'web-development': {
      title: 'Web & Web App Development',
      description: 'Create fast, responsive, and beautiful websites and web applications. We use modern technologies like React and Next.js to deliver the best user experience.',
    },
    'mobile-app-development': {
      title: 'Mobile App Development',
      description: 'Reach your customers on the go. We build native and cross-platform mobile apps for iOS and Android that are intuitive and engaging.',
    },
    'ui-ux-design': {
      title: 'UI/UX Design',
      description: 'Design matters. We focus on creating user interfaces that are not only visually appealing but also highly functional and easy to navigate.',
    },
    'cloud-server-management': {
      title: 'Cloud & Server Management',
      description: 'Ensure your applications are always online and running smoothly. We handle cloud infrastructure, server setup, and ongoing maintenance.',
    }
  };

  const service = serviceDetails[slug];

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-primary pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <Link href="/#services" scroll={false} className="inline-flex items-center text-gray-500 hover:text-gray-900 mb-12 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Services
        </Link>
        
        <h1 className="text-4xl md:text-6xl font-display font-black text-gray-900 mb-6 tracking-tight">
          {service.title}
        </h1>
        
        <div className="prose prose-lg text-gray-600 font-light leading-relaxed">
          <p>{service.description}</p>
          <p className="mt-6">
            Our team works closely with you to understand your goals and deliver a solution that fits your exact requirements. We use plain, simple language and keep you updated every step of the way.
          </p>
        </div>

        <div className="mt-16">
          <Link href="/#contact" scroll={false} className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-gray-900 hover:bg-gray-800 transition-colors rounded-full">
            Discuss Your Project
          </Link>
        </div>
      </div>
    </main>
  );
}
