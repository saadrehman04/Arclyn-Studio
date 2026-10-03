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

export const PartnerProgramSection: React.FC = () => {
  return (
    <section id="partner-program" className="relative py-28 sm:py-36 bg-[#050711] overflow-hidden border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-[550px] h-[550px] bg-purple-700/10 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-[550px] h-[550px] bg-cyan-700/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-5">
            <Users className="w-3.5 h-3.5 text-purple-400" />
            <span>High-Yield Partner Program</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-5">
            Earn 30% to 40% <br />
            <span className="text-gradient-hero">Fixed Client Commission</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Partner with Arclyn Studio. You make the introduction and handle initial inquiries — our senior engineering squad handles technical discovery, scoping, rapid delivery, and client handover.
          </p>
        </div>

        {/* Tier Cards: 30% vs 40% Commission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          
          {/* Tier 1: Initial Referrals */}
          <div className="relative rounded-3xl p-8 sm:p-10 bg-[#090d1a] border border-white/[0.08] hover:border-purple-500/40 transition-all duration-300 shadow-[0_10px_40px_rgba(0,0,0,0.5)] flex flex-col justify-between group">
            <div className="absolute -top-3 left-8 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-purple-600/30 text-purple-300 border border-purple-500/40">
              Starting Tier • First 3 Deals
            </div>

            <div>
              <div className="flex items-baseline justify-between mb-4 mt-2">
                <span className="font-display text-5xl sm:text-6xl font-black text-white">30%</span>
                <span className="text-xs sm:text-sm font-semibold text-purple-300 bg-purple-500/10 px-3 py-1 rounded-lg border border-purple-500/20">
                  Fixed Revenue Share
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Standard Partner Tier</h3>
              <p className="text-sm text-slate-300 font-light leading-relaxed mb-6">
                Receive 30% commission on every web development and AI automation contract closed. Paid reliably upon client milestone payment.
              </p>

              <div className="space-y-3 pt-4 border-t border-white/5 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Website deals: Earn up to <strong>PKR 21,000</strong> per client</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>AI Automation: Earn up to <strong>PKR 12,000</strong> per workflow</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Commissions paid strictly on retained revenue</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5">
              <span className="text-xs text-slate-400">Applies to your 1st, 2nd, and 3rd closed deals</span>
            </div>
          </div>

          {/* Tier 2: VIP Partner */}
          <div className="relative rounded-3xl p-8 sm:p-10 bg-gradient-to-b from-[#13112c] to-[#090d1a] border border-cyan-400/40 shadow-[0_10px_50px_rgba(6,182,212,0.15)] flex flex-col justify-between group">
            <div className="absolute -top-3 left-8 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/30">
              VIP Tier • 4th Deal Onwards
            </div>

            <div>
              <div className="flex items-baseline justify-between mb-4 mt-2">
                <span className="font-display text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">40%</span>
                <span className="text-xs sm:text-sm font-semibold text-cyan-300 bg-cyan-500/10 px-3 py-1 rounded-lg border border-cyan-500/30">
                  Elevated Commission
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Elite Referral Partner</h3>
              <p className="text-sm text-slate-300 font-light leading-relaxed mb-6">
                After your 3rd successful referral, your commission automatically jumps to 40% for all subsequent deals indefinitely.
              </p>

              <div className="space-y-3 pt-4 border-t border-white/5 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Website deals: Earn up to <strong>PKR 28,000</strong> per client</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>AI Automation: Earn up to <strong>PKR 16,000</strong> per workflow</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Direct Slack/WhatsApp line to founder & tech leads</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5">
              <span className="text-xs text-cyan-300 font-medium">Automatic upgrade after 3 completed projects</span>
            </div>
          </div>

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
                Upon final client handover and payment, your 30% to 40% commission is immediately transferred.
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
