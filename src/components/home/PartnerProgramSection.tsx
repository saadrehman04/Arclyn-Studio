'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Users, 
  ArrowRight, 
  CheckCircle2,
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
import { BorderGlow } from '@/components/ui/BorderGlow';
import GradientWaves from '@/components/ui/GradientWaves';
import { MagneticButton } from '../shared/MagneticButton';

export const PartnerProgramSection: React.FC = () => {
  return (
    <section 
      id="partner-program" 
      className="relative pt-20 sm:pt-28 pb-16 sm:pb-24 bg-[#040406] overflow-hidden border-t border-white/10 select-none"
    >
      {/* =========================================================
          ATMOSPHERIC BACKGROUND & COHESIVE CYBERNETIC AMBIENCE
          Deep obsidian base matching website with subtle cyan/indigo lighting
          ========================================================= */}
      <div 
        className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0" 
        style={{
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
        }}
        aria-hidden="true"
      >
        {/* Subtle OGL Fluid Waves with site-matching dark cyan & navy palette */}
        <GradientWaves
          horizonColor="#050a18"
          waveColor="#0a1d36"
          crestColor="#38bdf8"
          speed={0.22}
          amplitude={1.8}
          waveScale={0.55}
          waveRatio={0.9}
          swell={30}
          turbulence={15}
          tilt={1.1}
          zoom={1.0}
          height={5.0}
          fogDepth={16}
          detail="medium"
          brightness={0.8}
          opacity={0.4}
          mouseInteraction={true}
          parallaxStrength={0.4}
          grain={true}
          grainIntensity={0.03}
        />

        {/* Ambient Cosmic Grid */}
        <div className="absolute inset-0 bg-cosmic-grid opacity-25 pointer-events-none" />

        {/* Central Atmospheric Radial Spotlights */}
        <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.12)_0%,rgba(14,165,233,0.03)_50%,transparent_75%)] blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[600px] h-[450px] bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.10)_0%,transparent_70%)] blur-3xl pointer-events-none" />

        {/* Seamless Edge Vignettes */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#040406] via-[#040406]/85 to-transparent pointer-events-none z-10" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#040406] to-transparent pointer-events-none z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* =========================================================
            SECTION HEADER (Matching Arclyn Studio Typography & Hierarchy)
            ========================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-5 backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.15)]">
            <Users className="w-3.5 h-3.5 text-cyan-400" />
            <span>High-Yield Partner Network</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-5">
            Earn a Flat 30% <br />
            <span className="text-gradient-hero">Direct Revenue Share</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto">
            Partner with Arclyn Studio. You make the client introduction — our senior engineering squad handles technical discovery, proposal scoping, rapid 5–7 day delivery, and client handover.
          </p>
        </div>

        {/* =========================================================
            CORE 30% OFFER CARD WITH HIGH-TECH BORDER GLOW
            Harmonized cybernetic cyan & cobalt glow on deep obsidian base
            ========================================================= */}
        <div className="max-w-4xl mx-auto mb-14">
          <BorderGlow
            edgeSensitivity={30}
            glowColor="195 90 60"
            backgroundColor="#080c18"
            borderRadius={28}
            glowRadius={44}
            glowIntensity={1.2}
            coneSpread={28}
            colors={['#38bdf8', '#06b6d4', '#6366f1']}
            fillOpacity={0.4}
            animated={true}
            className="w-full"
          >
            <div className="relative p-4 sm:p-10 lg:p-12 flex flex-col justify-between h-full group">
              
              {/* Floating Header Pill */}
              <div className="absolute -top-3.5 left-4 sm:left-10 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-mono font-semibold uppercase tracking-wider bg-[#0f172a] border border-cyan-400/40 text-cyan-300 shadow-[0_4px_20px_rgba(6,182,212,0.25)] flex items-center gap-1.5 sm:gap-2">
                <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-cyan-400" />
                <span className="truncate">Strategic Referral Partner</span>
              </div>

              <div>
                {/* 30% Hero Metric Display */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 mb-6 sm:mb-8 mt-4 pb-6 sm:pb-8 border-b border-white/10">
                  <div className="flex items-baseline gap-3 sm:gap-6">
                    <span className="font-display text-5xl sm:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-cyan-400 tracking-tight leading-none filter drop-shadow-[0_0_35px_rgba(56,189,248,0.3)]">
                      30%
                    </span>
                    <div>
                      <div className="font-mono text-xs uppercase tracking-wider font-bold text-cyan-300 mb-1 flex items-center gap-1.5">
                        <TrendingUp className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Fixed Revenue Share</span>
                      </div>
                      <div className="text-xs sm:text-sm text-slate-400">
                        Paid immediately on client milestone sign-off
                      </div>
                    </div>
                  </div>
                  
                  <span className="self-start sm:self-auto text-xs font-semibold text-emerald-300 bg-emerald-500/10 px-3.5 py-1.5 sm:py-2 rounded-full border border-emerald-500/30 flex items-center gap-2 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Instant Payouts Guaranteed
                  </span>
                </div>

                {/* Offer Headline & Description */}
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 tracking-tight">
                  Direct Gross Commission on Every Web &amp; AI Contract
                </h3>
                <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed mb-8 max-w-3xl">
                  You make the initial introduction — we handle technical discovery, architectural scoping, rapid 5–7 day turnaround, and client handover. No waiting for thresholds or tiers: you receive a flat 30% gross commission on all closed projects.
                </p>

                {/* =========================================================
                    MILESTONE PAYOUT TRANCHES (Transparent Payment Flow)
                    ========================================================= */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="w-4 h-4 text-cyan-400" />
                    <span className="font-mono text-xs text-slate-400 uppercase tracking-wider font-semibold">
                      Milestone Payout Tranches (Synchronized with Deliverables)
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {/* Tranche 01 */}
                    <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-cyan-500/40 transition-colors">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-mono text-[11px] text-cyan-400 font-semibold uppercase">Tranche 01</span>
                        <span className="px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 font-mono text-[11px] font-bold">30% Payout</span>
                      </div>
                      <h4 className="text-xs sm:text-sm font-bold text-white mb-0.5">Proposal Sign-off</h4>
                      <p className="text-[11px] text-slate-400">Immediate release upon client project kickoff deposit.</p>
                    </div>

                    {/* Tranche 02 */}
                    <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-sky-500/40 transition-colors">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-mono text-[11px] text-sky-400 font-semibold uppercase">Tranche 02</span>
                        <span className="px-2 py-0.5 rounded-full bg-sky-500/10 border border-sky-500/25 text-sky-300 font-mono text-[11px] font-bold">20% Payout</span>
                      </div>
                      <h4 className="text-xs sm:text-sm font-bold text-white mb-0.5">Staging Demo &amp; Review</h4>
                      <p className="text-[11px] text-slate-400">Released upon client milestone preview &amp; scope lock.</p>
                    </div>

                    {/* Tranche 03 */}
                    <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-emerald-500/40 transition-colors">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-mono text-[11px] text-emerald-400 font-semibold uppercase">Tranche 03</span>
                        <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 font-mono text-[11px] font-bold">50% Payout</span>
                      </div>
                      <h4 className="text-xs sm:text-sm font-bold text-white mb-0.5">Production Handover</h4>
                      <p className="text-[11px] text-slate-400">Final tranche cleared as the project goes live.</p>
                    </div>
                  </div>
                </div>

                {/* =========================================================
                    DETAILED EARNING POTENTIAL GRID (4 Clean Glass Panels)
                    ========================================================= */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm text-slate-300">
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-cyan-400/30 transition-all flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Layers className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <strong className="text-white font-semibold">Website Packages</strong>
                        <span className="font-mono text-cyan-300 text-xs font-bold">PKR 12k – 21k+</span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        Earn 30% per closed brand landing page, portfolio, or e-commerce store.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-indigo-400/30 transition-all flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Zap className="w-4 h-4 text-indigo-400" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <strong className="text-white font-semibold">Custom Software &amp; SaaS</strong>
                        <span className="font-mono text-indigo-300 text-xs font-bold">PKR 30k – 60k+</span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        Full-stack React, Next.js, and Node.js applications and portals.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-emerald-400/30 transition-all flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Sparkles className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <strong className="text-white font-semibold">AI Agents &amp; Automations</strong>
                        <span className="font-mono text-emerald-300 text-xs font-bold">PKR 10k – 16.5k+</span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        Autonomous LLM agents, automated sales pipelines, and workflow bots.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-amber-400/30 transition-all flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Wallet className="w-4 h-4 text-amber-400" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <strong className="text-white font-semibold">Recurring Retainers</strong>
                        <span className="font-mono text-amber-300 text-xs font-bold">30% Monthly</span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        Recurring monthly payout on ongoing maintenance &amp; cloud hosting.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* =========================================================
                  BOTTOM TRANSPARENCY & PAYOUT METHODS STRIP
                  ========================================================= */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-slate-500 font-mono text-[11px] uppercase">Payout Channels:</span>
                  <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-slate-300 font-medium">Bank Transfer (PKR)</span>
                  <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-slate-300 font-medium">Wise</span>
                  <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-slate-300 font-medium">Payoneer</span>
                  <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-slate-300 font-medium">USDT</span>
                </div>
                
                <div className="flex items-center gap-2 text-cyan-300 font-medium">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  <span>Zero Earning Cap • No Minimum Deal Threshold</span>
                </div>
              </div>

            </div>
          </BorderGlow>
        </div>

        {/* =========================================================
            CALL TO ACTION BUTTONS (Harmonized Pill Buttons)
            ========================================================= */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-4">
            <MagneticButton strength={0.25}>
              <Link
                href="/partner-program"
                className="btn-pill-primary px-8 py-3.5 rounded-full text-sm font-semibold inline-flex items-center gap-2"
              >
                <span>Apply for Partner Program</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </MagneticButton>

            <MagneticButton strength={0.2}>
              <Link
                href="/pricing"
                className="btn-pill-secondary px-7 py-3.5 rounded-full text-sm font-medium text-slate-300 hover:text-white inline-flex items-center gap-2"
              >
                <span>Explore Client Packages (PKR)</span>
              </Link>
            </MagneticButton>

            <MagneticButton strength={0.2}>
              <a
                href="https://wa.me/923196762317?text=Hi%20Saad,%20I%20want%20to%20learn%20more%20about%20the%20Arclyn%20Studio%2030%%20partner%20program."
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-full text-sm font-medium text-emerald-400 hover:text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/15 border border-emerald-500/30 transition-all inline-flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </MagneticButton>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PartnerProgramSection;
