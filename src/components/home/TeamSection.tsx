'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import { MagneticButton } from '../shared/MagneticButton';

const TEAM_MEMBERS = [
  {
    name: 'Saad R.',
    role: 'Founder & Lead Systems Architect',
    bio: 'Full-stack engineer with 3+ years architecting high-scale Next.js apps, autonomous agent pipelines, and 50+ shipped production solutions.',
    image: '/images/team-saad.jpg',
    specialty: 'System Architecture & AI',
  },
  {
    name: 'Sarah Chen',
    role: 'Head of AI & Machine Learning',
    bio: 'Specialist in LangGraph orchestration, RAG pipelines, fine-tuned embedding models, and sub-second context retrieval.',
    image: '/images/team-sarah.jpg',
    specialty: 'Autonomous Agents & LLMs',
  },
  {
    name: 'Marcus Vance',
    role: 'Principal Full-Stack Engineer',
    bio: 'Ex-fintech backend specialist focused on high-throughput PostgreSQL schemas, Redis caching layers, and microservices.',
    image: '/images/team-marcus.jpg',
    specialty: 'Distributed Backends & DevOps',
  },
  {
    name: 'Elena Rostova',
    role: 'Lead Product & Interaction Designer',
    bio: 'Award-winning product designer creating fluid 60fps micro-interactions, conversion-tested design tokens, and luxury aesthetics.',
    image: '/images/team-elena.jpg',
    specialty: 'UI/UX & Design Systems',
  },
];

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
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
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

        {/* 4-Column Portrait Cards matching reference */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {TEAM_MEMBERS.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-3xl overflow-hidden bg-[#090d1a] border border-white/[0.08] hover:border-cyan-400/50 transition-all duration-400 flex flex-col justify-between shadow-[0_4px_30px_rgba(0,0,0,0.5)] hover:-translate-y-2"
            >
              {/* Portrait Image Container */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-950">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                
                {/* Vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090d1a] via-transparent to-black/20 opacity-80" />

                {/* Floating Specialty Tag */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-[#050711]/85 text-cyan-300 border border-cyan-400/30 backdrop-blur-md">
                    {member.specialty}
                  </span>
                </div>
              </div>

              {/* Text Info Block */}
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                  {member.name}
                </h3>
                <div className="text-xs font-medium text-purple-400 mb-3">
                  {member.role}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed font-normal">
                  {member.bio}
                </p>
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
