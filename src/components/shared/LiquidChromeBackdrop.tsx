'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface LiquidChromeBackdropProps {
  variant?: 'global' | 'hero' | 'minimal';
}

export const LiquidChromeBackdrop: React.FC<LiquidChromeBackdropProps> = ({
  variant = 'global',
}) => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* 1. Primary Top-Right Floating Fluid Chrome Ribbon */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ 
          opacity: 0.28, 
          scale: 1,
          y: [-8, 12, -8],
          rotate: [-1, 1.5, -1],
        }}
        transition={{ 
          opacity: { duration: 1.5 },
          scale: { duration: 1.5 },
          y: { duration: 18, repeat: Infinity, ease: 'easeInOut' },
          rotate: { duration: 22, repeat: Infinity, ease: 'easeInOut' },
        }}
        className="absolute -top-32 -right-32 w-[900px] sm:w-[1200px] h-[600px] sm:h-[800px]"
        style={{
          maskImage: 'radial-gradient(ellipse at 60% 40%, black 30%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 60% 40%, black 30%, transparent 75%)',
        }}
      >
        <Image
          src="/images/liquid-chrome-bg.jpg"
          alt=""
          fill
          priority
          className="object-cover mix-blend-screen"
          sizes="1200px"
        />
      </motion.div>

      {/* 2. Secondary Bottom-Left Counter Ribbon */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 0.18,
          y: [10, -10, 10],
          rotate: [12, 15, 12],
        }}
        transition={{ 
          opacity: { duration: 2 },
          y: { duration: 20, repeat: Infinity, ease: 'easeInOut' },
          rotate: { duration: 24, repeat: Infinity, ease: 'easeInOut' },
        }}
        className="absolute -bottom-48 -left-48 w-[800px] sm:w-[1050px] h-[550px] sm:h-[750px] scale-x-[-1]"
        style={{
          maskImage: 'radial-gradient(ellipse at 45% 55%, black 25%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 45% 55%, black 25%, transparent 75%)',
        }}
      >
        <Image
          src="/images/liquid-chrome-bg.jpg"
          alt=""
          fill
          className="object-cover mix-blend-screen"
          sizes="1050px"
        />
      </motion.div>

      {/* 3. Deep Obsidian Vignette & Ambient Radial Glows */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[160px]" />
      <div className="absolute bottom-1/3 left-1/4 w-[450px] h-[450px] bg-cyan-600/10 rounded-full blur-[150px]" />

      {/* 4. Film Grain Noise Texture */}
      <div className="absolute inset-0 bg-noise opacity-40" />
    </div>
  );
};
