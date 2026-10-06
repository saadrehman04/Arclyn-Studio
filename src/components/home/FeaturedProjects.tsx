'use client';

import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PROJECTS } from '@/data/projects';
import { ArrowUpRight, ArrowRight, ArrowDown, Sparkles, ExternalLink } from 'lucide-react';
import { MagneticButton } from '../shared/MagneticButton';
import { subscribeScrollTriggerUpdate } from '@/lib/scroll-trigger-bridge';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const FeaturedProjects: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const watermarkRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const cardImagesRef = useRef<(HTMLDivElement | null)[]>([]);

  const [isDesktop, setIsDesktop] = useState(false);

  // Top 4 flagship verified case studies
  const featured = PROJECTS.filter((p) => p.featured).slice(0, 4);
  const leftColumnProjects = [featured[0], featured[2]].filter(Boolean);
  const rightColumnProjects = [featured[1], featured[3]].filter(Boolean);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = (window as unknown as { __lenis?: { on: (event: string, cb: () => void) => void; off: (event: string, cb: () => void) => void } }).__lenis;
    const unsubscribeScrollUpdate = lenis
      ? subscribeScrollTriggerUpdate(lenis, () => ScrollTrigger.update())
      : undefined;

    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      if (!section) return;

      // 1. High-Level Parallax Curtain Entrance
      // The section rises with subtle perspective elevation over the preceding services section
      gsap.fromTo(
        section,
        { y: 32 },
        {
          y: 0,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'top 65%',
            scrub: 1,
          },
        }
      );

      // 2. Parallax Backdrop & Typographic Watermark Drift
      if (backdropRef.current) {
        gsap.to(backdropRef.current, {
          yPercent: -15,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      }

      if (watermarkRef.current) {
        gsap.to(watermarkRef.current, {
          yPercent: -25,
          xPercent: -5,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      }

      // 3. Synchronized editorial unmask as the selected works section enters view
      const reveal = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 95%',
          end: 'top 25%',
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      if (headerRef.current) {
        reveal.fromTo(
          headerRef.current,
          { y: 28, opacity: 0.5 },
          { y: 0, opacity: 1, ease: 'power2.out' },
          0
        );
      }

      if (contentRef.current) {
        reveal.fromTo(
          contentRef.current,
          {
            y: 36,
            opacity: 0.55,
          },
          {
            y: 0,
            opacity: 1,
            ease: 'power2.out',
          },
          0.05
        );
      }

      // 4. Asymmetric Dual-Column Differential Parallax (Desktop Only)
      if (isDesktop) {
        if (leftColRef.current) {
          gsap.fromTo(
            leftColRef.current,
            { y: 12 },
            {
              y: -24,
              ease: 'none',
              scrollTrigger: {
                trigger: section,
                start: 'top 70%',
                end: 'bottom bottom',
                scrub: 1.5,
              },
            }
          );
        }

        if (rightColRef.current) {
          gsap.fromTo(
            rightColRef.current,
            { y: 36 },
            {
              y: -36,
              ease: 'none',
              scrollTrigger: {
                trigger: section,
                start: 'top 70%',
                end: 'bottom bottom',
                scrub: 1.5,
              },
            }
          );
        }
      }

      // 5. Inner Card Photo Window Parallax (Creates physical depth inside each card)
      cardImagesRef.current.forEach((imgWrap) => {
        if (!imgWrap) return;
        const innerImg = imgWrap.querySelector('img');
        if (!innerImg) return;

        gsap.fromTo(
          innerImg,
          { yPercent: -4, scale: 1.06 },
          {
            yPercent: 4,
            scale: 1.06,
            ease: 'none',
            scrollTrigger: {
              trigger: imgWrap,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          }
        );
      });

      // 6. Reciprocal Exit Parallax Handover to Complete Projects Portfolio (#products-tape)
      // When the user scrolls towards the Complete Projects Portfolio, this section gently recedes in depth
      const tapeSection = document.getElementById('products-tape');
      if (tapeSection) {
        gsap.to(section, {
          scale: 0.985,
          yPercent: -2,
          opacity: 0.96,
          ease: 'power1.inOut',
          scrollTrigger: {
            trigger: tapeSection,
            start: 'top bottom',
            end: 'top 30%',
            scrub: 0.8,
          },
        });
      }
    }, sectionRef);

    return () => {
      unsubscribeScrollUpdate?.();
      ctx.revert();
    };
  }, [isDesktop]);

  const renderProjectCard = (proj: typeof featured[0], idx: number) => {
    return (
      <div
        key={proj.id}
        className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#1A1A1A]/10 bg-white shadow-[0_12px_35px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-2 hover:border-[#1A1A1A]/35 hover:shadow-[0_24px_65px_rgba(0,0,0,0.09)] will-change-transform"
      >
        {/* Image Preview Container with Inner Parallax Window */}
        <div 
          ref={(el) => { cardImagesRef.current[idx] = el; }}
          className="relative aspect-[16/10] w-full overflow-hidden bg-[#ECECEC] border-b border-[#1A1A1A]/10 will-change-transform"
        >
          <Image
            src={proj.image}
            alt={proj.name}
            fill
            className="object-cover object-top will-change-transform transition-transform duration-700 ease-out group-hover:scale-[1.18]"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          
          {/* Subtle natural vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10 opacity-60 group-hover:opacity-30 transition-opacity pointer-events-none" />

          {/* Category Pill */}
          <div className="absolute top-5 left-5 z-10">
            <span className="max-w-[calc(100%-1rem)] truncate rounded-sm border border-[#1A1A1A]/15 bg-white/95 px-2 py-1 text-[9px] font-mono font-semibold text-[#1A1A1A] sm:max-w-none sm:rounded-full sm:px-3.5 sm:py-1.5 sm:text-xs sm:backdrop-blur-md sm:shadow-sm">
              {proj.category}
            </span>
          </div>

          {/* Live External Button */}
          {proj.liveUrl && (
            <div className="absolute top-5 right-5 z-10">
              <a
                href={proj.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-[#1A1A1A] hover:bg-black text-white flex items-center justify-center border border-white/20 backdrop-blur-md transition-all duration-300 hover:scale-110 shadow-md group/btn"
                title={`Open Live ${proj.name}`}
              >
                <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          )}
        </div>

        {/* Content Block */}
        <div className="flex flex-1 flex-col justify-between bg-white p-4 sm:p-6">
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="trionn-heading line-clamp-2 text-sm font-bold leading-tight text-[#1E1E1E] transition-colors group-hover:text-black sm:text-xl lg:text-2xl">
                {proj.name}
              </h3>
            </div>

            {/* Result / Stat Highlight */}
            <div className="mb-2 inline-flex max-w-full items-center gap-1.5 border border-[#1A1A1A]/10 bg-[#1A1A1A]/5 px-2 py-1 text-[9px] font-semibold leading-tight text-[#1A1A1A] sm:mb-3.5 sm:gap-2 sm:rounded-full sm:px-3 sm:text-xs">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600 animate-pulse" />
              <span>{proj.stat}</span>
            </div>

            {/* Description */}
            <p className="trionn-subheading mb-3 line-clamp-3 text-[10px] font-normal leading-snug text-[#5E5E5E] sm:mb-5 sm:text-xs sm:leading-relaxed lg:text-sm">
              {proj.shortDesc}
            </p>
          </div>

          <div>
            {/* Tech Stack Tags */}
            <div className="mb-3 flex flex-wrap gap-1 sm:mb-5 sm:gap-1.5 lg:gap-2">
              {proj.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-sm border border-[#1A1A1A]/10 bg-[#1A1A1A]/5 px-1.5 py-0.5 text-[8px] font-mono font-medium text-[#2B2B2B] sm:rounded-md sm:px-2 sm:py-1 sm:text-[10px] lg:text-[11px]"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Bottom Action Row */}
            <div className="flex flex-wrap items-center justify-between gap-x-1 border-t border-[#1A1A1A]/10 pt-2 sm:pt-3">
              <Link
                href="/work"
                className="inline-flex min-h-9 items-center gap-1 text-[9px] font-bold uppercase text-[#1A1A1A] transition-colors group/link hover:text-black sm:min-h-11 sm:gap-2 sm:text-xs sm:tracking-wider"
              >
                <span className="sm:hidden">Explore</span>
                <span className="hidden sm:inline">Explore Case Study</span>
                <ArrowRight className="h-3 w-3 transition-transform group-hover/link:translate-x-1 sm:h-3.5 sm:w-3.5" />
              </Link>

              {proj.liveUrl && (
                <a
                  href={proj.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-9 items-center gap-1 text-[9px] font-mono text-[#5E5E5E] transition-colors hover:text-[#1A1A1A] sm:min-h-11 sm:gap-1.5 sm:text-xs"
                >
                  <span className="sm:hidden">Live</span>
                  <span className="hidden sm:inline">Live Deployment</span>
                  <ExternalLink className="w-3 h-3 text-[#1A1A1A]" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section 
      id="work" 
      ref={sectionRef}
      className="relative -mt-10 sm:-mt-14 lg:-mt-20 pt-16 sm:pt-24 lg:pt-32 pb-16 sm:pb-24 lg:pb-36 bg-[#E6E6E6] rounded-t-[28px] sm:rounded-t-[48px] lg:rounded-t-[64px] border-t border-[#1A1A1A]/12 shadow-[0_-25px_60px_rgba(0,0,0,0.08)] overflow-hidden select-none font-trionn z-20 will-change-transform"
    >
      {/* =========================================================
          PARALLAX DEPTH LAYER: Ambient Lighting & Editorial Watermark
          ========================================================= */}
      <div 
        ref={backdropRef}
        aria-hidden="true" 
        className="pointer-events-none absolute inset-x-0 -top-20 h-[140%] overflow-hidden will-change-transform"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[450px] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.85)_0%,transparent_70%)]" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.025)_0%,transparent_70%)]" />
        <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_0%,transparent_70%)]" />
        
        {/* Subtle Architectural Drift Watermark */}
        <div 
          ref={watermarkRef}
          className="absolute top-1/4 -left-10 text-[18vw] font-bold text-[#1A1A1A]/[0.025] tracking-tighter whitespace-nowrap select-none pointer-events-none uppercase font-helvetica-neue will-change-transform"
        >
          SELECTED PRODUCTIONS
        </div>
      </div>

      <div ref={contentRef} className="relative z-10 mx-auto max-w-6xl px-4 will-change-transform sm:px-6 lg:px-8">
        
        {/* =========================================================
            PARALLAX SECTION HEADER: Floating Elevation & Badging
            ========================================================= */}
        <div 
          ref={headerRef}
          className="mx-auto mb-7 max-w-3xl text-center will-change-transform sm:mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1A1A] text-white text-[11px] font-bold uppercase tracking-widest mb-5 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Audited Case Studies</span>
          </div>

          <h2 className="trionn-heading mb-3 text-3xl font-bold leading-[1.04] tracking-tight text-[#1E1E1E] sm:text-5xl lg:text-6xl">
            Selected works
          </h2>

          <p className="trionn-subheading text-sm sm:text-base text-[#5E5E5E] max-w-lg mx-auto leading-relaxed font-normal">
            A snapshot of our verified production platforms and measurable client impact.
          </p>
        </div>

        {/* =========================================================
            DESKTOP VIEW: ASYMMETRIC DUAL-COLUMN PARALLAX GRID
            (Column 1 & Column 2 move at differential parallax speeds)
            ========================================================= */}
        <div className="hidden items-start grid-cols-2 gap-8 lg:grid xl:gap-10">
          {/* Left Column (Cards 0 and 2) */}
          <div ref={leftColRef} className="flex flex-col gap-8 will-change-transform xl:gap-10">
            {leftColumnProjects.map((proj, idx) => renderProjectCard(proj, idx * 2))}
          </div>

          {/* Right Column (Cards 1 and 3) — Staggered offset with differential parallax */}
          <div ref={rightColRef} className="mt-16 flex flex-col gap-8 will-change-transform xl:mt-20 xl:gap-10">
            {rightColumnProjects.map((proj, idx) => renderProjectCard(proj, idx * 2 + 1))}
          </div>
        </div>

        {/* =========================================================
            MOBILE & TABLET VIEW: CLEAN VERTICAL GRID
            ========================================================= */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:hidden">
          {featured.map((proj, idx) => renderProjectCard(proj, idx))}
        </div>

        {/* Bottom CTA Button Pair (TRIONN Signature Dark & Outline Pills) */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:mt-14 lg:mt-20">
          <MagneticButton>
            <Link
              href="/contact"
              className="trionn-btn-dark"
            >
              <span>Let&apos;s Talk</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </MagneticButton>

          <MagneticButton>
            <a
              href="#products-tape"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('products-tape');
                const lenis = (window as unknown as { __lenis?: { scrollTo: (t: HTMLElement, o?: { duration?: number }) => void } }).__lenis;
                if (lenis && el) {
                  lenis.scrollTo(el, { duration: 1.2 });
                } else if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="trionn-btn-outline cursor-pointer !px-4 !py-2 !text-[0.68rem]"
            >
              <span>View All Projects</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>
          </MagneticButton>
        </div>

      </div>
    </section>
  );
};

export default FeaturedProjects;
