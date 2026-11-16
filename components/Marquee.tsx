'use client';

import React from 'react';

const ITEMS = [
  'INTERIORS',
  'FURNITURE',
  'RESIDENTIAL',
  'COMMERCIAL',
  'HOSPITALITY',
  'TURNKEY PROJECTS',
  'SPACE PLANNING',
  'CUSTOM FURNITURE',
  'LUXURY INTERIORS',
  'DESIGN CONSULTATION',
  'DECOR',
  'LIGHTING DESIGN',
];

export default function Marquee() {
  return (
    <div className="w-full overflow-hidden bg-[#2C2926] text-[#FBF9F5] py-4 border-y border-[#3A3834] select-none">
      <div className="flex w-max animate-marquee space-x-8">
        {[...ITEMS, ...ITEMS, ...ITEMS].map((item, idx) => (
          <div key={idx} className="flex items-center space-x-8">
            <span className="text-xs md:text-sm tracking-[0.3em] font-light uppercase whitespace-nowrap text-[#E5E0D8]/90">
              {item}
            </span>
            <span className="text-[#C5A880] text-sm">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}
