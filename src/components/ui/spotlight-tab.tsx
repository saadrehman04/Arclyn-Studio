'use client';

import React, { useRef, ReactNode } from 'react';

export interface SpotlightTabProps {
  active?: boolean;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  glowColor?: 'brand' | 'purple' | 'cyan' | 'blue';
  title?: string;
  badge?: ReactNode;
}

/**
 * Filter pill with a cursor-following glow. The glow position is written to
 * CSS custom properties directly, so hovering never re-renders React.
 */
export const SpotlightTab: React.FC<SpotlightTabProps> = ({ active = false, onClick, children, className = '', title, badge }) => {
  const ref = useRef<HTMLButtonElement>(null);

  const handleMove = (e: React.PointerEvent<HTMLButtonElement>) => {
    const el = ref.current;
    if (!el || e.pointerType !== 'mouse') return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    el.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  return (
    <button
      ref={ref}
      type="button"
      onClick={onClick}
      onPointerMove={handleMove}
      title={title}
      aria-pressed={active}
      className={`group relative shrink-0 overflow-hidden rounded-full border transition-colors duration-300 select-none ${
        active
          ? 'border-white bg-white font-semibold text-black'
          : 'border-white/10 bg-white/[0.03] text-zinc-300 hover:border-white/25 hover:text-white'
      } ${className}`}
    >
      {!active && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: 'radial-gradient(circle 80px at var(--mx, 50%) var(--my, 50%), rgba(167,139,250,0.22), transparent 70%)' }}
        />
      )}
      <span className="relative z-10 flex items-center gap-2 whitespace-nowrap">
        {children}
        {badge}
      </span>
    </button>
  );
};

export default SpotlightTab;
