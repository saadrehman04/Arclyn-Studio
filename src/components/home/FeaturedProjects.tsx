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
    <section id="work" className="relative pt-16 sm:pt-24 pb-20 sm:pb-28 bg-white overflow-hidden border-t border-slate-200/80 [background-image:radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px]">
      {/* Soft Ambient Light Glows */}
      <div 
        className="pointer-events-none absolute top-1/4 right-0 w-[600px] h-[600px] bg-cyan-100/40 rounded-full blur-[140px] -z-10" 
        aria-hidden="true" 
      />
      <div 
        className="pointer-events-none absolute top-1/3 left-0 w-[600px] h-[600px] bg-purple-100/50 rounded-full blur-[140px] -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-semibold uppercase tracking-wider mb-5 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            <span>Audited Portfolio</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.1] mb-5"
          >
            Audited Case Studies &amp; <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600">
              Shipped Products
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal"
          >
            Every system below is in active production with verifiable live URLs and documented business outcomes.
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
              className="group relative rounded-3xl overflow-hidden bg-white border border-slate-200/90 hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between shadow-[0_15px_45px_rgba(0,0,0,0.06)] hover:shadow-[0_22px_55px_rgba(0,0,0,0.12)] hover:-translate-y-1.5"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 border-b border-slate-200/80">
                <Image
                  src={proj.image}
                  alt={proj.name}
                  fill
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                
                {/* Subtle light vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-black/20 opacity-60 group-hover:opacity-30 transition-opacity" />

                {/* Category Pill */}
                <div className="absolute top-5 left-5 z-10">
                  <span className="px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-white/95 text-slate-900 border border-slate-200/80 backdrop-blur-md shadow-md">
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
                      className="w-10 h-10 rounded-full bg-white/95 hover:bg-slate-950 hover:text-white text-slate-900 flex items-center justify-center border border-slate-200/80 backdrop-blur-md transition-all duration-300 hover:scale-110 shadow-md"
                      title="Open Live Production Website"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  </div>
                )}
              </div>

              {/* Content Block */}
              <div className="p-8 flex flex-col flex-1 justify-between bg-white">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-display text-2xl font-bold text-slate-950 group-hover:text-cyan-600 transition-colors">
                      {proj.name}
                    </h3>
                  </div>

                  {/* Result / Stat Highlight */}
                  <div className="text-xs font-semibold text-emerald-600 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.7)]" />
                    <span>{proj.stat}</span>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    {proj.shortDesc}
                  </p>
                </div>

                <div>
                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {proj.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-slate-100 border border-slate-200 text-slate-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Bottom Action Row */}
                  <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                    <Link
                      href="/work"
                      className="inline-flex items-center gap-2 text-xs font-semibold text-purple-600 hover:text-purple-800 transition-colors"
                    >
                      <span>Explore Case Study Breakdown</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    {proj.liveUrl && (
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-500 hover:text-slate-900 transition-colors"
                      >
                        <span>Live Deployment</span>
                        <ExternalLink className="w-3 h-3 text-cyan-600" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 flex justify-center"
        >
          <MagneticButton>
            <Link
              href="/work"
              className="px-8 py-4 rounded-full text-sm sm:text-base font-bold text-white btn-pill-primary inline-flex items-center gap-2.5 group shadow-[0_0_30px_rgba(147,51,234,0.25)]"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </MagneticButton>
        </motion.div>

      </div>
    </section>
  );
};

export default FeaturedProjects;
