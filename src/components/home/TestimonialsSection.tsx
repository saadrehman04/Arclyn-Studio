'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, CheckCircle2, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { NeonSectionBackground } from '../shared/NeonSectionBackground';

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

  const filteredTestimonials =
    activeCategory === 'All'
      ? TESTIMONIALS
      : TESTIMONIALS.filter((t) => t.category === activeCategory);

  return (
    <section className={`relative ${hideHeader ? 'py-6' : 'py-28 sm:py-36'} bg-[#050711] overflow-hidden ${hideHeader ? '' : 'border-t border-white/5'} ${className}`}>
      {/* Neon Strand Background Atmosphere */}
      <NeonSectionBackground variant="minimalist-strands" position="full" opacity={0.35} flipX={true} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        {!hideHeader && (
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Real Client Voices</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-5">
              What Founders Say <br />
              <span className="text-gradient-hero">After Shipping With Us</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Honest feedback from founders, product leaders, and operators who traded agency bureaucracy for direct senior engineering and autonomous AI execution.
            </p>

            {/* Social Proof Trust Bar */}
            <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-3 sm:gap-6 px-5 py-2.5 rounded-2xl bg-white/[0.03] border border-white/10 text-xs text-slate-300 backdrop-blur-md">
              <div className="flex items-center gap-1.5 text-amber-400 font-semibold">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span>4.98 / 5.0</span>
              </div>
              <span className="hidden sm:inline text-white/20">•</span>
              <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>100% On-Time Milestones</span>
              </div>
              <span className="hidden sm:inline text-white/20">•</span>
              <div className="text-slate-300">
                <span className="font-semibold text-white">30+</span> Production Launches
              </div>
            </div>
          </div>
        )}

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
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
                className={`flex items-center gap-2 px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-lg shadow-purple-600/30 scale-105'
                    : 'bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10'
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-white/5 text-slate-400'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Testimonials 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredTestimonials.map((t) => (
            <div
              key={t.id}
              className="rounded-3xl p-7 sm:p-8 bg-[#090d1a] border border-white/[0.08] hover:border-cyan-400/40 transition-all duration-300 flex flex-col justify-between group shadow-[0_4px_30px_rgba(0,0,0,0.5)] hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Decorative Quote Icon Background */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none text-cyan-400">
                <Quote className="w-16 h-16 rotate-180" />
              </div>

              <div className="relative z-10">
                {/* Star Rating & Verified Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1">
                    {[...Array(t.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <div className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    <span>Verified Client</span>
                  </div>
                </div>

                {/* Human-Friendly Quote Body */}
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-light mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="relative z-10 pt-5 border-t border-white/[0.06]">
                {/* Measurable Result Badge */}
                <div className="mb-4 text-xs font-semibold text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-lg w-fit">
                  {t.result}
                </div>

                {/* Author Credentials */}
                <div className="flex items-center gap-3.5">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-purple-500/40 flex-shrink-0">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      fill
                      className="object-cover"
                      sizes="44px"
                    />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white group-hover:text-cyan-200 transition-colors">
                      {t.name}
                    </div>
                    <div className="text-xs text-slate-400">
                      {t.role} • <span className="text-slate-300">{t.company}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-16 text-center">
          <p className="text-sm text-slate-400 mb-5">
            Ready to experience engineering speed and clarity for yourself?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl text-sm font-semibold text-white btn-primary-gradient"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/work"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            >
              <span>Explore Verified Work</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};
