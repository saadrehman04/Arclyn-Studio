'use client';

import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ServiceGalleryItem {
  id: string;
  number: string;
  displayNumber: string;
  title: string;
  desc: string;
  route: string;
  image: string;
}

const SERVICES_GALLERY: ServiceGalleryItem[] = [
  {
    id: 'web-development',
    number: '01',
    displayNumber: '01 / 05',
    title: 'Web Development',
    desc: 'Websites and digital experiences built to convert.',
    route: '/services/web-development',
    image: '/images/services/web-development.jpg',
  },
  {
    id: 'app-development',
    number: '02',
    displayNumber: '02 / 05',
    title: 'App Development',
    desc: 'Scalable mobile applications built around your users.',
    route: '/services/app-development',
    image: '/images/services/app-development.jpg',
  },
  {
    id: 'ai-automation',
    number: '03',
    displayNumber: '03 / 05',
    title: 'AI & Automation',
    desc: 'AI-powered systems that automate and accelerate business.',
    route: '/services/ai-automation',
    image: '/images/services/ai-automation.jpg',
  },
  {
    id: 'saas-development',
    number: '04',
    displayNumber: '04 / 05',
    title: 'SaaS Development',
    desc: 'From product idea to scalable SaaS platform.',
    route: '/services/saas-development',
    image: '/images/services/saas-development.jpg',
  },
  {
    id: 'custom-software',
    number: '05',
    displayNumber: '05 / 05',
    title: 'Custom Software',
    desc: 'Purpose-built software for unique business requirements.',
    route: '/services/custom-software',
    image: '/images/services/custom-software.jpg',
  },
];

