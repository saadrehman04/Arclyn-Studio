'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, Sparkles, ExternalLink } from 'lucide-react';
import { MagneticButton } from '../shared/MagneticButton';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';

const SHOWCASE_TABS = [
  {
    id: 'prestige',
    title: 'Prestige Estates',
    badge: 'Luxury Real Estate',
    image: '/projects/real-estate.png',
    url: 'https://real-estate-website-topaz-mu.vercel.app/',
    metric: 'Sub-second transitions across $10M+ architectural estates',
  },
  {
    id: 'fitusion',
    title: 'Fitusion',
    badge: 'Fitness & Athletics',
    image: '/projects/fitusion.png',
    url: 'https://website-fitusion.vercel.app/',
    metric: 'Sculpt your body, elevate your spirit — 12k+ active members',
  },
  {
    id: 'cheesecake-factory',
    title: 'Cheesecake Factory',
    badge: 'Dining & Hospitality',
    image: '/projects/cheesecake-factory.png',
    url: 'https://www.thecheesecakefactory.com/',
    metric: 'Interactive digital menu, sensory photography & online ordering',
  },
  {
    id: 'mark-murphy-dds',
    title: 'Mark Murphy DDS',
    badge: 'Healthcare & Dental',
    image: '/projects/mark-murphy-dds.png',
    url: 'https://www.markmurphydds.com/',
    metric: 'Gentle, high-tech dentistry with real-time patient booking',
  },
];

export const HeroSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(SHOWCASE_TABS[0]);

  return (
    <section className="relative pt-24 sm:pt-28 pb-6 overflow-hidden bg-cosmic-grid">
      {/* Cinematic Top 3D Liquid Chrome Ribbon & Ambient Glow */}
      <div className="liquid-chrome-hero" />
      <div className="light-ribbon-top" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ContainerScroll
          titleComponent={
            <div className="flex flex-col items-center">
              {/* 1. Eyebrow Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.03] border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-6 sm:mb-8 backdrop-blur-xl shadow-[0_0_20px_rgba(245,158,11,0.15)]">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Full-Stack Engineering &amp; AI Systems</span>
              </div>

              {/* 2. Massive Syne Headline */}
              <div className="max-w-5xl mx-auto mb-6">
                <h1 className="font-display text-4xl sm:text-6xl lg:text-8xl font-extrabold tracking-tight text-white leading-[1.02]">
                  Build Smarter. <br />
                  <span className="text-gradient-hero">Launch Faster.</span>
                </h1>
              </div>

              {/* 3. Editorial Subheadline */}
              <p className="text-sm sm:text-base lg:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto mb-6 sm:mb-8 font-normal">
                Arclyn Studio combines full-stack web engineering with autonomous AI automation to turn ambitious ideas into market-ready products — websites, apps, and intelligent systems built to actually grow your business.
              </p>

              {/* 4. Social Proof & Star Rating */}
              <div className="flex items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-semibold text-white">5.0 Star Rating</span>
                <span className="text-slate-600">•</span>
                <span>50+ Projects Shipped</span>
                <span className="text-slate-600">•</span>
                <span>150k+ Community</span>
              </div>

              {/* 5. Dual Pill CTA Buttons with Magnetic Physics */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 sm:mb-14">
                <MagneticButton>
                  <Link
                    href="/contact"
                    className="px-8 py-4 rounded-full text-sm sm:text-base font-bold text-white btn-pill-primary inline-flex items-center gap-2.5 group"
                  >
                    <span>Start Your Project</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </MagneticButton>

                <MagneticButton>
                  <Link
                    href="/work"
                    className="px-8 py-4 rounded-full text-sm sm:text-base font-semibold text-slate-200 btn-pill-secondary inline-flex items-center gap-2 group"
                  >
                    <span>Explore Verified Work</span>
                    <ArrowRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                  </Link>
                </MagneticButton>
              </div>
            </div>
          }
        >
          {/* Showcase Header Controls & Tabs */}
          <div className="shrink-0 p-3 sm:p-4 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#090E24]">
            {/* Window Dots & Active Label */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <div className="flex items-center gap-1.5 text-xs font-mono text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Production Live Showcase</span>
              </div>
            </div>

            {/* Interactive Tabs */}
            <div className="flex flex-wrap items-center gap-1.5">
              {SHOWCASE_TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    activeTab.id === tab.id
                      ? 'bg-purple-600 text-white shadow-md shadow-purple-600/40'
                      : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {tab.title}
                </button>
              ))}
            </div>
          </div>

          {/* Showcase Media Display Container */}
          <div className="relative flex-1 w-full bg-slate-950 overflow-hidden group">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="relative w-full h-full"
              >
                <Image
                  src={activeTab.image}
                  alt={activeTab.title}
                  fill
                  priority
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060913] via-transparent to-black/20 opacity-60" />
              </motion.div>
            </AnimatePresence>

            {/* Central Glowing Interactive Play / Demo Badge */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <a
                href={activeTab.url}
                target="_blank"
                rel="noopener noreferrer"
                className="pointer-events-auto w-14 h-14 sm:w-18 sm:h-18 rounded-full bg-white/10 hover:bg-purple-600/90 border border-white/30 backdrop-blur-xl flex items-center justify-center text-white shadow-[0_0_40px_rgba(139,92,246,0.6)] transition-all hover:scale-110 group/btn"
                title="Open Live Production Website"
              >
                <ExternalLink className="w-5 h-5 sm:w-7 sm:h-7 group-hover/btn:rotate-12 transition-transform" />
              </a>
            </div>

            {/* Bottom Telemetry Overlay */}
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-2.5 sm:p-3.5 rounded-xl bg-[#060913]/90 border border-white/10 backdrop-blur-md">
              <div>
                <div className="text-xs font-bold text-white flex items-center gap-2">
                  <span>{activeTab.title}</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/20 text-purple-300">
                    {activeTab.badge}
                  </span>
                </div>
                <div className="text-xs text-emerald-400 font-medium mt-0.5">
                  {activeTab.metric}
                </div>
              </div>

              <a
                href={activeTab.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 self-start sm:self-auto"
              >
                <span>Visit Production URL</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </ContainerScroll>
      </div>
    </section>
  );
};
