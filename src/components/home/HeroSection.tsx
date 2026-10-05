'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { DesignProNav } from './DesignProNav';
import { ShinyText } from '@/components/ui/ShinyText';

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_105406_16f4600d-7a92-4292-b96e-b19156c7830a.mp4';

export const HeroSection: React.FC = () => {
  return (
    <section 
      id="hero"
      className="relative w-full h-screen min-h-[700px] bg-black overflow-hidden flex flex-col justify-between font-[family-name:var(--font-inter)]"
    >
      {/* 1. Full-screen looping video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        poster=""
      >
        <source src={VIDEO_URL} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Cinematic dark ambient overlay for high-contrast legibility */}
      <div 
        className="absolute inset-0 bg-black/40 z-[1] pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/75 z-[1] pointer-events-none" 
        aria-hidden="true" 
      />

      {/* 2. Top Navigation Bar */}
      <DesignProNav />

      {/* 3. Main Content Container (relative z-10 positioning above video) */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-between py-6 sm:py-8 lg:py-10">
        
        {/* Top Section (below nav): Two-column layout on large screens, stacked on mobile */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 lg:gap-8 pt-4 sm:pt-6"
        >
          {/* Left Column */}
          <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-md lg:max-w-xl font-normal">
            We deliver transformative programs that empower emerging product designers with cutting-edge expertise and vision to thrive globally.
          </p>

          {/* Right Column (right-aligned on lg+) */}
          <p className="text-white/80 text-sm md:text-base font-normal lg:text-right shrink-0">
            8000+ Talented Designers Launched !
          </p>
        </motion.div>

        {/* Hero Section (center) */}
        <div className="flex flex-col items-center text-center my-auto py-6 sm:py-10">
          
          {/* Small uppercase text above heading */}
          <motion.span 
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white/80 text-xs md:text-sm tracking-tight uppercase font-medium mb-3 sm:mb-4 select-none"
          >
            Seats for Next Program Opening Soon
          </motion.span>

          {/* Main heading with exact specifications */}
          <motion.h1 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-medium tracking-tighter leading-[0.85] text-white flex flex-col items-center"
          >
            <span>Become</span>
            <span className="mt-1 sm:mt-2">
              <ShinyText 
                text="Product Leader." 
                speed={3} 
                baseColor="#64CEFB" 
                shineColor="#ffffff" 
              />
            </span>
          </motion.h1>

          {/* CTA Button */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-8 sm:mt-10 md:mt-12"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 rounded-full bg-black hover:bg-gray-900 border border-gray-700/80 hover:border-gray-500 text-white font-normal text-sm md:text-base transition-all duration-300 shadow-xl hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-white/40"
            >
              <span>Apply for Next Enrollment</span>
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-white transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </motion.div>

        </div>

        {/* Bottom baseline spacer for balanced desktop viewport centering */}
        <div className="hidden lg:block h-4" />
      </div>
    </section>
  );
};

export default HeroSection;
