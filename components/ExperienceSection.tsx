'use client';

import React from 'react';
import Image from 'next/image';

const PILLARS = [
  {
    num: '01',
    title: 'Spatial Flow & Intuitive Layouts',
    desc: 'We design intuitive layouts that maximize functionality, enhance flow, and create a strong foundation for beautiful living.',
  },
  {
    num: '02',
    title: 'Bespoke & Personalized Aesthetics',
    desc: 'We create timeless, personalized interiors that balance aesthetics, comfort, and the unique character of every home.',
  },
  {
    num: '03',
    title: 'Precision Turnkey Delivery',
    desc: 'We oversee every stage of implementation, ensuring the design is delivered with precision, quality, and attention to detail.',
  },
];

export default function ExperienceSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#EAE6DF] relative overflow-hidden">
      
      {/* Subtle Ambient Background Gradient */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 rounded-full bg-[#F5EFE6]/70 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Stat, Philosophy, Pillars & Signature */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#DFD9CF] bg-[#FBF9F5]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A76D58]" />
              <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#A76D58]">
                Craftsmanship & Vision
              </span>
            </div>

            {/* Stat Header */}
            <div className="flex items-baseline gap-4">
              <span className="font-serif text-6xl sm:text-7xl lg:text-8xl font-normal text-[#1A1918] tracking-tight">
                6 +
              </span>
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm uppercase tracking-[0.25em] font-medium text-[#A76D58]">
                  YEARS OF
                </span>
                <span className="text-xs sm:text-sm uppercase tracking-[0.25em] font-medium text-[#1A1918]">
                  EXPERIENCE
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#3A3834] leading-relaxed font-light max-w-2xl">
              We create thoughtful interiors that blend beauty, functionality, and individuality. Every space is designed to reflect the people who live in it while enhancing everyday experiences.
            </p>

            {/* 3 Pillars List with Modern Card Styling */}
            <div className="space-y-4 pt-4 border-t border-[#EAE6DF]">
              {PILLARS.map((pillar) => (
                <div
                  key={pillar.num}
                  className="group p-4 rounded-xl hover:bg-[#FBF9F5] border border-transparent hover:border-[#EAE6DF] transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-[#A76D58] font-serif text-sm font-semibold tracking-wider px-2 py-0.5 rounded bg-[#F4EFEB] flex-shrink-0 mt-0.5">
                      {pillar.num}
                    </span>
                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#1A1918] group-hover:text-[#A76D58] transition-colors mb-1">
                        {pillar.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#666460] leading-relaxed font-light">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Authentic Founder Signature (Small & Elegant) */}
            <div className="pt-6 border-t border-[#EAE6DF] flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <div className="relative w-44 sm:w-52 h-12 flex-shrink-0">
                <Image
                  src="/images/signature_transparent.png"
                  alt="Studio Kintsugi Signature"
                  fill
                  className="object-contain object-left opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="flex flex-col border-l-0 sm:border-l border-[#DFD9CF] sm:pl-5">
                <span className="text-xs font-serif uppercase tracking-widest text-[#1A1918] font-medium">
                  Mukul & Manju Malhan
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#8C827A]">
                  Founders & Principal Designers
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Person Cutout with Hard 3D Directional Drop Shadow & Bottom Tag Pill Overlay */}
          <div className="lg:col-span-5 relative flex items-center justify-center overflow-visible">
            
            {/* Person Cutout Container */}
            <div className="relative w-full max-w-md aspect-[3/4] sm:aspect-[4/5] flex items-end justify-center group overflow-visible">
              
              {/* Person Cutout Image with Clean 3D Shadow (no mask clipping) */}
              <div className="relative w-full h-full flex items-end justify-center overflow-visible">
                <Image
                  src="/Professional Portrait in Profile.png"
                  alt="Manju Malhan • Founder, Studio Kintsugi"
                  fill
                  style={{
                    filter:
                      'drop-shadow(10px 18px 14px rgba(0, 0, 0, 0.45)) drop-shadow(4px 8px 6px rgba(0, 0, 0, 0.25))',
                  }}
                  className="object-contain object-bottom group-hover:scale-[1.02] group-hover:-translate-y-1.5 transition-all duration-500 ease-out"
                  priority
                />
              </div>

              {/* Floating Glassmorphic Tag Card Covering the Bottom Cut */}
              <div className="absolute -bottom-2 sm:bottom-1 inset-x-1 sm:inset-x-3 z-20">
                <div className="bg-white/95 backdrop-blur-xl p-3.5 sm:p-4 rounded-2xl border border-[#DFDCD4] shadow-[0_12px_32px_rgba(0,0,0,0.12)] space-y-2 group-hover:shadow-[0_16px_36px_rgba(0,0,0,0.16)] transition-all duration-300">
                  
                  {/* Top Row: Role & Experience */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#A76D58] animate-pulse" />
                      <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.22em] text-[#A76D58] font-bold">
                        Co-Founder & Principal Designer
                      </span>
                    </div>
                    <span className="text-[9px] sm:text-[10px] font-mono font-semibold text-[#1A1918] bg-[#F4EFEB] px-2 py-0.5 rounded-full border border-[#EAE6DF]">
                      6+ Yrs Exp
                    </span>
                  </div>

                  {/* Middle Row: Name & Specialty Tags */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-[#EAE6DF] pt-2">
                    <h4 className="font-serif text-sm sm:text-base text-[#1A1918] font-medium leading-none">
                      Manju Malhan
                    </h4>

                    {/* Tags Pills Covering the Bottom */}
                    <div className="flex items-center gap-1 flex-wrap">
                      <span className="text-[8px] sm:text-[9px] px-2 py-0.5 rounded-full bg-[#FBF9F5] border border-[#EAE6DF] text-[#55524E] font-medium">
                        ✦ Spatial Planning
                      </span>
                      <span className="text-[8px] sm:text-[9px] px-2 py-0.5 rounded-full bg-[#FBF9F5] border border-[#EAE6DF] text-[#55524E] font-medium">
                        ✦ Turnkey Builds
                      </span>
                      <span className="text-[8px] sm:text-[9px] px-2 py-0.5 rounded-full bg-[#FBF9F5] border border-[#EAE6DF] text-[#55524E] font-medium">
                        ✦ 85+ Projects
                      </span>
                    </div>
                  </div>

                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
