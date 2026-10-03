'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Bot, Cpu, Gauge, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import { MagneticButton } from '../shared/MagneticButton';

const CAPABILITIES = [
  {
    number: '01',
    icon: Bot,
    title: 'AI-Powered Autonomous Systems',
    desc: 'Bespoke AI agents, LangChain/LangGraph orchestration, prompt caching, and custom RAG knowledge bases that automate high-complexity workflows.',
    tag: 'LangGraph & Claude 3.5',
    accent: 'from-purple-500/20 to-cyan-500/20',
    iconColor: 'text-cyan-400',
    borderColor: 'group-hover:border-cyan-400/40',
  },
  {
    number: '02',
    icon: Cpu,
    title: 'Full-Stack Software Craft',
    desc: 'Production-ready Next.js 15, TypeScript, Node.js, and Supabase backends architected for zero latency, rock-solid security, and effortless scaling.',
    tag: 'Next.js 15 & PostgreSQL',
    accent: 'from-blue-500/20 to-purple-500/20',
    iconColor: 'text-purple-400',
    borderColor: 'group-hover:border-purple-400/40',
  },
  {
    number: '03',
    icon: Gauge,
    title: 'Smart QA & Sub-Second TTFB',
    desc: 'Automated end-to-end regression suites, extreme image optimization, and caching strategies delivering verified 98+ Google Lighthouse scores.',
    tag: '98+ Lighthouse Performance',
    accent: 'from-cyan-500/20 to-emerald-500/20',
    iconColor: 'text-emerald-400',
    borderColor: 'group-hover:border-emerald-400/40',
  },
  {
    number: '04',
    icon: ShieldCheck,
    title: 'Enterprise DevOps & Support',
    desc: 'CI/CD automation, Docker containerization, AWS & Vercel edge networks, continuous monitoring, and proactive SLA-backed maintenance.',
    tag: '99.98% Uptime SLA',
    accent: 'from-amber-500/20 to-purple-500/20',
    iconColor: 'text-amber-400',
    borderColor: 'group-hover:border-amber-400/40',
  },
];

export const Capability3DSection: React.FC = () => {
  return (
    <section id="capabilities" className="relative py-24 sm:py-32 overflow-hidden bg-[#050711]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: 3D Iridescent Torus Floating Sculpture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex flex-col items-center"
          >
            <div className="relative w-full max-w-[440px] aspect-square rounded-3xl p-3 bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/[0.1] backdrop-blur-2xl shadow-[0_0_60px_rgba(34,211,238,0.12)] group">
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-black/60">
                <Image
                  src="/images/iridescent-torus.jpg"
                  alt="Arclyn Studio 3D Iridescent Engineering Core"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 440px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050711] via-transparent to-transparent opacity-60" />
                
                {/* Floating Metric Badge */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-black/70 border border-white/[0.12] backdrop-blur-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider mb-0.5">Architecture Core</div>
                      <div className="text-sm font-bold text-white font-display">Algorithmic Precision + Speed</div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-cyan-400/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300">
                      <Sparkles className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 2x2 Asymmetric Capability Grid */}
          <div className="lg:col-span-7">
            <div className="mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-purple-400/30 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4">
                <span>Core Capabilities</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Software Engineered for{' '}
                <span className="text-gradient-hero">Continuous Dominance</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {CAPABILITIES.map((cap, i) => {
                const IconComponent = cap.icon;
                return (
                  <motion.div
                    key={cap.number}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className={`p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] ${cap.borderColor} backdrop-blur-xl transition-all duration-300 hover:bg-white/[0.04] group hover:-translate-y-1 relative`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${cap.accent} border border-white/[0.1] flex items-center justify-center ${cap.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-xs text-slate-500 group-hover:text-slate-300 transition-colors">
                        {cap.number}
                      </span>
                    </div>

                    <h3 className="font-display text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {cap.title}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                      {cap.desc}
                    </p>

                    <div className="inline-flex items-center px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] text-[11px] font-mono text-slate-300">
                      {cap.tag}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-8 flex items-center gap-4">
              <MagneticButton>
                <Link
                  href="/services"
                  className="px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.12] hover:border-purple-400/50 transition-all duration-200 inline-flex items-center gap-2 group"
                >
                  <span>Explore All Services</span>
                  <ArrowRight className="w-3.5 h-3.5 text-purple-400 group-hover:translate-x-1 transition-transform" />
                </Link>
              </MagneticButton>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
