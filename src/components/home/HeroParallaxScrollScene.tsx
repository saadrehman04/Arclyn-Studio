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
      className="relative w-full bg-black select-none"
    >
      <div 
        ref={pinSceneRef} 
        className="w-full h-screen relative overflow-hidden flex flex-col"
      >
        {/* =========================================================
            LAYER 1: HERO BACKGROUND (Video + Dark Ambient Overlays)
            ========================================================= */}
        <div 
          ref={heroBgRef}
          className="absolute inset-0 z-0 pointer-events-none overflow-hidden will-change-transform transform-gpu"
        >
          <video
            ref={heroVideoRef}
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
