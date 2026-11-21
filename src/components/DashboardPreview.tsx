"use client";

import React from "react";
import { Check, ShieldCheck, CheckCircle2, XCircle } from "lucide-react";

export default function DashboardPreview() {
  return (
    <section id="sample-report" className="w-full bg-white dark:bg-[#0B0D11] py-10 sm:py-20 transition-colors duration-200">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-6 sm:mb-12">
          <span className="text-[11px] sm:text-xs uppercase tracking-wider text-[#5F5E5E] dark:text-[#9CA3AF] block mb-1.5 sm:mb-2 font-semibold font-mono">
            Real-Time Verification
          </span>
          <h2 className="text-xl sm:text-3xl lg:text-[34px] text-[#111111] dark:text-white font-semibold tracking-tight">
            See everything from your phone or laptop
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
          {/* Left Column: Feature Highlights */}
          <div className="lg:col-span-4 space-y-3.5 sm:space-y-6 pt-1">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded bg-[#111111] dark:bg-neutral-800 text-white flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
              </div>
              <div>
                <h3 className="text-sm sm:text-[17px] text-[#111111] dark:text-white font-semibold mb-0.5 sm:mb-1">
                  Live progress by stage
                </h3>
                <p className="text-xs sm:text-sm text-[#5F5E5E] dark:text-[#9CA3AF] leading-relaxed">
                  Milestone verification ensures each floor&apos;s columns and slabs meet standard load criteria before moving up.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded bg-[#111111] dark:bg-neutral-800 text-white flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
              </div>
              <div>
                <h3 className="text-sm sm:text-[17px] text-[#111111] dark:text-white font-semibold mb-0.5 sm:mb-1">
                  Accredited lab reports
                </h3>
                <p className="text-xs sm:text-sm text-[#5F5E5E] dark:text-[#9CA3AF] leading-relaxed">
                  Lab reports for download in standardized PDF format, bearing calibration certificates and engineer stamps.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded bg-[#111111] dark:bg-neutral-800 text-white flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
              </div>
              <div>
                <h3 className="text-sm sm:text-[17px] text-[#111111] dark:text-white font-semibold mb-0.5 sm:mb-1">
                  Geotagged site photos
                </h3>
                <p className="text-xs sm:text-sm text-[#5F5E5E] dark:text-[#9CA3AF] leading-relaxed">
                  Dated and geotagged photos of every audit point recorded immutably on your private cloud dashboard.
                </p>
              </div>
            </div>

            {/* Audit Guarantee Card */}
            <div className="p-3 sm:p-4 bg-[#F8F9FA] dark:bg-[#141823] rounded-lg border border-[#E5E7EB] dark:border-neutral-800 mt-4 sm:mt-6 shadow-sm">
              <div className="flex items-center gap-2 mb-1.5 text-[#111111] dark:text-white font-semibold text-xs sm:text-sm">
                <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#15803D] dark:text-[#22C55E]" />
                <span>Tamper-Proof Audit Trail</span>
              </div>
              <p className="text-[11px] sm:text-xs text-[#5F5E5E] dark:text-[#9CA3AF] leading-relaxed">
                All records are time-stamped cryptographically upon upload. Neither contractors nor field agents can alter historic test outcomes.
              </p>
            </div>
          </div>

          {/* Right Column: Dashboard Mockup */}
          <div className="lg:col-span-8">
            <div className="bg-white dark:bg-[#141823] border border-[#D1D5DB] dark:border-neutral-800 rounded-lg p-3.5 sm:p-6 shadow-md transition-all">
              {/* Top Tag & Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 sm:pb-4 mb-3 sm:mb-4 border-b border-[#E5E7EB] dark:border-neutral-800 gap-1.5 sm:gap-2">
                <div>
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-wider font-mono text-[#5F5E5E] dark:text-neutral-400 bg-[#F1F3F5] dark:bg-[#1F2432] px-1.5 sm:px-2 py-0.5 rounded border border-[#E5E7EB] dark:border-neutral-700 inline-block mb-1">
                    Sample data
                  </span>
                  <h3 className="text-base sm:text-xl text-[#111111] dark:text-white font-semibold">
                    Sample project, G+2, Kolkata
                  </h3>
                </div>
                <div className="flex sm:flex-col items-center sm:items-end justify-between text-right">
                  <span className="text-[10px] sm:text-xs text-[#5F5E5E] dark:text-neutral-400 block font-mono">
                    Audit ID: #KOL-2025-089
                  </span>
                  <span className="text-[11px] sm:text-xs font-semibold text-[#15803D] dark:text-[#22C55E] flex items-center gap-1 sm:justify-end">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#15803D] dark:bg-[#22C55E]" />
                    Active Compliance Status
                  </span>
                </div>
              </div>

              {/* Progress Bar Component */}
              <div className="mb-4 sm:mb-6 bg-[#F8F9FA] dark:bg-[#1B202D] p-3 sm:p-4 rounded-lg border border-[#E5E7EB] dark:border-neutral-800">
                <div className="flex justify-between items-center text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                  <span className="text-[#111111] dark:text-white font-semibold">
                    Quality Milestones Completed
                  </span>
                  <span className="font-mono font-bold text-[#111111] dark:text-[#FFC20E] text-sm sm:text-base">
                    45%
                  </span>
                </div>
                <div className="w-full bg-[#E5E7EB] dark:bg-neutral-800 h-2 sm:h-2.5 rounded-full overflow-hidden">
                  <div
                    className="bg-[#FFC20E] h-full rounded-full transition-all duration-1000"
                    style={{ width: "45%" }}
                  />
                </div>
                <div className="flex flex-col sm:flex-row justify-between sm:items-center text-[10px] sm:text-xs text-[#5F5E5E] dark:text-neutral-400 mt-1.5 sm:mt-2 gap-0.5 sm:gap-1 font-mono">
                  <span>Foundation & Substructure: Verified</span>
                  <span>1st Floor Slab: Pending 28-day break</span>
                </div>
              </div>

              {/* Test Results Table */}
              <div className="mb-4 sm:mb-6 border border-[#E5E7EB] dark:border-neutral-800 rounded-lg overflow-hidden">
                <div className="bg-[#F8F9FA] dark:bg-[#1B202D] px-3 py-1.5 sm:px-4 sm:py-2 border-b border-[#E5E7EB] dark:border-neutral-800 text-[10px] sm:text-xs font-semibold text-[#111111] dark:text-white uppercase tracking-wider font-mono">
                  Recent Material Batch Verification
                </div>
                <div className="divide-y divide-[#E5E7EB] dark:divide-neutral-800 text-[11px] sm:text-sm">
                  {/* Concrete */}
                  <div className="flex items-center justify-between p-2.5 sm:p-3 bg-white dark:bg-[#141823]">
                    <div>
                      <span className="font-semibold text-[#111111] dark:text-white block sm:inline">
                        M25 Concrete Cube
                      </span>
                      <span className="text-[10px] sm:text-xs text-[#5F5E5E] dark:text-neutral-400 sm:ml-2 font-mono">
                        Sample: C-408
                      </span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-4 shrink-0">
                      <span className="font-mono text-xs sm:text-sm font-medium text-[#111111] dark:text-neutral-200">
                        26.4 N/mm²
                      </span>
                      <span className="inline-flex items-center gap-1 bg-[#ECFDF5] dark:bg-[#064E3B]/40 text-[#15803D] dark:text-[#34D399] border border-[#15803D]/40 px-1.5 sm:px-2 py-0.5 rounded text-[10px] sm:text-xs font-semibold">
                        <CheckCircle2 className="w-2.5 h-2.5 sm:w-3 sm:h-3" /> Pass
                      </span>
                    </div>
                  </div>

                  {/* Steel */}
                  <div className="flex items-center justify-between p-2.5 sm:p-3 bg-white dark:bg-[#141823]">
                    <div>
                      <span className="font-semibold text-[#111111] dark:text-white block sm:inline">
                        Fe 500D TMT Rebar (16mm)
                      </span>
                      <span className="text-[10px] sm:text-xs text-[#5F5E5E] dark:text-neutral-400 sm:ml-2 font-mono">
                        Sample: S-112
                      </span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-4 shrink-0">
                      <span className="font-mono text-xs sm:text-sm font-medium text-[#111111] dark:text-neutral-200">
                        545 N/mm²
                      </span>
                      <span className="inline-flex items-center gap-1 bg-[#ECFDF5] dark:bg-[#064E3B]/40 text-[#15803D] dark:text-[#34D399] border border-[#15803D]/40 px-1.5 sm:px-2 py-0.5 rounded text-[10px] sm:text-xs font-semibold">
                        <CheckCircle2 className="w-2.5 h-2.5 sm:w-3 sm:h-3" /> Pass
                      </span>
                    </div>
                  </div>

                  {/* Bricks - Fail */}
                  <div className="flex items-center justify-between p-2.5 sm:p-3 bg-[#FEF2F2]/40 dark:bg-[#451A1A]/30">
                    <div>
                      <span className="font-semibold text-[#DC2626] dark:text-[#F87171] block sm:inline">
                        Red Clay Bricks
                      </span>
                      <span className="text-[10px] sm:text-xs text-[#5F5E5E] dark:text-neutral-400 sm:ml-2 font-mono">
                        Lot: B-092
                      </span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-4 shrink-0">
                      <span className="font-mono text-xs sm:text-sm font-medium text-[#DC2626] dark:text-[#F87171]">
                        2.8 N/mm²{" "}
                        <span className="text-[10px] text-[#5F5E5E] dark:text-neutral-400 font-normal hidden sm:inline">
                          (Req: 3.5)
                        </span>
                      </span>
                      <span className="inline-flex items-center gap-1 bg-[#FEF2F2] dark:bg-[#7F1D1D]/50 text-[#DC2626] dark:text-[#FCA5A5] border border-[#DC2626]/40 px-1.5 sm:px-2 py-0.5 rounded text-[10px] sm:text-xs font-semibold">
                        <XCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3" /> Fail
                      </span>
                    </div>
                  </div>

                  {/* Cement */}
                  <div className="flex items-center justify-between p-2.5 sm:p-3 bg-white dark:bg-[#141823]">
                    <div>
                      <span className="font-semibold text-[#111111] dark:text-white block sm:inline">
                        Cement Setting Time
                      </span>
                      <span className="text-[10px] sm:text-xs text-[#5F5E5E] dark:text-neutral-400 sm:ml-2 font-mono">
                        UTCL-88
                      </span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-4 shrink-0">
                      <span className="font-mono text-xs sm:text-sm font-medium text-[#111111] dark:text-neutral-200">
                        Normal (145m)
                      </span>
                      <span className="inline-flex items-center gap-1 bg-[#ECFDF5] dark:bg-[#064E3B]/40 text-[#15803D] dark:text-[#34D399] border border-[#15803D]/40 px-1.5 sm:px-2 py-0.5 rounded text-[10px] sm:text-xs font-semibold">
                        <CheckCircle2 className="w-2.5 h-2.5 sm:w-3 sm:h-3" /> Pass
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Geotagged Photo Strip with Local Reliable Images */}
              <div>
                <div className="text-[10px] sm:text-xs font-semibold text-[#111111] dark:text-white mb-2 uppercase tracking-wider font-mono">
                  Geotagged Inspection Photos
                </div>
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  <div className="border border-[#E5E7EB] dark:border-neutral-800 rounded-lg overflow-hidden bg-[#F8F9FA] dark:bg-[#1B202D] group">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className="w-full h-16 sm:h-24 object-cover group-hover:scale-105 transition-transform duration-300"
                      src="/images/rebar-inspection.jpg"
                      alt="Rebar inspection"
                    />
                    <div className="p-1 sm:p-2 text-[10px] sm:text-xs">
                      <div className="font-semibold text-[#111111] dark:text-white truncate">
                        Rebar audit
                      </div>
                      <div className="text-[#5F5E5E] dark:text-neutral-400 text-[9px] sm:text-[11px] font-mono truncate">
                        12 Oct • 22.57° N
                      </div>
                    </div>
                  </div>

                  <div className="border border-[#E5E7EB] dark:border-neutral-800 rounded-lg overflow-hidden bg-[#F8F9FA] dark:bg-[#1B202D] group">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className="w-full h-16 sm:h-24 object-cover group-hover:scale-105 transition-transform duration-300"
                      src="/images/cube-test.jpg"
                      alt="Cube test in lab"
                    />
                    <div className="p-1 sm:p-2 text-[10px] sm:text-xs">
                      <div className="font-semibold text-[#111111] dark:text-white truncate">
                        Cube test
                      </div>
                      <div className="text-[#5F5E5E] dark:text-neutral-400 text-[9px] sm:text-[11px] font-mono truncate">
                        14 Oct • NABL Lab
                      </div>
                    </div>
                  </div>

                  <div className="border border-[#E5E7EB] dark:border-neutral-800 rounded-lg overflow-hidden bg-[#F8F9FA] dark:bg-[#1B202D] group">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className="w-full h-16 sm:h-24 object-cover group-hover:scale-105 transition-transform duration-300"
                      src="/images/brick-inspection.jpg"
                      alt="Brick lot inspection"
                    />
                    <div className="p-1 sm:p-2 text-[10px] sm:text-xs">
                      <div className="font-semibold text-[#111111] dark:text-white truncate">
                        Brick lot
                      </div>
                      <div className="text-[#5F5E5E] dark:text-neutral-400 text-[9px] sm:text-[11px] font-mono truncate">
                        15 Oct • Rejected
                      </div>
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
