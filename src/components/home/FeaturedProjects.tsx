'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { PROJECTS } from '@/data/projects';
import { ArrowUpRight, ArrowRight, Sparkles, ExternalLink } from 'lucide-react';
import { MagneticButton } from '../shared/MagneticButton';

export const FeaturedProjects: React.FC = () => {
  // Top 4 flagship verified case studies
  const featured = PROJECTS.filter((p) => p.featured).slice(0, 4);

  return (
    <section 
      id="work" 
      className="relative pt-20 sm:pt-28 pb-24 sm:pb-32 bg-[#E6E6E6] overflow-hidden border-y border-[#1A1A1A]/10 select-none font-trionn"
    >
      {/* Subtle Architectural Matte Ambient Lighting */}
      <div 
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[350px] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.7)_0%,transparent_70%)]" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header Matching TRIONN Swiss Neo-Grotesque Aesthetic */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1A1A] text-white text-[11px] font-bold uppercase tracking-widest mb-5 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Audited Case Studies</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="trionn-heading text-4xl sm:text-6xl lg:text-7xl font-bold text-[#1E1E1E] tracking-tight leading-[1.04] mb-4"
          >
            Selected works
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="trionn-subheading text-sm sm:text-base text-[#5E5E5E] max-w-lg mx-auto leading-relaxed font-normal"
          >
            A snapshot of our verified production platforms and measurable client impact.
          </motion.p>
        </div>

        {/* 2x2 Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {featured.map((proj, idx) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-3xl overflow-hidden bg-white border border-[#1A1A1A]/10 hover:border-[#1A1A1A]/40 transition-all duration-300 flex flex-col justify-between shadow-[0_12px_35px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.09)] hover:-translate-y-1.5"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#ECECEC] border-b border-[#1A1A1A]/10">
                <Image
                  src={proj.image}
                  alt={proj.name}
                  fill
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                
                {/* Subtle natural vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10 opacity-60 group-hover:opacity-30 transition-opacity" />

                {/* Category Pill */}
                <div className="absolute top-5 left-5 z-10">
                  <span className="px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-white text-[#1A1A1A] border border-[#1A1A1A]/15 backdrop-blur-md shadow-sm">
                    {proj.category}
                  </span>
                </div>

                {/* Live External Button */}
                {proj.liveUrl && (
                  <div className="absolute top-5 right-5 z-10">
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-[#1A1A1A] hover:bg-black text-white flex items-center justify-center border border-white/20 backdrop-blur-md transition-all duration-300 hover:scale-110 shadow-md"
                      title="Open Live Production Website"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                )}
              </div>

              {/* Content Block */}
              <div className="p-7 sm:p-8 flex flex-col flex-1 justify-between bg-white">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="trionn-heading text-2xl sm:text-3xl font-bold text-[#1E1E1E] group-hover:text-black transition-colors">
                      {proj.name}
                    </h3>
                  </div>

                  {/* Result / Stat Highlight */}
                  <div className="text-xs font-semibold text-[#1A1A1A] bg-[#1A1A1A]/5 border border-[#1A1A1A]/10 px-3 py-1 rounded-full inline-flex items-center gap-2 mb-3.5 w-fit">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                    <span>{proj.stat}</span>
                  </div>

                  {/* Description */}
                  <p className="trionn-subheading text-xs sm:text-sm text-[#5E5E5E] leading-relaxed mb-6 font-normal">
                    {proj.shortDesc}
                  </p>
                </div>

                <div>
                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {proj.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-[#1A1A1A]/5 border border-[#1A1A1A]/10 text-[#2B2B2B]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Bottom Action Row */}
                  <div className="pt-4 border-t border-[#1A1A1A]/10 flex items-center justify-between">
                    <Link
                      href="/work"
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1A1A1A] hover:text-black transition-colors group/link"
                    >
                      <span>Explore Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                    </Link>

                    {proj.liveUrl && (
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-[#5E5E5E] hover:text-[#1A1A1A] transition-colors"
                      >
                        <span>Live Deployment</span>
                        <ExternalLink className="w-3 h-3 text-[#1A1A1A]" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Button Pair (TRIONN Signature Dark & Outline Pills) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 sm:mt-20 flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton>
            <Link
              href="/contact"
              className="trionn-btn-dark"
            >
              <span>Let&apos;s Talk</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </MagneticButton>

          <MagneticButton>
            <Link
              href="/work"
              className="trionn-btn-outline"
            >
              <span>View All Projects</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </MagneticButton>
        </motion.div>

      </div>
    </section>
  );
};

export default FeaturedProjects;
