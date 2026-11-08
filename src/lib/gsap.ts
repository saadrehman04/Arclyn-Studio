'use client';

/**
 * Single place where GSAP plugins are registered.
 * Every component imports gsap / ScrollTrigger from here so the plugin is
 * registered exactly once and all ScrollTriggers share the Lenis-driven ticker
 * configured in <SmoothScroll />.
 */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({ ignoreMobileResize: true });
}

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export { gsap, ScrollTrigger };
