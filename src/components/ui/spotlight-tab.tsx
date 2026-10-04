'use client';

import React, { useRef, useState, ReactNode } from 'react';

export interface SpotlightTabProps {
  active?: boolean;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  glowColor?: 'brand' | 'purple' | 'cyan' | 'blue';
  title?: string;
  badge?: ReactNode;
}

export const SpotlightTab: React.FC<SpotlightTabProps> = ({
  active = false,
  onClick,
  children,
  className = '',
  glowColor = 'brand',
  title,
  badge,
}) => {
  const tabRef = useRef<HTMLButtonElement>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number; isHovered: boolean }>({
    x: 0,
    y: 0,
    isHovered: false,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!tabRef.current) return;
    const rect = tabRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      isHovered: true,
    });
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!tabRef.current) return;
    const rect = tabRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      isHovered: true,
    });
  };

  const handleMouseLeave = () => {
    setMousePos((prev) => ({ ...prev, isHovered: false }));
  };

  // Color configurations tuned specifically to Arclyn Studio brand palette
  const colorGradients = {
    brand: {
      border: 'rgba(168, 85, 247, 0.95), rgba(6, 182, 212, 0.8), transparent 70%',
      inner: 'rgba(168, 85, 247, 0.22), rgba(6, 182, 212, 0.12), transparent 70%',
      activeBg: 'bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 text-white shadow-lg shadow-purple-600/40 border-purple-400/50',
    },
    purple: {
      border: 'rgba(192, 132, 252, 0.95), rgba(147, 51, 234, 0.5), transparent 70%',
      inner: 'rgba(192, 132, 252, 0.25), transparent 70%',
      activeBg: 'bg-purple-600 text-white shadow-md shadow-purple-600/50 border-purple-400/60',
    },
    cyan: {
      border: 'rgba(34, 211, 238, 0.95), rgba(6, 182, 212, 0.6), transparent 70%',
      inner: 'rgba(6, 182, 212, 0.22), transparent 70%',
      activeBg: 'bg-cyan-600 text-white shadow-md shadow-cyan-600/50 border-cyan-400/60',
    },
    blue: {
      border: 'rgba(96, 165, 250, 0.95), rgba(37, 99, 235, 0.6), transparent 70%',
      inner: 'rgba(59, 130, 246, 0.22), transparent 70%',
      activeBg: 'bg-blue-600 text-white shadow-md shadow-blue-600/50 border-blue-400/60',
    },
  };

  const config = colorGradients[glowColor] || colorGradients.brand;

  return (
    <button
      ref={tabRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      title={title}
      className={`
        group relative overflow-hidden rounded-xl transition-all duration-300 select-none
        border cursor-pointer
        ${
          active
            ? `${config.activeBg} font-semibold`
            : 'bg-white/[0.04] text-slate-300 hover:text-white border-white/[0.08] hover:border-white/20'
        }
        ${className}
      `}
    >
      {/* 1. Dynamic Cursor Spotlight Glow (Follows cursor inside button on hover) */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          opacity: mousePos.isHovered ? 1 : 0,
          background: `radial-gradient(circle 90px at ${mousePos.x}px ${mousePos.y}px, ${config.inner})`,
        }}
      />

      {/* 2. Interactive Spotlight Border Highlight (Glows along the edges toward cursor) */}
      <div
        className="pointer-events-none absolute -inset-[1px] rounded-xl z-0 transition-opacity duration-300"
        style={{
          opacity: mousePos.isHovered ? 1 : 0,
          background: `radial-gradient(circle 80px at ${mousePos.x}px ${mousePos.y}px, ${config.border})`,
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
          WebkitMaskComposite: 'xor',
          padding: '1px',
        }}
      />

      {/* 3. Subtle ambient iridescent top shimmer line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* 4. Tab Content */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {badge}
      </span>
    </button>
  );
};

export default SpotlightTab;
