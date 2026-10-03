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
    <section className="relative py-12 border-y border-white/10 bg-[#070B1B]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CAPABILITIES.map((cap, index) => {
            const Icon = cap.icon;
            return (
              <div
                key={cap.title}
                className="relative group p-6 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-white/15 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center border mb-5 transition-transform duration-300 group-hover:scale-110 ${cap.bg}`}>
                  <Icon className={`w-6 h-6 ${cap.accent}`} />
                </div>
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {cap.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
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
