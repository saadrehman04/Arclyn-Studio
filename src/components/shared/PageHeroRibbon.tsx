'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export interface PageHeroRibbonProps {
  image?: string;
  variant?: 'strands' | 'flow' | 'chrome';
  opacity?: number;
  className?: string;
  fullHero?: boolean;
}

export const PageHeroRibbon: React.FC<PageHeroRibbonProps> = ({
  image,
  variant = 'chrome',
  opacity = 0.65,
  className = '',
  fullHero = false,
}) => {
  const imageSrc =
    image ||
    (variant === 'strands'
      ? '/images/neon-ribbon-strands.jpg'
      : variant === 'flow'
      ? '/images/neon-ribbon-flow.png'
      : '/images/liquid-chrome-bg.jpg');

  if (fullHero) {
    return (
      <div className={`absolute top-0 right-0 left-0 h-[620px] sm:h-[750px] lg:h-[820px] pointer-events-none overflow-hidden z-0 select-none ${className}`}>
        {/* Full-width Immersive Liquid Chrome Background matching Image 4 */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            opacity: opacity ?? 0.85,
            maskImage: 'linear-gradient(to bottom, black 50%, rgba(0,0,0,0.85) 75%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 50%, rgba(0,0,0,0.85) 75%, transparent 100%)',
          }}
        >
          <Image
            src={imageSrc}
            alt=""
            fill
            priority
            className="object-cover object-center mix-blend-screen filter contrast-115 brightness-105"
            sizes="100vw"
          />
        </div>

        {/* Ambient violet and cyan atmospheric glows */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-purple-600/25 rounded-full blur-[160px]" />
        <div className="absolute top-36 right-10 w-[500px] h-[360px] bg-cyan-600/20 rounded-full blur-[150px]" />
      </div>
    );
  }

  return (
    <div className={`absolute top-0 right-0 left-0 h-[560px] sm:h-[720px] pointer-events-none overflow-hidden z-0 select-none ${className}`}>
      {/* Liquid Chrome / Neon Ribbon Graphic */}
      <div
        className="absolute -top-10 -right-24 sm:-right-10 lg:right-0 w-[780px] sm:w-[1050px] lg:w-[1300px] xl:w-[1500px] h-[520px] sm:h-[700px]"
        style={{
          opacity: opacity,
          maskImage: 'radial-gradient(ellipse at 68% 45%, black 35%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 68% 45%, black 35%, transparent 75%)',
        }}
      >
        <Image
          src={imageSrc}
          alt=""
          fill
          priority
          className="object-cover mix-blend-screen filter contrast-110"
          sizes="(max-width: 768px) 780px, (max-width: 1200px) 1100px, 1500px"
        />
      </div>

      {/* Atmospheric violet and cyan glow lights */}
      <div className="absolute top-12 right-16 w-[520px] h-[400px] bg-purple-600/20 rounded-full blur-[140px]" />
      <div className="absolute top-28 left-1/3 w-[450px] h-[320px] bg-cyan-600/15 rounded-full blur-[140px]" />
    </div>
  );
};
