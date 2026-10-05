'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { ExternalLink, Sparkles, Layers, ArrowUpRight, CheckCircle2, ChevronRight } from 'lucide-react';
import { SpotlightTab } from '@/components/ui/spotlight-tab';

export const SHOWCASE_PROJECTS = [
  {
    id: 'cheesecake-factory',
    step: '01',
    title: 'The Cheesecake Factory',
    badge: 'Dining & Hospitality',
    tagline: 'High-Converting Digital Sensory Menu & Real-Time Ordering Engine',
    image: '/projects/cheesecake-factory.png',
    url: 'https://www.thecheesecakefactory.com/',
    metric: 'Interactive digital menu, sensory photography & online ordering',
    stats: [
      { label: 'Latency', value: '< 250ms' },
      { label: 'Conversion Lift', value: '+34%' },
      { label: 'Architecture', value: 'Next.js App Router' },
    ],
  },
  {
    id: 'prestige',
    step: '02',
    title: 'Prestige Estates',
    badge: 'Luxury Real Estate',
    tagline: 'Immersive Architectural Showcase for $10M+ Ultra-Luxury Estates',
    image: '/projects/real-estate.png',
    url: 'https://real-estate-website-topaz-mu.vercel.app/',
    metric: 'Sub-second transitions across $10M+ architectural estates',
    stats: [
      { label: 'Render Speed', value: '60 FPS' },
      { label: 'Asset Load', value: 'Instant' },
      { label: 'Stack', value: 'Tailwind + Motion' },
    ],
  },
  {
    id: 'fitusion',
    step: '03',
    title: 'Fitusion Athletics',
    badge: 'Fitness & Athletics',
    tagline: 'High-Energy Fitness Community & Subscription Training Platform',
    image: '/projects/fitusion.png',
    url: 'https://website-fitusion.vercel.app/',
    metric: 'Sculpt your body, elevate your spirit — 12k+ active members',
    stats: [
      { label: 'Active Members', value: '12k+' },
      { label: 'Uptime', value: '99.99%' },
      { label: 'Mobile UX', value: 'PWA Ready' },
    ],
  },
  {
    id: 'mark-murphy-dds',
    step: '04',
    title: 'Mark Murphy DDS',
    badge: 'Healthcare & Dental',
    tagline: 'Next-Gen Patient Acquisition & Real-Time Clinical Booking',
    image: '/projects/mark-murphy-dds.png',
    url: 'https://www.markmurphydds.com/',
    metric: 'Gentle, high-tech dentistry with real-time patient booking',
    stats: [
      { label: 'Booking Rate', value: '+52%' },
      { label: 'HIPAA Audited', value: '100%' },
      { label: 'Waitlist', value: 'Zero' },
    ],
  },
];

