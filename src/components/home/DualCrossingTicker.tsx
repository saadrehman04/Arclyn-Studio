'use client';

import React from 'react';

const DARK_ITEMS = [
  'From Idea to MVP in 8 Weeks',
  'Where AI Meets Human Expertise',
  'AI-Accelerated Product Development',
  'Autonomous Multi-Agent Systems',
  'Sub-Second Next.js Performance',
  'Zero Technical Debt Guarantee',
];

const GRADIENT_ITEMS = [
  'Where AI Meets Human Expertise',
  'AI-Accelerated Product Development',
  'From Idea to MVP in 8 Weeks',
  'High-Converting Digital Flagships',
  'Autonomous Workflow Automation',
  'Enterprise Data Privacy & Security',
];

export const DualCrossingTicker: React.FC = () => {
  return (
    <section className="relative py-14 sm:py-20 overflow-hidden bg-[#03050C] flex flex-col justify-center select-none">
      {/* Ambient center illumination matching the electric violet-to-magenta button glow */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[220px] bg-[#4608EE]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/3 translate-x-1/2 -translate-y-1/2 w-[550px] h-[220px] bg-[#CE00FC]/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative w-full py-8 flex flex-col items-center justify-center">
        {/* Ribbon 1: Dark Slate Band (Tilted -2.5deg) */}
        <div className="w-[120vw] -ml-[10vw] transform -rotate-2 sm:-rotate-[2.5deg] bg-[#0A0E1D] border-y border-white/[0.12] py-3.5 sm:py-4 shadow-xl z-0">
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
            {[...DARK_ITEMS, ...DARK_ITEMS, ...DARK_ITEMS, ...DARK_ITEMS].map((item, idx) => (
              <div key={idx} className="flex items-center gap-6 sm:gap-8 mx-4 sm:mx-6">
                <span className="font-display font-bold text-base sm:text-xl md:text-2xl tracking-wide text-white uppercase whitespace-nowrap">
                  {item}
                </span>
                <span className="text-[#E8DDA7] text-lg sm:text-2xl font-black">✱</span>
              </div>
            ))}
          </div>
        </div>

        {/* Ribbon 2: Electric Indigo → Vivid Violet → Neon Magenta Gradient Band (Sampled Directly from Reference Button, Crossing at +2.8deg over Ribbon 1) */}
        <div className="w-[120vw] -ml-[10vw] -mt-6 sm:-mt-8 transform rotate-2 sm:rotate-[2.8deg] bg-gradient-to-r from-[#4608EE] via-[#8E00F4] to-[#CE00FC] py-3.5 sm:py-4 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_45px_rgba(177,19,254,0.5)] border-y border-[#CE00FC]/30 z-10">
          <div className="flex w-max animate-marquee-reverse hover:[animation-play-state:paused]">
            {[...GRADIENT_ITEMS, ...GRADIENT_ITEMS, ...GRADIENT_ITEMS, ...GRADIENT_ITEMS].map((item, idx) => (
              <div key={idx} className="flex items-center gap-6 sm:gap-8 mx-4 sm:mx-6">
                <span className="font-display font-black text-base sm:text-xl md:text-2xl tracking-wide text-white uppercase whitespace-nowrap drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
                  {item}
                </span>
                <span className="text-white text-lg sm:text-2xl font-black">✱</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
