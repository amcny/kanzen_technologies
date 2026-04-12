'use client';

import Link from 'next/link';
import { FadeIn } from './FadeIn';

const services = [
  {
    title: 'Custom Software Development',
    slug: 'custom-software-development',
    description: 'Scalable, secure, and robust software tailored to your specific business needs.',
    colSpan: 'col-span-12 lg:col-span-8',
    rowSpan: 'row-span-1',
    visual: 'software',
  },
  {
    title: 'AI & Automation',
    slug: 'ai-automation',
    description: 'Intelligent workflows and AI agents to 10x your team\'s productivity.',
    colSpan: 'col-span-12 md:col-span-6 lg:col-span-4',
    rowSpan: 'row-span-1',
    visual: 'ai',
  },
  {
    title: 'Web App Development',
    slug: 'web-development',
    description: 'High-performance, responsive web applications built with modern frameworks.',
    colSpan: 'col-span-12 md:col-span-6 lg:col-span-4',
    rowSpan: 'row-span-1',
    visual: 'web',
  },
  {
    title: 'Mobile App Development',
    slug: 'mobile-app-development',
    description: 'Native and cross-platform mobile experiences for iOS and Android.',
    colSpan: 'col-span-12 md:col-span-4 lg:col-span-4',
    rowSpan: 'row-span-1',
    visual: 'mobile',
  },
  {
    title: 'UI/UX Design',
    slug: 'ui-ux-design',
    description: 'Intuitive, user-centric interfaces that drive engagement and conversion.',
    colSpan: 'col-span-12 md:col-span-4 lg:col-span-4',
    rowSpan: 'row-span-1',
    visual: 'design',
  },
  {
    title: 'Cloud & Server',
    slug: 'cloud-server-management',
    description: 'Secure, scalable cloud infrastructure and DevOps pipelines.',
    colSpan: 'col-span-12 md:col-span-4 lg:col-span-4',
    rowSpan: 'row-span-1',
    visual: 'cloud',
  },
];

