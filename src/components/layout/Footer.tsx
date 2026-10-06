'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Exact Framer University Vector Wordmark Path ('anima' without the dot on 'i')
const ANIMA_SVG_PATH =
  'M 97.215 208.857 C 79.443 208.857 63.313 204.352 48.812 195.343 C 34.599 186.333 23.247 174.191 14.767 158.895 C 6.563 143.333 2.461 126 2.461 106.886 C 2.461 87.505 6.563 70.172 14.767 54.876 C 23.247 39.314 34.599 27.029 48.812 18.019 C 63.313 8.743 79.443 4.095 97.215 4.095 C 112.258 4.095 125.518 7.371 137.003 13.924 C 148.513 19.968 158.156 29.029 164.896 40.133 C 171.736 51.334 175.151 64.029 175.151 78.219 L 175.151 134.733 C 175.151 148.934 171.736 161.629 164.896 172.819 C 158.333 184.02 149.175 192.886 137.413 199.438 C 125.661 205.724 112.258 208.857 97.215 208.857 Z M 104.598 166.267 C 121.283 166.267 134.685 160.677 144.797 149.476 C 155.195 138.286 160.384 123.953 160.384 106.476 C 160.384 94.743 158.066 84.362 153.411 75.352 C 149.027 66.623 142.183 59.364 133.722 54.467 C 125.518 49.286 115.817 46.686 104.598 46.686 C 93.667 46.686 83.955 49.286 75.475 54.467 C 67.271 59.381 60.708 66.343 55.786 75.352 C 51.14 84.362 48.812 94.743 48.812 106.476 C 48.812 118.219 51.14 128.59 55.786 137.6 C 60.708 146.61 67.271 153.715 75.475 158.895 C 83.955 163.81 93.667 166.267 104.598 166.267 Z M 157.512 204.762 L 157.512 151.933 L 165.306 104.019 L 157.512 56.514 L 157.512 8.19 L 202.633 8.19 L 202.633 204.762 Z M 379.455 204.762 L 379.455 91.324 C 379.455 78.219 375.22 67.438 366.739 58.971 C 358.536 50.515 347.871 46.276 334.745 46.276 C 325.997 46.276 318.204 48.191 311.364 52.01 C 304.633 55.726 299.089 61.261 295.367 67.981 C 291.542 74.81 289.624 82.591 289.624 91.324 L 271.986 81.495 C 271.986 66.486 275.267 53.238 281.83 41.771 C 288.132 30.297 297.505 20.797 308.903 14.333 C 320.665 7.515 333.791 4.095 348.281 4.095 C 363.048 4.095 376.174 7.924 387.659 15.562 C 399.144 22.933 408.168 32.629 414.732 44.638 C 421.295 56.381 424.576 68.667 424.576 81.495 L 424.576 204.762 Z M 244.503 204.762 L 244.503 8.19 L 289.624 8.19 L 289.624 204.762 Z M 462.642 204.762 L 462.642 8.19 L 507.762 8.19 L 507.762 204.762 Z M 550.166 204.762 L 550.166 8.19 L 595.286 8.19 L 595.286 204.762 Z M 681.016 204.762 L 681.016 87.638 C 681.016 74.533 676.914 64.439 668.71 57.333 C 660.506 49.962 650.385 46.276 638.356 46.276 C 630.152 46.276 622.769 47.914 616.206 51.19 C 609.913 54.47 604.658 59.433 601.029 65.524 C 597.194 71.534 595.286 78.905 595.286 87.638 L 577.648 77.81 C 577.648 62.8 580.93 49.829 587.493 38.905 C 593.875 28.156 603.1 19.371 614.155 13.514 C 625.363 7.238 637.946 4.095 651.892 4.095 C 665.839 4.095 678.411 7.105 689.63 13.105 C 700.685 18.962 709.91 27.747 716.292 38.495 C 722.855 49.419 726.137 62.524 726.137 77.81 L 726.137 204.762 Z M 811.866 204.762 L 811.866 87.638 C 811.866 74.533 807.764 64.439 799.56 57.333 C 791.356 49.962 781.235 46.276 769.206 46.276 C 761.269 46.276 754.029 47.914 747.466 51.19 C 740.903 54.467 735.704 59.248 731.879 65.524 C 728.044 71.534 726.136 78.905 726.136 87.638 L 700.705 77.81 C 702.069 62.8 706.447 49.829 713.831 38.905 C 720.975 28.199 730.71 19.465 742.134 13.514 C 753.886 7.238 766.745 4.095 780.692 4.095 C 794.905 4.095 807.764 7.105 819.249 13.105 C 830.541 18.932 840.038 27.707 846.732 38.495 C 853.562 49.419 856.987 62.524 856.987 77.81 L 856.987 204.762 Z M 977.715 208.857 C 959.934 208.857 943.803 204.352 929.313 195.343 C 915.09 186.333 903.738 174.191 895.268 158.895 C 887.064 143.333 882.962 126 882.962 106.886 C 882.962 87.505 887.064 70.172 895.268 54.876 C 903.738 39.314 915.09 27.029 929.313 18.019 C 943.803 8.743 959.934 4.095 977.715 4.095 C 992.749 4.095 1006.018 7.371 1017.504 13.924 C 1029.011 19.971 1038.654 29.032 1045.397 40.133 C 1052.226 51.334 1055.651 64.029 1055.651 78.219 L 1055.651 134.733 C 1055.651 148.934 1052.226 161.629 1045.397 172.819 C 1038.834 184.02 1029.666 192.886 1017.914 199.438 C 1006.152 205.724 992.749 208.857 977.715 208.857 Z M 985.099 166.267 C 1001.773 166.267 1015.176 160.677 1025.297 149.476 C 1035.685 138.286 1040.885 123.953 1040.885 106.476 C 1040.885 94.743 1038.557 84.362 1033.911 75.352 C 1029.525 66.625 1022.682 59.366 1014.222 54.467 C 1006.019 49.286 996.307 46.686 985.099 46.686 C 974.157 46.686 964.446 49.286 955.976 54.467 C 947.772 59.381 941.209 66.343 936.286 75.352 C 931.631 84.362 929.313 94.743 929.313 106.476 C 929.313 118.219 931.631 128.59 936.286 137.6 C 941.209 146.61 947.772 153.715 955.976 158.895 C 964.446 163.81 974.157 166.267 985.099 166.267 Z M 1038.013 204.762 L 1038.013 151.933 L 1045.807 104.019 L 1038.013 56.514 L 1038.013 8.19 L 1083.134 8.19 L 1083.134 204.762 Z';

