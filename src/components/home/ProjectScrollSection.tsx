'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowUpRight, CheckCircle2, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';

export const SHOWCASE_PROJECTS = [
  {
    id: 'cheesecake-factory',
    step: '01',
    title: 'The Cheesecake Factory',
    badge: 'Dining & Hospitality',
    tagline: 'High-Converting Digital Sensory Menu & Real-Time Ordering Engine',
    displayUrl: 'thecheesecakefactory.com',
    image: '/projects/cheesecake-factory.png',
    url: 'https://www.thecheesecakefactory.com/',
    metric: 'Sub-250ms latency across 200+ interactive sensory menu items',
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
    displayUrl: 'prestige-estates.arclynstudio.com',
    image: '/projects/real-estate.png',
    url: 'https://real-estate-website-topaz-mu.vercel.app/',
    metric: 'Sub-second transitions across high-resolution property tours',
    stats: [
      { label: 'Framerate', value: '60 FPS' },
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
    displayUrl: 'fitusion.arclynstudio.com',
    image: '/projects/fitusion.png',
    url: 'https://website-fitusion.vercel.app/',
    metric: 'Sculpt your body, elevate your spirit — 12k+ active members',
    stats: [
      { label: 'Community', value: '12k+ Members' },
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
    displayUrl: 'markmurphydds.com',
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
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);

  const activeProject = SHOWCASE_PROJECTS[activeIndex] || SHOWCASE_PROJECTS[0];

  const handleTabClick = (idx: number) => {
    setActiveIndex(idx);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % SHOWCASE_PROJECTS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + SHOWCASE_PROJECTS.length) % SHOWCASE_PROJECTS.length);
  };

  return (
    <section 
      id="production-showcase"
      className="relative w-full py-16 sm:py-24 lg:py-28 bg-[#050505] select-none overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Matrix Grid matching Hero aesthetic */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-full opacity-35"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse at center, #000 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, #000 30%, transparent 80%)',
        }}
      />

      {/* Subtle Ambient Radial Lighting Behind Showcase */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[1000px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)] pointer-events-none -z-10" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-10 right-10 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.04)_0%,transparent_70%)] pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* Section Top Header Pill & Step Counter — Constrained to Match Container Width */}
        <div className="w-full max-w-[1180px] mx-auto flex items-center justify-between gap-4 mb-3 sm:mb-4 px-1.5 shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.05] border border-white/15 text-neutral-300 text-[10px] sm:text-xs font-mono uppercase tracking-wider backdrop-blur-md shadow-[0_2px_12px_rgba(255,255,255,0.04)]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
              </span>
              <ShieldCheck className="w-3.5 h-3.5 text-neutral-300" />
              <span>VERIFIED PRODUCTION PLATFORMS</span>
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono text-neutral-400">
            <span className="hidden sm:inline text-neutral-500">LIVE WORK ENGINE</span>
            <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-white border border-white/15 font-bold tracking-wider">
              {activeProject.step} / 04
            </span>
          </div>
        </div>

        {/* Main Showcase Window — Shorter in Width (max-w-[1180px]) and Higher in Height (h-[720px] to h-[820px]) */}
        <div 
          className="w-full max-w-[1180px] mx-auto h-[640px] sm:h-[740px] lg:h-[800px] rounded-2xl sm:rounded-3xl border border-white/15 bg-[#0a0a0a]/95 shadow-[0_30px_100px_rgba(0,0,0,0.95),0_0_60px_rgba(255,255,255,0.03)] backdrop-blur-2xl flex flex-col overflow-hidden relative group"
        >
          {/* Top Window Header with Controls & Project Selector Tabs */}
          <div className="shrink-0 px-3.5 sm:px-5 py-2.5 sm:py-3 border-b border-white/10 bg-[#070707] flex flex-col md:flex-row md:items-center justify-between gap-2.5 relative">
            
            {/* Window Traffic Lights & Active URL Bar */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 shrink-0">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
              </div>
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 border border-white/10 text-[11px] font-mono text-neutral-300 truncate max-w-[200px] sm:max-w-xs">
                <span className="text-neutral-400 text-xs">🔒</span>
                <span className="truncate">https://{activeProject.displayUrl}</span>
              </div>
            </div>

            {/* Interactive Project Tabs (01, 02, 03, 04) */}
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar py-0.5 max-w-full">
              {SHOWCASE_PROJECTS.map((project, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={project.id}
                    onClick={() => handleTabClick(idx)}
                    type="button"
                    className={`relative px-3 sm:px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 shrink-0 cursor-pointer flex items-center gap-1.5 sm:gap-2 border ${
                      isActive
                        ? 'bg-white text-black font-semibold border-white shadow-[0_2px_15px_rgba(255,255,255,0.2)] scale-[1.02]'
                        : 'bg-white/[0.04] hover:bg-white/[0.08] border-white/10 text-neutral-400 hover:text-white'
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full transition-all ${
                        isActive ? 'bg-black' : 'bg-neutral-600'
                      }`}
                    />
                    <span className="text-[10px] font-mono opacity-60">{project.step}</span>
                    <span className="whitespace-nowrap">{project.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Media Display Container with Taller Canvas & Smooth Crossfade */}
          <div className="relative flex-1 w-full bg-[#050505] overflow-hidden">
            {SHOWCASE_PROJECTS.map((project) => {
              const isSelected = activeProject.id === project.id;
              return (
                <div
                  key={project.id}
                  className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                    isSelected ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    priority={isSelected}
                    sizes="(max-width: 1280px) 100vw, 1200px"
                    className="object-cover object-top"
                  />
                  {/* Subtle edge depth gradients */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/25 pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 pointer-events-none" />
                </div>
              );
            })}

            {/* Central Glowing Interactive Demo Trigger */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
              <a
                href={activeProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="pointer-events-auto px-5 py-2.5 rounded-full bg-white hover:bg-neutral-200 text-black font-semibold border border-white flex items-center gap-2 shadow-[0_4px_25px_rgba(255,255,255,0.25)] transition-all hover:scale-105 group/btn cursor-pointer"
                title={`Open ${activeProject.title}`}
              >
                <span className="text-xs sm:text-sm font-semibold tracking-wide">Explore Live Platform</span>
                <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Subtle Left/Right Arrow Navigation Overlays for Instant Stepping */}
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/60 hover:bg-black/85 text-white/70 hover:text-white border border-white/10 hover:border-white/25 flex items-center justify-center backdrop-blur-md transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-lg opacity-0 group-hover:opacity-100"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <button
              type="button"
              onClick={handleNext}
              className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/60 hover:bg-black/85 text-white/70 hover:text-white border border-white/10 hover:border-white/25 flex items-center justify-center backdrop-blur-md transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-lg opacity-0 group-hover:opacity-100"
              aria-label="Next project"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Bottom Streamlined Telemetry HUD — Clean & Translucent */}
            <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-4 sm:left-4 sm:right-4 z-20 px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl sm:rounded-2xl bg-[#080808]/85 border border-white/12 backdrop-blur-md flex flex-col md:flex-row md:items-center justify-between gap-2.5 sm:gap-3 shadow-[0_10px_35px_rgba(0,0,0,0.85)]">
              <div className="space-y-0.5 min-w-0 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-sm sm:text-base font-bold text-white tracking-tight">
                    {activeProject.title}
                  </span>
                  <span className="text-[10px] sm:text-xs font-mono px-2 py-0.5 rounded-full bg-white/[0.08] text-neutral-200 border border-white/15">
                    {activeProject.badge}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-neutral-300 font-normal line-clamp-1">
                  {activeProject.tagline}
                </p>

                {/* Stats Chips */}
                <div className="hidden sm:flex items-center gap-3 pt-0.5">
                  {activeProject.stats.map((st, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-[11px] text-neutral-400">
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
                  className="px-4 py-1.5 sm:px-5 sm:py-2 rounded-full bg-white hover:bg-neutral-200 text-black text-xs sm:text-sm font-bold inline-flex items-center gap-1.5 transition-all hover:scale-105 shadow-[0_2px_15px_rgba(255,255,255,0.2)] shrink-0 cursor-pointer"
                >
                  <span>Launch Live</span>
                  <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectScrollSection;
