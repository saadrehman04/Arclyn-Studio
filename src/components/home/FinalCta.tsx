'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { MagneticButton } from '../shared/MagneticButton';
import { Reveal, SplitText } from '@/components/motion/Reveal';
import { useOffscreenPause } from '@/components/motion/useOffscreenPause';
import { gsap, prefersReducedMotion } from '@/lib/gsap';

export const FinalCta: React.FC = () => {
  const sectionRef = useOffscreenPause<HTMLElement>();
  const arcRef = useRef<HTMLDivElement>(null);

  // The brand arc rises from below as the section scrolls in — echoing the hero.
  useEffect(() => {
    const section = sectionRef.current;
    if (!section || !arcRef.current || prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        arcRef.current,
        { yPercent: 18, scale: 0.92 },
        {
          yPercent: 0,
          scale: 1,
          ease: 'none',
          scrollTrigger: { trigger: section, start: 'top bottom', end: 'bottom bottom', scrub: true },
        },
      );
    }, section);
    return () => ctx.revert();
  }, [sectionRef]);

  return (
    <section ref={sectionRef} id="contact-cta" className="relative isolate overflow-hidden bg-[var(--bg)] px-5 pb-56 pt-28 sm:px-8 sm:pb-72 lg:pt-36">
      {/* Arc horizon (mirrors the hero) */}
      <div
        ref={arcRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[calc(100%-11rem)] -z-10 h-full will-change-transform sm:top-[calc(100%-13rem)]"
      >
        <div className="hero-arc" />
        <div className="hero-arc-flare top-0" />
      </div>
      <div aria-hidden="true" className="hero-grid -z-20 opacity-60" />

      <div className="relative mx-auto max-w-5xl text-center">
        <Reveal as="p" variant="fade" className="eyebrow mb-8 justify-center">
          Let&apos;s talk
        </Reveal>
        <SplitText
          text={'Let’s build your next\nbig thing together.'}
          accentWords={[4, 5]}
          accentClassName="text-zinc-500"
          stagger={60}
          className="font-display text-[clamp(2.6rem,7.6vw,6.75rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-white"
        />
        <Reveal as="p" variant="up" delay={200} className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
          Whether you need a high-converting website, a custom SaaS platform or autonomous AI agents — tell us what
          you&apos;re building and we&apos;ll reply with a plan, a timeline and a fixed price.
        </Reveal>

        <Reveal variant="up" delay={300} className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <MagneticButton className="w-full sm:w-auto">
            <Link href="/contact" className="btn-primary w-full sm:w-auto">
              <span>Start your project</span>
              <span className="btn-arrow">
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          </MagneticButton>
          <a
            href="https://calendly.com/saadrehman"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost w-full sm:w-auto"
          >
            <Calendar className="h-4 w-4 text-zinc-300" />
            Book a 15-min call
          </a>
        </Reveal>

        <Reveal variant="fade" delay={450} className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-zinc-500">
          <span className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
            Taking new projects
          </span>
          <span className="inline-flex items-center gap-2">
            <Clock className="h-4 w-4 text-zinc-600" />
            Founder replies in under 4 hours
          </span>
          <span className="hidden sm:inline">Fixed milestone pricing</span>
        </Reveal>
      </div>
    </section>
  );
};