const ServiceVisual = ({ type }: { type: string }) => {
  switch (type) {
    case 'software':
      return (
        <div className="w-full h-full min-h-[160px] bg-blue-50/50 rounded-xl p-4 flex items-center justify-center relative overflow-hidden border border-blue-100 group-hover:border-blue-300 transition-colors duration-500">
          
          {/* Main App Window */}
          <div className="relative w-48 h-32 bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden group-hover:shadow-md transition-all duration-500 group-hover:-translate-y-1 z-10">
            {/* Window Header */}
            <div className="h-4 bg-slate-100 border-b border-slate-200 flex items-center px-1.5 gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
              <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
            </div>
            {/* Window Body */}
            <div className="flex h-full">
              {/* Sidebar */}
              <div className="w-12 h-full bg-slate-50 border-r border-slate-100 p-2 flex flex-col gap-1.5">
                <div className="w-full h-2 bg-slate-200 rounded-sm" />
                <div className="w-3/4 h-2 bg-slate-200 rounded-sm" />
                <div className="w-5/6 h-2 bg-slate-200 rounded-sm" />
              </div>
              {/* Content */}
              <div className="flex-1 p-3 flex flex-col gap-2 relative">
                <div className="w-1/2 h-3 bg-blue-100 rounded-sm" />
                <div className="flex gap-2 mt-1">
                  <div className="w-8 h-8 bg-slate-100 rounded-sm" />
                  <div className="flex-1 flex flex-col gap-1.5 justify-center">
                    <div className="w-full h-1.5 bg-slate-100 rounded-full" />
                    <div className="w-4/5 h-1.5 bg-slate-100 rounded-full" />
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="w-8 h-8 bg-slate-100 rounded-sm" />
                  <div className="flex-1 flex flex-col gap-1.5 justify-center">
                    <div className="w-full h-1.5 bg-slate-100 rounded-full" />
                    <div className="w-2/3 h-1.5 bg-slate-100 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Code Badge */}
          <div className="absolute bottom-4 right-8 w-10 h-10 bg-blue-600 text-white rounded-lg shadow-lg flex items-center justify-center font-mono font-bold text-sm group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500 z-20">
            {'</>'}
          </div>

          {/* Floating Gear/Custom Badge */}
          <div className="absolute top-4 left-8 w-10 h-10 bg-slate-800 text-white rounded-lg shadow-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500 z-20">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
          </div>
          
          {/* Background decorative elements */}
          <div className="absolute right-4 bottom-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-colors duration-500" />
        </div>
      );
    case 'ai':
      return (
        <div className="w-full h-full min-h-[140px] bg-gray-50 rounded-xl p-4 flex flex-col gap-3 relative overflow-hidden border border-gray-200">
          <div className="self-end w-2/3 h-8 bg-blue-100 rounded-2xl rounded-tr-sm" />
          <div className="self-start w-3/4 h-12 bg-white border border-gray-100 shadow-sm rounded-2xl rounded-tl-sm flex items-center px-3 gap-2">
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
          </div>
          <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-purple-500/10 rounded-full blur-xl group-hover:bg-purple-500/20 transition-colors duration-500" />
        </div>
      );
    case 'web':
      return (
        <div className="w-full h-full min-h-[140px] bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col">
          <div className="h-6 bg-gray-100 border-b border-gray-200 flex items-center px-2 gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
            <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
            <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
            <div className="ml-2 w-1/2 h-3 bg-white rounded-sm" />
          </div>
          <div className="p-3 flex flex-col gap-2 flex-1">
            <div className="w-full h-16 bg-gray-50 rounded border border-gray-100" />
            <div className="flex gap-2">
              <div className="w-1/3 h-10 bg-gray-50 rounded border border-gray-100" />
              <div className="w-2/3 h-10 bg-gray-50 rounded border border-gray-100" />
            </div>
          </div>
        </div>
      );
    case 'mobile':
      return (
        <div className="w-full h-full min-h-[140px] flex items-center justify-center relative overflow-hidden">
          <div className="w-24 h-40 bg-white rounded-2xl border-4 border-gray-800 shadow-lg relative flex flex-col items-center p-2 group-hover:-translate-y-2 transition-transform duration-500">
            <div className="w-8 h-1 bg-gray-800 rounded-full mb-2" />
            <div className="w-full h-8 bg-gray-100 rounded-lg mb-2" />
            <div className="w-full flex gap-1 mb-2">
              <div className="w-1/2 h-10 bg-gray-100 rounded-lg" />
              <div className="w-1/2 h-10 bg-gray-100 rounded-lg" />
            </div>
            <div className="w-full h-full bg-gray-100 rounded-lg" />
          </div>
        </div>
      );
    case 'design':
      return (
        <div className="w-full h-full min-h-[140px] bg-gray-50 rounded-xl border border-gray-200 relative overflow-hidden">
          <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-pink-100 border border-pink-200 group-hover:scale-110 transition-transform duration-500" />
          <div className="absolute bottom-4 right-4 w-16 h-16 rounded-lg bg-blue-100 border border-blue-200 rotate-12 group-hover:rotate-45 transition-transform duration-500" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4">
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-gray-900 -translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
              <path d="m13 13 6 6" />
            </svg>
          </div>
        </div>
      );
    case 'cloud':
      return (
        <div className="w-full h-full min-h-[140px] bg-gray-50 rounded-xl border border-gray-200 p-4 relative overflow-hidden flex items-center justify-center">
          <div className="flex gap-4 items-center">
            <div className="w-8 h-12 bg-white rounded border border-gray-200 shadow-sm flex flex-col justify-evenly items-center py-1 group-hover:border-blue-400 transition-colors">
              <div className="w-4 h-1 bg-blue-400/60 rounded-full" />
              <div className="w-4 h-1 bg-blue-400/60 rounded-full" />
              <div className="w-4 h-1 bg-blue-400/60 rounded-full" />
            </div>
            <div className="w-8 h-0.5 bg-gray-200 relative">
              <div className="absolute inset-0 bg-blue-400 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
            </div>
            <div className="w-10 h-10 bg-white rounded-full border border-gray-200 shadow-sm flex items-center justify-center group-hover:border-blue-400 transition-colors">
              <div className="w-4 h-4 bg-blue-400/30 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      );
    default:
      return null;
  }
};

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-white border-y border-gray-100 overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_0%,transparent_100%)] pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-gray-900 tracking-tighter pb-4 mb-2 text-balance">
              How We Can Help You Grow
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg md:text-xl text-gray-500 leading-relaxed font-light">
              Everything you need to build, launch, and scale your digital products with precision.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {services.map((service, index) => (
            <div 
              key={service.title} 
              className={`${service.colSpan} ${service.rowSpan} group`}
            >
              <FadeIn delay={index * 0.1} className="h-full">
                <Link 
                  href={`/services/${service.slug}`} 
                  className={`flex flex-col ${service.colSpan.includes('lg:col-span-8') ? 'lg:flex-row lg:items-center' : ''} h-full bg-white border border-gray-200/80 rounded-2xl p-6 md:p-8 hover:shadow-lg hover:border-gray-300 transition-all duration-500 ease-out hover:-translate-y-1`}
                >
                  <div className={`mb-6 md:mb-8 ${service.colSpan.includes('lg:col-span-8') ? 'lg:mb-0 lg:mr-8 lg:w-3/5 lg:h-full' : 'flex-1'}`}>
                    <ServiceVisual type={service.visual} />
                  </div>
                  
                  <div className={`mt-auto ${service.colSpan.includes('lg:col-span-8') ? 'lg:w-2/5 lg:mt-0' : ''}`}>
                    <h3 className="text-xl md:text-2xl font-display font-bold tracking-tight text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </Link>
              </FadeIn>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
