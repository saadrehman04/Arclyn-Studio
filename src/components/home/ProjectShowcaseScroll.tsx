'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ExternalLink, 
  ArrowUpRight, 
  ShieldCheck 
} from 'lucide-react';
import { SHOWCASE_PROJECTS } from './HeroParallaxScrollScene';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const ProjectShowcaseScroll: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridLayerRef = useRef<HTMLDivElement>(null);
  const orbLayerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const [activeProject, setActiveProject] = useState(SHOWCASE_PROJECTS[0]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;

      // 1. Subtle parallax & scale-down on the sticky hero behind this section
      const heroFrame = document.getElementById('hero-sticky-frame');
      if (heroFrame) {
        gsap.fromTo(
          heroFrame,
          { scale: 1, filter: 'brightness(1)', opacity: 1 },
          {
            scale: 0.94,
            filter: 'brightness(0.35)',
            opacity: 0.35,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'top top',
              scrub: true,
            },
          }
        );
      }

      // 2. Parallax on grid and ambient orbs
      if (gridLayerRef.current) {
        gsap.to(gridLayerRef.current, {
          yPercent: -15,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      }

      if (orbLayerRef.current) {
        gsap.to(orbLayerRef.current, {
          yPercent: -20,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      }

      // 3. Smooth entrance for card and header
      if (headerRef.current) {
        gsap.from(headerRef.current, {
          y: 35,
          opacity: 0.85,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            end: 'top 35%',
            scrub: 1,
          },
        });
      }

      if (cardRef.current) {
        gsap.from(cardRef.current, {
          y: 45,
          opacity: 0.85,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            end: 'top 25%',
            scrub: 1,
          },
        });
      }
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      id="project-showcase-scene"
      className="relative z-10 w-full min-h-screen bg-[#070707] rounded-t-[36px] sm:rounded-t-[48px] lg:rounded-t-[56px] border-t border-white/15 shadow-[0_-25px_60px_rgba(0,0,0,0.95)] overflow-hidden will-change-transform select-none"
    >
      {/* Background Matrix Grid matching Hero aesthetic */}
      <div
        ref={gridLayerRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-[20%] h-[140%]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse at center, #000 20%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, #000 20%, transparent 75%)',
        }}
      />

      {/* Ambient Lighting matching Cinematic Stage */}
      <div
        ref={orbLayerRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-[15%] h-[130%]"
      >
        <div className="absolute top-[6%] left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06)_0%,transparent_70%)]" />
        <div className="absolute bottom-[10%] right-0 w-96 h-96 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]" />
        <div className="absolute bottom-[25%] left-0 w-80 h-80 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 lg:px-8 pt-12 sm:pt-16 pb-16 sm:pb-24 flex flex-col items-center justify-start">
        
        {/* Section Header */}
        <div
          ref={headerRef}
          className="shrink-0 text-center max-w-2xl mx-auto mb-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/15 text-neutral-300 text-[11px] sm:text-xs font-mono uppercase tracking-wider mb-2.5 shadow-[0_2px_12px_rgba(255,255,255,0.04)]">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
            </span>
            <ShieldCheck className="w-3.5 h-3.5 text-neutral-300" />
            <span>VERIFIED PRODUCTION PLATFORMS</span>
          </div>

          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Audited Systems.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-400">
              Verifiable Scale.
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-neutral-400 font-normal mt-2 max-w-xl mx-auto">
            Live architectures deployed on edge infrastructure with sub-second latency and zero technical debt.
          </p>
        </div>

        {/* Project Selector Filter Tabs */}
        <div className="shrink-0 flex items-center justify-center gap-2 sm:gap-3 my-4 overflow-x-auto no-scrollbar py-1 max-w-full">
          {SHOWCASE_PROJECTS.map((project) => {
            const isActive = activeProject.id === project.id;
            return (
              <button
                key={project.id}
                onClick={() => setActiveProject(project)}
                type="button"
                className={`relative px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-300 shrink-0 cursor-pointer flex items-center gap-2 border ${
                  isActive
                    ? 'bg-white text-black font-semibold border-white shadow-[0_2px_15px_rgba(255,255,255,0.2)] scale-[1.02]'
                    : 'bg-white/[0.04] hover:bg-white/[0.08] border-white/10 text-neutral-400 hover:text-white'
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                    isActive ? 'bg-black' : 'bg-neutral-600'
                  }`}
                />
                <span>{project.title}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Browser Window Mockup Card */}
        <div
          ref={cardRef}
          className="w-full max-w-[1300px] mx-auto mt-4 rounded-2xl sm:rounded-3xl border border-white/15 bg-[#0a0a0a] shadow-[0_25px_60px_rgba(0,0,0,0.95)] flex flex-col overflow-hidden will-change-transform h-[460px] sm:h-[540px] md:h-[620px] xl:h-[700px]"
        >
          {/* Top Browser Bar */}
          <div className="shrink-0 px-3.5 sm:px-4 py-2 border-b border-white/10 bg-[#060606] flex items-center justify-between gap-3">
            <div className="flex items-center gap-1.5 shrink-0">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
            </div>

            <div className="flex-1 max-w-xs sm:max-w-sm md:max-w-md mx-auto flex items-center justify-center gap-2 px-3 py-0.5 rounded-full bg-black/60 border border-white/10 text-[11px] font-mono text-neutral-300 truncate">
              <span className="text-neutral-400 text-xs">🔒</span>
              <span className="truncate">https://{activeProject.displayUrl}</span>
            </div>

            <div className="shrink-0 flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono font-medium text-neutral-300 bg-white/[0.06] border border-white/12 px-2.5 py-0.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="hidden sm:inline">Verified Production</span>
              <span className="sm:hidden">Live</span>
            </div>
          </div>

          {/* Browser Main Stage with Active Project Image */}
          <div className="relative w-full flex-1 bg-[#050505] overflow-hidden">
            {SHOWCASE_PROJECTS.map((project) => (
              <div
                key={project.id}
                className={`absolute inset-0 transition-opacity duration-300 ${
                  activeProject.id === project.id ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                }`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority={project.id === 'cheesecake-factory'}
                  sizes="(max-width: 1280px) 100vw, 1200px"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />
              </div>
            ))}

            {/* Centered Explore Overlay Button */}
            <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
              <a
                href={activeProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="pointer-events-auto px-5 py-2.5 rounded-full bg-white hover:bg-neutral-200 text-black font-semibold border border-white flex items-center gap-2 shadow-[0_4px_25px_rgba(255,255,255,0.25)] transition-all hover:scale-105 group/btn cursor-pointer"
                title={`Open ${activeProject.title}`}
              >
                <span className="text-xs sm:text-sm font-semibold tracking-wide">Explore Live Platform</span>
                <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Bottom Project Metrics & Launch Bar */}
          <div className="shrink-0 px-3 sm:px-5 py-2.5 border-t border-white/10 bg-[#060606] flex items-center justify-between gap-3">
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 min-w-0">
                <span className="text-xs sm:text-sm font-bold text-white tracking-tight truncate">
                  {activeProject.title}
                </span>
                <span className="text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.06] text-neutral-300 border border-white/10 shrink-0 whitespace-nowrap">
                  {activeProject.badge}
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-neutral-400 font-normal truncate mt-0.5">
                {activeProject.metric}
              </p>
            </div>

            <div className="hidden lg:flex items-center gap-3 shrink-0">
              {activeProject.stats.map((s, idx) => (
                <div key={idx} className="text-right px-2.5 py-0.5 rounded-md bg-white/[0.03] border border-white/10">
                  <div className="text-[9px] text-neutral-500 uppercase font-mono">{s.label}</div>
                  <div className="text-xs font-bold text-white font-mono">{s.value}</div>
                </div>
              ))}
            </div>

            <a
              href={activeProject.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 rounded-full bg-white hover:bg-neutral-200 text-black text-xs font-bold inline-flex items-center gap-1.5 transition-all hover:scale-105 shrink-0 cursor-pointer shadow-[0_2px_12px_rgba(255,255,255,0.2)]"
            >
              <span>Launch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProjectShowcaseScroll;
