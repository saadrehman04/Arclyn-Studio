'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Layers, 
  Box, 
  Rocket, 
  Cloud, 
  Flame, 
  ArrowRight 
} from 'lucide-react';
import { MagneticButton } from '../shared/MagneticButton';
import { Grainient } from '@/components/ui/Grainient';

const SERVICE_CARDS = [
  {
    id: 'ai-product',
    slug: 'ai-agent-development',
    title: 'AI-Accelerated Product Development',
    desc: 'We combine advanced AI tools with expert engineering to take your concept from idea to MVP in record time — without sacrificing quality.',
    icon: Sparkles,
    bgImage: '/images/services/ai-product.jpg',
  },
  {
    id: 'custom-software',
    slug: 'custom-software-saas-development',
    title: 'Custom Software & App Development',
    desc: 'From mobile apps to web platforms, we build scalable, high-performance solutions tailored to your market and business needs.',
    icon: Layers,
    bgImage: '/images/services/custom-software.jpg',
  },
  {
    id: 'prototyping-ux',
    slug: 'website-ecommerce-development',
    title: 'Prototyping & UX Design',
    desc: 'Rapidly test ideas with interactive AI-generated prototypes and data-backed design decisions that put users first.',
    icon: Box,
    bgImage: '/images/services/prototyping-ux.jpg',
  },
  {
    id: 'ai-automation',
    slug: 'ai-integration-automation',
    title: 'AI Integration & Automation',
    desc: 'Enhance your product with AI features — from predictive analytics to smart chatbots — to improve efficiency and user engagement.',
    icon: Rocket,
    bgImage: '/images/services/ai-automation.jpg',
  },
  {
    id: 'cloud-devops',
    slug: 'cloud-architecture-devops',
    title: 'Cloud Architecture & DevOps',
    desc: 'Deploy with confidence. We design secure, scalable, and cost-efficient cloud infrastructure, with automated testing and CI/CD pipelines.',
    icon: Cloud,
    bgImage: '/images/services/cloud-devops.jpg',
  },
  {
    id: 'growth-consulting',
    slug: 'partner-program',
    title: 'Startup Growth Consulting',
    desc: "We're more than a dev shop — we help you refine your business model, optimize workflows, and prepare for funding rounds.",
    icon: Flame,
    bgImage: '/images/services/startup-growth.jpg',
  },
];

export const ServicesOverview: React.FC = () => {
  return (
    <section className="relative pt-6 sm:pt-10 pb-28 sm:pb-36 bg-[#050711] overflow-hidden">
      {/* Dynamic Animated Grainient Background (Cyan, Purple & Deep Cosmic Obsidian) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0 opacity-40 mix-blend-screen" aria-hidden="true">
        <Grainient
          color1="#06B6D4"
          color2="#8B5CF6"
          color3="#050711"
          timeSpeed={0.22}
          warpStrength={0.85}
          warpFrequency={4.5}
          warpSpeed={1.6}
          warpAmplitude={45.0}
          grainAmount={0.06}
          grainScale={2.0}
          contrast={1.45}
          saturation={1.2}
          zoom={0.9}
        />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
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

        {/* 6 Services Grid matching reference obsidian styling with shaded circular badges & corner liquid ribbons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {SERVICE_CARDS.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group relative rounded-3xl p-8 sm:p-9 bg-[#0b0e18] border border-white/[0.08] hover:border-cyan-400/50 transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_12px_45px_rgba(6,182,212,0.18)] hover:-translate-y-1.5"
              >
                {/* Full Card Photographic Background (Vibrant, Clear & Richly Detailed) */}
                {service.bgImage && (
                  <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden rounded-3xl z-0">
                    <Image
                      src={service.bgImage}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center scale-100 group-hover:scale-105 transition-all duration-700 ease-out opacity-75 group-hover:opacity-95 filter blur-[0.3px] group-hover:blur-none"
                    />
                    {/* Balanced dark vignette letting vibrant artwork shine through while preserving text legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#060814] via-[#070b18]/65 to-[#050712]/35" />
                    <div className="absolute inset-0 bg-black/20" />
                  </div>
                )}

                <div className="relative z-10">
                  {/* Shaded Circular Icon Container */}
                  <div className="w-14 h-14 rounded-full bg-[#1b1e2a]/90 backdrop-blur-md border border-white/[0.2] shadow-[inset_0_2px_4px_rgba(255,255,255,0.15),0_4px_16px_rgba(0,0,0,0.7)] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-[#F3F5B4] drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]" />
                  </div>

                  {/* Title & Description with high-contrast drop shadows */}
                  <h3 className="font-display text-2xl font-bold text-white mb-3 group-hover:text-cyan-200 transition-colors tracking-tight leading-snug drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-100 leading-relaxed mb-6 font-normal drop-shadow-[0_1px_6px_rgba(0,0,0,0.95)]">
                    {service.desc}
                  </p>
                </div>

                {/* Bottom CTA Link */}
                <div className="pt-4 border-t border-white/[0.14] relative z-10">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center justify-between w-full text-xs font-semibold text-slate-100 group-hover:text-cyan-300 transition-colors drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]"
                  >
                    <span>View Architecture Blueprint</span>
                    <div className="w-7 h-7 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 group-hover:bg-cyan-400/25 flex items-center justify-center group-hover:text-cyan-300 transition-all">
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Bar with adjusted Find Out More button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-5 text-sm text-slate-300"
        >
          <span className="text-slate-300 text-sm sm:text-base font-light">Looking for a bespoke architecture or tailored scope?</span>
          <MagneticButton>
            <Link
              href="/services"
              className="px-7 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#2563EB] to-[#B113FE] hover:from-[#1D4ED8] hover:to-[#9333EA] transition-all duration-300 inline-flex items-center gap-2 shadow-[0_0_25px_rgba(177,19,254,0.6)] hover:shadow-[0_0_35px_rgba(177,19,254,0.85)] hover:scale-105"
            >
              <span className="text-base leading-none">→</span>
              <span>Find Out More</span>
            </Link>
          </MagneticButton>
        </motion.div>

      </div>
    </section>
  );
};
