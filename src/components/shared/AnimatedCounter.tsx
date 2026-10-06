'use client';

import React, { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

interface CounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export const AnimatedCounter: React.FC<CounterProps> = ({
  value,
  suffix = '',
  prefix = '',
  duration = 2.2,
  className = '',
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const valueRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    const start = 0;
    const end = value;
    const startTime = performance.now();
    const durationMs = duration * 1000;
    let frameId = 0;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      if (valueRef.current) valueRef.current.textContent = String(end);
      return;
    }

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      
      // Quartic out easing
      const easeOut = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(easeOut * (end - start) + start);
      
      if (valueRef.current) valueRef.current.textContent = String(current);

      if (progress < 1) {
        frameId = requestAnimationFrame(updateCounter);
      } else {
        if (valueRef.current) valueRef.current.textContent = String(end);
      }
    };

    frameId = requestAnimationFrame(updateCounter);
    return () => cancelAnimationFrame(frameId);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      <span ref={valueRef}>0</span>
      {suffix}
    </span>
  );
};
