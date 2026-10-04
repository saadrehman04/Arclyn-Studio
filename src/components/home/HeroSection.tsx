'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';
import { ArrowRight, Star, Sparkles, ExternalLink } from 'lucide-react';
import { MagneticButton } from '../shared/MagneticButton';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import { SpotlightTab } from '@/components/ui/spotlight-tab';
import { MoltenMetal } from '@/components/ui/MoltenMetal';

const SHOWCASE_TABS = [
  {
    id: 'cheesecake-factory',
    title: 'Cheesecake Factory',
    badge: 'Dining & Hospitality',
    image: '/projects/cheesecake-factory.png',
    url: 'https://www.thecheesecakefactory.com/',
    metric: 'Interactive digital menu, sensory photography & online ordering',
  },
  {
    id: 'prestige',
    title: 'Prestige Estates',
    badge: 'Luxury Real Estate',
    image: '/projects/real-estate.png',
    url: 'https://real-estate-website-topaz-mu.vercel.app/',
    metric: 'Sub-second transitions across $10M+ architectural estates',
  },
  {
    id: 'fitusion',
    title: 'Fitusion',
    badge: 'Fitness & Athletics',
    image: '/projects/fitusion.png',
    url: 'https://website-fitusion.vercel.app/',
    metric: 'Sculpt your body, elevate your spirit — 12k+ active members',
  },
  {
    id: 'mark-murphy-dds',
    title: 'Mark Murphy DDS',
    badge: 'Healthcare & Dental',
    image: '/projects/mark-murphy-dds.png',
    url: 'https://www.markmurphydds.com/',
    metric: 'Gentle, high-tech dentistry with real-time patient booking',
  },
];

// Decorative floating micro-particles for live atmosphere
const PARTICLES = [
  { top: '15%', left: '12%', size: 3, duration: 6, delay: 0 },
  { top: '25%', left: '85%', size: 4, duration: 7, delay: 1 },
  { top: '40%', left: '8%', size: 2.5, duration: 8, delay: 0.5 },
  { top: '30%', left: '92%', size: 3.5, duration: 6.5, delay: 1.5 },
  { top: '55%', left: '15%', size: 3, duration: 7.5, delay: 2 },
  { top: '65%', left: '88%', size: 2.5, duration: 8.5, delay: 1 },
  { top: '20%', left: '50%', size: 3, duration: 9, delay: 0.2 },
];