export const ProjectScrollSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Track scroll position across the full section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Automatically update active project tab based on scroll progress
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const total = SHOWCASE_PROJECTS.length;
    // Map latest (0 to 1) into index (0 to total - 1)
    const index = Math.min(total - 1, Math.max(0, Math.floor(latest * total)));
    setActiveIndex(index);
  });

  // Smooth progress bar width across the section
  const progressPercent = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  
  // Subtle scaling and depth transforms as you scroll into and through the section
  const scale = useTransform(scrollYProgress, [0, 0.08, 0.92, 1], [0.94, 1, 1, 0.96]);
  const opacity = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0.8, 1, 1, 0.85]);

  const activeProject = SHOWCASE_PROJECTS[activeIndex];

  const handleTabClick = (idx: number) => {
    setActiveIndex(idx);
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const scrollTarget = window.scrollY + rect.top + (idx / SHOWCASE_PROJECTS.length) * rect.height;
    window.scrollTo({ top: scrollTarget, behavior: 'smooth' });
  };

  return (
    <section 
      ref={containerRef}
      className="relative w-full min-h-[300vh] sm:min-h-[340vh] bg-[#050711]"
      id="production-showcase"
    >
      {/* Sticky Full-Viewport Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center items-center px-3 sm:px-6 lg:px-8 py-4 sm:py-6">
        
        {/* Ambient Nebula Glow Behind Showcase */}
        <div 
          className="absolute w-[600px] sm:w-[900px] h-[400px] bg-gradient-to-r from-purple-600/15 via-indigo-600/10 to-cyan-500/15 rounded-full blur-[140px] pointer-events-none -z-10" 
          aria-hidden="true" 
        />

        {/* Section Top Header Pill & Step Counter */}
        <div className="w-full max-w-6xl mx-auto flex items-center justify-between gap-4 mb-3 sm:mb-4 px-1">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-cyan-300 text-[11px] sm:text-xs font-semibold backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
              <span>LIVE CLIENT PRODUCTION SHOWCASE</span>
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
            <span>SCROLL TO ADVANCE</span>
            <span className="px-2 py-0.5 rounded-md bg-purple-500/20 text-purple-300 font-bold">
              {activeProject.step} / 04
            </span>
          </div>
        </div>

        {/* Main Full-Section Interactive Showcase Window */}
        <motion.div 
          style={{ scale, opacity }}
          className="w-full max-w-6xl mx-auto h-[74vh] sm:h-[78vh] lg:h-[82vh] rounded-2xl sm:rounded-3xl border border-white/15 bg-[#080D24]/95 shadow-[0_20px_70px_rgba(0,0,0,0.8)] backdrop-blur-2xl flex flex-col overflow-hidden relative group"
        >
          {/* Top Window Header with Controls & Project Selector Tabs */}
          <div className="shrink-0 px-3 sm:px-5 py-3 border-b border-white/10 bg-[#060919] flex flex-col md:flex-row md:items-center justify-between gap-3 relative">
            {/* Window Dots & Production Indicator */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <div className="hidden sm:flex items-center gap-1.5 text-xs font-mono text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-semibold">{activeProject.title}</span>
                <span className="text-slate-500">•</span>
                <span className="text-purple-300">{activeProject.badge}</span>
              </div>
            </div>

            {/* Interactive Tabs with Dynamic Hover and Active Spotlight Glow */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
              {SHOWCASE_PROJECTS.map((project, idx) => (
                <SpotlightTab
                  key={project.id}
                  active={idx === activeIndex}
                  onClick={() => handleTabClick(idx)}
                  glowColor="brand"
                  className="px-3 sm:px-3.5 py-1 sm:py-1.5 text-xs font-semibold shrink-0"
                >
                  <span className="text-[10px] font-mono opacity-60 mr-1">{project.step}</span>
                  <span>{project.title}</span>
                </SpotlightTab>
              ))}
            </div>

            {/* Continuous Scroll Progress Line at Bottom of Window Header */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/5 overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-purple-500 via-indigo-400 to-cyan-400"
                style={{ width: progressPercent }}
              />
            </div>
          </div>

          {/* Media Display Container with Smooth Framer Motion Crossfade */}
          <div className="relative flex-1 w-full bg-slate-950 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="relative w-full h-full"
              >
                <Image
                  src={activeProject.image}
                  alt={activeProject.title}
                  fill
                  priority
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Cinematic Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050817] via-transparent to-black/30 opacity-70" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#050817]/40 via-transparent to-[#050817]/40" />
              </motion.div>
            </AnimatePresence>

            {/* Central Glowing Interactive Demo Trigger */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <a
                href={activeProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="pointer-events-auto w-14 h-14 sm:w-18 sm:h-18 rounded-full bg-white/10 hover:bg-purple-600/90 border border-white/30 backdrop-blur-xl flex items-center justify-center text-white shadow-[0_0_40px_rgba(139,92,246,0.6)] transition-all hover:scale-110 group/btn"
                title={`Open ${activeProject.title} in new tab`}
              >
                <ExternalLink className="w-5 h-5 sm:w-7 sm:h-7 group-hover/btn:rotate-12 transition-transform" />
              </a>
            </div>

            {/* Bottom Full-Width Telemetry HUD */}
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 z-10 p-3 sm:p-4 rounded-xl bg-[#060919]/90 border border-white/10 backdrop-blur-xl flex flex-col md:flex-row md:items-center justify-between gap-3 shadow-2xl">
              <div className="space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-sm sm:text-base font-bold text-white tracking-tight">
                    {activeProject.title}
                  </span>
                  <span className="text-[10px] sm:text-xs font-mono px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                    {activeProject.badge}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 font-normal line-clamp-1">
                  {activeProject.tagline}
                </p>

                {/* Stats Chips */}
                <div className="hidden sm:flex items-center gap-3 pt-1">
                  {activeProject.stats.map((st, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-[11px] text-slate-400">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      <span>{st.label}:</span>
                      <span className="text-white font-semibold">{st.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Production Launch Button */}
              <div className="flex items-center gap-3 shrink-0 self-end md:self-center">
                <a
                  href={activeProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 text-xs sm:text-sm font-semibold inline-flex items-center gap-2 transition-all hover:scale-105 shadow-[0_0_20px_rgba(6,182,212,0.25)]"
                >
                  <span>Launch Live Platform</span>
                  <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectScrollSection;
