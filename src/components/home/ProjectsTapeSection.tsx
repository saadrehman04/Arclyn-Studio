'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Sparkles, MoveHorizontal } from 'lucide-react';
import { subscribeScrollTriggerUpdate } from '@/lib/scroll-trigger-bridge';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface PortfolioCard {
  id: string;
  name: string;
  subtitle: string;
  category: string;
  image: string;
  link: string;
  stat: string;
  tagBefore: string;
  tagAfter: string;
}

// 12 High-Definition Real Client Projects from Arclyn Studio
const PORTFOLIO_CARDS: PortfolioCard[] = [
  {
    id: 'cheesecake-factory',
    name: 'The Cheesecake Factory',
    subtitle: 'Culinary Flagship Experience',
    category: 'Restaurants & Dining',
    image: '/projects/cheesecake-factory.png',
    link: '/work',
    stat: 'National Dining Flagship',
    tagBefore: 'ARCHITECTURAL SCHEMATIC',
    tagAfter: 'LIVE PLATFORM',
  },
  {
    id: 'prestige-estates',
    name: 'Prestige Estates',
    subtitle: 'Ultra-Luxury Beverly Hills Portal',
    category: 'Luxury Real Estate',
    image: '/projects/real-estate.png',
    link: '/work',
    stat: 'Multi-Million Dollar Listings',
    tagBefore: 'SPATIAL SCHEMATIC',
    tagAfter: 'LIVE PORTAL',
  },
  {
    id: 'fitusion',
    name: 'Fitusion Athletics',
    subtitle: 'High-Performance Wellness',
    category: 'Gyms & Athletics',
    image: '/projects/fitusion.png',
    link: '/work',
    stat: '12k+ Active Members',
    tagBefore: 'SYSTEM BLUEPRINT',
    tagAfter: 'LIVE WORKOUT UI',
  },
  {
    id: 'pinza-pizza',
    name: 'Pinza! Artisanal Crust',
    subtitle: 'Modern Crust Pizza Engine',
    category: 'Restaurants & Dining',
    image: '/projects/pinza-showcase.png',
    link: '/work',
    stat: 'Sub-Minute Fast Ordering',
    tagBefore: 'COMMERCE PROTOTYPE',
    tagAfter: 'LIVE STOREFRONT',
  },
  {
    id: 'mark-murphy-dds',
    name: 'Mark Murphy DDS',
    subtitle: 'High-Tech Healthcare Practice',
    category: 'Medical & Dental',
    image: '/projects/mark-murphy-dds.png',
    link: '/work',
    stat: 'HIPAA-Compliant Patient Portal',
    tagBefore: 'CLINICAL SCHEMA',
    tagAfter: 'PATIENT PORTAL',
  },
  {
    id: 'vinzlu-pantry',
    name: 'Vinzlu Pantry',
    subtitle: 'Artisan Gourmet E-Commerce',
    category: 'E-Commerce',
    image: '/projects/vinzlu.png',
    link: '/work',
    stat: 'D2C Culinary Storefront',
    tagBefore: 'CATALOG WIREFRAME',
    tagAfter: 'LIVE STOREFRONT',
  },
  {
    id: 'curely-health',
    name: 'Curely Telemedicine',
    subtitle: 'AI Health & Virtual Triage',
    category: 'Healthcare & AI',
    image: '/projects/curely.png',
    link: '/work',
    stat: '<5 Min Doctor Connection',
    tagBefore: 'TELEHEALTH FLOW',
    tagAfter: 'AI VIRTUAL CLINIC',
  },
  {
    id: 'zoku-home',
    name: 'Zoku Home',
    subtitle: 'Modern Cookware Innovation',
    category: 'E-Commerce',
    image: '/projects/zokuhome.png',
    link: '/work',
    stat: 'Global D2C Direct Store',
    tagBefore: '3D PRODUCT MODEL',
    tagAfter: 'GLOBAL D2C',
  },
  {
    id: 'sweet-jesus',
    name: 'Sweet Jesus',
    subtitle: 'Outrageous Soft Serve Brand',
    category: 'Restaurants & Dining',
    image: '/projects/sweetjesus.png',
    link: '/work',
    stat: '350k+ Social Impressions',
    tagBefore: 'BRAND STORYBOARD',
    tagAfter: 'VIRAL FLAGSHIP',
  },
  {
    id: 'lakeview-resort',
    name: 'Lake View Resort',
    subtitle: 'Private Luxury Oasis Retreat',
    category: 'Hospitality & Farmhouses',
    image: '/projects/lakeview.png',
    link: '/work',
    stat: '100% Seasonal Occupancy',
    tagBefore: 'RESORT MASTERPLAN',
    tagAfter: 'BOOKING PORTAL',
  },
  {
    id: 'joyce-rey',
    name: 'Joyce Rey Estates',
    subtitle: 'Beverly Hills Icon Real Estate',
    category: 'Luxury Real Estate',
    image: '/projects/joycerey.png',
    link: '/work',
    stat: '$6B+ Career Sales Volume',
    tagBefore: 'EDITORIAL MOCKUP',
    tagAfter: 'VIP ARCHIVE',
  },
  {
    id: 'fixora-repair',
    name: 'Fixora Instant Repair',
    subtitle: 'Cinematic On-Demand Booking',
    category: 'Services & Operations',
    image: '/projects/instant-repair.png',
    link: '/work',
    stat: '5,000+ Verified Clients',
    tagBefore: 'SERVICE WORKFLOW',
    tagAfter: 'DISPATCH ENGINE',
  },
];

