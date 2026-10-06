import React from 'react';
import { Sparkles, Layers, ShieldCheck, LifeBuoy } from 'lucide-react';

const CAPABILITIES = [
  {
    icon: Sparkles,
    title: 'AI-Powered Development',
    desc: 'Ship faster with AI-assisted design, intelligent code generation, and rapid architectural prototyping.',
    accent: 'text-purple-400',
    bg: 'bg-purple-500/10 border-purple-500/20',
  },
  {
    icon: Layers,
    title: 'Full-Stack Engineering',
    desc: 'Production-grade applications built on clean Next.js, TypeScript, and scalable relational databases.',
    accent: 'text-cyan-400',
    bg: 'bg-cyan-500/10 border-cyan-500/20',
  },
  {
    icon: ShieldCheck,
    title: 'Smart QA & Testing',
    desc: 'Automated test suites and performance profiling mean fewer bugs, zero regressions, and smoother launches.',
    accent: 'text-emerald-400',
    bg: 'bg-emerald-500/10 border-emerald-500/20',
  },
  {
    icon: LifeBuoy,
    title: 'Ongoing Support',
    desc: 'We don’t disappear after delivery. Every project includes post-launch hyper-care and warranty protection.',
    accent: 'text-blue-400',
    bg: 'bg-blue-500/10 border-blue-500/20',
  },
];

export const CapabilityStrip: React.FC = () => {
  return (
    <section className="relative border-y border-white/10 bg-[#070B1B]/80 py-8 backdrop-blur-md sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
          {CAPABILITIES.map((cap) => {
            const Icon = cap.icon;
            return (
              <div
                key={cap.title}
                className="group relative rounded-xl border border-white/5 bg-white/[0.02] p-3 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.05] sm:rounded-2xl sm:p-6"
              >
                <div className={`mb-3 flex h-9 w-9 items-center justify-center rounded-lg border transition-transform duration-300 group-hover:scale-110 sm:mb-5 sm:h-12 sm:w-12 sm:rounded-xl ${cap.bg}`}>
                  <Icon className={`h-4 w-4 sm:h-6 sm:w-6 ${cap.accent}`} />
                </div>
                <h3 className="mb-1 text-xs font-bold text-white transition-colors group-hover:text-cyan-300 sm:mb-2 sm:text-base">
                  {cap.title}
                </h3>
                <p className="text-[10px] leading-snug text-slate-400 sm:text-sm sm:leading-relaxed">
                  {cap.desc}
                </p>
                {/* Subtle bottom accent line on hover */}
                <div className="absolute bottom-0 left-6 right-6 h-[2px] bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
