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
    <section className="relative z-20 overflow-hidden border-t border-white/10 bg-[#090909] py-14 text-white sm:py-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'linear-gradient(to bottom, black, transparent 92%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Minimalist Header Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 text-center sm:text-left">
          <div className="flex items-center gap-2.5">
            <div className="h-2 w-2 rounded-full bg-[#ff1010]" />
            <span className="text-xs font-mono font-semibold uppercase tracking-[0.14em] text-[#ff1010]">
              Specialized Industry Architectures
            </span>
          </div>

          <Link
            href="/industries"
            className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#d5d5d5] transition-colors hover:text-white"
          >
            <span>Explore All 6 Industry Blueprints</span>
            <ArrowRight className="h-3.5 w-3.5 text-[#ff1010] transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Sleek, Reduced Horizontal Grid of Compact Industry Chips */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-4">
          {INDUSTRIES_LIST.map((ind) => {
            const Icon = ind.icon;
            return (
              <Link
                key={ind.id}
                href="/industries"
                className="group relative flex flex-col justify-between rounded-xl border border-white/10 bg-[#0d0d0d] p-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#ff1010]/50 hover:bg-[#111111] sm:rounded-2xl sm:p-5"
              >
                <div>
                  <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-[#111111] text-[#ff1010] transition-colors group-hover:border-[#ff1010]/50">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-xs font-semibold leading-snug tracking-tight text-white transition-colors group-hover:text-[#ff1010] sm:text-sm">
                    {ind.name}
                  </h3>
                </div>

                <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-2.5 font-mono text-[10px] text-[#8a8a8a] group-hover:text-[#d5d5d5]">
                  <span className="line-clamp-1">{ind.metric}</span>
                  <ArrowRight className="ml-1 h-2.5 w-2.5 shrink-0 text-[#ff1010] opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
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