export const Footer: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const blueCircleRef = useRef<HTMLDivElement>(null);
  const whiteCircleRef = useRef<HTMLDivElement>(null);
  const topContentRef = useRef<HTMLDivElement>(null);

  // =========================================================
  // FRAMER FOOTER SCROLL SEQUENCE (stellar-apartment-381100)
  // 1. Initial view: Huge White circle with Blue rim fills card (Screenshot 1)
  // 2. Mid scroll: Concentric circles shrink into dark card (Screenshot 2)
  // 3. Further: Shrinks over 'anima', revealing top links & wordmark (Screenshot 3)
  // 4. Resting: Blue vanishes, White lands precisely as the dot of 'i' (Screenshot 4)
  // =========================================================
  useEffect(() => {
    const track = trackRef.current;
    const svg = svgRef.current;
    const blueCircle = blueCircleRef.current;
    const whiteCircle = whiteCircleRef.current;
    const topContent = topContentRef.current;
    if (!track || !blueCircle || !whiteCircle) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      const svgWidth = svg ? svg.clientWidth : 1087;
      const targetScale = (svgWidth * (45.12 / 1087)) / 2500;
      gsap.set(whiteCircle, { scale: targetScale });
      gsap.set(blueCircle, { opacity: 0, scale: targetScale });
      return;
    }

    const lenis = (window as unknown as { __lenis?: { on: (event: string, cb: () => void) => void; off: (event: string, cb: () => void) => void } }).__lenis;
    const lenisUpdate = () => ScrollTrigger.update();
    if (lenis) {
      lenis.on('scroll', lenisUpdate);
    }

    const ctx = gsap.context(() => {
      // Dynamic target scale calculation based on actual rendered SVG width
      const computeTargetScale = () => {
        const svgWidth = svg && svg.clientWidth > 0 ? svg.clientWidth : 1087;
        const stemWidth = svgWidth * (45.12 / 1087);
        return Math.max(stemWidth / 2500, 0.005);
      };

      const targetScale = computeTargetScale();

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: track,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.8,
          invalidateOnRefresh: true,
        },
      });

      // 1. White Circle scales down from 1.0 (fills container) to exact 'i' dot (Screenshot 1 -> 4)
      tl.fromTo(
        whiteCircle,
        { scale: 1, transformOrigin: '50% 50%' },
        { scale: targetScale, ease: 'power2.inOut' },
        0
      );

      // 2. Blue Circle starts slightly larger (1.18) exposing the blue edge on right (Screenshot 1),
      // shrinks down concentrically (Screenshot 2 & 3), and fades to 0 as the white dot settles (Screenshot 4)
      tl.fromTo(
        blueCircle,
        { scale: 1.18, opacity: 1, transformOrigin: '50% 50%' },
        { scale: targetScale * 1.05, opacity: 0, ease: 'power2.inOut' },
        0
      );

      // 3. Top Content smoothly transitions to full brightness as circles shrink below it
      if (topContent) {
        tl.fromTo(
          topContent,
          { opacity: 0.35 },
          { opacity: 1, ease: 'power1.out' },
          0.15
        );
      }
    }, track);

    return () => {
      if (lenis) {
        lenis.off('scroll', lenisUpdate);
      }
      ctx.revert();
    };
  }, []);

  return (
    <footer id="footer" className="relative w-full bg-black select-none z-20">
      {/* =========================================================
          SCROLL PINNING TRACK (180vh provides smooth scrub distance)
          Sticky viewport container ensures exact sequence pacing
          ========================================================= */}
      <div ref={trackRef} className="relative w-full h-[180vh] bg-black">
        <div className="sticky top-0 w-full h-screen p-3 sm:p-5 lg:p-6 flex flex-col justify-between overflow-hidden">
          
          {/* =========================================================
              THE SINGLE ROUNDED FOOTER CARD (framer-rrzsf3)
              Deep charcoal panel (#131415) with soft 60px-100px border radius
              ========================================================= */}
          <div
            ref={containerRef}
            className="relative w-full flex-1 bg-[#131415] rounded-[36px] sm:rounded-[60px] lg:rounded-[90px] border border-white/[0.08] overflow-hidden flex flex-col justify-between pt-8 sm:pt-12 lg:pt-16 px-6 sm:px-12 lg:px-16 pb-0 shadow-[0_30px_90px_rgba(0,0,0,0.9)]"
          >
            
            {/* =========================================================
                TOP CONTENT ROW (3 Columns matching Framer template)
                Col 1: Mission Tagline
                Col 2: Explore & Socials
                Col 3: Big Action Buttons ('Contact me' & 'Resources')
                ========================================================= */}
            <div
              ref={topContentRef}
              className="relative z-30 flex flex-col lg:flex-row items-start justify-between gap-8 sm:gap-10 lg:gap-12"
            >
              {/* Col 1: Tagline */}
              <div className="max-w-xs sm:max-w-sm">
                <p className="text-lg sm:text-xl lg:text-[22px] font-bold text-white tracking-tight leading-[1.3]">
                  Learn how to design &amp; publish pro sites with Arclyn Studio.
                </p>
                <p className="text-xs sm:text-sm text-slate-400 mt-2 font-normal">
                  High-performance web development &amp; AI engineering.
                </p>
              </div>

              {/* Col 2: Navigation Links (Explore & Socials) */}
              <div className="flex items-start gap-10 sm:gap-16 lg:gap-20">
                {/* Explore */}
                <div>
                  <h4 className="text-sm font-bold text-white mb-3 tracking-tight">
                    Explore
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm font-medium text-[#9ba1a5]">
                    <li>
                      <Link href="/work" className="hover:text-white transition-colors">
                        Resources
                      </Link>
                    </li>
                    <li>
                      <Link href="/about" className="hover:text-white transition-colors">
                        Lessons
                      </Link>
                    </li>
                    <li>
                      <Link href="/services" className="hover:text-white transition-colors">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link href="/pricing" className="hover:text-white transition-colors">
                        Pricing
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Socials */}
                <div>
                  <h4 className="text-sm font-bold text-white mb-3 tracking-tight">
                    Socials
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm font-medium text-[#9ba1a5]">
                    <li>
                      <a
                        href="https://twitter.com/arclyn_studio"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors"
                      >
                        𝕏 @learnframer
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/saadrehman04/Arclyn-Studio"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors"
                      >
                        ▶ @framer.university
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://instagram.com/arclyn_studio"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors"
                      >
                         @framer.university
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Col 3: Signature Framer Big Action Buttons */}
              <div className="flex flex-col items-start lg:items-end gap-3 sm:gap-4 w-full sm:w-auto">
                {/* Button 1: Contact me (Electric Blue Highlight) */}
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 sm:gap-4 transition-transform active:scale-[0.98]"
                >
                  <span className="text-xl sm:text-2xl lg:text-[28px] font-bold tracking-tight text-[#0080ff] group-hover:text-blue-400 transition-colors">
                    Contact me
                  </span>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#0080ff] text-white flex items-center justify-center transition-transform group-hover:scale-105 shadow-[0_0_20px_rgba(0,128,255,0.4)]">
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </Link>

                {/* Button 2: Resources (Pure White Highlight) */}
                <Link
                  href="/work"
                  className="group inline-flex items-center gap-3 sm:gap-4 transition-transform active:scale-[0.98]"
                >
                  <span className="text-xl sm:text-2xl lg:text-[28px] font-bold tracking-tight text-white group-hover:text-slate-200 transition-colors">
                    Resources
                  </span>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white text-[#131415] flex items-center justify-center transition-transform group-hover:scale-105 shadow-sm">
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </Link>
              </div>

            </div>

            {/* =========================================================
                BOTTOM STAGE: EXPANDING CONCENTRIC CIRCLES & WORDMARK
                White and Blue 2500px circles centered at dot of 'i' (44.64%, 113.2%)
                ========================================================= */}
            <div className="relative w-full flex flex-col items-center justify-end overflow-visible mt-auto pt-4 sm:pt-8">
              
              <div className="relative w-full max-w-[1088px] mx-auto overflow-visible select-none">
                
                {/* Precise Geometric Anchor at the dot above the stem of 'i' */}
                <div
                  className="absolute pointer-events-none z-20"
                  style={{
                    left: '44.64%',
                    bottom: '113.2%',
                    width: 0,
                    height: 0,
                  }}
                >
                  {/* Blue Outer Circle Layer (framer-7imuf3) */}
                  <div
                    ref={blueCircleRef}
                    className="absolute rounded-full aspect-square pointer-events-none will-change-transform"
                    style={{
                      width: '2500px',
                      height: '2500px',
                      backgroundColor: '#0080ff',
                      top: 0,
                      left: 0,
                      transform: 'translate(-50%, -50%) scale(1.18)',
                      transformOrigin: '50% 50%',
                      zIndex: 21,
                    }}
                  />

                  {/* White Inner Circle Layer (framer-zsxdj7) */}
                  <div
                    ref={whiteCircleRef}
                    className="absolute rounded-full aspect-square pointer-events-none will-change-transform"
                    style={{
                      width: '2500px',
                      height: '2500px',
                      backgroundColor: '#ffffff',
                      top: 0,
                      left: 0,
                      transform: 'translate(-50%, -50%) scale(1)',
                      transformOrigin: '50% 50%',
                      zIndex: 22,
                    }}
                  />
                </div>

                {/* SVG Silhouette Wordmark ('anima' with open dot on 'i') */}
                <div className="relative z-10 w-full overflow-hidden -mb-2 sm:-mb-5 lg:-mb-7">
                  <svg
                    ref={svgRef}
                    viewBox="0 0 1087 215"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-auto block select-none pointer-events-none"
                    aria-label="anima"
                  >
                    <path d={ANIMA_SVG_PATH} fill="#ffffff" />
                  </svg>
                </div>

              </div>

            </div>

          </div>

          {/* =========================================================
              BOTTOM META CREDITS BAR (Outside card matching Framer)
              ========================================================= */}
          <div className="relative z-30 pt-3 sm:pt-4 px-2 flex items-center justify-between text-[11px] sm:text-xs text-[#9ba1a5]">
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 fill-current">
                <path d="M 12 10.667 L 12 4 L 5.333 4 M 4 12 L 11.667 4.333" fill="transparent" strokeWidth="1.5" stroke="currentColor" strokeMiterlimit="10" />
              </svg>
              <span>Copyright &copy; 2024 Framer University. All rights reserved.</span>
            </div>

            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#222426] text-slate-300 text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>Made in Framer</span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
