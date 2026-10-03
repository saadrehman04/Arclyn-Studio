'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MagneticButton } from '../shared/MagneticButton';

// Exact SVG Vector Icons from Demo Website with Pale Champagne Color (#F3F5B4)
const SparkleIcon = () => (
  <svg viewBox="0 0 48 48" className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-[#F3F5B4] fill-current">
    <path d="M 24 5 A 21 21 0 0 0 43 24 A 21 21 0 0 0 24 43 A 21 21 0 0 0 5 24 A 21 21 0 0 0 24 5 Z" />
  </svg>
);

const GridDotsIcon = () => (
  <svg viewBox="0 0 48 48" className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-[#F3F5B4] fill-current">
    <rect x="19.5" y="19.5" width="9" height="9" rx="1.5" />
    <rect x="14" y="4" width="9" height="9" rx="1.5" />
    <rect x="25" y="4" width="9" height="9" rx="1.5" />
    <rect x="14" y="35" width="9" height="9" rx="1.5" />
    <rect x="25" y="35" width="9" height="9" rx="1.5" />
    <rect x="4" y="14" width="9" height="9" rx="1.5" />
    <rect x="4" y="25" width="9" height="9" rx="1.5" />
    <rect x="35" y="14" width="9" height="9" rx="1.5" />
    <rect x="35" y="25" width="9" height="9" rx="1.5" />
  </svg>
);

const FlowerBurstIcon = () => (
  <svg viewBox="0 0 48 48" className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-[#F3F5B4] fill-current">
    <rect x="19" y="19" width="10" height="10" rx="2" />
    <g id="cap-petal-pair">
      <path d="M 19 18.5 C 18 13, 16 8, 13.5 5 C 17.5 4.5, 20.5 7.5, 22.5 18.5 Z" />
      <path d="M 29 18.5 C 30 13, 32 8, 34.5 5 C 30.5 4.5, 27.5 7.5, 25.5 18.5 Z" />
    </g>
    <use href="#cap-petal-pair" transform="rotate(90 24 24)" />
    <use href="#cap-petal-pair" transform="rotate(180 24 24)" />
    <use href="#cap-petal-pair" transform="rotate(270 24 24)" />
  </svg>
);

const ApertureIcon = () => (
  <svg viewBox="0 0 48 48" className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-[#F3F5B4] fill-current">
    {[0, 60, 120, 180, 240, 300].map((deg) => (
      <rect
        key={deg}
        x="27.5"
        y="15.5"
        width="13.5"
        height="5.2"
        rx="1.4"
        transform={`rotate(${deg} 24 24)`}
      />
    ))}
  </svg>
);

const CAPABILITY_ITEMS = [
  {
    icon: SparkleIcon,
    title: 'AI-Generated Prototypes',
    titleFormatted: (
      <>
        <span className="inline-block">AI&#8209;Generated</span>
        <br className="hidden sm:inline" />
        {' '}
        <span className="inline-block">Prototypes</span>
      </>
    ),
    desc: 'Get wireframes and mockups in hours, not weeks.',
    borderClasses: 'border-b border-white/[0.1] sm:border-r sm:border-white/[0.1]',
  },
  {
    icon: GridDotsIcon,
    title: 'Accelerated Development',
    titleFormatted: (
      <>
        <span className="inline-block">Accelerated</span>
        <br className="hidden sm:inline" />
        {' '}
        <span className="inline-block">Development</span>
      </>
    ),
    desc: 'AI-assisted coding speeds up delivery.',
    borderClasses: 'border-b border-white/[0.1]',
  },
  {
    icon: FlowerBurstIcon,
    title: 'Smart QA Testing',
    titleFormatted: 'Smart QA Testing',
    desc: 'AI-driven testing for fewer bugs and smoother launches.',
    borderClasses: 'border-b sm:border-b-0 sm:border-r border-white/[0.1]',
  },
  {
    icon: ApertureIcon,
    title: 'Full Support',
    titleFormatted: 'Full Support',
    desc: 'A dedicated team to guide you every step of the way.',
    borderClasses: '',
  },
];

export const Capability3DSection: React.FC = () => {
  return (
    <section id="capabilities" className="relative py-24 sm:py-32 lg:py-40 xl:py-48 overflow-hidden bg-[#050711]">
      {/* Subtle deep ambient glow behind the massive elements */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-600/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        
        {/* Top Centered Pill Button matching reference: [ → Find Out More ] */}
        <div className="flex justify-center mb-16 sm:mb-24">
          <MagneticButton>
            <Link
              href="/services"
              className="px-8 py-3.5 rounded-full text-sm sm:text-base font-bold text-white bg-gradient-to-r from-[#2563EB] to-[#B113FE] hover:from-[#1D4ED8] hover:to-[#9333EA] transition-all duration-300 inline-flex items-center gap-2.5 shadow-[0_0_35px_rgba(177,19,254,0.7)] hover:shadow-[0_0_45px_rgba(177,19,254,0.9)] hover:scale-105"
            >
              <span className="text-lg leading-none">→</span>
              <span>Find Out More</span>
            </Link>
          </MagneticButton>
        </div>

        {/* 2-Column Split: Massive Animated 3D Torus on Left + 2x2 Expansive Grid on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
          
          {/* Left Column: Free-Floating Giant Animated 3D Torus */}
          <div className="lg:col-span-6 flex justify-center lg:justify-start items-center relative pl-0 lg:pl-2 xl:pl-6">
            <motion.div
              animate={{
                y: [-16, 16, -16],
                rotate: [-3, 3, -3],
                scale: [1, 1.03, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative w-full max-w-[620px] sm:max-w-[720px] lg:max-w-[800px] xl:max-w-[860px] 2xl:max-w-[920px] aspect-square flex items-center justify-center select-none"
            >
              <Image
                src="/images/iridescent-torus-clean.png"
                alt="Arclyn Studio 3D Iridescent Fluid Core"
                fill
                priority
                className="object-contain drop-shadow-[0_0_120px_rgba(34,211,238,0.4)] filter contrast-110"
                sizes="(max-width: 1024px) 100vw, 920px"
              />
            </motion.div>
          </div>

          {/* Right Column: 2x2 Clean Minimalist Crosshair Grid with Large Icons & Headings */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {CAPABILITY_ITEMS.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.title}
                    className={`p-8 sm:p-10 lg:p-12 xl:p-14 2xl:p-16 flex flex-col justify-start group hover:bg-white/[0.02] transition-colors duration-300 ${item.borderClasses}`}
                  >
                    {/* Golden Icon - Large scale matching demo site */}
                    <div className="mb-8 sm:mb-10 lg:mb-12 text-[#F3F5B4] group-hover:scale-110 transition-transform duration-300 origin-left">
                      <IconComponent />
                    </div>

                    {/* Headline - Large, bold, punchy */}
                    <h3 className="font-display text-2xl sm:text-3xl lg:text-[34px] xl:text-[40px] font-bold text-white mb-4 sm:mb-6 tracking-tight leading-[1.16] group-hover:text-cyan-200 transition-colors">
                      {item.titleFormatted}
                    </h3>

                    {/* Description - Generous readable sizing */}
                    <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-neutral-300 font-light leading-relaxed max-w-sm sm:max-w-md">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
