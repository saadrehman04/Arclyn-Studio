import React from 'react';
import type { Metadata } from 'next';
import { ShieldCheck } from 'lucide-react';
import { PricingCalculator } from '@/components/pricing/PricingCalculator';
import { PageHero, PageCta } from '@/components/shared/PageHero';

export const metadata: Metadata = {
  title: 'Pricing & Add-Ons — Transparent Rates',
  description:
    'Explore straightforward pricing tiers for starter websites, business web apps, e-commerce stores, and custom AI systems. Fixed milestones (50% / 30% / 20%) and modular add-ons.',
};

export default function PricingPage() {
  return (
    <div className="relative min-h-screen bg-[var(--bg)]">
      <PageHero
        eyebrow="Pricing"
        title={'Transparent pricing.\nEngineered for ROI.'}
        accentWords={[2, 3, 4]}
        description="No endless billable hours or vague retainers. Pick a package or configure add-ons with clear, milestone-based billing."
      >
        <span className="inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-4 py-2 text-xs font-medium text-emerald-300 sm:text-sm">
          <ShieldCheck className="h-4 w-4 shrink-0" />
          50% kickoff · 30% design approval · 20% launch
        </span>
      </PageHero>

      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <PricingCalculator />
        </div>
      </section>

      <PageCta
        title={'Need an itemized\ncustom quote?'}
        accentWords={[3, 4]}
        description="Book a 15-minute scoping call or send us your brief. We reply with an architecture recommendation and exact pricing within 12 hours."
        primary={{ href: '/contact', label: 'Get your custom quote' }}
        secondary={{ href: 'https://calendly.com/saadrehman', label: 'Book a discovery call', external: true }}
      />
    </div>
  );
}
