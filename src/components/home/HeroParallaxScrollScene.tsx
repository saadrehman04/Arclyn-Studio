'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ArrowRight, 
  Star, 
  Sparkles, 
  ExternalLink, 
  ArrowUpRight, 
  Zap, 
  ShieldCheck 
} from 'lucide-react';
import { MagneticButton } from '../shared/MagneticButton';
import { ShinyText } from '@/components/ui/ShinyText';
import { SpotlightTab } from '@/components/ui/spotlight-tab';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_105406_16f4600d-7a92-4292-b96e-b19156c7830a.mp4';

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
  const heroTypoRef = useRef<HTMLDivElement>(null);
  const greenSectionRef = useRef<HTMLDivElement>(null);
  const greenContentRef = useRef<HTMLDivElement>(null);

  // Active platform in the green section
  const [activeProject, setActiveProject] = useState(SHOWCASE_PROJECTS[0]);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Connect Lenis with GSAP ScrollTrigger if running
    const lenis = (window as unknown as { __lenis?: { on: (event: string, cb: () => void) => void; off: (event: string, cb: () => void) => void } }).__lenis;
    const lenisUpdate = () => ScrollTrigger.update();
    if (lenis) {
      lenis.on('scroll', lenisUpdate);
    }

    gsap.ticker.lagSmoothing(0);

    const ctx = gsap.context(() => {
      if (!containerRef.current || !pinSceneRef.current || !greenSectionRef.current) return;

      const isMobile = window.innerWidth < 768;

      // ─────────────────────────────────────────────────────────────
      // CHOREOGRAPHED MASTER TIMELINE (3.0 Total Units)
      // - 0.0 -> 0.9: Hero moves up, green section ascends to yPercent: 0
      // - 0.9 -> 2.6: GREEN SECTION IS 100% VISIBLE & PINNED
      //   Stays completely resting and stationary for 1.7 scroll units
      //   (Next section CANNOT open while user is viewing this!)
      // - 2.6 -> 3.0: Graceful unpin handoff to following section
      // ─────────────────────────────────────────────────────────────
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: isMobile ? '+=180%' : '+=250%',
          scrub: true, // 1:1 direct sync with Lenis (eliminates double-smoothing lag!)
          pin: pinSceneRef.current,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // 1. Initial State
      gsap.set(greenSectionRef.current, { yPercent: 100, force3D: true });
      if (greenContentRef.current) {
        gsap.set(greenContentRef.current, { y: isMobile ? 40 : 80, force3D: true });
      }

      // A. HERO TYPOGRAPHY: Smooth upward drift & fade out
      if (heroTypoRef.current) {
        tl.to(
          heroTypoRef.current,
          {
            y: isMobile ? -90 : -160,
            opacity: 0,
            scale: 0.96,
            duration: 0.7,
            ease: 'power2.out',
          },
          0
        );
      }

      // B. FOLLOWING GREEN SECTION: Travels upward from below viewport (reaches 0% by 0.9)
      tl.to(
        greenSectionRef.current,
        {
          yPercent: 0,
          duration: 0.9,
          ease: 'power2.out',
        },
        0
      );

      // C. GREEN SECTION CONTENT: Settles cleanly into position
      if (greenContentRef.current) {
        tl.to(
          greenContentRef.current,
          {
            y: 0,
            duration: 0.7,
            ease: 'power2.out',
          },
          0.2
        );
      }

      // D. DEDICATED RESTING PIN DURATION: Holds green section stationary at yPercent: 0!
      // This guarantees the section is 100% displayed and the next section cannot open prematurely
      tl.to(
        greenSectionRef.current,
        {
          yPercent: 0,
          duration: 1.7,
          ease: 'none',
        },
        0.9
      );
    }, containerRef);

    return () => {
      if (lenis) {
        lenis.off('scroll', lenisUpdate);
      }
      ctx.revert();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      id="hero-scene"
      className="relative w-full h-[280vh] sm:h-[320vh] bg-black select-none"
    >
      {/* ─────────────────────────────────────────────────────────────
          PINNED SCENE WRAPPER (Stays pinned for 180vh–220vh of scroll)
          ───────────────────────────────────────────────────────────── */}
      <div 
        ref={pinSceneRef} 
        className="w-full h-screen relative overflow-hidden flex flex-col"
      >
        {/* =========================================================
            LAYER 1: HERO BACKGROUND (Video + Dark Ambient Overlays)
            ========================================================= */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
          >
            <source src={VIDEO_URL} type="video/mp4" />
          </video>

          <div 
            className="absolute inset-0 bg-black/45 z-[1]" 
            aria-hidden="true" 
          />
          <div 
            className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#050711] z-[1]" 
            aria-hidden="true" 
          />
        </div>

        {/* =========================================================
            LAYER 2: HERO TYPOGRAPHY & CTAS
            ========================================================= */}
        <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center pt-20 sm:pt-24 pb-12 sm:pb-16 pointer-events-auto">
          
          {/* Main Hero Typography & CTAs (Slow Upward Parallax) */}
          <div 
            ref={heroTypoRef}
            className="flex flex-col items-center text-center my-auto will-change-transform transform-gpu max-w-5xl mx-auto"
          >
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-amber-400/35 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4 sm:mb-5 backdrop-blur-xl shadow-[0_0_20px_rgba(245,158,11,0.2)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
              </span>
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>FEATURED CLIENT PRODUCTS &amp; LIVE PLATFORMS</span>
            </div>

            {/* Massive Headline */}
            <div className="max-w-4xl mx-auto mb-3 sm:mb-4">
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight text-white leading-[1.04]">
                Build Smarter. <br />
                <span>Launch </span>
                <ShinyText 
                  text="Faster." 
                  speed={3} 
                  baseColor="#64CEFB" 
                  shineColor="#ffffff" 
                />
              </h1>
            </div>

            {/* Social Proof & Rating */}
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-7 text-xs sm:text-sm text-slate-300">
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

            {/* Dual Pill CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 mb-5">
              <MagneticButton>
                <Link
                  href="/contact"
                  className="px-7 sm:px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold text-white btn-pill-primary inline-flex items-center gap-2.5 shadow-lg shadow-purple-600/30"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </MagneticButton>

              <MagneticButton>
                <Link
                  href="/work"
                  className="px-7 sm:px-8 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-slate-200 btn-pill-secondary inline-flex items-center gap-2 hover:text-white"
                >
                  <span>Explore Verified Work</span>
                  <ArrowRight className="w-4 h-4 opacity-50" />
                </Link>
              </MagneticButton>
            </div>
          </div>
        </div>

        {/* =========================================================
            LAYER 4: FOLLOWING GREEN SECTION PANEL (Physically Ascends)
            Behaves like a large physical panel entering the viewport
            ========================================================= */}
        <div
          ref={greenSectionRef}
          className="absolute inset-0 z-20 w-full h-full rounded-t-[32px] sm:rounded-t-[44px] lg:rounded-t-[54px] border-t border-emerald-400/40 shadow-[0_-20px_60px_rgba(0,0,0,0.95)] bg-[#03130d] overflow-hidden flex flex-col justify-center will-change-transform transform-gpu pointer-events-auto"
        >
          {/* Lightweight Ambient Atmospheric Lighting (Zero GPU Gaussian Blur Overhead) */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[320px] bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.18)_0%,transparent_70%)]" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-[radial-gradient(ellipse_at_bottom_right,rgba(20,184,166,0.1)_0%,transparent_70%)]" />
          </div>

          {/* =========================================================
              LAYER 5: GREEN SECTION CONTENT (Fitted 100% in Viewport)
              ========================================================= */}
          <div 
            ref={greenContentRef}
            className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 pt-20 sm:pt-24 pb-4 sm:pb-6 flex flex-col justify-center items-center h-full max-h-screen will-change-transform transform-gpu"
          >
            {/* Section Header with Safe Clearance below Floating Navbar */}
            <div className="text-center max-w-2xl mx-auto mb-2.5 sm:mb-3.5 shrink-0">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/35 text-emerald-300 text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-1.5 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                </span>
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>VERIFIED PRODUCTION PLATFORMS</span>
              </div>

              <h2 className="font-display text-xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Audited Systems.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                  Verifiable Scale.
                </span>
              </h2>

              <p className="text-[11px] sm:text-xs text-emerald-100/70 font-normal mt-0.5 max-w-lg mx-auto line-clamp-1 sm:line-clamp-none">
                Live architectures deployed on edge infrastructure with sub-second latency and zero technical debt.
              </p>
            </div>

            {/* The Main Project Container Window (Optimized for 100% Fit & Instant Tab Switching) */}
            <div className="w-full max-w-4xl mx-auto rounded-2xl sm:rounded-3xl border border-emerald-500/30 bg-[#061811] shadow-[0_15px_45px_rgba(0,0,0,0.85)] flex flex-col overflow-hidden relative group shrink">
              
              {/* Browser Navigation Top Bar */}
              <div className="shrink-0 px-3 sm:px-4 py-2 border-b border-emerald-500/20 bg-[#03130d] flex items-center justify-between gap-2">
                {/* Window Dots & Live Title */}
                <div className="flex items-center gap-2.5">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>

                  <div className="hidden md:flex items-center gap-2 text-xs font-mono text-emerald-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-semibold text-white">{activeProject.title}</span>
                    <span className="text-emerald-500">•</span>
                    <span className="text-emerald-300">{activeProject.badge}</span>
                  </div>
                </div>

                {/* Project Switcher Tabs */}
                <div className="flex items-center gap-1 overflow-x-auto no-scrollbar py-0.5">
                  {SHOWCASE_PROJECTS.map((project) => (
                    <SpotlightTab
                      key={project.id}
                      active={activeProject.id === project.id}
                      onClick={() => setActiveProject(project)}
                      glowColor="brand"
                      className="px-2.5 py-1 text-[11px] font-semibold shrink-0 cursor-pointer"
                    >
                      <span>{project.title}</span>
                    </SpotlightTab>
                  ))}
                </div>
              </div>

              {/* Viewport Display Frame (Proportional Height with Preloaded Image Stack) */}
              <div className="relative h-[200px] sm:h-[260px] md:h-[300px] lg:h-[340px] max-h-[44vh] w-full bg-slate-950 overflow-hidden">
                {/* Preload all 4 project images to ensure 0ms lag when switching tabs */}
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
                      priority
                      sizes="(max-width: 1024px) 100vw, 896px"
                      className="object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020e0a] via-transparent to-black/20 opacity-75 pointer-events-none" />
                  </div>
                ))}

                {/* Central Launch Button */}
                <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                  <a
                    href={activeProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pointer-events-auto w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-emerald-500/25 hover:bg-emerald-500 border border-emerald-400/50 backdrop-blur-md flex items-center justify-center text-white shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all hover:scale-110 group/btn"
                    title={`Open ${activeProject.title}`}
                  >
                    <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 group-hover/btn:rotate-12 transition-transform" />
                  </a>
                </div>

                {/* Bottom HUD Bar (Compact & Fully Visible) */}
                <div className="absolute bottom-2 left-2 right-2 sm:bottom-2.5 sm:left-2.5 sm:right-2.5 z-20 p-2 sm:p-2.5 rounded-xl bg-[#03130d] border border-emerald-500/30 flex items-center justify-between gap-2 shadow-2xl">
                  <div className="min-w-0 pr-2">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="text-xs sm:text-sm font-bold text-white tracking-tight truncate">
                        {activeProject.title}
                      </span>
                      <span className="text-[9px] font-mono px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 shrink-0">
                        {activeProject.badge}
                      </span>
                    </div>

                    <p className="text-[10px] sm:text-[11px] text-emerald-100/70 font-normal truncate mt-0.5">
                      {activeProject.metric}
                    </p>
                  </div>

                  <a
                    href={activeProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-full bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-400/40 text-emerald-300 text-[11px] font-semibold inline-flex items-center gap-1 transition-all hover:scale-105 shrink-0 cursor-pointer shadow-[0_0_12px_rgba(16,185,129,0.25)]"
                  >
                    <span>Launch</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default HeroParallaxScrollScene;
