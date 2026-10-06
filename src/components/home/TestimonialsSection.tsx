'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Star,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Quote
} from 'lucide-react';

interface Testimonial {
  id: string;
  brand: string;
  brandIcon: 'sparkmedia' | 'vividworld' | 'velocity' | 'horizon' | 'studioluxe';
  title: string;
  quote: string;
  author: string;
  role: string;
  rating: number; // 4 or 5
  ratingValue: string;
  image: string;
  highlightTag?: string;
}

const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'spark-media',
    brand: 'SparkMedia',
    brandIcon: 'sparkmedia',
    title: 'Exceeded All Expectations!',
    quote:
      'From start to finish, the team delivered exceptional service. The animations brought our vision to life and surpassed anything we imagined.',
    author: 'Vidhran K.',
    role: 'CEO',
    rating: 5,
    ratingValue: '5.0',
    image: '/testimonials/client_vidhran.jpg',
    highlightTag: 'Brand Transformation'
  },
  {
    id: 'vivid-world',
    brand: 'Vivid World',
    brandIcon: 'vividworld',
    title: 'Reliable and Innovative Partner',
    quote:
      'They understood our needs and executed everything seamlessly. The interactive prototypes nailed our vision on the first try. Couldn’t be happier with the results.',
    author: 'Tim S.',
    role: 'Marketing Manager',
    rating: 5,
    ratingValue: '5.0',
    image: '/testimonials/client_tim.jpg',
    highlightTag: 'Full Production Suite'
  },
  {
    id: 'velocity-ai',
    brand: 'Velocity AI',
    brandIcon: 'velocity',
    title: 'Flawless Engineering & Zero Downtime',
    quote:
      'The fixed milestone delivery gave our board complete peace of mind. Shipped our entire AI orchestration platform two weeks ahead of schedule with 0 launch bugs.',
    author: 'Elena Rostova',
    role: 'CTO & Co-Founder',
    rating: 5,
    ratingValue: '5.0',
    image: '/testimonials/client_elena.jpg',
    highlightTag: 'Shipped 2 Weeks Early'
  },
  {
    id: 'horizon-retail',
    brand: 'Horizon Retail',
    brandIcon: 'horizon',
    title: 'Transformed Our Conversion Pipeline',
    quote:
      'Our mobile checkout conversion jumped 38% immediately after rollout. Their attention to fluid micro-interactions and sub-second page performance yielded instant ROI.',
    author: 'Marcus Vance',
    role: 'Head of Product',
    rating: 4,
    ratingValue: '4.8',
    image: '/testimonials/client_marcus.jpg',
    highlightTag: '+38% Conversion Lift'
  },
  {
    id: 'studio-luxe',
    brand: 'Studio Luxe',
    brandIcon: 'studioluxe',
    title: 'Unmatched Design Precision',
    quote:
      'Finding engineers who translate high-end Figma prototypes into pixel-perfect code without botching animations is rare. Arclyn treats interaction like pure art.',
    author: 'Sarah Jenkins',
    role: 'Creative Director',
    rating: 4,
    ratingValue: '4.9',
    image: '/testimonials/client_sarah.jpg',
    highlightTag: 'Pixel-Perfect Handoff'
  },
];

