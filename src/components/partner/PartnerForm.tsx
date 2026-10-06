'use client';

import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

export const PartnerForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [track, setTrack] = useState('referral');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="space-y-3 border-t border-white/10 py-6 text-center">
        <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-[#ff1010]/35 bg-[#ff1010]/10 text-[#ff1010]">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-medium text-white">Application received</h3>
        <p className="text-sm leading-relaxed text-[#8a8a8a]">
          Thank you, <strong className="font-medium text-white">{name}</strong>. We&apos;ll follow up at <span className="text-white">{email}</span> within 12 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-[10px] font-medium uppercase tracking-[0.16em] text-[#8a8a8a]">
            Name
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="w-full rounded-[10px] border border-white/10 bg-[#111111] px-3.5 py-2.5 text-sm text-white placeholder:text-[#6e6e6e] transition-colors focus:border-[#ff1010] focus:outline-none"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-[10px] font-medium uppercase tracking-[0.16em] text-[#8a8a8a]">
            Email
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            className="w-full rounded-[10px] border border-white/10 bg-[#111111] px-3.5 py-2.5 text-sm text-white placeholder:text-[#6e6e6e] transition-colors focus:border-[#ff1010] focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-[10px] font-medium uppercase tracking-[0.16em] text-[#8a8a8a]">
          Partnership type
        </label>
        <select
          value={track}
          onChange={(e) => setTrack(e.target.value)}
          className="w-full rounded-[10px] border border-white/10 bg-[#111111] px-3.5 py-2.5 text-sm text-white transition-colors focus:border-[#ff1010] focus:outline-none"
        >
          <option value="referral">Refer a client</option>
          <option value="agency">Agency partnership</option>
          <option value="both">Let&apos;s discuss</option>
        </select>
      </div>

      <button
        type="submit"
        className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#ff1010] px-5 text-sm font-medium uppercase tracking-[0.12em] text-white transition-all duration-200 hover:bg-[#ff2b2b]"
      >
        Send application
      </button>
    </form>
  );
};
