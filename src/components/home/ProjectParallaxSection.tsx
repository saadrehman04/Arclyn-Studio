'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { ExternalLink, Sparkles, CheckCircle2, ArrowUpRight, ShieldCheck, Zap, Globe } from 'lucide-react';
import { SpotlightTab } from '@/components/ui/spotlight-tab';

export const SHOWCASE_PROJECTS = [
  {
    id: 'cheesecake-factory',
    title: 'The Cheesecake Factory',
    badge: 'Dining & Hospitality',
    url: 'https://www.thecheesecakefactory.com/',
    displayUrl: 'thecheesecakefactory.com',
    image: '/projects/cheesecake-factory.png',
    tagline: 'High-Converting Digital Sensory Menu & Real-Time Ordering Engine',
    metric: 'Sub-250ms latency across 200+ interactive menu items',
    stats: [
      { label: 'Latency', value: '< 250ms' },
      { label: 'Conversion Lift', value: '+34%' },
      { label: 'Architecture', value: 'Next.js App Router' },
    ],
  },
  {
    id: 'prestige',
    title: 'Prestige Estates',
    badge: 'Luxury Real Estate',
    url: 'https://real-estate-website-topaz-mu.vercel.app/',
    displayUrl: 'prestige-estates.arclynstudio.com',
    image: '/projects/real-estate.png',
    tagline: 'Immersive Architectural Showcase for $10M+ Ultra-Luxury Estates',
    metric: 'Sub-second transitions across high-resolution property tours',
    stats: [
      { label: 'Framerate', value: '60 FPS' },
      { label: 'Asset Load', value: 'Instant' },
      { label: 'Stack', value: 'Tailwind + Motion' },
    ],
  },
  {
    id: 'fitusion',
    title: 'Fitusion Athletics',
    badge: 'Fitness & Athletics',
    url: 'https://website-fitusion.vercel.app/',
    displayUrl: 'fitusion.arclynstudio.com',
    image: '/projects/fitusion.png',
    tagline: 'High-Energy Fitness Community & Subscription Training Platform',
    metric: 'Sculpt your body, elevate your spirit — 12k+ active members',
    stats: [
      { label: 'Community', value: '12k+ Members' },
      { label: 'Uptime', value: '99.99%' },
      { label: 'Mobile UX', value: 'PWA Ready' },
    ],
  },
  {
    id: 'mark-murphy-dds',
    title: 'Mark Murphy DDS',
    badge: 'Healthcare & Dental',
    url: 'https://www.markmurphydds.com/',
    displayUrl: 'markmurphydds.com',
    image: '/projects/mark-murphy-dds.png',
    tagline: 'Next-Gen Patient Acquisition & Real-Time Clinical Booking',
    metric: 'Gentle, high-tech dentistry with real-time patient booking',
    stats: [
      { label: 'Booking Rate', value: '+52%' },
      { label: 'HIPAA Audited', value: '100%' },
      { label: 'Waitlist', value: 'Zero' },
    ],
  },
];

