'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MagneticButton } from '../shared/MagneticButton';

// Exact SVG Vector Icons from Demo Website with Pale Champagne Color (#F3F5B4)
const SparkleIcon = () => (
  <svg viewBox="0 0 48 48" className="w-9 h-9 sm:w-11 sm:h-11 text-[#F3F5B4] fill-current">
    <path d="M 24 4 C 24 16 32 24 44 24 C 32 24 24 32 24 44 C 24 32 16 24 4 24 C 16 24 24 16 24 4 Z" />
  </svg>
);

const GridDotsIcon = () => (
  <svg viewBox="0 0 48 48" className="w-9 h-9 sm:w-11 sm:h-11 text-[#F3F5B4] fill-current">
    <rect x="19.5" y="4" width="9" height="9" rx="2" />
    <rect x="4" y="19.5" width="9" height="9" rx="2" />
    <rect x="35" y="19.5" width="9" height="9" rx="2" />
    <rect x="19.5" y="35" width="9" height="9" rx="2" />
    <rect x="8.5" y="8.5" width="9" height="9" rx="2" />
    <rect x="30.5" y="8.5" width="9" height="9" rx="2" />
    <rect x="8.5" y="30.5" width="9" height="9" rx="2" />
    <rect x="30.5" y="30.5" width="9" height="9" rx="2" />
  </svg>
);

const FlowerBurstIcon = () => (
  <svg viewBox="0 0 48 48" className="w-9 h-9 sm:w-11 sm:h-11 text-[#F3F5B4] fill-current">
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
  <svg viewBox="0 0 48 48" className="w-9 h-9 sm:w-11 sm:h-11 text-[#F3F5B4] fill-current">
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
    desc: 'Get wireframes and mockups in hours, not weeks.',
    borderClasses: 'border-b border-white/[0.08] sm:border-r sm:border-white/[0.08]',
  },
  {
    icon: GridDotsIcon,
    title: 'Accelerated Development',
    desc: 'AI-assisted coding speeds up delivery.',
    borderClasses: 'border-b border-white/[0.08]',
  },
  {
    icon: FlowerBurstIcon,
    title: 'Smart QA Testing',
    desc: 'AI-driven testing for fewer bugs and smoother launches.',
    borderClasses: 'border-b sm:border-b-0 sm:border-r border-white/[0.08]',
  },
  {
    icon: ApertureIcon,
    title: 'Full Support',
    desc: 'A dedicated team to guide you every step of the way.',
    borderClasses: '',
  },
];

export const Capability3DSection: React.FC = () => {
  return (
    <section id="capabilities" className="relative pt-6 pb-20 sm:pb-28 lg:pb-32 overflow-hidden bg-[#050711]">
      {/* Subtle deep ambient glow behind the elements */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-600/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 2-Column Split: Prominent 3D Torus on Left + 2x2 Grid on Right matching sample screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
          
          {/* Left Column: Free-Floating Large Animated 3D Torus */}
          <div className="lg:col-span-5 xl:col-span-6 flex justify-center items-center relative">
            <motion.div
              animate={{
                y: [-12, 12, -12],
                rotate: [-2, 2, -2],
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative w-full max-w-[480px] sm:max-w-[540px] lg:max-w-[580px] xl:max-w-[620px] aspect-square flex items-center justify-center select-none"
            >
              <Image
                src="/images/iridescent-torus-clean.png"
                alt="Arclyn Studio 3D Iridescent Fluid Core"
                fill
                priority
                className="object-contain drop-shadow-[0_0_100px_rgba(34,211,238,0.35)] filter contrast-110"
                sizes="(max-width: 1024px) 100vw, 620px"
              />
            </motion.div>
          </div>

          {/* Right Column: 2x2 Clean Crosshair Grid with balanced text scale */}
          <div className="lg:col-span-7 xl:col-span-6 flex flex-col justify-between">
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {CAPABILITY_ITEMS.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.title}
                    className={`p-6 sm:p-8 lg:p-9 xl:p-10 flex flex-col justify-start group hover:bg-white/[0.02] transition-colors duration-300 ${item.borderClasses}`}
                  >
                    {/* Golden Icon */}
                    <div className="mb-5 sm:mb-6 text-[#F3F5B4] group-hover:scale-105 transition-transform duration-300 origin-left">
                      <IconComponent />
                    </div>

                    {/* Headline - Balanced, bold, matching reference sample */}
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2.5 tracking-tight leading-snug group-hover:text-cyan-200 transition-colors">
                      {item.title}
                    </h3>

                    {/* Description - Concise and readable */}
                    <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Find Out More Button - Adjusted neatly underneath capabilities grid */}
            <div className="pt-8 sm:pt-10 flex justify-start sm:justify-start pl-6 sm:pl-8">
              <MagneticButton>
                <Link
                  href="/services"
                  className="px-7 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#2563EB] to-[#B113FE] hover:from-[#1D4ED8] hover:to-[#9333EA] transition-all duration-300 inline-flex items-center gap-2 shadow-[0_0_25px_rgba(177,19,254,0.6)] hover:shadow-[0_0_35px_rgba(177,19,254,0.85)] hover:scale-105"
                >
                  <span className="text-base leading-none">→</span>
                  <span>Find Out More</span>
                </Link>
              </MagneticButton>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

