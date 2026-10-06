'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { MagneticButton } from '../shared/MagneticButton';

export const PartnerProgramSection: React.FC = () => {
  return (
    <section id="partner-program" className="relative isolate overflow-hidden bg-[#090909] py-20 text-white sm:py-24 lg:py-28">
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

      <div className="relative mx-auto grid max-w-7xl gap-9 px-5 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12 lg:px-10">
        <div>
          <div className="mb-6 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#ff1010]">
            <span className="h-px w-8 bg-[#ff1010]" />
            <span>Partner Program</span>
          </div>
          <h2 className="max-w-4xl text-4xl font-black uppercase leading-[0.92] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
            Earn money with us by becoming <span className="text-[#ff1010]">our partner.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#a0a0a0] sm:text-lg">
            Introduce Arclyn Studio to businesses in your family, among your friends, or across your city.
          </p>
          <div className="mt-7 flex flex-col gap-2 border-l-2 border-[#ff1010] py-1 pl-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-7 sm:gap-y-3 sm:pl-5">
            <span className="text-lg font-bold uppercase tracking-[0.02em] text-white sm:text-xl">Bring us a client.</span>
            <span className="text-lg font-bold uppercase tracking-[0.02em] text-[#ff1010] sm:text-xl">Get 30% of project revenue.</span>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <MagneticButton strength={0.18}>
              <Link
                href="/partner-program"
                className="inline-flex min-h-11 items-center justify-center gap-3 bg-[#ff1010] px-5 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#e00000] active:scale-[0.98]"
              >
                <span>Partner with us</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </MagneticButton>
            <a
              href="https://wa.me/923196762317?text=Hi%20Saad,%20I%20want%20to%20learn%20more%20about%20the%20Arclyn%20Studio%2030%%20partner%20program."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#a0a0a0] transition-colors hover:text-white"
            >
              <MessageCircle className="h-4 w-4 text-[#ff1010]" />
              <span>Ask us on WhatsApp</span>
            </a>
          </div>
        </div>

        <div className="flex items-baseline gap-3 border-t border-white/10 pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
          <span className="text-8xl font-black leading-none tracking-[-0.09em] text-[#ff1010] sm:text-9xl lg:text-[10rem]">30%</span>
          <span className="max-w-24 text-[10px] font-semibold uppercase leading-relaxed tracking-[0.17em] text-[#8a8a8a]">of project revenue</span>
        </div>
      </div>
    </section>
  );
};

export default PartnerProgramSection;
