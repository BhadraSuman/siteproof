"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="w-full bg-white dark:bg-[#0B0D11] pt-6 pb-10 sm:pt-14 sm:pb-20 transition-colors duration-200">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-2.5 py-1 mb-4 sm:mb-6 bg-[#F1F3F5] dark:bg-[#1A1D27] text-[#111111] dark:text-[#E2E8F0] rounded text-[11px] sm:text-[13px] font-medium border border-[#E5E7EB] dark:border-neutral-800">
              <span className="w-2 h-2 rounded-full bg-[#15803D] dark:bg-[#22C55E] animate-pulse" />
              Independent Third-Party Quality Audit • India
            </div>

            {/* Main Title */}
            <h1 className="text-2xl sm:text-3xl lg:text-[44px] font-bold text-[#111111] dark:text-white tracking-tight mb-3 sm:mb-5 leading-[1.2]">
              Independent material testing and progress tracking for your construction project
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base lg:text-lg text-[#474646] dark:text-[#9CA3AF] mb-5 sm:mb-8 max-w-xl leading-relaxed">
              We test the cement, bricks, steel and soil used on your site, inspect every stage, and show you the results online. No test, no sign-off.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-10 w-full sm:w-auto">
              <Link
                href="#book-visit"
                className="inline-flex items-center justify-center bg-[#FFC20E] text-[#111111] text-xs sm:text-sm font-semibold px-5 py-3 sm:px-6 sm:py-3.5 rounded hover:bg-[#E5AC00] active:scale-[0.99] transition-all text-center shadow-sm"
              >
                Book a free site visit
              </Link>
              <Link
                href="#sample-report"
                className="inline-flex items-center justify-center bg-white dark:bg-[#141721] border border-[#111111] dark:border-neutral-700 text-[#111111] dark:text-white text-xs sm:text-sm font-semibold px-5 py-3 sm:px-6 sm:py-3.5 rounded hover:bg-[#F1F3F5] dark:hover:bg-[#1F2432] transition-colors gap-2 text-center"
              >
                <span>See a sample report</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </Link>
            </div>

            {/* Verification Checklist */}
            <div className="pt-4 sm:pt-6 border-t border-[#E5E7EB] dark:border-neutral-800 w-full grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-4">
              <div className="flex items-center gap-2 text-[#111111] dark:text-neutral-200">
                <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#ECFDF5] dark:bg-[#064E3B] text-[#15803D] dark:text-[#34D399] flex items-center justify-center text-[10px] sm:text-xs shrink-0 font-bold border border-[#15803D]/20">
                  ✓
                </span>
                <span className="text-xs sm:text-sm font-medium">Accredited lab reports</span>
              </div>
              <div className="flex items-center gap-2 text-[#111111] dark:text-neutral-200">
                <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#ECFDF5] dark:bg-[#064E3B] text-[#15803D] dark:text-[#34D399] flex items-center justify-center text-[10px] sm:text-xs shrink-0 font-bold border border-[#15803D]/20">
                  ✓
                </span>
                <span className="text-xs sm:text-sm font-medium">Geotagged site photos</span>
              </div>
              <div className="flex items-center gap-2 text-[#111111] dark:text-neutral-200">
                <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#ECFDF5] dark:bg-[#064E3B] text-[#15803D] dark:text-[#34D399] flex items-center justify-center text-[10px] sm:text-xs shrink-0 font-bold border border-[#15803D]/20">
                  ✓
                </span>
                <span className="text-xs sm:text-sm font-medium">Stage-wise progress</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual with Local Reliable Image */}
          <div className="lg:col-span-5 relative mt-2 lg:mt-0">
            <div className="relative bg-[#F8F9FA] dark:bg-[#141721] rounded-lg border border-[#E5E7EB] dark:border-neutral-800 overflow-hidden shadow-md group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/engineer-site.jpg"
                alt="Indian civil engineer inspecting construction drawings on site"
                className="w-full h-[220px] sm:h-[360px] lg:h-[440px] object-cover object-center block group-hover:scale-[1.02] transition-transform duration-500"
              />

              {/* Status Floating Overlay */}
              <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3 sm:left-3 sm:right-3 bg-white/95 dark:bg-[#121620]/95 backdrop-blur-md p-2.5 sm:p-3 rounded border border-[#E5E7EB] dark:border-neutral-700/80 flex items-center justify-between text-xs text-[#111111] dark:text-white shadow-sm">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#15803D] dark:text-[#22C55E]" />
                  <span className="font-semibold text-[11px] sm:text-xs">On-site Verification Active</span>
                </div>
                <span className="text-[#5F5E5E] dark:text-neutral-400 font-mono text-[10px] sm:text-xs bg-[#F1F3F5] dark:bg-[#1F2432] px-1.5 sm:px-2 py-0.5 rounded">
                  IS 456:2000 Audit
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
