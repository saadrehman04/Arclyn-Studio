'use client';

import React, { useEffect, useRef, useState } from 'react';
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
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const startTime = performance.now();
    const durationMs = duration * 1000;

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      
      // Quartic out easing
      const easeOut = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(easeOut * (end - start) + start);
      
      setDisplayValue(current);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setDisplayValue(end);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
};
