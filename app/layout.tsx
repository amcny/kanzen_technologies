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
    default: 'Kanzen Technologies | Custom Software & Digital Products',
    template: '%s | Kanzen Technologies',
  },
  description: 'Kanzen Technologies builds high-quality software, mobile apps, and digital platforms. We help businesses grow with custom technology solutions, AI integration, and expert engineering.',
  keywords: [
    'Software Development Company', 'Custom Software Development', 'Web App Development', 'Mobile App Development', 
    'AI Integration', 'SaaS Development', 'Tech Agency', 'Kanzen Technologies', 'Digital Transformation',
    'Enterprise Software', 'React Development', 'Next.js Experts', 'Node.js Development', 'UI/UX Design',
    'Continuous Improvement', 'Software Engineering'
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
  icons: {
    icon: 'https://i.ibb.co/4Zj8QkF3/kanzen-circle.png',
    apple: 'https://i.ibb.co/4Zj8QkF3/kanzen-circle.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kanzen.tech',
    title: 'Kanzen Technologies | Custom Software & Digital Products',
    description: 'Kanzen Technologies builds high-quality software, mobile apps, and digital platforms. We help businesses grow with custom technology solutions, AI integration, and expert engineering.',
    siteName: 'Kanzen Technologies',
    images: [
      {
        url: '/kanzen_share.png',
        width: 1200,
        height: 1200,
        alt: 'Kanzen Technologies - Custom Software & Digital Products',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kanzen Technologies | Custom Software & Digital Products',
    description: 'Kanzen Technologies builds high-quality software, mobile apps, and digital platforms. We help businesses grow with custom technology solutions, AI integration, and expert engineering.',
    images: ['/kanzen_share.png'],
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
