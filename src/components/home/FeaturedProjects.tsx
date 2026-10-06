'use client';

import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PROJECTS } from '@/data/projects';
import { ArrowUpRight, ArrowRight, ArrowDown, Sparkles, ExternalLink, ShieldCheck } from 'lucide-react';
import { MagneticButton } from '../shared/MagneticButton';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const FeaturedProjects: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const watermarkRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
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
    const lenisUpdate = () => ScrollTrigger.update();
    if (lenis) {
      lenis.on('scroll', lenisUpdate);
    }

    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      if (!section) return;

      // 1. High-Level Parallax Curtain Entrance
      // The section rises with subtle perspective elevation over the preceding services section
      gsap.fromTo(
        section,
        { yPercent: 4 },
        {
          yPercent: 0,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'top 60%',
            scrub: 1.2,
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

      // 3. Parallax Section Header Float
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { y: 55, opacity: 0.7, scale: 0.97 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
              end: 'top 30%',
              scrub: 1,
            },
          }
        );
      }

      // 4. Asymmetric Dual-Column Differential Parallax (Desktop Only)
      if (isDesktop) {
        if (leftColRef.current) {
          gsap.fromTo(
            leftColRef.current,
            { y: 20 },
            {
              y: -40,
              ease: 'none',
              scrollTrigger: {
                trigger: section,
                start: 'top 70%',
                end: 'bottom bottom',
                scrub: 1.2,
              },
            }
          );
        }

        if (rightColRef.current) {
          gsap.fromTo(
            rightColRef.current,
            { y: 70 },
            {
              y: -90,
              ease: 'none',
              scrollTrigger: {
                trigger: section,
                start: 'top 70%',
                end: 'bottom bottom',
                scrub: 1.2,
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
          { yPercent: -8, scale: 1.14 },
          {
            yPercent: 8,
            scale: 1.14,
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
          scale: 0.95,
          yPercent: -6,
          opacity: 0.8,
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
      if (lenis) {
        lenis.off('scroll', lenisUpdate);
      }
      ctx.revert();
    };
  }, [isDesktop]);

  const renderProjectCard = (proj: typeof featured[0], idx: number) => {
    return (
      <div
        key={proj.id}
        className="group relative rounded-3xl overflow-hidden bg-white border border-[#1A1A1A]/10 hover:border-[#1A1A1A]/35 transition-all duration-500 flex flex-col justify-between shadow-[0_12px_35px_rgba(0,0,0,0.04)] hover:shadow-[0_24px_65px_rgba(0,0,0,0.09)] hover:-translate-y-2 will-change-transform"
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
            <span className="px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-white/95 text-[#1A1A1A] border border-[#1A1A1A]/15 backdrop-blur-md shadow-sm">
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
        <div className="p-5 sm:p-8 flex flex-col flex-1 justify-between bg-white">
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="trionn-heading text-2xl sm:text-3xl font-bold text-[#1E1E1E] group-hover:text-black transition-colors">
                {proj.name}
              </h3>
            </div>

            {/* Result / Stat Highlight */}
            <div className="text-xs font-semibold text-[#1A1A1A] bg-[#1A1A1A]/5 border border-[#1A1A1A]/10 px-3 py-1 rounded-full inline-flex items-center gap-2 mb-3.5 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
              <span>{proj.stat}</span>
            </div>

            {/* Description */}
            <p className="trionn-subheading text-xs sm:text-sm text-[#5E5E5E] leading-relaxed mb-6 font-normal">
              {proj.shortDesc}
            </p>
          </div>

          <div>
            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {proj.tech.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-[#1A1A1A]/5 border border-[#1A1A1A]/10 text-[#2B2B2B]"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Bottom Action Row */}
            <div className="pt-4 border-t border-[#1A1A1A]/10 flex items-center justify-between">
              <Link
                href="/work"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1A1A1A] hover:text-black transition-colors group/link min-h-[44px]"
              >
                <span>Explore Case Study</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
              </Link>

              {proj.liveUrl && (
                <a
                  href={proj.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-[#5E5E5E] hover:text-[#1A1A1A] transition-colors min-h-[44px]"
                >
                  <span>Live Deployment</span>
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
      className="relative -mt-10 sm:-mt-14 lg:-mt-20 pt-24 sm:pt-32 pb-24 sm:pb-36 bg-[#E6E6E6] rounded-t-[36px] sm:rounded-t-[48px] lg:rounded-t-[64px] border-t border-[#1A1A1A]/12 shadow-[0_-25px_60px_rgba(0,0,0,0.08)] overflow-hidden select-none font-trionn z-20 will-change-transform"
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* =========================================================
            PARALLAX SECTION HEADER: Floating Elevation & Badging
            ========================================================= */}
        <div 
          ref={headerRef}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-24 will-change-transform"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1A1A] text-white text-[11px] font-bold uppercase tracking-widest mb-5 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Audited Case Studies</span>
          </div>

          <h2 className="trionn-heading text-4xl sm:text-6xl lg:text-7xl font-bold text-[#1E1E1E] tracking-tight leading-[1.04] mb-4">
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
        <div className="hidden lg:grid grid-cols-2 gap-10 xl:gap-14 items-start">
          {/* Left Column (Cards 0 and 2) */}
          <div ref={leftColRef} className="flex flex-col gap-10 xl:gap-14 will-change-transform">
            {leftColumnProjects.map((proj, idx) => renderProjectCard(proj, idx * 2))}
          </div>

          {/* Right Column (Cards 1 and 3) — Staggered offset with differential parallax */}
          <div ref={rightColRef} className="flex flex-col gap-10 xl:gap-14 lg:mt-20 will-change-transform">
            {rightColumnProjects.map((proj, idx) => renderProjectCard(proj, idx * 2 + 1))}
          </div>
        </div>

        {/* =========================================================
            MOBILE & TABLET VIEW: CLEAN VERTICAL GRID
            ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:hidden">
          {featured.map((proj, idx) => renderProjectCard(proj, idx))}
        </div>

        {/* Bottom CTA Button Pair (TRIONN Signature Dark & Outline Pills) */}
        <div className="mt-20 sm:mt-28 flex flex-wrap items-center justify-center gap-4">
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
              className="trionn-btn-outline cursor-pointer"
            >
              <span>Complete Projects Portfolio</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>
          </MagneticButton>
        </div>

      </div>
    </section>
  );
};

export default FeaturedProjects;
