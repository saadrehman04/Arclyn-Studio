import React from 'react';
import type { Metadata } from 'next';
import { WorkFilterGrid } from '@/components/work/WorkFilterGrid';
import { Sparkles, ShieldCheck } from 'lucide-react';
import { PageHeroRibbon } from '@/components/shared/PageHeroRibbon';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Work & Case Studies',
  description:
    'Explore production case studies delivered by Arclyn Studio — luxury real estate platforms, e-commerce storefronts, autonomous AI agents, and custom SaaS dashboards.',
};

export default function WorkPage() {
  return (
    <div className="pt-32 pb-24 bg-cosmic-grid min-h-screen relative overflow-hidden">
      {/* 3D Liquid Chrome Ribbon Background */}
      <PageHeroRibbon />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-3/4 h-80 bg-radial-hero pointer-events-none opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Page Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 w-fit mb-4">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span className="text-xs font-semibold uppercase tracking-wider text-purple-300">
              Verified Production Portfolio
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Work That Delivers <br />
            <span className="text-gradient">Real Business Impact</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
            Every case study below represents real code in production — from consumer e-commerce and luxury portals to autonomous multi-agent pipelines and enterprise data dashboards.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-emerald-400">
            <ShieldCheck className="w-4 h-4" />
            <span>100% Real, Verifiable Projects from Founder Portfolio (saadr.tech)</span>
          </div>
        </div>

        {/* Filter Tabs & Grid */}
        <WorkFilterGrid />

        {/* Bottom Project Inquiry Banner */}
        <div className="mt-24 rounded-3xl glass-panel p-8 sm:p-12 text-center max-w-4xl mx-auto border border-white/10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Have a project in mind with similar requirements?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mb-8 max-w-xl mx-auto">
            We scope out architecture, delivery timeline, and fixed milestone pricing during a single 15-minute alignment call.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-sm font-semibold text-white btn-primary-gradient"
            >
              Start Your Project Scope
            </Link>
            <Link
              href="/pricing"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-sm font-semibold text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            >
              Review Pricing &amp; Add-Ons
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
