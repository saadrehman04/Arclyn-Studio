'use client';

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CinematicHero } from './CinematicHero';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const HeroShowcaseExperience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const motionGraphicRef = useRef<HTMLDivElement>(null);
  const ringOuterRef = useRef<SVGCircleElement>(null);
  const ringMidRef = useRef<SVGCircleElement>(null);
  const ringInnerRef = useRef<SVGCircleElement>(null);
  const scanBeamRef = useRef<HTMLDivElement>(null);
  const hudTextRef = useRef<HTMLDivElement>(null);
  const gridHorizonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('preview_transition') === '1') {
        if (motionGraphicRef.current) {
          motionGraphicRef.current.style.opacity = '1';
          motionGraphicRef.current.style.pointerEvents = 'auto';
        }
        if (hudTextRef.current) {
          hudTextRef.current.style.opacity = '1';
          hudTextRef.current.style.transform = 'none';
        }
        if (gridHorizonRef.current) {
          gridHorizonRef.current.style.opacity = '0.75';
        }
        const heroCopy = document.getElementById('hero-copy-block');
        const heroLogos = document.getElementById('hero-logos-block');
        if (heroCopy) heroCopy.style.opacity = '0';
        if (heroLogos) heroLogos.style.opacity = '0';
      }
    }
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (!containerRef.current || !stageRef.current) return;

      const heroCopy = document.getElementById('hero-copy-block');
      const heroLogos = document.getElementById('hero-logos-block');
      const heroPlate = document.querySelector('.cinematic-plate');

      const isPreview = typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('preview_transition') === '1';
      if (isPreview) {
        if (heroCopy) {
          heroCopy.style.opacity = '0';
          heroCopy.style.display = 'none';
        }
        if (heroLogos) {
          heroLogos.style.opacity = '0';
          heroLogos.style.display = 'none';
        }
        if (motionGraphicRef.current) {
          motionGraphicRef.current.style.opacity = '1';
        }
        if (hudTextRef.current) {
          hudTextRef.current.style.opacity = '1';
          hudTextRef.current.style.transform = 'none';
        }
        if (gridHorizonRef.current) {
          gridHorizonRef.current.style.opacity = '0.75';
        }
        return;
      }

      const isMobile = window.innerWidth < 1024;
      if (isMobile) {
        // On mobile & tablet, keep the hero fully visible in natural document flow without ScrollTrigger pinning
        if (heroCopy) {
          heroCopy.style.opacity = '1';
          heroCopy.style.transform = 'none';
        }
        if (heroLogos) {
          heroLogos.style.opacity = '1';
          heroLogos.style.transform = 'none';
        }
        return;
      }

      // Harmonized scroll runway matching timeline duration perfectly (desktop only)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.2,
          pin: stageRef.current,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Keep the main cinematic hero as the primary layer; do not reveal the extra post-scroll hero state.
      if (heroCopy) {
        tl.to(heroCopy, { opacity: 0, y: -40, ease: 'power1.out', duration: 0.6 }, 0);
      }
      if (heroLogos) {
        tl.to(heroLogos, { opacity: 0, y: 30, ease: 'power1.out', duration: 0.6 }, 0);
      }

      if (heroPlate) {
        tl.to(heroPlate, { scale: 1.04, ease: 'none', duration: 3.0 }, 0);
      }

      // Keep the secondary motion layer hidden so the scroll transitions directly into the product showcase.
      if (motionGraphicRef.current) {
        gsap.set(motionGraphicRef.current, { opacity: 0, pointerEvents: 'none' });
      }
      if (hudTextRef.current) {
        gsap.set(hudTextRef.current, { opacity: 0, x: 0 });
      }
      if (gridHorizonRef.current) {
        gsap.set(gridHorizonRef.current, { opacity: 0, y: 0 });
      }
      if (scanBeamRef.current) {
        gsap.set(scanBeamRef.current, { top: '0%', opacity: 0 });
      }
      if (ringOuterRef.current) gsap.set(ringOuterRef.current, { rotation: 0 });
      if (ringMidRef.current) gsap.set(ringMidRef.current, { rotation: 0 });
      if (ringInnerRef.current) gsap.set(ringInnerRef.current, { rotation: 0 });
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      id="hero-showcase-experience"
      className="relative w-full h-[100dvh] lg:h-[112dvh] bg-[#050505]"
    >
      {/* Pinned Full-Viewport Stage */}
      <div 
        ref={stageRef} 
        className="relative h-[100dvh] w-full overflow-hidden bg-[#050505] select-none"
      >
        
        {/* Layer 1: Base Cinematic Hero (Video Plate + Header + Copy + Logos) */}
        <div className="absolute inset-0 z-10 w-full h-full">
          <CinematicHero />
        </div>

        {/* Layer 2: Intermediate Motion Graphic Layer (Active during scroll) — Crystal Clear Without Dark Shroud or Blur */}
        <div 
          ref={motionGraphicRef}
          aria-hidden="true"
          className="absolute inset-0 z-20 pointer-events-none opacity-0 flex flex-col justify-center overflow-hidden"
        >
          {/* Subtle translucent atmospheric scrim: keeps video vibrant while ensuring text is readable */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 40% to-transparent pointer-events-none z-0" />

          {/* Laser Scan Horizon Beam */}
          <div 
            ref={scanBeamRef} 
            className="absolute inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-75 shadow-[0_0_25px_#ffffff] z-10" 
          />

          {/* Perspective 3D Wireframe Horizon Grid */}
          <div 
            ref={gridHorizonRef} 
            className="absolute inset-x-0 bottom-0 h-[38vh] pointer-events-none opacity-0 z-5"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
              backgroundSize: '48px 48px',
              transform: 'perspective(500px) rotateX(65deg) translateY(20%)',
              transformOrigin: 'bottom center',
              maskImage: 'linear-gradient(to top, black 25%, transparent 95%)',
              WebkitMaskImage: 'linear-gradient(to top, black 25%, transparent 95%)',
            }}
          />

          {/* Concentric Orbital Rings HUD — Centered specifically around the doorway & character portal on the right */}
          <div 
            className="absolute top-1/2 pointer-events-none opacity-30 z-10 hidden md:flex items-center justify-center"
            style={{
              left: 'calc(50% + clamp(180px, 20vw, 360px))',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <svg viewBox="0 0 500 500" className="w-[380px] lg:w-[500px] h-[380px] lg:h-[500px] overflow-visible">
              {/* Outer rotating dashed ring */}
              <circle 
                ref={ringOuterRef}
                cx="250" cy="250" r="235" 
                fill="none" 
                stroke="rgba(255,255,255,0.22)" 
                strokeWidth="1.2" 
                strokeDasharray="4 8" 
              />
              {/* Middle counter-rotating segmented telemetry ring */}
              <circle 
                ref={ringMidRef}
                cx="250" cy="250" r="185" 
                fill="none" 
                stroke="rgba(255,255,255,0.30)" 
                strokeWidth="1.5" 
                strokeDasharray="60 30 15 30" 
              />
              {/* Inner rotating ring */}
              <circle 
                ref={ringInnerRef}
                cx="250" cy="250" r="135" 
                fill="none" 
                stroke="rgba(255,255,255,0.20)" 
                strokeWidth="1" 
                strokeDasharray="3 7" 
              />
              {/* Precision Crosshair Lines */}
              <line x1="250" y1="30" x2="250" y2="470" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
              <line x1="30" y1="250" x2="470" y2="250" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
            </svg>
          </div>

          {/* Left-Aligned Studio Typography & Adjusted Telemetry Cards (Sharp, Crisp & Responsive) */}
          <div 
            ref={hudTextRef} 
            className="absolute inset-y-0 left-0 flex flex-col justify-center z-30 pointer-events-auto pl-[clamp(16px,4.5vw,84px)] pr-4 sm:pr-6 max-w-[min(720px,96vw)]"
          >
            {/* Status Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:py-1.5 rounded-full bg-black/60 border border-white/20 text-neutral-200 text-[10px] sm:text-[11px] font-mono tracking-wider uppercase mb-2 sm:mb-4 shadow-[0_4px_20px_rgba(0,0,0,0.8)] self-start">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_#34d399]" />
              <span className="truncate">INITIALIZING AUDITED PRODUCTION MESH</span>
            </div>

            {/* Impact Headline */}
            <h2 className="text-2xl sm:text-4xl lg:text-[50px] font-bold tracking-tight text-white leading-[1.1] sm:leading-[1.08] mb-2 sm:mb-3 text-left drop-shadow-[0_4px_30px_rgba(0,0,0,0.95)]">
              From Intelligence <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-neutral-400">
                To Audited Production.
              </span>
            </h2>

            {/* Studio Copy Description */}
            <p className="text-xs sm:text-sm lg:text-[15px] text-neutral-300 font-normal leading-relaxed max-w-xl mb-3 sm:mb-5 text-left drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)] line-clamp-2 sm:line-clamp-none">
              Every architecture stress-tested. Every system deployed on edge infrastructure with verifiable scale and zero technical debt.
            </p>

            {/* Adjusted Telemetry Cards: Clean Semi-Transparent Glass Without Blur Distortion */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 max-w-xl mb-3 sm:mb-5">
              {/* Card 1: Core Architecture */}
              <div className="flex flex-col gap-1 p-2.5 sm:p-3.5 rounded-xl bg-[#08090d]/85 border border-white/15 font-mono text-[10px] sm:text-[11px] text-neutral-200 shadow-[0_10px_35px_rgba(0,0,0,0.85)]">
                <div className="flex items-center justify-between text-neutral-400 text-[9px] sm:text-[10px] tracking-wider uppercase border-b border-white/10 pb-1 mb-0.5">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>CORE ARCHITECTURE</span>
                  </span>
                  <span className="text-[9px] text-emerald-400 font-semibold">ACTIVE</span>
                </div>
                <div className="flex justify-between py-0.5">
                  <span className="text-neutral-400">EDGE LATENCY</span>
                  <span className="text-emerald-400 font-bold">&lt; 28ms</span>
                </div>
                <div className="flex justify-between py-0.5">
                  <span className="text-neutral-400">REGIONS</span>
                  <span className="text-white font-bold">MULTI-EDGE MESH</span>
                </div>
                <div className="flex justify-between py-0.5">
                  <span className="text-neutral-400">TECH DEBT</span>
                  <span className="text-neutral-200 font-bold">0.00% AUDITED</span>
                </div>
              </div>

              {/* Card 2: Production Benchmark */}
              <div className="flex flex-col gap-1 p-2.5 sm:p-3.5 rounded-xl bg-[#08090d]/85 border border-white/15 font-mono text-[10px] sm:text-[11px] text-neutral-200 shadow-[0_10px_35px_rgba(0,0,0,0.85)]">
                <div className="flex items-center justify-between text-neutral-400 text-[9px] sm:text-[10px] tracking-wider uppercase border-b border-white/10 pb-1 mb-0.5">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    <span>PRODUCTION BENCHMARK</span>
                  </span>
                  <span className="text-[9px] text-white/90 font-semibold">VERIFIED</span>
                </div>
                <div className="flex justify-between py-0.5">
                  <span className="text-neutral-400">AVAILABILITY</span>
                  <span className="text-white font-bold">99.98% UPTIME</span>
                </div>
                <div className="flex justify-between py-0.5">
                  <span className="text-neutral-400">AI PIPELINE</span>
                  <span className="text-emerald-400 font-bold">AUTONOMOUS SYNC</span>
                </div>
                <div className="flex justify-between py-0.5">
                  <span className="text-neutral-400">DEPLOY CODE</span>
                  <span className="text-white font-bold">STRESS-TESTED</span>
                </div>
              </div>
            </div>

            {/* Scroll Navigation Cue */}
            <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-mono tracking-wider uppercase text-neutral-400 self-start">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>Scroll to explore production systems</span>
              <span className="text-white animate-bounce">↓</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default HeroShowcaseExperience;
