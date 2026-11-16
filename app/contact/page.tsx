'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const FAQS = [
  {
    q: 'What is the philosophy behind Studio Kintsugi?',
    a: 'The Japanese art of Kintsugi celebrates repairing broken pottery with gold, embracing imperfections rather than hiding them. That philosophy inspires our work. We believe every home and space has innate potential, and through thoughtful design, we transform everyday spaces into places that feel meaningful, functional, and uniquely yours.',
  },
  {
    q: 'Do you take projects outside Dehradun?',
    a: 'Yes, absolutely. We design projects across Uttarakhand, the Delhi NCR region, and provide turnkey solutions throughout India. We also offer comprehensive Online Design Consultations globally.',
  },
  {
    q: 'What services are included in Turnkey Solutions?',
    a: 'Our turnkey service is an end-to-end design-and-build process covering spatial layout, architectural drafting, 3D photorealistic visualization, material procurement, civil work, carpentry, custom joinery, lighting, and final styling walkthrough.',
  },
  {
    q: 'How do I book a consultation?',
    a: 'You can either fill out the form on this page, email us directly at hello@studiokintsugi.in, or connect instantly with our team via WhatsApp at +91 7017 881694.',
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-28 pb-16 lg:pt-36 lg:pb-24 bg-[#FBF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner image */}
        <div className="relative w-full aspect-[21/9] sm:aspect-[24/8] rounded-2xl overflow-hidden shadow-lg border border-[#EAE6DF] mb-16">
          <Image
            src="/images/090_Gemini_Generated_Image_8fekm88fekm88fek-scaled.png"
            alt="Studio Kintsugi Office"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent flex items-center px-8 sm:px-12">
            <div className="text-white max-w-xl">
              <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880] font-medium">
                LET&apos;S CONNECT
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl font-medium mt-2">
                We&apos;d Love to Hear From You!
              </h1>
              <p className="text-sm sm:text-base text-white/80 mt-2">
                Every great project starts with a simple conversation.
              </p>
            </div>
          </div>
        </div>

        {/* 2 Column Layout: Info + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-24">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] font-medium text-[#A76D58]">
                REACH OUT
              </span>
              <h2 className="font-serif text-3xl font-medium text-[#1A1918] mt-1 mb-4">
                Get in Touch
              </h2>
              <p className="text-sm text-[#666460] leading-relaxed">
                Whether you have a clear blueprint or just a Pinterest board full of ideas, we’d love to hear what’s on your mind. Tell us about your project, and we’ll guide you through the next steps.
              </p>
            </div>

            <div className="space-y-6">
              
              <div className="flex items-start gap-4 p-5 rounded-xl bg-white border border-[#EAE6DF]">
                <div className="w-10 h-10 rounded-full bg-[#A76D58]/10 text-[#A76D58] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#1A1918]">Our Location</h4>
                  <p className="text-sm text-[#666460] mt-1">Dehradun, Uttarakhand, India</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-xl bg-white border border-[#EAE6DF]">
                <div className="w-10 h-10 rounded-full bg-[#A76D58]/10 text-[#A76D58] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#1A1918]">Call Us On</h4>
                  <a href="tel:+917017881694" className="text-sm text-[#666460] hover:text-[#A76D58] mt-1 block">
                    +91 7017 881694
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-xl bg-white border border-[#EAE6DF]">
                <div className="w-10 h-10 rounded-full bg-[#A76D58]/10 text-[#A76D58] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#1A1918]">Email Us</h4>
                  <a href="mailto:hello@studiokintsugi.in" className="text-sm text-[#666460] hover:text-[#A76D58] mt-1 block">
                    hello@studiokintsugi.in
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-xl bg-white border border-[#EAE6DF]">
                <div className="w-10 h-10 rounded-full bg-[#A76D58]/10 text-[#A76D58] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#1A1918]">Studio Hours</h4>
                  <p className="text-sm text-[#666460] mt-1">Mon – Sat: 10:00 AM – 7:00 PM</p>
                  <p className="text-xs text-[#A76D58] mt-0.5 font-medium">By Appointment Only</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-[#EAE6DF] shadow-sm">
            <h3 className="font-serif text-2xl font-medium text-[#1A1918] mb-2">
              Send Us a Message
            </h3>
            <p className="text-sm text-[#666460] mb-8">
              Fill out the details below and our team will get in touch within 24 business hours.
            </p>

            {submitted ? (
              <div className="p-8 rounded-xl bg-[#F0ECE1] border border-[#C5A880] text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#A76D58] text-white flex items-center justify-center mx-auto">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="font-serif text-2xl text-[#1A1918]">Thank You!</h4>
                <p className="text-sm text-[#666460]">
                  Your project details have been received. We look forward to connecting with you.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-semibold uppercase tracking-wider text-[#A76D58] underline pt-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#1A1918] mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 rounded-xl border border-[#DFD9CF] text-sm focus:outline-none focus:border-[#1A1918] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#1A1918] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-[#DFD9CF] text-sm focus:outline-none focus:border-[#1A1918] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#1A1918] mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl border border-[#DFD9CF] text-sm focus:outline-none focus:border-[#1A1918] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#1A1918] mb-2">
                      Project Type
                    </label>
                    <select
                      className="w-full px-4 py-3 rounded-xl border border-[#DFD9CF] text-sm focus:outline-none focus:border-[#1A1918] transition-colors bg-white text-[#1A1918]"
                    >
                      <option>Residential Interior</option>
                      <option>Commercial / Retail Space</option>
                      <option>Turnkey Execution</option>
                      <option>Online Design Consultation</option>
                      <option>Custom Furniture Commission</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#1A1918] mb-2">
                    Project Details & Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about the property, timeline, carpet area, and what you envision..."
                    className="w-full px-4 py-3 rounded-xl border border-[#DFD9CF] text-sm focus:outline-none focus:border-[#1A1918] transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-[#1A1918] text-[#FBF9F5] text-xs font-semibold uppercase tracking-[0.2em] hover:bg-[#33312E] transition-all shadow-md"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto pt-12 border-t border-[#EAE6DF]">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.3em] font-medium text-[#A76D58]">
              QUESTIONS & ANSWERS
            </span>
            <h2 className="font-serif text-3xl font-medium text-[#1A1918] mt-1">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-[#EAE6DF] overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between font-serif text-lg text-[#1A1918] focus:outline-none"
                >
                  <span>{faq.q}</span>
                  <span className="text-xl font-light text-[#A76D58] ml-4">
                    {openFaq === i ? '−' : '+'}
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-sm text-[#666460] leading-relaxed border-t border-[#F0ECE1] pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
