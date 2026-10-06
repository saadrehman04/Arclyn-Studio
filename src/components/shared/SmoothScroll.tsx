'use client';

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';

export const SmoothScroll: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();

  useEffect(() => {
    // Only initialize smooth scroll on desktop / non-touch devices
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    const lenis = new Lenis({
      duration: 0.75,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    // Expose instance so navigation (e.g. the Home menu link) can scroll via Lenis
    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;

    let rafId: number | null = null;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      delete (window as unknown as { __lenis?: Lenis }).__lenis;
      lenis.destroy();
    };
  }, []);

  // When pathname changes without hash, scroll to top (start of site / hero)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      const lenis = (window as unknown as { __lenis?: Lenis }).__lenis;
      if (hash) {
        const el = document.querySelector(hash) as HTMLElement | null;
        if (el) {
          if (lenis) {
            lenis.scrollTo(el, { duration: 1.0 });
          } else {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }
      } else {
        window.scrollTo(0, 0);
        if (lenis) {
          lenis.scrollTo(0, { immediate: true });
        }
      }
    }
  }, [pathname]);

  return <>{children}</>;
};