export const HeroSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(SHOWCASE_TABS[0]);

  // Live mouse spotlight tracking
  const mouseX = useMotionValue(600);
  const mouseY = useMotionValue(300);
  const smoothMouseX = useSpring(mouseX, { stiffness: 90, damping: 24 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 90, damping: 24 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const spotlightBg = useMotionTemplate`radial-gradient(650px circle at ${smoothMouseX}px ${smoothMouseY}px, rgba(139, 92, 246, 0.16), rgba(6, 182, 212, 0.08) 35%, transparent 70%)`;

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative pt-28 sm:pt-32 pb-6 overflow-hidden bg-cosmic-grid"
    >
      {/* 1. Live Interactive Mouse Ambient Spotlight */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 opacity-75 transition-opacity"
        style={{ background: spotlightBg }}
        aria-hidden="true"
      />

      {/* 1b. Live Molten Metal WebGL Caustics (left side, blends with the ribbon design) */}
      <div
        className="pointer-events-none absolute top-0 left-0 w-full lg:w-[62%] h-[780px] z-0 opacity-60 mix-blend-screen"
        style={{
          maskImage: 'radial-gradient(ellipse at 22% 38%, black 22%, transparent 72%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 22% 38%, black 22%, transparent 72%)',
        }}
        aria-hidden="true"
      >
        <MoltenMetal
          color1="#4338CA"
          color2="#8B5CF6"
          color3="#06B6D4"
          speed={0.3}
          scale={3.4}
          detail={3}
          glow={1.7}
          coreSize={0.09}
          swirl={1.1}
          fold={-0.22}
          blackPoint={0.08}
          brightness={1.3}
          colorMode="molten"
          grain={true}
          grainIntensity={0.04}
          mouseInteraction={false}
          opacity={0.75}
          maxDpr={1}
        />
      </div>

      {/* 2. Live Floating 3D Liquid Chrome Ribbons */}
      <motion.div
        animate={{
          y: [0, -18, 0],
          rotate: [0, 1.4, 0],
          scale: [1, 1.025, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ willChange: 'transform' }}
        className="liquid-chrome-hero"
      />

      <motion.div
        animate={{
          y: [0, 16, 0],
          rotate: [0, -1.2, 0],
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 9.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ willChange: 'transform' }}
        className="liquid-chrome-hero-left"
      />

      {/* 3. Ambient Light Strands & Glowing Nebulae */}
      <div className="light-ribbon-top" />
      <motion.div 
        animate={{ opacity: [0.12, 0.22, 0.12] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-cyan-600/15 rounded-full blur-[140px] pointer-events-none" 
      />
      <motion.div 
        animate={{ opacity: [0.15, 0.28, 0.15] }}
        transition={{ duration: 8.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[140px] pointer-events-none" 
      />

      {/* 4. Live Drifting Micro-Luminescent Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        {PARTICLES.map((p, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.85, 0.2],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: p.delay,
            }}
            style={{
              top: p.top,
              left: p.left,
              width: `${p.size}px`,
              height: `${p.size}px`,
            }}
            className="absolute rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(6,182,212,0.8)]"
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ContainerScroll
          titleComponent={
            <div className="flex flex-col items-center">
              {/* 1. Eyebrow Badge with Live Pulse Radar */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.03] border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3.5 sm:mb-4.5 backdrop-blur-xl shadow-[0_0_20px_rgba(245,158,11,0.15)] group hover:border-amber-400/50 transition-colors">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
                </span>
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Full-Stack Engineering &amp; AI Systems</span>
              </div>

              {/* 2. Massive Syne Headline with Crisp Spacing */}
              <div className="max-w-5xl mx-auto mb-3.5 sm:mb-4">
                <h1 className="font-display text-4xl sm:text-6xl lg:text-8xl font-extrabold tracking-tight text-white leading-[1.02]">
                  Build Smarter. <br />
                  <span className="text-gradient-hero">Launch Faster.</span>
                </h1>
              </div>

              {/* 3. Editorial Subheadline */}
              <p className="text-sm sm:text-base lg:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto mb-4 sm:mb-5 font-normal">
                Arclyn Studio combines full-stack web engineering with autonomous AI automation to turn ambitious ideas into market-ready products — websites, apps, and intelligent systems built to actually grow your business.
              </p>

              {/* 4. Social Proof & Star Rating */}
              <div className="flex items-center justify-center gap-2 sm:gap-3 mb-5 sm:mb-7 text-xs sm:text-sm text-slate-300">
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
              </div>

              {/* 5. Dual Pill CTA Buttons with Magnetic Physics */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 sm:mb-8">
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
              </div>
            </div>
          }
        >
          {/* Showcase Header Controls & Tabs */}
          <div className="shrink-0 p-3 sm:p-4 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#090E24]">
            {/* Window Dots & Active Label */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <div className="flex items-center gap-1.5 text-xs font-mono text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Production Live Showcase</span>
              </div>
            </div>

            {/* Interactive Tabs with Dynamic Cursor Spotlight Shine */}
            <div className="flex flex-wrap items-center gap-1.5">
              {SHOWCASE_TABS.map((tab) => (
                <SpotlightTab
                  key={tab.id}
                  active={activeTab.id === tab.id}
                  onClick={() => setActiveTab(tab)}
                  glowColor="brand"
                  className="px-3.5 py-1.5 text-xs font-semibold"
                >
                  {tab.title}
                </SpotlightTab>
              ))}
            </div>
          </div>

          {/* Showcase Media Display Container */}
          <div className="relative flex-1 w-full bg-slate-950 overflow-hidden group">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="relative w-full h-full"
              >
                <Image
                  src={activeTab.image}
                  alt={activeTab.title}
                  fill
                  priority
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060913] via-transparent to-black/20 opacity-60" />
              </motion.div>
            </AnimatePresence>

            {/* Central Glowing Interactive Play / Demo Badge */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <a
                href={activeTab.url}
                target="_blank"
                rel="noopener noreferrer"
                className="pointer-events-auto w-14 h-14 sm:w-18 sm:h-18 rounded-full bg-white/10 hover:bg-purple-600/90 border border-white/30 backdrop-blur-xl flex items-center justify-center text-white shadow-[0_0_40px_rgba(139,92,246,0.6)] transition-all hover:scale-110 group/btn"
                title="Open Live Production Website"
              >
                <ExternalLink className="w-5 h-5 sm:w-7 sm:h-7 group-hover/btn:rotate-12 transition-transform" />
              </a>
            </div>

            {/* Bottom Telemetry Overlay */}
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-2.5 sm:p-3.5 rounded-xl bg-[#060913]/90 border border-white/10 backdrop-blur-md">
              <div>
                <div className="text-xs font-bold text-white flex items-center gap-2">
                  <span>{activeTab.title}</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/20 text-purple-300">
                    {activeTab.badge}
                  </span>
                </div>
                <div className="text-xs text-emerald-400 font-medium mt-0.5">
                  {activeTab.metric}
                </div>
              </div>

              <a
                href={activeTab.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 self-start sm:self-auto"
              >
                <span>Visit Production URL</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </ContainerScroll>
      </div>
    </section>
  );
};
