'use client';

import React from 'react';

const TIMELINE_STEPS = [
  {
    number: '01',
    stage: 'STAGE 01',
    tag: 'INITIAL CONSULT',
    title: 'Discovery & Consultation',
    description:
      'We begin with an in-depth conversation to understand your lifestyle, daily routines, functional aspirations, and aesthetic affinities for your space.',
    deliverables: ['Lifestyle Questionnaire', 'Site Space Assessment', 'Aspirational Moods'],
    duration: 'Week 1',
  },
  {
    number: '02',
    stage: 'STAGE 02',
    tag: 'STRATEGY & SCOPE',
    title: 'Design Brief & Budgeting',
    description:
      'Together, we establish realistic budgets, architectural project boundaries, timeline milestones, and functional zoning priorities.',
    deliverables: ['Scope Document', 'Budget Framework', 'Project Roadmap'],
    duration: 'Week 1 - 2',
  },
  {
    number: '03',
    stage: 'STAGE 03',
    tag: 'SPATIAL SCHEMATICS',
    title: 'Concept & Spatial Design',
    description:
      'We translate your requirements into preliminary 2D architectural layouts, material palettes, tactile finishes, and creative design concepts.',
    deliverables: ['2D Furniture Layouts', 'Material Sample Board', 'Lighting Concept'],
    duration: 'Week 3 - 4',
  },
  {
    number: '04',
    stage: 'STAGE 04',
    tag: '3D PHOTOREALISM',
    title: 'Detailed 3D Visualization',
    description:
      'High-fidelity 3D photorealistic renderings and technical joinery drawings give you total visual clarity and confidence before execution begins.',
    deliverables: ['Photorealistic 3D Renders', 'Virtual 360 Walkthrough', 'Millwork Specifications'],
    duration: 'Week 5 - 6',
  },
  {
    number: '05',
    stage: 'STAGE 05',
    tag: 'CRAFT & BUILD',
    title: 'Turnkey Site Execution',
    description:
      'Our seasoned team manages vendor procurement, master carpenters, civil contractors, on-site milestones, and stringent quality control.',
    deliverables: ['Material Procurement', 'Daily Site Supervision', 'Milestone Quality Audits'],
    duration: 'Weeks 7 - 14',
  },
  {
    number: '06',
    stage: 'STAGE 06',
    tag: 'THE BIG REVEAL',
    title: 'Styling & Final Handover',
    description:
      'Artisan styling touches, bespoke accessorizing, professional deep cleaning, warranty documentation, and handing over your turnkey home.',
    deliverables: ['Final Styling Walkthrough', 'Art & Decor Placement', 'Care & Warranty Manual'],
    duration: 'Handover Day',
  },
];

const VALUES = [
  { title: 'COLLABORATIVE', desc: 'Working closely with you at every stage of the creative journey.' },
  { title: 'TAILORED', desc: 'Bespoke designs shaped around your authentic daily habits.' },
  { title: 'TRANSPARENT', desc: 'Upfront timelines, honest pricing, and zero hidden surprises.' },
  { title: 'THOUGHTFUL', desc: 'Intentional curation where every proportion serves purpose.' },
  { title: 'TIMELESS', desc: 'Spaces that age gracefully and retain lasting artistic elegance.' },
];

