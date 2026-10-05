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
  const imageParallaxRef = useRef<HTMLDivElement>(null);

  // Active platform in the green section
  const [activeProject, setActiveProject] = useState(SHOWCASE_PROJECTS[0]);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    gsap.ticker.lagSmoothing(0);

    const ctx = gsap.context(() => {
      if (!containerRef.current || !pinSceneRef.current || !greenSectionRef.current) return;

      const isMobile = window.innerWidth < 768;
      let videoPlaying = true;

      // ─────────────────────────────────────────────────────────────
      // MASTER TIMELINE (3.0 units, scrubbed 1:1 with scroll)
      //  0.0 → 0.9  Panel rises; every layer travels at its own speed
      //  0.9 → 2.6  Panel RESTS fully visible; only the inner layers drift
      //  2.6 → 3.0  Final settle, then the pin releases
      // ─────────────────────────────────────────────────────────────
      const tl = gsap.timeline({
        defaults: { force3D: true },
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: isMobile ? '+=180%' : '+=250%',
          scrub: true,
          pin: pinSceneRef.current,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            // The video is hidden behind the panel after ~34% — stop decoding it.
            const video = heroVideoRef.current;
            if (!video) return;
            const covered = self.progress > 0.34;
            if (covered && videoPlaying) {
              video.pause();
              videoPlaying = false;
            } else if (!covered && !videoPlaying) {
              video.play().catch(() => {});
              videoPlaying = true;
            }
          },
        },
      });

      // Initial states
      gsap.set(greenSectionRef.current, { yPercent: 100 });
      if (heroBgRef.current) gsap.set(heroBgRef.current, { scale: 1.06, yPercent: 0 });
      if (gridLayerRef.current) gsap.set(gridLayerRef.current, { yPercent: 12 });
      if (orbLayerRef.current) gsap.set(orbLayerRef.current, { yPercent: 28 });
      if (greenHeaderRef.current) gsap.set(greenHeaderRef.current, { y: isMobile ? 60 : 130 });
      if (greenCardRef.current) gsap.set(greenCardRef.current, { y: isMobile ? 120 : 260 });
      if (imageParallaxRef.current) gsap.set(imageParallaxRef.current, { yPercent: 0 });

      // ── HERO LAYERS ──────────────────────────────────────────────
      // Background drifts slowly (deepest layer)
      if (heroBgRef.current) {
        tl.to(heroBgRef.current, { yPercent: -7, scale: 1.14, ease: 'none', duration: 0.9 }, 0);
      }
      // Typography leaves faster than the background (foreground layer)
      if (heroTypoRef.current) {
        tl.to(
          heroTypoRef.current,
          { y: isMobile ? -110 : -190, opacity: 0, scale: 0.96, ease: 'power2.out', duration: 0.7 },
          0
        );
      }

      // ── GREEN PANEL RISES ────────────────────────────────────────
      tl.to(greenSectionRef.current, { yPercent: 0, ease: 'power2.out', duration: 0.9 }, 0);

      // Header + card travel extra distance inside the panel, at different
      // speeds → real layered depth (header slower, card faster).
      if (greenHeaderRef.current) {
        tl.to(greenHeaderRef.current, { y: 0, ease: 'power2.out', duration: 0.95 }, 0.05);
      }
      if (greenCardRef.current) {
        tl.to(greenCardRef.current, { y: 0, ease: 'power3.out', duration: 1.0 }, 0);
      }

      // Background layers keep drifting at their own speeds across the whole scene
      if (gridLayerRef.current) {
        tl.to(gridLayerRef.current, { yPercent: -12, ease: 'none', duration: 3 }, 0);
      }
      if (orbLayerRef.current) {
        tl.to(orbLayerRef.current, { yPercent: -28, ease: 'none', duration: 3 }, 0);
      }

      // Project image drifts inside its frame while the section rests
      if (imageParallaxRef.current) {
        tl.to(imageParallaxRef.current, { yPercent: -12, ease: 'none', duration: 2.1 }, 0.9);
      }

      // Pad the timeline to exactly 3.0 so the rest window is real scroll distance
      tl.to({}, { duration: 0.01 }, 2.99);
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    // NOTE: no fixed height here. ScrollTrigger's pin-spacer defines the
    // height (100vh + pin distance); a fixed height made the next section
    // overlap the pinned panel.
    <div 
      ref={containerRef} 
      id="hero-scene"
      className="relative w-full bg-[#faf8f5] select-none"
    >
      <div 
        ref={pinSceneRef} 
        className="w-full h-screen min-h-[700px] relative overflow-hidden flex flex-col bg-[#faf8f5]"
      >
        {/* =========================================================
            LAYER 1: HERO BACKGROUND (Palomar Full-Viewport Video Layer)
            ========================================================= */}
        <div 
          ref={heroBgRef}
          className="absolute inset-0 z-0 pointer-events-none overflow-hidden will-change-transform transform-gpu bg-[#faf8f5]"
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
          className="relative z-10 w-full h-full max-w-7xl mx-auto pt-28 md:pt-36 px-6 lg:px-8 flex flex-col items-start pointer-events-auto will-change-transform transform-gpu font-helvetica-neue"
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
            LAYER 3: GREEN SHOWCASE PANEL (rises over the hero)
            ========================================================= */}
        <div
          ref={greenSectionRef}
          className="absolute inset-0 z-20 w-full h-full rounded-t-[32px] sm:rounded-t-[44px] lg:rounded-t-[54px] border-t border-emerald-400/40 shadow-[0_-20px_60px_rgba(0,0,0,0.95)] bg-[#03130d] overflow-hidden will-change-transform transform-gpu pointer-events-auto"
        >
          {/* Parallax depth layer A: faint blueprint grid (slowest) */}
          <div
            ref={gridLayerRef}
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-[20%] h-[140%] will-change-transform transform-gpu"
            style={{
              backgroundImage:
                'linear-gradient(rgba(16,185,129,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.07) 1px, transparent 1px)',
              backgroundSize: '56px 56px',
              maskImage: 'radial-gradient(ellipse at center, #000 20%, transparent 75%)',
              WebkitMaskImage: 'radial-gradient(ellipse at center, #000 20%, transparent 75%)',
            }}
          />

          {/* Parallax depth layer B: soft light pools (faster) */}
          <div
            ref={orbLayerRef}
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-[15%] h-[130%] will-change-transform transform-gpu"
          >
            <div className="absolute top-[8%] left-1/2 -translate-x-1/2 w-full max-w-4xl h-[380px] bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.2)_0%,transparent_70%)]" />
            <div className="absolute bottom-[10%] right-0 w-96 h-96 bg-[radial-gradient(ellipse_at_center,rgba(20,184,166,0.14)_0%,transparent_70%)]" />
            <div className="absolute bottom-[25%] left-0 w-80 h-80 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.1)_0%,transparent_70%)]" />
          </div>

          {/* Foreground content — flex column so it ALWAYS fits the viewport */}
          <div className="relative z-10 h-full w-full max-w-5xl mx-auto px-4 sm:px-6 pt-[88px] sm:pt-[96px] pb-4 sm:pb-6 flex flex-col">
            
            {/* Header (travels slower than the card) */}
            <div
              ref={greenHeaderRef}
              className="shrink-0 text-center max-w-2xl mx-auto will-change-transform transform-gpu"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/35 text-emerald-300 text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-2 shadow-[0_0_15px_rgba(16,185,129,0.2)] [@media(max-height:620px)]:hidden">
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

              <p className="hidden sm:block text-xs text-emerald-100/70 font-normal mt-1 max-w-lg mx-auto [@media(max-height:700px)]:hidden">
                Live architectures deployed on edge infrastructure with sub-second latency and zero technical debt.
              </p>
            </div>

            {/* Project window — fills the remaining height (flex-1 / min-h-0) */}
            <div
              ref={greenCardRef}
              className="mt-3 sm:mt-4 flex-1 min-h-0 w-full max-h-[640px] mx-auto rounded-2xl sm:rounded-3xl border border-emerald-500/30 bg-[#061811] shadow-[0_15px_45px_rgba(0,0,0,0.85)] flex flex-col overflow-hidden will-change-transform transform-gpu"
            >
              {/* Browser top bar */}
              <div className="shrink-0 px-3 sm:px-4 py-2 border-b border-emerald-500/20 bg-[#03130d] flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 shrink-0">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>

                  {/* Only on wide screens so it never wraps/squeezes the tabs */}
                  <div className="hidden xl:flex items-center gap-2 text-xs font-mono text-emerald-200 whitespace-nowrap">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-semibold text-white">{activeProject.title}</span>
                    <span className="text-emerald-500">•</span>
                    <span className="text-emerald-300">{activeProject.badge}</span>
                  </div>
                </div>

                {/* Project switcher tabs */}
                <div className="flex items-center gap-1 min-w-0 overflow-x-auto no-scrollbar py-0.5">
                  {SHOWCASE_PROJECTS.map((project) => (
                    <SpotlightTab
                      key={project.id}
                      active={activeProject.id === project.id}
                      onClick={() => setActiveProject(project)}
                      glowColor="brand"
                      className="px-2.5 py-1 text-[11px] font-semibold shrink-0 whitespace-nowrap cursor-pointer"
                    >
                      <span>{project.title}</span>
                    </SpotlightTab>
                  ))}
                </div>
              </div>

              {/* Viewport display frame: takes all remaining height */}
              <div className="relative flex-1 min-h-0 w-full bg-slate-950 overflow-hidden">
                {/* Taller-than-frame wrapper → image parallax inside the frame */}
                <div
                  ref={imageParallaxRef}
                  className="absolute inset-x-0 top-0 h-[116%] will-change-transform transform-gpu"
                >
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
                        sizes="(max-width: 1024px) 100vw, 1024px"
                        className="object-cover object-top"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#020e0a]/70 via-transparent to-black/10 pointer-events-none" />
                    </div>
                  ))}
                </div>

                {/* Central launch button */}
                <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                  <a
                    href={activeProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pointer-events-auto w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-emerald-500/25 hover:bg-emerald-500 border border-emerald-400/50 flex items-center justify-center text-white shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all hover:scale-110 group/btn"
                    title={`Open ${activeProject.title}`}
                  >
                    <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 group-hover/btn:rotate-12 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Footer bar — its own row, so it never covers the image or gets clipped */}
              <div className="shrink-0 px-3 sm:px-4 py-2 border-t border-emerald-500/20 bg-[#03130d] flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="text-xs sm:text-sm font-bold text-white tracking-tight truncate">
                      {activeProject.title}
                    </span>
                    <span className="hidden sm:inline text-[9px] font-mono px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 shrink-0 whitespace-nowrap">
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
  );
};

export default HeroParallaxScrollScene;
