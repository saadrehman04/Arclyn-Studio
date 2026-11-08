'use client';

import React, { useRef } from 'react';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  strength?: number;
}

/**
 * Pulls its child toward the cursor. Uses direct style writes + a CSS
 * transition instead of React state, so hovering never triggers re-renders.
 */
export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = '',
  onClick,
  strength = 0.3,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const frame = useRef(0);

  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== 'mouse') return;
    const el = ref.current;
    if (!el) return;
    const { clientX, clientY } = e;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      const rect = el.getBoundingClientRect();
      const x = (clientX - (rect.left + rect.width / 2)) * strength;
      const y = (clientY - (rect.top + rect.height / 2)) * strength;
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    });
  };

  const handleLeave = () => {
    cancelAnimationFrame(frame.current);
    if (ref.current) ref.current.style.transform = 'translate3d(0, 0, 0)';
  };

  return (
    <div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      onClick={onClick}
      className={`magnetic inline-block ${className}`}
    >
      {children}
    </div>
  );
};
