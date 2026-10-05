import React from 'react';
import type { Metadata } from 'next';
import { HeroParallaxScrollScene } from '@/components/home/HeroParallaxScrollScene';
import { DualCrossingTicker } from '@/components/home/DualCrossingTicker';
import { Capability3DSection } from '@/components/home/Capability3DSection';
import { ServicesOverview } from '@/components/home/ServicesOverview';
import { FeaturedProjects } from '@/components/home/FeaturedProjects';
import { PartnerProgramSection } from '@/components/home/PartnerProgramSection';
import { TeamSection } from '@/components/home/TeamSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { IndustriesStrip } from '@/components/home/IndustriesStrip';
import { FinalCta } from '@/components/home/FinalCta';

export const metadata: Metadata = {
  title: 'Arclyn Studio — Full-Stack Web Engineering & Autonomous AI Systems',
  description: 'Arclyn Studio architects high-performance Next.js web applications, mobile platforms, and autonomous AI automation pipelines with sub-second latency and zero technical debt.',
  openGraph: {
    title: 'Arclyn Studio — Full-Stack Web Engineering & Autonomous AI Systems',
    description: 'Bespoke web applications, full-stack systems, and autonomous AI automation engineered for measurable market dominance.',
    url: 'https://arclynstudio.com',
    siteName: 'Arclyn Studio',
    images: [
      {
        url: '/brand/arclyn-logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Arclyn Studio Brand Mark',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#050711]">
      {/* 1. Choreographed GSAP Parallax Scene: Hero transforming into Following Green Section */}
      <HeroParallaxScrollScene />

      {/* 3. Signature Dual Crossing Ticker */}
      <DualCrossingTicker />

      {/* 3. 3D Iridescent Torus & Asymmetric 2x2 Capabilities */}
      <Capability3DSection />

      {/* 4. Smart Solutions for Modern Businesses (Services Overview) */}
      <ServicesOverview />

      {/* 5. Audited Case Studies & Shipped Products */}
      <FeaturedProjects />

      {/* 6. Partner Program Section (30%-40% revenue share) */}
      <PartnerProgramSection />

      {/* 7. Senior Leadership (The Architects Behind the Code) - Placed before Testimonials */}
      <TeamSection />

      {/* 8. What Founders Say (Real Client Testimonials & Verifiable ROI) */}
      <TestimonialsSection />

      {/* 9. Industry Domains Strip */}
      <IndustriesStrip />

      {/* 10. High-Impact Final CTA */}
      <FinalCta />
    </div>
  );
}
