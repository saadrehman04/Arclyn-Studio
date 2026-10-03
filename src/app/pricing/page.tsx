import React from 'react';
import type { Metadata } from 'next';
import { PricingCalculator } from '@/components/pricing/PricingCalculator';
import { Sparkles, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pricing & Add-Ons — Transparent Rates',
  description:
    'Explore straightforward pricing tiers for starter websites, business web apps, e-commerce stores, and custom AI systems. Fixed milestones (50% / 30% / 20%) and modular add-ons.',
};

export default function PricingPage() {
  return (
    <div className="pt-32 pb-24 bg-cosmic-grid min-h-screen">
      {/* Background ambient lighting */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-3/4 h-80 bg-radial-hero pointer-events-none opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Page Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 w-fit mb-4">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span className="text-xs font-semibold uppercase tracking-wider text-purple-300">
              Clear &amp; Predictable Investment
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Transparent Pricing. <br />
            <span className="text-gradient">Engineered for ROI.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
            No endless billable hours or ambiguous retainers. Select a package below or configure modular operational add-ons with clear milestone-based billing.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-emerald-400">
            <ShieldCheck className="w-4 h-4" />
            <span>Guaranteed Milestones: 50% Kickoff • 30% Design Approval • 20% Launch</span>
          </div>
        </div>

        {/* Pricing Interactive Grid & Calculator */}
        <PricingCalculator />

        {/* Bottom CTA */}
        <div className="mt-24 rounded-3xl glass-panel p-8 sm:p-12 text-center max-w-3xl mx-auto border border-white/10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Need an Itemized Custom Quote?
          </h2>
          <p className="text-sm text-slate-300 mb-8 max-w-lg mx-auto">
            Book a 15-minute scoping call or fill out our project questionnaire. We return an architectural recommendation with exact pricing within 12 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-sm font-semibold text-white btn-primary-gradient"
            >
              Get Your Custom Quote
            </Link>
            <a
              href="https://calendly.com/saadrehman"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-sm font-semibold text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10"
            >
              Book Discovery Call
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
