'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { MagneticButton } from '../shared/MagneticButton';

export const ManifestoSection: React.FC = () => {
  return (
    <section className="relative py-28 sm:py-36 overflow-hidden bg-[#050711]">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-cyan-400/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-8 backdrop-blur-md"
        >
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>The Arclyn Manifesto</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 leading-[1.25] tracking-tight mb-10 max-w-4xl mx-auto"
        >
          Arclyn Studio combines{' '}
          <span className="text-white underline decoration-cyan-400/50 decoration-wavy decoration-1 underline-offset-8">
            full-stack software craftsmanship
          </span>{' '}
          with{' '}
          <span className="text-gradient-hero">autonomous AI engineering</span> to turn ambitious
          visions into market-dominant digital products — shipped in{' '}
          <span className="text-white">weeks, not quarters</span>.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center"
        >
          <MagneticButton>
            <Link
              href="#capabilities"
              className="px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.14] hover:border-cyan-400/50 transition-all duration-300 inline-flex items-center gap-2 group shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
            >
              <span>Explore Our Capabilities</span>
              <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </MagneticButton>
        </motion.div>

      </div>
    </section>
  );
};
