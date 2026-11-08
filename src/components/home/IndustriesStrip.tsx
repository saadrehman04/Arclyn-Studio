'use client';

import React from 'react';
import Link from 'next/link';
import { Building2, Utensils, ShoppingBag, Dumbbell, Wrench, Stethoscope, ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/motion/Reveal';

const INDUSTRIES_LIST = [
  { id: 'restaurants-hospitality', name: 'Restaurants & Hospitality', icon: Utensils, metric: 'Menus & direct ordering' },
  { id: 'ecommerce-retail', name: 'E-Commerce & Retail', icon: ShoppingBag, metric: 'Sub-second storefronts' },
  { id: 'real-estate-architecture', name: 'Real Estate', icon: Building2, metric: 'Editorial listing portals' },
  { id: 'fitness-athletics', name: 'Fitness & Athletics', icon: Dumbbell, metric: 'Membership funnels' },
  { id: 'home-services-trades', name: 'Home Services', icon: Wrench, metric: 'Dispatch & booking' },
  { id: 'medical-clinics', name: 'Medical & Dental', icon: Stethoscope, metric: 'Patient onboarding' },
];

export const IndustriesStrip: React.FC = () => {
  return (
    <section className="relative bg-[var(--bg)] px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <Reveal as="p" variant="fade" className="eyebrow">
            Industries we know deeply
          </Reveal>
          <Reveal variant="fade">
            <Link href="/industries" className="inline-flex items-center gap-2 text-sm font-medium text-white">
              <span className="link-underline">Explore industry playbooks</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <ul className="grid grid-cols-1 border-t border-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES_LIST.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <Reveal as="li" key={ind.id} variant="up" delay={(i % 3) * 80} className="border-b border-white/[0.08] sm:odd:border-r lg:border-r lg:[&:nth-child(3n)]:border-r-0">
                <Link
                  href="/industries"
                  className="group relative flex items-center gap-5 overflow-hidden px-2 py-7 sm:px-6 sm:py-9"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 origin-bottom scale-y-0 bg-white/[0.03] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100"
                  />
                  <span className="relative grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/[0.03] text-violet-300 transition-colors duration-300 group-hover:border-violet-400/50 group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="relative min-w-0 flex-1">
                    <span className="block text-lg font-semibold tracking-tight text-white">{ind.name}</span>
                    <span className="mt-0.5 block text-sm text-zinc-500">{ind.metric}</span>
                  </span>
                  <ArrowUpRight className="relative h-5 w-5 shrink-0 text-zinc-600 transition-all duration-500 group-hover:rotate-45 group-hover:text-white" />
                </Link>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default IndustriesStrip;
