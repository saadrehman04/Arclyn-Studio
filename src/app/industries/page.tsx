import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { INDUSTRIES } from '@/data/industries';
import { 
  Building2, 
  Utensils, 
  ShoppingBag, 
  Dumbbell, 
  Wrench, 
  Stethoscope, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  ExternalLink,
  Layers,
  ShieldAlert
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Industries We Serve — Concept Architecture Showcases',
  description:
    'Explore original concept architectures crafted by Arclyn Studio for Restaurants, E-Commerce, Real Estate, Fitness, Home Services, and Medical Clinics.',
};

const ICON_MAP: Record<string, React.ElementType> = {
  'restaurants-hospitality': Utensils,
  'ecommerce-retail': ShoppingBag,
  'real-estate-architecture': Building2,
  'fitness-athletics': Dumbbell,
  'home-services-trades': Wrench,
  'medical-clinics': Stethoscope,
};

import { PageHeroRibbon } from '@/components/shared/PageHeroRibbon';

export default function IndustriesPage() {
  return (
    <div className="pt-32 pb-24 bg-cosmic-grid min-h-screen relative overflow-hidden">
      {/* 3D Liquid Chrome Ribbon Background */}
      <PageHeroRibbon variant="strands" opacity={0.7} />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-3/4 h-80 bg-radial-hero pointer-events-none opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Page Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/25 w-fit mb-4">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-300">
              Vertical Blueprints
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Industries We Serve <br />
            <span className="text-gradient">&amp; Concept Architectures</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
            Every business category demands its own visual language, psychological triggers, and conversion funnel. Below is a showcase of the type of tailored websites and platforms Arclyn Studio designs and engineers.
          </p>

          {/* Explicit disclaimer banner as requested */}
          <div className="mt-6 p-4 rounded-2xl bg-white/[0.03] border border-white/10 max-w-2xl mx-auto flex items-start gap-3 text-left">
            <ShieldAlert className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-slate-300 leading-relaxed">
              <strong className="text-white">Editorial Notice:</strong> The concept prototypes below represent original design blueprints and aesthetic explorations created by Arclyn Studio to demonstrate vertical expertise. They are not presented as past client endorsements, nor do they duplicate proprietary brand assets.
            </p>
          </div>
        </div>

        {/* 6 Industry Full Showcases */}
        <div className="space-y-16">
          {INDUSTRIES.map((ind, index) => {
            const Icon = ICON_MAP[ind.id] || Building2;
            const isEven = index % 2 === 1;

            return (
              <div
                key={ind.id}
                id={ind.id}
                className="rounded-3xl glass-panel p-8 sm:p-12 border border-white/10 relative overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  {/* Left: Strategy, Conversion focus, & Real project link */}
                  <div className={`lg:col-span-6 space-y-6 ${isEven ? 'lg:order-2' : ''}`}>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-cyan-400 flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                          {ind.name}
                        </h2>
                        <span className="text-xs text-cyan-300 font-semibold">
                          {ind.tagline}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-slate-300 leading-relaxed">
                      {ind.description}
                    </p>

                    {/* Style Inspiration */}
                    <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-xs text-slate-400 leading-relaxed">
                      <strong className="text-slate-300">Aesthetic Moodboard Direction:</strong>{' '}
                      {ind.styleInspiration}
                    </div>

                    {/* Conversion Focus Checklist */}
                    <div className="space-y-2.5">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        High-Converting Capabilities:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {ind.conversionFocus.map((c) => (
                          <div key={c} className="flex items-start gap-2 text-xs text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 flex-shrink-0" />
                            <span>{c}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Verified Arclyn Production Example if available */}
                    {ind.arclynExample && (
                      <div className="p-4 rounded-2xl bg-purple-950/20 border border-purple-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div>
                          <div className="text-xs font-bold text-purple-300 flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>Verified Production Project:</span>
                          </div>
                          <div className="text-xs text-slate-300 mt-0.5">
                            {ind.arclynExample.name} — {ind.arclynExample.note}
                          </div>
                        </div>
                        {ind.arclynExample.url && (
                          <a
                            href={ind.arclynExample.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-500/20 hover:bg-purple-500/30 text-purple-200 text-xs font-semibold whitespace-nowrap transition-colors"
                          >
                            <span>Live Site</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    )}

                    {/* CTA */}
                    <div className="pt-2">
                      <Link
                        href={`/contact?industry=${ind.id}`}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white btn-primary-gradient"
                      >
                        <span>Build for {ind.name.split('&')[0].trim()}</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>

                  {/* Right: Original Concept Mockup Preview */}
                  <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : ''}`}>
                    <div className={`rounded-2xl border border-white/15 p-6 sm:p-8 bg-gradient-to-br ${ind.mockupTheme.bgStyle} shadow-2xl backdrop-blur-xl relative overflow-hidden`}>
                      
                      {/* Browser header */}
                      <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                        <div className="flex items-center gap-2">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                        </div>
                        <span className="text-[11px] font-mono text-slate-400">
                          preview.arclynstudio.com/{ind.id}
                        </span>
                      </div>

                      {/* Simulated UI layout */}
                      <div className="space-y-4">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[10px] font-bold text-white tracking-wider uppercase">
                          <span>Original Concept Demo</span>
                        </div>

                        <h3 className="text-2xl font-extrabold text-white leading-tight">
                          {ind.mockupTheme.demoHeadline}
                        </h3>

                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                          {ind.mockupTheme.demoSub}
                        </p>

                        <div className="flex flex-wrap gap-2 pt-2">
                          {ind.mockupTheme.demoTags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-1 rounded-md text-[10px] font-semibold bg-white/10 text-white border border-white/15"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="pt-4 flex items-center gap-3">
                          <button
                            type="button"
                            className="px-5 py-2.5 rounded-xl text-xs font-bold text-white shadow-lg transition-transform hover:scale-105"
                            style={{ backgroundColor: ind.mockupTheme.accentColor }}
                          >
                            {ind.mockupTheme.demoCta}
                          </button>
                          <span className="text-[11px] text-slate-400">
                            Mobile-first responsive flow
                          </span>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 rounded-3xl glass-panel p-8 sm:p-12 text-center max-w-3xl mx-auto border border-white/10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Operating in a Different Vertical?
          </h2>
          <p className="text-sm text-slate-300 mb-8 max-w-lg mx-auto">
            Our architectural process adapts to any high-intent commercial niche — B2B fintech, legal practices, educational academies, and industrial logistics.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold text-white btn-primary-gradient"
          >
            <span>Discuss Your Industry Requirements</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
