import { ReactNode } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function LegalLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-primary pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <Link href="/" className="text-accent-primary hover:text-accent-secondary transition-colors inline-flex items-center gap-2 mb-12 font-medium">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <div className="prose prose-lg prose-slate max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-accent-primary hover:prose-a:text-accent-secondary">
          {children}
        </div>
      </div>
    </div>
  );
}
