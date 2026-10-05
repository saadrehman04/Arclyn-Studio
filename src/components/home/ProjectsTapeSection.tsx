'use client';

import React, { useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface TapeCardItem {
  id: string;
  title: string;
  category: string;
  image: string;
  link: string;
}

// 11 Ultra-HD tactile industrial design and architectural showcase cards matching user sample
const TAPE_ITEMS: TapeCardItem[] = [
  {
    id: 'tape-1',
    title: 'OPUS-7 Precision Synthesizer',
    category: 'Industrial Design',
    image: '/tape/card-1-synth.jpg',
    link: '/work',
  },
  {
    id: 'tape-2',
    title: 'Monolithic Fluted Colonnade',
    category: 'Brutalist Architecture',
    image: '/tape/card-2-brutalist.jpg',
    link: '/work',
  },
  {
    id: 'tape-3',
    title: 'Minimalist Microcement Loft',
    category: 'Spatial Design',
    image: '/tape/card-3-interior.jpg',
    link: '/work',
  },
  {
    id: 'tape-4',
    title: 'Studio Workspace Environment',
    category: 'Creative Tech',
    image: '/tape/card-4-desk.jpg',
    link: '/work',
  },
  {
    id: 'tape-5',
    title: 'Rhythm:Unit 404 Digital Matrix',
    category: 'Hardware UI / UX',
    image: '/tape/card-5-bpm-display.jpg',
    link: '/work',
  },
  {
    id: 'tape-6',
    title: 'Aura-Precision Tactile Dial',
    category: 'Physical Computing',
    image: '/tape/card-6-tactile-dial.jpg',
    link: '/work',
  },
  {
    id: 'tape-7',
    title: 'Dual Mixer CNC Sounddeck',
    category: 'Acoustic Engineering',
    image: '/tape/card-7-audio-interface.jpg',
    link: '/work',
  },
  {
    id: 'tape-8',
    title: 'Audiophile Translucent Turntable',
    category: 'Consumer Electronics',
    image: '/tape/card-8-orange-turntable.jpg',
    link: '/work',
  },
  {
    id: 'tape-9',
    title: 'Twilight Brutalist Pavilion Villa',
    category: 'Modern Architecture',
    image: '/tape/card-9-dusk-villa.jpg',
    link: '/work',
  },
  {
    id: 'tape-10',
    title: 'Monolith Anodized Acoustic Tower',
    category: 'Industrial Design',
    image: '/tape/card-10-monolith-speaker.jpg',
    link: '/work',
  },
  {
    id: 'tape-11',
    title: 'Analog Modular Eurorack Console',
    category: 'Sound Architecture',
    image: '/tape/card-11-modular-console.jpg',
    link: '/work',
  },
];

export const ProjectsTapeSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const laserRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const bottomCtaRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);

  // Position and interaction state
  const offsetRef = useRef<number>(0);
  const isHoveredRef = useRef<boolean>(false);
  const isDraggingRef = useRef<boolean>(false);
  const lastXRef = useRef<number>(0);
  const dragVelocityRef = useRef<number>(0);

  // Triple items for seamless infinite cylindrical scrolling
  const displayItems = [...TAPE_ITEMS, ...TAPE_ITEMS, ...TAPE_ITEMS];

  // Card dimensions matching the sample reference
  const CARD_WIDTH = 268; // px
  const CARD_GAP = 22; // px
  const TOTAL_CARD_STRIDE = CARD_WIDTH + CARD_GAP;
  const LOOP_WIDTH = TAPE_ITEMS.length * TOTAL_CARD_STRIDE;

  // Real-time 3D transformation computation for each card along the cylindrical panoramic arc
  const updateTapePositions = useCallback(() => {
    if (!trackRef.current || !containerRef.current) return;

    // Apply auto movement or momentum drag
    if (!isDraggingRef.current) {
      if (Math.abs(dragVelocityRef.current) > 0.05) {
        offsetRef.current += dragVelocityRef.current;
        dragVelocityRef.current *= 0.95; // smooth friction
      } else {
        const targetSpeed = isHoveredRef.current ? 0.65 : 2.35;
        offsetRef.current += targetSpeed;
      }
    }

    // Wrap around smoothly for infinite tape
    if (offsetRef.current >= LOOP_WIDTH) {
      offsetRef.current -= LOOP_WIDTH;
    } else if (offsetRef.current < 0) {
      offsetRef.current += LOOP_WIDTH;
    }

    const containerWidth = containerRef.current.clientWidth;
    const centerX = containerWidth / 2;
    const cards = trackRef.current.children;

    for (let i = 0; i < cards.length; i++) {
      const card = cards[i] as HTMLElement;
      // Calculate card's current visual X relative to container
      const cardBaseLeft = i * TOTAL_CARD_STRIDE - offsetRef.current;
      const cardCenter = cardBaseLeft + CARD_WIDTH / 2;
      const distFromCenter = cardCenter - centerX;
      
      // Normalized distance from center (-1.8 to 1.8 range across viewport)
      const normDist = distFromCenter / (containerWidth * 0.46);
      const clampedNorm = Math.max(-1.8, Math.min(1.8, normDist));

      // 3D Cylindrical Geometry matching user reference screenshots
      const rotateY = clampedNorm * -28; // degrees
      const translateZ = -Math.pow(clampedNorm, 2) * 115; // px depth curve
      const translateY = Math.pow(clampedNorm, 2) * 16; // subtle arch curve
      const scale = Math.max(0.76, 1 - Math.pow(Math.abs(clampedNorm), 2) * 0.11);
      const brightness = Math.max(0.62, 1 - Math.pow(Math.abs(clampedNorm), 2) * 0.25);

      card.style.transform = `translate3d(${cardBaseLeft}px, ${translateY}px, ${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`;
      card.style.filter = `brightness(${brightness})`;
    }

    animationFrameRef.current = requestAnimationFrame(updateTapePositions);
  }, [LOOP_WIDTH, TOTAL_CARD_STRIDE]);

  useEffect(() => {
    animationFrameRef.current = requestAnimationFrame(updateTapePositions);
    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [updateTapePositions]);

  // =========================================================
  // PARALLAX SCROLL ENTRANCE ANIMATION (Requested by user)
  // Provides a luxurious curtain elevation and layered depth
  // when scrolling from the case studies section into this tape
  // =========================================================
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = (window as unknown as { __lenis?: { on: (event: string, cb: () => void) => void; off: (event: string, cb: () => void) => void } }).__lenis;
    const lenisUpdate = () => ScrollTrigger.update();
    if (lenis) {
      lenis.on('scroll', lenisUpdate);
    }

    const ctx = gsap.context(() => {
      // 1. Monolithic Curtain Elevation: section glides up smoothly with subtle corner curvature expansion
      gsap.fromTo(
        section,
        { 
          y: 90,
          borderTopLeftRadius: 64,
          borderTopRightRadius: 64,
        },
        {
          y: 0,
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'top 20%',
            scrub: 0.5,
          },
        }
      );

      // 2. Parallax Floating Header: text floats upward into view with soft opacity reveal
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { y: 70, opacity: 0.15 },
          {
            y: 0,
            opacity: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 90%',
              end: 'top 40%',
              scrub: 0.5,
            },
          }
        );
      }

      // 3. 3D Tape Container Parallax Rise & Scaling
      if (containerRef.current) {
        gsap.fromTo(
          containerRef.current,
          { y: 110, scale: 0.94, opacity: 0.4 },
          {
            y: 0,
            scale: 1,
            opacity: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              end: 'top 30%',
              scrub: 0.55,
            },
          }
        );
      }

      // 4. Central Radiant Laser Ignition
      if (laserRef.current) {
        gsap.fromTo(
          laserRef.current,
          { scaleY: 0.2, opacity: 0 },
          {
            scaleY: 1,
            opacity: 1,
            ease: 'power1.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 70%',
              end: 'top 25%',
              scrub: 0.4,
            },
          }
        );
      }

      // 5. Differential Ambient Glow Drift
      if (glowRef.current) {
        gsap.fromTo(
          glowRef.current,
          { yPercent: 30, scale: 0.8 },
          {
            yPercent: -20,
            scale: 1.2,
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          }
        );
      }

      // 6. Bottom CTA Parallax Reveal
      if (bottomCtaRef.current) {
        gsap.fromTo(
          bottomCtaRef.current,
          { y: 40, opacity: 0.3 },
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
      if (lenis) {
        lenis.off('scroll', lenisUpdate);
      }
      ctx.revert();
    };
  }, []);

  // Pointer Dragging Listeners
  const handlePointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = true;
    lastXRef.current = e.clientX;
    dragVelocityRef.current = 0;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    const delta = e.clientX - lastXRef.current;
    lastXRef.current = e.clientX;
    offsetRef.current -= delta;
    dragVelocityRef.current = -delta;
  };

  const handlePointerUp = () => {
    isDraggingRef.current = false;
  };

  return (
    <section 
      id="products-tape"
      ref={sectionRef}
      className="relative w-full -mt-10 sm:-mt-14 lg:-mt-20 pt-24 sm:pt-32 pb-24 sm:pb-36 bg-[#040406] text-white rounded-t-[36px] sm:rounded-t-[48px] lg:rounded-t-[64px] border-t border-white/10 shadow-[0_-30px_70px_rgba(0,0,0,0.7)] overflow-hidden select-none z-30 will-change-transform transform-gpu"
    >
      {/* =========================================================
          BACKGROUND AMBIENT ATMOSPHERE & SCANNER GLOW
          ========================================================= */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle top transition vignette */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#040406] via-[#040406]/85 to-transparent z-10" />

        {/* Central ambient cyan-blue radial spotlight with parallax depth drift */}
        <div 
          ref={glowRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.22)_0%,rgba(14,165,233,0.08)_45%,transparent_75%)] blur-2xl will-change-transform transform-gpu" 
        />
        
        {/* Soft bottom vignette */}
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#040406] to-transparent z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* =========================================================
            HEADER (Clean, reduced text exactly as requested by user)
            Animated with parallax reveal as you enter section
            ========================================================= */}
        <div 
          ref={headerRef}
          className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 will-change-transform transform-gpu"
        >
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] mb-4">
            Complete Project Portfolio
          </h2>

          <p className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto leading-relaxed mb-6 font-normal">
            View all our Recent Works
          </p>

          {/* Subtitle Action Pill (Matches "Get started →" pill in sample screenshot) */}
          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/20 hover:border-white/40 text-xs sm:text-sm font-medium text-white transition-all duration-300 shadow-sm hover:shadow-[0_0_25px_rgba(255,255,255,0.18)] group"
          >
            <span>Get started</span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>

      {/* =========================================================
          THE 3D CURVED TAPE / CYLINDRICAL CAROUSEL (The star of the show)
          Animated with parallax elevation and depth scaling
          ========================================================= */}
      <div 
        ref={containerRef}
        className="relative w-full h-[410px] sm:h-[480px] lg:h-[520px] overflow-hidden cursor-grab active:cursor-grabbing perspective-[1400px] will-change-transform transform-gpu"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={() => {
          handlePointerUp();
          isHoveredRef.current = false;
        }}
        onMouseEnter={() => { isHoveredRef.current = true; }}
      >
        {/* Soft edge fade masks on extreme left and right */}
        <div className="absolute inset-y-0 left-0 w-24 sm:w-44 bg-gradient-to-r from-[#040406] to-transparent pointer-events-none z-30" />
        <div className="absolute inset-y-0 right-0 w-24 sm:w-44 bg-gradient-to-l from-[#040406] to-transparent pointer-events-none z-30" />

        {/* =========================================================
            CENTRAL NEON SCANNER SPLIT & HOLOGRAPHIC LIGHT BEAM
            ========================================================= */}
        <div 
          ref={laserRef}
          className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 pointer-events-none z-20 flex flex-col items-center justify-center will-change-transform origin-center"
        >
          {/* Intense ambient radial glow behind the laser slit */}
          <div className="absolute w-[450px] sm:w-[620px] h-[360px] sm:h-[480px] bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.42)_0%,rgba(14,165,233,0.18)_42%,transparent_75%)] blur-2xl" />

          {/* Vertical Radiant White/Cyan Laser Light Slit */}
          <div className="w-[3.5px] sm:w-[4px] h-[350px] sm:h-[440px] bg-gradient-to-b from-transparent via-white 20% via-cyan-300 70% to-transparent shadow-[0_0_20px_#ffffff,0_0_40px_#38bdf8,0_0_80px_#0ea5e9,0_0_130px_#0284c7] opacity-95" />
          
          {/* Horizontal Telemetry Scanning Bars radiating across center card */}
          <div className="absolute w-56 sm:w-72 h-56 sm:h-72 pointer-events-none flex flex-col justify-between py-5">
            <div className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_#38bdf8] opacity-80" />
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-300 to-transparent shadow-[0_0_8px_#38bdf8] opacity-65" />
            <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-200 to-transparent shadow-[0_0_16px_#38bdf8] opacity-95" />
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_8px_#38bdf8] opacity-70" />
            <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-200 to-transparent shadow-[0_0_16px_#38bdf8] opacity-95" />
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_8px_#38bdf8] opacity-65" />
            <div className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-cyan-300 to-transparent shadow-[0_0_12px_#38bdf8] opacity-80" />
          </div>

          {/* Central lens glow halo */}
          <div className="absolute w-36 h-36 rounded-full bg-cyan-400/30 blur-2xl pointer-events-none" />
        </div>

        {/* 3D Track Container */}
        <div 
          ref={trackRef}
          className="absolute inset-0 preserve-3d"
        >
          {displayItems.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="absolute top-4 sm:top-6 left-0 w-[248px] sm:w-[268px] h-[348px] sm:h-[418px] rounded-[24px] sm:rounded-[28px] overflow-hidden bg-[#0c0d12] border border-white/12 shadow-[0_20px_50px_rgba(0,0,0,0.85)] hover:border-cyan-400/50 hover:shadow-[0_0_35px_rgba(56,189,248,0.35)] transition-all duration-300 group cursor-pointer will-change-transform"
              style={{
                transformStyle: 'preserve-3d',
                backfaceVisibility: 'hidden',
              }}
            >
              {/* Ultra-HD Pure Visual Card Image (Full bleed, uncompressed, razor sharp, matching sample) */}
              <div className="relative w-full h-full overflow-hidden bg-slate-950">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  unoptimized
                  priority={idx < 8}
                  sizes="(max-width: 768px) 248px, 268px"
                  className="object-cover object-center w-full h-full select-none pointer-events-none transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />

                {/* Subtle glass edge highlight */}
                <div className="absolute inset-0 rounded-[24px] sm:rounded-[28px] border border-white/10 group-hover:border-cyan-400/60 pointer-events-none transition-colors duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* =========================================================
          BOTTOM CTA: "VIEW ALL PRODUCTS"
          ========================================================= */}
      <div 
        ref={bottomCtaRef}
        className="mt-14 sm:mt-20 text-center relative z-20 will-change-transform transform-gpu"
      >
        <div className="max-w-xl mx-auto px-4 flex flex-col items-center gap-4">
          <Link
            href="/work"
            className="group relative inline-flex items-center gap-3.5 px-8 sm:px-10 py-4 rounded-full bg-white hover:bg-slate-100 text-[#050505] text-sm sm:text-base font-bold tracking-tight shadow-[0_0_35px_rgba(255,255,255,0.22)] hover:shadow-[0_0_50px_rgba(255,255,255,0.45)] transition-all duration-300 active:scale-95"
          >
            <span>View All Products</span>
            <div className="w-7 h-7 rounded-full bg-[#050505] text-white flex items-center justify-center group-hover:translate-x-1 transition-transform">
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>

          <p className="text-xs text-slate-400 flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>Curated architectural &amp; industrial product engineering systems</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsTapeSection;
