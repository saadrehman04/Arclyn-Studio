'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, 
  Quote, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  ArrowUpRight,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play
} from 'lucide-react';
import Link from 'next/link';
import { MagneticButton } from '../shared/MagneticButton';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  category: 'SaaS & AI' | 'E-Commerce' | 'Healthcare & Local' | 'Agency Partners';
  quote: string;
  result: string;
  stars: number;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 'taskify',
    name: 'Alex Carter',
    role: 'Founder & CEO',
    company: 'Taskify Cloud',
    avatar: '/images/feature-portrait-1.jpg',
    category: 'SaaS & AI',
    quote:
      'Arclyn took our rough concept and turned it into a polished SaaS product in just 8 weeks. What usually takes a traditional agency six months of meetings was scoped in two days. The speed and engineering depth blew us away!',
    result: 'Shipped in 8 Weeks • 0 Launch Bugs',
    stars: 5,
  },
  {
    id: 'brightfinance',
    name: 'Lena Torres',
    role: 'CEO & Co-Founder',
    company: 'BrightFinance',
    avatar: '/images/feature-portrait-2.jpg',
    category: 'SaaS & AI',
    quote:
      'Their AI-powered workflow is a game-changer. We launched two weeks ahead of schedule and cut our initial infrastructure and API costs by 40%. Having direct Slack access to the actual systems architects made all the difference.',
    result: '40% Lower Infrastructure Costs',
    stars: 5,
  },
  {
    id: 'horizon',
    name: 'Marcus Vance',
    role: 'Head of Product',
    company: 'Horizon Retail',
    avatar: '/images/team-marcus.jpg',
    category: 'E-Commerce',
    quote:
      'They didn’t just build our platform — they challenged our thinking and made it better. Their interactive AI prototypes nailed 90% of our vision on the first try, and our mobile checkout conversion jumped 38% immediately.',
    result: '+38% Mobile Checkout Lift',
    stars: 5,
  },
  {
    id: 'luxe',
    name: 'Sarah Jenkins',
    role: 'Creative Director',
    company: 'Studio Luxe',
    avatar: '/images/team-sarah.jpg',
    category: 'Agency Partners',
    quote:
      'Finding engineers who can translate high-end Figma prototypes into pixel-perfect code without botching animations is almost impossible. Arclyn treats typography, fluid spacing, and micro-interactions like an art form.',
    result: 'Pixel-Perfect Figma Handoff',
    stars: 5,
  },
  {
    id: 'robertson',
    name: 'Dr. James Robertson',
    role: 'Practice Director',
    company: 'Robertson Dental Clinic',
    avatar: '/images/bento-collaboration.jpg',
    category: 'Healthcare & Local',
    quote:
      'Our old patient intake system was clunky, slow, and costing us appointment bookings every day. Arclyn rebuilt our online booking system with sub-second page loads. We saw online consultations double in the very first month.',
    result: '2x Online Bookings • Sub-Second Speed',
    stars: 5,
  },
  {
    id: 'velocity',
    name: 'Elena Rostova',
    role: 'CTO & Co-Founder',
    company: 'Velocity AI Systems',
    avatar: '/images/team-elena.jpg',
    category: 'SaaS & AI',
    quote:
      'The fixed milestone billing gave our board complete peace of mind. No surprise invoices, no phantom hours. You see code in staging every Friday, and you own 100% of the GitHub repo from day one.',
    result: '100% Full IP Ownership',
    stars: 5,
  },
];

const CATEGORIES = ['All', 'SaaS & AI', 'E-Commerce', 'Healthcare & Local', 'Agency Partners'] as const;

interface TestimonialsSectionProps {
  hideHeader?: boolean;
  className?: string;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  hideHeader = false,
  className = '',
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [direction, setDirection] = useState<number>(1);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [itemsPerPage, setItemsPerPage] = useState<number>(3);

  // Responsive cards per slide
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const filteredTestimonials =
    activeCategory === 'All'
      ? TESTIMONIALS
      : TESTIMONIALS.filter((t) => t.category === activeCategory);

  const totalPages = Math.ceil(filteredTestimonials.length / itemsPerPage);

  // Reset page when category or viewport changes
  useEffect(() => {
    setCurrentPage(0);
  }, [activeCategory, itemsPerPage]);

