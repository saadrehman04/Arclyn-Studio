'use client';

import React from 'react';
import { useOffscreenPause } from '@/components/motion/useOffscreenPause';

const DARK_ITEMS = [
  'From idea to MVP in 8 weeks',
  'Where AI meets human expertise',
  'AI-accelerated product development',
  'Autonomous multi-agent systems',
  'Sub-second Next.js performance',
];

const LIGHT_ITEMS = [
  'High-converting digital flagships',
  'Autonomous workflow automation',
  'Enterprise data privacy & security',
  'Fixed milestone pricing',
  'You own 100% of the code',
];

const Row: React.FC<{ items: string[]; tone: 'dark' | 'light'; reverse?: boolean }> = ({ items, tone, reverse }) => (
  <div className={`marquee ${reverse ? 'marquee-reverse' : ''}`} style={{ ['--marquee-duration' as string]: '50s' }}>
    {[0, 1].map((dup) => (
      <ul key={dup} aria-hidden={dup === 1} className="flex shrink-0 items-center">
        {items.map((item) => (
          <li key={`${dup}-${item}`} className="flex items-center gap-8 whitespace-nowrap px-6 sm:gap-10 sm:px-8">
            <span
              className={`font-display text-xl font-semibold uppercase tracking-[-0.01em] sm:text-3xl ${
                tone === 'dark' ? 'text-white' : 'text-black'
              }`}
            >
              {item}
            </span>
            <span className={tone === 'dark' ? 'text-zinc-400' : 'text-black'}>•</span>
          </li>
        ))}
      </ul>
    ))}
  </div>
);

export const DualCrossingTicker: React.FC = () => {
  const ref = useOffscreenPause<HTMLElement>();
  return (
    <section ref={ref} aria-label="What we stand for" className="relative overflow-hidden bg-[var(--bg)] py-16 sm:py-24">
      <div className="relative flex flex-col items-center">
        <div className="w-[120vw] -rotate-[2.5deg] border-y border-white/10 bg-[#111113] py-4 sm:py-5">
          <Row items={DARK_ITEMS} tone="dark" />
        </div>
        <div
          className="-mt-6 w-[120vw] rotate-[2.5deg] py-4 shadow-[0_20px_60px_rgba(0,0,0,0.6)] sm:-mt-8 sm:py-5"
          style={{ background: '#ededea' }}
        >
          <Row items={LIGHT_ITEMS} tone="light" reverse />
        </div>
      </div>
    </section>
  );
};
