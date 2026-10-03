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

const SERVICE_CARDS = [
  {
    id: 'ai-product',
    slug: 'ai-agent-development',
    title: 'AI-Accelerated Product Development',
    desc: 'We combine advanced AI tools with expert engineering to take your concept from idea to MVP in record time — without sacrificing quality.',
    icon: Sparkles,
  },
  {
    id: 'custom-software',
    slug: 'custom-software-saas-development',
    title: 'Custom Software & App Development',
    desc: 'From mobile apps to web platforms, we build scalable, high-performance solutions tailored to your market and business needs.',
    icon: Layers,
  },
  {
    id: 'prototyping-ux',
    slug: 'website-ecommerce-development',
    title: 'Prototyping & UX Design',
    desc: 'Rapidly test ideas with interactive AI-generated prototypes and data-backed design decisions that put users first.',
    icon: Box,
  },
  {
    id: 'ai-automation',
    slug: 'ai-integration-automation',
    title: 'AI Integration & Automation',
    desc: 'Enhance your product with AI features — from predictive analytics to smart chatbots — to improve efficiency and user engagement.',
    icon: Rocket,
  },
  {
    id: 'cloud-devops',
    slug: 'cloud-architecture-devops',
    title: 'Cloud Architecture & DevOps',
    desc: 'Deploy with confidence. We design secure, scalable, and cost-efficient cloud infrastructure, with automated testing and CI/CD pipelines.',
    icon: Cloud,
  },
  {
    id: 'growth-consulting',
    slug: 'partner-program',
    title: 'Startup Growth Consulting',
    desc: "We're more than a dev shop — we help you refine your business model, optimize workflows, and prepare for funding rounds.",
    icon: Flame,
  },
];

export const ServicesOverview: React.FC = () => {
  return (
    <section className="relative pt-6 sm:pt-10 pb-28 sm:pb-36 bg-[#050711] overflow-hidden">
      {/* Ambient background accents */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[160px] pointer-events-none" />

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
                className="group relative rounded-3xl p-8 sm:p-9 bg-[#0c0f17] border border-white/[0.08] hover:border-cyan-400/40 transition-all duration-400 flex flex-col justify-between overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.5)] hover:-translate-y-1.5"
              >
                {/* Subtle corner liquid ribbon reflection matching Image 3 */}
                <div className="absolute -bottom-6 -right-6 w-36 h-36 opacity-30 group-hover:opacity-65 transition-opacity duration-500 pointer-events-none overflow-hidden rounded-br-3xl">
                  <Image
                    src="/images/neon-ribbon-strands.jpg"
                    alt=""
                    fill
                    className="object-cover object-left-top mix-blend-screen"
                    sizes="150px"
                  />
                </div>

                <div className="relative z-10">
                  {/* Shaded Circular Icon Container matching Image 3 */}
                  <div className="w-14 h-14 rounded-full bg-[#1b1e2a] border border-white/[0.1] shadow-[inset_0_2px_4px_rgba(255,255,255,0.12),0_4px_14px_rgba(0,0,0,0.6)] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-[#F3F5B4] drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display text-2xl font-bold text-white mb-3 group-hover:text-cyan-200 transition-colors tracking-tight leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6 font-light">
                    {service.desc}
                  </p>
                </div>

                {/* Bottom CTA Link */}
                <div className="pt-4 border-t border-white/[0.06] relative z-10">
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
