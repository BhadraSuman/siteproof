"use client";

import React from "react";
import { AlertTriangle, Clock, TrendingDown } from "lucide-react";

export default function RiskAnalysis() {
  const risks = [
    {
      step: 1,
      title: "Cheaper material replaces what was agreed.",
      description:
        "Substandard local cement or undersized steel bars are substituted without structural recalculation, weakening your building.",
      riskTag: "High structural liability risk",
      icon: AlertTriangle,
    },
    {
      step: 2,
      title: "Work is delayed and you cannot see what is really happening.",
      description:
        "Without unannounced physical presence, site logs are fabricated and project timelines slip by months before issues are acknowledged.",
      riskTag: "Average 22% cost escalation",
      icon: Clock,
    },
    {
      step: 3,
      title: "Problems show up after the payment is made.",
      description:
        "Cracks, honeycombing, dampness, and settlement appear long after stage invoices are disbursed and contractors have moved to new sites.",
      riskTag: "Unrecoverable capital loss",
      icon: TrendingDown,
    },
  ];

  return (
    <section className="w-full bg-[#F8F9FA] dark:bg-[#0E1118] py-10 sm:py-20 border-y border-[#E5E7EB] dark:border-neutral-800 transition-colors duration-200">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-6 sm:mb-12">
          <span className="text-[11px] sm:text-xs uppercase tracking-wider text-[#5F5E5E] dark:text-[#9CA3AF] block mb-1.5 sm:mb-2 font-semibold font-mono">
            Risk Analysis
          </span>
          <h2 className="text-xl sm:text-3xl lg:text-[34px] text-[#111111] dark:text-white font-semibold tracking-tight">
            Why owners lose money on construction
          </h2>
        </div>

        {/* 3 Risk Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-6">
          {risks.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="bg-white dark:bg-[#141823] border border-[#E5E7EB] dark:border-neutral-800 rounded-lg p-4 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-200"
              >
                <div>
                  <div className="flex items-center gap-3 mb-2.5 sm:mb-4 sm:block">
                    <div className="w-7 h-7 sm:w-10 sm:h-10 rounded bg-[#F1F3F5] dark:bg-[#1F2433] text-[#111111] dark:text-white text-xs sm:text-lg font-bold flex items-center justify-center border border-[#E5E7EB] dark:border-neutral-700 sm:mb-4 shrink-0">
                      {item.step}
                    </div>
                    <h3 className="text-sm sm:text-xl text-[#111111] dark:text-white font-semibold leading-snug sm:hidden">
                      {item.title}
                    </h3>
                  </div>

                  <h3 className="hidden sm:block text-lg sm:text-xl text-[#111111] dark:text-white font-semibold mb-3 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-[15px] text-[#5F5E5E] dark:text-[#9CA3AF] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-3.5 sm:mt-8 pt-2.5 sm:pt-4 border-t border-[#E5E7EB] dark:border-neutral-800 flex items-center text-[11px] sm:text-xs text-[#DC2626] dark:text-[#F87171] font-medium gap-1.5">
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                  <span>{item.riskTag}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
