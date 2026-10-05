'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
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
      className="relative pt-20 sm:pt-28 pb-16 sm:pb-24 bg-black overflow-hidden border-t border-white/10 select-none"
    >
      {/* Pure Obsidian Black Background with Subtle Vignette */}
      <div className="absolute inset-0 bg-black pointer-events-none z-0" />
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.035),transparent_70%)] pointer-events-none z-0" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header Matching Reference Image */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          {/* Eyebrow Pill: Meet the Team */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#121212] border border-white/15 text-white text-xs sm:text-sm font-medium tracking-normal mb-5 sm:mb-6 shadow-sm select-none"
          >
            <span>Meet the Team</span>
          </motion.div>

          {/* Large Editorial Headline: The Minds Behind the Machines */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[#FBFCDB] leading-[1.08] mb-5 sm:mb-6"
          >
            The Minds Behind the <br className="hidden sm:inline" />
            Machines
          </motion.h2>

          {/* Subtitle Matching Reference Image */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg text-neutral-400 font-normal leading-relaxed max-w-2xl mx-auto"
          >
            Our team blends creativity, technical skill, and strategic thinking with AI innovation — so your product gets the best of both worlds.
          </motion.p>
        </div>

        {/* Team Cards Grid on Black Background */}
        <div className="relative max-w-6xl mx-auto pt-2 pb-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7 items-stretch">
            {TEAM_MEMBERS.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: 0.1 + idx * 0.08 }}
                className={`relative flex flex-col rounded-2xl sm:rounded-3xl bg-[#0b0b0b] border ${
                  member.isLead 
                    ? 'border-emerald-500/40 shadow-[0_15px_45px_rgba(16,185,129,0.15)] hover:border-emerald-400/60' 
                    : 'border-white/10 hover:border-white/25 shadow-xl'
                } overflow-hidden transition-all duration-500 group`}
              >
                {/* Lead Badge for Saad Rehman */}
                {member.isLead && (
                  <div className="absolute top-3 right-3 z-20 px-2.5 py-0.5 rounded-full bg-black/80 border border-emerald-400/40 backdrop-blur-md text-[10px] font-bold text-emerald-300 uppercase tracking-wider inline-flex items-center gap-1.5 shadow-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Founder</span>
                  </div>
                )}

                {/* Portrait Container with Monochrome Reference Styling */}
                <div className="relative w-full aspect-[3/4] overflow-hidden bg-neutral-900">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-top grayscale contrast-[1.08] brightness-[0.98] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                    priority={member.isLead}
                  />
                  
                  {/* Subtle Gradient Shadow along the bottom of the photo */}
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0b0b0b] to-transparent opacity-80 pointer-events-none" />
                </div>

                {/* Card Text Content */}
                <div className="p-4 sm:p-5 text-center flex flex-col justify-center grow">
                  <h3 className="font-display text-lg sm:text-xl font-medium text-white group-hover:text-[#FBFCDB] transition-colors tracking-tight">
                    {member.name}
                  </h3>
                  
                  <div className="text-xs sm:text-[13px] text-neutral-400 font-normal mt-1 leading-snug">
                    {member.isLead ? (
                      <span className="text-emerald-300/90 font-medium">
                        {member.role}
                      </span>
                    ) : (
                      member.role
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Shared Stage Subtle Floor Line */}
          <div className="relative mt-14 sm:mt-16 flex items-center justify-center">
            <div className="h-px w-full max-w-4xl bg-gradient-to-r from-transparent via-white/15 to-transparent" />
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
              className="px-8 py-3.5 rounded-full text-sm font-medium text-white bg-[#121212] hover:bg-[#1a1a1a] border border-white/15 hover:border-white/30 shadow-xl transition-all duration-300 inline-flex items-center gap-2 group"
            >
              <span>Learn More About Arclyn Studio</span>
              <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-white group-hover:translate-x-1 transition-transform" />
            </Link>
          </MagneticButton>
        </motion.div>

      </div>
    </section>
  );
};

export default TeamSection;
