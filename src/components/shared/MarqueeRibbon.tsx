'use client';

import React from 'react';

interface MarqueeProps {
  items: string[];
  speed?: 'normal' | 'fast' | 'slow';
  reverse?: boolean;
  className?: string;
}

export const MarqueeRibbon: React.FC<MarqueeProps> = ({
  items,
  speed = 'normal',
  reverse = false,
  className = '',
}) => {
  const speedClass = {
    slow: 'duration-[45s]',
    normal: 'duration-[28s]',
    fast: 'duration-[18s]',
  }[speed];

  return (
    <div className={`relative w-full overflow-hidden select-none py-4 ${className}`}>
      {/* Edge gradient masks */}
      <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[#060913] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-[#060913] to-transparent z-10 pointer-events-none" />

      <div
        className={`flex w-max items-center gap-8 ${
          reverse ? 'animate-marquee-reverse' : 'animate-marquee'
        } ${speedClass} hover:[animation-play-state:paused]`}
      >
        {/* Render repeated copies to make the loop seamless */}
        {[...items, ...items, ...items, ...items].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-8 text-sm sm:text-base font-semibold text-slate-300 hover:text-white transition-colors tracking-wide uppercase"
          >
            <span>{item}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/80 shadow-[0_0_8px_#38bdf8]" />
          </div>
        ))}
      </div>
    </div>
  );
};
