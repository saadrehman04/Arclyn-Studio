'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Users, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  Wallet, 
  Clock, 
  MessageCircle, 
  TrendingUp, 
  Layers, 
  ArrowUpRight 
} from 'lucide-react';
import { MagneticButton } from '../shared/MagneticButton';

export const PartnerProgramSection: React.FC = () => {
  return (
    <section 
      id="partner-program" 
      className="relative bg-[#0d0e12] text-white py-14 sm:py-18 md:py-20 overflow-hidden select-none"
    >
      {/* ========================================================================= */}
      {/* MOTION GRAPHICS: Exact Background Light, Grid & Animated Micro Particles */}
      {/* Matching Testimonials Section Visual Architecture */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Subtle grid mesh */}
        <div 
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
            backgroundSize: '44px 44px',
          }}
        />

        {/* Ambient Radial Glowing Aura behind Active Card */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[440px] rounded-full blur-[140px] opacity-25 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(139,92,246,0.28) 0%, rgba(59,130,246,0.18) 40%, rgba(245,158,11,0.10) 75%, transparent 85%)'
          }}
        />

        {/* Dynamic Motion Floating Micro Particles */}
        <div className="absolute inset-0">
          {[
            { top: '18%', left: '12%', size: 'w-1.5 h-1.5', delay: '0s', dur: '4.8s' },
            { top: '28%', left: '86%', size: 'w-1 h-1', delay: '1.2s', dur: '5.2s' },
            { top: '72%', left: '16%', size: 'w-2 h-2', delay: '2.1s', dur: '6s' },
            { top: '68%', left: '80%', size: 'w-1.5 h-1.5', delay: '0.6s', dur: '4.2s' },
            { top: '45%', left: '92%', size: 'w-1 h-1', delay: '1.8s', dur: '5.6s' },
            { top: '82%', left: '50%', size: 'w-1.5 h-1.5', delay: '2.8s', dur: '4.5s' },
          ].map((pt, i) => (
            <motion.div
              key={i}
              className={`absolute rounded-full bg-white/40 blur-[0.5px] ${pt.size}`}
              style={{ top: pt.top, left: pt.left }}
              animate={{
                y: [-10, 10, -10],
                opacity: [0.2, 0.75, 0.2],
                scale: [0.9, 1.25, 0.9],
              }}
              transition={{
                duration: parseFloat(pt.dur),
                repeat: Infinity,
                delay: parseFloat(pt.delay),
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>

        {/* Top and Bottom soft edge feather gradients */}
        <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-[#0d0e12] to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#0d0e12] to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================================= */}
        {/* SECTION HEADER (Proportionate scale, matching Testimonials typography) */}
        {/* ========================================================================= */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-neutral-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Users className="w-3.5 h-3.5 text-amber-400" />
            <span>High-Yield Partner Network</span>
          </div>

          {/* Section Headline */}
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white mb-2.5 leading-[1.12]">
            Earn Flat 30%
            <br />
            Direct Revenue Share
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-neutral-400 max-w-lg mx-auto leading-relaxed">
            Partner with Arclyn Studio. You make the client introduction — our senior engineering squad handles technical discovery, proposal scoping, delivery, and client handover.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* THE 30% OFFER CARD (Matching Testimonials Card Style & Proportions) */}
        {/* ========================================================================= */}
        <div className="max-w-4xl mx-auto mb-8 sm:mb-10">
          <div className="relative rounded-2xl sm:rounded-3xl bg-[#15161b] border border-white/[0.12] shadow-[0_24px_70px_-15px_rgba(0,0,0,0.85),0_0_50px_rgba(255,255,255,0.03)] overflow-hidden p-5 sm:p-7 md:p-8 select-none">
            
            {/* Motion Graphics: Subtle Animated Border Highlight on Card */}
            <div className="absolute -inset-[1px] rounded-2xl sm:rounded-3xl bg-gradient-to-r from-amber-500/0 via-amber-400/20 to-violet-500/0 opacity-70 pointer-events-none animate-pulse" />

            {/* Faded Watermark Icon */}
            <div className="absolute top-5 right-5 sm:top-7 sm:right-7 text-white/[0.03] group-hover:text-white/[0.06] transition-colors pointer-events-none">
              <TrendingUp className="w-20 h-20 rotate-12" />
            </div>

            <div className="relative z-10">
              
              {/* Top Row: 30% Metric Display & Status Badge */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-6 pb-5 sm:pb-6 border-b border-white/[0.08]">
                <div className="flex items-baseline gap-3 sm:gap-5">
                  <span className="text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-none drop-shadow-[0_0_30px_rgba(251,191,36,0.3)]">
                    30%
                  </span>
                  <div>
                    <div className="font-mono text-xs uppercase tracking-wider font-semibold text-amber-300 flex items-center gap-1.5 mb-0.5">
                      <TrendingUp className="w-3.5 h-3.5 text-amber-400" />
                      <span>Fixed Revenue Share</span>
                    </div>
                    <div className="text-[11px] sm:text-xs text-neutral-400">
                      Paid immediately on client milestone sign-off
                    </div>
                  </div>
                </div>

                <span className="self-start sm:self-auto text-[11px] font-semibold text-emerald-300 bg-white/[0.04] border border-emerald-500/30 px-3 py-1 rounded-full flex items-center gap-2 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Instant Milestone Payouts
                </span>
              </div>

              {/* Offer Headline & Description */}
              <div className="mt-5 mb-5">
                <h3 className="text-lg sm:text-xl font-semibold text-white tracking-tight leading-snug mb-1.5">
                  Direct Gross Commission on Every Web &amp; AI Contract
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 font-normal leading-relaxed max-w-2xl">
                  You make the initial introduction — we handle technical discovery, architectural scoping, rapid turnaround, and handover. No tiers or minimum quotas: receive a flat 30% gross commission on all closed projects.
                </p>
              </div>

              {/* Milestone Payout Tranches (Transparent Flow) */}
              <div className="mb-5">
                <div className="flex items-center gap-1.5 mb-2.5">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span className="font-mono text-[11px] text-neutral-400 uppercase tracking-wider font-medium">
                    Milestone Payout Tranches (Synchronized with Deliverables)
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {/* Tranche 01 */}
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-amber-400/30 transition-colors">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-mono text-[10px] text-amber-400 font-semibold uppercase">Tranche 01</span>
                      <span className="px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 font-mono text-[10px] font-bold">30% Payout</span>
                    </div>
                    <h4 className="text-xs sm:text-sm font-semibold text-white mb-0.5">Proposal Sign-off</h4>
                    <p className="text-[11px] text-neutral-400">Immediate release upon kickoff deposit.</p>
                  </div>

                  {/* Tranche 02 */}
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-violet-400/30 transition-colors">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-mono text-[10px] text-violet-400 font-semibold uppercase">Tranche 02</span>
                      <span className="px-2 py-0.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 font-mono text-[10px] font-bold">20% Payout</span>
                    </div>
                    <h4 className="text-xs sm:text-sm font-semibold text-white mb-0.5">Staging Demo &amp; Review</h4>
                    <p className="text-[11px] text-neutral-400">Released upon preview &amp; scope lock.</p>
                  </div>

                  {/* Tranche 03 */}
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-emerald-400/30 transition-colors">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-mono text-[10px] text-emerald-400 font-semibold uppercase">Tranche 03</span>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 font-mono text-[10px] font-bold">50% Payout</span>
                    </div>
                    <h4 className="text-xs sm:text-sm font-semibold text-white mb-0.5">Production Handover</h4>
                    <p className="text-[11px] text-neutral-400">Final tranche cleared as project goes live.</p>
                  </div>
                </div>
              </div>

              {/* Commission Packages Grid (4 Clean Glass Panels) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-5 text-xs text-neutral-300">
                <div className="p-3 sm:p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-white/20 transition-all flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-white/[0.06] border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Layers className="w-3.5 h-3.5 text-amber-400" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-0.5">
                      <strong className="text-white font-semibold text-xs sm:text-sm">Website Packages</strong>
                      <span className="font-mono text-amber-300 text-[11px] font-bold">PKR 12k – 21k+</span>
                    </div>
                    <p className="text-[11px] text-neutral-400 leading-relaxed">
                      30% per closed brand landing page, portfolio, or e-commerce store.
                    </p>
                  </div>
                </div>

                <div className="p-3 sm:p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-white/20 transition-all flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-white/[0.06] border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Zap className="w-3.5 h-3.5 text-cyan-400" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-0.5">
                      <strong className="text-white font-semibold text-xs sm:text-sm">Custom Software &amp; SaaS</strong>
                      <span className="font-mono text-cyan-300 text-[11px] font-bold">PKR 30k – 60k+</span>
                    </div>
                    <p className="text-[11px] text-neutral-400 leading-relaxed">
                      Full-stack Next.js web applications, client portals, and SaaS MVPs.
                    </p>
                  </div>
                </div>

                <div className="p-3 sm:p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-white/20 transition-all flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-white/[0.06] border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Sparkles className="w-3.5 h-3.5 text-violet-400" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-0.5">
                      <strong className="text-white font-semibold text-xs sm:text-sm">AI Agents &amp; Automations</strong>
                      <span className="font-mono text-violet-300 text-[11px] font-bold">PKR 10k – 16.5k+</span>
                    </div>
                    <p className="text-[11px] text-neutral-400 leading-relaxed">
                      Autonomous LLM agent workflows, automated bots, and AI pipelines.
                    </p>
                  </div>
                </div>

                <div className="p-3 sm:p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-white/20 transition-all flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-white/[0.06] border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Wallet className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-0.5">
                      <strong className="text-white font-semibold text-xs sm:text-sm">Recurring Retainers</strong>
                      <span className="font-mono text-emerald-300 text-[11px] font-bold">30% Monthly</span>
                    </div>
                    <p className="text-[11px] text-neutral-400 leading-relaxed">
                      Recurring monthly payout on ongoing maintenance &amp; retainer contracts.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Transparency & Payout Channels */}
              <div className="pt-3.5 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-neutral-400">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="text-neutral-500 font-mono text-[10px] uppercase">Payout Channels:</span>
                  <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/10 text-neutral-300 font-medium">Bank Transfer (PKR)</span>
                  <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/10 text-neutral-300 font-medium">Wise</span>
                  <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/10 text-neutral-300 font-medium">Payoneer</span>
                  <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/10 text-neutral-300 font-medium">USDT</span>
                </div>
                
                <div className="flex items-center gap-1.5 text-amber-300 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                  <span>Zero Earning Cap • No Deal Threshold</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* CALL TO ACTION BUTTONS (Matching Testimonials Interactive Buttons) */}
        {/* ========================================================= */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-3">
            <MagneticButton strength={0.25}>
              <Link
                href="/partner-program"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[44px] rounded-full bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] active:scale-[0.98]"
              >
                <span>Apply for Partner Program</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </MagneticButton>

            <MagneticButton strength={0.2}>
              <a
                href="https://wa.me/923196762317?text=Hi%20Saad,%20I%20want%20to%20learn%20more%20about%20the%20Arclyn%20Studio%2030%%20partner%20program."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 min-h-[44px] rounded-full bg-emerald-500/10 hover:bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-semibold text-xs uppercase tracking-wider transition-all active:scale-[0.98]"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp</span>
              </a>
            </MagneticButton>

            <MagneticButton strength={0.2}>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 min-h-[44px] rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-neutral-300 hover:text-white font-medium text-xs uppercase tracking-wider transition-all active:scale-[0.98]"
              >
                <span>Explore Packages (PKR)</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
              </Link>
            </MagneticButton>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PartnerProgramSection;
