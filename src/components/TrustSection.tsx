"use client";

import React from "react";
import { Shield, FlaskConical, FileText } from "lucide-react";

export default function TrustSection() {
  const trustFactors = [
    {
      title: "Independent",
      description:
        "We work for you, not the contractor. Zero commissions, zero conflict of interest.",
      footer: "Direct fiduciary duty to owner",
      icon: Shield,
    },
    {
      title: "Accredited labs",
      description:
        "All material tests conducted exclusively in ISO/IEC 17025 accredited facilities.",
      footer: "NABL certified calibration certificates",
      icon: FlaskConical,
    },
    {
      title: "Clear reports anyone can read",
      description:
        "Plain language summaries with clear pass or fail indicators, no engineering jargon needed.",
      footer: "Actionable payment sign-off recommendations",
      icon: FileText,
    },
  ];

  return (
    <section className="w-full bg-[#F8F9FA] dark:bg-[#0E1118] py-10 sm:py-20 border-y border-[#E5E7EB] dark:border-neutral-800 transition-colors duration-200">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-6 sm:mb-12">
          <span className="text-[11px] sm:text-xs uppercase tracking-wider text-[#5F5E5E] dark:text-[#9CA3AF] block mb-1.5 sm:mb-2 font-semibold font-mono">
            Institutional Reliability
          </span>
          <h2 className="text-xl sm:text-3xl lg:text-[34px] text-[#111111] dark:text-white font-semibold tracking-tight">
            Why owners trust SiteProof
          </h2>
        </div>

        {/* 3 Trust Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-6">
          {trustFactors.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white dark:bg-[#141823] border border-[#E5E7EB] dark:border-neutral-800 rounded-lg p-4 sm:p-7 flex flex-col justify-between shadow-sm hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-200"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-2 sm:mb-4 sm:block">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded bg-[#111111] dark:bg-[#1F2432] text-white flex items-center justify-center sm:mb-4 shrink-0">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white dark:text-[#FFC20E]" />
                    </div>
                    <h3 className="text-base sm:text-xl text-[#111111] dark:text-white font-semibold sm:hidden">
                      {item.title}
                    </h3>
                  </div>

                  <h3 className="hidden sm:block text-lg sm:text-xl text-[#111111] dark:text-white font-semibold mb-3">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-[15px] text-[#5F5E5E] dark:text-[#9CA3AF] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-3.5 sm:mt-8 pt-2.5 sm:pt-4 border-t border-[#E5E7EB] dark:border-neutral-800 text-[11px] sm:text-xs text-[#111111] dark:text-neutral-300 font-mono">
                  {item.footer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
