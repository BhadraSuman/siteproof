"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Building2, Train, Compass, Droplet } from "lucide-react";

export default function ProjectVerticals() {
  const [activeTab, setActiveTab] = useState<"all" | "govt" | "private">("all");

  const verticals = [
    {
      id: "roads",
      title: "Roads & Highways",
      category: "govt",
      icon: Compass,
      image: "/images/vertical-roads.jpg",
      description:
        "Comprehensive pavement quality audits, bituminous mix designs, soil compaction (CBR), subgrade stabilization, and MoRTH/IRC compliance audits.",
      tests: ["Bitumen Extraction & Penetration", "Field CBR & Dynamic Cone Penetration", "Core Cutting & Density Test", "Roughness & Pavement Texture Audit"],
      target: "Government Tenders, NHAI Subcontracts & PWD Roads",
    },
    {
      id: "railways",
      title: "Railways Infrastructure",
      category: "govt",
      icon: Train,
      image: "/images/vertical-railways.jpg",
      description:
        "Ballast sieve analysis, track subgrade bearing assessment, culvert concrete strength, and third-party inspection for railway siding & platform structures.",
      tests: ["Track Ballast Impact & Abrasion Test", "Reinforced Concrete Box Culvert Audit", "Pre-stressed Concrete Sleeper Quality", "Soil Bearing & Settlement Analysis"],
      target: "Indian Railways Tenders, RVNL & DFCCIL Subcontracts",
    },
    {
      id: "buildings",
      title: "Building Construction",
      category: "private",
      icon: Building2,
      image: "/images/vertical-buildings.jpg",
      description:
        "High-rise and residential structure audits, non-destructive testing (NDT), rebar corrosion analysis, concrete compressive cube testing, and slab deflection reviews.",
      tests: ["M25–M50 Concrete Cube Strength (7/28 Days)", "TMT Rebar Tensile & Bend Test (IS 1786)", "Ultrasonic Pulse Velocity & Rebound Hammer", "Water Absorption & Brick Strength"],
      target: "Commercial Developers, Institutional Campuses & Private Villas",
    },
    {
      id: "watertanks",
      title: "Water Tanks & Utility Infra",
      category: "all",
      icon: Droplet,
      image: "/images/vertical-watertanks.jpg",
      description:
        "Overhead service reservoirs (OHSR), ground-level storage reservoirs (GLSR), hydraulic leak checks, water tightness certifications, and impermeable concrete design.",
      tests: ["Hydrostatic Water Retention Testing", "Impermeable Concrete Mix Verification", "Staging Column & Bracing Rebar Audit", "Joint Sealant & Waterproofing Inspection"],
      target: "PHE Department, Municipal Corporations & Private Communities",
    },
  ];

  const filteredVerticals = verticals.filter((v) => {
    if (activeTab === "all") return true;
    if (activeTab === "govt") return v.category === "govt" || v.category === "all";
    if (activeTab === "private") return v.category === "private" || v.category === "all";
    return true;
  });

  return (
    <section className="w-full bg-[#FFFFFF] dark:bg-[#0B0D11] py-12 sm:py-20 transition-colors">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div>
            <span className="text-[11px] sm:text-xs uppercase tracking-wider text-[#5F5E5E] dark:text-[#9CA3AF] block mb-1.5 sm:mb-2 font-semibold font-mono">
              Core Project Verticals • PWD & NHAI Compliant
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] text-[#111111] dark:text-white font-bold tracking-tight">
              Specialized Civil Engineering QA/QC Verticals
            </h2>
          </div>

          {/* Dual Audience Filter Tabs */}
          <div className="flex items-center gap-1.5 bg-[#F1F3F5] dark:bg-[#1A1D27] p-1 rounded-lg border border-[#E5E7EB] dark:border-neutral-800 self-start md:self-auto">
            <button
              type="button"
              onClick={() => setActiveTab("all")}
              className={`text-xs font-semibold px-3 py-1.5 rounded-md transition-colors ${
                activeTab === "all"
                  ? "bg-white dark:bg-[#121620] text-[#111111] dark:text-[#FFC20E] shadow-sm"
                  : "text-[#5F5E5E] dark:text-neutral-400 hover:text-black dark:hover:text-white"
              }`}
            >
              All Verticals
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("govt")}
              className={`text-xs font-semibold px-3 py-1.5 rounded-md transition-colors ${
                activeTab === "govt"
                  ? "bg-white dark:bg-[#121620] text-[#111111] dark:text-[#FFC20E] shadow-sm"
                  : "text-[#5F5E5E] dark:text-neutral-400 hover:text-black dark:hover:text-white"
              }`}
            >
              Govt & Tenders
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("private")}
              className={`text-xs font-semibold px-3 py-1.5 rounded-md transition-colors ${
                activeTab === "private"
                  ? "bg-white dark:bg-[#121620] text-[#111111] dark:text-[#FFC20E] shadow-sm"
                  : "text-[#5F5E5E] dark:text-neutral-400 hover:text-black dark:hover:text-white"
              }`}
            >
              Private & Personal
            </button>
          </div>
        </div>

        {/* 4 Verticals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredVerticals.map((vertical) => {
            const Icon = vertical.icon;
            return (
              <div
                key={vertical.id}
                className="group bg-white dark:bg-[#141823] border border-[#E5E7EB] dark:border-neutral-800 rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:border-[#FFC20E] dark:hover:border-[#FFC20E]/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Image Banner */}
                  <div className="relative h-44 sm:h-52 overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={vertical.image}
                      alt={vertical.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    
                    <div className="absolute top-3 left-3 bg-[#111111]/80 backdrop-blur-md text-[#FFC20E] p-2 rounded-lg border border-white/10">
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <span className="text-[10px] font-mono uppercase tracking-wider bg-[#FFC20E] text-black px-2 py-0.5 rounded font-bold">
                        {vertical.target}
                      </span>
                      <h3 className="text-xl font-bold mt-1.5 leading-snug">
                        {vertical.title}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-4 sm:p-6">
                    <p className="text-xs sm:text-sm text-[#5F5E5E] dark:text-[#9CA3AF] mb-4 leading-relaxed">
                      {vertical.description}
                    </p>

                    <div className="border-t border-[#E5E7EB] dark:border-neutral-800 pt-3">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-[#111111] dark:text-white block mb-2 font-mono">
                        Standard QA/QC Tests Included:
                      </span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#111111] dark:text-neutral-200">
                        {vertical.tests.map((test) => (
                          <li key={test} className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#15803D] dark:text-[#22C55E] shrink-0" />
                            <span className="truncate">{test}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Footer Link */}
                <div className="px-4 py-3 sm:px-6 sm:py-3.5 bg-[#F8F9FA] dark:bg-[#1B202D] border-t border-[#E5E7EB] dark:border-neutral-800 flex items-center justify-between text-xs font-semibold">
                  <span className="text-[#5F5E5E] dark:text-neutral-400 font-mono">
                    IS & MoRTH Compliant
                  </span>
                  <Link
                    href={`/contact?vertical=${vertical.id}`}
                    className="inline-flex items-center gap-1 text-[#111111] dark:text-[#FFC20E] hover:underline"
                  >
                    <span>Request Audit</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
