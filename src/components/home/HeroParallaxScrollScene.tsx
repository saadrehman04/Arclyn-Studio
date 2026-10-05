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

    const ctx = gsap.context(() => {
      if (!containerRef.current || !pinSceneRef.current || !greenSectionRef.current) return;

      const isMobile = window.innerWidth < 768;

      // ─────────────────────────────────────────────────────────────
      // CHOREOGRAPHED MASTER TIMELINE (0% to 100%)
      // ─────────────────────────────────────────────────────────────
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: isMobile ? '+=120%' : '+=200%', // 180vh–220vh scroll scene
          scrub: 0.8, // Smooth physical scrub
          pin: pinSceneRef.current,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // 1. Initial State
      gsap.set(greenSectionRef.current, { yPercent: 100 });
      if (greenContentRef.current) {
        gsap.set(greenContentRef.current, { y: isMobile ? 60 : 130 });
      }

      // 2. Timeline Choreography:
      // - 0% to 20%: Hero at rest, then begins upward drift
      // - 20% to 60%: Typography moves upward smoothly while following panel rises
      // - 60% to 80%: Following panel occupies viewport, content begins settling
      // - 80% to 100%: Following panel fills viewport, content reaches rest position

      // A. HERO TYPOGRAPHY: Smooth upward parallax (0.15 -> 0.75)
      if (heroTypoRef.current) {
        tl.to(
          heroTypoRef.current,
          {
            y: isMobile ? -140 : -260,
            scale: 0.96,
            ease: 'power1.inOut',
          },
          0.15
        );
      }

      // B. FOLLOWING GREEN SECTION: Travels upward from below viewport (0.15 -> 1.0)
      // - At 20%: starts entering viewport (yPercent: ~95)
      // - At 40%: reaches lower portion of viewport (yPercent: ~65)
      // - At 60%: occupies most of viewport (yPercent: ~35)
      // - At 80%: dominant visual (yPercent: ~12)
      // - At 100%: fills viewport (yPercent: 0)
      tl.to(
        greenSectionRef.current,
        {
          yPercent: 0,
          ease: 'none',
        },
        0.15
      );

      // D. GREEN SECTION CONTENT: Moves slower relative to green background for parallax depth
      if (greenContentRef.current) {
        tl.to(
          greenContentRef.current,
          {
            y: 0,
            ease: 'power2.out',
          },
          0.45
        );
      }
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
      className="relative w-full h-[200vh] sm:h-[220vh] bg-black select-none"
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
          className="absolute inset-0 z-20 w-full h-full rounded-t-[36px] sm:rounded-t-[48px] lg:rounded-t-[60px] border-t border-emerald-400/40 shadow-[0_-30px_100px_rgba(0,0,0,0.95),0_0_60px_rgba(16,185,129,0.18)] bg-gradient-to-b from-[#062419] via-[#041a12] to-[#020e0a] overflow-hidden flex flex-col justify-center will-change-transform transform-gpu pointer-events-auto"
        >
          {/* Internal Emerald Atmosphere Lighting */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[350px] bg-emerald-500/15 rounded-full blur-[140px]" />
            <div className="absolute bottom-0 right-10 w-[500px] h-[300px] bg-teal-600/10 rounded-full blur-[130px]" />
          </div>

          {/* =========================================================
              LAYER 5: GREEN SECTION CONTENT (Internal Parallax Depth)
              Moves into resting position slower than the green background
              ========================================================= */}
          <div 
            ref={greenContentRef}
            className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 flex flex-col justify-center will-change-transform transform-gpu"
          >
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-5 sm:mb-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-400/35 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-2.5 backdrop-blur-xl shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>VERIFIED PRODUCTION PLATFORMS</span>
              </div>

              <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.1]">
                Audited Systems. <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                  Verifiable Scale.
                </span>
              </h2>

              <p className="text-xs sm:text-sm text-emerald-100/80 font-normal mt-1.5 max-w-xl mx-auto">
                Live architectures deployed on edge infrastructure with sub-second latency and zero technical debt.
              </p>
            </div>

            {/* The Main Project Container Window */}
            <div className="w-full max-w-5xl mx-auto rounded-2xl sm:rounded-3xl border border-emerald-500/30 bg-[#061811]/90 shadow-[0_20px_60px_rgba(0,0,0,0.85)] backdrop-blur-2xl flex flex-col overflow-hidden relative group">
              
              {/* Browser Navigation Top Bar */}
              <div className="shrink-0 px-3 sm:px-5 py-2.5 sm:py-3 border-b border-emerald-500/20 bg-[#03130d] flex flex-col md:flex-row md:items-center justify-between gap-2.5">
                {/* Window Dots & Live Title */}
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>

                  <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-emerald-200">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-semibold text-white">{activeProject.title}</span>
                    <span className="text-emerald-500">•</span>
                    <span className="text-emerald-300">{activeProject.badge}</span>
                  </div>
                </div>

                {/* Project Switcher Tabs */}
                <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
                  {SHOWCASE_PROJECTS.map((project) => (
                    <SpotlightTab
                      key={project.id}
                      active={activeProject.id === project.id}
                      onClick={() => setActiveProject(project)}
                      glowColor="brand"
                      className="px-2.5 sm:px-3 py-1 text-xs font-semibold shrink-0 cursor-pointer"
                    >
                      <span>{project.title}</span>
                    </SpotlightTab>
                  ))}
                </div>
              </div>

              {/* Viewport Display Frame */}
              <div className="relative h-[280px] sm:h-[380px] lg:h-[450px] w-full bg-slate-950 overflow-hidden">
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src={activeProject.image}
                    alt={activeProject.title}
                    fill
                    priority
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020e0a] via-transparent to-black/30 opacity-75 pointer-events-none" />
                </div>

                {/* Central Launch Button */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <a
                    href={activeProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pointer-events-auto w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-emerald-500/20 hover:bg-emerald-500 border border-emerald-400/50 backdrop-blur-xl flex items-center justify-center text-white shadow-[0_0_35px_rgba(16,185,129,0.5)] transition-all hover:scale-110 group/btn"
                    title={`Open ${activeProject.title}`}
                  >
                    <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6 group-hover/btn:rotate-12 transition-transform" />
                  </a>
                </div>

                {/* Bottom HUD Bar */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3 sm:left-3 sm:right-3 z-10 p-2.5 sm:p-3.5 rounded-xl bg-[#03130d]/95 border border-emerald-500/30 backdrop-blur-xl flex flex-col md:flex-row md:items-center justify-between gap-2.5 shadow-2xl">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs sm:text-sm font-bold text-white tracking-tight">
                        {activeProject.title}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                        {activeProject.badge}
                      </span>
                    </div>

                    <p className="text-[11px] sm:text-xs text-emerald-100/70 font-normal mt-0.5 line-clamp-1">
                      {activeProject.metric}
                    </p>
                  </div>

                  <a
                    href={activeProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-400/40 text-emerald-300 text-xs font-semibold inline-flex items-center gap-1.5 transition-all hover:scale-105 self-start md:self-center shrink-0 cursor-pointer shadow-[0_0_15px_rgba(16,185,129,0.25)]"
                  >
                    <span>Launch Platform</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
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
