'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  motion, 
  useScroll, 
  useTransform, 
  MotionValue 
} from 'framer-motion';
import { 
  Sparkles, 
  Layers, 
  Box, 
  Rocket, 
  Cloud, 
  Flame, 
  ArrowRight,
  MoveRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { MagneticButton } from '../shared/MagneticButton';

export interface ServiceCardData {
  id: string;
  number: string;
  slug: string;
  title: string;
  badge: string;
  desc: string;
  tags: string[];
  icon: React.ComponentType<{ className?: string }>;
  bgImage: string;
}

export const SERVICE_CARDS: ServiceCardData[] = [
  {
    id: 'ai-product',
    number: '01',
    slug: 'ai-agent-development',
    title: 'AI-Accelerated Product Development',
    badge: 'AI & Rapid MVP',
    desc: 'We combine cutting-edge AI models with senior engineering to launch your venture from concept to audited MVP in record time.',
    tags: ['Next.js 15', 'Autonomous Agents', 'Rapid MVP'],
    icon: Sparkles,
    bgImage: '/images/services/ai-product.jpg',
  },
  {
    id: 'custom-software',
    number: '02',
    slug: 'custom-software-saas-development',
    title: 'Custom Software & App Development',
    badge: 'Scalable Engineering',
    desc: 'From high-concurrency mobile apps to enterprise web platforms, we build scalable systems tailored to market domination.',
    tags: ['React Native', 'Postgres', 'Edge Cloud'],
    icon: Layers,
    bgImage: '/images/services/custom-software.jpg',
  },
  {
    id: 'prototyping-ux',
    number: '03',
    slug: 'website-ecommerce-development',
    title: 'Prototyping & UX Design',
    badge: 'Product Strategy',
    desc: 'Rapidly test ideas with interactive AI-powered prototypes and rigorous data-backed UX decisions that maximize retention.',
    tags: ['Design Systems', 'Micro-Interactions', 'A/B Testing'],
    icon: Box,
    bgImage: '/images/services/prototyping-ux.jpg',
  },
  {
    id: 'ai-automation',
    number: '04',
    slug: 'ai-integration-automation',
    title: 'AI Integration & Automation',
    badge: 'Enterprise Intelligence',
    desc: 'Enhance your operations with autonomous agent pipelines, predictive intelligence, and conversational customer engines.',
    tags: ['OpenAI & Gemini', 'Workflow Engines', 'API Integrations'],
    icon: Rocket,
    bgImage: '/images/services/ai-automation.jpg',
  },
  {
    id: 'cloud-devops',
    number: '05',
    slug: 'cloud-architecture-devops',
    title: 'Cloud Architecture & DevOps',
    badge: 'Infrastructure & SRE',
    desc: 'Deploy with zero technical debt. We design rock-solid, resilient cloud infrastructure with automated CI/CD and sub-second latency.',
    tags: ['Kubernetes', 'Zero-Downtime CI/CD', 'SOC-2 Ready'],
    icon: Cloud,
    bgImage: '/images/services/cloud-devops.jpg',
  },
  {
    id: 'growth-consulting',
    number: '06',
    slug: 'partner-program',
    title: 'Startup Growth Consulting',
    badge: 'Venture & Scale',
    desc: 'More than a dev agency — we co-pilot your growth, refine unit economics, and prepare pitch-ready tech architectures for funding.',
    tags: ['Unit Economics', 'Pitch Blueprints', 'Scale Strategies'],
    icon: Flame,
    bgImage: '/images/services/startup-growth.jpg',
  },
];

/**
 * High-performance horizontal service card
 * - Pure translate3d on compositor thread (zero CPU re-rasterization)
 * - Solid high-contrast obsidian background (zero backdrop-filter blur overhead)
 * - Crystal clear photographic image without filters
 */
interface ServiceCardProps {
  service: ServiceCardData;
  index: number;
  progress: MotionValue<number>;
}

const ServiceHorizontalCard: React.FC<ServiceCardProps> = ({ service, index, progress }) => {
  const Icon = service.icon;
  const isEven = index % 2 === 0;

  // Pure vertical translation for alternating wave motion (GPU accelerated)
  const y = useTransform(progress, [0, 1], isEven ? [-65, 65] : [65, -65]);

  return (
    <motion.div
      style={{ y }}
      className={`
        shrink-0 relative rounded-[28px] sm:rounded-[32px] p-7 sm:p-9 
        bg-[#0A0E22]/95 border border-white/15 hover:border-cyan-400/60
        shadow-[0_20px_50px_rgba(0,0,0,0.8)] hover:shadow-[0_20px_50px_rgba(6,182,212,0.25)]
        flex flex-col justify-between overflow-hidden 
        transition-colors duration-300 group select-none will-change-transform transform-gpu
        ${isEven 
          ? 'w-[320px] sm:w-[400px] lg:w-[420px] h-[470px] sm:h-[520px] lg:h-[540px]' 
          : 'w-[290px] sm:w-[360px] lg:w-[380px] h-[420px] sm:h-[460px] lg:h-[480px]'
        }
      `}
    >
      {/* Photographic Background with Smooth GPU Scale */}
      {service.bgImage && (
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden rounded-[28px] sm:rounded-[32px] z-0">
          <Image
            src={service.bgImage}
            alt={service.title}
            fill
            sizes="(max-width: 768px) 320px, 420px"
            className="object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-500 ease-out opacity-65 group-hover:opacity-85"
            priority={index < 2}
          />
          {/* Deep Contrast Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#060814] via-[#070b18]/70 to-[#050712]/40" />
          <div className="absolute inset-0 bg-black/20" />
        </div>
      )}

      {/* Top ambient highlight line */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

      {/* Card Header Content */}
      <div className="relative z-10">
        <div className="flex items-center justify-between gap-3 mb-6">
          {/* Shaded Circular Icon Container */}
          <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#15192c] border border-white/20 shadow-[0_4px_16px_rgba(0,0,0,0.6)] flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
            <Icon className="w-6 h-6 text-[#F3F5B4] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]" />
          </div>

          {/* Number & Category Pill */}
          <div className="flex items-center gap-2">
            <span className="text-[10px] sm:text-xs font-mono font-bold tracking-wider px-2.5 py-1 rounded-full bg-white/10 text-cyan-300 border border-white/15">
              {service.number} // 06
            </span>
          </div>
        </div>

        {/* Category Eyebrow */}
        <div className="text-[11px] font-mono uppercase tracking-widest text-purple-300 font-semibold mb-2">
          {service.badge}
        </div>

        {/* Title */}
        <h3 className="font-display text-xl sm:text-2xl lg:text-[25px] font-bold text-white mb-3 group-hover:text-cyan-200 transition-colors tracking-tight leading-snug drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal drop-shadow-[0_1px_6px_rgba(0,0,0,0.95)] line-clamp-3">
          {service.desc}
        </p>

        {/* Feature Tags */}
        <div className="flex flex-wrap gap-1.5 mt-4">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.08] border border-white/10 text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom CTA Link */}
      <div className="pt-4 border-t border-white/[0.15] relative z-10">
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center justify-between w-full text-xs font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]"
        >
          <span>View Architecture Blueprint</span>
          <div className="w-8 h-8 rounded-full bg-white/10 border border-white/15 group-hover:bg-cyan-500/30 group-hover:border-cyan-400/50 flex items-center justify-center text-white group-hover:text-cyan-200 transition-all duration-300 shadow-lg">
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </Link>
      </div>
    </motion.div>
  );
};

export const ServicesOverview: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Direct DOM refs to avoid any React re-render thrashing during scroll
  const activeNumberRef = useRef<HTMLSpanElement>(null);
  const activeNumberRightRef = useRef<HTMLSpanElement>(null);

  // Track horizontal overflow distance to translate
  const [scrollDistance, setScrollDistance] = useState(0);

  // Track vertical scroll across the tall section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Calculate track overflow width on mount and on window resize
  useEffect(() => {
    const updateDimensions = () => {
      if (trackRef.current) {
        const totalTrackWidth = trackRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        // Total horizontal distance to travel so all cards and concluding CTA are visible
        const overflow = Math.max(0, totalTrackWidth - viewportWidth + 80);
        setScrollDistance(overflow);
      }
    };

    updateDimensions();
    const timer1 = setTimeout(updateDimensions, 150);
    const timer2 = setTimeout(updateDimensions, 600);

    window.addEventListener('resize', updateDimensions, { passive: true });
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  // Update active card number indicator directly on DOM nodes (0 React re-renders!)
  useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      const idx = Math.min(
        SERVICE_CARDS.length,
        Math.max(1, Math.round(latest * (SERVICE_CARDS.length - 1)) + 1)
      );
      const text = `0${idx}`;
      if (activeNumberRef.current && activeNumberRef.current.textContent !== text) {
        activeNumberRef.current.textContent = text;
      }
      if (activeNumberRightRef.current && activeNumberRightRef.current.textContent !== text) {
        activeNumberRightRef.current.textContent = text;
      }
    });
  }, [scrollYProgress]);

  // Translate track along the X axis from 0 to -scrollDistance
  // Synchronized directly with Lenis smooth scroll at 60/120 FPS
  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollDistance]);

  return (
    <section 
      ref={containerRef}
      id="services" 
      className="relative h-[300vh] bg-[#050711] select-none"
    >
      {/* ─────────────────────────────────────────────────────────────
          STICKY FULL-SCREEN VIEWPORT PIN (60/120 FPS Composited)
          ───────────────────────────────────────────────────────────── */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center">

        {/* High-Performance Pure CSS Cosmic Nebula Glows (Zero GPU Shader Overhead) */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden transform-gpu" aria-hidden="true">
          {/* Subtle Cybernetic Grid */}
          <div className="absolute inset-0 [background-image:radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:36px_36px] opacity-40" />
          
          {/* Ambient Nebulae */}
          <div className="absolute top-1/4 left-1/4 w-[750px] h-[500px] bg-purple-900/18 rounded-full blur-[140px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[650px] h-[450px] bg-cyan-600/14 rounded-full blur-[140px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[350px] bg-indigo-900/10 rounded-full blur-[160px]" />
        </div>

        {/* ─────────────────────────────────────────────────────────────
            HORIZONTAL MOVING TRACK WITH 3D PERSPECTIVE (Framer Reference)
            ───────────────────────────────────────────────────────────── */}
        <div className="relative w-full z-10 [perspective:1200px]">
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex items-center gap-7 sm:gap-10 lg:gap-14 will-change-transform transform-gpu pl-6 sm:pl-12 lg:pl-20 pr-12 sm:pr-20 lg:pr-32"
          >
            {/* ─────────────────────────────────────────────────────────
                TRACK ELEMENT 1: Introductory Header Block
                ───────────────────────────────────────────────────────── */}
            <div className="w-[300px] sm:w-[420px] lg:w-[460px] shrink-0 flex flex-col justify-center select-none pr-4 sm:pr-8">
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-5 shadow-[0_0_20px_rgba(245,158,11,0.15)] self-start">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
                </span>
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>COMPREHENSIVE PRACTICES</span>
              </div>

              {/* Headline */}
              <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-4">
                Smart Solutions for <br />
                <span className="text-gradient-hero">Modern Businesses</span>
              </h2>

              {/* Subtitle */}
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal mb-8">
                Engineered for high conversion, rock-solid reliability, and exponential execution speed. Custom architectures built to dominate.
              </p>

              {/* Scroll Helper Hint Pill */}
              <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-full bg-white/[0.05] border border-white/15 text-xs text-slate-300 font-mono self-start">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>SCROLL DOWN TO EXPLORE</span>
                <MoveRight className="w-4 h-4 text-cyan-400 animate-pulse" />
              </div>
            </div>

            {/* ─────────────────────────────────────────────────────────
                TRACK ELEMENTS 2-7: 6 Service Cards with Alternating Waves
                ───────────────────────────────────────────────────────── */}
            {SERVICE_CARDS.map((service, index) => (
              <ServiceHorizontalCard
                key={service.id}
                service={service}
                index={index}
                progress={scrollYProgress}
              />
            ))}

            {/* ─────────────────────────────────────────────────────────
                TRACK ELEMENT 8: Concluding Custom Scope CTA Card
                ───────────────────────────────────────────────────────── */}
            <motion.div
              style={{
                y: useTransform(scrollYProgress, [0, 1], [-35, 35]),
              }}
              className="w-[310px] sm:w-[380px] lg:w-[400px] h-[450px] sm:h-[490px] shrink-0 rounded-[28px] sm:rounded-[32px] p-8 sm:p-9 bg-gradient-to-b from-[#101428]/95 to-[#070A18]/95 border border-purple-500/40 shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex flex-col justify-between select-none relative overflow-hidden group will-change-transform transform-gpu"
            >
              {/* Radial Glow */}
              <div className="absolute -top-24 -right-24 w-60 h-60 bg-purple-600/25 rounded-full blur-[80px] pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-cyan-600/20 rounded-full blur-[80px] pointer-events-none" />

              <div className="relative z-10">
                <div className="w-13 h-13 rounded-full bg-purple-500/20 border border-purple-400/40 flex items-center justify-center mb-6 text-purple-300 shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                  <ShieldCheck className="w-6 h-6 text-purple-300" />
                </div>

                <div className="text-[11px] font-mono uppercase tracking-widest text-cyan-300 font-semibold mb-2">
                  CUSTOM ARCHITECTURES
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight leading-snug">
                  Have a Unique Scope or Vision?
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-6">
                  We architect bespoke digital systems, customized autonomous AI pipelines, and high-concurrency infrastructure tailored to your exact roadmap.
                </p>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Dedicated Technical Architect</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Fixed-Price Milestone Delivery</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>100% IP & Source Ownership</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 relative z-10">
                <MagneticButton strength={0.3}>
                  <Link
                    href="/services"
                    className="w-full py-3.5 px-6 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#2563EB] to-[#B113FE] hover:from-[#1D4ED8] hover:to-[#9333EA] transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(177,19,254,0.6)] hover:shadow-[0_0_35px_rgba(177,19,254,0.85)] hover:scale-[1.02]"
                  >
                    <span>Explore All Practices</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </MagneticButton>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            BOTTOM PROGRESS HUD BAR (Framer Style)
            ───────────────────────────────────────────────────────────── */}
        <div className="absolute bottom-5 sm:bottom-7 left-0 right-0 z-20 pointer-events-none">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            {/* Left Status Beacon */}
            <div className="hidden md:flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-black/70 border border-white/10 text-xs text-slate-300 font-mono">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>ACTIVE PRACTICE // </span>
              <span ref={activeNumberRef} className="text-cyan-300 font-bold">01</span>
            </div>

            {/* Right Scroll Progress Track */}
            <div className="flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-black/70 border border-white/10 ml-auto md:ml-0">
              <span ref={activeNumberRightRef} className="text-[11px] font-mono text-cyan-300 font-bold">01</span>
              <div className="w-24 sm:w-36 h-1 rounded-full bg-white/15 overflow-hidden relative">
                <motion.div 
                  style={{ scaleX: scrollYProgress, transformOrigin: 'left' }}
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500"
                />
              </div>
              <span className="text-[11px] font-mono text-slate-400">06</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesOverview;
