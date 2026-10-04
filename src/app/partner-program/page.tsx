import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Sparkles, 
  ArrowRight, 
  DollarSign, 
  Handshake, 
  CheckCircle2, 
  Users, 
  ShieldCheck, 
  Zap,
  Building,
  Palette,
  Briefcase
} from 'lucide-react';
import { PartnerForm } from '@/components/partner/PartnerForm';

export const metadata: Metadata = {
  title: 'Partner & Referral Program — Earn Flat 30% Commission',
  description:
    'Join the Arclyn Studio partner network. Refer clients or partner with our engineering team to earn 30% direct commissions on web development, SaaS, and AI automation projects.',
};

const FIVE_STEPS = [
  {
    step: '01',
    title: 'Quick Application & Alignment',
    desc: 'Fill out our brief partner questionnaire below or send a quick email. We review your profile within 12 hours.',
  },
  {
    step: '02',
    title: 'Partner Agreement & Direct Channel',
    desc: 'We execute a simple 1-page mutual agreement and set up a direct WhatsApp / Slack line with our engineering leads.',
  },
  {
    step: '03',
    title: 'Introduce the Client',
    desc: 'Introduce the prospect via email intro, shared Slack, or your unique tracking link. No sales pitching required on your part.',
  },
  {
    step: '04',
    title: 'Arclyn Closes & Builds',
    desc: 'We handle technical discovery, architectural scoping, closing the contract, and shipping the production-grade deliverables.',
  },
  {
    step: '05',
    title: 'Prompt Milestone Payout',
    desc: 'Receive your 30% commission directly into your bank account as soon as the client clears each project milestone.',
  },
];

const WHO_ITS_FOR = [
  {
    icon: Palette,
    title: 'UI/UX & Brand Designers',
    desc: 'You create stunning brand visuals and Figma prototypes. Hand the complex full-stack engineering over to us and earn substantial payouts.',
  },
  {
    icon: Building,
    title: 'Marketing & SEO Agencies',
    desc: 'Your clients demand custom landing pages, headless e-commerce, or AI automation that your internal team lacks bandwidth to code.',
  },
  {
    icon: Briefcase,
    title: 'Freelancers & Fractional CTOs',
    desc: 'Monetize qualified inbound leads that don’t fit your current personal capacity or hourly rates.',
  },
  {
    icon: Users,
    title: 'Tech Creators & Community Leaders',
    desc: 'Leverage your audience trust. Recommend an agency that builds real products with 100% verified case studies.',
  },
];

import { PageHeroRibbon } from '@/components/shared/PageHeroRibbon';

export default function PartnerProgramPage() {
  return (
    <div className="pt-32 pb-24 bg-cosmic-grid min-h-screen relative overflow-hidden">
      {/* 3D Liquid Chrome Ribbon Background */}
      <PageHeroRibbon variant="strands" opacity={0.7} />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-3/4 h-80 bg-radial-hero pointer-events-none opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Page Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 w-fit mb-4">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span className="text-xs font-semibold uppercase tracking-wider text-purple-300">
              High-Ticket Partnership Network
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Earn Flat 30% Commission. <br />
            <span className="text-gradient">We Handle the Engineering.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
            Partner with Arclyn Studio. You introduce clients who need websites, web apps, or AI automations — our team executes with world-class polish, and you receive generous payouts on every closed milestone.
          </p>
        </div>

        {/* 2 Partnership Tracks Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 max-w-5xl mx-auto items-stretch">
          
          {/* Track 1 */}
          <div className="rounded-3xl glass-panel p-8 sm:p-10 border border-white/10 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center mb-6">
                <DollarSign className="w-6 h-6" />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-purple-400">
                Track 01
              </span>
              <h2 className="text-2xl font-extrabold text-white mt-1 mb-2">
                Client Referral Partner
              </h2>
              <div className="text-3xl font-extrabold text-white mb-4">
                30% Commission
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Ideal for individuals, freelance designers, and creators who occasionally come across founders or businesses in need of top-tier full-stack or AI execution.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span>Simple 3-way email or Slack introduction</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span>Arclyn handles all discovery, scoping, and demos</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span>Immediate payout as each client milestone clears</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span>Average payout: $225 to $1,000+ per deal</span>
                </div>
              </div>
            </div>

            <Link
              href="#apply"
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            >
              <span>Apply for Referral Track</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Track 2 */}
          <div className="rounded-3xl p-8 sm:p-10 bg-[#0E1538] border-2 border-purple-500/60 shadow-2xl shadow-purple-950/50 flex flex-col justify-between relative">
            <div className="absolute -top-3.5 left-8 px-4 py-1 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white text-[11px] font-bold uppercase tracking-wider">
              High-Volume Agreemeent
            </div>

            <div>
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-6">
                <Handshake className="w-6 h-6" />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                Track 02
              </span>
              <h2 className="text-2xl font-extrabold text-white mt-1 mb-2">
                Strategic Agency Partner
              </h2>
              <div className="text-3xl font-extrabold text-white mb-4">
                30% Recurring Retainers
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Designed for marketing agencies, design studios, and software boutiques that require a reliable technical arm for recurring client engagements or white-label builds.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span>Dedicated Slack &amp; WhatsApp channel with Arclyn engineering leads</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span>Flat 30% commission on upfront builds + 30% monthly on ongoing retainers</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span>Co-branded or seamless white-label delivery options</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span>Priority sprint reservation for your client deadlines</span>
                </div>
              </div>
            </div>

            <Link
              href="#apply"
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-semibold text-white btn-primary-gradient"
            >
              <span>Apply for Strategic Agency Partnership</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>

        {/* 5-Step Process Section */}
        <div className="rounded-3xl glass-panel p-8 sm:p-12 border border-white/10 mb-24">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-400">
              How It Works
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              The 5-Step Partnership Lifecycle
            </h2>
            <p className="text-sm text-slate-300 mt-2">
              Transparent, streamlined, and engineered to eliminate friction from introduction to payout.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {FIVE_STEPS.map((s) => (
              <div
                key={s.step}
                className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 relative group hover:border-white/15 transition-all"
              >
                <div className="text-3xl font-extrabold font-mono text-gradient mb-3">
                  {s.step}
                </div>
                <h3 className="text-sm font-bold text-white mb-2">
                  {s.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Who It's For Grid */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              Ideal Fit
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Who Is This Program Designed For?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHO_ITS_FOR.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-6 rounded-2xl glass-panel border border-white/10 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Partner Application Form Block */}
        <div id="apply" className="rounded-3xl bg-[#090E26] border border-white/15 p-8 sm:p-12 max-w-3xl mx-auto relative overflow-hidden">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Apply to the Partner Network
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              Fill out this quick form. We will reach out within 12 hours with your agreement and onboarding details.
            </p>
          </div>

          <PartnerForm />

          <div className="mt-6 text-center text-xs text-slate-400 space-y-1">
            <div>
              Prefer direct email? Contact us at{' '}
              <a href="mailto:saadrehman034@gmail.com" className="text-cyan-400 underline">
                saadrehman034@gmail.com
              </a>
            </div>
            <div>
              WhatsApp Lead Line:{' '}
              <a href="https://wa.me/923196762317" target="_blank" rel="noopener noreferrer" className="text-emerald-400 underline">
                +92 3196762317
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
