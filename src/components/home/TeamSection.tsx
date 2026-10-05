'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import { MagneticButton } from '../shared/MagneticButton';



export const TeamSection: React.FC = () => {
  return (
    <section id="leadership" className="relative pt-6 sm:pt-10 pb-10 sm:pb-14 bg-[#050711] overflow-hidden">
      {/* Luxury 3D Dark Metallic Fluid Wave Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0" aria-hidden="true">
        <Image
          src="/images/dark-metallic-wave.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-left-top sm:object-left opacity-75 mix-blend-screen"
        />
        {/* Seamless smooth gradients to blend into dark obsidian background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050711] via-transparent to-[#050711] opacity-65 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#050711_95%)] opacity-50 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header matching reference */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-cyan-400/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-5"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Senior Leadership</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-5"
          >
            The Architects <br />
            <span className="text-gradient-hero">Behind the Code</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal"
          >
            A dedicated collective of senior engineers, AI researchers, and design strategists who build systems designed to win.
          </motion.p>
        </div>

        {/* Real Standing Squad Lineup - NO CARDS */}
        <div className="relative max-w-6xl mx-auto pt-4 pb-2">
          {/* Luminous Center Spotlight Halo behind Founder & Squad */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[480px] bg-gradient-to-r from-purple-600/25 via-cyan-500/20 to-indigo-600/25 rounded-full blur-[140px] pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center md:items-end justify-center gap-10 md:gap-6 lg:gap-8">
            
            {/* 1. Saad Rabbani */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col items-center w-full max-w-[230px] sm:max-w-[250px] md:max-w-[265px] group"
            >
              <div className="relative w-full aspect-[3/4] overflow-hidden [mask-image:linear-gradient(to_bottom,black_78%,transparent_100%)]">
                <Image
                  src="/images/team/saad-rabbani-zoomed.jpg"
                  alt="Saad Rabbani"
                  fill
                  className="object-cover object-top contrast-[1.05] group-hover:scale-105 transition-all duration-700 ease-out"
                  sizes="(max-width: 640px) 100vw, 265px"
                />
              </div>
              <div className="mt-3 text-center min-h-[48px] flex flex-col justify-start">
                <h3 className="font-display text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  Saad Rabbani
                </h3>
                <div className="text-xs font-semibold text-slate-400 mt-0.5">
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
              className="relative flex flex-col items-center w-full max-w-[230px] sm:max-w-[250px] md:max-w-[265px] md:-translate-y-2.5 z-20 group"
            >
              {/* Leadership Aura & Ambient Backlight Glow */}
              <div 
                className="absolute -inset-x-4 -top-6 bottom-12 bg-gradient-to-t from-cyan-500/25 via-purple-600/20 to-transparent rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10" 
                aria-hidden="true"
              />

              {/* Leadership Badge */}
              <div className="mb-2 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-cyan-500/15 via-purple-500/15 to-blue-500/15 border border-cyan-400/40 backdrop-blur-md shadow-[0_0_12px_rgba(6,182,212,0.3)] inline-flex items-center gap-1.5 select-none">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-300">Leadership</span>
              </div>

              {/* Portrait Container with Luminous Ring Highlight */}
              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden ring-1 ring-cyan-400/35 shadow-[0_0_30px_rgba(6,182,212,0.22)] group-hover:ring-cyan-400/60 transition-all duration-500 [mask-image:linear-gradient(to_bottom,black_82%,transparent_100%)]">
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
              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mt-2 shadow-[0_0_10px_rgba(6,182,212,0.9)] opacity-90" />

              <div className="mt-2.5 text-center min-h-[56px] flex flex-col items-center justify-start">
                <h3 className="font-display text-lg sm:text-xl font-bold text-white group-hover:text-cyan-200 transition-colors">
                  Saad Rehman
                </h3>
                
                {/* 1. Below name: Founder and CEO */}
                <div className="text-xs sm:text-[13px] font-bold uppercase tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-indigo-300 mt-0.5">
                  Founder and CEO
                </div>

                {/* 2. Adjusted: AI Engineer */}
                <div className="text-[11px] font-medium text-slate-300/90 mt-0.5 flex items-center justify-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-cyan-400" />
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
              <div className="relative w-full aspect-[3/4] overflow-hidden [mask-image:linear-gradient(to_bottom,black_78%,transparent_100%)]">
                <Image
                  src="/images/team/nadeem.jpg"
                  alt="Nadeem"
                  fill
                  className="object-cover object-top contrast-[1.05] group-hover:scale-105 transition-all duration-700 ease-out"
                  sizes="(max-width: 640px) 100vw, 265px"
                />
              </div>
              <div className="mt-3 text-center min-h-[48px] flex flex-col justify-start">
                <h3 className="font-display text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  Nadeem
                </h3>
                <div className="text-xs font-semibold text-slate-400 mt-0.5">
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
              <div className="relative w-full aspect-[3/4] overflow-hidden [mask-image:linear-gradient(to_bottom,black_78%,transparent_100%)]">
                <Image
                  src="/images/team/abdullah.jpg"
                  alt="Abdullah"
                  fill
                  className="object-cover object-top contrast-[1.05] group-hover:scale-105 transition-all duration-700 ease-out"
                  sizes="(max-width: 640px) 100vw, 265px"
                />
              </div>
              <div className="mt-3 text-center min-h-[48px] flex flex-col justify-start">
                <h3 className="font-display text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  Abdullah
                </h3>
                <div className="text-xs font-semibold text-slate-400 mt-0.5">
                  AI Automation Specialist
                </div>
              </div>
            </motion.div>

          </div>

          {/* Shared Glowing Studio Stage Floor Line */}
          <div className="relative mt-8 sm:mt-10 flex items-center justify-center">
            <div className="h-px w-full max-w-4xl bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
            <div className="absolute w-32 h-1 bg-cyan-400/30 blur-sm rounded-full" />
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
              className="px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.12] hover:border-cyan-400/50 transition-all duration-300 inline-flex items-center gap-2 group"
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
