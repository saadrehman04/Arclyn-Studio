'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import { MagneticButton } from '../shared/MagneticButton';

export const TeamSection: React.FC = () => {
  return (
    <section id="leadership" className="relative pt-16 sm:pt-24 pb-14 sm:pb-20 bg-white overflow-hidden border-t border-slate-200/80">
      {/* High-Key Studio Light Gradient Atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50 pointer-events-none" />
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] bg-gradient-to-r from-purple-100/50 via-cyan-100/40 to-indigo-100/50 rounded-full blur-[130px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-semibold uppercase tracking-wider mb-5 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            <span>Senior Leadership</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.1] mb-5"
          >
            The Architects <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600">
              Behind the Code
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal"
          >
            A dedicated collective of senior engineers, AI researchers, and design strategists who build systems designed to win.
          </motion.p>
        </div>

        {/* Real Standing Squad Lineup on Light Studio Stage */}
        <div className="relative max-w-6xl mx-auto pt-4 pb-2">
          <div className="relative z-10 flex flex-col md:flex-row items-center md:items-end justify-center gap-10 md:gap-6 lg:gap-8">
            
            {/* 1. Saad Rabbani */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col items-center w-full max-w-[230px] sm:max-w-[250px] md:max-w-[265px] group"
            >
              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-md border border-slate-200/90 bg-slate-950">
                <Image
                  src="/images/team/saad-rabbani-zoomed.jpg"
                  alt="Saad Rabbani"
                  fill
                  className="object-cover object-top contrast-[1.05] group-hover:scale-105 transition-all duration-700 ease-out"
                  sizes="(max-width: 640px) 100vw, 265px"
                />
              </div>
              <div className="mt-3 text-center min-h-[48px] flex flex-col justify-start">
                <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 group-hover:text-cyan-600 transition-colors">
                  Saad Rabbani
                </h3>
                <div className="text-xs font-semibold text-slate-500 mt-0.5">
                  Meta Ads Specialist
                </div>
              </div>
            </motion.div>

            {/* 2. Saad Rehman (Founder & CEO - Highlighted Lead) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative flex flex-col items-center w-full max-w-[230px] sm:max-w-[250px] md:max-w-[265px] md:-translate-y-3 z-20 group"
            >
              {/* Leadership Aura & Ambient Backlight Glow */}
              <div 
                className="absolute -inset-x-4 -top-6 bottom-12 bg-gradient-to-t from-cyan-400/25 via-purple-500/20 to-transparent rounded-3xl blur-2xl opacity-90 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10" 
                aria-hidden="true"
              />

              {/* Leadership Badge */}
              <div className="mb-2 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-cyan-50 to-purple-50 border border-cyan-300 text-cyan-800 text-[10px] font-bold uppercase tracking-wider shadow-sm inline-flex items-center gap-1.5 select-none">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
                <span>Leadership</span>
              </div>

              {/* Portrait Container with Luminous Ring Highlight */}
              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden ring-2 ring-cyan-500/80 shadow-[0_15px_40px_rgba(6,182,212,0.25)] border border-cyan-400/50 bg-slate-950 transition-all duration-500">
                <Image
                  src="/images/team/saad-rehman-zoomed.jpg"
                  alt="Saad Rehman"
                  fill
                  className="object-cover object-top contrast-[1.05] scale-[1.12] origin-[50%_25%] group-hover:scale-[1.18] transition-all duration-700 ease-out"
                  sizes="(max-width: 640px) 100vw, 265px"
                  priority
                />
                
                {/* Ambient Shimmer Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>

              {/* Under-portrait glowing stage accent */}
              <div className="w-28 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mt-2 shadow-[0_0_12px_rgba(6,182,212,0.7)] opacity-90" />

              <div className="mt-2.5 text-center min-h-[56px] flex flex-col items-center justify-start">
                <h3 className="font-display text-lg sm:text-xl font-extrabold text-slate-950 group-hover:text-cyan-600 transition-colors">
                  Saad Rehman
                </h3>
                
                {/* 1. Below name: Founder and CEO */}
                <div className="text-xs sm:text-[13px] font-bold uppercase tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-600 mt-0.5">
                  Founder and CEO
                </div>

                {/* 2. Adjusted: AI Engineer */}
                <div className="text-[11px] font-semibold text-slate-600 mt-0.5 flex items-center justify-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                  <span>AI Engineer</span>
                </div>
              </div>
            </motion.div>

            {/* 3. Nadeem */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col items-center w-full max-w-[230px] sm:max-w-[250px] md:max-w-[265px] group"
            >
              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-md border border-slate-200/90 bg-slate-950">
                <Image
                  src="/images/team/nadeem.jpg"
                  alt="Nadeem"
                  fill
                  className="object-cover object-top contrast-[1.05] group-hover:scale-105 transition-all duration-700 ease-out"
                  sizes="(max-width: 640px) 100vw, 265px"
                />
              </div>
              <div className="mt-3 text-center min-h-[48px] flex flex-col justify-start">
                <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 group-hover:text-cyan-600 transition-colors">
                  Nadeem
                </h3>
                <div className="text-xs font-semibold text-slate-500 mt-0.5">
                  Full Stack AI Engineer
                </div>
              </div>
            </motion.div>

            {/* 4. Abdullah */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-col items-center w-full max-w-[230px] sm:max-w-[250px] md:max-w-[265px] group"
            >
              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-md border border-slate-200/90 bg-slate-950">
                <Image
                  src="/images/team/abdullah.jpg"
                  alt="Abdullah"
                  fill
                  className="object-cover object-top contrast-[1.05] group-hover:scale-105 transition-all duration-700 ease-out"
                  sizes="(max-width: 640px) 100vw, 265px"
                />
              </div>
              <div className="mt-3 text-center min-h-[48px] flex flex-col justify-start">
                <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 group-hover:text-cyan-600 transition-colors">
                  Abdullah
                </h3>
                <div className="text-xs font-semibold text-slate-500 mt-0.5">
                  AI Automation Specialist
                </div>
              </div>
            </motion.div>

          </div>

          {/* Shared Stage Floor Line */}
          <div className="relative mt-10 sm:mt-12 flex items-center justify-center">
            <div className="h-px w-full max-w-4xl bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
            <div className="absolute w-32 h-1 bg-cyan-500/25 blur-sm rounded-full" />
          </div>
        </div>

        {/* Bottom CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 sm:mt-12 flex justify-center"
        >
          <MagneticButton>
            <Link
              href="/about"
              className="px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 border border-slate-900 shadow-md hover:shadow-lg transition-all duration-300 inline-flex items-center gap-2 group"
            >
              <span>Learn More About Arclyn Studio</span>
              <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
            </Link>
          </MagneticButton>
        </motion.div>

      </div>
    </section>
  );
};

export default TeamSection;
