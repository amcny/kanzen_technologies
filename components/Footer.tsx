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
        if (lenis) {
          lenis.scrollTo(element, { offset: -80 });
        } else {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
      window.history.pushState(null, '', href);
    }
  };

  return (
    <footer className="bg-primary pt-20 pb-10 border-t border-border-light">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
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
              className="text-2xl font-display font-bold tracking-tight text-text-primary mb-6 inline-block"
            >
              Kanzen
            </Link>
            <p className="text-text-secondary max-w-sm leading-relaxed mb-8">
              Crafting premium digital solutions for forward-thinking brands globally.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-text-primary mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/#about" onClick={(e) => handleNavClick(e, '/#about')} className="text-text-secondary hover:text-accent-primary transition-colors">About Us</Link></li>
              <li><Link href="/#work" onClick={(e) => handleNavClick(e, '/#work')} className="text-text-secondary hover:text-accent-primary transition-colors">Our Work</Link></li>
              <li><Link href="/#process" onClick={(e) => handleNavClick(e, '/#process')} className="text-text-secondary hover:text-accent-primary transition-colors">Process</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-text-primary mb-6">Services</h4>
            <ul className="space-y-4">
              <li><Link href="/#services" onClick={(e) => handleNavClick(e, '/#services')} className="text-text-secondary hover:text-accent-primary transition-colors">Custom Software</Link></li>
              <li><Link href="/#services" onClick={(e) => handleNavClick(e, '/#services')} className="text-text-secondary hover:text-accent-primary transition-colors">AI & Automation</Link></li>
              <li><Link href="/#services" onClick={(e) => handleNavClick(e, '/#services')} className="text-text-secondary hover:text-accent-primary transition-colors">Web & SaaS</Link></li>
              <li><Link href="/#services" onClick={(e) => handleNavClick(e, '/#services')} className="text-text-secondary hover:text-accent-primary transition-colors">Mobile Apps</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-text-primary mb-6">Social</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-text-secondary hover:text-accent-primary transition-colors">LinkedIn</a></li>
              <li><a href="mailto:contact@kanzen.tech" className="text-text-secondary hover:text-accent-primary transition-colors">Email Us</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border-light flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text-secondary">
            © 2026 Kanzen Technologies Private Limited. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/legal/privacy-policy" className="text-sm text-text-secondary hover:text-accent-primary transition-colors">Privacy Policy</Link>
            <Link href="/legal/terms-of-service" className="text-sm text-text-secondary hover:text-accent-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