export default function ProcessSection() {
  return (
    <section className="py-20 lg:py-32 bg-[#FBF9F5] border-b border-[#EAE6DF] relative overflow-hidden">
      
      {/* Background Subtle Architectural Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#EAE6DF_1px,transparent_1px)] [background-size:32px_32px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#DFD9CF] bg-white/80 backdrop-blur-sm shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A76D58] animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#A76D58]">
              Methodology & Workflow
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#1A1918] tracking-tight">
            OUR PROCESS
          </h2>

          <p className="text-sm sm:text-lg text-[#55524E] leading-relaxed font-light">
            Great spaces do not happen by accident. Our disciplined 6-stage methodology ensures seamless execution, artistic integrity, and zero stress from first draft to final handover.
          </p>
        </div>

        {/* ========================================================
            UNIFIED ZIG-ZAG ALTERNATING TIMELINE (MOBILE & DESKTOP)
           ======================================================== */}
        <div className="relative mb-24 lg:mb-28">
          
          {/* Continuous Center Connecting Line (Visible on both Mobile and Desktop) */}
          <div className="absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-[2px] bg-gradient-to-b from-[#DFDCD4] via-[#A76D58] to-[#DFDCD4] pointer-events-none" />

          {/* Timeline Nodes & Alternating Left/Right Boxes */}
          <div className="space-y-10 sm:space-y-16 lg:space-y-20">
            {TIMELINE_STEPS.map((step, idx) => {
              const isLeft = idx % 2 === 0;

              return (
                <div
                  key={step.number}
                  className={`relative flex items-center w-full ${
                    isLeft ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  
                  {/* 1. Center Milestone Node (Positioned on the Central Line) */}
                  <div className="absolute left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                    <div className="relative group cursor-default">
                      <div className="w-9 h-9 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-white border-2 border-[#A76D58] shadow-[0_2px_12px_rgba(167,109,88,0.25)] flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:bg-[#A76D58]">
                        <span className="font-mono text-xs sm:text-sm font-bold text-[#A76D58] group-hover:text-white transition-colors">
                          {step.number}
                        </span>
                      </div>
                      <div className="absolute inset-0 rounded-full border border-[#A76D58] animate-ping opacity-20 pointer-events-none" />
                    </div>
                  </div>

                  {/* 2. Content Card (Occupies 46% of width on Left or Right) */}
                  <div className="w-[46%] sm:w-[45%]">
                    <div className="group bg-white p-4 sm:p-7 lg:p-9 rounded-2xl sm:rounded-3xl border border-[#EAE6DF] shadow-[0_6px_25px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_40px_rgba(167,109,88,0.12)] hover:border-[#C5A880]/60 transition-all duration-500 relative overflow-hidden transform hover:-translate-y-1">
                      
                      {/* Background Watermark Number */}
                      <span className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-[#F4EFEB] group-hover:text-[#A76D58]/15 transition-colors absolute top-2 right-3 sm:top-4 sm:right-6 pointer-events-none select-none">
                        {step.number}
                      </span>

                      <div className="relative z-10 space-y-2 sm:space-y-3">
                        
                        {/* Stage Badge & Duration */}
                        <div className="flex items-center justify-between gap-1 flex-wrap">
                          <span className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#FBF9F5] border border-[#EAE6DF] text-[8px] sm:text-[10px] font-mono tracking-wider sm:tracking-widest text-[#A76D58] uppercase font-bold">
                            {step.stage}
                          </span>
                          <span className="text-[9px] sm:text-[11px] font-mono text-[#8C827A] font-medium tracking-wide">
                            ⏱ {step.duration}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="font-serif text-sm sm:text-xl lg:text-3xl text-[#1A1918] group-hover:text-[#A76D58] transition-colors leading-tight">
                          {step.title}
                        </h3>

                        {/* Description */}
                        <p className="text-[11px] sm:text-xs lg:text-sm text-[#55524E] leading-relaxed font-light line-clamp-3 sm:line-clamp-none">
                          {step.description}
                        </p>

                        {/* Deliverables Chips */}
                        <div className="pt-2 sm:pt-4 border-t border-[#EAE6DF] flex flex-wrap gap-1">
                          {step.deliverables.map((item) => (
                            <span
                              key={item}
                              className="text-[8px] sm:text-[10px] px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-[#FBF9F5] text-[#666460] border border-[#EAE6DF] font-light"
                            >
                              ✓ {item}
                            </span>
                          ))}
                        </div>

                      </div>
                    </div>
                  </div>

                  {/* 3. Empty opposite half spacer to ensure perfect 50-50 balance */}
                  <div className="w-[46%] sm:w-[45%]" />

                </div>
              );
            })}
          </div>

        </div>

        {/* ========================================================
            CORE VALUES BANNER
           ======================================================== */}
        <div className="bg-[#1A1918] text-[#FBF9F5] rounded-3xl p-6 sm:p-12 lg:p-16 border border-[#2C2926] shadow-2xl relative overflow-hidden">
          
          <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#C5A880]/10 blur-3xl pointer-events-none" />

          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 relative z-10">
            <span className="text-xs uppercase tracking-[0.3em] text-[#E5A885] font-semibold">
              CORE PHILOSOPHY
            </span>
            <h3 className="font-serif text-xl sm:text-3xl lg:text-4xl font-normal text-[#FBF9F5] mt-2">
              Values That Guide Every Space
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-6 relative z-10">
            {VALUES.map((val, i) => (
              <div
                key={val.title}
                className="p-4 sm:p-5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#E5A885]/50 hover:bg-white/[0.08] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-[9px] sm:text-[10px] text-[#E5A885] block mb-1 sm:mb-2">0{i + 1}</span>
                  <h4 className="font-serif text-xs sm:text-base tracking-widest text-white mb-1 sm:mb-2 uppercase">
                    {val.title}
                  </h4>
                  <p className="text-[10px] sm:text-xs text-[#A09C94] leading-relaxed font-light">
                    {val.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
