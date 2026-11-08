import type { Metadata } from 'next';
import { Inter_Tight, JetBrains_Mono, Inter } from 'next/font/google';
import 'lenis/dist/lenis.css';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SmoothScroll } from '@/components/shared/SmoothScroll';
import { CustomCursor } from '@/components/shared/CustomCursor';

const interTight = Inter_Tight({
  variable: '--font-display-raw',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const inter = Inter({
  variable: '--font-inter-raw',
  subsets: ['latin'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-mono-raw',
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
      className={`${interTight.variable} ${inter.variable} ${jetbrainsMono.variable} dark`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col bg-[var(--bg)] text-slate-100 font-sans antialiased selection:bg-white/25 selection:text-white">
        <SmoothScroll>
          <CustomCursor />
          <Navbar />
          <main className="flex-1 relative z-10">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
