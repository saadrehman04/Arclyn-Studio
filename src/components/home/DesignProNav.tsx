'use client';

import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { name: 'Home', href: '#' },
  { name: 'About Us', href: '#about' },
  { name: 'Courses', href: '#services' },
  { name: 'Instructors', href: '#leadership' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact us', href: '/contact', hasArrow: true },
];

export const DesignProNav: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full relative z-30 pt-6 sm:pt-8 font-[family-name:var(--font-inter)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo: Circular design with 2px white border, filled inner circle + DesignPro text */}
        <a href="#" className="flex items-center gap-3 group focus:outline-none">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-white transition-opacity duration-300 group-hover:opacity-90" />
          </div>
          <span className="font-semibold text-lg sm:text-xl tracking-tight text-white transition-colors duration-300">
            DesignPro
          </span>
        </a>

        {/* Desktop Navigation Links: Rounded Pill Container with gray-700 border */}
        <div className="hidden lg:flex items-center rounded-full border border-gray-700 bg-black/40 backdrop-blur-md px-6 py-2.5 shadow-2xl">
          <ul className="flex items-center gap-6 xl:gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm font-normal text-white/80 hover:text-white transition-colors duration-200 inline-flex items-center gap-1 group py-1"
                >
                  <span>{link.name}</span>
                  {link.hasArrow && (
                    <ArrowUpRight className="w-3.5 h-3.5 text-white/80 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Hamburger Button (screens < lg) */}
        <div className="lg:hidden flex items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full border border-gray-700 bg-black/60 backdrop-blur-md text-white/80 hover:text-white hover:border-gray-500 transition-colors focus:outline-none focus:ring-2 focus:ring-white/40"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

      </div>

      {/* Mobile Menu Animated Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="lg:hidden absolute top-full left-0 right-0 px-4 sm:px-6 pt-3 pb-6 z-40"
          >
            <div className="max-w-md mx-auto rounded-3xl border border-gray-700 bg-black/90 backdrop-blur-xl p-6 shadow-2xl flex flex-col gap-4">
              <ul className="flex flex-col gap-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-sm font-medium text-white/80 hover:text-white hover:bg-white/5 px-4 py-2.5 rounded-xl transition-all flex items-center justify-between"
                    >
                      <span>{link.name}</span>
                      {link.hasArrow && (
                        <ArrowUpRight className="w-4 h-4 text-white/80" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default DesignProNav;
