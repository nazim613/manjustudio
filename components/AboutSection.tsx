'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#FBF9F5] border-b border-[#EAE6DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image with Artistic Shadow */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-[#EAE6DF] group">
              <Image
                src="/images/076_ChatGPT-Image-Jun-11-2026-04_30_27-PM.png"
                alt="Studio Kintsugi Design Philosophy"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            
            <div className="inline-block">
              <span className="text-xs uppercase tracking-[0.3em] font-medium text-[#A76D58]">
                WHO WE ARE
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#1A1918] mt-2">
                ABOUT
              </h2>
            </div>

            <p className="text-base sm:text-lg text-[#3A3834] leading-relaxed font-light">
              Studio Kintsugi was founded on a simple belief: great design should make life easier, calmer, and more meaningful. Based in Dehradun, we approach every project with curiosity and care, combining practical space planning with refined aesthetics tailored to the way you actually live and work.
            </p>

            <p className="text-sm sm:text-base text-[#666460] leading-relaxed">
              Whether collaborating with homeowners or crafting boutique commercial spaces, our focus remains the same: listening closely, designing thoughtfully, and bringing concepts to life with clarity and precision.
            </p>

            <p className="text-sm sm:text-base text-[#666460] leading-relaxed">
              Whether it’s a home in the Himalayas, a workspace in Mumbai, or a commercial environment anywhere in the world, our goal is to create spaces that age gracefully and continue to inspire for years to come.
            </p>

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full border border-[#2C2926] text-xs font-medium uppercase tracking-[0.2em] text-[#2C2926] hover:bg-[#2C2926] hover:text-[#FBF9F5] transition-all duration-300"
              >
                KNOW MORE
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
