'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';

interface Testimonial {
  name: string;
  project: string;
  scope: string;
  date: string;
  comment: string;
  initials: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Aishwarya Thakur',
    project: 'DLF The Camellias, Gurugram',
    scope: 'Full Turnkey Interior',
    date: 'Verified Client • 2 months ago',
    comment:
      'Very professional team and full of great ideas. 10/10. They helped us visualize everything before execution with photorealistic 3D renders. The execution was on time and flawlessly delivered with immaculate attention to detail.',
    initials: 'AT',
  },
  {
    name: 'Kshitij Doval',
    project: 'Civil Lines Penthouse, Delhi',
    scope: 'Architectural Renovation',
    date: 'Verified Client • 3 months ago',
    comment:
      'Lovely team. Very understanding and professional with their approach. Strongly recommend for turnkey projects. Their attention to bespoke joinery and noble materials is second to none in the industry.',
    initials: 'KD',
  },
  {
    name: 'Pooja Rawat',
    project: 'Vasant Vihar Residence, New Delhi',
    scope: 'Bespoke Spatial Design',
    date: 'Verified Client • 1 month ago',
    comment:
      'Studio Kintsugi converted our bare apartment into our dream home. The subtle color choices, mood lighting, and curated natural textures are truly divine. A stress-free and artistic experience throughout.',
    initials: 'PR',
  },
  {
    name: 'Devendra Bisht',
    project: 'The Magnolias, Gurugram',
    scope: 'Luxury Penthouse Build',
    date: 'Verified Client • 4 months ago',
    comment:
      'Exceptional attention to craftsmanship. Their furniture design and custom joinery work surpassed our expectations. The coordination across contractors and specialized artisans was completely seamless.',
    initials: 'DB',
  },
  {
    name: 'Rohan & Meera Kapoor',
    project: 'Central Greens Villa, Noida',
    scope: 'Turnkey Living & Landscape',
    date: 'Verified Client • 1 month ago',
    comment:
      'The disciplined 6-stage methodology gave us complete clarity and peace of mind. Manju and Mukul brought an authentic Japanese minimalist soul and functional elegance into our everyday home.',
    initials: 'RK',
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(2); // Center card active by default
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const total = TESTIMONIALS.length;

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Auto-play timer (pauses on user hover/touch)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  // Touch Swipe Handlers for Mobile Devices
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 35) {
      nextSlide();
    } else if (diff < -35) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Keyboard navigation (ArrowLeft / ArrowRight)
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'ArrowRight') nextSlide();
  };

  return (
    <section
      className="py-16 sm:py-20 lg:py-28 bg-[#FBF9F5] border-b border-[#EAE6DF] relative overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      aria-label="Client Reviews Slider"
    >
      {/* Subtle Ambient Background Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[400px] bg-[#EFE8DF]/60 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#EAE6DF] shadow-sm">
            <div className="relative w-4 h-4">
              <Image src="/images/000_icon.svg" alt="Google" fill className="object-contain" />
            </div>
            <span className="text-[10px] sm:text-[11px] font-semibold text-[#1A1918] tracking-wider uppercase">
              Google Verified Reviews
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#1A1918] tracking-tight">
            OUR CLIENTS SAY
          </h2>

          {/* Star rating summary */}
          <div className="flex items-center justify-center gap-1.5 text-[#F4B400] pt-1">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
            <span className="ml-2 text-xs sm:text-sm font-semibold text-[#1A1918]">5.0 / 5.0</span>
            <span className="text-[11px] sm:text-xs text-[#8C847B] ml-1">· 100% Recommended</span>
          </div>
        </div>

        {/* 3D Depth Cover Flow Slider Stage */}
        <div
          className="relative w-full h-[510px] sm:h-[470px] md:h-[480px] flex items-center justify-center"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          
          {/* Navigation Arrow: Left (Vertically Centered with Cards) */}
          <button
            onClick={prevSlide}
            aria-label="Previous Review"
            className="absolute left-1 sm:left-4 md:left-8 lg:left-12 top-1/2 -translate-y-1/2 z-40 w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-[#1A1918]/90 hover:bg-[#1A1918] text-white flex items-center justify-center shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95 border border-white/20 group cursor-pointer"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:-translate-x-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.4} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Navigation Arrow: Right (Vertically Centered with Cards) */}
          <button
            onClick={nextSlide}
            aria-label="Next Review"
            className="absolute right-1 sm:right-4 md:right-8 lg:right-12 top-1/2 -translate-y-1/2 z-40 w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-[#1A1918]/90 hover:bg-[#1A1918] text-white flex items-center justify-center shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95 border border-white/20 group cursor-pointer"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.4} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Testimonial Cards Layered in 3D Space */}
          {TESTIMONIALS.map((item, idx) => {
            // Compute circular difference relative to activeIndex
            let offset = idx - activeIndex;
            if (offset > Math.floor(total / 2)) {
              offset -= total;
            } else if (offset < -Math.floor(total / 2)) {
              offset += total;
            }

            // Define 3D styling based on offset
            const isCenter = offset === 0;
            const isImmediateLeft = offset === -1;
            const isImmediateRight = offset === 1;
            const isFarLeft = offset === -2;
            const isFarRight = offset === 2;

            let positionClasses = '';
            let style: React.CSSProperties = {};

            if (isCenter) {
              positionClasses =
                'z-30 opacity-100 scale-100 sm:scale-105 pointer-events-auto cursor-default shadow-[0_24px_50px_-12px_rgba(26,25,24,0.22)] border-[#DFD9CF] ring-1 ring-[#A76D58]/20';
              style = {
                transform: 'translate3d(-50%, -50%, 0)',
                left: '50%',
                top: '50%',
              };
            } else if (isImmediateLeft) {
              positionClasses =
                'z-20 opacity-45 sm:opacity-75 scale-[0.82] sm:scale-90 pointer-events-auto cursor-pointer shadow-lg border-[#EAE6DF] hover:opacity-90';
              style = {
                transform: 'translate3d(-50%, -50%, -50px)',
                left: 'calc(50% - 120px)',
                top: '50%',
              };
            } else if (isImmediateRight) {
              positionClasses =
                'z-20 opacity-45 sm:opacity-75 scale-[0.82] sm:scale-90 pointer-events-auto cursor-pointer shadow-lg border-[#EAE6DF] hover:opacity-90';
              style = {
                transform: 'translate3d(-50%, -50%, -50px)',
                left: 'calc(50% + 120px)',
                top: '50%',
              };
            } else if (isFarLeft) {
              positionClasses =
                'z-10 opacity-15 sm:opacity-35 scale-[0.70] sm:scale-[0.80] pointer-events-auto cursor-pointer shadow-md border-[#EAE6DF] hidden sm:block hover:opacity-60';
              style = {
                transform: 'translate3d(-50%, -50%, -100px)',
                left: 'calc(50% - 290px)',
                top: '50%',
              };
            } else if (isFarRight) {
              positionClasses =
                'z-10 opacity-15 sm:opacity-35 scale-[0.70] sm:scale-[0.80] pointer-events-auto cursor-pointer shadow-md border-[#EAE6DF] hidden sm:block hover:opacity-60';
              style = {
                transform: 'translate3d(-50%, -50%, -100px)',
                left: 'calc(50% + 290px)',
                top: '50%',
              };
            } else {
              positionClasses = 'opacity-0 pointer-events-none scale-50 z-0';
              style = {
                transform: 'translate3d(-50%, -50%, -150px)',
                left: '50%',
                top: '50%',
              };
            }

            return (
              <div
                key={idx}
                onClick={() => {
                  if (!isCenter) setActiveIndex(idx);
                }}
                style={style}
                className={`absolute w-[74vw] max-w-[285px] sm:max-w-[350px] md:max-w-[390px] lg:max-w-[420px] min-h-[430px] sm:min-h-[390px] bg-white rounded-3xl p-5 sm:p-7 md:p-8 border transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col justify-between ${positionClasses}`}
              >
                {/* Visual Glass Tint Overlay for Background Side Cards */}
                {!isCenter && (
                  <div className="absolute inset-0 bg-[#FBF9F5]/60 backdrop-blur-[1px] rounded-3xl pointer-events-none" />
                )}

                {/* Card Top: Stars & Project Scope Pill */}
                <div>
                  <div className="flex items-center justify-between gap-1.5 mb-3 sm:mb-4">
                    {/* 5 Stars */}
                    <div className="flex items-center text-[#F4B400] gap-0.5">
                      {[...Array(5)].map((_, starI) => (
                        <svg key={starI} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>

                    {/* Scope Badge */}
                    <span className="text-[8px] sm:text-[10px] font-mono font-medium text-[#A76D58] bg-[#F4EFEB] px-2 py-0.5 rounded-full border border-[#EAE6DF] truncate max-w-[130px] sm:max-w-[170px]">
                      {item.scope}
                    </span>
                  </div>

                  {/* Decorative Subtle Quote Mark */}
                  <span className="font-serif text-3xl sm:text-4xl text-[#A76D58]/25 leading-none select-none block -mb-1 sm:-mb-2">
                    “
                  </span>

                  {/* Full Review Text (Taller, Fully Legible without Cutoff) */}
                  <p className="text-xs sm:text-sm md:text-[15px] text-[#3A3834] leading-relaxed font-light italic mb-4 sm:mb-6">
                    {item.comment}
                  </p>
                </div>

                {/* Card Bottom: Client Info & Verified Status */}
                <div className="flex items-center justify-between pt-3.5 sm:pt-4 border-t border-[#F0ECE1] gap-2">
                  <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#F4EFEB] text-[#A76D58] font-serif font-bold text-xs sm:text-sm flex items-center justify-center border border-[#E8E2D9] flex-shrink-0">
                      {item.initials}
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-[11px] sm:text-sm font-semibold uppercase tracking-wider text-[#1A1918] truncate">
                        {item.name}
                      </h4>
                      <p className="text-[9px] sm:text-[11px] text-[#8C847B] font-light truncate">
                        {item.project}
                      </p>
                    </div>
                  </div>

                  {/* Verified Check Badge */}
                  <div className="flex items-center gap-1 text-[8px] sm:text-[10px] font-semibold text-[#2E7D32] bg-[#E8F5E9] px-1.5 sm:px-2 py-0.5 rounded-full border border-[#C8E6C9] flex-shrink-0">
                    <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-current" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="hidden xs:inline sm:inline">Verified</span>
                  </div>
                </div>

              </div>
            );
          })}

        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 pt-4 sm:pt-6">
          {TESTIMONIALS.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => setActiveIndex(dotIdx)}
              aria-label={`Go to slide ${dotIdx + 1}`}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                dotIdx === activeIndex
                  ? 'w-7 sm:w-8 h-2 bg-[#A76D58]'
                  : 'w-2 h-2 bg-[#DFD9CF] hover:bg-[#A76D58]/50'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
