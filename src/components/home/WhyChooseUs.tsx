'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Zap, ShieldCheck, Sparkles, Terminal, Award, Clock } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="relative py-28 sm:py-36 bg-[#050711] overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-5"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>The Arclyn Advantage</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-5"
          >
            Driven by Innovation, <br />
            <span className="text-gradient-hero">Grounded in Results</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal"
          >
            We eliminate the bloated layers, junior handoffs, and vague hourly billing of traditional agencies.
          </motion.p>
        </div>

        {/* 6-Card Broken Asymmetric Rhythm matching reference */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          
          {/* 1. Feature Card: Speed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="rounded-3xl p-8 bg-[#090d1a] border border-white/[0.08] hover:border-cyan-400/40 transition-all duration-300 flex flex-col justify-between group shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  <Zap className="w-5 h-5" />
                </div>
                <span className="font-mono text-xs text-slate-500">01</span>
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                Speed Without Compromise
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Our component tokens and standardized engineering pipelines cut launch timelines from 4 months to 3-4 weeks without accumulating technical debt.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/[0.06] text-xs font-mono text-cyan-400">
              Avg. delivery: 21 days
            </div>
          </motion.div>

          {/* 2. Feature Card: Zero Vendor Lock-In */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl p-8 bg-[#090d1a] border border-white/[0.08] hover:border-purple-400/40 transition-all duration-300 flex flex-col justify-between group shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-full bg-purple-500/10 border border-purple-400/30 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="font-mono text-xs text-slate-500">02</span>
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                100% Clean Code Ownership
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                You receive full repository IP, clean TypeScript documentation, and automated CI/CD configurations. No proprietary platforms, no lock-in.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/[0.06] text-xs font-mono text-purple-400">
              Full GitHub Transfer
            </div>
          </motion.div>

          {/* 3. Image Portrait Card: Direct Founder Access (Reference Site Pattern!) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative rounded-3xl overflow-hidden border border-white/[0.1] bg-[#090d1a] min-h-[320px] group shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          >
            <Image
              src="/images/feature-portrait-1.jpg"
              alt="Arclyn Studio Founder & Lead Architect"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050711] via-[#050711]/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="p-4 rounded-2xl bg-black/70 border border-white/[0.15] backdrop-blur-xl">
                <div className="text-[11px] font-mono text-amber-400 uppercase tracking-wider mb-1">Human Leadership</div>
                <div className="font-display text-base font-bold text-white">Direct Founder Collaboration</div>
                <div className="text-xs text-slate-300 mt-1">Speak directly with systems architects, never account managers.</div>
              </div>
            </div>
          </motion.div>

          {/* 4. Feature Card: AI Native */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-3xl p-8 bg-[#090d1a] border border-white/[0.08] hover:border-cyan-400/40 transition-all duration-300 flex flex-col justify-between group shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  <Terminal className="w-5 h-5" />
                </div>
                <span className="font-mono text-xs text-slate-500">03</span>
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                AI-Native Tooling
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                We integrate autonomous agents directly into customer support, lead routing, and reporting to lower ongoing operational headcount.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/[0.06] text-xs font-mono text-cyan-400">
              LangGraph &amp; Claude 3.5
            </div>
          </motion.div>

          {/* 5. Image Portrait Card: Dedicated Engineering Squad */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="relative rounded-3xl overflow-hidden border border-white/[0.1] bg-[#090d1a] min-h-[320px] group shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          >
            <Image
              src="/images/feature-portrait-2.jpg"
              alt="Dedicated Senior Engineers"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050711] via-[#050711]/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="p-4 rounded-2xl bg-black/70 border border-white/[0.15] backdrop-blur-xl">
                <div className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider mb-1">Squad Model</div>
                <div className="font-display text-base font-bold text-white">Full-Stack Specialists</div>
                <div className="text-xs text-slate-300 mt-1">Cross-functional team allocated exclusively to your release window.</div>
              </div>
            </div>
          </motion.div>

          {/* 6. Feature Card: Milestone Pricing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-3xl p-8 bg-[#090d1a] border border-white/[0.08] hover:border-emerald-400/40 transition-all duration-300 flex flex-col justify-between group shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                  <Award className="w-5 h-5" />
                </div>
                <span className="font-mono text-xs text-slate-500">04</span>
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                Transparent Milestones
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Fixed pricing tied to verifiable deliverables: 50% on kickoff, 30% on staging review, and 20% on final production launch.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/[0.06] text-xs font-mono text-emerald-400">
              Zero Hidden Invoices
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
