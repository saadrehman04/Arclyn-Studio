import React from 'react';
import type { Metadata } from 'next';
import { HeroSection } from '@/components/home/HeroSection';
import { DualCrossingTicker } from '@/components/home/DualCrossingTicker';
import { Capability3DSection } from '@/components/home/Capability3DSection';
import { ServicesOverview } from '@/components/home/ServicesOverview';
import { FeaturedProjects } from '@/components/home/FeaturedProjects';
import { PartnerProgramSection } from '@/components/home/PartnerProgramSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { TeamSection } from '@/components/home/TeamSection';
import { PricingOverview } from '@/components/home/PricingOverview';
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
      {/* 1. Hero Section (Cheesecake Factory active first, 3D ContainerScroll) */}
      <HeroSection />

      {/* 2. Signature Dual Crossing Ticker */}
      <DualCrossingTicker />

      {/* 3. 3D Iridescent Torus & Asymmetric 2x2 Capabilities */}
      <Capability3DSection />

      {/* 4. Smart Solutions for Modern Businesses (Services Overview) */}
      <ServicesOverview />

      {/* 5. Audited Case Studies & Shipped Products (Shifted before partner section) */}
      <FeaturedProjects />

      {/* 6. Partner Program Section (Replaces AI human expertise section with 30%-40% revenue share) */}
      <PartnerProgramSection />

      {/* 7. What Founders Say (Real Client Testimonials & Verifiable ROI) */}
      <TestimonialsSection />

      {/* 8. The Architects Behind the Code */}
      <TeamSection />

      {/* 9. Clear, Predictable Milestone Investment (PKR Packages & Terms) */}
      <PricingOverview />

      {/* 10. Industry Domains Strip */}
      <IndustriesStrip />

      {/* 11. High-Impact Final CTA */}
      <FinalCta />
    </div>
  );
}
