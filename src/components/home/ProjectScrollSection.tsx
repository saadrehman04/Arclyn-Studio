'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, ArrowUpRight, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

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

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const unmaskCardRef = useRef<HTMLDivElement>(null);
  const laserBeamRef = useRef<HTMLDivElement>(null);

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

  // Auto-cycle through projects every 6 seconds when not hovered
  useEffect(() => {
    if (isPaused) return;

    autoPlayTimerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SHOWCASE_PROJECTS.length);
    }, 6000);

    return () => {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    };
  }, [isPaused]);

  // =========================================================
  // CINEMATIC UNMASK & PARALLAX SCROLL ANIMATION (FROM HERO)
  // Seamlessly reveals this section as you scroll from the Hero,
  // eliminating empty dead space and elevating the card with depth.
  // =========================================================
  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const unmaskCard = unmaskCardRef.current;
    const laserBeam = laserBeamRef.current;
    if (!section) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = (window as unknown as { __lenis?: { on: (event: string, cb: () => void) => void; off: (event: string, cb: () => void) => void } }).__lenis;
    const lenisUpdate = () => ScrollTrigger.update();
    if (lenis) {
      lenis.on('scroll', lenisUpdate);
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 95%',  // Starts unmasking as section enters viewport from hero
          end: 'top 25%',    // Fully revealed as section settles into view
          scrub: 1.0,
          invalidateOnRefresh: true,
        },
      });

      // 1. Header parallax unmask: smoothly lifts with opacity
      if (header) {
        tl.fromTo(
          header,
          { y: 65, opacity: 0.15, scale: 0.94 },
          { y: 0, opacity: 1, scale: 1, ease: 'power2.out' },
          0
        );
      }

      // 2. Browser Card Unmask: aperture expansion & 3D parallax emergence
      if (unmaskCard) {
        tl.fromTo(
          unmaskCard,
          {
            y: 85,
            scale: 0.92,
            opacity: 0.25,
            clipPath: 'inset(8% 3% 0% 3% round 32px)',
          },
          {
            y: 0,
            scale: 1,
            opacity: 1,
            clipPath: 'inset(0% 0% 0% 0% round 24px)',
            ease: 'power2.out',
          },
          0.05
        );
      }

      // 3. Sweeping Unmask Laser Glow Beam across the top border of the card
      if (laserBeam) {
        tl.fromTo(
          laserBeam,
          { left: '-25%', opacity: 0 },
          { left: '125%', opacity: 1, ease: 'power1.inOut' },
          0.1
        );
      }
    }, section);

    return () => {
      if (lenis) {
        lenis.off('scroll', lenisUpdate);
      }
      ctx.revert();
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="production-showcase"
      className="relative w-full -mt-16 sm:-mt-24 lg:-mt-32 pt-10 sm:pt-16 pb-12 sm:pb-16 bg-[#050505] rounded-t-[36px] sm:rounded-t-[54px] lg:rounded-t-[72px] border-t border-white/15 shadow-[0_-35px_90px_rgba(0,0,0,0.98)] select-none overflow-hidden z-20 will-change-transform"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Top Luminous Horizon Laser Line */}
      <div 
        className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent shadow-[0_0_20px_#22d3ee] pointer-events-none z-10" 
        aria-hidden="true" 
      />

      {/* Background Matrix Grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-full opacity-30"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse at center, #000 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, #000 30%, transparent 80%)',
        }}
      />

      {/* Subtle Ambient Radial Lighting */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.06)_0%,transparent_70%)] pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      {/* Unmask Parallax Container */}
      <div ref={unmaskCardRef} className="w-full relative will-change-transform">
        
        {/* Sweeping Laser Scan Horizon Beam */}
        <div 
          ref={laserBeamRef}
          className="absolute top-2 -translate-y-1/2 w-48 sm:w-72 h-[3px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent blur-[1px] shadow-[0_0_25px_#22d3ee] pointer-events-none z-30 opacity-0"
          aria-hidden="true"
        />

        {/* 3D Container Scroll Animation Wrapper */}
        <ContainerScroll
          className="py-1 sm:py-2 md:py-3 px-2 sm:px-4"
          cardClassName="relative max-w-[940px] mx-auto h-[460px] sm:h-[540px] md:h-[580px] border-2 sm:border-[3px] border-white/15 p-1.5 sm:p-2.5 bg-[#0a0a0c]/95 rounded-[22px] sm:rounded-[28px] shadow-[0_25px_80px_rgba(0,0,0,0.9)] backdrop-blur-2xl"
          cardInnerClassName="bg-[#050507] rounded-[16px] sm:rounded-[20px] overflow-hidden flex flex-col relative"
          titleComponent={
            <div ref={headerRef} className="flex flex-col items-center text-center px-4 mb-2 sm:mb-4 will-change-transform">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/15 text-neutral-300 text-[10px] sm:text-xs font-mono uppercase tracking-wider backdrop-blur-md mb-2.5">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>Verified Production Platforms</span>
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Engineered for Measurable Scale
              </h2>
              <p className="text-xs sm:text-sm text-neutral-400 max-w-lg mt-1.5">
                Explore four flagship systems architected for sub-second speed, conversion lift, and scale.
              </p>
            </div>
          }
        >
          {/* Compact Browser Frame with Controls & Project Selector Tabs */}
          <div className="shrink-0 px-2.5 sm:px-4 py-2 border-b border-white/10 bg-[#08080a] flex items-center justify-between gap-1.5 sm:gap-2 relative">
            
            {/* Traffic Lights & Active URL */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 shrink-0">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
              </div>
              <div className="hidden md:flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black/60 border border-white/10 text-[10px] font-mono text-neutral-300 truncate max-w-[200px]">
                <span className="text-neutral-500 text-[9px]">🔒</span>
                <span className="truncate">https://{activeProject.displayUrl}</span>
              </div>
            </div>

            {/* Interactive Project Tabs (01, 02, 03, 04) */}
            <div className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto no-scrollbar">
              {SHOWCASE_PROJECTS.map((project, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={project.id}
                    onClick={() => handleTabClick(idx)}
                    type="button"
                    className={`px-2.5 sm:px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-tight transition-all duration-300 shrink-0 cursor-pointer flex items-center gap-1.5 border min-h-[34px] ${
                      isActive
                        ? 'bg-white text-black font-bold border-white shadow-sm'
                        : 'bg-white/[0.04] hover:bg-white/[0.08] border-white/10 text-neutral-400 hover:text-white'
                    }`}
                  >
                    <span className="text-[9px] font-mono opacity-60">{project.step}</span>
                    <span className="whitespace-nowrap hidden md:inline">{project.title.split(' ')[0]}</span>
                  </button>
                );
              })}
            </div>

            {/* Counter Badge */}
            <div className="shrink-0 font-mono text-[10px] text-neutral-400 px-2 py-0.5 rounded-full bg-white/[0.05] border border-white/10">
              0{activeIndex + 1} / 0{SHOWCASE_PROJECTS.length}
            </div>
          </div>

          {/* Media Display Container with Smooth Crossfade */}
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
                    sizes="(max-width: 1024px) 100vw, 940px"
                    className="object-cover object-top"
                  />
                  {/* Vignettes for legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/20 pointer-events-none" />
                </div>
              );
            })}

            {/* Quick Prev / Next Arrows with Touch-Comfortable Targets */}
            <div className="absolute top-1/2 -translate-y-1/2 inset-x-2 sm:inset-x-2.5 flex items-center justify-between pointer-events-none z-20">
              <button
                onClick={handlePrev}
                type="button"
                className="w-9 h-9 sm:w-8 sm:h-8 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 text-white flex items-center justify-center transition-all duration-200 pointer-events-auto shadow-lg backdrop-blur-md hover:scale-105 active:scale-95 min-w-[38px] min-h-[38px]"
                aria-label="Previous Project"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                type="button"
                className="w-9 h-9 sm:w-8 sm:h-8 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 text-white flex items-center justify-center transition-all duration-200 pointer-events-auto shadow-lg backdrop-blur-md hover:scale-105 active:scale-95 min-w-[38px] min-h-[38px]"
                aria-label="Next Project"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Bottom Floating Info Strip */}
            <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 z-20 bg-gradient-to-t from-black/95 via-black/85 to-transparent flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3 border-t border-white/10 backdrop-blur-sm">
              <div className="space-y-0.5 max-w-md">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-white/15 text-white border border-white/20">
                    {activeProject.badge}
                  </span>
                  <h3 className="text-xs sm:text-sm font-bold text-white truncate">
                    {activeProject.title}
                  </h3>
                </div>
                <p className="text-[10px] sm:text-[11px] text-neutral-300 line-clamp-1">
                  {activeProject.metric}
                </p>
              </div>

              <a
                href={activeProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full bg-white text-black hover:bg-neutral-200 text-xs font-bold tracking-tight transition-all shrink-0 shadow-sm active:scale-95 min-h-[38px]"
              >
                <span>Visit Live</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </ContainerScroll>
      </div>
    </section>
  );
};

export default ProjectScrollSection;
