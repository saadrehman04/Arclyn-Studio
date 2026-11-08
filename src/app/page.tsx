import React from 'react';
import type { Metadata } from 'next';
import { Hero } from '@/components/home/Hero';
import { Manifesto } from '@/components/home/Manifesto';
import { WorkStack } from '@/components/home/WorkStack';
import { DualCrossingTicker } from '@/components/home/DualCrossingTicker';
import { ServicesOverview } from '@/components/home/ServicesOverview';
import { Process } from '@/components/home/Process';
import { ProjectsMarquee } from '@/components/home/ProjectsMarquee';
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
    <div className="flex min-h-screen flex-col bg-[var(--bg)]">
      <Hero />
      <Manifesto />
      <WorkStack />
      <DualCrossingTicker />
      <ServicesOverview />
      <Process />
      <ProjectsMarquee />
      <PartnerProgramSection />
      <TeamSection />
      <TestimonialsSection />
      <IndustriesStrip />
      <FinalCta />
    </div>
  );
}
