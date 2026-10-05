'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Building2, 
  Utensils, 
  ShoppingBag, 
  Dumbbell, 
  Wrench, 
  Stethoscope, 
  ArrowRight
} from 'lucide-react';

const INDUSTRIES_LIST = [
  { id: 'restaurants-hospitality', name: 'Restaurants & Hospitality', icon: Utensils, metric: 'Appetite UI & Direct Menus' },
  { id: 'ecommerce-retail', name: 'E-Commerce & Retail', icon: ShoppingBag, metric: 'Sub-Second Storefronts' },
  { id: 'real-estate-architecture', name: 'Real Estate & Architecture', icon: Building2, metric: 'Editorial Portals' },
  { id: 'fitness-athletics', name: 'Fitness & Athletics', icon: Dumbbell, metric: 'Conversion Funnels' },
  { id: 'home-services-trades', name: 'Home Services & Trades', icon: Wrench, metric: 'Dispatch & Booking' },
  { id: 'medical-clinics', name: 'Medical & Specialty Clinics', icon: Stethoscope, metric: 'Patient Onboarding' },
];

export const IndustriesStrip: React.FC = () => {
  return (
    <section className="relative py-12 sm:py-16 bg-[#040408] border-t border-white/[0.07] overflow-hidden select-none z-20">
      {/* Subtle central ambient cyan glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[180px] bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Minimalist Header Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 text-center sm:text-left">
          <div className="flex items-center gap-2.5">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-mono font-semibold uppercase tracking-[0.14em] text-slate-400">
              Specialized Industry Architectures
            </span>
          </div>

          <Link
            href="/industries"
            className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-white transition-colors"
          >
            <span>Explore All 6 Industry Blueprints</span>
            <ArrowRight className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Sleek, Reduced Horizontal Grid of Compact Industry Chips */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {INDUSTRIES_LIST.map((ind) => {
            const Icon = ind.icon;
            return (
              <Link
                key={ind.id}
                href="/industries"
                className="group relative flex flex-col justify-between p-4 sm:p-5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.08] hover:border-cyan-400/40 transition-all duration-300 shadow-sm hover:shadow-[0_0_20px_rgba(56,189,248,0.12)] hover:-translate-y-0.5"
              >
                <div>
                  <div className="w-8 h-8 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-300 group-hover:text-cyan-400 group-hover:border-cyan-400/40 transition-colors mb-3">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-xs sm:text-sm font-semibold text-white tracking-tight leading-snug group-hover:text-cyan-300 transition-colors">
                    {ind.name}
                  </h3>
                </div>

                <div className="mt-3 pt-2.5 border-t border-white/[0.06] flex items-center justify-between text-[10px] text-slate-400 group-hover:text-slate-300 font-mono">
                  <span className="line-clamp-1">{ind.metric}</span>
                  <ArrowRight className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-cyan-400 shrink-0 ml-1" />
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default IndustriesStrip;
