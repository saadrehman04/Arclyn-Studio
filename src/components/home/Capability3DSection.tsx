'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MagneticButton } from '../shared/MagneticButton';

// Exact SVG Vector Icons from Reference Image
const SparkleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#E8DDA7] fill-current">
    <path d="M12 0C12 6.627 17.373 12 24 12C17.373 12 12 17.373 12 24C12 17.373 6.627 12 0 12C6.627 12 12 6.627 12 0Z" />
  </svg>
);

const GridDotsIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#E8DDA7] fill-current">
    <rect x="2.5" y="2.5" width="4.2" height="4.2" rx="0.6" />
    <rect x="9.9" y="2.5" width="4.2" height="4.2" rx="0.6" />
    <rect x="17.3" y="2.5" width="4.2" height="4.2" rx="0.6" />
    <rect x="2.5" y="9.9" width="4.2" height="4.2" rx="0.6" />
    <rect x="17.3" y="9.9" width="4.2" height="4.2" rx="0.6" />
    <rect x="2.5" y="17.3" width="4.2" height="4.2" rx="0.6" />
    <rect x="9.9" y="17.3" width="4.2" height="4.2" rx="0.6" />
    <rect x="17.3" y="17.3" width="4.2" height="4.2" rx="0.6" />
  </svg>
);

const FlowerBurstIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#E8DDA7] fill-current">
    <rect x="10.5" y="1" width="3" height="5" rx="1.5" />
    <rect x="10.5" y="18" width="3" height="5" rx="1.5" />
    <rect x="1" y="10.5" width="5" height="3" rx="1.5" />
    <rect x="18" y="10.5" width="5" height="3" rx="1.5" />
    <rect x="4.2" y="4.2" width="3" height="5" rx="1.5" transform="rotate(-45 5.7 6.7)" />
    <rect x="16.8" y="16.8" width="3" height="5" rx="1.5" transform="rotate(-45 18.3 19.3)" />
    <rect x="16.8" y="4.2" width="3" height="5" rx="1.5" transform="rotate(45 18.3 6.7)" />
    <rect x="4.2" y="16.8" width="3" height="5" rx="1.5" transform="rotate(45 5.7 19.3)" />
  </svg>
);

const PinwheelIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#E8DDA7]" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 12V3.5h5" />
    <path d="M12 12h8.5v5" />
    <path d="M12 12v8.5H7" />
    <path d="M12 12H3.5V7" />
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
    borderClasses: 'sm:border-r sm:border-white/[0.08]',
  },
  {
    icon: PinwheelIcon,
    title: 'Full Support',
    desc: 'A dedicated team to guide you every step of the way.',
    borderClasses: '',
  },
];

export const Capability3DSection: React.FC = () => {
  return (
    <section id="capabilities" className="relative py-20 sm:py-28 overflow-hidden bg-[#050711]">
      {/* Background Liquid Chrome Ribbon Ambience */}
      <div className="liquid-chrome-mid -top-20 -left-40 pointer-events-none opacity-25" />
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Centered Pill Button matching reference Image 3: [ → Find Out More ] */}
        <div className="flex justify-center mb-16 sm:mb-20">
          <MagneticButton>
            <Link
              href="/services"
              className="px-7 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#2563EB] to-[#B113FE] hover:from-[#1D4ED8] hover:to-[#9333EA] transition-all duration-300 inline-flex items-center gap-2 shadow-[0_0_30px_rgba(177,19,254,0.65)] hover:shadow-[0_0_40px_rgba(177,19,254,0.85)] hover:scale-105"
            >
              <span className="text-base leading-none">→</span>
              <span>Find Out More</span>
            </Link>
          </MagneticButton>
        </div>

        {/* 2-Column Split: 3D Torus on Left + 2x2 Minimal Grid on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Free-Floating 3D Iridescent Torus */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex justify-center items-center relative"
          >
            <motion.div
              animate={{
                y: [-8, 8, -8],
                rotate: [-1.2, 1.2, -1.2],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative w-full max-w-[480px] sm:max-w-[540px] aspect-square flex items-center justify-center"
            >
              {/* Image blends seamlessly with mix-blend-screen / dark background */}
              <Image
                src="/images/iridescent-torus-standalone.jpg"
                alt="Arclyn Studio 3D Iridescent Engineering Core"
                fill
                priority
                className="object-contain mix-blend-screen drop-shadow-[0_0_50px_rgba(34,211,238,0.25)]"
                sizes="(max-width: 1024px) 100vw, 540px"
              />
            </motion.div>
          </motion.div>

          {/* Right Column: 2x2 Clean Minimalist Crosshair Grid */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {CAPABILITY_ITEMS.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className={`p-6 sm:p-9 flex flex-col justify-start group hover:bg-white/[0.02] transition-colors duration-300 ${item.borderClasses}`}
                  >
                    {/* Golden Icon */}
                    <div className="mb-6 text-[#E8DDA7] group-hover:scale-110 transition-transform duration-300">
                      <IconComponent />
                    </div>

                    {/* Headline */}
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-cyan-200 transition-colors">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-400 font-normal leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
