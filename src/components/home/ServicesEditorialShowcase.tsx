'use client';

import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ArrowRight, 
  ArrowUpRight, 
  Sparkles, 
  ShieldCheck, 
  Cpu, 
  Globe, 
  Smartphone, 
  Layers, 
  Database, 
  TrendingUp, 
  CheckCircle2,
  Terminal,
  Activity,
  Code2,
  MoveRight
} from 'lucide-react';
import { MagneticButton } from '../shared/MagneticButton';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ServiceSceneData {
  id: string;
  number: string;
  category: string;
  titleLine1: string;
  titleLine2: string;
  titleGradient: string;
  desc: string;
  capabilities: string[];
  slug: string;
  ctaText: string;
  techCoords: string;
  accentColor: string;
  bgGlow: string;
  align: 'left-text' | 'right-text';
  visualType: 'ai-agents' | 'web-scale' | 'mobile-product' | 'product-design' | 'saas-platform' | 'growth-engine';
}

const SERVICE_SCENES: ServiceSceneData[] = [
  {
    id: 'ai-automation',
    number: '01',
    category: '01 / 06 — AI & AUTONOMOUS SYSTEMS',
    titleLine1: 'INTELLIGENCE',
    titleLine2: 'INTO ACTION.',
    titleGradient: 'from-cyan-400 via-sky-300 to-indigo-400',
    desc: 'We architect self-orchestrating agent swarms, deterministic LangGraph pipelines, and private neural workflows that transform raw enterprise operations into autonomous, sub-second execution.',
    capabilities: [
      'Autonomous Multi-Agent Swarms & Tool Execution',
      'Deterministic LangGraph State Workflows',
      'Private Vector DBs & Local Hybrid RAG',
      'Sub-Second Edge LLM & Multimodal Pipelines'
    ],
    slug: 'ai-agent-development',
    ctaText: 'Explore Agent Architecture',
    techCoords: 'SYS // AGENTS: 08 ACTIVE • LATENCY: 38ms • DIM: 1536',
    accentColor: '#06B6D4',
    bgGlow: 'rgba(6,182,212,0.12)',
    align: 'left-text',
    visualType: 'ai-agents',
  },
  {
    id: 'web-engineering',
    number: '02',
    category: '02 / 06 — HIGH-CONCURRENCY WEB SYSTEMS',
    titleLine1: 'SUB-SECOND LATENCY.',
    titleLine2: 'INFINITE SCALE.',
    titleGradient: 'from-emerald-400 via-teal-300 to-cyan-400',
    desc: 'Bespoke Next.js platforms, ultra-fast headless e-commerce, and high-concurrency web systems engineered with zero technical debt, sub-250ms edge rendering, and 100/100 Core Web Vitals.',
    capabilities: [
      'Next.js 15 App Router & Edge Streaming SSR',
      'Headless Commerce & Dynamic Catalogues',
      '100/100 Core Web Vitals Guaranteed',
      'Distributed Postgres & Edge Multi-Region Caching'
    ],
    slug: 'website-ecommerce-development',
    ctaText: 'View Web Architecture',
    techCoords: 'EDGE // REGION: GLOBAL IAD1 • LCP: 0.38s • CLS: 0.00',
    accentColor: '#10B981',
    bgGlow: 'rgba(16,185,129,0.12)',
    align: 'right-text',
    visualType: 'web-scale',
  },
  {
    id: 'mobile-engineering',
    number: '03',
    category: '03 / 06 — NATIVE & CROSS-PLATFORM MOBILE',
    titleLine1: 'TACTILE PRECISION.',
    titleLine2: 'NATIVE FEEL.',
    titleGradient: 'from-purple-400 via-pink-300 to-amber-300',
    desc: 'Ultra-responsive iOS and Android applications designed with buttery 120 FPS gestural physics, offline-first encrypted synchronization, and biometric-grade security.',
    capabilities: [
      'React Native & Native Swift / Kotlin Interop',
      '120 FPS Spring Gestural Physics Engine',
      'Offline-First Encrypted SQLite Local Sync',
      'Apple Pay, In-App Purchases & Biometric Auth'
    ],
    slug: 'mobile-app-development',
    ctaText: 'Explore Mobile Architecture',
    techCoords: 'DEVICE // FRAME: 8.3ms (120Hz) • OFFLINE SYNC: OK',
    accentColor: '#A855F7',
    bgGlow: 'rgba(168,85,247,0.12)',
    align: 'left-text',
    visualType: 'mobile-product',
  },
  {
    id: 'product-design',
    number: '04',
    category: '04 / 06 — UI/UX & DIGITAL DESIGN SYSTEMS',
    titleLine1: 'SYSTEMATIZED BEAUTY.',
    titleLine2: 'INTENTIONAL FORM.',
    titleGradient: 'from-sky-400 via-cyan-300 to-indigo-300',
    desc: 'We build design systems that scale without breaking. Multi-state interface components, typographic rhythm, and conversion-engineered interaction models that feel alive in the user\'s hands.',
    capabilities: [
      'Multi-Brand Design Tokens & Figma Systems',
      'Micro-Interactions & Fluid Motion Choreography',
      'Behavioral UX & User Journey Mapping',
      'A/B Audited Conversion Rate Optimization'
    ],
    slug: 'website-ecommerce-development',
    ctaText: 'View Design Systems',
    techCoords: 'TOKENS // COLOR: HSL • SPACING: 4pt • GRID: 12-COL',
    accentColor: '#38BDF8',
    bgGlow: 'rgba(56,189,248,0.12)',
    align: 'right-text',
    visualType: 'product-design',
  },
  {
    id: 'saas-development',
    number: '05',
    category: '05 / 06 — ENTERPRISE SAAS ARCHITECTURES',
    titleLine1: 'MULTI-TENANT POWER.',
    titleLine2: 'MARKET VELOCITY.',
    titleGradient: 'from-indigo-400 via-purple-300 to-pink-400',
    desc: 'End-to-end SaaS platforms engineered for rapid scale: automated multi-tenancy, metered Stripe billing pipelines, zero-trust role-based access, and enterprise compliance ready on day one.',
    capabilities: [
      'Row-Level Security & Multi-Tenant DB Sharding',
      'Stripe Usage-Based & Metered Billing Engines',
      'Fine-Grained RBAC & OAuth2 / Enterprise SSO',
      'Automated CI/CD & Zero-Downtime Deployments'
    ],
    slug: 'custom-software-saas-development',
    ctaText: 'Explore SaaS Engineering',
    techCoords: 'CLUSTER // 3 REGIONS • SLA: 99.99% • API P95: 14ms',
    accentColor: '#818CF8',
    bgGlow: 'rgba(129,140,248,0.12)',
    align: 'left-text',
    visualType: 'saas-platform',
  },
  {
    id: 'digital-growth',
    number: '06',
    category: '06 / 06 — ANALYTICS & REVENUE ACCELERATION',
    titleLine1: 'HIGH-SIGNAL CONVERSION.',
    titleLine2: 'COMPOUNDING REACH.',
    titleGradient: 'from-amber-400 via-orange-300 to-rose-400',
    desc: 'Data-driven growth infrastructure: deterministic conversion tracking, algorithmic multi-touch attribution, and full-funnel optimization engineered to systematically scale client revenue.',
    capabilities: [
      'Server-Side Event Tracking (CAPI / GA4)',
      'Predictive Cohort LTV & Churn Modeling',
      'High-Converting Funnel Architecture',
      'Technical Pitch & Investment Blueprints'
    ],
    slug: 'partner-program',
    ctaText: 'Explore Growth Engineering',
    techCoords: 'GROWTH // ATTRIBUTION: 100% • ROAS: 3.8X • MRR: +340%',
    accentColor: '#F59E0B',
    bgGlow: 'rgba(245,158,11,0.12)',
    align: 'right-text',
    visualType: 'growth-engine',
  },
];

