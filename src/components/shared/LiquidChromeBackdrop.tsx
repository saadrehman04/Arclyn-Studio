'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const LiquidChromeBackdrop: React.FC = () => {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkDesktop();
    window.addEventListener('resize', checkDesktop, { passive: true });
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {isDesktop ? (
        <>
          {/* Desktop Implementation: Unchanged 100% */}
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
              className="object-cover mix-blend-screen"
              quality={75}
              sizes="(max-width: 640px) 100vw, 1200px"
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
              quality={75}
              sizes="(max-width: 640px) 100vw, 1050px"
            />
          </motion.div>

          {/* 3. Deep Obsidian Vignette & Ambient Radial Glows */}
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[80px] sm:blur-[160px]" />
          <div className="absolute bottom-1/3 left-1/4 w-[450px] h-[450px] bg-cyan-600/10 rounded-full blur-[75px] sm:blur-[150px]" />

          {/* 4. Film Grain Noise Texture */}
          <div className="absolute inset-0 bg-noise opacity-40" />
        </>
      ) : (
        <>
          {/* Mobile/Tablet Lightweight Static Implementation (No infinite Framer Motion loops) */}
          {/* 1. Static Top-Right Ribbon */}
          <div
            className="absolute -top-24 -right-24 w-[480px] h-[340px] opacity-[0.24]"
            style={{
              maskImage: 'radial-gradient(ellipse at 60% 40%, black 30%, transparent 75%)',
              WebkitMaskImage: 'radial-gradient(ellipse at 60% 40%, black 30%, transparent 75%)',
            }}
          >
            <Image
              src="/images/liquid-chrome-bg.jpg"
              alt=""
              fill
              className="object-cover mix-blend-screen"
              quality={65}
              sizes="480px"
            />
          </div>

          {/* 2. Static Bottom-Left Ribbon */}
          <div
            className="absolute -bottom-36 -left-36 w-[440px] h-[320px] scale-x-[-1] opacity-[0.16]"
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
              quality={65}
              sizes="440px"
            />
          </div>

          {/* 3. Static Ambient Glows (Lighter blur radius for mobile GPU) */}
          <div className="absolute top-1/4 right-1/4 w-[260px] h-[260px] bg-purple-600/10 rounded-full blur-[60px]" />
          <div className="absolute bottom-1/3 left-1/4 w-[240px] h-[240px] bg-cyan-600/10 rounded-full blur-[60px]" />

          {/* 4. Film Grain Noise Texture */}
          <div className="absolute inset-0 bg-noise opacity-30" />
        </>
      )}
    </div>
  );
};
