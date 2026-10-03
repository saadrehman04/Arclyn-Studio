import React from 'react';
import Link from 'next/link';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showWordmark?: boolean;
  className?: string;
  href?: string;
}

export const LogoIcon: React.FC<{ size?: number; className?: string }> = ({ size = 38, className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Arclyn Studio Logo Icon"
    >
      <defs>
        {/* Left purple gradient */}
        <linearGradient id="arclyn-purple-grad" x1="20%" y1="100%" x2="70%" y2="0%">
          <stop offset="0%" stopColor="#7C3AED" />
          <stop offset="60%" stopColor="#9333EA" />
          <stop offset="100%" stopColor="#C084FC" />
        </linearGradient>

        {/* Right electric cyan/blue gradient */}
        <linearGradient id="arclyn-blue-grad" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#0284C7" />
          <stop offset="50%" stopColor="#0EA5E9" />
          <stop offset="100%" stopColor="#38BDF8" />
        </linearGradient>

        {/* Central chevron connector */}
        <linearGradient id="arclyn-center-grad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#38BDF8" />
        </linearGradient>

        {/* Outer ambient glow filter */}
        <filter id="arclyn-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Glow backing */}
      <g filter="url(#arclyn-glow)" opacity="0.6">
        <path
          d="M 50 14 L 18 78 L 32 78 L 50 42 L 68 78 L 82 78 Z"
          fill="url(#arclyn-purple-grad)"
          opacity="0.3"
        />
      </g>

      {/* Main Arch Left - Purple Wing */}
      <path
        d="M 50 15 L 18 78 L 31 78 L 50 41 L 63 67 L 71 52 Z"
        fill="url(#arclyn-purple-grad)"
      />

      {/* Main Arch Right - Electric Cyan Facet */}
      <path
        d="M 50 15 L 71 52 L 63 67 L 69 78 L 82 78 Z"
        fill="url(#arclyn-blue-grad)"
      />

      {/* Inner Chevron Crossbar */}
      <path
        d="M 33 78 L 50 56 L 67 78 L 58 78 L 50 67 L 42 78 Z"
        fill="url(#arclyn-center-grad)"
      />
    </svg>
  );
};

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  showWordmark = true,
  className = '',
  href = '/',
}) => {
  const iconSizes = {
    sm: 30,
    md: 38,
    lg: 52,
  };

  const textSizes = {
    sm: { main: 'text-lg', sub: 'text-[9px] tracking-[0.28em]' },
    md: { main: 'text-xl', sub: 'text-[10px] tracking-[0.34em]' },
    lg: { main: 'text-3xl', sub: 'text-xs tracking-[0.4em]' },
  };

  const content = (
    <div className={`inline-flex items-center gap-3 group select-none ${className}`}>
      <div className="relative transition-transform duration-300 group-hover:scale-105">
        <LogoIcon size={iconSizes[size]} />
      </div>
      {showWordmark && (
        <div className="flex flex-col justify-center">
          <span className={`font-bold leading-none text-white tracking-tight ${textSizes[size].main} group-hover:text-purple-200 transition-colors`}>
            Arclyn
          </span>
          <span className={`font-semibold text-slate-400 uppercase leading-none mt-1 ${textSizes[size].sub}`}>
            S T U D I O
          </span>
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} aria-label="Arclyn Studio - Home">
        {content}
      </Link>
    );
  }

  return content;
};
