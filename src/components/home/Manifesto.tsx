'use client';

import React, { useEffect, useRef } from 'react';
import { gsap, prefersReducedMotion } from '@/lib/gsap';
import { Reveal } from '@/components/motion/Reveal';
import { PROJECTS } from '@/data/projects';

const STATEMENT =
  'We are a full-stack and AI studio for ambitious founders. We design, engineer and automate products that look exceptional, perform flawlessly and turn visitors into revenue — shipped in weeks, not months.';

const STATS = [
  { value: `${PROJECTS.length}+`, label: 'Products shipped across 9 industries' },
  { value: '8 wks', label: 'Typical idea-to-MVP timeline' },
  { value: '< 4h', label: 'Founder response time' },
  { value: '100%', label: 'Code ownership handed to you' },
];

export const Manifesto: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const text = textRef.current;
    if (!text || prefersReducedMotion()) return;
    const words = text.querySelectorAll<HTMLSpanElement>('[data-word]');

    const ctx = gsap.context(() => {
      gsap.fromTo(
        words,
        { opacity: 0.14 },
        {
          opacity: 1,
          ease: 'none',
          stagger: 0.08,
          scrollTrigger: {
            trigger: text,
            start: 'top 78%',
            end: 'bottom 52%',
            scrub: true,
          },
        },
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="relative bg-[var(--bg)] px-5 py-28 sm:px-8 sm:py-36 lg:py-44">
      <div className="mx-auto max-w-6xl">
        <Reveal as="p" variant="fade" className="eyebrow mb-10">
          Who we are
        </Reveal>

        <p
          ref={textRef}
          className="font-display text-[clamp(1.75rem,4.4vw,3.85rem)] font-medium leading-[1.12] tracking-[-0.03em] text-white"
        >
          {STATEMENT.split(' ').map((word, i) => (
            <React.Fragment key={i}>
              <span data-word>{word}</span>{' '}
            </React.Fragment>
          ))}
        </p>

        <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.08] lg:mt-28 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal
              key={stat.label}
              variant="up"
              delay={i * 90}
              className="flex flex-col justify-between gap-10 bg-[var(--bg)] p-6 sm:p-8"
            >
              <span className="font-mono text-[11px] text-zinc-600">0{i + 1}</span>
              <div>
                <div className="font-display text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                  {stat.value}
                </div>
                <p className="mt-2 text-sm leading-snug text-zinc-500">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
