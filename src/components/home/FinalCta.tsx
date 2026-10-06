'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ShieldCheck, Calendar, Clock } from 'lucide-react';
import { MagneticButton } from '../shared/MagneticButton';
import { MoltenMetal } from '@/components/ui/MoltenMetal';

export const FinalCta: React.FC = () => {
  return (
    <section className="relative pt-10 sm:pt-14 pb-24 sm:pb-36 bg-[#050711] overflow-hidden">
      {/* Interactive Molten Metal WebGL Caustics */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0 opacity-65 mix-blend-screen" aria-hidden="true">
        <MoltenMetal
          color1="#4338CA"
          color2="#8B5CF6"
          color3="#06B6D4"
          speed={0.28}
          scale={3.6}
          detail={4}
          glow={1.8}
          coreSize={0.09}
          swirl={1.1}
          fold={-0.22}
          blackPoint={0.08}
          brightness={1.35}
          colorMode="molten"
          grain={true}
          grainIntensity={0.04}
          mouseInteraction={true}
          mouseStrength={0.35}
          opacity={0.7}
        />
      </div>
      <div className="light-ribbon-bottom pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-purple-600/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-cyan-400/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-8 backdrop-blur-xl shadow-[0_0_20px_rgba(34,211,238,0.15)]"
        >
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>Launch Your Product</span>
        </motion.div>

        {/* Massive Syne Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-3xl sm:text-5xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] sm:leading-[1.05] mb-6 sm:mb-8"
        >
          Let’s Build Your Next <br />
          <span className="text-gradient-hero">Big Thing Together.</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-12 font-normal"
        >
          Whether you need a high-converting web application, custom SaaS platform, or autonomous AI agents — we engineer production systems that scale.
        </motion.p>

        {/* Dual Magnetic Pill CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-14 w-full"
        >
          <MagneticButton className="w-full sm:w-auto">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 sm:px-9 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-bold text-white btn-pill-primary inline-flex items-center justify-center gap-2.5 group shadow-[0_0_35px_rgba(147,51,234,0.4)] min-h-[48px]"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </MagneticButton>

          <MagneticButton className="w-full sm:w-auto">
            <a
              href="https://calendly.com/saadrehman"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-semibold text-slate-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.12] hover:border-cyan-400/40 transition-all duration-300 inline-flex items-center justify-center gap-2 group shadow-lg min-h-[48px]"
            >
              <Calendar className="w-4 h-4 text-cyan-400" />
              <span>Book 15-Min Discovery Call</span>
            </a>
          </MagneticButton>
        </motion.div>

        {/* Live Availability Notice */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 px-4 sm:px-5 py-2 sm:py-2.5 rounded-2xl sm:rounded-full bg-[#090d1a] border border-white/[0.1] text-[11px] sm:text-xs text-slate-300 backdrop-blur-md shadow-xl"
        >
          <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            Active Sprint Capacity
          </span>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <span className="flex items-center gap-1.5 text-slate-400">
            <Clock className="w-3.5 h-3.5 text-cyan-400" />
            Founder Response: &lt; 4 Hours
          </span>
          <span className="text-slate-600 hidden md:inline">•</span>
          <span className="hidden md:inline text-slate-400">Fixed Milestone Pricing</span>
        </motion.div>

      </div>
    </section>
  );
};
