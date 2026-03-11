import { ReactNode } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function LegalLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-secondary pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <Link href="/" className="text-text-secondary hover:text-accent-primary transition-colors inline-flex items-center gap-2 mb-8 font-medium">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <div className="bg-primary rounded-[2rem] p-8 md:p-16 shadow-sm border border-border-light">
          <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-headings:text-text-primary prose-headings:tracking-tight prose-h2:mt-16 prose-h2:mb-6 prose-h3:mt-10 prose-h3:mb-4 prose-p:text-text-secondary prose-p:leading-relaxed prose-p:mb-8 prose-a:text-accent-primary hover:prose-a:text-accent-secondary prose-strong:text-text-primary prose-ul:text-text-secondary prose-li:text-text-secondary">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