export const ServicesEditorialShowcase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinWrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const activeIndexRef = useRef<number>(0);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const [mobileIndex, setMobileIndex] = useState(0);
  const [mobileProgress, setMobileProgress] = useState(20);
  const [isMobilePaused, setIsMobilePaused] = useState(false);
  const mobileTrackRef = useRef<HTMLDivElement>(null);
  const mobileAutoScrollTimer = useRef<NodeJS.Timeout | null>(null);

  const handleMobileScroll = () => {
    const el = mobileTrackRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    if (maxScroll <= 0) return;
    const progress = Math.min(100, Math.max(20, (el.scrollLeft / maxScroll) * 100));
    setMobileProgress(progress);
    const cardWidth = 286; // card width (270px) + gap (16px)
    const idx = Math.min(SERVICES_GALLERY.length - 1, Math.max(0, Math.round(el.scrollLeft / cardWidth)));
    setMobileIndex(idx);
  };

  const scrollMobile = (dir: 'left' | 'right') => {
    const el = mobileTrackRef.current;
    if (!el) return;
    const scrollAmount = 286;
    el.scrollBy({ left: dir === 'right' ? scrollAmount : -scrollAmount, behavior: 'smooth' });
  };

  // Fast auto-scroll effect on mobile (< 1024px)
  useEffect(() => {
    if (isDesktop || isMobilePaused) return;

    mobileAutoScrollTimer.current = setInterval(() => {
      const el = mobileTrackRef.current;
      if (!el) return;
      const cardWidth = 286;
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (maxScroll <= 0) return;

      if (el.scrollLeft >= maxScroll - 16) {
        // Smoothly loop back to first service
        el.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        el.scrollBy({ left: cardWidth, behavior: 'smooth' });
      }
    }, 2400);

    return () => {
      if (mobileAutoScrollTimer.current) clearInterval(mobileAutoScrollTimer.current);
    };
  }, [isDesktop, isMobilePaused]);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkDesktop();
    window.addEventListener('resize', checkDesktop, { passive: true });
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = (window as unknown as { __lenis?: { on: (event: string, cb: () => void) => void; off: (event: string, cb: () => void) => void } }).__lenis;
    const lenisUpdate = () => ScrollTrigger.update();
    if (lenis) {
      lenis.on('scroll', lenisUpdate);
    }

    const ctx = gsap.context(() => {
      const container = containerRef.current;
      const pinWrapper = pinWrapperRef.current;
      const track = trackRef.current;

      if (!container || !pinWrapper || !track) return;

      const calculateScrollDistance = () => {
        const trackWidth = track.scrollWidth;
        const availableWidth = track.parentElement?.clientWidth || window.innerWidth * 0.7;
        return Math.max(0, trackWidth - availableWidth + 80);
      };

      // Faster, smoother horizontal scroll: lower scrub equals quicker visual response without feeling laggy.
      gsap.to(track, {
        x: () => -calculateScrollDistance(),
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: () => `+=${calculateScrollDistance() + 220}`,
          pin: pinWrapper,
          scrub: 0.14,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          fastScrollEnd: true,
          onUpdate: (self) => {
            // Direct DOM update for progress bar without triggering React re-renders
            if (progressBarRef.current) {
              const pct = Math.max(12, Math.min(100, self.progress * 100));
              progressBarRef.current.style.width = `${pct}%`;
            }

            const idx = Math.min(
              SERVICES_GALLERY.length - 1,
              Math.floor(self.progress * SERVICES_GALLERY.length)
            );

            // Only update React state when the card index actually transitions
            if (idx !== activeIndexRef.current) {
              activeIndexRef.current = idx;
              setActiveIndex(idx);
              if (counterRef.current) {
                counterRef.current.textContent = `0${idx + 1} / 05`;
              }
            }
          },
        },
      });

    }, containerRef);

    return () => {
      if (lenis) {
        lenis.off('scroll', lenisUpdate);
      }
      ctx.revert();
    };
  }, [isDesktop]);

  return (
    <section 
      id="services" 
      ref={containerRef}
      className="relative w-full bg-[#E8E8E8] select-none text-[#1A1A1A] font-helvetica-neue"
    >
      {/* =========================================================
          DESKTOP VIEW: PINNED FIXED LEFT PANEL + HORIZONTAL SCROLL
          (Active on >= 1024px screens)
          ========================================================= */}
      <div className="hidden lg:block w-full">
        <div 
          ref={pinWrapperRef}
          className="w-full h-screen relative flex flex-row overflow-hidden bg-[#E8E8E8] will-change-transform transform-gpu"
        >
          {/* ─────────────────────────────────────────────────────────
              LEFT: PINNED EDITORIAL INTRODUCTION PANEL
              ───────────────────────────────────────────────────────── */}
          <div className="w-[32%] xl:w-[28%] shrink-0 h-full flex flex-col justify-between pl-8 sm:pl-12 lg:pl-16 pr-8 pt-28 pb-16 z-20 pointer-events-auto border-r border-[#1A1A1A]/10 bg-[#E8E8E8]">
            
            {/* Top Area: Title & Link */}
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.14em] uppercase text-[#1A1A1A]/50 mb-6">
                <span>✦</span>
                <span>SERVICES &amp; CAPABILITIES</span>
              </div>

              <h2 className="text-4xl sm:text-5xl xl:text-6xl font-light tracking-tight leading-[1.05] text-[#1A1A1A] mb-8">
                Selected services <br />
                &amp; capabilities
              </h2>

              <Link 
                href="/services"
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.12em] uppercase text-[#1A1A1A] border-b border-[#1A1A1A]/30 hover:border-[#1A1A1A] pb-1 transition-all group"
              >
                <span>VIEW ALL SERVICES</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Bottom Area: Active Counter & Scroll Progress */}
            <div className="pt-8 border-t border-[#1A1A1A]/10 flex flex-col gap-3">
              <div className="flex items-center justify-between text-xs font-mono font-bold text-[#1A1A1A]">
                <span ref={counterRef}>0{activeIndex + 1} / 05</span>
                <span className="tracking-widest uppercase text-[10px] text-[#1A1A1A]/50">SCROLL TO EXPLORE ↓</span>
              </div>
              
              {/* Progress Bar (Hardware accelerated via direct ref style update) */}
              <div className="w-full h-[2px] bg-[#1A1A1A]/10 rounded-full overflow-hidden relative">
                <div 
                  ref={progressBarRef}
                  className="absolute top-0 bottom-0 left-0 bg-[#1A1A1A] rounded-full will-change-[width]"
                  style={{ width: '12%' }}
                />
              </div>
            </div>

          </div>

          {/* ─────────────────────────────────────────────────────────
              RIGHT: HORIZONTALLY SCROLLING SERVICE GALLERY
              ───────────────────────────────────────────────────────── */}
          <div className="flex-1 h-full overflow-hidden flex items-center relative pl-8 lg:pl-12 pr-12 z-10">
            <div 
              ref={trackRef}
              className="flex flex-row items-center gap-8 xl:gap-12 pr-28 will-change-transform transform-gpu"
              style={{
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
              }}
            >
              {SERVICES_GALLERY.map((service, index) => (
                <div
                  key={service.id}
                  className="w-[380px] lg:w-[420px] xl:w-[460px] shrink-0 flex flex-col group will-change-transform"
                >
                  <Link 
                    href={service.route}
                    className="block overflow-hidden rounded-2xl mb-5 bg-black/5 aspect-[16/10] relative shadow-[0_12px_32px_rgba(0,0,0,0.06)] border border-[#1A1A1A]/10 group-hover:border-[#1A1A1A]/30 transition-all duration-300"
                  >
                    <Image 
                      src={service.image} 
                      alt={service.title}
                      fill
                      priority={index < 3}
                      sizes="(max-width: 1280px) 420px, 460px"
                      className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  </Link>

                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between text-xs font-mono text-[#1A1A1A]/50 mb-1">
                      <span className={activeIndex === index ? 'text-[#1A1A1A] font-bold' : ''}>
                        {service.displayNumber}
                      </span>
                      <span className="uppercase tracking-wider text-[10px]">
                        DISCIPLINE
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#1A1A1A] group-hover:text-black transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-sm sm:text-base text-[#1A1A1A]/70 leading-relaxed line-clamp-2">
                      {service.desc}
                    </p>

                    <div className="pt-2">
                      <Link 
                        href={service.route}
                        className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.08em] uppercase text-[#1A1A1A]/80 hover:text-[#1A1A1A] border-b border-[#1A1A1A]/20 hover:border-[#1A1A1A] pb-1 transition-colors"
                      >
                        <span>EXPLORE SERVICE</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* =========================================================
          MOBILE & TABLET VIEW: SMOOTH HORIZONTAL RIGHT-SCROLL GALLERY
          (Active on < 1024px screens)
          Smooth touch momentum carousel, interactive counter & progress bar,
          and smooth navigation arrows just like the laptop experience.
          ========================================================= */}
      <div className="block lg:hidden w-full py-12 sm:py-16 px-4 sm:px-6 overflow-hidden">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.14em] uppercase text-[#1A1A1A]/50 mb-3">
              <span>✦</span>
              <span>SERVICES &amp; CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight leading-[1.08] text-[#1A1A1A] mb-3">
              Selected services <br />
              &amp; capabilities
            </h2>
            <Link 
              href="/services"
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.12em] uppercase text-[#1A1A1A] border-b border-[#1A1A1A]/30 hover:border-[#1A1A1A] pb-1 transition-all"
            >
              <span>VIEW ALL SERVICES</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Smooth Horizontal Progress & Navigation Controls */}
          <div className="flex items-center justify-between py-3 border-y border-[#1A1A1A]/10 mb-5">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-[#1A1A1A]">
                0{mobileIndex + 1} / 05
              </span>
              <div className="w-20 sm:w-28 h-[2.5px] bg-[#1A1A1A]/10 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#1A1A1A] rounded-full transition-all duration-200"
                  style={{ width: `${mobileProgress}%` }}
                />
              </div>
              <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-mono font-medium text-emerald-700 bg-emerald-500/10">
                <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                Auto
              </span>
            </div>

            {/* Smooth Scroll Navigation Buttons */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scrollMobile('left')}
                className="w-8 h-8 rounded-full border border-[#1A1A1A]/15 bg-white/70 active:bg-white flex items-center justify-center text-[#1A1A1A] active:scale-95 disabled:opacity-30 transition-all cursor-pointer shadow-sm"
                disabled={mobileIndex === 0}
                aria-label="Scroll previous service"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollMobile('right')}
                className="w-8 h-8 rounded-full border border-[#1A1A1A]/15 bg-white/70 active:bg-white flex items-center justify-center text-[#1A1A1A] active:scale-95 disabled:opacity-30 transition-all cursor-pointer shadow-sm"
                disabled={mobileIndex === SERVICES_GALLERY.length - 1}
                aria-label="Scroll next service"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Smooth Horizontal Scrolling Gallery Track with Auto-Scroll Support */}
          <div
            ref={mobileTrackRef}
            onScroll={handleMobileScroll}
            onMouseEnter={() => setIsMobilePaused(true)}
            onMouseLeave={() => setIsMobilePaused(false)}
            onTouchStart={() => setIsMobilePaused(true)}
            onTouchEnd={() => {
              setTimeout(() => setIsMobilePaused(false), 2200);
            }}
            className="flex flex-row items-stretch gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory py-2 -mx-4 px-4 scroll-smooth"
            style={{
              WebkitOverflowScrolling: 'touch',
              touchAction: 'pan-x pan-y',
            }}
          >
            {SERVICES_GALLERY.map((service) => (
              <div 
                key={service.id} 
                className="w-[270px] sm:w-[310px] shrink-0 snap-start flex flex-col p-4 rounded-3xl bg-white/80 hover:bg-white border border-[#1A1A1A]/10 shadow-sm transition-all duration-300"
              >
                {/* Image */}
                <Link 
                  href={service.route}
                  className="block overflow-hidden rounded-2xl mb-3.5 bg-black/5 aspect-[16/10] relative shadow-sm border border-[#1A1A1A]/08"
                >
                  <Image 
                    src={service.image} 
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 270px, 310px"
                    className="object-cover object-center transition-transform duration-500 active:scale-105"
                  />
                </Link>

                {/* Content */}
                <div className="flex flex-col gap-1.5 flex-1 justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono text-[#1A1A1A]/60 mb-1">
                      <span className="font-bold text-[#1A1A1A]">
                        {service.displayNumber}
                      </span>
                      <span className="uppercase tracking-wider text-[10px] text-[#1A1A1A]/40 font-mono">
                        DISCIPLINE
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-[#1A1A1A] mb-1">
                      {service.title}
                    </h3>

                    <p className="text-xs text-[#1A1A1A]/70 leading-relaxed line-clamp-2">
                      {service.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#1A1A1A]/08 mt-2">
                    <Link 
                      href={service.route}
                      className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.08em] uppercase text-[#1A1A1A] hover:text-black transition-colors"
                    >
                      <span>EXPLORE SERVICE</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Swipe indicator cue */}
          <div className="flex items-center justify-center gap-1.5 pt-4 text-[11px] text-[#1A1A1A]/50 font-mono">
            <span>Swipe right to explore services →</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesEditorialShowcase;
