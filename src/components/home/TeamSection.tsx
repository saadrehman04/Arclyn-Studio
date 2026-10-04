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
              className="flex flex-col items-center w-full max-w-[240px] sm:max-w-[260px] group"
            >
              <div className="relative w-full aspect-[3/4] overflow-hidden [mask-image:linear-gradient(to_bottom,black_75%,transparent_100%)]">
                <Image
                  src="/images/team/saad-rabbani-zoomed.jpg"
                  alt="Saad Rabbani"
                  fill
                  className="object-cover object-top contrast-[1.05] group-hover:scale-105 transition-all duration-700 ease-out"
                  sizes="(max-width: 640px) 100vw, 260px"
                />
              </div>
              <div className="mt-3 text-center">
                <h3 className="font-display text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  Saad Rabbani
                </h3>
                <div className="text-xs font-semibold text-purple-400 mt-0.5">
                  Meta Ads Specialist
                </div>
                <div className="mt-1.5 inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-white/[0.04] text-cyan-300 border border-cyan-400/25">
                  Meta Ads &amp; Growth
                </div>
              </div>
            </motion.div>

            {/* 2. Nadeem */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex flex-col items-center w-full max-w-[240px] sm:max-w-[260px] group"
            >
              <div className="relative w-full aspect-[3/4] overflow-hidden [mask-image:linear-gradient(to_bottom,black_75%,transparent_100%)]">
                <Image
                  src="/images/team/nadeem.jpg"
                  alt="Nadeem"
                  fill
                  className="object-cover object-top contrast-[1.05] group-hover:scale-105 transition-all duration-700 ease-out"
                  sizes="(max-width: 640px) 100vw, 260px"
                />
              </div>
              <div className="mt-3 text-center">
                <h3 className="font-display text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  Nadeem
                </h3>
                <div className="text-xs font-semibold text-purple-400 mt-0.5">
                  Full Stack AI Engineer
                </div>
                <div className="mt-1.5 inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-white/[0.04] text-cyan-300 border border-cyan-400/25">
                  Full Stack AI Engineering
                </div>
              </div>
            </motion.div>

            {/* 3. CENTER & ENLARGED: Saad Rehman (Founder & CEO) */}
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center w-full max-w-[290px] sm:max-w-[340px] md:max-w-[370px] z-20 md:-mb-2 group"
            >
              {/* Zoomed close-up standing portrait, larger, elevated */}
              <div className="relative w-full aspect-[3/4] overflow-hidden [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)]">
                {/* Subtle spotlight aura behind Saad */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 via-transparent to-transparent opacity-60 pointer-events-none" />
                <Image
                  src="/images/team/saad-rehman-zoomed.jpg"
                  alt="Saad Rehman"
                  fill
                  className="object-cover object-top contrast-[1.05] group-hover:scale-105 transition-all duration-700 ease-out"
                  sizes="(max-width: 640px) 100vw, 370px"
                  priority
                />
              </div>

              <div className="mt-4 text-center">
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-purple-600 via-indigo-500 to-cyan-500 text-white shadow-lg shadow-purple-500/40 mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Founder &amp; CEO</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white group-hover:text-cyan-300 transition-colors">
                  Saad Rehman
                </h3>
                <div className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-300 to-pink-400 mt-1">
                  Founder &amp; CEO • Full Stack Developer
                </div>
                <p className="text-xs text-slate-300 mt-2 max-w-xs mx-auto leading-relaxed">
                  Systems architect with 3+ years experience building high-scale Next.js apps, autonomous AI pipelines, and 50+ shipped production solutions.
                </p>
                <div className="mt-2.5 inline-flex items-center px-3.5 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-400/40 backdrop-blur-md">
                  System Architecture &amp; AI
                </div>
              </div>
            </motion.div>

            {/* 4. Abdullah */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col items-center w-full max-w-[240px] sm:max-w-[260px] group"
            >
              <div className="relative w-full aspect-[3/4] overflow-hidden [mask-image:linear-gradient(to_bottom,black_75%,transparent_100%)]">
                <Image
                  src="/images/team/abdullah.jpg"
                  alt="Abdullah"
                  fill
                  className="object-cover object-top contrast-[1.05] group-hover:scale-105 transition-all duration-700 ease-out"
                  sizes="(max-width: 640px) 100vw, 260px"
                />
              </div>
              <div className="mt-3 text-center">
                <h3 className="font-display text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  Abdullah
                </h3>
                <div className="text-xs font-semibold text-purple-400 mt-0.5">
                  AI Automation Specialist
                </div>
                <div className="mt-1.5 inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-white/[0.04] text-cyan-300 border border-cyan-400/25">
                  AI Automations &amp; Agents
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
