import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { SmoothScroll } from '@/components/SmoothScroll';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://kanzen.tech'),
  title: {
    default: 'Kanzen Technologies | Engineering Digital Excellence',
    template: '%s | Kanzen Technologies',
  },
  description: 'Kanzen Technologies builds high-performance digital products, scalable platforms, and intelligent solutions for startups and modern businesses. We specialize in custom software, AI integration, and enterprise architecture.',
  keywords: [
    'Software Development', 'Web Development', 'Mobile Apps', 'AI Automation', 
    'SaaS', 'Startups', 'Tech Agency', 'Kanzen Technologies', 'Custom Software',
    'Enterprise Architecture', 'Cloud Solutions', 'Digital Transformation',
    'React', 'Next.js', 'Node.js', 'TypeScript', 'UI/UX Design'
  ],
  authors: [{ name: 'Kanzen Technologies', url: 'https://kanzen.tech' }],
  creator: 'Kanzen Technologies',
  publisher: 'Kanzen Technologies',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kanzen.tech',
    title: 'Kanzen Technologies | Engineering Digital Excellence',
    description: 'Kanzen Technologies builds high-performance digital products, scalable platforms, and intelligent solutions for startups and modern businesses.',
    siteName: 'Kanzen Technologies',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Kanzen Technologies - Engineering Digital Excellence',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kanzen Technologies | Engineering Digital Excellence',
    description: 'Kanzen Technologies builds high-performance digital products, scalable platforms, and intelligent solutions for startups and modern businesses.',
    images: ['/og-image.jpg'],
    creator: '@kanzentech',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification-code', // Placeholder for actual verification
  },
  category: 'technology',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable}`} suppressHydrationWarning>
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@700,900&display=swap" rel="stylesheet" />
        <style>{`
          :root {
            --font-satoshi: 'Satoshi', sans-serif;
          }
        `}</style>
      </head>
      <body suppressHydrationWarning className="bg-primary text-text-primary font-sans antialiased selection:bg-accent-primary/20 selection:text-accent-primary">
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