export const ServicesEditorialShowcase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinViewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // HUD direct DOM elements for zero-re-render 120 FPS updates
  const hudNumberRef = useRef<HTMLSpanElement>(null);
  const hudCategoryRef = useRef<HTMLSpanElement>(null);
  const hudProgressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Connect Lenis with GSAP ScrollTrigger
    const lenis = (window as unknown as { __lenis?: { on: (event: string, cb: () => void) => void; off: (event: string, cb: () => void) => void } }).__lenis;
    const lenisUpdate = () => ScrollTrigger.update();
    if (lenis) {
      lenis.on('scroll', lenisUpdate);
    }

    const ctx = gsap.context(() => {
      if (!containerRef.current || !pinViewportRef.current || !trackRef.current) return;

      const track = trackRef.current;
      const getScrollAmount = () => -(track.scrollWidth - window.innerWidth);

      // Master Horizontal Scroll Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: () => `+=${track.scrollWidth - window.innerWidth}`,
          pin: pinViewportRef.current,
          anticipatePin: 1,
          scrub: 0.8,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            // Update HUD progress bar directly on GPU
            if (hudProgressBarRef.current) {
              hudProgressBarRef.current.style.transform = `scaleX(${self.progress})`;
            }

            // Determine active scene (0 to 6)
            const sceneCount = SERVICE_SCENES.length;
            const progress = self.progress;
            const activeIndex = Math.min(
              sceneCount,
              Math.max(1, Math.round(progress * sceneCount) + 1)
            );
            
            const currentScene = SERVICE_SCENES[activeIndex - 1] || SERVICE_SCENES[0];

            if (hudNumberRef.current && hudNumberRef.current.textContent !== currentScene.number) {
              hudNumberRef.current.textContent = currentScene.number;
            }
            if (hudCategoryRef.current && hudCategoryRef.current.textContent !== currentScene.category) {
              hudCategoryRef.current.textContent = currentScene.category;
            }
          },
        },
      });

      // 1. Main Track Translation
      tl.to(track, {
        x: getScrollAmount,
        ease: 'none',
      });

      // 2. Multi-Plane Parallax Layering:
      // A. Oversized Watermark Numbers: Drift slower (counter-shift)
      const numbers = gsap.utils.toArray<HTMLElement>('.parallax-scene-number');
      if (numbers.length > 0) {
        tl.to(
          numbers,
          {
            x: 160,
            ease: 'none',
          },
          0
        );
      }

      // B. Visual Compositions: Lead slightly faster across the horizontal canvas
      const visuals = gsap.utils.toArray<HTMLElement>('.parallax-scene-visual');
      if (visuals.length > 0) {
        tl.to(
          visuals,
          {
            x: -120,
            ease: 'none',
          },
          0
        );
      }

      // C. Background Ambient Atmosphere: Extremely slow drift
      const bgGlows = gsap.utils.toArray<HTMLElement>('.parallax-scene-glow');
      if (bgGlows.length > 0) {
        tl.to(
          bgGlows,
          {
            x: -60,
            ease: 'none',
          },
          0
        );
      }
    }, containerRef);

    return () => {
      if (lenis) {
        lenis.off('scroll', lenisUpdate);
      }
      ctx.revert();
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      id="services"
      className="relative bg-[#03050C] text-white select-none"
    >
      {/* ─────────────────────────────────────────────────────────────
          STICKY FULL-SCREEN PINNED VIEWPORT
          ───────────────────────────────────────────────────────────── */}
      <div 
        ref={pinViewportRef}
        className="w-full h-screen relative overflow-hidden flex flex-col justify-between"
      >
        {/* Global Subtle Architectural Grid Backdrop */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
          <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:64px_64px] opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#03050C] via-transparent to-[#03050C] opacity-80" />
        </div>

        {/* ─────────────────────────────────────────────────────────────
            TOP PERSISTENT HUD: Section Tracker & Category Banner
            ───────────────────────────────────────────────────────────── */}
        <div className="relative z-30 pt-6 sm:pt-8 px-6 sm:px-12 lg:px-20 flex items-center justify-between pointer-events-none">
          <div className="inline-flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-[11px] sm:text-xs font-mono tracking-widest text-slate-400 uppercase">
              PRACTICES // ARCLYN STUDIO
            </span>
            <span className="text-slate-600">/</span>
            <span 
              ref={hudCategoryRef} 
              className="hidden sm:inline text-[11px] sm:text-xs font-mono font-medium text-cyan-300 tracking-wider uppercase truncate max-w-md"
            >
              01 / 06 — AI &amp; AUTONOMOUS SYSTEMS
            </span>
          </div>

          <div className="inline-flex items-center gap-3 text-xs font-mono text-slate-400">
            <span className="text-slate-500">SCENE</span>
            <span ref={hudNumberRef} className="text-sm font-bold text-[#FBFCDB]">01</span>
            <span className="text-slate-600">/</span>
            <span>06</span>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            HORIZONTAL MOVING SCENES TRACK
            ───────────────────────────────────────────────────────────── */}
        <div 
          ref={trackRef}
          className="relative z-10 flex items-center h-full will-change-transform transform-gpu"
        >
          {/* =========================================================
              SCENE 0: EDITORIAL INTRO PROLOGUE
              ========================================================= */}
          <div className="w-[90vw] sm:w-[85vw] lg:w-[75vw] xl:w-[70vw] shrink-0 h-full flex flex-col justify-center px-6 sm:px-12 lg:px-20 relative">
            <div className="max-w-3xl">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-cyan-400/30 text-cyan-300 text-xs font-mono font-semibold uppercase tracking-wider mb-6 backdrop-blur-xl">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>FULL-STACK &amp; AI ARCHITECTURES</span>
              </div>

              {/* Massive Editorial Headline */}
              <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight text-white leading-[1.02] mb-6">
                ENGINEERED FOR <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400">
                  UNFAIR ADVANTAGE.
                </span>
              </h2>

              {/* Supporting Copy */}
              <p className="text-base sm:text-lg lg:text-xl text-slate-300 font-normal leading-relaxed mb-8 max-w-2xl">
                We reject generic agency templates and bloated frameworks. Every practice is engineered by senior architects to deliver verifiable speed, rock-solid uptime, and undeniable competitive edge.
              </p>

              {/* Scroll Callout */}
              <div className="inline-flex items-center gap-3 text-xs font-mono text-cyan-300 uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>SCROLL DOWN TO EXPLORE PRACTICES</span>
                <MoveRight className="w-4 h-4 text-cyan-400 animate-pulse" />
              </div>
            </div>
          </div>

          {/* =========================================================
              SCENES 1 TO 6: EDITORIAL SERVICE SCENES
              ========================================================= */}
          {SERVICE_SCENES.map((scene) => (
            <div
              key={scene.id}
              className="w-screen shrink-0 h-full relative flex items-center justify-center px-6 sm:px-12 lg:px-20 overflow-hidden"
            >
              {/* Internal Parallax Background Radial Aura */}
              <div 
                className="parallax-scene-glow absolute inset-0 pointer-events-none -z-10 overflow-hidden transform-gpu"
                aria-hidden="true"
              >
                <div 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full blur-[160px] opacity-70"
                  style={{ backgroundColor: scene.bgGlow }}
                />
              </div>

              {/* Oversized Parallax Background Watermark Number */}
              <div 
                className="parallax-scene-number absolute -bottom-10 sm:-bottom-16 right-4 sm:right-16 text-[150px] sm:text-[230px] lg:text-[320px] font-display font-black text-white/[0.035] leading-none pointer-events-none select-none z-0 transform-gpu"
                aria-hidden="true"
              >
                {scene.number}
              </div>

              {/* Scene Content Layout: Two-column Asymmetric Editorial Grid */}
              <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                
                {/* ─────────────────────────────────────────────────────
                    COLUMN A: TYPOGRAPHY & EDITORIAL CONTENT
                    ───────────────────────────────────────────────────── */}
                <div 
                  className={`flex flex-col justify-center ${
                    scene.align === 'right-text' 
                      ? 'lg:col-span-6 lg:order-2 lg:pl-6' 
                      : 'lg:col-span-6 lg:order-1 lg:pr-6'
                  }`}
                >
                  {/* Category Eyebrow & Tech Coordinates */}
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-wider text-cyan-300">
                      {scene.category}
                    </span>
                    <span className="text-slate-600 hidden sm:inline">•</span>
                    <span className="text-[10px] sm:text-[11px] font-mono text-slate-400 hidden sm:inline">
                      {scene.techCoords}
                    </span>
                  </div>

                  {/* Huge Editorial Headline */}
                  <h3 className="font-display text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.04] mb-5">
                    {scene.titleLine1} <br />
                    <span className={`text-transparent bg-clip-text bg-gradient-to-r ${scene.titleGradient}`}>
                      {scene.titleLine2}
                    </span>
                  </h3>

                  {/* Concise Editorial Description */}
                  <p className="text-sm sm:text-base lg:text-lg text-slate-300 font-normal leading-relaxed mb-6 max-w-xl">
                    {scene.desc}
                  </p>

                  {/* Selected Capabilities Typographic List (No identical card tags) */}
                  <div className="space-y-2.5 mb-8">
                    {scene.capabilities.map((cap) => (
                      <div key={cap} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                        <span className="text-cyan-400 font-mono font-bold mt-0.5">+</span>
                        <span className="font-normal text-slate-200">{cap}</span>
                      </div>
                    ))}
                  </div>

                  {/* Understated Editorial Link */}
                  <div>
                    <MagneticButton strength={0.25}>
                      <Link
                        href={`/services/${scene.slug}`}
                        className="inline-flex items-center gap-3 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 hover:border-cyan-400/50 transition-all duration-300 group shadow-lg"
                      >
                        <span>{scene.ctaText}</span>
                        <ArrowUpRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </Link>
                    </MagneticButton>
                  </div>
                </div>

                {/* ─────────────────────────────────────────────────────
                    COLUMN B: ART-DIRECTED VISUAL COMPOSITION
                    ───────────────────────────────────────────────────── */}
                <div 
                  className={`parallax-scene-visual relative w-full flex items-center justify-center transform-gpu ${
                    scene.align === 'right-text' 
                      ? 'lg:col-span-6 lg:order-1' 
                      : 'lg:col-span-6 lg:order-2'
                  }`}
                >
                  <ServiceVisualComposition type={scene.visualType} />
                </div>

              </div>
            </div>
          ))}

          {/* =========================================================
              SCENE 7: CONCLUDING BESPOKE ARCHITECTURES FINALE
              ========================================================= */}
          <div className="w-[90vw] sm:w-[85vw] lg:w-[75vw] xl:w-[70vw] shrink-0 h-full flex flex-col justify-center px-6 sm:px-12 lg:px-20 relative">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-400/30 text-purple-300 text-xs font-mono font-semibold uppercase tracking-wider mb-6 backdrop-blur-xl">
                <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
                <span>BESPOKE TECHNICAL SCOPE</span>
              </div>

              <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight text-white leading-[1.02] mb-6">
                HAVE A UNIQUE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-300 to-amber-300">
                  TECHNICAL VISION?
                </span>
              </h2>

              <p className="text-base sm:text-lg lg:text-xl text-slate-300 font-normal leading-relaxed mb-8 max-w-2xl">
                We partner with visionary founders and enterprise teams to engineer proprietary AI engines, high-concurrency cloud infrastructure, and mission-critical applications tailored to your specific roadmap.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-9 max-w-xl">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Dedicated Senior Architect</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Fixed-Price Milestone Delivery</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>100% IP &amp; Source Ownership</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Sub-Second Latency Guarantee</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <MagneticButton strength={0.3}>
                  <Link
                    href="/contact"
                    className="px-8 py-4 rounded-full text-sm font-bold text-white btn-pill-primary inline-flex items-center gap-2.5 shadow-xl shadow-purple-600/30"
                  >
                    <span>Start Your Project</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </MagneticButton>

                <MagneticButton strength={0.2}>
                  <Link
                    href="/work"
                    className="px-8 py-4 rounded-full text-sm font-semibold text-slate-200 btn-pill-secondary inline-flex items-center gap-2 hover:text-white"
                  >
                    <span>Explore Verified Work</span>
                    <ArrowUpRight className="w-4 h-4 opacity-60" />
                  </Link>
                </MagneticButton>
              </div>
            </div>
          </div>

        </div>

        {/* ─────────────────────────────────────────────────────────────
            BOTTOM PERSISTENT HUD: Scrub Progress Track
            ───────────────────────────────────────────────────────────── */}
        <div className="relative z-30 pb-6 sm:pb-8 px-6 sm:px-12 lg:px-20 flex items-center justify-between pointer-events-none">
          <div className="text-[10px] sm:text-xs font-mono text-slate-500 uppercase tracking-widest">
            INTERACTIVE PRACTICE SHOWCASE
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[10px] font-mono text-slate-400">01</span>
            <div className="w-32 sm:w-48 h-1 rounded-full bg-white/10 overflow-hidden relative">
              <div 
                ref={hudProgressBarRef}
                className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500 origin-left scale-x-0 will-change-transform"
              />
            </div>
            <span className="text-[10px] font-mono text-slate-400">06</span>
          </div>
        </div>

      </div>
    </section>
  );
};

