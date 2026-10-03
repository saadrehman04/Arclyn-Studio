'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

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
          className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 leading-[1.25] tracking-tight max-w-4xl mx-auto"
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

      </div>
    </section>
  );
};
