import React from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight, DollarSign, Handshake, Users2 } from 'lucide-react';

export const PartnerTeaser: React.FC = () => {
  return (
    <section className="relative py-20 border-t border-white/10 bg-[#070B1D] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl glass-panel p-8 sm:p-12 border border-purple-500/30 relative overflow-hidden">
          
          {/* Ambient light beam */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-purple-600/20 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column Copy */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-300 text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                <span>Partner &amp; Referral Program</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Know a business that needs this? <br />
                <span className="text-gradient">Earn a flat 30% commission.</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                Whether you are a digital marketer, freelance consultant, agency with client overflow, or tech creator — partner with Arclyn Studio. Introduce clients who need high-performance web development or AI automation, and receive generous, timely payouts on every closed engagement.
              </p>

              {/* 3 mini perks */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <div className="w-6 h-6 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-3.5 h-3.5" />
                  </div>
                  <span>Flat 30% Revenue Share</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <div className="w-6 h-6 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center flex-shrink-0">
                    <Handshake className="w-3.5 h-3.5" />
                  </div>
                  <span>Instant Milestone Payouts</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <div className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                    <Users2 className="w-3.5 h-3.5" />
                  </div>
                  <span>Zero Technical Overhead</span>
                </div>
              </div>
            </div>

            {/* Right Column CTA */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-center gap-4">
              <Link
                href="/partner-program"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-sm font-semibold text-white btn-primary-gradient group text-center"
              >
                <span>Explore Partner Program</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <span className="text-xs text-slate-400">
                Quick 5-minute onboarding • No fees to join
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
