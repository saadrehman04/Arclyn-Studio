'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SERVICES } from '@/data/services';
import { 
  Globe, 
  Smartphone, 
  Bot, 
  Zap, 
  Code2, 
  Cloud, 
  ArrowRight, 
  Sparkles,
  CheckCircle2 
} from 'lucide-react';
import { MagneticButton } from '../shared/MagneticButton';

const ICON_MAP: Record<string, React.ElementType> = {
  Globe,
  Smartphone,
  Bot,
  Zap,
  Code2,
  Cloud,
};

export const ServicesOverview: React.FC = () => {
  return (
    <section className="relative py-28 sm:py-36 bg-[#050711] overflow-hidden">
      {/* Ambient background accents */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-5"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Comprehensive Practices</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-5"
          >
            Smart Solutions for <br />
            <span className="text-gradient-hero">Modern Businesses</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal"
          >
            Engineered for high conversion, rock-solid reliability, and exponential execution speed. No generic templates — only custom architectures built to dominate.
          </motion.p>
        </div>

        {/* 6 Services Grid matching reference obsidian styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {SERVICES.map((service, index) => {
            const Icon = ICON_MAP[service.iconName] || Globe;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group relative rounded-3xl p-8 bg-[#090d1a] border border-white/[0.08] hover:border-cyan-400/40 transition-all duration-400 flex flex-col justify-between overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.5)] hover:-translate-y-1.5"
              >
                {/* Subtle corner hover illumination */}
                <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-bl-full pointer-events-none group-hover:from-cyan-400/20 transition-all duration-500" />

                <div>
                  {/* Circular Gold/Amber/Cyan Icon Treatment matching reference */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-500/20 via-purple-500/10 to-cyan-500/20 border border-amber-400/30 flex items-center justify-center text-amber-300 group-hover:scale-110 group-hover:border-cyan-400/60 group-hover:text-cyan-300 transition-all duration-300 shadow-[0_0_20px_rgba(245,158,11,0.15)]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-[11px] font-medium px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-slate-400 group-hover:text-slate-200">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                    {service.shortDesc}
                  </p>

                  {/* Key Deliverable Highlights */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-white/[0.06]">
                    {service.deliverables.slice(0, 2).map((item) => (
                      <div key={item.title} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                        <span className="line-clamp-1">{item.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Link */}
                <div className="pt-4 border-t border-white/[0.06]">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center justify-between w-full text-xs font-semibold text-slate-300 group-hover:text-cyan-300 transition-colors"
                  >
                    <span>View Architecture Blueprint</span>
                    <div className="w-7 h-7 rounded-full bg-white/[0.05] group-hover:bg-cyan-400/20 flex items-center justify-center group-hover:text-cyan-300 transition-all">
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Bar matching reference */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-slate-400"
        >
          <span>Looking for a bespoke architecture or tailored scope?</span>
          <MagneticButton>
            <Link
              href="/services"
              className="px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.12] hover:border-cyan-400/50 transition-all duration-200 inline-flex items-center gap-2 group"
            >
              <span>Explore All 6 Practices</span>
              <ArrowRight className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
            </Link>
          </MagneticButton>
        </motion.div>

      </div>
    </section>
  );
};
