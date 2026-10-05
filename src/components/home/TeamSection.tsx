'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Sparkles } from 'lucide-react';
import { MagneticButton } from '../shared/MagneticButton';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  isLead?: boolean;
  leadBadge?: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Saad Rehman',
    role: 'Founder & CEO • Direct Senior Architect',
    image: '/images/team/saad-rehman-zoomed.jpg',
    isLead: true,
    leadBadge: 'Leadership',
  },
  {
    name: 'Saad Rabbani',
    role: 'Meta Ads Specialist',
    image: '/images/team/saad-rabbani-zoomed.jpg',
  },
  {
    name: 'Nadeem',
    role: 'Full Stack AI Engineer',
    image: '/images/team/nadeem.jpg',
  },
  {
    name: 'Abdullah',
    role: 'AI Automation Specialist',
    image: '/images/team/abdullah.jpg',
  },
];

export const TeamSection: React.FC = () => {
  return (
    <section 
      id="team" 
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
          {/* Eyebrow Pill */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1A1A] text-white text-[11px] font-bold uppercase tracking-widest mb-5 shadow-sm select-none"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Meet the Team</span>
          </motion.div>

          {/* Large Editorial Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="trionn-heading text-4xl sm:text-6xl lg:text-7xl font-bold text-[#1E1E1E] tracking-tight leading-[1.04] mb-4"
          >
            The minds behind the machines
          </motion.h2>

          {/* Subtitle Matching Reference Image */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="trionn-subheading text-sm sm:text-base text-[#5E5E5E] max-w-xl mx-auto leading-relaxed font-normal"
          >
            Our team blends engineering rigor, technical depth, and strategic thinking with autonomous AI innovation.
          </motion.p>
        </div>

        {/* Team Cards Grid on TRIONN White Theme */}
        <div className="relative max-w-6xl mx-auto pt-2 pb-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7 items-stretch">
            {TEAM_MEMBERS.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: 0.1 + idx * 0.08 }}
                className="group relative rounded-3xl overflow-hidden bg-white border border-[#1A1A1A]/10 hover:border-[#1A1A1A]/40 transition-all duration-300 flex flex-col justify-between shadow-[0_12px_35px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.09)] hover:-translate-y-1.5"
              >
                {/* Lead Badge for Saad Rehman */}
                {member.isLead && (
                  <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-[#1A1A1A] text-white text-[10px] font-bold uppercase tracking-wider inline-flex items-center gap-1.5 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Founder</span>
                  </div>
                )}

                {/* Portrait Container */}
                <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#ECECEC] border-b border-[#1A1A1A]/10">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-top grayscale contrast-[1.06] brightness-[0.98] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                    priority={member.isLead}
                  />
                  
                  {/* Subtle Natural Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-40 group-hover:opacity-10 transition-opacity pointer-events-none" />
                </div>

                {/* Card Text Content */}
                <div className="p-5 sm:p-6 text-center flex flex-col justify-center grow bg-white">
                  <h3 className="trionn-heading text-xl sm:text-2xl font-bold text-[#1E1E1E] group-hover:text-black transition-colors tracking-tight">
                    {member.name}
                  </h3>
                  
                  <div className="mt-2">
                    {member.isLead ? (
                      <span className="text-xs sm:text-[13px] font-semibold text-[#1A1A1A] bg-[#1A1A1A]/5 border border-[#1A1A1A]/10 px-3 py-1 rounded-full inline-block">
                        {member.role}
                      </span>
                    ) : (
                      <span className="text-xs sm:text-[13px] font-medium text-[#5E5E5E] leading-snug">
                        {member.role}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
              href="/about"
              className="trionn-btn-dark"
            >
              <span>Learn More About Arclyn</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </MagneticButton>

          <MagneticButton>
            <Link
              href="/contact"
              className="trionn-btn-outline"
            >
              <span>Work With Us</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </MagneticButton>
        </motion.div>

      </div>
    </section>
  );
};

export default TeamSection;