export const ProjectParallaxSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState(SHOWCASE_PROJECTS[0]);

  // Framer-style scroll tracking across the entire section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Smooth springs for high-framerate physical motion
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 120, damping: 26 });

  // 1. Background Nebulae Parallax (Slow depth: 0.15x speed)
  const yBg = useTransform(smoothProgress, [0, 1], [-60, 60]);

  // 2. Large Translucent Background Typography Parallax (0.35x speed, moving upward behind container)
  const yBackdropText = useTransform(smoothProgress, [0, 1], [100, -140]);

  // 3. Main Project Container Parallax (Base speed: 0.5x, smooth scale & translation)
  const yContainer = useTransform(smoothProgress, [0, 1], [60, -60]);
  const scaleContainer = useTransform(smoothProgress, [0, 0.5, 1], [0.96, 1, 0.98]);

  // 4. Internal Image Parallax (Opposing drift inside window frame for genuine 3D glass depth)
  const yImage = useTransform(smoothProgress, [0, 1], ['-6%', '6%']);
  const scaleImage = useTransform(smoothProgress, [0, 1], [1.06, 1.02]);

  // 5. Foreground Floating Telemetry Cards (Fast depth: 0.85x speed for layered pop)
  const yFloatCardTop = useTransform(smoothProgress, [0, 1], [120, -110]);
  const yFloatCardBottom = useTransform(smoothProgress, [0, 1], [90, -120]);

  return (
    <section 
      ref={containerRef}
      id="project-showcase"
      className="relative py-24 sm:py-32 overflow-hidden bg-[#050711] select-none"
    >
      {/* ─────────────────────────────────────────────────────────────
          PARALLAX LAYER 1: Ambient Background Nebulae & Depth Gradients
          ───────────────────────────────────────────────────────────── */}
      <motion.div 
        style={{ y: yBg }}
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        aria-hidden="true" 
      >
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1100px] h-[550px] bg-gradient-to-r from-purple-900/15 via-indigo-900/10 to-cyan-900/15 rounded-full blur-[160px]" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[140px]" />
      </motion.div>

      {/* ─────────────────────────────────────────────────────────────
          PARALLAX LAYER 2: Giant Backdrop Typography (Framer Reference)
          ───────────────────────────────────────────────────────────── */}
      <motion.div 
        style={{ y: yBackdropText }}
        className="pointer-events-none absolute inset-x-0 top-1/3 -z-10 flex items-center justify-center opacity-[0.045] overflow-hidden whitespace-nowrap"
        aria-hidden="true" 
      >
        <span className="font-display text-[15vw] font-black uppercase tracking-tighter text-white select-none">
          PRODUCTION WORK
        </span>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3.5 backdrop-blur-xl shadow-[0_0_20px_rgba(245,158,11,0.15)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
            </span>
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>VERIFIED PRODUCTION PLATFORMS</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
            Audited Systems. <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400">
              Verifiable Scale.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-normal mt-3 max-w-xl mx-auto">
            Live architectures deployed on edge infrastructure with sub-second latency and zero technical debt.
          </p>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            PARALLAX LAYER 3: The Main Project Container
            ───────────────────────────────────────────────────────────── */}
        <div className="relative">
          <motion.div 
            style={{ 
              y: yContainer,
              scale: scaleContainer,
            }}
            className="w-full max-w-6xl mx-auto rounded-2xl sm:rounded-3xl border border-white/15 bg-[#080D24]/90 shadow-[0_25px_80px_rgba(0,0,0,0.85)] backdrop-blur-2xl flex flex-col overflow-hidden relative group"
          >
            {/* Top Browser Chrome Navigation Bar */}
            <div className="shrink-0 px-3 sm:px-6 py-3.5 border-b border-white/10 bg-[#060919] flex flex-col md:flex-row md:items-center justify-between gap-3">
              {/* Window Dots & Live Status Beacon */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>

                <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-semibold text-white">{activeProject.title}</span>
                  <span className="text-slate-500">•</span>
                  <span className="text-purple-300">{activeProject.badge}</span>
                </div>
              </div>

              {/* Interactive Project Switcher Tabs */}
              <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
                {SHOWCASE_PROJECTS.map((project) => (
                  <SpotlightTab
                    key={project.id}
                    active={activeProject.id === project.id}
                    onClick={() => setActiveProject(project)}
                    glowColor="brand"
                    className="px-3 sm:px-3.5 py-1.5 text-xs font-semibold shrink-0 cursor-pointer"
                  >
                    <span>{project.title}</span>
                  </SpotlightTab>
                ))}
              </div>
            </div>

            {/* Display Viewport with Internal Image Parallax */}
            <div className="relative h-[420px] sm:h-[520px] lg:h-[620px] w-full bg-slate-950 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="relative w-full h-full overflow-hidden"
                >
                  {/* Subtle Internal Parallax on Image (Opposing drift for depth) */}
                  <motion.div
                    style={{
                      y: yImage,
                      scale: scaleImage,
                    }}
                    className="relative w-full h-[115%] -top-[7%]"
                  >
                    <Image
                      src={activeProject.image}
                      alt={activeProject.title}
                      fill
                      priority
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  </motion.div>

                  {/* Vignette Overlay for Crisp Contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060919] via-transparent to-black/25 opacity-70 pointer-events-none" />
                </motion.div>
              </AnimatePresence>

              {/* Central Glowing Interactive Demo Launch Trigger */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <a
                  href={activeProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pointer-events-auto w-14 h-14 sm:w-18 sm:h-18 rounded-full bg-white/10 hover:bg-purple-600/95 border border-white/30 backdrop-blur-xl flex items-center justify-center text-white shadow-[0_0_40px_rgba(139,92,246,0.6)] transition-all hover:scale-110 group/btn"
                  title={`Open ${activeProject.title} in new window`}
                >
                  <ExternalLink className="w-5 h-5 sm:w-7 sm:h-7 group-hover/btn:rotate-12 transition-transform" />
                </a>
              </div>

              {/* Bottom Integrated HUD Bar */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 z-10 p-3 sm:p-4 rounded-xl bg-[#060919]/90 border border-white/15 backdrop-blur-xl flex flex-col md:flex-row md:items-center justify-between gap-3 shadow-2xl">
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-sm sm:text-base font-bold text-white tracking-tight">
                      {activeProject.title}
                    </span>
                    <span className="text-[10px] sm:text-xs font-mono px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                      {activeProject.badge}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 font-normal mt-0.5 line-clamp-1">
                    {activeProject.metric}
                  </p>
                </div>

                <a
                  href={activeProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 sm:px-5 sm:py-2 rounded-full bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-400/40 text-cyan-300 text-xs sm:text-sm font-semibold inline-flex items-center gap-2 transition-all hover:scale-105 self-start md:self-center shrink-0 cursor-pointer shadow-[0_0_20px_rgba(6,182,212,0.2)]"
                >
                  <span>Launch Platform</span>
                  <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* ─────────────────────────────────────────────────────────────
              PARALLAX LAYER 4: Floating Foreground Badges (Framer Reference)
              These float over the container with faster parallax speeds
              ───────────────────────────────────────────────────────────── */}
          {/* Floating Card 1: Top-Right Performance Badge */}
          <motion.div 
            style={{ y: yFloatCardTop }}
            className="hidden lg:flex absolute -top-8 -right-6 z-20 flex-col gap-1.5 p-3.5 rounded-2xl bg-[#0B1028]/95 border border-white/20 shadow-2xl backdrop-blur-2xl pointer-events-none"
          >
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400">
                <Zap className="w-4 h-4" />
              </span>
              <div>
                <div className="text-xs font-bold text-white">Sub-250ms Response</div>
                <div className="text-[10px] text-emerald-400 font-medium">+34% Conversion Lift</div>
              </div>
            </div>
          </motion.div>

          {/* Floating Card 2: Bottom-Left Enterprise Seal */}
          <motion.div 
            style={{ y: yFloatCardBottom }}
            className="hidden lg:flex absolute -bottom-8 -left-6 z-20 flex-col gap-1.5 p-3.5 rounded-2xl bg-[#0B1028]/95 border border-white/20 shadow-2xl backdrop-blur-2xl pointer-events-none"
          >
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-purple-500/20 text-purple-300">
                <ShieldCheck className="w-4 h-4" />
              </span>
              <div>
                <div className="text-xs font-bold text-white">Production Audited</div>
                <div className="text-[10px] text-purple-300 font-medium">Zero Technical Debt</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectParallaxSection;
