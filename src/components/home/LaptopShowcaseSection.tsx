'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Lock, CheckCircle2, Sparkles, ArrowUpRight, Globe } from 'lucide-react';
import { LogoIcon } from '@/components/shared/Logo';

// Register ScrollTrigger once on client
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const LAPTOP_PROJECTS = [
  {
    id: 'cheesecake-factory',
    title: 'The Cheesecake Factory',
    badge: 'Dining & Hospitality',
    url: 'https://www.thecheesecakefactory.com/',
    displayUrl: 'thecheesecakefactory.com',
    image: '/projects/cheesecake-factory.png',
    tagline: 'High-Converting Digital Sensory Menu & Real-Time Ordering Engine',
    metric: 'Sub-250ms latency across 200+ menu items',
    stats: [
      { label: 'Latency', value: '< 250ms' },
      { label: 'Conversion Lift', value: '+34%' },
      { label: 'Stack', value: 'Next.js App Router' },
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

export const LaptopShowcaseSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const laptopLidRef = useRef<HTMLDivElement>(null);
  const screenContentRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const revealedTextRef = useRef<HTMLDivElement>(null);
  const baseShadowRef = useRef<HTMLDivElement>(null);
  const keyboardGlowRef = useRef<HTMLDivElement>(null);

  const [activeProject, setActiveProject] = useState(LAPTOP_PROJECTS[0]);
  const [scaleRatio, setScaleRatio] = useState(1);
  const [scrollPercent, setScrollPercent] = useState(0);

  // Responsive scale factor calculation for 3D laptop
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      if (width < 480) {
        setScaleRatio(Math.min(0.48, width / 780));
      } else if (width < 768) {
        setScaleRatio(Math.min(0.64, width / 840));
      } else if (width < 1024) {
        setScaleRatio(Math.min(0.8, height / 920));
      } else if (width < 1440) {
        setScaleRatio(Math.min(0.94, height / 880));
      } else {
        setScaleRatio(1.05);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // GSAP ScrollTrigger Scroll-Driven Animation
  useEffect(() => {
    if (!sectionRef.current || !laptopLidRef.current) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      // Set to fully open static state without pinning
      gsap.set(laptopLidRef.current, { rotateX: -68 });
      if (screenContentRef.current) gsap.set(screenContentRef.current, { opacity: 1 });
      if (heroTextRef.current) gsap.set(heroTextRef.current, { opacity: 0, display: 'none' });
      if (revealedTextRef.current) gsap.set(revealedTextRef.current, { opacity: 1, display: 'block' });
      return;
    }

    // Connect with Lenis smooth scroll if present
    const lenis = (window as unknown as { __lenis?: { on: (event: string, cb: () => void) => void } }).__lenis;
    if (lenis) {
      lenis.on('scroll', ScrollTrigger.update);
    }

    // Create main GSAP context for complete cleanup on unmount
    const ctx = gsap.context(() => {
      // Initial states
      // Lid starts completely closed flat against the base (rotateX: -180)
      gsap.set(laptopLidRef.current, { 
        rotateX: -180, 
        transformOrigin: 'bottom center',
        transformStyle: 'preserve-3d',
        willChange: 'transform'
      });

      // Screen content starts completely black and dark
      if (screenContentRef.current) {
        gsap.set(screenContentRef.current, { opacity: 0 });
      }

      // Glare reflection overlay
      if (glareRef.current) {
        gsap.set(glareRef.current, { opacity: 0.1, xPercent: -50 });
      }

      // Hero text starts visible, revealed project text starts hidden
      if (heroTextRef.current) {
        gsap.set(heroTextRef.current, { opacity: 1, y: 0 });
      }
      if (revealedTextRef.current) {
        gsap.set(revealedTextRef.current, { opacity: 0, y: 20 });
      }

      // Keyboard backlight starts off
      if (keyboardGlowRef.current) {
        gsap.set(keyboardGlowRef.current, { opacity: 0 });
      }

      // Master Timeline directly tied to scroll progress
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=260%',
          pin: true,
          scrub: 0.8, // Smooth physical inertia
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            setScrollPercent(Math.round(self.progress * 100));
          },
        },
      });

      // 0% -> 25%: Laptop begins lifting from -180 deg to -145 deg
      tl.to(laptopLidRef.current, {
        rotateX: -145,
        ease: 'power1.inOut',
        duration: 0.25,
      }, 0);

      // Base shadow slightly expands
      if (baseShadowRef.current) {
        tl.to(baseShadowRef.current, {
          scaleX: 1.05,
          scaleY: 1.1,
          opacity: 0.85,
          duration: 0.25,
        }, 0);
      }

      // 25% -> 50%: Laptop reaches approximately halfway open (-115 deg)
      tl.to(laptopLidRef.current, {
        rotateX: -115,
        ease: 'power1.inOut',
        duration: 0.25,
      }, 0.25);

      // Text begins transitioning at 50%
      if (heroTextRef.current) {
        tl.to(heroTextRef.current, {
          opacity: 0,
          y: -18,
          duration: 0.2,
          ease: 'power2.out',
        }, 0.35);
      }
      if (revealedTextRef.current) {
        tl.to(revealedTextRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.2,
          ease: 'power2.out',
        }, 0.45);
      }

      // Screen backlight starts to glow
      if (screenContentRef.current) {
        tl.to(screenContentRef.current, {
          opacity: 0.45,
          duration: 0.25,
          ease: 'power1.in',
        }, 0.35);
      }

      // Keyboard backlight turns on
      if (keyboardGlowRef.current) {
        tl.to(keyboardGlowRef.current, {
          opacity: 0.7,
          duration: 0.25,
        }, 0.4);
      }

      // 50% -> 75%: Laptop nearly fully open (-85 deg)
      tl.to(laptopLidRef.current, {
        rotateX: -85,
        ease: 'power1.inOut',
        duration: 0.25,
      }, 0.5);

      // Screen content becomes clearly visible
      if (screenContentRef.current) {
        tl.to(screenContentRef.current, {
          opacity: 0.85,
          duration: 0.25,
          ease: 'power2.inOut',
        }, 0.55);
      }

      // Glare reflection sweeps across glass
      if (glareRef.current) {
        tl.to(glareRef.current, {
          opacity: 0.4,
          xPercent: 40,
          duration: 0.35,
          ease: 'power1.inOut',
        }, 0.5);
      }

      // 75% -> 100%: Laptop fully open at ergonomic upright viewing angle (-68 deg)
      tl.to(laptopLidRef.current, {
        rotateX: -68,
        ease: 'power2.out',
        duration: 0.25,
      }, 0.75);

      // Screen content reaches 100% full clarity and brilliance
      if (screenContentRef.current) {
        tl.to(screenContentRef.current, {
          opacity: 1,
          duration: 0.25,
        }, 0.75);
      }

      // Floor shadow settles into deep, natural cast shadow
      if (baseShadowRef.current) {
        tl.to(baseShadowRef.current, {
          scaleX: 1.15,
          scaleY: 1.25,
          opacity: 0.95,
          duration: 0.25,
        }, 0.75);
      }

      // Keyboard backlight settles at full ambient luminescence
      if (keyboardGlowRef.current) {
        tl.to(keyboardGlowRef.current, {
          opacity: 1,
          duration: 0.25,
        }, 0.75);
      }
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      id="laptop-showcase"
      className="relative w-full bg-[#050711] text-white overflow-hidden select-none"
    >
      {/* Pinned Viewport Container */}
      <div 
        ref={stickyRef}
        className="sticky top-0 h-screen w-full flex flex-col items-center justify-between py-6 sm:py-9 px-4 overflow-hidden"
      >
        {/* Subtle Ambient Radial Floor Spotlight (Minimal, non-distracting) */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[1000px] h-[550px] bg-gradient-to-b from-purple-950/20 via-slate-900/10 to-transparent rounded-full blur-[140px] pointer-events-none -z-10"
          aria-hidden="true" 
        />

        {/* 1. Header Typography Area (Transitions from 0% -> 100%) */}
        <div className="relative w-full max-w-4xl mx-auto text-center min-h-[95px] sm:min-h-[110px] flex items-center justify-center z-20">
          
          {/* Phase 1 Text (0% - 40%): Minimal Hero Text above closed laptop */}
          <div 
            ref={heroTextRef}
            className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-cyan-300 text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-2.5 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>PHYSICAL ENGINEERING BENCHMARK</span>
            </div>
            
            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Architectures Built for Market Dominance.
            </h2>
            
            <p className="text-xs sm:text-sm text-slate-400 font-normal mt-1.5 max-w-xl">
              Scroll down to inspect live production systems in physical dimension.
            </p>
          </div>

          {/* Phase 2 Text (50% - 100%): Revealed Project & Telemetry Specs */}
          <div 
            ref={revealedTextRef}
            className="absolute inset-0 flex flex-col items-center justify-center"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-2.5 backdrop-blur-md">
              <Sparkles className="w-3 h-3 text-purple-400" />
              <span>LIVE CLIENT PRODUCTION PREVIEW</span>
            </div>
            
            <div className="flex items-center gap-2.5">
              <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                {activeProject.title}
              </h2>
              <span className="hidden sm:inline-block text-xs font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
                {activeProject.badge}
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-300 font-normal mt-1.5 max-w-xl">
              {activeProject.tagline}
            </p>
          </div>
        </div>

        {/* 2. Central 3D Laptop Perspective Stage */}
        <div 
          className="relative flex-1 w-full flex items-center justify-center my-auto"
          style={{
            perspective: '1500px',
            perspectiveOrigin: '50% 36%',
          }}
        >
          {/* Laptop Scaling Container (Maintains 60fps & scales cleanly on all viewports) */}
          <div 
            className="relative"
            style={{
              transform: `scale(${scaleRatio})`,
              transformOrigin: 'center center',
              transition: 'transform 0.2s ease-out',
            }}
          >
            {/* 3D Laptop Assembly Rig */}
            <div 
              className="relative"
              style={{
                width: '740px',
                height: '460px',
                transformStyle: 'preserve-3d',
                transform: 'rotateX(54deg) rotateY(0deg) rotateZ(0deg)',
              }}
            >
              {/* Table Ambient Occlusion Shadow Underneath Base */}
              <div 
                ref={baseShadowRef}
                className="absolute -inset-10 bg-black/90 rounded-[50px] blur-[36px] pointer-events-none -z-10"
                style={{
                  transform: 'translateZ(-8px) scaleY(0.9)',
                }}
                aria-hidden="true" 
              />

              {/* ─────────────────────────────────────────────────────────────
                  LAPTOP BASE (Bottom Chassis - Stationary on table)
                  ───────────────────────────────────────────────────────────── */}
              <div 
                className="absolute inset-0 rounded-b-2xl rounded-t-sm bg-gradient-to-b from-[#181B26] via-[#141620] to-[#0E1017] border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.95)] overflow-hidden"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: 'translateZ(0px)',
                }}
              >
                {/* CNC Aluminum Brushed Sheen Texture */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.03] via-transparent to-white/[0.04] pointer-events-none" />

                {/* Left/Right Edge Specular Bevels */}
                <div className="absolute inset-x-0 top-0 h-[1px] bg-white/20" />
                <div className="absolute inset-y-0 left-0 w-[1px] bg-white/10" />
                <div className="absolute inset-y-0 right-0 w-[1px] bg-white/10" />

                {/* Front Lip Grip Scoop (MacBook Thumb Notch) */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-28 h-2 rounded-t-md bg-[#090A0E] border-t border-x border-white/20 shadow-inner flex items-center justify-center">
                  <div className="w-12 h-[1px] bg-white/30" />
                </div>

                {/* Recessed Keyboard Deck */}
                <div className="absolute top-5 inset-x-8 h-[255px] rounded-xl bg-[#090B12] border border-white/[0.06] shadow-[inset_0_4px_16px_rgba(0,0,0,0.9)] p-2.5 flex flex-col justify-between">
                  
                  {/* Subtle Keyboard Backlight Glow (turns on as lid opens) */}
                  <div 
                    ref={keyboardGlowRef}
                    className="absolute inset-0 rounded-xl bg-cyan-400/[0.04] shadow-[inset_0_0_24px_rgba(6,182,212,0.15)] pointer-events-none transition-opacity" 
                  />

                  {/* Function Row Keys */}
                  <div className="grid grid-cols-14 gap-1 h-5">
                    {['esc', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', '⌽'].map((k, i) => (
                      <div key={i} className="rounded-[3px] bg-[#121522] border border-white/[0.05] flex items-center justify-center text-[7px] font-mono text-slate-400 shadow-sm">
                        {k}
                      </div>
                    ))}
                  </div>

                  {/* Number Row */}
                  <div className="grid grid-cols-14 gap-1 h-7">
                    {['~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'delete'].map((k, i) => (
                      <div key={i} className="rounded-[3px] bg-[#121522] border border-white/[0.05] flex items-center justify-center text-[8px] font-mono text-slate-300 shadow-sm">
                        {k}
                      </div>
                    ))}
                  </div>

                  {/* QWERTY Row */}
                  <div className="grid grid-cols-14 gap-1 h-7">
                    {['tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\'].map((k, i) => (
                      <div key={i} className="rounded-[3px] bg-[#121522] border border-white/[0.05] flex items-center justify-center text-[8px] font-mono text-slate-300 shadow-sm">
                        {k}
                      </div>
                    ))}
                  </div>

                  {/* ASDF Row */}
                  <div className="grid grid-cols-14 gap-1 h-7">
                    {['caps', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'return', '↵'].map((k, i) => (
                      <div key={i} className="rounded-[3px] bg-[#121522] border border-white/[0.05] flex items-center justify-center text-[8px] font-mono text-slate-300 shadow-sm">
                        {k}
                      </div>
                    ))}
                  </div>

                  {/* ZXCV Row */}
                  <div className="grid grid-cols-13 gap-1 h-7">
                    {['shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', 'shift', '▲'].map((k, i) => (
                      <div key={i} className="rounded-[3px] bg-[#121522] border border-white/[0.05] flex items-center justify-center text-[8px] font-mono text-slate-300 shadow-sm">
                        {k}
                      </div>
                    ))}
                  </div>

                  {/* Spacebar Row */}
                  <div className="grid grid-cols-10 gap-1 h-7">
                    <div className="rounded-[3px] bg-[#121522] border border-white/[0.05] flex items-center justify-center text-[7px] text-slate-400">fn</div>
                    <div className="rounded-[3px] bg-[#121522] border border-white/[0.05] flex items-center justify-center text-[7px] text-slate-400">control</div>
                    <div className="rounded-[3px] bg-[#121522] border border-white/[0.05] flex items-center justify-center text-[7px] text-slate-400">option</div>
                    <div className="rounded-[3px] bg-[#121522] border border-white/[0.05] flex items-center justify-center text-[7px] text-slate-400">command</div>
                    <div className="col-span-3 rounded-[3px] bg-[#121522] border border-white/[0.05] shadow-sm" />
                    <div className="rounded-[3px] bg-[#121522] border border-white/[0.05] flex items-center justify-center text-[7px] text-slate-400">command</div>
                    <div className="rounded-[3px] bg-[#121522] border border-white/[0.05] flex items-center justify-center text-[7px] text-slate-400">option</div>
                    <div className="grid grid-cols-3 gap-0.5">
                      <div className="rounded-[2px] bg-[#121522] text-[6px] flex items-center justify-center text-slate-400">◀</div>
                      <div className="rounded-[2px] bg-[#121522] text-[6px] flex items-center justify-center text-slate-400">▼</div>
                      <div className="rounded-[2px] bg-[#121522] text-[6px] flex items-center justify-center text-slate-400">▶</div>
                    </div>
                  </div>
                </div>

                {/* Glass Force Touch Trackpad */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-64 h-32 rounded-xl bg-[#11131C]/80 border border-white/10 shadow-[inset_0_1px_4px_rgba(255,255,255,0.06)] flex items-center justify-center">
                  <div className="w-8 h-[1px] bg-white/10" />
                </div>
              </div>

              {/* Cylindrical Aluminum Hinge Axis at Back Edge (y = 0) */}
              <div 
                className="absolute top-0 inset-x-14 h-3 rounded-full bg-gradient-to-b from-[#0A0C12] via-[#1D212E] to-[#0A0C12] border-t border-b border-white/20 shadow-md"
                style={{
                  transform: 'translateZ(1.5px)',
                }}
              />

              {/* ─────────────────────────────────────────────────────────────
                  LAPTOP DISPLAY / LID (Rotating around hinge at y = 0)
                  Attached at top: -460px with transform-origin: bottom center
                  ───────────────────────────────────────────────────────────── */}
              <div 
                ref={laptopLidRef}
                className="absolute inset-x-0 h-[460px] pointer-events-auto"
                style={{
                  top: '-460px',
                  transformOrigin: 'bottom center',
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* ──────────────────────────────────────────────────────────
                    FACE 1: EXTERIOR ALUMINUM LID (Visible when closed: 0% - 25%)
                    ────────────────────────────────────────────────────────── */}
                <div 
                  className="absolute inset-0 rounded-t-2xl rounded-b-sm bg-gradient-to-b from-[#1C202C] via-[#161822] to-[#0F1118] border border-white/20 shadow-2xl flex flex-col items-center justify-center overflow-hidden"
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg) translateZ(1px)',
                  }}
                >
                  {/* Subtle Anodized Metallic Specular Sheen */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.04] via-transparent to-white/[0.06] pointer-events-none" />
                  
                  {/* Polished Edge Chamfers */}
                  <div className="absolute inset-x-0 top-0 h-[1px] bg-white/30" />
                  
                  {/* Arclyn Studio Chrome Monogram Logo on Lid Back */}
                  <div className="relative flex flex-col items-center group/logo">
                    <div className="relative w-16 h-16 rounded-2xl bg-[#090C16] border border-white/20 flex items-center justify-center p-3 shadow-xl backdrop-blur-xl group-hover/logo:scale-105 transition-transform">
                      <LogoIcon size={44} className="w-10 h-10 drop-shadow-[0_0_12px_rgba(147,51,234,0.6)]" />
                    </div>
                    <span className="font-display text-sm font-bold tracking-tight text-white/70 mt-2.5">
                      Arclyn Studio
                    </span>
                  </div>

                  {/* Closed Indicator Text */}
                  <div className="absolute bottom-6 flex items-center gap-1.5 text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                    <span>Precision Hardware Spec</span>
                  </div>
                </div>

                {/* ──────────────────────────────────────────────────────────
                    FACE 2: RETINA DISPLAY & BEZEL (Visible when open: 75% - 100%)
                    ────────────────────────────────────────────────────────── */}
                <div 
                  className="absolute inset-0 rounded-t-2xl rounded-b-sm bg-[#08090D] p-2.5 sm:p-3 border border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.95)] flex flex-col overflow-hidden"
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(0deg) translateZ(1px)',
                  }}
                >
                  {/* Top FaceTime HD Camera Notch */}
                  <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-28 h-3 rounded-b-lg bg-black border-b border-x border-white/10 z-30 flex items-center justify-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#181A22] border border-white/20 flex items-center justify-center">
                      <div className="w-0.5 h-0.5 rounded-full bg-emerald-400 animate-pulse" />
                    </div>
                  </div>

                  {/* Screen Content Wrapper (Animated brightness / opacity via GSAP) */}
                  <div 
                    ref={screenContentRef}
                    className="relative flex-1 w-full rounded-xl bg-black overflow-hidden flex flex-col border border-white/10 shadow-inner group"
                  >
                    {/* Safari Browser Top Navigation Chrome */}
                    <div className="shrink-0 h-8 px-3 bg-[#0E111C] border-b border-white/10 flex items-center justify-between gap-3 z-20">
                      {/* Window Dots */}
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      </div>

                      {/* Safari URL Address Bar */}
                      <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-[#070912] border border-white/10 text-[10px] text-slate-300 font-mono w-72 justify-center shadow-inner">
                        <Lock className="w-2.5 h-2.5 text-emerald-400" />
                        <span>https://{activeProject.displayUrl}</span>
                      </div>

                      {/* Direct External Link Trigger */}
                      <a
                        href={activeProject.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                        title="Open live website in new tab"
                      >
                        <span className="hidden sm:inline">Visit Live</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    </div>

                    {/* Real Arclyn Studio Project Screenshot Image */}
                    <div className="relative flex-1 w-full bg-slate-950 overflow-hidden">
                      <Image
                        src={activeProject.image}
                        alt={activeProject.title}
                        fill
                        priority
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                      
                      {/* Subtle Top & Bottom Gradient Vignettes */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 pointer-events-none" />

                      {/* Diagonal Display Specular Glare (sweeps on scroll) */}
                      <div 
                        ref={glareRef}
                        className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.08] to-transparent pointer-events-none" 
                      />

                      {/* Floating In-Display Project Switcher Bar */}
                      <div className="absolute bottom-2.5 inset-x-3 z-20 flex items-center justify-between gap-2 p-2 rounded-lg bg-[#090C16]/90 border border-white/15 backdrop-blur-md">
                        <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
                          {LAPTOP_PROJECTS.map((p) => (
                            <button
                              key={p.id}
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveProject(p);
                              }}
                              className={`px-2.5 py-1 rounded-md text-[10px] font-semibold transition-all shrink-0 cursor-pointer ${
                                activeProject.id === p.id
                                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-sm'
                                  : 'text-slate-400 hover:text-white hover:bg-white/5'
                              }`}
                            >
                              {p.title}
                            </button>
                          ))}
                        </div>

                        <a
                          href={activeProject.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1 rounded-md bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/40 text-cyan-300 text-[10px] font-semibold inline-flex items-center gap-1 transition-all shrink-0 cursor-pointer"
                        >
                          <span>Launch Site</span>
                          <ExternalLink className="w-2.5 h-2.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Bottom Scroll Progress & Status Strip */}
        <div className="w-full max-w-4xl mx-auto flex items-center justify-between text-xs text-slate-400 border-t border-white/5 pt-3 sm:pt-4 px-2">
          {/* Scroll Status */}
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
              Sequence Progress
            </span>
            <div className="w-24 sm:w-32 h-1.5 rounded-full bg-white/10 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-indigo-500 transition-all duration-75"
                style={{ width: `${scrollPercent}%` }}
              />
            </div>
            <span className="text-xs font-mono font-bold text-white">
              {scrollPercent}%
            </span>
          </div>

          {/* Current Animation Phase Indicator */}
          <div className="hidden sm:flex items-center gap-2 text-xs font-medium text-slate-300">
            {scrollPercent < 25 && <span>0%: Laptop Completely Closed</span>}
            {scrollPercent >= 25 && scrollPercent < 50 && <span className="text-cyan-300">25%: Laptop Opening Upward</span>}
            {scrollPercent >= 50 && scrollPercent < 75 && <span className="text-purple-300">50%: Display Transitioning</span>}
            {scrollPercent >= 75 && scrollPercent < 100 && <span className="text-indigo-300">75%: Screen Illuminating</span>}
            {scrollPercent >= 100 && <span className="text-emerald-400 flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5" /> 100%: Live Production Architecture</span>}
          </div>

          {/* Action Trigger */}
          <a
            href={activeProject.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <span>Live Case Study</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default LaptopShowcaseSection;
