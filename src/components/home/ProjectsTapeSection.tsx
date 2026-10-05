'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight, Sparkles, ExternalLink } from 'lucide-react';
import { PROJECTS, Project } from '@/data/projects';

export const ProjectsTapeSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);

  // Position and interaction state
  const offsetRef = useRef<number>(0);
  const isHoveredRef = useRef<boolean>(false);
  const isDraggingRef = useRef<boolean>(false);
  const startXRef = useRef<number>(0);
  const lastXRef = useRef<number>(0);
  const dragVelocityRef = useRef<number>(0);

  // Active hover preview card
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  // Double the list of projects for an uninterrupted infinite cylindrical loop
  const displayProjects = [...PROJECTS, ...PROJECTS];

  // Card dimensions
  const CARD_WIDTH = 255; // px
  const CARD_GAP = 18; // px
  const TOTAL_CARD_STRIDE = CARD_WIDTH + CARD_GAP;
  const HALF_LOOP_WIDTH = PROJECTS.length * TOTAL_CARD_STRIDE;

  // Real-time 3D transformation computation for each card along the cylindrical panoramic arc
  const updateTapePositions = useCallback(() => {
    if (!trackRef.current || !containerRef.current) return;

    // Apply auto movement or momentum drag
    if (!isDraggingRef.current) {
      if (Math.abs(dragVelocityRef.current) > 0.05) {
        offsetRef.current += dragVelocityRef.current;
        dragVelocityRef.current *= 0.95; // smooth friction
      } else {
        const targetSpeed = isHoveredRef.current ? 0.35 : 0.95;
        offsetRef.current += targetSpeed;
      }
    }

    // Wrap around smoothly for infinite tape
    if (offsetRef.current >= HALF_LOOP_WIDTH) {
      offsetRef.current -= HALF_LOOP_WIDTH;
    } else if (offsetRef.current < 0) {
      offsetRef.current += HALF_LOOP_WIDTH;
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
      
      // Normalized distance from center (-1.5 to 1.5 range across viewport)
      const normDist = distFromCenter / (containerWidth * 0.48);
      const clampedNorm = Math.max(-1.5, Math.min(1.5, normDist));

      // 3D Cylindrical Geometry matching user reference screenshots:
      // - Left cards angle strongly inward (positive Y rotation, curved back in Z)
      // - Center cards face forward (0 deg Y rotation, closest to viewer in Z)
      // - Right cards angle strongly inward (negative Y rotation, curved back in Z)
      const rotateY = clampedNorm * -30; // degrees
      const translateZ = -Math.pow(clampedNorm, 2) * 85; // px depth curve
      const scale = Math.max(0.82, 1 - Math.pow(Math.abs(clampedNorm), 2) * 0.12);
      const brightness = Math.max(0.68, 1 - Math.pow(Math.abs(clampedNorm), 2) * 0.22);

      card.style.transform = `translate3d(${cardBaseLeft}px, 0, ${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`;
      card.style.filter = `brightness(${brightness})`;
    }

    animationFrameRef.current = requestAnimationFrame(updateTapePositions);
  }, [HALF_LOOP_WIDTH, TOTAL_CARD_STRIDE]);

  useEffect(() => {
    animationFrameRef.current = requestAnimationFrame(updateTapePositions);
    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [updateTapePositions]);

  // Mouse & Touch Dragging Listeners
  const handlePointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = true;
    startXRef.current = e.clientX;
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
      className="relative w-full -mt-10 sm:-mt-14 lg:-mt-20 pt-24 sm:pt-32 pb-24 sm:pb-36 bg-[#040406] text-white rounded-t-[36px] sm:rounded-t-[48px] lg:rounded-t-[64px] border-t border-white/10 shadow-[0_-30px_70px_rgba(0,0,0,0.65)] overflow-hidden select-none z-30"
    >
      {/* =========================================================
          BACKGROUND AMBIENT ATMOSPHERE & SCANNER GLOW
          ========================================================= */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle top transition vignette */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#040406] via-[#040406]/85 to-transparent z-10" />

        {/* Central ambient cyan-blue radial spotlight behind the cylinder */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[550px] bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.14)_0%,rgba(14,165,233,0.05)_45%,transparent_72%)]" />
        
        {/* Soft bottom vignette for seamless unpinning */}
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#040406] to-transparent z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* =========================================================
            HEADER (Matches reference layout & aesthetic)
            ========================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/90 text-[11px] font-semibold tracking-wider uppercase mb-5 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Complete Production Portfolio</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-4">
            Engineered Systems Built <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              for Measurable Scale
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto leading-relaxed mb-6 font-normal">
            Turn complex workflows into high-performance digital platforms, autonomous AI agents, and enterprise web infrastructure.
          </p>

          {/* Subtitle Action Pill (Matches &quot;Get started &rarr;&quot; pill in screenshot) */}
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 text-xs sm:text-sm font-medium text-white transition-all duration-300 shadow-sm hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] group"
          >
            <span>Get Started</span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>

      {/* =========================================================
          THE 3D CURVED TAPE / CYLINDRICAL CAROUSEL (The star of the show)
          ========================================================= */}
      <div 
        ref={containerRef}
        className="relative w-full h-[390px] sm:h-[460px] lg:h-[500px] overflow-hidden cursor-grab active:cursor-grabbing perspective-[1400px]"
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
            (Matches the illuminated center slit in the user's reference)
            ========================================================= */}
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 pointer-events-none z-20 flex flex-col items-center justify-center">
          {/* Vertical Radiant White/Cyan Laser Light Slit */}
          <div className="w-[3px] h-[350px] sm:h-[440px] bg-gradient-to-b from-transparent via-white 25% via-cyan-300 70% to-transparent shadow-[0_0_25px_#38bdf8,0_0_50px_#0ea5e9,0_0_80px_#0284c7] opacity-95" />
          
          {/* Horizontal Telemetry Scanning Bars radiating across center card */}
          <div className="absolute w-48 sm:w-64 h-48 sm:h-64 pointer-events-none flex flex-col justify-between py-5 opacity-45">
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_8px_#38bdf8]" />
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_8px_#38bdf8]" />
            <div className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-cyan-300 to-transparent shadow-[0_0_12px_#38bdf8]" />
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_8px_#38bdf8]" />
            <div className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-cyan-300 to-transparent shadow-[0_0_12px_#38bdf8]" />
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_8px_#38bdf8]" />
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_8px_#38bdf8]" />
          </div>

          {/* Central lens glow halo */}
          <div className="absolute w-32 h-32 rounded-full bg-cyan-400/25 blur-2xl pointer-events-none" />
        </div>

        {/* 3D Track Container */}
        <div 
          ref={trackRef}
          className="absolute inset-0 preserve-3d"
        >
          {displayProjects.map((project, idx) => {
            const isHovered = activeProject?.id === project.id;
            return (
              <div
                key={`${project.id}-${idx}`}
                className="absolute top-4 sm:top-6 left-0 w-[245px] sm:w-[265px] h-[340px] sm:h-[415px] rounded-[22px] overflow-hidden bg-[#0c0d12] border border-white/12 shadow-[0_15px_35px_rgba(0,0,0,0.6)] transition-all duration-300 group cursor-pointer will-change-transform"
                style={{
                  transformStyle: 'preserve-3d',
                  backfaceVisibility: 'hidden',
                }}
                onMouseEnter={() => setActiveProject(project)}
                onMouseLeave={() => setActiveProject(null)}
              >
                {/* Product Image Cover (Vibrant & Crisp matching reference) */}
                <div className="relative w-full h-full overflow-hidden bg-slate-950">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(max-width: 768px) 245px, 265px"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    priority={idx < 6}
                  />

                  {/* Clean Top Category Badge */}
                  <div className="absolute top-3.5 left-3.5 z-10">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-black/70 backdrop-blur-md text-white/90 border border-white/15 shadow-sm">
                      {project.category}
                    </span>
                  </div>

                  {/* Elegant Gradient Scrim at Bottom for Legibility */}
                  <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/95 via-black/50 to-transparent pointer-events-none" />

                  {/* Bottom Info Overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-4 z-10 flex flex-col justify-end">
                    <h3 className="text-sm sm:text-base font-bold text-white line-clamp-1 group-hover:text-cyan-300 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-[11px] text-slate-300 line-clamp-2 mt-1 leading-snug font-normal opacity-85 group-hover:opacity-100 transition-opacity">
                      {project.shortDesc}
                    </p>

                    {/* Hover Link Action */}
                    <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <span className="text-[10px] font-semibold text-cyan-400">View Product Details</span>
                      <ExternalLink className="w-3 h-3 text-cyan-400" />
                    </div>
                  </div>

                  {/* Subtle Card Border Highlight on Hover */}
                  <div className="absolute inset-0 border border-white/0 group-hover:border-cyan-400/50 rounded-[22px] transition-colors pointer-events-none" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* =========================================================
          BOTTOM CTA: &quot;VIEW ALL PRODUCTS&quot;
          (Explicitly requested: &quot;and below it should be mentioned view all products&quot;)
          ========================================================= */}
      <div className="mt-14 sm:mt-20 text-center relative z-20">
        <div className="max-w-xl mx-auto px-4 flex flex-col items-center gap-4">
          <Link
            href="/work"
            className="group relative inline-flex items-center gap-3.5 px-8 sm:px-10 py-4 sm:py-4.5 rounded-full bg-white hover:bg-slate-100 text-[#050505] text-sm sm:text-base font-bold tracking-tight shadow-[0_0_35px_rgba(255,255,255,0.22)] hover:shadow-[0_0_50px_rgba(255,255,255,0.4)] transition-all duration-300 active:scale-95"
          >
            <span>View All Products</span>
            <div className="w-7 h-7 rounded-full bg-[#050505] text-white flex items-center justify-center group-hover:translate-x-1 transition-transform">
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>

          <p className="text-xs text-slate-400 flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>24+ production systems with live verifiable metrics &amp; architecture audits</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsTapeSection;
