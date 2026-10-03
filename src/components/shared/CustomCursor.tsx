'use client';

import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [cursorState, setCursorState] = useState<'default' | 'hover' | 'hidden'>('default');
  const [isDesktop, setIsDesktop] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only enable on non-touch desktop screens
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch || window.innerWidth < 1024) return;
    setIsDesktop(true);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('a, button, [role="button"], input, select, textarea, .cursor-hover');
      if (interactive) {
        setCursorState('hover');
      } else {
        setCursorState('default');
      }
    };

    const handleMouseLeave = () => setCursorState('hidden');

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [mouseX, mouseY]);

  if (!isDesktop || cursorState === 'hidden') return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Outer subtle glow ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-cyan-400/50 mix-blend-screen pointer-events-none"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: cursorState === 'hover' ? 48 : 26,
          height: cursorState === 'hover' ? 48 : 26,
          backgroundColor: cursorState === 'hover' ? 'rgba(139, 92, 246, 0.15)' : 'rgba(6, 182, 212, 0.04)',
          borderColor: cursorState === 'hover' ? 'rgba(168, 85, 247, 0.8)' : 'rgba(56, 189, 248, 0.4)',
        }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      />

      {/* Center dot */}
      <motion.div
        className="fixed top-0 left-0 rounded-full bg-white pointer-events-none shadow-[0_0_10px_#38bdf8]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: cursorState === 'hover' ? 6 : 4,
          height: cursorState === 'hover' ? 6 : 4,
          opacity: cursorState === 'hover' ? 0.8 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
    </div>
  );
};
