'use client';

import React from 'react';
import { motion } from 'framer-motion';

const TECH_ITEMS = [
  { name: 'Next.js 15', category: 'Framework' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'Tailwind CSS', category: 'Styling' },
  { name: 'React 19', category: 'UI Core' },
  { name: 'OpenAI GPT-4o', category: 'Intelligence' },
  { name: 'LangChain & LangGraph', category: 'Agent Orchestration' },
  { name: 'Anthropic Claude 3.5', category: 'Reasoning' },
  { name: 'Supabase / PostgreSQL', category: 'Database' },
  { name: 'Python & FastAPI', category: 'Backend' },
  { name: 'n8n Autonomous Workflows', category: 'Automation' },
  { name: 'Stripe Payments', category: 'FinTech' },
  { name: 'AWS & Cloud Infrastructure', category: 'DevOps' },
  { name: 'Vercel Edge Network', category: 'Deployment' },
  { name: 'Docker & Microservices', category: 'Containers' },
];

export const TechMarquee: React.FC = () => {
  return (
    <section className="relative py-10 overflow-hidden border-y border-white/[0.06] bg-[#070a16]/60 backdrop-blur-md">
      {/* Subtle edge fades */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-[#050711] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-[#050711] to-transparent z-10 pointer-events-none" />

      <div className="flex w-max select-none animate-marquee hover:[animation-play-state:paused]">
        {[...TECH_ITEMS, ...TECH_ITEMS, ...TECH_ITEMS].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3.5 mx-6 group cursor-default transition-all duration-300"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/80 group-hover:scale-150 group-hover:bg-purple-400 transition-all duration-300 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
            <span className="font-display font-bold text-sm sm:text-base tracking-wide text-slate-300 group-hover:text-white transition-colors duration-200">
              {item.name}
            </span>
            <span className="font-mono text-[10px] uppercase px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-slate-400 group-hover:border-cyan-400/40 group-hover:text-cyan-300 transition-colors duration-200">
              {item.category}
            </span>
            <span className="text-white/20 ml-2 font-mono">/</span>
          </div>
        ))}
      </div>
    </section>
  );
};
