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
  title: {
    default: 'Kanzen Technologies | Engineering Digital Excellence',
    template: '%s | Kanzen Technologies',
  },
  description: 'Kanzen Technologies builds high-performance digital products, scalable platforms, and intelligent solutions for startups and modern businesses.',
  keywords: ['Software Development', 'Web Development', 'Mobile Apps', 'AI Automation', 'SaaS', 'Startups', 'Tech Agency', 'Kanzen Technologies'],
  authors: [{ name: 'Kanzen Technologies' }],
  creator: 'Kanzen Technologies',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kanzen.tech',
    title: 'Kanzen Technologies | Engineering Digital Excellence',
    description: 'Kanzen Technologies builds high-performance digital products, scalable platforms, and intelligent solutions for startups and modern businesses.',
    siteName: 'Kanzen Technologies',
    images: [
      {
        url: 'https://kanzen.tech/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Kanzen Technologies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kanzen Technologies | Engineering Digital Excellence',
    description: 'Kanzen Technologies builds high-performance digital products, scalable platforms, and intelligent solutions for startups and modern businesses.',
    images: ['https://kanzen.tech/og-image.jpg'],
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
