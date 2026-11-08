'use client';

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';
import { gsap, ScrollTrigger } from '@/lib/gsap';

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

/**
 * One scroll engine for the whole site.
 * Lenis is driven by GSAP's ticker (instead of its own requestAnimationFrame loop),
 * and every Lenis scroll pushes ScrollTrigger.update(). That keeps smooth scrolling,
 * scrubbed timelines and pinned sections on the exact same frame, so nothing
 * stutters or lags a frame behind.
 */
export const SmoothScroll: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();

  useEffect(() => {
    // We manage scroll position ourselves (top on navigation, hash targets otherwise).
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const coarsePointer = window.matchMedia('(pointer: coarse)').matches;

    // Touch devices already have native momentum scrolling — don't hijack it.
    if (reduceMotion || coarsePointer) {
      const refresh = () => ScrollTrigger.refresh();
      document.fonts?.ready.then(refresh);
      return;
    }

    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      wheelMultiplier: 1,
      anchors: { offset: -80 },
    });
    window.__lenis = lenis;

    lenis.on('scroll', ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    // Pins/offsets depend on final font metrics.
    document.fonts?.ready.then(() => ScrollTrigger.refresh());

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);

  // On navigation: jump to the hash target if there is one, otherwise to the top.
  useEffect(() => {
    const lenis = window.__lenis;
    const hash = window.location.hash;
    const target = hash ? (document.querySelector(hash) as HTMLElement | null) : null;

    if (target) {
      if (lenis) lenis.scrollTo(target, { offset: -80, duration: 1.1 });
      else target.scrollIntoView({ behavior: 'smooth' });
    } else {
      if (lenis) lenis.scrollTo(0, { immediate: true, force: true });
      else window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }

    const id = window.requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => window.cancelAnimationFrame(id);
  }, [pathname]);

  return <>{children}</>;
};

/** Smoothly scroll to an element id (works with and without Lenis). */
export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const lenis = window.__lenis;
  if (lenis) lenis.scrollTo(el, { offset: -80, duration: 1.2 });
  else el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