/**
 * Art-directed bespoke visual compositions for each of the 6 practices
 * Built without generic dashboard cards — each represents authentic creative engineering.
 */
const ServiceVisualComposition: React.FC<{ type: ServiceSceneData['visualType'] }> = ({ type }) => {
  switch (type) {
    case 'ai-agents':
      return (
        <div className="relative w-full max-w-[520px] aspect-[4/3] rounded-3xl overflow-hidden border border-cyan-400/30 bg-[#070D1E]/90 shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(6,182,212,0.15)] flex flex-col justify-between p-5 sm:p-6 group">
          {/* Subtle Cybernetic Background Image */}
          <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen pointer-events-none">
            <Image
              src="/images/services/ai-product.jpg"
              alt="AI Autonomous Architecture"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 520px"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#070D1E] via-[#070D1E]/70 to-transparent z-0" />

          {/* Top Telemetry Header */}
          <div className="relative z-10 flex items-center justify-between border-b border-cyan-500/20 pb-3">
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-mono font-bold text-white tracking-wider">NEURAL AGENT NEXUS</span>
            </div>
            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-[10px] font-mono text-cyan-300">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
              <span>ORCHESTRATING</span>
            </div>
          </div>

          {/* Central Active Node Map */}
          <div className="relative z-10 py-4 flex flex-col items-center justify-center my-auto">
            <div className="relative w-28 h-28 flex items-center justify-center">
              {/* Concentric Signal Rings */}
              <div className="absolute inset-0 rounded-full border border-cyan-400/40 animate-ping opacity-30" />
              <div className="absolute inset-2 rounded-full border border-cyan-400/60 animate-pulse" />
              <div className="w-16 h-16 rounded-full bg-cyan-500/20 border border-cyan-300/80 backdrop-blur-md flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.6)]">
                <Activity className="w-7 h-7 text-cyan-200" />
              </div>
            </div>

            <div className="mt-3 text-center">
              <div className="text-xs font-mono font-bold text-white">LangGraph Multi-Agent Cluster</div>
              <div className="text-[10px] font-mono text-slate-400 mt-0.5">8 Agents • Deterministic Tool Calling</div>
            </div>
          </div>

          {/* Bottom Live Execution Terminal */}
          <div className="relative z-10 p-3 rounded-xl bg-black/70 border border-white/10 font-mono text-[11px] text-slate-300 space-y-1">
            <div className="flex items-center justify-between text-[10px] text-cyan-300 border-b border-white/5 pb-1">
              <span>AGENT LOGS // LIVE</span>
              <span>P95: 38ms</span>
            </div>
            <div className="text-slate-400 truncate">&gt; Context embeddings computed (1536 dim)</div>
            <div className="text-emerald-400 truncate">&gt; Autonomous tool payload verified &amp; dispatched</div>
          </div>
        </div>
      );

    case 'web-scale':
      return (
        <div className="relative w-full max-w-[520px] aspect-[4/3] rounded-3xl overflow-hidden border border-emerald-400/30 bg-[#061611]/90 shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(16,185,129,0.15)] flex flex-col justify-between p-5 sm:p-6 group">
          <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen pointer-events-none">
            <Image
              src="/projects/cheesecake-factory.png"
              alt="High Concurrency Web Architecture"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 520px"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#061611] via-[#061611]/70 to-transparent z-0" />

          {/* Browser Navigation Bar */}
          <div className="relative z-10 flex items-center justify-between border-b border-emerald-500/20 pb-3">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-xs font-mono font-bold text-white ml-2">EDGE COMPOSITOR</span>
            </div>
            <div className="px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-[10px] font-mono text-emerald-300">
              100/100 CWV
            </div>
          </div>

          {/* Floating Performance Score Callouts */}
          <div className="relative z-10 grid grid-cols-3 gap-2.5 my-auto py-2">
            <div className="p-3 rounded-xl bg-black/65 border border-emerald-400/30 text-center">
              <div className="text-lg sm:text-xl font-mono font-black text-emerald-300">0.38s</div>
              <div className="text-[10px] font-mono text-slate-400 uppercase mt-0.5">LCP Target</div>
            </div>
            <div className="p-3 rounded-xl bg-black/65 border border-emerald-400/30 text-center">
              <div className="text-lg sm:text-xl font-mono font-black text-emerald-300">0.00</div>
              <div className="text-[10px] font-mono text-slate-400 uppercase mt-0.5">CLS Shift</div>
            </div>
            <div className="p-3 rounded-xl bg-black/65 border border-emerald-400/30 text-center">
              <div className="text-lg sm:text-xl font-mono font-black text-emerald-300">120 FPS</div>
              <div className="text-[10px] font-mono text-slate-400 uppercase mt-0.5">Composited</div>
            </div>
          </div>

          {/* Server Component Middleware Code Chip */}
          <div className="relative z-10 p-3 rounded-xl bg-black/75 border border-white/10 font-mono text-[11px] text-slate-300">
            <div className="text-[10px] text-emerald-300 mb-1 flex items-center justify-between">
              <span>EDGE STREAMING PIPELINE</span>
              <span>Next.js 15</span>
            </div>
            <div className="text-slate-400 truncate">&gt; Cache-Control: s-maxage=31536000, stale-while-revalidate</div>
            <div className="text-emerald-400 truncate">&gt; Sub-250ms TTFB across 32 Edge PoPs</div>
          </div>
        </div>
      );

    case 'mobile-product':
      return (
        <div className="relative w-full max-w-[520px] aspect-[4/3] rounded-3xl overflow-hidden border border-purple-400/30 bg-[#120822]/90 shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(168,85,247,0.15)] flex flex-col justify-between p-5 sm:p-6 group">
          <div className="absolute inset-0 z-0 opacity-45 mix-blend-screen pointer-events-none">
            <Image
              src="/projects/fitusion.png"
              alt="Mobile App Architecture"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 520px"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#120822] via-[#120822]/70 to-transparent z-0" />

          {/* Device Telemetry Header */}
          <div className="relative z-10 flex items-center justify-between border-b border-purple-500/20 pb-3">
            <div className="flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-purple-400" />
              <span className="text-xs font-mono font-bold text-white tracking-wider">NATIVE RUNTIME</span>
            </div>
            <div className="px-2 py-0.5 rounded-full bg-purple-500/20 border border-purple-400/30 text-[10px] font-mono text-purple-300">
              120Hz PROMOTION
            </div>
          </div>

          {/* Interactive Gestural Mockup Frame */}
          <div className="relative z-10 my-auto py-2 flex items-center justify-center">
            <div className="w-48 h-28 rounded-2xl border border-purple-400/40 bg-black/60 backdrop-blur-md p-3 flex flex-col justify-between shadow-2xl">
              <div className="flex items-center justify-between text-[10px] font-mono text-purple-300">
                <span>HAPTIC ENGINE</span>
                <span className="text-emerald-400">ONLINE</span>
              </div>
              <div className="flex items-center justify-center gap-2 my-auto">
                <span className="w-3 h-3 rounded-full bg-purple-500 animate-ping" />
                <span className="text-xs font-bold text-white">Buttery Gestures</span>
              </div>
              <div className="text-[10px] font-mono text-slate-400 text-center">
                Spring Dynamics: 0.85 Damping
              </div>
            </div>
          </div>

          {/* Local Sync Telemetry */}
          <div className="relative z-10 p-3 rounded-xl bg-black/75 border border-white/10 font-mono text-[11px] text-slate-300">
            <div className="text-[10px] text-purple-300 mb-1 flex items-center justify-between">
              <span>ENCRYPTED LOCAL STORAGE</span>
              <span>SQLite + Watermelon</span>
            </div>
            <div className="text-slate-400 truncate">&gt; Zero-latency offline read/write transactions</div>
            <div className="text-purple-300 truncate">&gt; Biometric Keychain auth verified</div>
          </div>
        </div>
      );

    case 'product-design':
      return (
        <div className="relative w-full max-w-[520px] aspect-[4/3] rounded-3xl overflow-hidden border border-sky-400/30 bg-[#081324]/90 shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(56,189,248,0.15)] flex flex-col justify-between p-5 sm:p-6 group">
          <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen pointer-events-none">
            <Image
              src="/images/services/prototyping-ux.jpg"
              alt="Design Systems & Prototyping"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 520px"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#081324] via-[#081324]/70 to-transparent z-0" />

          {/* Design System Header */}
          <div className="relative z-10 flex items-center justify-between border-b border-sky-500/20 pb-3">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-sky-400" />
              <span className="text-xs font-mono font-bold text-white tracking-wider">SYSTEM SPECIFICATION</span>
            </div>
            <div className="px-2 py-0.5 rounded-full bg-sky-500/20 border border-sky-400/30 text-[10px] font-mono text-sky-300">
              FIGMA SYNCED
            </div>
          </div>

          {/* Color Tokens & Vector Curves Showcase */}
          <div className="relative z-10 my-auto py-2 space-y-3">
            <div className="flex items-center justify-center gap-2">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/70 border border-white/10 text-[10px] font-mono text-slate-300">
                <span className="w-3 h-3 rounded-full bg-[#06B6D4]" />
                <span>#06B6D4 (Cyan)</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/70 border border-white/10 text-[10px] font-mono text-slate-300">
                <span className="w-3 h-3 rounded-full bg-[#8B5CF6]" />
                <span>#8B5CF6 (Purple)</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/70 border border-white/10 text-[10px] font-mono text-slate-300">
                <span className="w-3 h-3 rounded-full bg-[#FBFCDB]" />
                <span>#FBFCDB (Cream)</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-black/60 border border-sky-400/30 text-center font-mono text-xs text-sky-200">
              Cubic-Bezier (0.16, 1, 0.3, 1) • Fluid Micro-Physics
            </div>
          </div>

          {/* Typography Scale */}
          <div className="relative z-10 p-3 rounded-xl bg-black/75 border border-white/10 font-mono text-[11px] text-slate-300">
            <div className="text-[10px] text-sky-300 mb-1 flex items-center justify-between">
              <span>TYPOGRAPHY SYSTEM</span>
              <span>Outfit &amp; Inter</span>
            </div>
            <div className="text-slate-400 truncate">&gt; Modular type scale 1.250 with balance wraps</div>
            <div className="text-sky-300 truncate">&gt; Multi-state component variants validated</div>
          </div>
        </div>
      );

    case 'saas-platform':
      return (
        <div className="relative w-full max-w-[520px] aspect-[4/3] rounded-3xl overflow-hidden border border-indigo-400/30 bg-[#090C1F]/90 shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(129,140,248,0.15)] flex flex-col justify-between p-5 sm:p-6 group">
          <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen pointer-events-none">
            <Image
              src="/projects/curely.png"
              alt="Multi-Tenant SaaS Architecture"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 520px"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#090C1F] via-[#090C1F]/70 to-transparent z-0" />

          {/* SaaS Telemetry Header */}
          <div className="relative z-10 flex items-center justify-between border-b border-indigo-500/20 pb-3">
            <div className="flex items-center gap-2">
              <Database className="w-4 h-4 text-indigo-400" />
              <span className="text-xs font-mono font-bold text-white tracking-wider">MULTI-TENANT PLATFORM</span>
            </div>
            <div className="px-2 py-0.5 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-[10px] font-mono text-indigo-300">
              99.99% UPTIME
            </div>
          </div>

          {/* Multi-Tenant Nodes Grid */}
          <div className="relative z-10 grid grid-cols-2 gap-2.5 my-auto py-2">
            <div className="p-3 rounded-xl bg-black/65 border border-indigo-400/30">
              <div className="text-xs font-mono text-indigo-300">TENANT SHARDS</div>
              <div className="text-base sm:text-lg font-bold text-white mt-1">Isolated RLS</div>
              <div className="text-[10px] font-mono text-slate-400 mt-0.5">PostgreSQL 16</div>
            </div>
            <div className="p-3 rounded-xl bg-black/65 border border-indigo-400/30">
              <div className="text-xs font-mono text-indigo-300">BILLING ENGINE</div>
              <div className="text-base sm:text-lg font-bold text-white mt-1">Metered Stripe</div>
              <div className="text-[10px] font-mono text-slate-400 mt-0.5">Usage Webhooks</div>
            </div>
          </div>

          {/* Infrastructure Metrics */}
          <div className="relative z-10 p-3 rounded-xl bg-black/75 border border-white/10 font-mono text-[11px] text-slate-300">
            <div className="text-[10px] text-indigo-300 mb-1 flex items-center justify-between">
              <span>CLOUD REPLICATION</span>
              <span>Global 3-Region</span>
            </div>
            <div className="text-slate-400 truncate">&gt; Zero-trust JWT tokens &amp; automated RBAC</div>
            <div className="text-indigo-400 truncate">&gt; Continuous automated CI/CD deployment</div>
          </div>
        </div>
      );

    case 'growth-engine':
      return (
        <div className="relative w-full max-w-[520px] aspect-[4/3] rounded-3xl overflow-hidden border border-amber-400/30 bg-[#160E05]/90 shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(245,158,11,0.15)] flex flex-col justify-between p-5 sm:p-6 group">
          <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen pointer-events-none">
            <Image
              src="/images/services/startup-growth.jpg"
              alt="Digital Growth & Conversion"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 520px"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#160E05] via-[#160E05]/70 to-transparent z-0" />

          {/* Growth Telemetry Header */}
          <div className="relative z-10 flex items-center justify-between border-b border-amber-500/20 pb-3">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-mono font-bold text-white tracking-wider">CONVERSION RADAR</span>
            </div>
            <div className="px-2 py-0.5 rounded-full bg-amber-500/20 border border-amber-400/30 text-[10px] font-mono text-amber-300">
              3.8X ROAS
            </div>
          </div>

          {/* Compounding Growth Metrics Chips */}
          <div className="relative z-10 grid grid-cols-3 gap-2.5 my-auto py-2">
            <div className="p-3 rounded-xl bg-black/65 border border-amber-400/30 text-center">
              <div className="text-lg sm:text-xl font-mono font-black text-amber-300">+340%</div>
              <div className="text-[10px] font-mono text-slate-400 uppercase mt-0.5">MRR Lift</div>
            </div>
            <div className="p-3 rounded-xl bg-black/65 border border-amber-400/30 text-center">
              <div className="text-lg sm:text-xl font-mono font-black text-amber-300">48%</div>
              <div className="text-[10px] font-mono text-slate-400 uppercase mt-0.5">Activation</div>
            </div>
            <div className="p-3 rounded-xl bg-black/65 border border-amber-400/30 text-center">
              <div className="text-lg sm:text-xl font-mono font-black text-amber-300">100%</div>
              <div className="text-[10px] font-mono text-slate-400 uppercase mt-0.5">CAPI Match</div>
            </div>
          </div>

          {/* Growth Funnel Architecture */}
          <div className="relative z-10 p-3 rounded-xl bg-black/75 border border-white/10 font-mono text-[11px] text-slate-300">
            <div className="text-[10px] text-amber-300 mb-1 flex items-center justify-between">
              <span>ALGORITHMIC ATTRIBUTION</span>
              <span>Predictive LTV</span>
            </div>
            <div className="text-slate-400 truncate">&gt; Server-side pixel dispatch with 0 ad-block loss</div>
            <div className="text-amber-400 truncate">&gt; High-velocity A/B testing cycle deployed</div>
          </div>
        </div>
      );
  }
};

export default ServicesEditorialShowcase;
