import React from 'react';
import type { Metadata } from 'next';
import { WorkFilterGrid } from '@/components/work/WorkFilterGrid';
import { PageHero, PageCta } from '@/components/shared/PageHero';
import { PROJECTS } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Our Work & Case Studies',
  description:
    'Explore production case studies delivered by Arclyn Studio — luxury real estate platforms, e-commerce storefronts, autonomous AI agents, and custom SaaS dashboards.',
};

export default function WorkPage() {
  return (
    <div className="relative min-h-screen bg-[var(--bg)]">
      <PageHero
        eyebrow={`Portfolio · ${PROJECTS.length} launches`}
        title={'Work that delivers\nreal business impact.'}
        accentWords={[3, 4, 5]}
        description="Every case study below is real code in production — from consumer e-commerce and luxury portals to autonomous multi-agent pipelines and data dashboards."
      />

      <section className="px-5 pb-8 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <WorkFilterGrid />
        </div>
      </section>

      <PageCta
        title={'Have a project with\nsimilar requirements?'}
        accentWords={[4, 5]}
        description="We scope architecture, delivery timeline and fixed milestone pricing in a single 15-minute call."
        primary={{ href: '/contact', label: 'Start your project' }}
        secondary={{ href: '/pricing', label: 'Review pricing' }}
      />
    </div>
  );
}
