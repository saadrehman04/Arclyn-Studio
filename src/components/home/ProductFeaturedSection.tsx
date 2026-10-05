'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, Sparkles, ExternalLink } from 'lucide-react';
import { MagneticButton } from '../shared/MagneticButton';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import { LogoIcon } from '@/components/shared/Logo';

const SHOWCASE_TABS = [
  {
    id: 'cheesecake-factory',
    title: 'Cheesecake Factory',
    badge: 'Dining & Hospitality',
    image: '/projects/cheesecake-factory.png',
    url: 'https://www.thecheesecakefactory.com/',
    metric: 'Interactive digital menu, sensory photography & online ordering',
  },
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
    id: 'mark-murphy-dds',
    title: 'Mark Murphy DDS',
    badge: 'Healthcare & Dental',
    image: '/projects/mark-murphy-dds.png',
    url: 'https://www.markmurphydds.com/',
    metric: 'Gentle, high-tech dentistry with real-time patient booking',
  },
];

export const ProductFeaturedSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(SHOWCASE_TABS[0]);

  return (
    <section 
      id="product-featured"
      className="relative pt-16 sm:pt-24 pb-12 sm:pb-20 overflow-hidden bg-white border-y border-slate-200/80 [background-image:radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px]"
    >
      {/* Soft Ambient Light Glows */}
      <div 
        className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[850px] h-[500px] bg-gradient-to-r from-purple-200/40 via-cyan-100/40 to-indigo-200/40 rounded-full blur-[130px] -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ContainerScroll
          cardClassName="border-4 border-slate-200/90 p-2 sm:p-3 bg-white/95 shadow-[0_25px_70px_rgba(0,0,0,0.12)] ring-1 ring-slate-900/5"
          cardInnerClassName="bg-slate-950 border border-slate-800/80"
          titleComponent={
            <div className="flex flex-col items-center">
              {/* Arclyn Studio Brand Centerpiece on Clean White Surface */}
              <div className="flex flex-col items-center justify-center mb-4 sm:mb-5 group">
                <div className="relative mb-2.5 sm:mb-3">
                  <div className="absolute -inset-2.5 bg-gradient-to-r from-purple-500/30 via-indigo-500/25 to-cyan-500/30 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white border border-slate-200/90 flex items-center justify-center p-2.5 sm:p-3 shadow-xl group-hover:scale-105 transition-transform duration-300">
                    <LogoIcon size={52} className="w-11 h-11 sm:w-14 sm:h-14 drop-shadow-[0_0_12px_rgba(147,51,234,0.4)]" />
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-950">
                    Arclyn <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600">Studio</span>
                  </span>
                </div>
              </div>

              {/* Eyebrow Badge with Live Pulse Radar */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-200/80 text-purple-700 text-xs font-semibold uppercase tracking-wider mb-3.5 sm:mb-4.5 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-600" />
                </span>
                <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                <span>Featured Client Products &amp; Live Platforms</span>
              </div>

              {/* Massive Headline in high-contrast crisp dark typography */}
              <div className="max-w-5xl mx-auto mb-3.5 sm:mb-4">
                <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-950 leading-[1.05]">
                  Build Smarter. <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500">
                    Launch Faster.
                  </span>
                </h2>
              </div>

              {/* Social Proof & Star Rating */}
              <div className="flex items-center justify-center gap-2 sm:gap-3 mb-5 sm:mb-7 text-xs sm:text-sm text-slate-600">
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-bold text-slate-900">5.0 Star Rating</span>
                <span className="text-slate-300">•</span>
                <span>50+ Projects Shipped</span>
                <span className="text-slate-300">•</span>
                <span>150k+ Community</span>
              </div>

              {/* Dual Pill CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 sm:mb-8">
                <MagneticButton>
                  <Link
                    href="/contact"
                    className="px-8 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-bold text-white btn-pill-primary inline-flex items-center gap-2.5 group shadow-lg shadow-purple-600/25"
                  >
                    <span>Start Your Project</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </MagneticButton>

                <MagneticButton>
                  <Link
                    href="/work"
                    className="px-8 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-semibold text-slate-800 hover:text-slate-950 bg-white hover:bg-slate-50 border border-slate-300/90 shadow-sm inline-flex items-center gap-2 group transition-all"
                  >
                    <span>Explore Verified Work</span>
                    <ArrowRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-slate-600" />
                  </Link>
                </MagneticButton>
              </div>
            </div>
          }
        >
          {/* Showcase Header Controls & Tabs */}
          <div className="shrink-0 p-3 sm:p-4 border-b border-slate-200/90 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-100">
            {/* Window Dots & Active Label */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-rose-500" />
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
              </div>
              <div className="flex items-center gap-1.5 text-xs font-mono font-medium text-slate-700">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Production Live Showcase</span>
              </div>
            </div>

            {/* Interactive Tabs */}
            <div className="flex flex-wrap items-center gap-1.5">
              {SHOWCASE_TABS.map((tab) => {
                const isActive = activeTab.id === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                      isActive
                        ? 'bg-slate-900 text-white shadow-md shadow-slate-900/25 border border-slate-900'
                        : 'bg-white/80 text-slate-600 hover:text-slate-950 hover:bg-white border border-slate-200/80 shadow-xs'
                    }`}
                  >
                    {tab.title}
                  </button>
                );
              })}
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

export default ProductFeaturedSection;
