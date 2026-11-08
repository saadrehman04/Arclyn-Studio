'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';

const PHONE = '923196762317';
const MESSAGE = encodeURIComponent('Hi Saad, I visited the Arclyn Studio website and want to discuss a project with you.');

/**
 * Quiet floating WhatsApp shortcut. Solid surface, no pulsing/infinite
 * animations, icon-only on phones so it never covers content.
 */
export const WhatsAppFloatingButton: React.FC = () => (
  <a
    href={`https://wa.me/${PHONE}?text=${MESSAGE}`}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat with Arclyn Studio on WhatsApp"
    className="group fixed bottom-5 right-5 z-50 inline-flex h-12 items-center gap-2.5 rounded-full border border-white/15 bg-[#111113] pl-3.5 pr-3.5 text-sm font-medium text-white shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-colors duration-300 hover:border-white/30 hover:bg-[#18181b] sm:bottom-6 sm:right-6 sm:pr-5"
  >
    <span className="relative grid h-7 w-7 place-items-center rounded-full bg-[#25D366] text-black">
      <MessageCircle className="h-4 w-4" />
    </span>
    <span className="hidden sm:inline">Chat on WhatsApp</span>
  </a>
);
