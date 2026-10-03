'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { PRICING_TIERS, AI_AUTOMATION_SERVICES, PROJECT_TERMS_POLICIES } from '@/data/pricing';
import { 
  Check, 
  ArrowRight, 
  Sparkles, 
  Bot, 
  Globe, 
  Clock, 
  ShieldCheck, 
  DollarSign, 
  RefreshCw 
} from 'lucide-react';
import { MagneticButton } from '../shared/MagneticButton';

export const PricingOverview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'websites' | 'ai'>('websites');

  return (
    <section id="pricing" className="relative py-28 sm:py-36 bg-[#050711] overflow-hidden border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-purple-600/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-5">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Official Transparent Pricing (PKR)</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-5">
            Fixed Milestones. <br />
            <span className="text-gradient-hero">Zero Hidden Charges.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Every package includes 5–7 day delivery, unlimited revisions during build, and 1 year of free hosting and maintenance.
          </p>

          {/* Service Category Switcher Tabs */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md">
            <button
              onClick={() => setActiveTab('websites')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === 'websites'
                  ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-lg shadow-purple-600/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Globe className="w-4 h-4" />
              <span>Website Packages</span>
            </button>
            <button
              onClick={() => setActiveTab('ai')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === 'ai'
                  ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-lg shadow-purple-600/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Bot className="w-4 h-4" />
              <span>AI Automation Services</span>
            </button>
          </div>
        </div>

        {/* TAB 1: Website Packages (PKR) */}
        {activeTab === 'websites' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
            {PRICING_TIERS.map((tier) => {
              const isPopular = tier.popular;

              return (
                <div
                  key={tier.id}
                  className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                    isPopular
                      ? 'bg-[#0b0f24] border-2 border-purple-500/80 shadow-[0_0_50px_rgba(168,85,247,0.25)] lg:-translate-y-2'
                      : 'bg-[#090d1a] border border-white/[0.08] hover:border-white/[0.2] shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
                  }`}
                >
                  {/* Popular Pill Badge */}
                  {isPopular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 text-white text-[11px] font-bold uppercase tracking-wider shadow-lg">
                      Recommended Choice
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
                        <span className="font-display text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-300 tracking-tight">
                          {tier.pricePKR}
                        </span>
                      </div>
                      <div className="text-xs text-purple-300 font-medium mt-1">
                        Fixed milestone contract • Unlimited revisions
                      </div>
                    </div>

                    {/* Feature Checklist */}
                    <div className="space-y-3 mb-8">
                      <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                        Included Deliverables:
                      </div>
                      {tier.features.map((f) => (
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
                      className={`w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm font-bold transition-all duration-300 ${
                        isPopular
                          ? 'btn-primary-gradient text-white shadow-[0_0_25px_rgba(147,51,234,0.4)]'
                          : 'bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/[0.12] hover:border-cyan-400/40'
                      }`}
                    >
                      <span>{tier.ctaText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* TAB 2: AI Automation Services */}
        {activeTab === 'ai' && (
          <div className="space-y-6 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {AI_AUTOMATION_SERVICES.map((service) => (
                <div
                  key={service.id}
                  className="rounded-3xl p-6 sm:p-7 bg-[#090d1a] border border-white/[0.08] hover:border-cyan-400/40 transition-all duration-300 flex flex-col justify-between group shadow-xl"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h4 className="text-lg font-bold text-white group-hover:text-cyan-200 transition-colors">
                        {service.title}
                      </h4>
                      <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-300 shrink-0">
                        {service.timeline}
                      </span>
                    </div>

                    <div className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-400 mb-4">
                      {service.pricePKR}
                    </div>

                    <div className="space-y-3 text-xs text-slate-300 font-light mb-6">
                      <div>
                        <strong className="text-slate-400 block font-semibold mb-0.5">Problem Solved:</strong>
                        <span>{service.problemSolved}</span>
                      </div>
                      <div>
                        <strong className="text-cyan-400 block font-semibold mb-0.5">What You Get:</strong>
                        <span>{service.whatClientGets}</span>
                      </div>
                      <div>
                        <strong className="text-emerald-400 block font-semibold mb-0.5">Business Impact:</strong>
                        <span>{service.businessImpact}</span>
                      </div>
                    </div>
                  </div>

                  <Link
                    href={`/contact?service=${service.id}`}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/10 hover:border-cyan-400/40 transition-colors"
                  >
                    <span>Inquire for {service.title}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>

            {/* AI Package Perks Banner */}
            <div className="rounded-2xl p-6 bg-purple-950/20 border border-purple-500/20 text-xs sm:text-sm text-slate-300">
              <span className="font-bold text-purple-300 uppercase tracking-wider block mb-3">
                Standard in Every AI Automation Package:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Discovery call around your real business workflows</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Tested on your real data before handover</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Simple walkthrough so your team can operate it</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>30 days of free fixes after launch</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Unlimited revisions during the build</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Project Terms & Policies Strip */}
        <div className="rounded-3xl p-8 bg-[#090d1a] border border-white/[0.08] max-w-5xl mx-auto">
          <div className="text-center mb-6">
            <h4 className="text-lg font-bold text-white">Project Terms &amp; Transparent Policies</h4>
            <p className="text-xs text-slate-400 mt-1">Clear standards that protect your investment from start to finish</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs text-slate-300">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="flex items-center gap-2 text-cyan-400 font-bold mb-1.5">
                <Clock className="w-4 h-4" />
                <span>5–7 Working Days</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Fast engineering delivery with unlimited revisions during active development.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="flex items-center gap-2 text-emerald-400 font-bold mb-1.5">
                <ShieldCheck className="w-4 h-4" />
                <span>Free 1-Year Hosting</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Free hosting &amp; maintenance for 1 year. 100% domain ownership in client's name.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="flex items-center gap-2 text-purple-400 font-bold mb-1.5">
                <DollarSign className="w-4 h-4" />
                <span>30% | 20% | 50%</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                30% on design approval, 20% before launch, 50% after launch &amp; handover.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="flex items-center gap-2 text-amber-400 font-bold mb-1.5">
                <RefreshCw className="w-4 h-4" />
                <span>Partner Commission</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                30% fixed commission per referral. Increases to 40% after your 3rd closed deal.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold text-white btn-primary-gradient shadow-lg shadow-purple-600/30"
          >
            <span>Start Your Build Today</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};
