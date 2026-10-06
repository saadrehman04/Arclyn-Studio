import React from 'react';
import type { Metadata } from 'next';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { PageHeroRibbon } from '@/components/shared/PageHeroRibbon';
import { Sparkles, ShieldCheck, Star, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Client Testimonials & Reviews — Real Stories',
  description:
    'Read verified client testimonials from founders and tech leaders who launched high-performance websites, SaaS platforms, and AI workflows with Arclyn Studio.',
};

export default function TestimonialsPage() {
  return (
    <div className="pt-24 pb-16 sm:pt-32 sm:pb-24 bg-cosmic-grid min-h-screen relative overflow-hidden">
      {/* 3D Liquid Chrome Ribbon Background */}
      <PageHeroRibbon variant="strands" opacity={0.7} />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-3/4 h-80 bg-radial-hero pointer-events-none opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Testimonials Showcase Section */}
        <TestimonialsSection hideHeader={false} />

        {/* Bottom Project Inquiry Banner */}
        <div className="mt-20 rounded-3xl glass-panel p-8 sm:p-12 text-center max-w-4xl mx-auto border border-white/10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Want to be our next success story?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mb-8 max-w-xl mx-auto">
            We scope out architecture, delivery timeline, and fixed milestone pricing during a single 15-minute alignment call.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-sm font-semibold text-white btn-primary-gradient inline-flex items-center justify-center gap-2"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/work"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-sm font-semibold text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            >
              Review Case Studies
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
