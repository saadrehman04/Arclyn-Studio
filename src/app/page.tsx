import React from 'react';
import type { Metadata } from 'next';
import { HeroSection } from '@/components/home/HeroSection';
import { DualCrossingTicker } from '@/components/home/DualCrossingTicker';
import { TechMarquee } from '@/components/home/TechMarquee';
import { ManifestoSection } from '@/components/home/ManifestoSection';
import { Capability3DSection } from '@/components/home/Capability3DSection';
import { ServicesOverview } from '@/components/home/ServicesOverview';
import { BentoGridSection } from '@/components/home/BentoGridSection';
import { StatementMarquee } from '@/components/home/StatementMarquee';
import { FeaturedProjects } from '@/components/home/FeaturedProjects';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { TeamSection } from '@/components/home/TeamSection';
import { PricingOverview } from '@/components/home/PricingOverview';
import { IndustriesStrip } from '@/components/home/IndustriesStrip';
import { PartnerTeaser } from '@/components/home/PartnerTeaser';
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
      {/* 1. Hero Section (Pixel-matched with top light ribbon, Syne typography, 5.0 rating, dual pill buttons, and interactive project tabs with 3D ContainerScroll) */}
      <HeroSection />

      {/* 2. Signature Dual Crossing Ticker (Fiery Orange & Dark Slate Slanted Ribbons) */}
      <DualCrossingTicker />

      {/* 3. Infinite Tech Stack Marquee Ribbon */}
      <TechMarquee />

      {/* 3. Editorial Typography Manifesto Statement */}
      <ManifestoSection />

      {/* 4. 3D Iridescent Torus & Asymmetric 2x2 Capabilities */}
      <Capability3DSection />

      {/* 5. Smart Solutions for Modern Businesses (Services Overview with gold/cyan circular icons) */}
      <ServicesOverview />

      {/* 6. Signature Bento Grid: AI + Human Expertise (4-card asymmetric layout with live telemetry) */}
      <BentoGridSection />

      {/* 7. Inverted Kinetic Statement Marquee */}
      <StatementMarquee />

      {/* 8. Audited Case Studies & Shipped Products (2x2 verified production projects with live URLs) */}
      <FeaturedProjects />

      {/* 9. Driven by Innovation, Grounded in Results (Why Choose Us - 6-card broken rhythm with real portraits) */}
      <WhyChooseUs />

      {/* 10. The Architects Behind the Code (Monochrome team portraits with color hover reveal) */}
      <TeamSection />

      {/* 11. Clear, Predictable Milestone Investment (3 pricing tiers + interactive scope calculator link) */}
      <PricingOverview />

      {/* 12. Industry Concept Architectures */}
      <IndustriesStrip />

      {/* 13. Partner & Referral Program Teaser */}
      <PartnerTeaser />

      {/* 14. High-Impact Final CTA with signature bottom light ribbon and dual magnetic pill buttons */}
      <FinalCta />
    </div>
  );
}
