'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap, prefersReducedMotion } from '@/lib/gsap';
import { Reveal, SplitText } from '@/components/motion/Reveal';
import { useOffscreenPause } from '@/components/motion/useOffscreenPause';

const STEPS = [
  {
    title: 'Discover & prototype',
    desc: 'AI-generated wireframes and clickable prototypes in hours, not weeks — so you validate the idea before a single line of production code.',
    meta: 'Week 1',
  },
  {
    title: 'Accelerated development',
    desc: 'Senior engineers paired with AI-assisted coding ship production-grade features at startup speed, with fixed milestones you can plan around.',
    meta: 'Weeks 2 — 6',
  },
  {
    title: 'Smart QA testing',
    desc: 'AI-driven test suites and real-device checks catch regressions early. Fewer bugs, faster pages, smoother launches.',
    meta: 'Continuous',
  },
  {
    title: 'Launch & full support',
    desc: 'A dedicated team guides you through launch, analytics and growth — and stays on call after go-live, every step of the way.',
    meta: 'Week 8 →',
  },
];

export const Process: React.FC = () => {
  const sectionRef = useOffscreenPause<HTMLElement>();
  const listRef = useRef<HTMLOListElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const list = listRef.current;
    const line = lineRef.current;
    if (!list || !line || prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        line,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: { trigger: list, start: 'top 70%', end: 'bottom 70%', scrub: true },
        },
      );
    }, list);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="process" className="relative overflow-hidden bg-[var(--bg)] px-5 py-28 sm:px-8 lg:py-40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-10%] top-1/4 h-[600px] w-[600px] rounded-full opacity-40"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.25), transparent 65%)' }}
      />

      <div className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
        {/* Sticky left */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal as="p" variant="fade" className="eyebrow mb-6">
            How we work
          </Reveal>
          <SplitText
            text={'AI-accelerated.\nHuman-crafted.'}
            accentWords={[1]}
            accentClassName="font-serif-accent text-gradient-brand"
            className="font-display text-[clamp(2.5rem,5.6vw,5rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-white"
          />
          <Reveal as="p" variant="up" delay={150} className="mt-6 max-w-md text-base leading-relaxed text-zinc-400">
            AI handles the repetitive work so our senior team can focus on what matters — product thinking, craft and
            the details your customers feel.
          </Reveal>

          <Reveal variant="scale" delay={200} className="relative mx-auto mt-10 aspect-square w-[min(78vw,420px)] lg:mx-0">
            <div
              aria-hidden="true"
              className="absolute inset-[12%] rounded-full opacity-70"
              style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.35), rgba(139,92,246,0.15) 45%, transparent 70%)' }}
            />
            <div className="float-y relative h-full w-full">
              <Image
                src="/images/iridescent-torus-clean.png"
                alt=""
                fill
                sizes="(max-width: 1024px) 78vw, 420px"
                className="object-contain"
              />
            </div>
          </Reveal>
        </div>

        {/* Steps */}
        <ol ref={listRef} className="relative">
          <div aria-hidden="true" className="absolute bottom-0 left-[19px] top-0 w-px bg-white/[0.08] sm:left-[27px]" />
          <div
            ref={lineRef}
            aria-hidden="true"
            className="absolute bottom-0 left-[19px] top-0 w-px origin-top bg-gradient-to-b from-violet-400 via-sky-400 to-violet-400 sm:left-[27px]"
          />
          {STEPS.map((step, i) => (
            <Reveal
              as="li"
              key={step.title}
              variant="up"
              className="relative pb-16 pl-14 last:pb-0 sm:pb-20 sm:pl-20"
            >
              <span className="absolute left-0 top-0 grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-[var(--bg)] font-mono text-xs text-white sm:h-14 sm:w-14 sm:text-sm">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-violet-300/80">{step.meta}</p>
              <h3 className="mt-3 font-display text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">
                {step.title}
              </h3>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-zinc-400">{step.desc}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Process;
