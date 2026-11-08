'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { Reveal, SplitText } from '@/components/motion/Reveal';
import {
  Star,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
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
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-zinc-400">
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
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-zinc-400">
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
  const [isVisible, setIsVisible] = useState(false);
  const [isDocumentVisible, setIsDocumentVisible] = useState(true);
  const [cardWidth, setCardWidth] = useState(840);
  const sectionRef = useRef<HTMLElement>(null);

  const SLIDE_DURATION = 2600; // Fast auto-scroll for dynamic testimonials cycling

  // Responsive card measurement
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setCardWidth(Math.min(width - 28, 410));
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

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, { threshold: 0.05 });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateVisibility = () => setIsDocumentVisible(!document.hidden);
    document.addEventListener('visibilitychange', updateVisibility);
    return () => document.removeEventListener('visibilitychange', updateVisibility);
  }, []);

  const total = TESTIMONIALS_DATA.length;

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goToSlide = (idx: number) => {
    setActiveIndex(idx);
  };

  // Advance only while visible; CSS animates the progress bar without React updates.
  useEffect(() => {
    if (isPaused || !isVisible || !isDocumentVisible) return;
    const timer = window.setTimeout(nextSlide, SLIDE_DURATION);
    return () => window.clearTimeout(timer);
  }, [activeIndex, isDocumentVisible, isPaused, isVisible, nextSlide]);

  // Compute offset cards so left (-1), center (0), and right (+1) are always populated
  const visibleOffsets = [-1, 0, 1];

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className={`relative bg-[var(--bg)] text-white py-20 sm:py-28 overflow-hidden select-none ${className}`}
    >
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ========================================================================= */}
        {/* SECTION HEADER (PROPORTIONATE SCALE MATCHING SCREENSHOT) */}
        {/* ========================================================================= */}
        {!hideHeader && (
          <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
            <Reveal as="p" variant="fade" className="eyebrow mb-6 justify-center">
              Client stories
            </Reveal>
            <SplitText
              text={'Hear it from the brands\nthat trust us.'}
              accentWords={[6, 7]}
              accentClassName="text-zinc-500"
              className="font-display text-[clamp(2.25rem,5.4vw,4.5rem)] font-semibold leading-[1] tracking-[-0.045em] text-white"
            />
            <Reveal as="p" variant="up" delay={150} className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-zinc-400">
              Founders and teams on what it&apos;s like to build with us.
            </Reveal>
          </div>
        )}

        {/* ========================================================================= */}
        {/* THREE-CARD DISPLAY STAGE (LEFT PEEK, CENTER ACTIVE, RIGHT PEEK) */}
        {/* ========================================================================= */}
        <div 
          className="relative w-full overflow-hidden py-1"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div className="relative flex items-center justify-center min-h-[220px] sm:min-h-[270px] md:min-h-[300px]">
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
                  className={`absolute rounded-2xl transition-all duration-[350ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] overflow-hidden p-4 sm:p-5 md:p-6 select-none ${
                    isCenter
                      ? 'bg-[#15161b] border border-white/[0.10] shadow-[0_16px_40px_-18px_rgba(0,0,0,0.8)] opacity-100 z-20 cursor-default'
                      : 'bg-[#121317] border border-white/[0.05] shadow-md opacity-35 hover:opacity-60 z-10 cursor-pointer hidden md:block'
                  }`}
                >
                  {/* Card Interior Grid: Text on Left, Client Portrait on Right */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-5 items-center relative z-10">
                    {/* LEFT COLUMN: Brand, Stars, Headline, Quote, Author */}
                    <div className="md:col-span-7 flex flex-col justify-between h-full space-y-2.5 sm:space-y-4">
                      {/* Top Row: Brand & Rating */}
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        {/* Brand Icon + Name */}
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center p-1 sm:p-1.5">
                            <BrandIcon type={t.brandIcon} className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          </div>
                          <span className="text-white text-xs sm:text-base font-semibold tracking-tight">
                            {t.brand}
                          </span>
                        </div>

                        {/* Star Rating Badge */}
                        <div className="flex items-center gap-1.5 bg-white/[0.03] border border-white/10 px-2 py-0.5 rounded-full">
                          <div className="flex items-center gap-0.5">
                            {[1, 2, 3, 4, 5].map((s) => (
                              <Star
                                key={s}
                                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 ${
                                  s <= t.rating
                                    ? 'fill-amber-400 text-amber-400 drop-shadow-[0_0_6px_rgba(251,191,36,0.6)]'
                                    : 'fill-neutral-700 text-neutral-700'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-[9px] sm:text-[10px] font-semibold text-white/90 font-mono">
                            {t.ratingValue}
                          </span>
                        </div>
                      </div>

                      {/* Review Title & Body Quote */}
                      <div className="space-y-1 sm:space-y-2">
                        <h3 className="text-sm sm:text-lg font-semibold text-white tracking-tight leading-snug line-clamp-1">
                          {t.title}
                        </h3>
                        <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed font-normal line-clamp-3">
                          &ldquo;{t.quote}&rdquo;
                        </p>
                      </div>

                      {/* Author Credentials & Big Portrait */}
                      <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between">
                        <div className="flex items-center gap-3.5">
                          {/* Prominent Client Portrait on mobile (< md): Significantly bigger, crisp, stylish */}
                          <div className="md:hidden relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden border border-white/20 bg-neutral-800 shrink-0 shadow-[0_4px_16px_rgba(0,0,0,0.5)]">
                            <Image
                              src={t.image}
                              alt={t.author}
                              fill
                              sizes="64px"
                              className="object-cover object-center grayscale contrast-105"
                            />
                          </div>

                          <div className="flex flex-col justify-center">
                            <div className="text-white text-sm sm:text-base font-semibold tracking-tight flex items-center gap-1.5">
                              <span>{t.author}</span>
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            </div>
                            <div className="text-neutral-400 text-xs sm:text-sm mt-0.5">
                              {t.role} · <span className="text-neutral-300 font-medium">{t.brand}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* RIGHT COLUMN: Monochrome Client Portrait (Desktop/Tablet) */}
                    <div className="hidden md:block md:col-span-5 relative w-full h-[180px] md:h-[210px] rounded-xl overflow-hidden bg-neutral-900 border border-white/10 shadow-sm">
                      <Image
                        src={t.image}
                        alt={`${t.author} - ${t.brand}`}
                        fill
                        sizes="360px"
                        className="object-cover object-center grayscale contrast-105 brightness-95 group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      {/* Studio edge gradients */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#15161b]/80 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute inset-0 bg-gradient-to-r from-[#15161b]/35 via-transparent to-transparent pointer-events-none" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Side Fade Vignettes for Seamless Depth */}
          <div className="pointer-events-none absolute left-0 inset-y-0 w-16 sm:w-28 bg-gradient-to-r from-[var(--bg)] to-transparent z-30" />
          <div className="pointer-events-none absolute right-0 inset-y-0 w-16 sm:w-28 bg-gradient-to-l from-[var(--bg)] to-transparent z-30" />
        </div>

        {/* ========================================================================= */}
        {/* CONCISE INTERACTIVE CONTROLS: Dots & Navigation Arrows */}
        {/* ========================================================================= */}
        <div className="mt-6 sm:mt-10 flex items-center justify-between max-w-[720px] mx-auto px-4">
          {/* Interactive Slide Dots */}
          <div className="flex items-center gap-2">
            {TESTIMONIALS_DATA.map((t, idx) => (
              <button
                key={t.id}
                type="button"
                onClick={() => goToSlide(idx)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === activeIndex
                    ? 'w-8 bg-white shadow-[0_0_10px_rgba(255,255,255,0.7)]'
                    : 'w-2 bg-white/20 hover:bg-white/40'
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
              className="w-10 h-10 rounded-full bg-white/[0.06] hover:bg-white/15 border border-white/10 hover:border-white/25 text-white/80 hover:text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-white/[0.06] hover:bg-white/15 border border-white/10 hover:border-white/25 text-white/80 hover:text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-sm"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
