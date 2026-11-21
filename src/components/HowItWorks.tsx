"use client";

import React from "react";

export default function HowItWorks() {
  const steps = [
    {
      stage: "Stage 01",
      protocol: "FIELD AUDIT",
      title: "Site visit and sampling",
      description: "Our engineer collects fresh samples on site during work.",
      highlight: "Zero advance notice to site contractor",
    },
    {
      stage: "Stage 02",
      protocol: "NABL LAB",
      title: "Lab testing",
      description: "Samples tested in accredited NABL laboratories under IS codes.",
      highlight: "Calibrated compressive machines",
    },
    {
      stage: "Stage 03",
      protocol: "PHYSICAL AUDIT",
      title: "Stage inspection with photos",
      description: "Full physical audit of rebar, cover, and shuttering with date and GPS stamps.",
      highlight: "Verification before every concrete casting",
    },
    {
      stage: "Stage 04",
      protocol: "ONLINE PORTAL",
      title: "Report on your dashboard",
      description: "Results published to your client portal before contractor payment release.",
      highlight: "Pass/fail sign-off trigger for invoices",
    },
  ];

  return (
    <section id="how-it-works" className="w-full bg-white dark:bg-[#0B0D11] py-10 sm:py-20 transition-colors duration-200">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-6 sm:mb-12">
          <span className="text-[11px] sm:text-xs uppercase tracking-wider text-[#5F5E5E] dark:text-[#9CA3AF] block mb-1.5 sm:mb-2 font-semibold font-mono">
            Operational Protocol
          </span>
          <h2 className="text-xl sm:text-3xl lg:text-[34px] text-[#111111] dark:text-white font-semibold tracking-tight">
            How SiteProof works
          </h2>
        </div>

        {/* 4 Stages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6">
          {steps.map((step) => (
            <div
              key={step.stage}
              className="bg-white dark:bg-[#141823] border border-[#E5E7EB] dark:border-neutral-800 rounded-lg p-3.5 sm:p-6 flex flex-col justify-between relative shadow-sm hover:border-[#FFC20E] dark:hover:border-[#FFC20E]/50 transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between mb-2 sm:mb-4">
                  <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#785A00] dark:text-[#FFC20E] bg-[#FFDF9D]/40 dark:bg-[#FFC20E]/15 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded">
                    {step.stage}
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-mono text-[#5F5E5E] dark:text-neutral-400">
                    {step.protocol}
                  </span>
                </div>
                <h3 className="text-sm sm:text-lg text-[#111111] dark:text-white font-semibold mb-1.5 sm:mb-3 leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5F5E5E] dark:text-[#9CA3AF] leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-3 sm:mt-6 pt-2.5 sm:pt-4 border-t border-[#E5E7EB] dark:border-neutral-800 text-xs sm:text-[13px] text-[#111111] dark:text-neutral-300 font-medium">
                {step.highlight}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
