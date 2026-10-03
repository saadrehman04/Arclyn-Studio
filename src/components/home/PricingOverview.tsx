'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PRICING_TIERS } from '@/data/pricing';
import { Check, ArrowRight, Sparkles, Calculator } from 'lucide-react';
import { MagneticButton } from '../shared/MagneticButton';

export const PricingOverview: React.FC = () => {
  // 3 flagship investment tiers
  const tiers = [
    PRICING_TIERS[0], // Starter Website & MVP
    PRICING_TIERS[1], // Business Website & Growth (Recommended)
    PRICING_TIERS[3], // Custom Software & AI Systems
  ];

  return (
    <section className="relative py-28 sm:py-36 bg-[#050711] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-purple-600/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header matching reference */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-5"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Investment Plans</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-5"
          >
            Clear, Predictable <br />
            <span className="text-gradient-hero">Milestone Investment</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal"
          >
            Fixed milestone delivery: 50% on kickoff, 30% on preview deployment, and 20% on final launch. Zero surprise invoices.
          </motion.p>
        </div>

        {/* 3 Pricing Cards Grid matching reference */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier, idx) => {
            const isPopular = tier.popular;

            return (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-400 ${
                  isPopular
                    ? 'bg-[#0b0f24] border-2 border-purple-500/80 shadow-[0_0_50px_rgba(168,85,247,0.25)] lg:-translate-y-3'
                    : 'bg-[#090d1a] border border-white/[0.08] hover:border-white/[0.2] shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
                }`}
              >
                {/* Popular Pill Badge */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 text-white text-[11px] font-bold uppercase tracking-wider shadow-lg">
                    Most Popular Choice
                  </div>
                )}

                <div>
                  {/* Tier Title & Timeline */}
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-display text-2xl font-bold text-white">
                      {tier.name}
                    </h3>
                    <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-cyan-300">
                      {tier.timeline}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                    {tier.description}
                  </p>

                  {/* Price Block */}
                  <div className="mb-6 pb-6 border-b border-white/[0.08]">
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                        {tier.priceUSD}
                      </span>
                    </div>
                    {tier.pricePKR && (
                      <div className="text-xs font-mono text-slate-400 mt-1">
                        Approx. {tier.pricePKR} (fixed milestone contract)
                      </div>
                    )}
                    <div className="text-xs text-purple-300 font-medium mt-1">
                      {tier.billingPeriod}
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 mb-8">
                    <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                      Standard Deliverables:
                    </div>
                    {tier.features.slice(0, 5).map((f) => (
                      <div key={f} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <div className="w-4 h-4 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-cyan-400" />
                        </div>
                        <span className="leading-snug">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA Button */}
                <div>
                  <Link
                    href={tier.ctaHref}
                    className={`w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full text-sm font-bold transition-all duration-300 ${
                      isPopular
                        ? 'btn-pill-primary text-white shadow-[0_0_25px_rgba(147,51,234,0.4)]'
                        : 'bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/[0.12] hover:border-cyan-400/40'
                    }`}
                  >
                    <span>{tier.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Link to Interactive Calculator Page */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-5 rounded-3xl bg-[#090d1a] border border-white/[0.1] text-sm text-slate-300 shadow-xl">
            <div className="flex items-center gap-2 text-cyan-400 font-medium">
              <Calculator className="w-5 h-5" />
              <span>Need custom add-ons like payment gateways, AI chat assistants, or multi-tenant auth?</span>
            </div>
            <MagneticButton>
              <Link
                href="/pricing"
                className="px-5 py-2 rounded-full text-xs font-semibold text-white bg-white/[0.08] hover:bg-white/[0.15] border border-cyan-400/40 transition-all flex items-center gap-1.5"
              >
                <span>Launch Interactive Calculator</span>
                <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
              </Link>
            </MagneticButton>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
