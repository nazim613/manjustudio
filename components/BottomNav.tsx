'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function BottomNav() {
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Full Turnkey Interior',
    date: '',
    timeSlot: 'Morning (11:00 AM - 02:00 PM)',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Listen for global trigger (e.g. from Navbar "Book Consultation" button)
  useEffect(() => {
    const handleOpen = () => {
      setIsContactOpen(false);
      setIsAppointmentOpen(true);
    };
    window.addEventListener('open-appointment-modal', handleOpen);
    return () => window.removeEventListener('open-appointment-modal', handleOpen);
  }, []);

  // Prevent background body scroll when modal is open
  useEffect(() => {
    if (isAppointmentOpen || isContactOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isAppointmentOpen, isContactOpen]);

  // Handle Form Submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate instant smooth submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Automatically close and reset after 2.2 seconds as requested
      setTimeout(() => {
        setIsAppointmentOpen(false);
        setIsSubmitted(false);
        setFormData({
          name: '',
          phone: '',
          email: '',
          service: 'Full Turnkey Interior',
          date: '',
          timeSlot: 'Morning (11:00 AM - 02:00 PM)',
          message: '',
        });
      }, 2200);
    }, 450);
  };

  return (
    <>
      {/* ─────────────────────────────────────────────────────────────
          1. EYE-CATCHY ANIMATED FLOATING BOTTOM NAV BAR
      ────────────────────────────────────────────────────────────── */}
      <aside
        aria-label="Quick Actions Navigation"
        className="fixed bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 z-40 w-[94%] max-w-md sm:max-w-lg select-none"
      >
        {/* Ambient Breathing Underglow Aura */}
        <div className="absolute -inset-1 bg-gradient-to-r from-[#A76D58]/35 via-[#D4AF37]/25 to-[#A76D58]/35 rounded-full blur-xl animate-gentle-pulse pointer-events-none -z-10" />

        {/* Dynamic Island Capsule Container */}
        <div className="relative bg-[#141312]/92 backdrop-blur-2xl p-1.5 sm:p-2 rounded-full border border-white/20 shadow-[0_16px_50px_rgba(0,0,0,0.5),0_0_20px_rgba(167,109,88,0.18)] ring-1 ring-white/10 flex items-center justify-between gap-1.5 sm:gap-2">
          
          {/* LEFT BUTTON: Contact Now */}
          <button
            onClick={() => {
              setIsAppointmentOpen(false);
              setIsContactOpen(true);
            }}
            className="flex-1 py-2.5 sm:py-3 px-3 sm:px-4 rounded-full bg-white/[0.08] hover:bg-white/[0.16] text-white flex items-center justify-center gap-2 font-medium text-xs sm:text-sm tracking-wide transition-all duration-300 border border-white/15 active:scale-95 cursor-pointer group"
          >
            {/* Live Online Pulse Dot */}
            <span className="relative flex h-2 w-2 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>

            {/* Phone/Chat Icon */}
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12 flex-shrink-0 text-white/90"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>

            <span className="font-medium truncate text-white/90 group-hover:text-white">Contact Now</span>
          </button>

          {/* RIGHT BUTTON: Book Appointment (Eye-Catchy Radiant Shimmer CTA) */}
          <button
            onClick={() => {
              setIsContactOpen(false);
              setIsAppointmentOpen(true);
            }}
            className="relative flex-1 py-2.5 sm:py-3 px-3 sm:px-5 rounded-full bg-gradient-to-r from-[#B4745E] via-[#A76D58] to-[#915642] text-white flex items-center justify-center gap-1.5 sm:gap-2 font-medium text-xs sm:text-sm tracking-wide transition-all duration-300 shadow-[0_4px_20px_rgba(167,109,88,0.5)] hover:shadow-[0_6px_28px_rgba(167,109,88,0.7)] hover:brightness-110 active:scale-95 cursor-pointer overflow-hidden group"
          >
            {/* Continuous Diagonal Light Beam Shimmer */}
            <div className="absolute inset-0 w-full h-full overflow-hidden rounded-full pointer-events-none">
              <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 animate-shimmer" />
            </div>

            {/* Sparkle/Calendar Icon with Rotation on Hover */}
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45 flex-shrink-0 text-[#FFE4D6]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>

            <span className="font-semibold truncate tracking-wider">Book Appointment</span>

            {/* Micro Badge */}
            <span className="hidden xs:inline-flex items-center text-[9px] font-mono px-1.5 py-0.2 rounded-full bg-white/20 text-white font-medium border border-white/20">
              Free
            </span>
          </button>

        </div>
      </aside>

      {/* ─────────────────────────────────────────────────────────────
          2. SLIDE-UP APPOINTMENT FORM MODAL (Bottom Sheet)
      ────────────────────────────────────────────────────────────── */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          isAppointmentOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop Overlay */}
        <div
          onClick={() => {
            if (!isSubmitted) setIsAppointmentOpen(false);
          }}
          className="absolute inset-0 bg-black/65 backdrop-blur-md transition-opacity"
        />

        {/* Slide-Up Bottom Sheet Panel */}
        <div
          className={`absolute bottom-0 inset-x-0 max-w-xl mx-auto bg-white rounded-t-[32px] sm:rounded-t-[36px] shadow-[0_-20px_60px_rgba(0,0,0,0.35)] border-t border-[#DFD9CF] overflow-hidden transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col max-h-[92vh] ${
            isAppointmentOpen ? 'translate-y-0' : 'translate-y-full'
          }`}
        >
          {/* Top Pull Handle */}
          <div className="w-12 h-1.5 rounded-full bg-[#DFD9CF] mx-auto mt-3 mb-2 flex-shrink-0" />

          {/* Header */}
          <div className="px-6 sm:px-8 pt-2 pb-4 border-b border-[#F0ECE1] flex items-start justify-between gap-4 flex-shrink-0">
            <div>
              <div className="inline-flex items-center gap-1.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-[#A76D58] mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A76D58] animate-pulse" />
                <span>Complimentary Consultation</span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-[#1A1918] font-medium leading-tight">
                Book an Appointment
              </h3>
              <p className="text-xs text-[#7A756D] font-light mt-0.5">
                Discuss your space, layout & vision directly with our principal designers.
              </p>
            </div>

            {/* Close Button ('X') */}
            <button
              onClick={() => setIsAppointmentOpen(false)}
              aria-label="Close"
              className="w-8 h-8 rounded-full bg-[#F4EFEB] hover:bg-[#EAE4DB] text-[#55524E] flex items-center justify-center transition-colors flex-shrink-0 cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Sheet Body (Form or Submitted Celebration) */}
          <div className="p-6 sm:p-8 overflow-y-auto flex-1">
            {isSubmitted ? (
              /* Success / Submitted Confirmation State */
              <div className="py-10 text-center space-y-4 animate-in fade-in zoom-in-95 duration-400">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#E8F5E9] text-[#2E7D32] border-2 border-[#81C784] flex items-center justify-center mx-auto shadow-lg">
                  <svg className="w-9 h-9 sm:w-11 sm:h-11" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>

                <div className="space-y-1.5">
                  <h4 className="font-serif text-2xl sm:text-3xl text-[#1A1918] font-medium">
                    Submitted! We will get to you soon
                  </h4>
                  <p className="text-sm text-[#55524E] font-light max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-[#1A1918]">{formData.name || 'valued client'}</span>! Our founding team will reach out to you on WhatsApp/Phone shortly to confirm your consultation slot.
                  </p>
                </div>

                {/* Auto-closing pill */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4EFEB] text-[#8C847B] text-[11px] font-mono">
                  <span className="w-2 h-2 rounded-full bg-[#A76D58] animate-ping" />
                  <span>Closing automatically...</span>
                </div>
              </div>
            ) : (
              /* Appointment Booking Form */
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                
                {/* Name & Phone (2 cols on sm) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#3A3834] mb-1.5">
                      Your Name <span className="text-[#A76D58]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 sm:py-3 rounded-xl bg-[#FBF9F5] border border-[#DFD9CF] text-[#1A1918] text-sm placeholder:text-[#A09C94] focus:outline-none focus:border-[#A76D58] focus:ring-1 focus:ring-[#A76D58] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#3A3834] mb-1.5">
                      Phone / WhatsApp <span className="text-[#A76D58]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 sm:py-3 rounded-xl bg-[#FBF9F5] border border-[#DFD9CF] text-[#1A1918] text-sm placeholder:text-[#A09C94] focus:outline-none focus:border-[#A76D58] focus:ring-1 focus:ring-[#A76D58] transition-all"
                    />
                  </div>
                </div>

                {/* Service Type & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#3A3834] mb-1.5">
                      Project Type
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-2.5 sm:py-3 rounded-xl bg-[#FBF9F5] border border-[#DFD9CF] text-[#1A1918] text-sm focus:outline-none focus:border-[#A76D58] focus:ring-1 focus:ring-[#A76D58] transition-all"
                    >
                      <option value="Full Turnkey Interior">Full Turnkey Interior</option>
                      <option value="Residential Architecture">Residential Architecture</option>
                      <option value="Commercial / Hospitality">Commercial / Hospitality</option>
                      <option value="Custom Furniture & Joinery">Custom Furniture & Joinery</option>
                      <option value="Online Design Consultation">Online Design Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#3A3834] mb-1.5">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="name@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 sm:py-3 rounded-xl bg-[#FBF9F5] border border-[#DFD9CF] text-[#1A1918] text-sm placeholder:text-[#A09C94] focus:outline-none focus:border-[#A76D58] focus:ring-1 focus:ring-[#A76D58] transition-all"
                    />
                  </div>
                </div>

                {/* Preferred Date & Time Slot */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#3A3834] mb-1.5">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-2.5 sm:py-3 rounded-xl bg-[#FBF9F5] border border-[#DFD9CF] text-[#1A1918] text-sm focus:outline-none focus:border-[#A76D58] focus:ring-1 focus:ring-[#A76D58] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#3A3834] mb-1.5">
                      Preferred Time Slot
                    </label>
                    <select
                      value={formData.timeSlot}
                      onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                      className="w-full px-4 py-2.5 sm:py-3 rounded-xl bg-[#FBF9F5] border border-[#DFD9CF] text-[#1A1918] text-sm focus:outline-none focus:border-[#A76D58] focus:ring-1 focus:ring-[#A76D58] transition-all"
                    >
                      <option value="Morning (11:00 AM - 02:00 PM)">Morning (11:00 AM - 02:00 PM)</option>
                      <option value="Afternoon (02:00 PM - 05:00 PM)">Afternoon (02:00 PM - 05:00 PM)</option>
                      <option value="Evening (05:00 PM - 08:00 PM)">Evening (05:00 PM - 08:00 PM)</option>
                    </select>
                  </div>
                </div>

                {/* Project Details / Message */}
                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#3A3834] mb-1.5">
                    Space / Requirement Note
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your space (e.g. 3BHK Apartment in Dehradun / Gurugram, moving in next month...)"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FBF9F5] border border-[#DFD9CF] text-[#1A1918] text-sm placeholder:text-[#A09C94] focus:outline-none focus:border-[#A76D58] focus:ring-1 focus:ring-[#A76D58] transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-full bg-[#1A1918] hover:bg-[#A76D58] text-white font-medium text-sm tracking-wider uppercase transition-all duration-300 shadow-lg active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                        <span>Submitting Request...</span>
                      </span>
                    ) : (
                      <span>Confirm Appointment ✦</span>
                    )}
                  </button>
                  <p className="text-[10px] text-center text-[#8C847B] font-light mt-2">
                    🔒 No spam. We respect your privacy and will only connect regarding your project.
                  </p>
                </div>

              </form>
            )}
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          3. SLIDE-UP CONTACT OPTIONS MODAL
      ────────────────────────────────────────────────────────────── */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          isContactOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop Overlay */}
        <div
          onClick={() => setIsContactOpen(false)}
          className="absolute inset-0 bg-black/65 backdrop-blur-md transition-opacity"
        />

        {/* Slide-Up Bottom Sheet Panel */}
        <div
          className={`absolute bottom-0 inset-x-0 max-w-md mx-auto bg-white rounded-t-[32px] shadow-[0_-20px_60px_rgba(0,0,0,0.35)] border-t border-[#DFD9CF] p-6 sm:p-7 overflow-hidden transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] space-y-5 ${
            isContactOpen ? 'translate-y-0' : 'translate-y-full'
          }`}
        >
          {/* Pull Handle */}
          <div className="w-12 h-1.5 rounded-full bg-[#DFD9CF] mx-auto mb-2" />

          {/* Header */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A76D58]">
                Direct Connect
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-[#1A1918] font-medium leading-tight">
                Contact Studio Kintsugi
              </h3>
              <p className="text-xs text-[#7A756D] font-light mt-0.5">
                We are available Mon–Sat, 10:00 AM – 07:00 PM IST
              </p>
            </div>

            <button
              onClick={() => setIsContactOpen(false)}
              className="w-8 h-8 rounded-full bg-[#F4EFEB] hover:bg-[#EAE4DB] text-[#55524E] flex items-center justify-center transition-colors cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Contact Action Cards */}
          <div className="space-y-3 pt-1">
            
            {/* 1. WhatsApp Action */}
            <a
              href="https://wa.me/917017881694?text=Hi%20Studio%20Kintsugi,%20I%20would%20like%20to%20inquire%20about%20interior%20design%20and%20turnkey%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-2xl bg-[#E8F5E9] hover:bg-[#D7EED9] border border-[#C8E6C9] transition-all group cursor-pointer"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-sm">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086s1.011.477 1.184.564.289.13.332.203c.043.072.043.419-.101.824z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#1A1918] group-hover:text-[#1B5E20] transition-colors">
                    Chat on WhatsApp
                  </h4>
                  <p className="text-xs text-[#2E7D32] font-mono">+91 7017 881694</p>
                </div>
              </div>
              <span className="text-[10px] font-semibold text-[#2E7D32] uppercase tracking-wider bg-white px-2.5 py-1 rounded-full border border-[#C8E6C9]">
                Instant
              </span>
            </a>

            {/* 2. Direct Call Action */}
            <a
              href="tel:+917017881694"
              className="flex items-center justify-between p-4 rounded-2xl bg-[#FBF9F5] hover:bg-[#F4EFEB] border border-[#DFD9CF] transition-all group cursor-pointer"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#1A1918] text-white flex items-center justify-center shadow-sm">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#1A1918]">Call Directly</h4>
                  <p className="text-xs text-[#7A756D] font-mono">+91 7017 881694</p>
                </div>
              </div>
              <span className="text-xs text-[#A76D58] font-medium group-hover:translate-x-1 transition-transform">
                Call Now →
              </span>
            </a>

            {/* 3. Full Contact Page Link */}
            <Link
              href="/contact"
              onClick={() => setIsContactOpen(false)}
              className="block text-center py-2.5 text-xs uppercase tracking-widest text-[#8C847B] hover:text-[#1A1918] font-medium transition-colors"
            >
              View Studio Address & FAQs →
            </Link>

          </div>
        </div>
      </div>
    </>
  );
}
