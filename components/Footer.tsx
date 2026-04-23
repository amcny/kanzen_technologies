'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLenis } from 'lenis/react';

export function Footer() {
  const pathname = usePathname();
  const lenis = useLenis();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#') && pathname === '/') {
      e.preventDefault();
      const targetId = href.replace('/#', '');
      const element = document.getElementById(targetId);
      if (element) {
        const y = element.getBoundingClientRect().top + window.scrollY - 80;
        if (lenis) {
          lenis.scrollTo(y, { force: true });
        } else {
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }
      sessionStorage.setItem('lenis_ignore_hash', href);
      window.history.pushState(null, '', href);
    }
  };

  return (
    <footer className="bg-primary pt-32 pb-16 border-t border-gray-100 relative overflow-hidden">
      {/* Massive Faded Background Text */}
      <div 
        className="absolute top-24 left-0 w-full overflow-hidden flex justify-center pointer-events-none select-none z-0"
        style={{
          maskImage: "linear-gradient(to bottom, black 0%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 0%, transparent 100%)"
        }}
      >
        <h2 className="text-[26vw] leading-none font-display font-black text-gray-900/5 tracking-tighter whitespace-nowrap">
          Kanzen
        </h2>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 mt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-16 mb-24">
          <div className="col-span-2 lg:col-span-2">
            <Link 
              href="/" 
              onClick={(e) => {
                if (pathname === '/') {
                  e.preventDefault();
                  if (lenis) {
                    lenis.scrollTo(0);
                  } else {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }
              }}
              className="flex items-center gap-3 mb-6 group"
            >
              <div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <span className="text-white font-display font-bold text-xl">K</span>
              </div>
              <span className="text-2xl font-display font-bold tracking-tight text-gray-900">
                Kanzen
              </span>
            </Link>
            <p className="text-gray-600 max-w-sm leading-relaxed mb-8 font-light">
              Building high-quality software for businesses in India.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-gray-900 mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/#about" scroll={false} onClick={(e) => handleNavClick(e, '/#about')} className="text-gray-600 hover:text-gray-900 transition-colors font-light">About Us</Link></li>
              <li><Link href="/#work" scroll={false} onClick={(e) => handleNavClick(e, '/#work')} className="text-gray-600 hover:text-gray-900 transition-colors font-light">Our Work</Link></li>
              <li><Link href="/#process" scroll={false} onClick={(e) => handleNavClick(e, '/#process')} className="text-gray-600 hover:text-gray-900 transition-colors font-light">Process</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-gray-900 mb-6">Services</h4>
            <ul className="space-y-4">
              <li><Link href="/#services" scroll={false} onClick={(e) => handleNavClick(e, '/#services')} className="text-gray-600 hover:text-gray-900 transition-colors font-light">Custom Software</Link></li>
              <li><Link href="/#services" scroll={false} onClick={(e) => handleNavClick(e, '/#services')} className="text-gray-600 hover:text-gray-900 transition-colors font-light">AI & Automation</Link></li>
              <li><Link href="/#services" scroll={false} onClick={(e) => handleNavClick(e, '/#services')} className="text-gray-600 hover:text-gray-900 transition-colors font-light">Web & SaaS</Link></li>
              <li><Link href="/#services" scroll={false} onClick={(e) => handleNavClick(e, '/#services')} className="text-gray-600 hover:text-gray-900 transition-colors font-light">Mobile Apps</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-gray-900 mb-6">Social</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors font-light">LinkedIn</a></li>
              <li><a href="mailto:kanzen.technology@gmail.com" className="text-gray-600 hover:text-gray-900 transition-colors font-light">Email Us</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
          <p className="text-sm text-gray-500 font-light text-center md:text-left">
            © 2026 Kanzen Technologies Private Limited. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/legal/privacy-policy" className="text-sm text-gray-500 hover:text-gray-900 transition-colors font-light">Privacy Policy</Link>
            <Link href="/legal/terms-of-service" className="text-sm text-gray-500 hover:text-gray-900 transition-colors font-light">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
