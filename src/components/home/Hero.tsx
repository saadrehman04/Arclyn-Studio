'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { gsap, ScrollTrigger, prefersReducedMotion } from '@/lib/gsap';
import { SplitText, Reveal } from '@/components/motion/Reveal';
import { useOffscreenPause } from '@/components/motion/useOffscreenPause';
import { MagneticButton } from '@/components/shared/MagneticButton';
import { scrollToId } from '@/components/shared/SmoothScroll';

const CLIENTS = [
  'The Cheesecake Factory',
  'Prestige Estates',
  'Fitusion',
  'Mark Murphy DDS',
  'Pinza!',
  'Joyce Rey',
  'Zoku Home',
  'Curely',
  'Sweet Jesus',
  'Vinzlu',
];

export const Hero: React.FC = () => {
  const sectionRef = useOffscreenPause<HTMLElement>('0px');
  const contentRef = useRef<HTMLDivElement>(null);
  const arcRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  // Scroll-out choreography: transforms/opacity only, no pinning.
  useEffect(() => {
    const section = sectionRef.current;
    if (!section || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
      tl.to(contentRef.current, { yPercent: -22, opacity: 0, scale: 0.96 }, 0);
      tl.to(arcRef.current, { yPercent: -18, scale: 1.12 }, 0);
    }, section);

    return () => ctx.revert();
  }, [sectionRef]);

  // Cursor spotlight (fine pointers only). rAF-throttled transform writes.
  useEffect(() => {
    const section = sectionRef.current;
    const spot = spotlightRef.current;
    if (!section || !spot) return;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches || prefersReducedMotion()) return;

    let frame = 0;
    let x = 0;
    let y = 0;
    const onMove = (e: PointerEvent) => {
      const rect = section.getBoundingClientRect();
      x = e.clientX - rect.left;
      y = e.clientY - rect.top;
      if (!frame) {
        frame = requestAnimationFrame(() => {
          spot.style.transform = `translate3d(${x}px, ${y}px, 0)`;
          frame = 0;
        });
      }
    };
    const onEnter = () => spot.classList.add('is-on');
    const onLeave = () => spot.classList.remove('is-on');
    section.addEventListener('pointermove', onMove, { passive: true });
    section.addEventListener('pointerenter', onEnter);
    section.addEventListener('pointerleave', onLeave);
    return () => {
      cancelAnimationFrame(frame);
      section.removeEventListener('pointermove', onMove);
      section.removeEventListener('pointerenter', onEnter);
      section.removeEventListener('pointerleave', onLeave);
    };
  }, [sectionRef]);

  useEffect(() => {
    // Fonts swap can shift the hero height slightly; keep trigger positions exact.
    const id = window.setTimeout(() => ScrollTrigger.refresh(), 600);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative isolate flex min-h-[100svh] w-full flex-col overflow-hidden bg-[var(--bg)]"
    >
      {/* ---------- Atmosphere ---------- */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="hero-stars" />
        <div className="hero-grid" />
        <div ref={spotlightRef} className="hero-spotlight" />
      </div>

      {/* ---------- The Arc (brand horizon) ---------- */}
      <div
        ref={arcRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[calc(100%-7.5rem)] -z-10 h-full will-change-transform sm:top-[calc(100%-9rem)]"
      >
        <div className="hero-arc" />
        <div className="hero-arc-flare top-0" />
      </div>

      {/* Soft fade so the arc melts into the next section */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-[var(--bg)]" />

      {/* ---------- Copy ---------- */}
      <div
        ref={contentRef}
        className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center px-5 pb-36 pt-32 sm:pb-44 text-center will-change-transform sm:px-8 sm:pt-36"
      >
        <Reveal intro variant="fade" delay={100}>
          <span className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] py-1.5 pl-2 pr-4 text-[12px] font-medium text-zinc-300 sm:text-[13px]">
            <span className="relative flex h-5 items-center rounded-full bg-emerald-400/15 px-2 text-[10px] font-semibold uppercase tracking-wider text-emerald-300">
              <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
              Open
            </span>
            Full-stack &amp; AI product studio
          </span>
        </Reveal>

        <SplitText
          as="h1"
          intro
          text={'Build smarter.\nLaunch faster.'}
          accentWords={[3]}
          accentClassName="text-[var(--accent)]"
          delay={180}
          stagger={70}
          className="mt-7 font-display text-[clamp(3rem,10.5vw,8.75rem)] font-semibold leading-[0.95] tracking-[-0.045em] text-white"
        />

        <Reveal
          as="p"
          intro
          variant="up"
          delay={520}
          className="mt-7 max-w-[34rem] text-[15px] leading-relaxed text-zinc-400 sm:text-lg"
        >
          We combine full-stack engineering with AI automation to turn your idea into a market-ready
          product — websites, apps and intelligent systems built to grow your business.
        </Reveal>

        <Reveal intro variant="up" delay={640} className="mt-10 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
          <MagneticButton className="w-full sm:w-auto">
            <Link href="/contact" className="btn-primary w-full sm:w-auto">
              <span>Start your project</span>
              <span className="btn-arrow">
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          </MagneticButton>
          <button type="button" onClick={() => scrollToId('work')} className="btn-ghost w-full sm:w-auto">
            <span>See our work</span>
            <ArrowDown className="h-4 w-4 text-zinc-400" />
          </button>
        </Reveal>
      </div>

      {/* ---------- Bottom rail: clients marquee ---------- */}
      <Reveal intro variant="fade" delay={900} className="relative z-10 w-full pb-7 sm:pb-9">
        <div className="mx-auto flex max-w-7xl items-center gap-6 px-5 sm:px-8">
          <p className="hidden shrink-0 font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-500 md:block">
            Shipped for
          </p>
          <div className="mask-fade-x relative flex-1 overflow-hidden">
            <div className="marquee" style={{ ['--marquee-duration' as string]: '45s' }}>
              {[0, 1].map((dup) => (
                <ul key={dup} aria-hidden={dup === 1} className="flex shrink-0 items-center">
                  {CLIENTS.map((name) => (
                    <li
                      key={`${dup}-${name}`}
                      className="flex items-center whitespace-nowrap px-6 text-sm font-medium tracking-tight text-zinc-400 sm:px-8 sm:text-base"
                    >
                      <span className="mr-6 text-zinc-400 sm:mr-8">•</span>
                      {name}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default Hero;
