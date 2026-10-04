'use client';

import React from 'react';
import { GlowCard } from "@/components/ui/spotlight-card";

export function Default() {
  return (
    <div className="w-screen h-screen flex flex-row items-center justify-center gap-10 custom-cursor bg-[#050711]">
      <GlowCard glowColor="brand">
        <div className="flex flex-col justify-end h-full">
          <h3 className="text-lg font-bold text-white">Full-Stack Scale</h3>
          <p className="text-xs text-slate-300">Engineered with sub-second performance.</p>
        </div>
      </GlowCard>
      <GlowCard glowColor="cyan">
        <div className="flex flex-col justify-end h-full">
          <h3 className="text-lg font-bold text-white">AI Automation</h3>
          <p className="text-xs text-slate-300">Autonomous pipelines with verifiable ROI.</p>
        </div>
      </GlowCard>
      <GlowCard glowColor="purple">
        <div className="flex flex-col justify-end h-full">
          <h3 className="text-lg font-bold text-white">Cloud Architecture</h3>
          <p className="text-xs text-slate-300">Modern DevOps with zero technical debt.</p>
        </div>
      </GlowCard>
    </div>
  );
}

export default Default;
