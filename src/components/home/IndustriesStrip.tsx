'use client';

import React, { useState } from 'react';
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
  Layers
} from 'lucide-react';
import { NeonSectionBackground } from '../shared/NeonSectionBackground';

const ICON_MAP: Record<string, React.ElementType> = {
  'restaurants-hospitality': Utensils,
  'ecommerce-retail': ShoppingBag,
  'real-estate-architecture': Building2,
  'fitness-athletics': Dumbbell,
  'home-services-trades': Wrench,
  'medical-clinics': Stethoscope,
};

export const IndustriesStrip: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(INDUSTRIES[0]);

  return (
    <section className="relative pt-20 sm:pt-28 pb-10 sm:pb-14 border-t border-white/10 bg-[#060915] overflow-hidden">
      {/* Dynamic Core & Network Nodes Background */}
      <NeonSectionBackground variant="core-nodes" position="full" opacity={0.32} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/25 w-fit mb-4">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-300">
              Industry Specializations
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Industries We Serve <br />
            <span className="text-gradient">&amp; Architect For</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
            Every vertical requires distinct conversion psychology, typography, and motion pacing. Below are original concept architectures designed by Arclyn Studio to maximize conversion per industry.
          </p>
          <div className="mt-2 text-xs font-medium text-slate-400">
            * Note: These are original demo concept architectures, not client endorsements or copied client assets.
          </div>
        </div>

        {/* Industry Pill Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {INDUSTRIES.map((ind) => {
            const Icon = ICON_MAP[ind.id] || Building2;
            const isSelected = selectedIndustry.id === ind.id;

            return (
              <button
                key={ind.id}
                onClick={() => setSelectedIndustry(ind)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isSelected
                    ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-lg shadow-purple-500/25 scale-105'
                    : 'bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{ind.name.split('&')[0].trim()}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Industry Concept Showcase Window */}
        <div className="rounded-3xl glass-panel p-6 sm:p-10 border border-white/10 overflow-hidden relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Design Direction & Strategy */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-purple-400">
                  Concept Architecture
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1 mb-2">
                  {selectedIndustry.name}
                </h3>
                <p className="text-sm text-cyan-300 font-medium">
                  {selectedIndustry.tagline}
                </p>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {selectedIndustry.description}
              </p>

              {/* Conversion Principles */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  Conversion Principles We Apply:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedIndustry.conversionFocus.map((item) => (
                    <div key={item} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Real Project Link if available */}
              {selectedIndustry.arclynExample && (
                <div className="p-4 rounded-2xl bg-purple-950/20 border border-purple-500/20">
                  <div className="text-xs font-semibold text-purple-300 mb-1 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Real-World Arclyn Studio Production Example:</span>
                  </div>
                  <div className="text-xs text-slate-300 mb-2">
                    {selectedIndustry.arclynExample.note}
                  </div>
                  {selectedIndustry.arclynExample.url && (
                    <a
                      href={selectedIndustry.arclynExample.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <span>Visit Live Example ({selectedIndustry.arclynExample.name})</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              )}

              <div className="pt-2">
                <Link
                  href="/industries"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-purple-400 hover:text-cyan-300 transition-colors"
                >
                  <span>Explore full industry blueprint collection</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right: Live Interactive Concept Mockup Visual */}
            <div className="lg:col-span-6">
              <div className={`rounded-2xl border border-white/15 p-6 sm:p-8 bg-gradient-to-br ${selectedIndustry.mockupTheme.bgStyle} shadow-2xl relative overflow-hidden backdrop-blur-xl`}>
                
                {/* Mockup Header Bar */}
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">
                    arclyn-demo // {selectedIndustry.id}
                  </span>
                </div>

                {/* Simulated Hero Section */}
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 text-[10px] font-semibold text-white tracking-wider uppercase">
                    <span>Active Concept Preview</span>
                  </div>

                  <h4 className="text-xl sm:text-2xl font-extrabold text-white leading-tight">
                    {selectedIndustry.mockupTheme.demoHeadline}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {selectedIndustry.mockupTheme.demoSub}
                  </p>

                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {selectedIndustry.mockupTheme.demoTags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-[10px] font-semibold bg-white/10 text-white border border-white/15"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Simulated Action Button */}
                  <div className="pt-4">
                    <button
                      type="button"
                      className="px-5 py-2.5 rounded-xl text-xs font-bold text-white shadow-lg transition-transform hover:scale-105"
                      style={{ backgroundColor: selectedIndustry.mockupTheme.accentColor }}
                    >
                      {selectedIndustry.mockupTheme.demoCta}
                    </button>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
