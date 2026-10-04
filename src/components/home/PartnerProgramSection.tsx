'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  DollarSign, 
  ShieldCheck, 
  Clock 
} from 'lucide-react';
import { NeonSectionBackground } from '../shared/NeonSectionBackground';
import { BorderGlow } from '@/components/ui/BorderGlow';

export const PartnerProgramSection: React.FC = () => {
  return (
    <section id="partner-program" className="relative py-28 sm:py-36 bg-[#050711] overflow-hidden border-t border-white/5">
      {/* Neon Strand Background Atmosphere */}
      <NeonSectionBackground variant="minimalist-strands" position="full" opacity={0.38} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-5">
            <Users className="w-3.5 h-3.5 text-purple-400" />
            <span>High-Yield Partner Program</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-5">
            Earn a Flat 30% <br />
            <span className="text-gradient-hero">Direct Revenue Share</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Partner with Arclyn Studio. You make the introduction and handle initial inquiries — our senior engineering squad handles technical discovery, scoping, rapid delivery, and client handover.
          </p>
        </div>

        {/* Single Detailed 30% Partner Card with Booster Glow */}
        <div className="max-w-4xl mx-auto mb-16">
          <BorderGlow
            edgeSensitivity={30}
            glowColor="270 90 75"
            backgroundColor="#090D1E"
            borderRadius={28}
            glowRadius={46}
            glowIntensity={1.25}
            coneSpread={28}
            colors={['#c084fc', '#06b6d4', '#818cf8']}
            fillOpacity={0.35}
            animated={true}
            className="w-full"
          >
            <div className="relative p-8 sm:p-12 flex flex-col justify-between h-full group">
              <div className="absolute -top-3 left-8 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-purple-600 via-indigo-500 to-cyan-500 text-white shadow-lg shadow-purple-500/30">
                Strategic Referral Partner • Flat 30% From Deal #1
              </div>

              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 mt-2 pb-6 border-b border-white/10">
                  <div className="flex items-baseline gap-4">
                    <span className="font-display text-6xl sm:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-300 to-pink-400">
                      30%
                    </span>
                    <div>
                      <div className="text-xs uppercase tracking-wider font-bold text-cyan-300">
                        Fixed Revenue Share
                      </div>
                      <div className="text-xs text-slate-400">
                        Paid immediately on client milestone clearance
                      </div>
                    </div>
                  </div>
                  <span className="self-start sm:self-auto text-xs font-semibold text-emerald-300 bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/30 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Instant Payouts Guaranteed
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                  Direct Commission on Every Web &amp; AI Contract
                </h3>
                <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed mb-8 max-w-3xl">
                  You make the initial client introduction — our senior engineering squad handles technical discovery, proposal scoping, rapid 5–7 day delivery, and client handover. No waiting for thresholds or tiers: you receive a flat 30% gross commission on all closed projects.
                </p>

                {/* Detailed Earnings & Perks Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs sm:text-sm text-slate-300">
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block mb-0.5">Website Packages (PKR)</strong>
                      <span>Earn <strong>PKR 12,000 – PKR 21,000+</strong> per closed website or e-commerce store.</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block mb-0.5">Custom Software &amp; SaaS</strong>
                      <span>Earn <strong>PKR 30,000 – PKR 60,000+</strong> per full-stack application.</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block mb-0.5">AI Agents &amp; Automations</strong>
                      <span>Earn <strong>PKR 10,000 – PKR 16,000</strong> per autonomous workflow integration.</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block mb-0.5">Recurring Retainers</strong>
                      <span><strong>30% recurring monthly payout</strong> on all client maintenance &amp; hosting packages.</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block mb-0.5">Milestone Payout Tranches</strong>
                      <span>30% on proposal approval, 20% on pre-launch demo, 50% after launch &amp; handover.</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-pink-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block mb-0.5">Direct Founder Line</strong>
                      <span>Private WhatsApp (<a href="https://wa.me/923196762317" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">+92 3196762317</a>) &amp; Slack access to Saad Rehman.</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
                <span>Payout methods: Direct Bank Transfer (Pakistan), Payoneer, Wise, or USDT</span>
                <span className="text-cyan-300 font-semibold">Zero earning cap • No minimum deal threshold</span>
              </div>
            </div>
          </BorderGlow>
        </div>

        {/* 4-Step Client Handling Workflow */}
        <div className="rounded-3xl p-8 sm:p-12 bg-[#090d1a] border border-white/[0.08] max-w-5xl mx-auto mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">Zero Headaches</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">How The Workflow Works</h3>
            <p className="text-sm text-slate-300 mt-2">
              You introduce the client; our team handles the rest from technical architecture to delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 font-bold flex items-center justify-center text-sm mb-4">
                01
              </div>
              <h4 className="text-base font-bold text-white mb-2">Introduction</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                You manage initial contact and basic inquiries using our reference cheat sheet and packages.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-bold flex items-center justify-center text-sm mb-4">
                02
              </div>
              <h4 className="text-base font-bold text-white mb-2">Discovery & Quote</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Arclyn jumps on a 15-min discovery call, scopes the requirements, and issues clear milestone contracts.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center text-sm mb-4">
                03
              </div>
              <h4 className="text-base font-bold text-white mb-2">5-7 Day Delivery</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Full-stack engineers build and deploy with unlimited revisions, free 1-year hosting, and testing.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 font-bold flex items-center justify-center text-sm mb-4">
                04
              </div>
              <h4 className="text-base font-bold text-white mb-2">Instant Payout</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Upon final client handover and payment, your 30% commission is immediately transferred.
              </p>
            </div>

          </div>
        </div>

        {/* Clear Policies Highlight */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16 text-center">
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
            <Clock className="w-6 h-6 text-purple-400 mx-auto mb-3" />
            <h5 className="text-sm font-bold text-white mb-1">5 to 7 Working Days</h5>
            <p className="text-xs text-slate-400">Rapid turnaround with unlimited revisions during build</p>
          </div>
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
            <ShieldCheck className="w-6 h-6 text-emerald-400 mx-auto mb-3" />
            <h5 className="text-sm font-bold text-white mb-1">Free 1-Year Hosting</h5>
            <p className="text-xs text-slate-400">100% domain ownership in client name + 1-year maintenance</p>
          </div>
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
            <DollarSign className="w-6 h-6 text-cyan-400 mx-auto mb-3" />
            <h5 className="text-sm font-bold text-white mb-1">30% | 20% | 50% Terms</h5>
            <p className="text-xs text-slate-400">30% on approval, 20% pre-launch, 50% after launch & handover</p>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/partner-program"
              className="px-8 py-3.5 rounded-xl text-sm font-semibold text-white btn-primary-gradient inline-flex items-center gap-2 shadow-lg shadow-purple-600/30"
            >
              <span>Apply for Partner Program</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/pricing"
              className="px-7 py-3.5 rounded-xl text-sm font-semibold text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            >
              <span>Explore Client Packages (PKR)</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};
