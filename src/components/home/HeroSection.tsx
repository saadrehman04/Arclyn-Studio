'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Sparkles, ChevronDown } from 'lucide-react';
import { MagneticButton } from '../shared/MagneticButton';
import { ShinyText } from '@/components/ui/ShinyText';

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_105406_16f4600d-7a92-4292-b96e-b19156c7830a.mp4';

export const HeroSection: React.FC = () => {
  return (
    <section 
      id="hero"
      className="relative min-h-[90vh] sm:min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-16 overflow-hidden bg-black"
    >
      {/* 1. Full-screen Looping Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
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
        className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#050711] z-[1] pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Hero Content Stack */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center my-auto">
        {/* Eyebrow Badge with Live Pulse Radar */}
        <motion.div 
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.03] border border-amber-400/35 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-5 sm:mb-6 backdrop-blur-xl shadow-[0_0_20px_rgba(245,158,11,0.2)] group hover:border-amber-400/60 transition-colors"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
          </span>
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>FEATURED CLIENT PRODUCTS &amp; LIVE PLATFORMS</span>
        </motion.div>

        {/* Massive Headline with ShinyText Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-4xl mx-auto mb-4 sm:mb-5"
        >
          <h1 className="font-display text-4xl sm:text-6xl lg:text-8xl xl:text-9xl font-extrabold tracking-tight text-white leading-[1.02]">
            Build Smarter. <br />
            <span>Launch </span>
            <ShinyText 
              text="Faster." 
              speed={3} 
              baseColor="#64CEFB" 
              shineColor="#ffffff" 
            />
          </h1>
        </motion.div>

        {/* Social Proof & Star Rating */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center gap-2 sm:gap-3 mb-7 sm:mb-9 text-xs sm:text-sm text-slate-300"
        >
          <div className="flex items-center text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="font-semibold text-white">5.0 Star Rating</span>
          <span className="text-slate-600">•</span>
          <span>50+ Projects Shipped</span>
          <span className="text-slate-600">•</span>
          <span>150k+ Community</span>
        </motion.div>

        {/* Dual Pill CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 sm:mb-12"
        >
          <MagneticButton>
            <Link
              href="/contact"
              className="px-8 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-bold text-white btn-pill-primary inline-flex items-center gap-2.5 group shadow-lg shadow-purple-600/30"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </MagneticButton>

          <MagneticButton>
            <Link
              href="/work"
              className="px-8 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-semibold text-slate-200 btn-pill-secondary inline-flex items-center gap-2 group hover:text-white"
            >
              <span>Explore Verified Work</span>
              <ArrowRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
            </Link>
          </MagneticButton>
        </motion.div>
      </div>

      {/* Downward Scroll Exploration Prompt */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.4, 0.9, 0.4] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        className="relative z-10 mt-auto flex flex-col items-center gap-1.5 text-xs font-mono text-slate-400 select-none"
      >
        <span className="tracking-wider uppercase text-[11px] text-slate-300">Scroll to explore live work</span>
        <ChevronDown className="w-4 h-4 text-cyan-400 animate-bounce" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
