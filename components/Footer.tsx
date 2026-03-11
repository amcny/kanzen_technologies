'use client';

import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-primary pt-20 pb-10 border-t border-border-light">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <a href="#home" className="text-2xl font-display font-bold tracking-tight text-text-primary mb-6 inline-block">
              Kanzen
            </a>
            <p className="text-text-secondary max-w-sm leading-relaxed mb-8">
              Engineering digital excellence for ambitious startups and modern businesses worldwide.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-text-primary mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-text-secondary hover:text-accent-primary transition-colors">About Us</a></li>
              <li><a href="#work" className="text-text-secondary hover:text-accent-primary transition-colors">Our Work</a></li>
              <li><a href="#process" className="text-text-secondary hover:text-accent-primary transition-colors">Process</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-text-primary mb-6">Services</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-text-secondary hover:text-accent-primary transition-colors">Custom Software</a></li>
              <li><a href="#services" className="text-text-secondary hover:text-accent-primary transition-colors">AI & Automation</a></li>
              <li><a href="#services" className="text-text-secondary hover:text-accent-primary transition-colors">Web & SaaS</a></li>
              <li><a href="#services" className="text-text-secondary hover:text-accent-primary transition-colors">Mobile Apps</a></li>
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
