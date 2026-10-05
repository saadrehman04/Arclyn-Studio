'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ArrowRight, 
  ExternalLink, 
  ArrowUpRight, 
  ShieldCheck 
} from 'lucide-react';
import { SpotlightTab } from '@/components/ui/spotlight-tab';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260820_010308_b1636845-4c15-4ab6-b0c9-9a29bfb0c6e3.mp4';

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

export const HeroParallaxScrollScene: React.FC = () => {
  // DOM References for the Choreographed GSAP Scene
  const containerRef = useRef<HTMLDivElement>(null);
  const pinSceneRef = useRef<HTMLDivElement>(null);
  const heroBgRef = useRef<HTMLDivElement>(null);
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const heroTypoRef = useRef<HTMLDivElement>(null);
  const greenSectionRef = useRef<HTMLDivElement>(null);
  const gridLayerRef = useRef<HTMLDivElement>(null);
  const orbLayerRef = useRef<HTMLDivElement>(null);
  const greenHeaderRef = useRef<HTMLDivElement>(null);
  const greenCardRef = useRef<HTMLDivElement>(null);

  // Active platform in the green section
  const [activeProject, setActiveProject] = useState(SHOWCASE_PROJECTS[0]);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (!containerRef.current || !pinSceneRef.current || !greenSectionRef.current) return;

      const isMobile = window.innerWidth < 768;

      // ─────────────────────────────────────────────────────────────
      // MASTER TIMELINE: Silky-smooth numeric scrub damping
      //  0.0 → 1.4  Smooth cinematic rise of the green platform
      //  1.4 → 3.0  Generous rest window for exploring verified platforms
      //  3.0 → 3.4  Gentle release into subsequent sections
      // ─────────────────────────────────────────────────────────────
      const tl = gsap.timeline({
        defaults: { force3D: true, ease: 'none' },
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: isMobile ? '+=100%' : '+=120%',
          scrub: 1.2, // Liquid damping for butter-smooth momentum
          pin: pinSceneRef.current,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Initial positions
      if (heroBgRef.current) gsap.set(heroBgRef.current, { scale: 1.02, yPercent: 0 });
      if (gridLayerRef.current) gsap.set(gridLayerRef.current, { yPercent: 8 });
      if (orbLayerRef.current) gsap.set(orbLayerRef.current, { yPercent: 15 });
      if (greenHeaderRef.current) gsap.set(greenHeaderRef.current, { y: isMobile ? 20 : 35 });
      if (greenCardRef.current) gsap.set(greenCardRef.current, { y: isMobile ? 30 : 45, opacity: 0.95 });

      // ── HERO EXIT (0.0 → 1.4) ────────────────────────────────────
      // Background drifts gently with subtle cinematic zoom
      if (heroBgRef.current) {
        tl.to(heroBgRef.current, { yPercent: -6, scale: 1.10, ease: 'power1.out', duration: 1.4 }, 0);
      }
      // Typography fades and translates upward comfortably
      if (heroTypoRef.current) {
        tl.to(
          heroTypoRef.current,
          { y: isMobile ? -60 : -90, opacity: 0, scale: 0.96, ease: 'power2.out', duration: 1.0 },
          0
        );
      }

      // ── GREEN PANEL RISES (0.0 → 1.4) ────────────────────────────
      tl.fromTo(
        greenSectionRef.current,
        { y: () => window.innerHeight },
        { 
          y: () => Math.min(0, window.innerHeight - greenSectionRef.current!.offsetHeight),
          ease: 'power2.out', 
          duration: 1.4 
        },
        0
      );

      // Header & card move smoothly into resting position
      if (greenHeaderRef.current) {
        tl.to(greenHeaderRef.current, { y: 0, ease: 'power2.out', duration: 1.35 }, 0.05);
      }
      if (greenCardRef.current) {
        tl.to(greenCardRef.current, { y: 0, opacity: 1, ease: 'power2.out', duration: 1.4 }, 0.05);
      }

      // Ambient background layers drift continuously across the entire scroll
      if (gridLayerRef.current) {
        tl.to(gridLayerRef.current, { yPercent: -12, ease: 'none', duration: 1.4 }, 0);
      }
      if (orbLayerRef.current) {
        tl.to(orbLayerRef.current, { yPercent: -20, ease: 'none', duration: 1.4 }, 0);
      }
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      id="hero-scene"
      className="relative w-full bg-[#faf8f5] select-none"
    >
      <div 
        ref={pinSceneRef} 
        className="w-full h-[100dvh] relative overflow-hidden flex flex-col bg-[#faf8f5]"
      >
        {/* =========================================================
            LAYER 1: HERO BACKGROUND (Palomar Full-Viewport Video Layer)
            ========================================================= */}
        <div 
          ref={heroBgRef}
          className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-[#faf8f5]"
        >
          <video
            ref={heroVideoRef}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-bottom"
          >
            <source src={VIDEO_URL} type="video/mp4" />
          </video>
        </div>

        {/* =========================================================
            LAYER 2: PALOMAR HERO CONTENT COLUMN & TRUSTED BY
            ========================================================= */}
        <div 
          ref={heroTypoRef}
          className="relative z-10 w-full h-full max-w-7xl mx-auto pt-32 sm:pt-36 md:pt-40 px-6 lg:px-8 flex flex-col items-start pointer-events-auto font-helvetica-neue"
        >
          {/* Announcement pill */}
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#2d3a2e]/15 bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-colors mb-5 md:mb-6 animate-fade-up stagger-3"
          >
            <span className="text-sm text-[#2d3a2e] font-helvetica-neue font-medium">
              Live for everyone today! Offering $1MM in credits.
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-[#2d3a2e]" />
          </Link>

          {/* Headline */}
          <h1 className="text-left text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#2d3a2e] leading-[1.05] tracking-tight max-w-4xl font-helvetica-neue font-light animate-fade-up stagger-4">
            One unified system to build,
            <br className="hidden sm:block" /> test, ship, and observe LLMs
          </h1>

          {/* Trusted by (inside Hero, under headline) */}
          <div className="w-full mt-8 md:mt-10 animate-fade-up stagger-5">
            <p className="text-left text-xs tracking-[0.25em] uppercase text-[#2d3a2e]/50 mb-6 md:mb-8 font-helvetica-neue font-medium">
              Backed by
            </p>
            <div className="flex flex-wrap items-center justify-start gap-6 md:gap-12 lg:gap-16 animate-fade-up stagger-6">
              <span className="font-playfair text-lg md:text-xl lg:text-2xl text-[#2d3a2e]/80 whitespace-nowrap font-bold">
                Meridian
              </span>
              <span className="font-oswald uppercase text-lg md:text-xl lg:text-2xl text-[#2d3a2e]/80 whitespace-nowrap font-medium">
                STELLEX
              </span>
              <span className="font-montserrat text-lg md:text-xl lg:text-2xl text-[#2d3a2e]/80 whitespace-nowrap font-bold">
                Luminar
              </span>
              <span className="font-roboto-slab uppercase text-lg md:text-xl lg:text-2xl text-[#2d3a2e]/80 whitespace-nowrap font-semibold">
                OVERLAND
              </span>
              <span className="font-raleway text-lg md:text-xl lg:text-2xl text-[#2d3a2e]/80 whitespace-nowrap font-bold">
                Kinetic
              </span>
            </div>
          </div>
        </div>

        {/* =========================================================
            LAYER 3: GREEN SHOWCASE PANEL (rises smoothly over the hero)
            ========================================================= */}
        <div
          ref={greenSectionRef}
          className="absolute inset-x-0 top-0 z-20 w-full min-h-[100dvh] h-auto rounded-t-[32px] sm:rounded-t-[44px] lg:rounded-t-[54px] border-t border-emerald-400/40 shadow-[0_-20px_60px_rgba(0,0,0,0.95)] bg-[#03130d] overflow-hidden will-change-transform pointer-events-auto"
        >
          {/* Parallax depth layer A: faint blueprint grid */}
          <div
            ref={gridLayerRef}
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-[20%] h-[140%]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(16,185,129,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.07) 1px, transparent 1px)',
              backgroundSize: '56px 56px',
              maskImage: 'radial-gradient(ellipse at center, #000 20%, transparent 75%)',
              WebkitMaskImage: 'radial-gradient(ellipse at center, #000 20%, transparent 75%)',
            }}
          />

          {/* Parallax depth layer B: soft atmospheric light pools */}
          <div
            ref={orbLayerRef}
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-[15%] h-[130%]"
          >
            <div className="absolute top-[8%] left-1/2 -translate-x-1/2 w-full max-w-4xl h-[380px] bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.2)_0%,transparent_70%)]" />
            <div className="absolute bottom-[10%] right-0 w-96 h-96 bg-[radial-gradient(ellipse_at_center,rgba(20,184,166,0.14)_0%,transparent_70%)]" />
            <div className="absolute bottom-[25%] left-0 w-80 h-80 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.1)_0%,transparent_70%)]" />
          </div>

          {/* Foreground content: Centered vertical layout with ample navbar clearance */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 lg:px-8 pt-20 sm:pt-24 pb-12 sm:pb-16 flex flex-col items-center justify-start h-auto">
            
            {/* Header: Compact & positioned safely below floating navbar */}
            <div
              ref={greenHeaderRef}
              className="shrink-0 text-center max-w-2xl mx-auto mb-4"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/35 text-emerald-300 text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-1.5 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                </span>
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>VERIFIED PRODUCTION PLATFORMS</span>
              </div>

              <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-white leading-tight">
                Audited Systems.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                  Verifiable Scale.
                </span>
              </h2>

              <p className="hidden sm:block text-xs sm:text-sm text-emerald-100/70 font-normal mt-1 max-w-xl mx-auto">
                Live architectures deployed on edge infrastructure with sub-second latency and zero technical debt.
              </p>
            </div>

            {/* Dedicated Product Switcher Tabs: Original prominent pill dock */}
            <div className="shrink-0 flex items-center justify-center gap-2 sm:gap-3 my-4 overflow-x-auto no-scrollbar py-1 max-w-full">
              {SHOWCASE_PROJECTS.map((project) => {
                const isActive = activeProject.id === project.id;
                return (
                  <button
                    key={project.id}
                    onClick={() => setActiveProject(project)}
                    type="button"
                    className={`relative px-3 sm:px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 shrink-0 cursor-pointer flex items-center gap-2 border ${
                      isActive
                        ? 'bg-gradient-to-r from-emerald-500/30 to-teal-500/30 border-emerald-400 text-white shadow-[0_0_20px_rgba(16,185,129,0.35)] scale-[1.02]'
                        : 'bg-[#061811]/90 hover:bg-[#0a261b] border-emerald-500/20 text-emerald-300/70 hover:text-emerald-100 hover:border-emerald-500/40'
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full transition-all ${
                        isActive ? 'bg-emerald-400 ring-2 ring-emerald-400/40 animate-pulse' : 'bg-emerald-600/60'
                      }`}
                    />
                    <span>{project.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Project window — Fixed Large Height Layout */}
            <div
              ref={greenCardRef}
              className="w-full max-w-[1400px] mx-auto mt-4 rounded-2xl sm:rounded-3xl border border-emerald-500/30 bg-[#061811] shadow-[0_20px_50px_rgba(0,0,0,0.85)] flex flex-col overflow-hidden will-change-transform h-[500px] sm:h-[600px] md:h-[700px] xl:h-[800px]"
            >
              {/* Browser top bar */}
              <div className="shrink-0 px-3.5 sm:px-4 py-2 border-b border-emerald-500/20 bg-[#03130d] flex items-center justify-between gap-3">
                {/* Traffic lights */}
                <div className="flex items-center gap-1.5 shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>

                {/* Browser URL pill */}
                <div className="flex-1 max-w-xs sm:max-w-sm md:max-w-md mx-auto flex items-center justify-center gap-2 px-3 py-0.5 rounded-full bg-black/40 border border-emerald-500/20 text-[11px] font-mono text-emerald-200/80 truncate">
                  <span className="text-emerald-400 text-xs">🔒</span>
                  <span className="truncate">https://{activeProject.displayUrl}</span>
                </div>

                {/* Status indicator */}
                <div className="shrink-0 flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono font-medium text-emerald-300 bg-emerald-500/10 border border-emerald-500/25 px-2.5 py-0.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="hidden sm:inline">Verified Production</span>
                  <span className="sm:hidden">Live</span>
                </div>
              </div>

              {/* Viewport display frame */}
              <div className="relative w-full flex-1 bg-[#020e0a] overflow-hidden">
                {SHOWCASE_PROJECTS.map((project) => (
                  <div
                    key={project.id}
                    className={`absolute inset-0 transition-opacity duration-300 ${
                      activeProject.id === project.id ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                    }`}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      priority={project.id === 'cheesecake-factory'}
                      sizes="(max-width: 1280px) 100vw, 1024px"
                      className="object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020e0a]/80 via-transparent to-black/15 pointer-events-none" />
                  </div>
                ))}

                {/* Central launch pill */}
                <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                  <a
                    href={activeProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pointer-events-auto px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-black/75 hover:bg-emerald-500 text-white hover:text-black border border-emerald-400/50 flex items-center gap-2 backdrop-blur-md shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all hover:scale-105 group/btn cursor-pointer"
                    title={`Open ${activeProject.title}`}
                  >
                    <span className="text-xs sm:text-sm font-semibold tracking-wide">Explore Live Platform</span>
                    <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Footer bar */}
              <div className="shrink-0 px-3 sm:px-5 py-2 border-t border-emerald-500/20 bg-[#03130d] flex items-center justify-between gap-3">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="text-xs sm:text-sm font-bold text-white tracking-tight truncate">
                      {activeProject.title}
                    </span>
                    <span className="text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 shrink-0 whitespace-nowrap">
                      {activeProject.badge}
                    </span>
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-emerald-100/70 font-normal truncate mt-0.5">
                    {activeProject.metric}
                  </p>
                </div>

                {/* Quick stats pills on wider screens */}
                <div className="hidden lg:flex items-center gap-3 shrink-0">
                  {activeProject.stats.map((s, idx) => (
                    <div key={idx} className="text-right px-2.5 py-0.5 rounded-md bg-emerald-950/40 border border-emerald-500/15">
                      <div className="text-[9px] text-emerald-400/70 uppercase font-mono">{s.label}</div>
                      <div className="text-xs font-bold text-white font-mono">{s.value}</div>
                    </div>
                  ))}
                </div>

                <a
                  href={activeProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-[#020e0a] text-xs font-bold inline-flex items-center gap-1.5 transition-all hover:scale-105 shrink-0 cursor-pointer shadow-[0_0_15px_rgba(16,185,129,0.4)]"
                >
                  <span>Launch</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default HeroParallaxScrollScene;
