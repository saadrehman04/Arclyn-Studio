'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { PROJECTS } from '@/data/projects';
import { ArrowUpRight, ArrowRight, Sparkles, ExternalLink } from 'lucide-react';
import { MagneticButton } from '../shared/MagneticButton';
import { LightPillar } from '@/components/ui/LightPillar';

export const FeaturedProjects: React.FC = () => {
  // Top 4 flagship verified case studies
  const featured = PROJECTS.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="relative py-28 sm:py-36 bg-[#050711] overflow-hidden">
      {/* Live Light Pillar background — vertical volumetric column of light over the shipped products */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1300px] h-[1000px] z-0 opacity-60 mix-blend-screen overflow-hidden"
        style={{
          maskImage: 'radial-gradient(ellipse at 50% 30%, black 25%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 30%, black 25%, transparent 75%)',
        }}
        aria-hidden="true"
      >
        <LightPillar
          topColor="#7C3AED"
          bottomColor="#06B6D4"
          intensity={0.9}
          rotationSpeed={0.25}
          glowAmount={0.0055}
          pillarWidth={2.8}
          pillarHeight={0.36}
          noiseIntensity={0.35}
          pillarRotation={0}
          interactive={false}
          mixBlendMode="screen"
          quality="high"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header matching reference */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-cyan-400/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-5"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Audited Portfolio</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-5"
          >
            Audited Case Studies &amp; <br />
            <span className="text-gradient-hero">Shipped Products</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal"
          >
            Every system below is in active production with verifiable live URLs and documented business outcomes.
          </motion.p>
        </div>

        {/* 2x2 Case Studies Grid matching reference */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {featured.map((proj, idx) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-3xl overflow-hidden bg-[#090d1a] border border-white/[0.08] hover:border-cyan-400/40 transition-all duration-400 flex flex-col justify-between shadow-[0_10px_40px_rgba(0,0,0,0.5)] hover:-translate-y-1.5"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950 border-b border-white/[0.08]">
                <Image
                  src={proj.image}
                  alt={proj.name}
                  fill
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                
                {/* Subtle gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090d1a] via-transparent to-black/30 opacity-70 group-hover:opacity-40 transition-opacity" />

                {/* Category Pill */}
                <div className="absolute top-5 left-5 z-10">
                  <span className="px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-[#050711]/90 text-cyan-300 border border-cyan-400/30 backdrop-blur-md shadow-lg">
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
                      className="w-10 h-10 rounded-full bg-[#050711]/90 hover:bg-cyan-500 hover:text-black text-white flex items-center justify-center border border-white/20 backdrop-blur-md transition-all duration-300 hover:scale-110 shadow-lg"
                      title="Open Live Production Website"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  </div>
                )}
              </div>

              {/* Content Block */}
              <div className="p-8 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-display text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {proj.name}
                    </h3>
                  </div>

                  {/* Result / Stat Highlight */}
                  <div className="text-xs font-semibold text-emerald-400 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                    <span>{proj.stat}</span>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                    {proj.shortDesc}
                  </p>
                </div>

                <div>
                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {proj.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-white/[0.04] border border-white/[0.08] text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Bottom Action Row */}
                  <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                    <Link
                      href="/work"
                      className="inline-flex items-center gap-2 text-xs font-semibold text-purple-400 hover:text-cyan-300 transition-colors"
                    >
                      <span>Explore Case Study Breakdown</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    {proj.liveUrl && (
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-white transition-colors"
                      >
                        <span>Live Deployment</span>
                        <ExternalLink className="w-3 h-3 text-cyan-400" />
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
              className="px-8 py-4 rounded-full text-sm sm:text-base font-bold text-white btn-pill-primary inline-flex items-center gap-2.5 group shadow-[0_0_30px_rgba(147,51,234,0.3)]"
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
