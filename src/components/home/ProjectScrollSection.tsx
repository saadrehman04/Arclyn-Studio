'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import { subscribeScrollTriggerUpdate } from '@/lib/scroll-trigger-bridge';

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
  const [isVisible, setIsVisible] = useState(false);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const unmaskCardRef = useRef<HTMLDivElement>(null);

  const activeProject = SHOWCASE_PROJECTS[activeIndex] || SHOWCASE_PROJECTS[0];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, { rootMargin: '120px 0px' });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const handleTabClick = (idx: number) => {
    setActiveIndex(idx);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % SHOWCASE_PROJECTS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + SHOWCASE_PROJECTS.length) % SHOWCASE_PROJECTS.length);
  };

  // Auto-cycle through projects fast every 2.6 seconds when not hovered/touched
  useEffect(() => {
    if (isPaused || !isVisible) return;

    autoPlayTimerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SHOWCASE_PROJECTS.length);
    }, 2600);

    return () => {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    };
  }, [isPaused, isVisible]);

  // =========================================================
  // CINEMATIC UNMASK & PARALLAX SCROLL ANIMATION (FROM HERO)
  // Seamlessly reveals this section as you scroll from the Hero,
  // eliminating empty dead space and elevating the card with depth.
  // =========================================================
  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const unmaskCard = unmaskCardRef.current;
    if (!section) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = (window as unknown as { __lenis?: { on: (event: string, cb: () => void) => void; off: (event: string, cb: () => void) => void } }).__lenis;
    const unsubscribeScrollUpdate = lenis
      ? subscribeScrollTriggerUpdate(lenis, () => ScrollTrigger.update())
      : undefined;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 95%',  // Starts unmasking as section enters viewport from hero
          end: 'top 25%',    // Fully revealed as section settles into view
          scrub: 0.2,
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
          },
          {
            y: 0,
            scale: 1,
            opacity: 1,
            ease: 'power2.out',
          },
          0.05
        );
      }

    }, section);

    return () => {
      unsubscribeScrollUpdate?.();
      ctx.revert();
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="production-showcase"
      className="font-helvetica-neue relative z-20 -mt-16 w-full select-none overflow-hidden border-t border-[#1A1A1A]/10 bg-[#E8E8E8] pt-10 text-[#1A1A1A] shadow-[0_-18px_55px_rgba(0,0,0,0.18)] sm:-mt-24 sm:pt-16 lg:-mt-32 lg:pt-20"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => {
        setTimeout(() => setIsPaused(false), 2000);
      }}
    >
      {/* Unmask Parallax Container */}
      <div ref={unmaskCardRef} className="w-full relative will-change-transform">

        {/* 3D Container Scroll Animation Wrapper */}
        <ContainerScroll
          className="px-2 py-1 sm:px-4 sm:py-2 md:py-3"
          cardClassName="relative mx-auto h-[460px] max-w-[940px] rounded-2xl border border-[#1A1A1A]/15 bg-[#F4F4F2] p-1.5 shadow-[0_24px_70px_rgba(0,0,0,0.16)] sm:h-[540px] sm:rounded-[22px] sm:p-2.5 md:h-[580px]"
          cardInnerClassName="relative flex flex-col overflow-hidden rounded-xl bg-[#F4F4F2] sm:rounded-2xl"
          titleComponent={
            <div ref={headerRef} className="mb-3 flex flex-col items-start px-4 text-left will-change-transform sm:mb-5">
              <div className="mb-2.5 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#1A1A1A]/55 sm:text-xs">
                <ShieldCheck className="h-3.5 w-3.5 text-[#1A1A1A]/60" />
                <span>Verified Production Platforms</span>
              </div>

              <h2 className="font-helvetica-neue text-3xl font-light leading-[1.02] tracking-tight text-[#1A1A1A] sm:text-5xl lg:text-6xl">
                Engineered for Measurable Scale
              </h2>
              <p className="mt-2 max-w-lg text-xs leading-relaxed text-[#1A1A1A]/65 sm:text-sm">
                Explore four flagship systems architected for sub-second speed, conversion lift, and scale.
              </p>
            </div>
          }
        >
          {/* Compact Browser Frame with Controls & Project Selector Tabs */}
          <div className="relative flex shrink-0 items-center justify-between gap-1.5 border-b border-[#1A1A1A]/10 bg-[#F4F4F2] px-2.5 py-2 sm:gap-2 sm:px-4">
            
            {/* Traffic Lights & Active URL */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 shrink-0">
                <div className="h-2 w-2 rounded-full bg-[#1A1A1A]/20" />
                <div className="h-2 w-2 rounded-full bg-[#1A1A1A]/20" />
                <div className="h-2 w-2 rounded-full bg-[#1A1A1A]/20" />
              </div>
              <div className="hidden max-w-[200px] items-center gap-1.5 truncate rounded-full border border-[#1A1A1A]/10 bg-white/55 px-2.5 py-0.5 font-mono text-[10px] text-[#1A1A1A]/60 md:flex">
                <span className="text-[9px] text-[#1A1A1A]/40">https://</span>
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
                    className={`flex min-h-[34px] shrink-0 cursor-pointer items-center gap-1.5 rounded-full border px-2.5 py-1.5 text-[11px] font-medium tracking-tight transition-all duration-300 sm:px-3 ${
                      isActive
                        ? 'border-[#1A1A1A] bg-[#1A1A1A] font-semibold text-white'
                        : 'border-[#1A1A1A]/15 bg-transparent text-[#1A1A1A]/55 hover:border-[#1A1A1A]/45 hover:text-[#1A1A1A]'
                    }`}
                  >
                    <span className="font-mono text-[9px] opacity-60">{project.step}</span>
                    <span className="whitespace-nowrap hidden md:inline">{project.title.split(' ')[0]}</span>
                  </button>
                );
              })}
            </div>

            {/* Counter Badge */}
            <div className="shrink-0 rounded-full border border-[#1A1A1A]/10 bg-white/55 px-2 py-0.5 font-mono text-[10px] text-[#1A1A1A]/55">
              0{activeIndex + 1} / 0{SHOWCASE_PROJECTS.length}
            </div>
          </div>

          {/* Media Display Container with Smooth Crossfade */}
          <div className="relative w-full flex-1 overflow-hidden bg-[#D8D8D6]">
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
                  className="pointer-events-auto flex min-h-[38px] min-w-[38px] items-center justify-center rounded-full border border-white/30 bg-black/55 text-white shadow-lg backdrop-blur-md transition-all duration-200 hover:scale-105 hover:bg-black/80 active:scale-95 sm:h-8 sm:w-8"
                aria-label="Previous Project"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                type="button"
                  className="pointer-events-auto flex min-h-[38px] min-w-[38px] items-center justify-center rounded-full border border-white/30 bg-black/55 text-white shadow-lg backdrop-blur-md transition-all duration-200 hover:scale-105 hover:bg-black/80 active:scale-95 sm:h-8 sm:w-8"
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
