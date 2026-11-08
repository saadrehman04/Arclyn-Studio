'use client';

import { useEffect, useRef } from 'react';

/**
 * Marks an element with `data-offscreen` while it is outside the viewport.
 * globals.css pauses every infinite CSS animation (marquees, glows, floats)
 * inside an offscreen element, so off-screen sections cost zero GPU time.
 */
export function useOffscreenPause<T extends HTMLElement>(rootMargin = '200px 0px') {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) delete el.dataset.offscreen;
        else el.dataset.offscreen = 'true';
      },
      { rootMargin },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);
  return ref;
}
