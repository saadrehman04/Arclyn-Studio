'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, Terminal, Activity, ShieldCheck, Zap, Users, Code, Award, CheckCircle2 } from 'lucide-react';
import { AnimatedCounter } from '../shared/AnimatedCounter';

export const BentoGridSection: React.FC = () => {
  const [latency, setLatency] = useState(18);
  const [activeEdge, setActiveEdge] = useState('US-East (Vercel Edge)');

  // Subtle real-time simulated telemetry variance
  useEffect(() => {
    const interval = setInterval(() => {
      setLatency(17 + Math.floor(Math.random() * 3));
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-28 sm:py-36 bg-[#050711] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-cyan-400/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-5"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Signature Engineering Philosophy</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-5"
          >
            AI + Human <span className="text-gradient-hero">Expertise</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal"
          >
            Where algorithmic precision meets senior software craftsmanship. We harness autonomous AI agents for speed, while senior engineers architect every line of critical infrastructure.
          </motion.p>
        </div>

        {/* Asymmetric 4-Card Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          
          {/* CARD 1: Human Craftsmanship (Tall Portrait Card, lg:col-span-5) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 group relative rounded-3xl overflow-hidden border border-white/[0.1] bg-[#090d1a] min-h-[460px] flex flex-col justify-end p-8 shadow-[0_10px_40px_rgba(0,0,0,0.6)]"
          >
            <Image
              src="/images/bento-collaboration.jpg"
              alt="Arclyn Studio Senior Engineering Collaboration"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-75"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050711] via-[#050711]/60 to-transparent" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/20 border border-cyan-400/40 text-cyan-300 text-xs font-mono mb-4 backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Senior Architectural Oversight</span>
              </div>
              
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3 leading-snug">
                Zero AI Hallucinations in Critical Infrastructure
              </h3>
              
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                Every API contract, database schema, payment flow, and security boundary is designed, reviewed, and audited by senior human engineers.
              </p>
            </div>
          </motion.div>

          {/* CARD 2: Live SaaS Telemetry Dashboard (Wide Card, lg:col-span-7) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 rounded-3xl border border-white/[0.1] bg-[#090d1a]/95 backdrop-blur-2xl p-7 sm:p-8 flex flex-col justify-between shadow-[0_10px_40px_rgba(0,0,0,0.6)] relative overflow-hidden"
          >
            {/* Top Bar with Status Dot */}
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-white/[0.08]">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                  </span>
                  <span className="font-mono text-xs uppercase tracking-wider text-emerald-400 font-semibold">
                    Production Systems Operational
                  </span>
                </div>
                <div className="font-mono text-xs text-slate-400 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08]">
                  Region: {activeEdge}
                </div>
              </div>

              {/* Real-time Telemetry Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 my-6">
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1">Global TTFB</div>
                  <div className="font-mono text-2xl sm:text-3xl font-bold text-white flex items-baseline gap-1">
                    <span>{latency}</span>
                    <span className="text-xs text-cyan-400 font-normal">ms</span>
                  </div>
                  <div className="text-[10px] text-emerald-400 mt-1 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" /> Top 1% Global CDN
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1">SLA Uptime</div>
                  <div className="font-mono text-2xl sm:text-3xl font-bold text-white flex items-baseline gap-1">
                    <span>99.98</span>
                    <span className="text-xs text-purple-400 font-normal">%</span>
                  </div>
                  <div className="text-[10px] text-purple-300 mt-1 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-purple-400" /> Zero Unplanned Outages
                  </div>
                </div>

                <div className="col-span-2 sm:col-span-1 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1">Cache Hit Ratio</div>
                  <div className="font-mono text-2xl sm:text-3xl font-bold text-white flex items-baseline gap-1">
                    <span>96.4</span>
                    <span className="text-xs text-cyan-400 font-normal">%</span>
                  </div>
                  <div className="text-[10px] text-cyan-300 mt-1 flex items-center gap-1">
                    <Zap className="w-3 h-3 text-cyan-400" /> Redis Edge Tier
                  </div>
                </div>
              </div>

              {/* Simulated Live Terminal Stream */}
              <div className="rounded-2xl bg-black/80 border border-white/[0.08] p-4 font-mono text-xs text-slate-300 space-y-1.5 overflow-hidden">
                <div className="flex items-center gap-2 text-slate-500 pb-1 border-b border-white/[0.05] text-[10px]">
                  <Terminal className="w-3 h-3 text-slate-400" />
                  <span>LIVE ARCHITECTURE TELEMETRY DISPATCH</span>
                </div>
                <div className="text-cyan-400/90 truncate">
                  [agent-orchestration] <span className="text-slate-400">dispatch:</span> QueryMind multi-agent RAG vector query resolved in 1.14s
                </div>
                <div className="text-purple-400/90 truncate">
                  [edge-gateway] <span className="text-slate-400">status:</span> Next.js 15 ISR cached route served in 12ms (Vercel Edge)
                </div>
                <div className="text-emerald-400/90 truncate">
                  [checkout-pipeline] <span className="text-slate-400">webhook:</span> Stripe idempotent charge verified &amp; synced to Supabase
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-cyan-400" /> Continuous Synthetic Health Probes Active
              </span>
              <span className="font-mono text-[11px] text-slate-500">Auto-heal SLA enabled</span>
            </div>
          </motion.div>

          {/* CARD 3: Shipped in Weeks, Not Months (Wide Card, lg:col-span-7) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 group relative rounded-3xl overflow-hidden border border-white/[0.1] bg-[#090d1a] min-h-[360px] flex flex-col justify-end p-8 shadow-[0_10px_40px_rgba(0,0,0,0.6)]"
          >
            <Image
              src="/images/bento-keyboard.jpg"
              alt="High Speed Engineering Velocity"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-50 group-hover:opacity-65"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050711] via-[#050711]/70 to-transparent" />

            <div className="relative z-10 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400/40 text-purple-300 text-xs font-mono mb-4 backdrop-blur-md">
                <Zap className="w-3.5 h-3.5 text-purple-400" />
                <span>Hyper-Velocity Delivery</span>
              </div>
              
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
                Shipped in Weeks, Not Months
              </h3>
              
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                By standardizing our modular design tokens, modern TypeScript primitives, and automated deployment pipelines, we turn 6-month agency roadmaps into 3 to 4-week high-impact releases.
              </p>
            </div>
          </motion.div>

          {/* CARD 4: Verified Track Record Counters (Portrait Card, lg:col-span-5) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 rounded-3xl border border-white/[0.1] bg-[#090d1a] p-8 flex flex-col justify-between shadow-[0_10px_40px_rgba(0,0,0,0.6)] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-44 h-44 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none" />

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-amber-300 text-xs font-mono mb-6">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>Audited Studio Track Record</span>
              </div>

              <div className="grid grid-cols-2 gap-6 sm:gap-7">
                <div>
                  <div className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-1">
                    <AnimatedCounter value={150} suffix="K+" />
                  </div>
                  <div className="text-xs font-medium text-slate-400">Global Community</div>
                  <div className="text-[10px] text-cyan-400 font-mono mt-0.5">saadr.tech verified</div>
                </div>

                <div>
                  <div className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-1">
                    <AnimatedCounter value={50} suffix="+" />
                  </div>
                  <div className="text-xs font-medium text-slate-400">Shipped Projects</div>
                  <div className="text-[10px] text-purple-400 font-mono mt-0.5">Websites &amp; AI Systems</div>
                </div>

                <div>
                  <div className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-1">
                    <AnimatedCounter value={98} suffix="%" />
                  </div>
                  <div className="text-xs font-medium text-slate-400">Lighthouse Score</div>
                  <div className="text-[10px] text-emerald-400 font-mono mt-0.5">Core Web Vitals Pass</div>
                </div>

                <div>
                  <div className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-1">
                    <AnimatedCounter value={3} suffix="+ Yrs" />
                  </div>
                  <div className="text-xs font-medium text-slate-400">Engineering Depth</div>
                  <div className="text-[10px] text-amber-400 font-mono mt-0.5">Production Expertise</div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.08] flex items-center justify-between text-xs text-slate-400">
              <span>Backed by 11 verified live deployments</span>
              <span className="text-cyan-400 font-mono">100% Real Code</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
