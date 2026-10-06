'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Exact SVG Vector Icons from Demo Website with Pale Champagne Color (#F3F5B4)
const SparkleIcon = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12 sm:w-14 sm:h-14 text-[#F3F5B4] fill-current">
    <path d="M 24 4 C 24 16 32 24 44 24 C 32 24 24 32 24 44 C 24 32 16 24 4 24 C 16 24 24 16 24 4 Z" />
  </svg>
);

const GridDotsIcon = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12 sm:w-14 sm:h-14 text-[#F3F5B4] fill-current">
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
  <svg viewBox="0 0 48 48" className="w-12 h-12 sm:w-14 sm:h-14 text-[#F3F5B4] fill-current">
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
  <svg viewBox="0 0 48 48" className="w-12 h-12 sm:w-14 sm:h-14 text-[#F3F5B4] fill-current">
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
    <section id="capabilities" className="relative pt-4 pb-4 sm:pb-6 overflow-hidden bg-[#050711]">
      {/* Subtle deep ambient glow behind the elements */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-600/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 2-Column Split: 3D Torus on Left + 2x2 Grid on Right proportioned to match image height */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
          
          {/* Left Column: Free-Floating Animated 3D Torus */}
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
              className="relative w-full max-w-[320px] sm:max-w-[460px] lg:max-w-[540px] xl:max-w-[580px] aspect-square flex items-center justify-center select-none"
            >
              <Image
                src="/images/iridescent-torus-clean.png"
                alt="Arclyn Studio 3D Iridescent Fluid Core"
                fill
                priority
                className="object-contain drop-shadow-[0_0_100px_rgba(34,211,238,0.35)] filter contrast-110"
                sizes="(max-width: 1024px) 100vw, 580px"
              />
            </motion.div>
          </div>

          {/* Right Column: 2x2 Grid fitting the 3D graphic height */}
          <div className="lg:col-span-7 xl:col-span-6 flex flex-col justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {CAPABILITY_ITEMS.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.title}
                    className={`p-5 sm:p-8 lg:p-9 xl:p-10 flex flex-col justify-start group hover:bg-white/[0.02] transition-colors duration-300 ${item.borderClasses}`}
                  >
                    {/* Golden Icon - 48px to 56px prominent scale */}
                    <div className="mb-6 text-[#F3F5B4] group-hover:scale-105 transition-transform duration-300 origin-left">
                      <IconComponent />
                    </div>

                    {/* Headline - Bold, prominent, fitting image scale */}
                    <h3 className="font-display text-2xl sm:text-[26px] lg:text-[28px] font-bold text-white mb-3 tracking-tight leading-snug group-hover:text-cyan-200 transition-colors">
                      {item.title}
                    </h3>

                    {/* Description - Readable, generous font size */}
                    <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
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

