'use client';

import React from 'react';
import Image from 'next/image';

export interface NeonSectionBackgroundProps {
  variant?: 'core-nodes' | 'minimalist-strands' | 'liquid-chrome';
  position?: 'left' | 'right' | 'center' | 'full';
  opacity?: number;
  className?: string;
  glowColor?: 'purple' | 'cyan' | 'both' | 'none';
  flipX?: boolean;
}

export const NeonSectionBackground: React.FC<NeonSectionBackgroundProps> = ({
  variant = 'minimalist-strands',
  position = 'full',
  opacity = 0.45,
  className = '',
  glowColor = 'both',
  flipX = false,
}) => {
  const imageSrc =
    variant === 'core-nodes'
      ? '/images/neon-core-nodes.png'
      : variant === 'liquid-chrome'
      ? '/images/liquid-chrome-bg.jpg'
      : '/images/neon-minimalist-strands.jpg';

  return (
    <div
      className={`absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0 select-none ${className}`}
      aria-hidden="true"
    >
      {/* Dynamic Ambient Atmospheric Backlight Glows */}
      {glowColor === 'both' && (
        <>
          <div className="absolute top-1/4 left-10 w-[550px] h-[550px] bg-purple-600/[0.12] rounded-full blur-[170px]" />
          <div className="absolute bottom-1/4 right-10 w-[550px] h-[550px] bg-cyan-600/[0.10] rounded-full blur-[170px]" />
        </>
      )}
      {glowColor === 'purple' && (
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[750px] h-[500px] bg-purple-600/[0.14] rounded-full blur-[180px]" />
      )}
      {glowColor === 'cyan' && (
        <div className="absolute top-1/3 right-1/4 w-[650px] h-[500px] bg-cyan-600/[0.12] rounded-full blur-[180px]" />
      )}

      {/* Full Immersive Neon Liquid Strand Background */}
      {position === 'full' && (
        <div
          className={`absolute inset-0 w-full h-full ${flipX ? '-scale-x-100' : ''}`}
          style={{
            opacity,
            maskImage:
              'radial-gradient(ellipse 80% 80% at 50% 50%, black 35%, rgba(0,0,0,0.6) 70%, transparent 98%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 80% 80% at 50% 50%, black 35%, rgba(0,0,0,0.6) 70%, transparent 98%)',
          }}
        >
          <Image
            src={imageSrc}
            alt=""
            fill
            className="object-cover object-center mix-blend-screen filter contrast-120 brightness-110"
            sizes="100vw"
            quality={90}
          />
        </div>
      )}

      {/* Floating Side Placed Strand (Left or Right) */}
      {(position === 'left' || position === 'right') && (
        <div
          className={`absolute top-0 ${
            position === 'left' ? '-left-20 lg:-left-10' : '-right-20 lg:-right-10'
          } w-[800px] sm:w-[1100px] lg:w-[1300px] h-full ${
            position === 'right' || flipX ? '-scale-x-100' : ''
          }`}
          style={{
            opacity,
            maskImage:
              'radial-gradient(ellipse at 40% 50%, black 45%, rgba(0,0,0,0.5) 75%, transparent 95%)',
            WebkitMaskImage:
              'radial-gradient(ellipse at 40% 50%, black 45%, rgba(0,0,0,0.5) 75%, transparent 95%)',
          }}
        >
          <Image
            src={imageSrc}
            alt=""
            fill
            className="object-cover object-left-center mix-blend-screen filter contrast-125 brightness-110"
            sizes="(max-width: 1024px) 1000px, 1300px"
            quality={90}
          />
        </div>
      )}

      {/* Center Backdrop */}
      {position === 'center' && (
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[750px]"
          style={{
            opacity,
            maskImage:
              'radial-gradient(circle at center, black 30%, rgba(0,0,0,0.7) 65%, transparent 90%)',
            WebkitMaskImage:
              'radial-gradient(circle at center, black 30%, rgba(0,0,0,0.7) 65%, transparent 90%)',
          }}
        >
          <Image
            src={imageSrc}
            alt=""
            fill
            className="object-cover mix-blend-screen filter contrast-120 brightness-105"
            sizes="1200px"
            quality={90}
          />
        </div>
      )}
    </div>
  );
};
