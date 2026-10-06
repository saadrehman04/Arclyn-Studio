import type { Metadata } from 'next';
import { Outfit, JetBrains_Mono, Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SmoothScroll } from '@/components/shared/SmoothScroll';
import { CustomCursor } from '@/components/shared/CustomCursor';
import { LiquidChromeBackdrop } from '@/components/shared/LiquidChromeBackdrop';

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://arclynstudio.com'),
  title: {
    default: 'Arclyn Studio — Full-Stack Development & AI Systems',
    template: '%s | Arclyn Studio',
  },
  description:
    'Arclyn Studio combines full-stack development with AI automation to turn your idea into a market-ready product — websites, apps, and intelligent systems built to actually grow your business.',
  keywords: [
    'Arclyn Studio',
    'Full-Stack Development',
    'AI Agents',
    'LangChain',
    'LangGraph',
    'Next.js Agency',
    'Tailwind CSS',
    'Web Development Studio',
    'Workflow Automation',
    'n8n',
    'SaaS Development',
  ],
  authors: [{ name: 'Arclyn Studio', url: 'https://arclynstudio.com' }],
  creator: 'Arclyn Studio',
  publisher: 'Arclyn Studio',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://arclynstudio.com',
    siteName: 'Arclyn Studio',
    title: 'Arclyn Studio — Full-Stack Development & AI Systems',
    description:
      'Websites, Apps & AI Systems That Actually Grow Your Business. Ship in weeks, not months.',
    images: [
      {
        url: '/brand/arclyn-logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Arclyn Studio — Full-Stack Development & AI Systems',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arclyn Studio — Full-Stack Development & AI Systems',
    description: 'Build Smarter. Launch Faster. Websites, Apps & AI Systems.',
    images: ['/brand/arclyn-logo.jpg'],
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon.png', sizes: '512x512', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [{ url: '/icon.png', sizes: '512x512', type: 'image/png' }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} ${jetbrainsMono.variable} dark`}
    >
      <head>
        <link href="https://db.onlinewebfonts.com/c/0e6de1ec911a2e267ff136bbdd384a44?family=Helvetica+Neue+Light" rel="stylesheet" />
      </head>
      <body className="min-h-screen flex flex-col bg-[#050711] text-slate-100 font-sans antialiased selection:bg-purple-600/30 selection:text-white bg-noise">
        <SmoothScroll>
          <CustomCursor />
          <LiquidChromeBackdrop />
          <Navbar />
          <main className="flex-1 relative z-10">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
