'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  motion, 
  useScroll, 
  useTransform, 
  useSpring, 
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
import { GradientWaves } from '@/components/ui/GradientWaves';

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
 * Individual horizontal service card with alternating wave physics
 * (Matches the undulating vertical parallax from horizontal.learnframer.site)
 */
interface ServiceCardProps {
  service: ServiceCardData;
  index: number;
  progress: MotionValue<number>;
}

const ServiceHorizontalCard: React.FC<ServiceCardProps> = ({ service, index, progress }) => {
  const Icon = service.icon;
  const isEven = index % 2 === 0;

  // Undulating wave vertical motion: alternating cards travel in opposing directions
  const y = useTransform(progress, [0, 1], isEven ? [-75, 75] : [75, -75]);
  const rotate = useTransform(progress, [0, 1], isEven ? [-1.5, 1.5] : [1.5, -1.5]);

  return (
    <motion.div
      style={{ y, rotate }}
      className={`
        shrink-0 relative rounded-[28px] sm:rounded-[32px] p-7 sm:p-9 
        bg-[#090C1A]/90 border border-white/15 hover:border-cyan-400/60
        shadow-[0_25px_60px_rgba(0,0,0,0.85)] hover:shadow-[0_20px_50px_rgba(6,182,212,0.25)]
        backdrop-blur-2xl flex flex-col justify-between overflow-hidden 
        transition-colors duration-500 group select-none
        ${isEven 
          ? 'w-[330px] sm:w-[410px] lg:w-[430px] h-[480px] sm:h-[530px] lg:h-[550px]' 
          : 'w-[300px] sm:w-[370px] lg:w-[390px] h-[430px] sm:h-[470px] lg:h-[490px]'
        }
      `}
    >
      {/* Photographic Background with Subtle Parallax Scale */}
      {service.bgImage && (
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden rounded-[28px] sm:rounded-[32px] z-0">
          <Image
            src={service.bgImage}
            alt={service.title}
            fill
            sizes="(max-width: 768px) 330px, 430px"
            className="object-cover object-center scale-100 group-hover:scale-108 transition-transform duration-700 ease-out opacity-65 group-hover:opacity-85 filter blur-[0.2px] group-hover:blur-none"
          />
          {/* Deep Contrast Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#060814] via-[#070b18]/70 to-[#050712]/40" />
          <div className="absolute inset-0 bg-black/25" />
        </div>
      )}

      {/* Top ambient highlight line */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

      {/* Card Header Content */}
      <div className="relative z-10">
        <div className="flex items-center justify-between gap-3 mb-6">
          {/* Shaded Circular Icon Container */}
          <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#161a2c]/90 backdrop-blur-md border border-white/20 shadow-[inset_0_2px_4px_rgba(255,255,255,0.15),0_4px_16px_rgba(0,0,0,0.7)] flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
            <Icon className="w-6 h-6 text-[#F3F5B4] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]" />
          </div>

          {/* Number & Category Pill */}
          <div className="flex items-center gap-2">
            <span className="text-[10px] sm:text-xs font-mono font-bold tracking-wider px-2.5 py-1 rounded-full bg-white/10 text-cyan-300 border border-white/15 backdrop-blur-md">
              {service.number} // 06
            </span>
          </div>
        </div>

        {/* Category Eyebrow */}
        <div className="text-[11px] font-mono uppercase tracking-widest text-purple-300 font-semibold mb-2">
          {service.badge}
        </div>

        {/* Title */}
        <h3 className="font-display text-xl sm:text-2xl lg:text-[26px] font-bold text-white mb-3 group-hover:text-cyan-200 transition-colors tracking-tight leading-snug drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
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
              className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.06] border border-white/10 text-slate-300"
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
          <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 group-hover:bg-cyan-500/30 group-hover:border-cyan-400/50 flex items-center justify-center text-white group-hover:text-cyan-200 transition-all duration-300 shadow-lg">
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

  // Track horizontal overflow distance to translate
  const [scrollDistance, setScrollDistance] = useState(0);
  const [activeNumber, setActiveNumber] = useState('01');

  // Track vertical scroll across the tall section (350vh for smooth luxurious scroll)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // High-framerate spring physics matching Framer reference
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 28,
    restDelta: 0.001,
  });

  // Calculate track overflow width on mount and on window resize
  useEffect(() => {
    const updateDimensions = () => {
      if (trackRef.current) {
        const totalTrackWidth = trackRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        // Total horizontal distance to travel so all cards and concluding CTA are visible
        const overflow = Math.max(0, totalTrackWidth - viewportWidth + 120);
        setScrollDistance(overflow);
      }
    };

    updateDimensions();
    // Short delay to ensure custom fonts and images have measured accurately
    const timer = setTimeout(updateDimensions, 400);

    window.addEventListener('resize', updateDimensions);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  // Update active card number indicator based on scroll progress
  useEffect(() => {
    const unsubscribe = smoothProgress.on('change', (latest) => {
      const idx = Math.min(
        SERVICE_CARDS.length,
        Math.max(1, Math.round(latest * (SERVICE_CARDS.length - 1)) + 1)
      );
      setActiveNumber(`0${idx}`);
    });
    return () => unsubscribe();
  }, [smoothProgress]);

  // Translate track along the X axis from 0 to -scrollDistance
  const x = useTransform(smoothProgress, [0, 1], [0, -scrollDistance]);

  return (
    <section 
      ref={containerRef}
      id="services" 
      className="relative h-[360vh] bg-[#050711] select-none"
    >
      {/* ─────────────────────────────────────────────────────────────
          STICKY FULL-SCREEN VIEWPORT PIN
          ───────────────────────────────────────────────────────────── */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center">

        {/* Dynamic Animated GradientWaves (React Bits) Background */}
        <div 
          className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0 opacity-55 mix-blend-screen"
          style={{
            maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
          }}
          aria-hidden="true"
        >
          <GradientWaves
            horizonColor="#4338CA"
            waveColor="#8B5CF6"
            crestColor="#06B6D4"
            speed={0.32}
            amplitude={2.6}
            waveScale={0.55}
            waveRatio={0.9}
            swell={32}
            turbulence={18}
            tilt={1.12}
            zoom={1.05}
            height={5.2}
            fogDepth={18}
            detail="medium"
            brightness={1.05}
            opacity={0.7}
            mouseInteraction={false}
            parallaxStrength={0.4}
            grain={true}
            grainIntensity={0.04}
          />
        </div>

        {/* Subtle Ambient Nebulae */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
          <div className="absolute top-1/4 left-1/3 w-[800px] h-[500px] bg-purple-900/15 rounded-full blur-[160px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[400px] bg-cyan-600/10 rounded-full blur-[140px]" />
        </div>

        {/* ─────────────────────────────────────────────────────────────
            HORIZONTAL MOVING TRACK WITH 3D PERSPECTIVE (Framer Reference)
            ───────────────────────────────────────────────────────────── */}
        <div className="relative w-full z-10 [perspective:1200px]">
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex items-center gap-7 sm:gap-10 lg:gap-14 will-change-transform pl-6 sm:pl-12 lg:pl-20 pr-12 sm:pr-20 lg:pr-32"
          >
            {/* ─────────────────────────────────────────────────────────
                TRACK ELEMENT 1: Introductory Header Block
                ───────────────────────────────────────────────────────── */}
            <div className="w-[310px] sm:w-[440px] lg:w-[480px] shrink-0 flex flex-col justify-center select-none pr-4 sm:pr-8">
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-5 backdrop-blur-xl shadow-[0_0_20px_rgba(245,158,11,0.15)] self-start">
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
              <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-full bg-white/[0.05] border border-white/15 text-xs text-slate-300 font-mono self-start backdrop-blur-md">
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
                progress={smoothProgress}
              />
            ))}

            {/* ─────────────────────────────────────────────────────────
                TRACK ELEMENT 8: Concluding Custom Scope CTA Card
                ───────────────────────────────────────────────────────── */}
            <motion.div
              style={{
                y: useTransform(smoothProgress, [0, 1], [-40, 40]),
              }}
              className="w-[320px] sm:w-[390px] lg:w-[410px] h-[460px] sm:h-[500px] shrink-0 rounded-[28px] sm:rounded-[32px] p-8 sm:p-9 bg-gradient-to-b from-[#101428]/95 to-[#070A18]/95 border border-purple-500/40 shadow-[0_25px_60px_rgba(0,0,0,0.85)] backdrop-blur-2xl flex flex-col justify-between select-none relative overflow-hidden group"
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
            <div className="hidden md:flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-black/60 border border-white/10 backdrop-blur-xl text-xs text-slate-300 font-mono">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>ACTIVE PRACTICE // {activeNumber}</span>
            </div>

            {/* Right Scroll Progress Track */}
            <div className="flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-black/60 border border-white/10 backdrop-blur-xl ml-auto md:ml-0">
              <span className="text-[11px] font-mono text-cyan-300 font-bold">{activeNumber}</span>
              <div className="w-24 sm:w-36 h-1 rounded-full bg-white/15 overflow-hidden relative">
                <motion.div 
                  style={{ scaleX: smoothProgress, transformOrigin: 'left' }}
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