// Custom Brand Icons matching screenshot styling exactly
const BrandIcon: React.FC<{ type: Testimonial['brandIcon']; className?: string }> = ({
  type,
  className = 'w-6 h-6',
}) => {
  switch (type) {
    case 'sparkmedia':
      // Multi-spoke radiating sunburst from screenshot
      return (
        <div className={`relative flex items-center justify-center ${className}`}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="w-full h-full text-white animate-[spin_25s_linear_infinite]"
          >
            {[0, 25.7, 51.4, 77.1, 102.8, 128.5, 154.2, 180, 205.7, 231.4, 257.1, 282.8, 308.5, 334.2].map(
              (deg, i) => (
                <line
                  key={i}
                  x1="12"
                  y1="2.5"
                  x2="12"
                  y2="7"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  transform={`rotate(${deg} 12 12)`}
                />
              )
            )}
            <circle cx="12" cy="12" r="3.2" fill="currentColor" />
          </svg>
        </div>
      );
    case 'vividworld':
      // Minimalist folded triangle / origami paper plane from screenshot
      return (
        <div className={`relative flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-neutral-300">
            <path
              d="M3 19L21 5L13 21L10 14L3 19Z"
              fill="currentColor"
              fillOpacity="0.85"
            />
            <path
              d="M10 14L21 5"
              stroke="#0d0e12"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      );
    case 'horizon':
      return (
        <div className={`relative flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-amber-400">
            <path
              d="M3 17H21M5 13C6.5 8.5 17.5 8.5 19 13M12 4V7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      );
    case 'velocity':
      return (
        <div className={`relative flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-cyan-400">
            <path
              d="M13 5L20 12L13 19M5 5L12 12L5 19"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      );
    case 'studioluxe':
      return (
        <div className={`relative flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-violet-400">
            <path
              d="M12 2L21 9L12 22L3 9L12 2Z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
            <path
              d="M3 9H21M12 2L8 9L12 22L16 9L12 2Z"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      );
    default:
      return null;
  }
};

interface TestimonialsSectionProps {
  hideHeader?: boolean;
  className?: string;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  hideHeader = false,
  className = '',
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [cardWidth, setCardWidth] = useState(840);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const SLIDE_DURATION = 2000; // 2 seconds per card (automove next)

  // Responsive card measurement
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setCardWidth(Math.min(width - 32, 380));
      } else if (width < 1024) {
        setCardWidth(Math.min(width - 64, 580));
      } else {
        setCardWidth(720);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const total = TESTIMONIALS_DATA.length;

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
    setProgress(0);
  }, [total]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
    setProgress(0);
  }, [total]);

  const goToSlide = (idx: number) => {
    setActiveIndex(idx);
    setProgress(0);
  };

  // Autoscroll timer + animated progress bar (2 seconds per testimonial)
  useEffect(() => {
    if (isPaused) {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
      return;
    }

    const intervalStep = 25;
    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + (intervalStep / SLIDE_DURATION) * 100;
      });
    }, intervalStep);

    return () => {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, [isPaused, nextSlide]);

  // Compute offset cards so left (-1), center (0), and right (+1) are always populated
  const visibleOffsets = [-1, 0, 1];

  return (
    <section
      id="testimonials"
      className={`relative bg-[#0d0e12] text-white py-14 sm:py-18 md:py-20 overflow-hidden select-none ${className}`}
    >
      {/* ========================================================================= */}
      {/* MOTION GRAPHICS: Ambient Background Light, Grid & Animated Energy Particles */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Subtle grid mesh */}
        <div 
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
            backgroundSize: '44px 44px',
          }}
        />

        {/* Ambient Radial Glowing Aura behind Active Card */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[950px] h-[480px] rounded-full blur-[140px] opacity-30 pointer-events-none transition-all duration-1000"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(139,92,246,0.32) 0%, rgba(59,130,246,0.22) 40%, rgba(245,158,11,0.12) 75%, transparent 85%)'
          }}
        />

        {/* Dynamic Motion Floating Micro Particles */}
        <div className="absolute inset-0">
          {[
            { top: '15%', left: '10%', size: 'w-1.5 h-1.5', delay: '0s', dur: '4.5s' },
            { top: '25%', left: '88%', size: 'w-1 h-1', delay: '1s', dur: '5s' },
            { top: '75%', left: '14%', size: 'w-2 h-2', delay: '2s', dur: '6s' },
            { top: '65%', left: '82%', size: 'w-1.5 h-1.5', delay: '0.5s', dur: '4s' },
            { top: '42%', left: '94%', size: 'w-1 h-1', delay: '1.5s', dur: '5.5s' },
            { top: '80%', left: '52%', size: 'w-1.5 h-1.5', delay: '3s', dur: '4.2s' },
          ].map((pt, i) => (
            <motion.div
              key={i}
              className={`absolute rounded-full bg-white/40 blur-[0.5px] ${pt.size}`}
              style={{ top: pt.top, left: pt.left }}
              animate={{
                y: [-10, 10, -10],
                opacity: [0.2, 0.75, 0.2],
                scale: [0.9, 1.25, 0.9],
              }}
              transition={{
                duration: parseFloat(pt.dur),
                repeat: Infinity,
                delay: parseFloat(pt.delay),
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>

        {/* Top and Bottom soft edge feather gradients */}
        <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-[#0d0e12] to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#0d0e12] to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ========================================================================= */}
        {/* SECTION HEADER (PROPORTIONATE SCALE MATCHING SCREENSHOT) */}
        {/* ========================================================================= */}
        {!hideHeader && (
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            {/* Header Title */}
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white mb-2.5 leading-[1.12]">
              Hear from Brands
              <br />
              That Trust Us
            </h2>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm text-neutral-400 max-w-lg mx-auto leading-relaxed">
              Our clients&apos; success stories showcase the value we bring to every project.
              <br className="hidden sm:inline" />
              {' '}Here&apos;s what they have to say about working with us.
            </p>
          </div>
        )}

        {/* ========================================================================= */}
        {/* THREE-CARD DISPLAY STAGE (LEFT PEEK, CENTER ACTIVE, RIGHT PEEK) */}
        {/* ========================================================================= */}
        <div className="relative w-full overflow-hidden py-3">
          <div className="relative flex items-center justify-center min-h-[500px] xs:min-h-[450px] sm:min-h-[380px] md:min-h-[330px]">
            {visibleOffsets.map((offset) => {
              const itemIndex = (activeIndex + offset + total) % total;
              const t = TESTIMONIALS_DATA[itemIndex];
              const isCenter = offset === 0;
              const isLeft = offset === -1;
              const isRight = offset === 1;

              // Compute X offset in pixels relative to center
              const translateX = offset * (cardWidth + 28);

              return (
                <div
                  key={`${t.id}-${offset}`}
                  onClick={() => {
                    if (isLeft) prevSlide();
                    if (isRight) nextSlide();
                  }}
                  style={{
                    width: `${cardWidth}px`,
                    transform: `translate3d(${translateX}px, 0, 0) scale(${isCenter ? 1 : 0.92})`,
                  }}
                  className={`absolute rounded-2xl sm:rounded-3xl transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] overflow-hidden p-5 sm:p-7 md:p-8 select-none ${
                    isCenter
                      ? 'bg-[#15161b] border border-white/[0.12] shadow-[0_24px_70px_-15px_rgba(0,0,0,0.85),0_0_50px_rgba(255,255,255,0.03)] opacity-100 z-20 cursor-default'
                      : 'bg-[#121317] border border-white/[0.05] shadow-xl opacity-35 hover:opacity-60 z-10 cursor-pointer hidden md:block'
                  }`}
                >
                  {/* Motion Graphics: Subtle Animated Border Highlight on Active Card */}
                  {isCenter && (
                    <div className="absolute -inset-[1px] rounded-2xl sm:rounded-3xl bg-gradient-to-r from-amber-500/0 via-amber-400/20 to-violet-500/0 opacity-70 pointer-events-none animate-pulse" />
                  )}

                  {/* Faded Quote Watermark */}
                  <div className="absolute top-5 right-5 sm:top-7 sm:right-7 text-white/[0.03] group-hover:text-white/[0.06] transition-colors pointer-events-none">
                    <Quote className="w-16 h-16 rotate-180" />
                  </div>

                  {/* Card Interior Grid: Text on Left, Client Portrait on Right */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-7 items-center relative z-10">
                    {/* LEFT COLUMN: Brand, Stars, Headline, Quote, Author */}
                    <div className="md:col-span-7 flex flex-col justify-between h-full space-y-3.5 sm:space-y-5">
                      {/* Top Row: Brand & Rating */}
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        {/* Brand Icon + Name */}
                        <div className="flex items-center gap-2.5">
                          <div className="w-7 h-7 rounded-lg bg-white/[0.06] border border-white/10 flex items-center justify-center p-1.5 shadow-inner">
                            <BrandIcon type={t.brandIcon} className="w-4 h-4" />
                          </div>
                          <span className="text-white text-sm sm:text-base font-semibold tracking-tight">
                            {t.brand}
                          </span>
                        </div>

                        {/* Star Rating Badge (5 and 4 stars) */}
                        <div className="flex items-center gap-1.5 bg-white/[0.04] border border-white/10 px-2.5 py-0.5 rounded-full shadow-sm">
                          <div className="flex items-center gap-0.5">
                            {[1, 2, 3, 4, 5].map((s) => (
                              <Star
                                key={s}
                                className={`w-3 h-3 ${
                                  s <= t.rating
                                    ? 'fill-amber-400 text-amber-400 drop-shadow-[0_0_6px_rgba(251,191,36,0.6)]'
                                    : 'fill-neutral-700 text-neutral-700'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-[10px] font-semibold text-white/90 font-mono">
                            {t.ratingValue}
                          </span>
                        </div>
                      </div>

                      {/* Review Title & Body Quote */}
                      <div className="space-y-2">
                        <h3 className="text-lg sm:text-xl font-semibold text-white tracking-tight leading-snug">
                          {t.title}
                        </h3>
                        <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed font-normal">
                          &ldquo;{t.quote}&rdquo;
                        </p>
                      </div>

                      {/* Author Credentials & Tag */}
                      <div className="pt-2.5 border-t border-white/[0.08] flex items-center justify-between">
                        <div>
                          <div className="text-white text-xs sm:text-sm font-semibold tracking-tight">
                            {t.author}, {t.role}
                          </div>
                          <div className="text-neutral-400 text-[11px] mt-0.5 flex items-center gap-1.5">
                            <span className="text-white/70">{t.brand}</span>
                            <span>•</span>
                            <span className="text-emerald-400 flex items-center gap-1">
                              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                              Verified Client
                            </span>
                          </div>
                        </div>

                        {t.highlightTag && (
                          <div className="hidden sm:inline-flex items-center gap-1 text-[10px] font-medium text-amber-300/90 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-full">
                            <Sparkles className="w-3 h-3 text-amber-400" />
                            <span>{t.highlightTag}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* RIGHT COLUMN: Monochrome Client Portrait (Exact Match with Reference) */}
                    <div className="md:col-span-5 relative w-full h-[170px] sm:h-[210px] md:h-[250px] rounded-xl sm:rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 shadow-lg">
                      <Image
                        src={t.image}
                        alt={`${t.author} - ${t.brand}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 360px"
                        className="object-cover object-center grayscale contrast-105 brightness-95 group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      {/* Studio edge gradients */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#15161b]/80 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute inset-0 bg-gradient-to-r from-[#15161b]/35 via-transparent to-transparent pointer-events-none" />

                      {/* Author pill on mobile */}
                      <div className="absolute bottom-2.5 left-2.5 md:hidden z-10 px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[10px] text-white">
                        {t.author} • {t.role}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Side Fade Vignettes for Seamless Depth */}
          <div className="pointer-events-none absolute left-0 inset-y-0 w-16 sm:w-28 bg-gradient-to-r from-[#0d0e12] to-transparent z-30" />
          <div className="pointer-events-none absolute right-0 inset-y-0 w-16 sm:w-28 bg-gradient-to-l from-[#0d0e12] to-transparent z-30" />
        </div>

        {/* ========================================================================= */}
        {/* INTERACTIVE CONTROLS: Autoscroll Progress Bar, Dots, & Navigation Arrows */}
        {/* ========================================================================= */}
        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-between gap-5 max-w-[840px] mx-auto px-4">
          {/* Autoscroll Progress Indicator with Play/Pause button */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsPaused((prev) => !prev)}
              className="w-10 h-10 sm:w-8 sm:h-8 rounded-full bg-white/[0.06] hover:bg-white/15 border border-white/10 text-white/80 hover:text-white flex items-center justify-center transition-all cursor-pointer"
              title={isPaused ? "Resume Autoscroll" : "Pause Autoscroll"}
              aria-label={isPaused ? "Resume Autoscroll" : "Pause Autoscroll"}
            >
              {isPaused ? <Play className="w-3.5 h-3.5 fill-white" /> : <Pause className="w-3.5 h-3.5" />}
            </button>

            {/* Smooth Animated Autoscroll Progress Bar */}
            <div className="w-28 sm:w-36 h-1.5 rounded-full bg-white/10 overflow-hidden relative">
              <div
                className="h-full bg-gradient-to-r from-amber-400 via-violet-400 to-cyan-400 rounded-full transition-all duration-75 ease-linear"
                style={{ width: `${progress}%` }}
              />
            </div>

            <span className="text-[11px] text-neutral-400 font-mono tracking-wider">
              {String(activeIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </span>
          </div>

          {/* Interactive Slide Dots */}
          <div className="flex items-center gap-2">
            {TESTIMONIALS_DATA.map((t, idx) => (
              <button
                key={t.id}
                type="button"
                onClick={() => goToSlide(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === activeIndex
                    ? 'w-8 bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]'
                    : 'w-2.5 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
                title={`${t.brand} - ${t.author}`}
              />
            ))}
          </div>

          {/* Left/Right Arrow Navigation Buttons */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={prevSlide}
              className="w-11 h-11 sm:w-10 sm:h-10 rounded-full bg-white/[0.06] hover:bg-white/15 border border-white/10 hover:border-white/25 text-white/80 hover:text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 sm:w-4 sm:h-4" />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              className="w-11 h-11 sm:w-10 sm:h-10 rounded-full bg-white/[0.06] hover:bg-white/15 border border-white/10 hover:border-white/25 text-white/80 hover:text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-sm"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 sm:w-4 sm:h-4" />
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* BOTTOM TRUST STATS STRIP WITH MOTION GRAPHICS */}
        {/* ========================================================================= */}
        {!hideHeader && (
          <div className="mt-16 sm:mt-20 pt-10 border-t border-white/[0.08] flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs text-neutral-400">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-0.5 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-semibold text-white">4.9 / 5.0</span>
              <span className="text-neutral-500">Average Client Rating</span>
            </div>

            <div className="h-3 w-[1px] bg-white/10 hidden sm:block" />

            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span className="font-semibold text-white">100% Milestone Completion</span>
            </div>

            <div className="h-3 w-[1px] bg-white/10 hidden sm:block" />

            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="font-semibold text-white">40+ Production Deployments</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;
