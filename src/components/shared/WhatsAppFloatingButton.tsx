'use client';

import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export const WhatsAppFloatingButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const phoneNumber = '923196762317';
  const defaultMessage = encodeURIComponent(
    'Hi Saad, I visited the Arclyn Studio website and want to discuss a project with you.'
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <aside aria-label="Direct WhatsApp Contact" className="fixed bottom-6 right-6 z-50 flex items-end flex-col gap-2 pointer-events-auto">
      {/* Interactive Tooltip bubble */}
      {showTooltip && (
        <div className="bg-[#0b0f19]/95 text-white border border-emerald-500/30 rounded-2xl p-3.5 shadow-2xl backdrop-blur-xl max-w-xs transition-all duration-300 animate-in fade-in slide-in-from-bottom-2">
          <div className="flex items-start justify-between gap-3 mb-1.5">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-bold text-white">Saad Rehman</span>
            </div>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-slate-400 hover:text-white p-0.5 rounded-md"
              aria-label="Close tooltip"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className="text-xs text-slate-300 leading-snug">
            Need an instant project consultation? Chat directly with the founder on WhatsApp.
          </p>
          <div className="mt-2 text-[11px] font-mono text-emerald-400">
            +92 3196762317 • Online
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        className="group relative flex items-center gap-3 px-4 py-3.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-sm shadow-[0_10px_30px_rgba(16,185,129,0.35)] hover:shadow-[0_15px_40px_rgba(16,185,129,0.5)] transition-all duration-300 hover:scale-105 active:scale-95 border border-white/20 select-none"
        aria-label="Chat on WhatsApp +923196762317"
      >
        {/* Pulsing ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping pointer-events-none opacity-75" />

        <div className="relative flex items-center justify-center">
          <MessageCircle className="w-5 h-5 transition-transform group-hover:rotate-12" />
        </div>

        <span className="relative hidden sm:inline tracking-tight">Chat on WhatsApp</span>
        <span className="relative sm:hidden tracking-tight">WhatsApp</span>
      </a>
    </aside>
  );
};
