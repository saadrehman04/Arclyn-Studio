'use client';

import React, { useEffect, useRef } from 'react';

/**
 * Trailing cursor ring. Positions are written straight to `transform` inside a
 * single rAF loop and the hover state is a CSS class — React never re-renders
 * while the mouse moves. The loop sleeps when the pointer is idle.
 */
export const CustomCursor: React.FC = () => {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ring = ringRef.current;
    const dot = dotRef.current;
    if (!fine || reduce || !ring || !dot) return;

    let mx = -100;
    let my = -100;
    let rx = -100;
    let ry = -100;
    let raf = 0;
    let running = false;

    const render = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      dot.style.transform = `translate3d(${mx}px, ${my}px, 0)`;
      if (Math.abs(mx - rx) > 0.1 || Math.abs(my - ry) > 0.1) {
        raf = requestAnimationFrame(render);
      } else {
        running = false;
      }
    };

    const onMove = (e: PointerEvent) => {
      mx = e.clientX;
      my = e.clientY;
      document.documentElement.classList.add('cursor-active');
      if (!running) {
        running = true;
        raf = requestAnimationFrame(render);
      }
    };

    const onOver = (e: PointerEvent) => {
      const target = e.target as HTMLElement | null;
      const interactive = target?.closest('a, button, [role="button"], input, select, textarea, label, .cursor-hover');
      ring.classList.toggle('is-hover', Boolean(interactive));
    };

    const onLeave = () => document.documentElement.classList.remove('cursor-active');
    const onDown = () => ring.classList.add('is-down');
    const onUp = () => ring.classList.remove('is-down');

    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerover', onOver, { passive: true });
    window.addEventListener('pointerdown', onDown, { passive: true });
    window.addEventListener('pointerup', onUp, { passive: true });
    document.addEventListener('pointerleave', onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerover', onOver);
      window.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointerup', onUp);
      document.removeEventListener('pointerleave', onLeave);
      document.documentElement.classList.remove('cursor-active');
    };
  }, []);

  return (
    <div aria-hidden="true" className="cursor-layer">
      <div ref={ringRef} className="cursor-ring">
        <span />
      </div>
      <div ref={dotRef} className="cursor-dot">
        <span />
      </div>
    </div>
  );
};
