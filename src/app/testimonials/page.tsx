import React from 'react';
import type { Metadata } from 'next';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { PageHero, PageCta } from '@/components/shared/PageHero';

export const metadata: Metadata = {
  title: 'Client Testimonials & Reviews — Real Stories',
  description:
    'Read client testimonials from founders and tech leaders who launched high-performance websites, SaaS platforms, and AI workflows with Arclyn Studio.',
};

export default function TestimonialsPage() {
  return (
    <div className="relative min-h-screen bg-[var(--bg)]">
      <PageHero
        eyebrow="Client stories"
        title={'Hear it from the brands\nthat trust us.'}
        accentWords={[6, 7]}
        description="Founders and teams on what it's like to design, build and launch with Arclyn Studio."
      />

      <TestimonialsSection hideHeader className="!pt-0" />

      <PageCta
        title={'Want to be our next\nsuccess story?'}
        accentWords={[5, 6]}
        description="We scope architecture, delivery timeline and fixed milestone pricing in a single 15-minute call."
        primary={{ href: '/contact', label: 'Start your project' }}
        secondary={{ href: '/work', label: 'See case studies' }}
      />
    </div>
  );
}
