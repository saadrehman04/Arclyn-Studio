'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const PageHeroRibbon: React.FC = () => {
  return (
    <div className="absolute top-0 right-0 left-0 h-[480px] sm:h-[620px] pointer-events-none overflow-hidden z-0">
      <motion.div
        initial={{ opacity: 0, y: -20, scale: 0.96 }}
        animate={{ opacity: 0.35, y: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute -top-16 -right-24 sm:-right-16 w-[700px] sm:w-[950px] lg:w-[1100px] h-[450px] sm:h-[600px]"
        style={{
          maskImage: 'radial-gradient(ellipse at 65% 40%, black 25%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 65% 40%, black 25%, transparent 75%)',
        }}
      >
        <Image
          src="/images/liquid-chrome-bg.jpg"
          alt=""
          fill
          priority
          className="object-cover mix-blend-screen"
          sizes="(max-width: 768px) 700px, 1100px"
        />
      </motion.div>
      {/* Soft ambient violet-blue glow */}
      <div className="absolute top-10 right-20 w-[450px] h-[350px] bg-purple-600/10 rounded-full blur-[140px]" />
    </div>
  );
};
