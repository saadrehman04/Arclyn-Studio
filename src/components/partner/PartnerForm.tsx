'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export const PartnerForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [track, setTrack] = useState('referral');
  const [website, setWebsite] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-8 rounded-2xl bg-emerald-950/30 border border-emerald-500/40 text-center space-y-3">
        <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-white">Application Received!</h3>
        <p className="text-xs sm:text-sm text-slate-300">
          Thank you, <strong className="text-white">{name}</strong>. Our partnership team will review your application and send onboarding materials to <span className="text-cyan-300">{email}</span> within 12 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
            Your Full Name *
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Alex Morgan"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
            Work Email Address *
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="alex@yourdomain.com"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
            Partnership Track *
          </label>
          <select
            value={track}
            onChange={(e) => setTrack(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-[#0C122C] border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
          >
            <option value="referral">Refer a Client (30% Commission)</option>
            <option value="agency">Become a Strategic Partner (Up to 40%)</option>
            <option value="both">Both / General Discussion</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
            Your Primary Website or Portfolio
          </label>
          <input
            type="url"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            placeholder="https://yourbrand.com"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-300 mb-1.5">
          Tell Us About Your Network or Upcoming Client Needs
        </label>
        <textarea
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Share a bit about the types of businesses you work with or any active leads you'd like to discuss..."
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
        />
      </div>

      <button
        type="submit"
        className="w-full py-4 rounded-xl text-sm font-bold text-white btn-primary-gradient flex items-center justify-center gap-2 mt-4"
      >
        <Send className="w-4 h-4" />
        <span>Submit Partner Application</span>
      </button>
    </form>
  );
};
