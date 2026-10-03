'use client';

import React from 'react';

const STATEMENTS = [
  'ARCHITECTING THE FUTURE',
  'AUTONOMOUS SYSTEMS',
  'ZERO TECHNICAL DEBT',
  'SUB-SECOND LATENCY',
  'CONVERSION-FIRST ENGINEERING',
  'AI WORKFLOW AUTOMATION',
  'PRODUCTION-GRADE SAAS',
  'ENTERPRISE SECURITY',
];

export const StatementMarquee: React.FC = () => {
  return (
    <section className="relative py-8 overflow-hidden bg-gradient-to-r from-purple-950/40 via-cyan-950/30 to-purple-950/40 border-y border-white/[0.08]">
      <div className="flex w-max select-none animate-marquee hover:[animation-play-state:paused]">
        {[...STATEMENTS, ...STATEMENTS, ...STATEMENTS].map((statement, idx) => (
          <div key={idx} className="flex items-center gap-6 mx-8">
            <span className="font-display font-black text-xl sm:text-2xl tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-300 to-amber-300 opacity-80 hover:opacity-100 transition-opacity">
              {statement}
            </span>
            <span className="text-cyan-400 text-lg">✦</span>
          </div>
        ))}
      </div>
    </section>
  );
};