  // Autoplay sliding animation
  useEffect(() => {
    if (isPaused || totalPages <= 1) return;
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 6500);
    return () => clearInterval(interval);
  }, [isPaused, totalPages]);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentPage((prev) => {
      if (newDirection > 0) {
        return (prev + 1) % totalPages;
      }
      return (prev - 1 + totalPages) % totalPages;
    });
  };

  const currentTestimonials = filteredTestimonials.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  return (
    <section 
      id="testimonials"
      className={`relative ${
        hideHeader 
          ? 'py-6' 
          : 'pt-20 sm:pt-28 pb-24 sm:pb-32 bg-[#E6E6E6] border-y border-[#1A1A1A]/10 font-trionn'
      } overflow-hidden select-none ${className}`}
    >
      {/* Subtle Architectural Matte Ambient Lighting */}
      {!hideHeader && (
        <div 
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[350px] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.7)_0%,transparent_70%)]" 
          aria-hidden="true" 
        />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header Matching TRIONN Swiss Neo-Grotesque Aesthetic */}
        {!hideHeader && (
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1A1A] text-white text-[11px] font-bold uppercase tracking-widest mb-5 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Real Client Voices</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="trionn-heading text-4xl sm:text-6xl lg:text-7xl font-bold text-[#1E1E1E] tracking-tight leading-[1.04] mb-4"
            >
              What founders say
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="trionn-subheading text-sm sm:text-base text-[#5E5E5E] max-w-xl mx-auto leading-relaxed font-normal"
            >
              Honest feedback from founders, product leaders, and operators who traded agency bureaucracy for direct senior engineering and autonomous AI execution.
            </motion.p>

            {/* Social Proof Trust Bar Matching TRIONN Architectural Light Theme */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mt-8 inline-flex flex-wrap items-center justify-center gap-3 sm:gap-6 px-6 py-2.5 rounded-full bg-white border border-[#1A1A1A]/10 text-xs text-[#2B2B2B] shadow-sm"
            >
              <div className="flex items-center gap-1.5 font-semibold text-[#1E1E1E]">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <span>4.98 / 5.0</span>
              </div>
              <span className="hidden sm:inline text-[#1A1A1A]/20">•</span>
              <div className="flex items-center gap-1.5 text-[#1A1A1A] font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>100% On-Time Milestones</span>
              </div>
              <span className="hidden sm:inline text-[#1A1A1A]/20">•</span>
              <div className="text-[#5E5E5E]">
                <span className="font-bold text-[#1E1E1E]">30+</span> Production Launches
              </div>
            </motion.div>
          </div>
        )}

        {/* Category Tabs & Slider Navigation Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-4 border-b border-[#1A1A1A]/10">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            {CATEGORIES.map((cat) => {
              const isSelected = activeCategory === cat;
              const count =
                cat === 'All'
                  ? TESTIMONIALS.length
                  : TESTIMONIALS.filter((t) => t.category === cat).length;

              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full text-xs transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-[#1A1A1A] text-white font-semibold shadow-sm'
                      : 'bg-white/80 hover:bg-white text-[#5E5E5E] hover:text-[#1A1A1A] border border-[#1A1A1A]/10 font-medium'
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-[#1A1A1A]/5 text-[#5E5E5E]'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Slide Arrow Navigation & Autoplay Controls */}
          {totalPages > 1 && (
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsPaused((prev) => !prev)}
                className="w-8 h-8 rounded-full bg-white hover:bg-neutral-100 border border-[#1A1A1A]/15 text-[#1A1A1A] flex items-center justify-center transition-colors text-xs shadow-sm cursor-pointer"
                title={isPaused ? "Resume Autoplay" : "Pause Autoplay"}
              >
                {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
              </button>

              <button
                type="button"
                onClick={() => paginate(-1)}
                className="w-9 h-9 rounded-xl bg-white hover:bg-[#1A1A1A] text-[#1A1A1A] hover:text-white border border-[#1A1A1A]/15 flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-sm cursor-pointer"
                aria-label="Previous testimonials"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {/* Dynamic Slide Dots */}
              <div className="flex items-center gap-1.5 px-2">
                {Array.from({ length: totalPages }).map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      setDirection(idx > currentPage ? 1 : -1);
                      setCurrentPage(idx);
                    }}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      idx === currentPage
                        ? 'w-7 bg-[#1A1A1A]'
                        : 'w-2 bg-[#1A1A1A]/20 hover:bg-[#1A1A1A]/40'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => paginate(1)}
                className="w-9 h-9 rounded-xl bg-white hover:bg-[#1A1A1A] text-[#1A1A1A] hover:text-white border border-[#1A1A1A]/15 flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-sm cursor-pointer"
                aria-label="Next testimonials"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {/* Animated Sliding Testimonials Container */}
        <div 
          className="relative min-h-[380px] overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={`${activeCategory}-${currentPage}`}
              custom={direction}
              variants={{
                enter: (dir: number) => ({
                  x: dir > 0 ? 120 : -120,
                  opacity: 0,
                  scale: 0.98,
                }),
                center: {
                  x: 0,
                  opacity: 1,
                  scale: 1,
                  transition: {
                    x: { type: "spring", stiffness: 260, damping: 28 },
                    opacity: { duration: 0.4 },
                    scale: { duration: 0.4 },
                  },
                },
                exit: (dir: number) => ({
                  x: dir > 0 ? -120 : 120,
                  opacity: 0,
                  scale: 0.98,
                  transition: {
                    x: { type: "spring", stiffness: 260, damping: 28 },
                    opacity: { duration: 0.25 },
                  },
                }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            >
              {currentTestimonials.map((t) => (
                <div
                  key={t.id}
                  className="group relative rounded-3xl p-7 sm:p-8 bg-white border border-[#1A1A1A]/10 hover:border-[#1A1A1A]/40 transition-all duration-300 flex flex-col justify-between shadow-[0_12px_35px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.09)] hover:-translate-y-1.5 overflow-hidden"
                >
                  {/* Decorative Quote Icon Background */}
                  <div className="absolute top-6 right-6 text-[#1A1A1A]/5 group-hover:text-[#1A1A1A]/10 transition-colors pointer-events-none">
                    <Quote className="w-16 h-16 rotate-180" />
                  </div>

                  <div className="relative z-10">
                    {/* Star Rating & Verified Badge */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-1">
                        {[...Array(t.stars)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                        ))}
                      </div>
                      <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#1A1A1A] px-2.5 py-1 rounded-full bg-[#1A1A1A]/5 border border-[#1A1A1A]/10">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Verified Client</span>
                      </div>
                    </div>

                    {/* Human-Friendly Quote Body */}
                    <p className="trionn-subheading text-sm sm:text-base text-[#2B2B2B] leading-relaxed font-normal mb-6">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </div>

                  <div className="relative z-10 pt-5 border-t border-[#1A1A1A]/10">
                    {/* Measurable Result Badge */}
                    <div className="mb-4 text-xs font-semibold text-[#1A1A1A] bg-[#1A1A1A]/5 border border-[#1A1A1A]/10 px-3 py-1 rounded-full w-fit inline-flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                      <span>{t.result}</span>
                    </div>

                    {/* Author Credentials */}
                    <div className="flex items-center gap-3.5">
                      <div className="relative w-11 h-11 rounded-full overflow-hidden border border-[#1A1A1A]/15 bg-[#ECECEC] flex-shrink-0">
                        <Image
                          src={t.avatar}
                          alt={t.name}
                          fill
                          className="object-cover"
                          sizes="44px"
                        />
                      </div>
                      <div>
                        <div className="trionn-heading text-sm sm:text-base font-bold text-[#1E1E1E] group-hover:text-black transition-colors">
                          {t.name}
                        </div>
                        <div className="text-xs text-[#5E5E5E] mt-0.5">
                          {t.role} • <span className="text-[#2B2B2B] font-medium">{t.company}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom CTA Banner (TRIONN Signature Dark & Outline Pills) */}
        {!hideHeader && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 sm:mt-20 text-center"
          >
            <p className="trionn-subheading text-sm sm:text-base text-[#5E5E5E] mb-6">
              Ready to experience engineering speed and clarity for yourself?
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <MagneticButton>
                <Link
                  href="/contact"
                  className="trionn-btn-dark"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </MagneticButton>

              <MagneticButton>
                <Link
                  href="/work"
                  className="trionn-btn-outline"
                >
                  <span>Explore Verified Work</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </MagneticButton>
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
};

export default TestimonialsSection;