// Left Mask CSS: Reveals 0% -> 50% of viewport (Before / Blueprint)
const MASK_LEFT_STYLE: React.CSSProperties = {
  WebkitMaskImage: 'linear-gradient(90deg, #000 0%, #000 50%, transparent 50%, transparent 100%)',
  maskImage: 'linear-gradient(90deg, #000 0%, #000 50%, transparent 50%, transparent 100%)',
};

// Right Mask CSS: Reveals 50% -> 100% of viewport (After / Full Color)
const MASK_RIGHT_STYLE: React.CSSProperties = {
  WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, transparent 50%, #000 50%, #000 100%)',
  maskImage: 'linear-gradient(90deg, transparent 0%, transparent 50%, #000 50%, #000 100%)',
};

export const ProjectsTapeSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const leftCarouselRef = useRef<HTMLDivElement>(null);
  const rightCarouselRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const laserRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const bottomCtaRef = useRef<HTMLDivElement>(null);
  const animFrameRef = useRef<number | null>(null);
  const lastFrameTimeRef = useRef(0);
  const isTapeVisibleRef = useRef(false);

  // Dynamic responsive cylindrical geometry (compact size & height)
  const [geometry, setGeometry] = useState({
    radius: 520,
    cardWidth: 215,
    cardHeight: 295,
  });

  const [isDesktop, setIsDesktop] = useState(true);
  const mobileTapeTrackRef = useRef<HTMLDivElement>(null);
  const [isMobileTapePaused, setIsMobileTapePaused] = useState(false);

  // Fast auto-scroll for mobile projects tape
  useEffect(() => {
    if (isDesktop || isMobileTapePaused) return;

    const interval = setInterval(() => {
      const track = mobileTapeTrackRef.current;
      if (!track) return;
      const cardStep = geometry.cardWidth + 16;
      const maxScroll = track.scrollWidth - track.clientWidth;
      if (maxScroll <= 0) return;

      if (track.scrollLeft >= maxScroll - 20) {
        track.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        track.scrollBy({ left: cardStep, behavior: 'smooth' });
      }
    }, 2200);

    return () => clearInterval(interval);
  }, [isDesktop, isMobileTapePaused, geometry.cardWidth]);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkDesktop();
    window.addEventListener('resize', checkDesktop, { passive: true });
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  // Continuous rotation angle and interaction physics
  const angleRef = useRef<number>(0);
  const isDraggingRef = useRef<boolean>(false);
  const startXRef = useRef<number>(0);
  const lastXRef = useRef<number>(0);
  const velocityRef = useRef<number>(0);
  const isHoveredRef = useRef<boolean>(false);
  const hasMovedRef = useRef<boolean>(false);

  // Responsive geometry calculation (tight compact scaling)
  const updateGeometry = useCallback(() => {
    if (typeof window === 'undefined') return;
    const width = window.innerWidth;
    if (width < 420) {
      setGeometry({ radius: 290, cardWidth: 135, cardHeight: 190 });
    } else if (width < 640) {
      setGeometry({ radius: 330, cardWidth: 155, cardHeight: 215 });
    } else if (width < 1024) {
      setGeometry({ radius: 420, cardWidth: 185, cardHeight: 255 });
    } else {
      setGeometry({ radius: 520, cardWidth: 215, cardHeight: 295 });
    }
  }, []);

  useEffect(() => {
    const initialUpdate = window.requestAnimationFrame(updateGeometry);
    window.addEventListener('resize', updateGeometry);
    return () => {
      window.cancelAnimationFrame(initialUpdate);
      window.removeEventListener('resize', updateGeometry);
    };
  }, [updateGeometry]);

  // Silky 60-120fps hardware-accelerated continuous rotation loop (Desktop Only)
  useEffect(() => {
    if (!isDesktop) {
      if (animFrameRef.current !== null) {
        cancelAnimationFrame(animFrameRef.current);
        animFrameRef.current = null;
      }
      return;
    }

    const loop = (timestamp: number) => {
      if (!isTapeVisibleRef.current || document.hidden) {
        animFrameRef.current = null;
        lastFrameTimeRef.current = 0;
        return;
      }

      const frameScale = lastFrameTimeRef.current === 0
        ? 1
        : Math.min((timestamp - lastFrameTimeRef.current) / (1000 / 60), 2);
      lastFrameTimeRef.current = timestamp;

      if (!isDraggingRef.current) {
        if (Math.abs(velocityRef.current) > 0.04) {
          angleRef.current += velocityRef.current * frameScale;
          velocityRef.current *= Math.pow(0.94, frameScale);
        } else {
          const degreesPerFrame = isHoveredRef.current ? 0.32 : 0.78;
          angleRef.current += degreesPerFrame * frameScale;
        }
      }

      // Synchronize both 3D carousels in exact sub-pixel lockstep
      const rot = `rotateY(${-angleRef.current}deg)`;
      if (leftCarouselRef.current) {
        leftCarouselRef.current.style.transform = rot;
      }
      if (rightCarouselRef.current) {
        rightCarouselRef.current.style.transform = rot;
      }

      animFrameRef.current = requestAnimationFrame(loop);
    };

    const startLoop = () => {
      if (animFrameRef.current === null && !document.hidden) {
        animFrameRef.current = requestAnimationFrame(loop);
      }
    };

    const stopLoop = () => {
      if (animFrameRef.current !== null) {
        cancelAnimationFrame(animFrameRef.current);
        animFrameRef.current = null;
      }
      lastFrameTimeRef.current = 0;
    };

    const section = sectionRef.current;
    const observer = section && 'IntersectionObserver' in window
      ? new IntersectionObserver(([entry]) => {
          isTapeVisibleRef.current = entry.isIntersecting;
          if (entry.isIntersecting) startLoop();
          else stopLoop();
        }, { rootMargin: '160px 0px' })
      : null;

    if (section && observer) observer.observe(section);
    else {
      isTapeVisibleRef.current = true;
      startLoop();
    }

    const handleVisibilityChange = () => {
      if (document.hidden) stopLoop();
      else if (isTapeVisibleRef.current) startLoop();
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      observer?.disconnect();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      stopLoop();
    };
  }, [isDesktop]);

  // Parallax Scroll Entrance Animation
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = (window as unknown as { __lenis?: { on: (event: string, cb: () => void) => void; off: (event: string, cb: () => void) => void } }).__lenis;
    const unsubscribeScrollUpdate = lenis
      ? subscribeScrollTriggerUpdate(lenis, () => ScrollTrigger.update())
      : undefined;

    const ctx = gsap.context(() => {
      // 1. Elevated 3D Curtain Sheet Rise over the preceding Projects Section
      gsap.fromTo(
        section,
        {
          y: 48,
          borderTopLeftRadius: 52,
          borderTopRightRadius: 52,
        },
        {
          y: 0,
          borderTopLeftRadius: 36,
          borderTopRightRadius: 36,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'top 30%',
            scrub: 1,
          },
        }
      );

      // 2. Parallax Floating Header (Faster parallax upward drift)
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { y: 36, opacity: 0.45 },
          {
            y: 0,
            opacity: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 95%',
              end: 'top 40%',
              scrub: 1,
            },
          }
        );
      }

      // 3. Parallax Laser Light Ignition
      if (laserRef.current) {
        gsap.fromTo(
          laserRef.current,
          { scaleY: 0.05, opacity: 0 },
          {
            scaleY: 1,
            opacity: 1,
            ease: 'power1.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              end: 'top 30%',
              scrub: 0.4,
            },
          }
        );
      }

      // 4. Parallax 3D Carousel Stage Rise & Leveling
      if (containerRef.current) {
        gsap.fromTo(
          containerRef.current,
          { y: 48, opacity: 0.65 },
          {
            y: 0,
            opacity: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
              end: 'top 25%',
              scrub: 1,
            },
          }
        );
      }

      // 5. Ambient Spotlight Blooming during Entrance
      if (spotlightRef.current) {
        gsap.fromTo(
          spotlightRef.current,
          { scale: 0.9, opacity: 0.35 },
          {
            scale: 1.05,
            opacity: 1,
            ease: 'power1.out',
            scrollTrigger: {
              trigger: section,
              start: 'top bottom',
              end: 'top 30%',
              scrub: 1,
            },
          }
        );
      }

      // 6. Bottom CTA Reveal
      if (bottomCtaRef.current) {
        gsap.fromTo(
          bottomCtaRef.current,
          { y: 40, opacity: 0.4 },
          {
            y: 0,
            opacity: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: bottomCtaRef.current,
              start: 'top 95%',
              end: 'top 75%',
              scrub: 0.5,
            },
          }
        );
      }
    }, sectionRef);

    return () => {
      unsubscribeScrollUpdate?.();
      ctx.revert();
    };
  }, []);

  // Pointer Interaction Handlers (Mouse & Touch Dragging)
  const handlePointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = true;
    hasMovedRef.current = false;
    startXRef.current = e.clientX;
    lastXRef.current = e.clientX;
    velocityRef.current = 0;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    const delta = e.clientX - lastXRef.current;
    if (Math.abs(e.clientX - startXRef.current) > 5) {
      hasMovedRef.current = true;
    }
    lastXRef.current = e.clientX;
    // Map horizontal pixel motion to cylindrical degrees
    angleRef.current -= delta * 0.22;
    velocityRef.current = -delta * 0.22;
  };

  const handlePointerUp = () => {
    isDraggingRef.current = false;
  };

  // Render Card Content for the "Before" (Left Mask) state
  const renderBeforeCard = (card: PortfolioCard, index: number) => {
    const cardAngle = index * (360 / PORTFOLIO_CARDS.length);
    return (
      <div
        key={`before-${card.id}`}
        className="absolute overflow-hidden rounded-[20px] bg-[#070c14] border border-cyan-500/25 shadow-[0_20px_45px_rgba(0,0,0,0.85)] cursor-pointer group"
        style={{
          width: `${geometry.cardWidth}px`,
          height: `${geometry.cardHeight}px`,
          left: `-${geometry.cardWidth / 2}px`,
          top: `-${geometry.cardHeight / 2}px`,
          transform: `rotateY(${cardAngle}deg) translateZ(${geometry.radius}px)`,
          transformStyle: 'preserve-3d',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
        }}
      >
        {/* Grayscale Wireframe Filtered Visual */}
        <div className="relative w-full h-full overflow-hidden filter grayscale contrast-125 brightness-90">
          <Image
            src={card.image}
            alt={card.name}
            fill
            sizes="(max-width: 420px) 135px, (max-width: 640px) 155px, (max-width: 1024px) 185px, 215px"
            className="object-cover object-center w-full h-full select-none pointer-events-none"
          />

          {/* Cybernetic Tech Blueprint Grid Overlay */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-25"
            style={{
              backgroundImage: 'linear-gradient(rgba(56, 189, 248, 0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(56, 189, 248, 0.25) 1px, transparent 1px)',
              backgroundSize: '16px 16px',
            }}
          />

          {/* Subtle cyan tint scrim */}
          <div className="absolute inset-0 bg-cyan-950/20 mix-blend-color pointer-events-none" />

          {/* Corner Tech Crosshairs */}
          <div className="absolute top-2 left-2 text-[9px] font-mono text-cyan-400/80 pointer-events-none">
            +
          </div>
          <div className="absolute top-2 right-2 text-[9px] font-mono text-cyan-400/80 pointer-events-none">
            +
          </div>

          {/* Top Badge: Blueprint Schematic */}
          <div className="absolute top-3 left-3 z-10">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-black/80 border border-cyan-500/40 text-[9px] sm:text-[10px] font-mono font-medium text-cyan-400 tracking-wider backdrop-blur-md">
              <span className="w-1 h-1 rounded-full bg-cyan-400" />
              {card.tagBefore}
            </span>
          </div>

          {/* Bottom Info Gradient */}
          <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 bg-gradient-to-t from-black via-black/85 to-transparent flex flex-col justify-end">
            <p className="text-[10px] font-mono text-cyan-400/90 tracking-widest uppercase mb-0.5">
              {card.category}
            </p>
            <h3 className="text-xs sm:text-sm font-bold text-slate-200 tracking-tight leading-snug line-clamp-1 font-mono">
              {card.name}
            </h3>
          </div>
        </div>
      </div>
    );
  };

  // Render Card Content for the "After" (Right Mask) state
  const renderAfterCard = (card: PortfolioCard, index: number) => {
    const cardAngle = index * (360 / PORTFOLIO_CARDS.length);
    return (
      <div
        key={`after-${card.id}`}
        className="absolute overflow-hidden rounded-[20px] bg-[#0c0d12] border border-white/15 shadow-[0_22px_55px_rgba(0,0,0,0.9)] hover:border-cyan-400/60 hover:shadow-[0_0_35px_rgba(56,189,248,0.35)] transition-colors duration-300 cursor-pointer group"
        style={{
          width: `${geometry.cardWidth}px`,
          height: `${geometry.cardHeight}px`,
          left: `-${geometry.cardWidth / 2}px`,
          top: `-${geometry.cardHeight / 2}px`,
          transform: `rotateY(${cardAngle}deg) translateZ(${geometry.radius}px)`,
          transformStyle: 'preserve-3d',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
        }}
      >
        {/* Full-Color Vibrant Live Production UI */}
        <div className="relative w-full h-full overflow-hidden filter saturate-[1.3] contrast-105">
          <Image
            src={card.image}
            alt={card.name}
            fill
            sizes="(max-width: 420px) 135px, (max-width: 640px) 155px, (max-width: 1024px) 185px, 215px"
            className="object-cover object-center w-full h-full select-none pointer-events-none transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* Top Badge: Live System */}
          <div className="absolute top-3 left-3 z-10">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black/75 border border-emerald-400/40 text-[9px] sm:text-[10px] font-semibold text-emerald-300 tracking-wide backdrop-blur-md shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {card.tagAfter}
            </span>
          </div>

          {/* Top Right Category Pill */}
          <div className="absolute top-3 right-3 z-10">
            <span className="inline-flex px-2 py-0.5 rounded-full bg-black/60 border border-white/10 text-[9px] font-medium text-slate-300 backdrop-blur-md">
              {card.category}
            </span>
          </div>

          {/* Bottom Info Scrim */}
          <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 bg-gradient-to-t from-black via-black/80 to-transparent flex flex-col justify-end">
            <h3 className="text-xs sm:text-sm font-bold text-white tracking-tight leading-snug line-clamp-1 mb-0.5 group-hover:text-cyan-300 transition-colors">
              {card.name}
            </h3>
            <p className="text-[10px] text-slate-300 line-clamp-1 flex items-center justify-between">
              <span>{card.stat}</span>
              <span className="text-cyan-400 font-semibold group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5">
                View →
              </span>
            </p>
          </div>

          {/* Subtle Glass Border Highlight */}
          <div className="absolute inset-0 rounded-[20px] border border-white/10 group-hover:border-cyan-400/50 pointer-events-none transition-colors duration-300" />
        </div>
      </div>
    );
  };

  return (
    <section
      id="products-tape"
      ref={sectionRef}
      className="relative w-full -mt-10 sm:-mt-16 lg:-mt-24 pt-14 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 lg:pb-20 bg-[#040406] text-white rounded-t-[36px] sm:rounded-t-[48px] lg:rounded-t-[60px] border-t border-white/15 shadow-[0_-30px_100px_rgba(0,0,0,0.95),0_0_80px_rgba(56,189,248,0.08)] overflow-hidden select-none z-30 will-change-transform transform-gpu"
    >
      {/* =========================================================
          BACKGROUND AMBIENT ATMOSPHERE & SCANNER GLOW
          ========================================================= */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle top transition vignette */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#040406] via-[#040406]/85 to-transparent z-10" />

        {/* Central ambient cyan-blue radial spotlight */}
        <div ref={spotlightRef} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[450px] sm:h-[550px] bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.18)_0%,rgba(14,165,233,0.06)_45%,transparent_75%)] blur-3xl will-change-transform transform-gpu" />

        {/* Soft bottom vignette */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#040406] to-transparent z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* =========================================================
            HEADER (Clean reduced typography, compact spacing)
            ========================================================= */}
        <div
          ref={headerRef}
          className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 will-change-transform transform-gpu"
        >
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-[11px] font-medium mb-2.5 backdrop-blur-md">
            <Sparkles className="w-3 h-3 text-cyan-400" />
            <span>Interactive 3D Before / After Showcase</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.1] mb-2.5">
            Complete Project Portfolio
          </h2>

          <p className="text-sm sm:text-base text-slate-400 max-w-lg mx-auto leading-relaxed mb-4 font-normal">
            View all our Recent Works
          </p>

          {/* Subtitle Action Pill */}
          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/[0.06] hover:bg-white/[0.14] border border-white/20 hover:border-white/40 text-xs font-medium text-white transition-all duration-300 shadow-sm hover:shadow-[0_0_20px_rgba(255,255,255,0.18)] group"
          >
            <span>Get started</span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* =========================================================
          THE 3D BEFORE / AFTER REVOLVING CYLINDRICAL CAROUSEL
          Matching Framer University Architecture with Exact Mask Split
          Compact height: 320px on mobile, 370px on tablet, 410px on desktop
          ========================================================= */}
      {isDesktop ? (
        <div
          ref={containerRef}
          className="relative w-full h-[320px] sm:h-[370px] lg:h-[410px] overflow-hidden cursor-grab active:cursor-grabbing will-change-transform transform-gpu"
          style={{
            perspective: '1600px',
            perspectiveOrigin: '50% 50%',
            touchAction: 'pan-y',
          }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={() => {
            handlePointerUp();
            isHoveredRef.current = false;
          }}
          onMouseEnter={() => {
            isHoveredRef.current = true;
          }}
        >
          {/* Soft Edge Vignettes on Extreme Left and Right of Viewport */}
          <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#040406] to-transparent pointer-events-none z-30" />
          <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#040406] to-transparent pointer-events-none z-30" />

          {/* =========================================================
              LAYER 1: LEFT MASK (BEFORE STATE: WIREFRAME / BLUEPRINT)
              Masked from 0% to 50% across horizontal screen width
              ========================================================= */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={MASK_LEFT_STYLE}
          >
            <div
              ref={leftCarouselRef}
              className="absolute top-1/2 left-1/2 w-0 h-0 pointer-events-auto will-change-transform"
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              {PORTFOLIO_CARDS.map((card, idx) => renderBeforeCard(card, idx))}
            </div>
          </div>

          {/* =========================================================
              LAYER 2: RIGHT MASK (AFTER STATE: VIBRANT LIVE PRODUCTION)
              Masked from 50% to 100% across horizontal screen width
              ========================================================= */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={MASK_RIGHT_STYLE}
          >
            <div
              ref={rightCarouselRef}
              className="absolute top-1/2 left-1/2 w-0 h-0 pointer-events-auto will-change-transform"
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              {PORTFOLIO_CARDS.map((card, idx) => renderAfterCard(card, idx))}
            </div>
          </div>

          {/* =========================================================
              CENTER SCANNER / OPTICAL LASER SPLIT (AT EXACT 50% DIVIDER)
              Proportionately scaled to match compact card height
              ========================================================= */}
          <div
            ref={laserRef}
            className="absolute inset-y-0 left-1/2 -translate-x-1/2 pointer-events-none z-20 flex flex-col items-center justify-center will-change-transform origin-center"
          >
            {/* Layer A: Radial Ambient Aperture Bloom */}
            <div className="absolute w-[280px] sm:w-[420px] h-[260px] sm:h-[340px] bg-[radial-gradient(ellipse_at_center,rgba(0,234,255,0.42)_0%,rgba(27,183,250,0.18)_42%,transparent_75%)] blur-2xl" />

            {/* Layer B: Center Color Top 2 */}
            <div className="absolute w-[24px] h-[240px] sm:h-[310px] rounded-full bg-gradient-to-b from-[#00eaff]/15 via-[#00eaff] to-[#00eaff]/15 blur-[6px] opacity-40" />

            {/* Layer C: Center Color Top 1 */}
            <div className="absolute w-[18px] h-[210px] sm:h-[270px] rounded-full bg-gradient-to-b from-[#1bb7fa]/25 via-[#1bb7fa] to-[#1bb7fa]/25 blur-[3px] opacity-65" />

            {/* Layer D: Center White Top 3 */}
            <div className="absolute w-[16px] h-[220px] sm:h-[280px] rounded-full bg-gradient-to-b from-transparent via-white 46% to-transparent blur-[2px] opacity-85" />

            {/* Layer E: Center White Top 4 (Razor-Sharp White/Cyan Core Beam) */}
            <div className="w-[2.5px] sm:w-[3px] h-[280px] sm:h-[340px] rounded-full bg-gradient-to-b from-transparent via-white 25% via-cyan-300 70% to-transparent shadow-[0_0_12px_#ffffff,0_0_25px_#00eaff,0_0_50px_#0284c7] opacity-95" />

            {/* Layer F: Horizontal Telemetry HUD Scanlines radiating across center */}
            <div className="absolute w-44 sm:w-56 h-44 sm:h-56 pointer-events-none flex flex-col justify-between py-4">
              <div className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_8px_#38bdf8] opacity-75" />
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-300 to-transparent shadow-[0_0_6px_#38bdf8] opacity-60" />
              <div className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-cyan-200 to-transparent shadow-[0_0_12px_#38bdf8] opacity-95" />
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_6px_#38bdf8] opacity-70" />
              <div className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-cyan-200 to-transparent shadow-[0_0_12px_#38bdf8] opacity-95" />
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_6px_#38bdf8] opacity-60" />
              <div className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-cyan-300 to-transparent shadow-[0_0_8px_#38bdf8] opacity-75" />
            </div>
          </div>

          {/* Drag Helper Pill Indicator */}
          <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 pointer-events-none z-20 flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black/70 border border-white/10 text-[10px] text-slate-400 backdrop-blur-md">
            <MoveHorizontal className="w-3 h-3 text-cyan-400 animate-pulse" />
            <span>Drag left or right to rotate</span>
          </div>
        </div>
      ) : (
        /* =========================================================
            LIGHTWEIGHT MOBILE/TABLET SWIPEABLE CAROUSEL
            Single-pass 12-card horizontal native momentum track
            No 24-card 3D duplication, no dual CSS masks, no RAF loop
            ========================================================= */
        <div ref={containerRef} className="relative w-full overflow-hidden px-4 sm:px-6">
          <div 
            ref={mobileTapeTrackRef}
            onMouseEnter={() => setIsMobileTapePaused(true)}
            onMouseLeave={() => setIsMobileTapePaused(false)}
            onTouchStart={() => setIsMobileTapePaused(true)}
            onTouchEnd={() => {
              setTimeout(() => setIsMobileTapePaused(false), 2200);
            }}
            className="flex items-center gap-4 overflow-x-auto no-scrollbar py-3 px-1 snap-x snap-mandatory scroll-smooth"
            style={{
              WebkitOverflowScrolling: 'touch',
              touchAction: 'pan-x pan-y',
            }}
          >
            {PORTFOLIO_CARDS.map((card) => (
              <Link
                key={`mobile-${card.id}`}
                href={card.link}
                className="relative shrink-0 snap-center w-[215px] sm:w-[250px] h-[295px] sm:h-[330px] rounded-[20px] bg-[#0c0d12] border border-white/15 overflow-hidden shadow-[0_16px_36px_rgba(0,0,0,0.85)] flex flex-col justify-between"
              >
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.name}
                    fill
                    sizes="(max-width: 640px) 215px, 250px"
                    className="object-cover object-center w-full h-full"
                    loading="lazy"
                  />

                  {/* Top Badge: Live System */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black/80 border border-emerald-400/40 text-[9px] font-semibold text-emerald-300 tracking-wide backdrop-blur-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {card.tagAfter}
                    </span>
                  </div>

                  {/* Top Right Category Pill */}
                  <div className="absolute top-3 right-3 z-10">
                    <span className="inline-flex px-2 py-0.5 rounded-full bg-black/70 border border-white/10 text-[9px] font-medium text-slate-300 backdrop-blur-md">
                      {card.category}
                    </span>
                  </div>

                  {/* Bottom Info Scrim */}
                  <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black via-black/85 to-transparent flex flex-col justify-end">
                    <h3 className="text-xs sm:text-sm font-bold text-white tracking-tight leading-snug line-clamp-1 mb-0.5">
                      {card.name}
                    </h3>
                    <p className="text-[10px] text-slate-300 line-clamp-1 flex items-center justify-between">
                      <span>{card.stat}</span>
                      <span className="text-cyan-400 font-semibold flex items-center gap-0.5">
                        View →
                      </span>
                    </p>
                  </div>

                  {/* Subtle Border Highlight */}
                  <div className="absolute inset-0 rounded-[20px] border border-white/10 pointer-events-none" />
                </div>
              </Link>
            ))}
          </div>

          {/* Swipe Helper Pill Indicator */}
          <div className="flex items-center justify-center gap-1.5 pt-3 text-[10px] text-slate-400">
            <MoveHorizontal className="w-3 h-3 text-cyan-400 animate-pulse" />
            <span>Swipe horizontally to browse projects</span>
          </div>
        </div>
      )}

      {/* =========================================================
          BOTTOM CTA: "VIEW ALL PRODUCTS" (Compact spacing)
          ========================================================= */}
      <div
        ref={bottomCtaRef}
        className="mt-8 sm:mt-12 text-center relative z-20 will-change-transform transform-gpu"
      >
        <div className="max-w-xl mx-auto px-4 flex flex-col items-center gap-3">
          <Link
            href="/work"
            className="group relative inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-white hover:bg-slate-100 text-[#050505] text-xs sm:text-sm font-bold tracking-tight shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] transition-all duration-300 active:scale-95"
          >
            <span>View All Products</span>
            <div className="w-6 h-6 rounded-full bg-[#050505] text-white flex items-center justify-center group-hover:translate-x-1 transition-transform">
              <ArrowRight className="w-3 h-3" />
            </div>
          </Link>

          <p className="text-[11px] text-slate-400 flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>Curated architectural &amp; industrial product engineering systems</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsTapeSection;
