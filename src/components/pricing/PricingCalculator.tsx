'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { PRICING_TIERS, ADD_ONS, PAYMENT_STRUCTURE } from '@/data/pricing';
import { 
  Check, 
  ArrowRight, 
  Sparkles, 
  Plus, 
  Minus, 
  ShieldCheck, 
  Calculator,
  HelpCircle,
  Clock
} from 'lucide-react';

export const PricingCalculator: React.FC = () => {
  const [selectedTierId, setSelectedTierId] = useState<string>('business-website');
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>(['booking-system']);

  const toggleAddOn = (id: string) => {
    setSelectedAddOns((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const currentTier = PRICING_TIERS.find((t) => t.id === selectedTierId) || PRICING_TIERS[1];

  return (
    <div className="space-y-24">
      {/* 4 Core Tiers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-stretch">
        {PRICING_TIERS.map((tier) => {
          const isPopular = tier.popular;
          const isSelected = selectedTierId === tier.id;

          return (
            <div
              key={tier.id}
              onClick={() => setSelectedTierId(tier.id)}
              className={`relative rounded-3xl p-7 flex flex-col justify-between cursor-pointer transition-all duration-300 ${
                isPopular
                  ? 'bg-[#0E1535] border-2 border-purple-500/80 shadow-2xl shadow-purple-950/60 lg:-translate-y-2'
                  : 'glass-panel hover:border-white/20'
              } ${isSelected ? 'ring-2 ring-cyan-400/80' : ''}`}
            >
              {isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white text-[11px] font-bold uppercase tracking-wider shadow-lg">
                  Most Popular
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-white">
                    {tier.name}
                  </h3>
                </div>

                <div className="text-xs text-cyan-300 font-semibold mb-4">
                  {tier.timeline}
                </div>

                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  {tier.description}
                </p>

                {/* Price block */}
                <div className="mb-6 pb-6 border-b border-white/10">
                  <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    {tier.priceUSD}
                  </div>
                  {tier.pricePKR && (
                    <div className="text-xs font-medium text-slate-400 mt-1">
                      Approx. {tier.pricePKR}
                    </div>
                  )}
                  <div className="text-[11px] text-purple-300 font-medium mt-1">
                    {tier.billingPeriod}
                  </div>
                </div>

                {/* Feature Checklist */}
                <div className="space-y-2.5 mb-8">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-300">
                    Included Features:
                  </div>
                  {tier.features.map((f) => (
                    <div key={f} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span className="leading-tight">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Link
                  href={tier.ctaHref}
                  className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold transition-all ${
                    isPopular
                      ? 'btn-primary-gradient text-white'
                      : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                  }`}
                >
                  <span>{tier.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Add-Ons Menu Section */}
      <div className="rounded-3xl glass-panel p-8 sm:p-12 border border-white/10">
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-xs font-semibold text-cyan-300 mb-3">
            <Plus className="w-3.5 h-3.5" />
            <span>Modular Enhancements</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Specialized Add-Ons &amp; Feature Modules
          </h2>
          <p className="text-sm text-slate-300 mt-2">
            Bolt on specialized operational systems to any website or web app tier. Itemized scope with transparent pricing.
          </p>
          <div className="text-xs text-purple-300 mt-1">
            * Starting around 20,000–30,000 PKR, final quote confirmed after scope review.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ADD_ONS.map((addon) => {
            const isSelected = selectedAddOns.includes(addon.id);

            return (
              <div
                key={addon.id}
                onClick={() => toggleAddOn(addon.id)}
                className={`p-6 rounded-2xl border cursor-pointer transition-all duration-200 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-purple-950/30 border-purple-500/60 shadow-lg shadow-purple-950/40'
                    : 'bg-white/[0.02] border-white/10 hover:border-white/20'
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-sm font-bold text-white">
                      {addon.title}
                    </h3>
                    <div className={`w-5 h-5 rounded-md flex items-center justify-center text-xs font-bold ${
                      isSelected ? 'bg-purple-500 text-white' : 'border border-white/20 text-slate-500'
                    }`}>
                      {isSelected ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3 h-3" />}
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {addon.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-semibold text-cyan-300">
                      {addon.pricePKR}
                    </div>
                    <div className="text-[10px] text-slate-400">
                      ({addon.priceUSD})
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">
                    {addon.timeline}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Config Summary */}
        <div className="mt-10 p-6 rounded-2xl bg-[#090E26] border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Your Custom Scope Preview
            </div>
            <div className="text-lg font-bold text-white mt-1">
              Base: {currentTier.name} ({currentTier.priceUSD}) + {selectedAddOns.length} Add-On{selectedAddOns.length !== 1 ? 's' : ''}
            </div>
            <div className="text-xs text-slate-300 mt-1">
              Selected: {selectedAddOns.map((id) => ADD_ONS.find((a) => a.id === id)?.title).join(', ') || 'No add-ons selected'}
            </div>
          </div>

          <Link
            href={`/contact?tier=${currentTier.id}&addons=${selectedAddOns.join(',')}`}
            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white btn-primary-gradient whitespace-nowrap"
          >
            <span>Lock In Scope &amp; Quote</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Payment Structure Breakdown */}
      <div className="rounded-3xl glass-panel p-8 sm:p-12 border border-white/10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-xs font-semibold text-emerald-300 mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Fair &amp; Aligned Milestone Schedule</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Payment Structure: 50% / 30% / 20%
          </h2>
          <p className="text-sm text-slate-300 mt-2">
            We believe in complete mutual alignment. You never pay for unverified work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PAYMENT_STRUCTURE.milestones.map((m, idx) => (
            <div
              key={m.percentage}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 relative"
            >
              <div className="text-4xl font-extrabold font-mono text-gradient mb-2">
                {m.percentage}
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                {m.stage}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {m.desc}
              </p>
              <div className="mt-4 pt-3 border-t border-white/5 text-[10px] font-mono uppercase tracking-wider text-slate-500">
                Milestone 0{idx + 1}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center text-xs text-slate-400">
          {PAYMENT_STRUCTURE.guarantee} • {PAYMENT_STRUCTURE.note}
        </div>
      </div>

      {/* Pricing FAQs */}
      <div className="max-w-4xl mx-auto space-y-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Pricing &amp; Contract FAQs
          </h2>
        </div>

        <div className="p-6 rounded-2xl glass-panel border border-white/10 space-y-2">
          <h3 className="text-base font-bold text-white">
            Are there any monthly maintenance or hidden hosting fees?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            No hidden fees. We host on free-tier or cost-efficient Vercel / Supabase setups which typically cost $0 to $20/month for standard traffic. You own your deployment accounts directly.
          </p>
        </div>

        <div className="p-6 rounded-2xl glass-panel border border-white/10 space-y-2">
          <h3 className="text-base font-bold text-white">
            Can we pay in Pakistani Rupees (PKR) or USD?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Yes, we accept both local Pakistani Rupee bank transfers (via standard IBAN, Raast, or corporate invoice) as well as international USD payments via Wire, Stripe, or Wise.
          </p>
        </div>

        <div className="p-6 rounded-2xl glass-panel border border-white/10 space-y-2">
          <h3 className="text-base font-bold text-white">
            What happens if we need revisions during the project?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Every milestone includes collaborative review cycles. Revisions within the agreed scope are completed with zero additional charges before you sign off on the 30% design and demo milestone.
          </p>
        </div>
      </div>

    </div>
  );
};
