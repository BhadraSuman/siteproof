"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FlaskConical, FileSearch, ShieldCheck, Compass, Home, CheckCircle2, ArrowRight } from "lucide-react";

export default function ServicesPage() {
  const serviceOfferings = [
    {
      id: "materials",
      icon: FlaskConical,
      title: "1. Material Testing & NABL Laboratory Certification",
      subtitle: "Independent laboratory validation before batch utilization",
      description:
        "Comprehensive testing of all primary construction materials under Bureau of Indian Standards (BIS) specifications. Partnered with ISO/IEC 17025 accredited facilities to provide legally admissible test certificates.",
      details: [
        { item: "Concrete Testing", code: "IS 516 / IS 1199", scope: "Compressive cube strength (7, 14, 28 days), slump cone workability, flexural strength." },
        { item: "Cement Quality", code: "IS 4031 / IS 1489", scope: "Initial & final setting time, standard consistency, compressive mortar strength, soundness." },
        { item: "Reinforcement Steel (TMT)", code: "IS 1786 / IS 1608", scope: "Yield strength, ultimate tensile strength (UTS), percentage elongation, bend & rebend tests." },
        { item: "Soil & Subgrade", code: "IS 2720", scope: "California Bearing Ratio (CBR), Standard Proctor density, moisture-density relation, grain size." },
        { item: "Clay & Fly Ash Bricks", code: "IS 3495", scope: "Compressive strength, 24h water absorption, efflorescence rating, dimension tolerance." },
        { item: "Aggregates (Coarse & Fine)", code: "IS 2386", scope: "Sieve gradation, crushing value, impact value, flakiness and elongation indices." },
      ],
    },
    {
      id: "structural",
      icon: FileSearch,
      title: "2. Structural Assessment & Design Review",
      subtitle: "Validation of load paths, safety factors, and existing structural health",
      description:
        "Engineering audit of architectural and structural blueprints prior to construction, paired with in-situ non-destructive evaluation for existing structures to identify honeycombing, voids, and load vulnerabilities.",
      details: [
        { item: "Rebound Hammer Testing", code: "IS 13311 (Part 2)", scope: "Estimation of surface concrete hardness and uniformity across columns, beams, and slabs." },
        { item: "Ultrasonic Pulse Velocity (UPV)", code: "IS 13311 (Part 1)", scope: "Detection of internal cracks, voids, honeycombing, and concrete homogeneity." },
        { item: "Structural Drawing Vetting", code: "IS 456 / IS 1893", scope: "Independent verification of reinforcement bar bending schedules (BBS), cover, and seismic ductility." },
        { item: "Load Capacity Audit", code: "IS 875 (Parts 1-5)", scope: "Evaluation of dead load, live load, and wind load adequacy for proposed construction expansions." },
      ],
    },
    {
      id: "contractor-audit",
      icon: ShieldCheck,
      title: "3. Contractor Work Quality Analysis & Third-Party Audit",
      subtitle: "Unannounced site verification safeguarding owners against cost escalation and shortcuts",
      description:
        "Serving as the owner's independent engineering fiduciary. We audit contractor workmanship on site, verify material batch deliveries against invoice specifications, and sign off only when work satisfies tolerance benchmarks.",
      details: [
        { item: "Pre-Pour Casting Clearances", code: "Site Protocol", scope: "Physical check of shuttering stability, cover blocks, rebar tying, and cleanliness before concrete discharge." },
        { item: "Material Substitution Safeguard", code: "Tender QA/QC", scope: "Checking factory test certificates (MTC) and comparing delivered brand lots with bill of quantities (BOQ)." },
        { item: "Progress Milestone Certification", code: "Financial Audit", scope: "Objective pass/fail verification required before stage payments and mobilization advances are cleared." },
        { item: "Non-Conformance Notices (NCN)", code: "Quality Governance", scope: "Issuing formal rectification notices for substandard execution with required remediation protocols." },
      ],
    },
    {
      id: "sector-qaqc",
      icon: Compass,
      title: "4. Sector-Specific QA/QC (Roads, Railways, Buildings, Water Tanks)",
      subtitle: "Tender-ready engineering supervision tailored for public and infrastructure projects",
      description:
        "Specialized quality assurance aligned with statutory authorities such as NHAI, Ministry of Road Transport & Highways (MoRTH), Indian Railways (RDSO), and Public Health Engineering (PHE).",
      details: [
        { item: "Roads & Highways", code: "MoRTH Section 900 / IRC", scope: "Subgrade CBR, GSB & WMM compaction, bitumen extraction, density cores, pavement roughness index." },
        { item: "Railways Infrastructure", code: "RDSO & Indian Railways", scope: "Ballast abrasion & gradation, sub-ballast compaction, culvert integrity, track siding concrete." },
        { item: "Commercial & High-Rise Buildings", code: "CPWD Specs & NBC 2016", scope: "Foundation pile testing, floor level tolerances, concrete durability, curtain wall and waterproofing." },
        { item: "Water Tanks & Reservoirs", code: "IS 3370 (Liquid Storage)", scope: "Hydrostatic leakage test, water tightness certification, crack-width control, impermeable mix design." },
      ],
    },
    {
      id: "private-consultancy",
      icon: Home,
      title: "5. Public & Personal Construction Quality Consultancy",
      subtitle: "Expert civil engineering guidance for individual home builders and commercial investors",
      description:
        "Personalized quality advisory designed for non-technical building owners constructing their dream home, commercial complex, or villa in West Bengal. We protect you against contractor deception and structural defects.",
      details: [
        { item: "Foundation & Soil Advisory", code: "Homeowner QA", scope: "Safe bearing capacity check to prevent foundation sinking, dampness, and differential settlement." },
        { item: "Slab Casting Supervision", code: "Critical Milestone", scope: "On-site presence during slab pouring to oversee water-cement ratio, vibration, and curing schedule." },
        { item: "Contractor Agreement Vetting", code: "Contract Advisory", scope: "Drafting quality penalty clauses, milestone payment schedules, and specification requirements." },
        { item: "Pre-Purchase & Handover Audits", code: "Inspection Report", scope: "Comprehensive punch-list inspection before taking handover of finished apartments or commercial units." },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#0B0D11] text-[#111111] dark:text-[#F3F4F6]">
      <Navbar />

      <main className="flex-1 w-full pt-20 sm:pt-24 pb-16">
        {/* Header */}
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 bg-[#F1F3F5] dark:bg-[#1A1D27] text-[#111111] dark:text-[#E2E8F0] rounded text-xs font-semibold border border-[#E5E7EB] dark:border-neutral-800 font-mono">
            <span className="w-2 h-2 rounded-full bg-[#15803D]" />
            Complete Consultancy Offerings • IS & MoRTH Codes
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111111] dark:text-white mb-6 leading-tight max-w-3xl">
            Civil Engineering Consultancy & Testing Scope
          </h1>
          <p className="text-base sm:text-xl text-[#5F5E5E] dark:text-[#9CA3AF] max-w-2xl leading-relaxed">
            Delivering scientifically rigorous material verification, structural reviews, and contractor oversight across public tenders and private developments in West Bengal.
          </p>
        </div>

        {/* 5 Core Offerings List */}
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 space-y-12 sm:space-y-16">
          {serviceOfferings.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                id={service.id}
                className="bg-white dark:bg-[#141823] border border-[#E5E7EB] dark:border-neutral-800 rounded-2xl p-6 sm:p-10 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-[#E5E7EB] dark:border-neutral-800 gap-4">
                  <div className="flex items-start sm:items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#FFC20E] text-[#111111] flex items-center justify-center shrink-0 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-[#111111] dark:text-white leading-snug">
                        {service.title}
                      </h2>
                      <p className="text-xs sm:text-sm text-[#785A00] dark:text-[#FFC20E] font-medium mt-0.5">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  <Link
                    href={`/contact?service=${service.id}`}
                    className="inline-flex items-center gap-1.5 self-start sm:self-auto bg-[#111111] dark:bg-white text-white dark:text-black text-xs font-semibold px-4 py-2 rounded-lg hover:bg-[#262626] dark:hover:bg-neutral-200 transition-colors shrink-0"
                  >
                    <span>Request Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <p className="text-sm sm:text-base text-[#5F5E5E] dark:text-[#9CA3AF] mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Sub-item Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.details.map((detail) => (
                    <div
                      key={detail.item}
                      className="bg-[#F8F9FA] dark:bg-[#1B202D] p-4 rounded-xl border border-[#E5E7EB] dark:border-neutral-800"
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-semibold text-sm text-[#111111] dark:text-white flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-[#15803D] dark:text-[#22C55E]" />
                          {detail.item}
                        </span>
                        <span className="text-[11px] font-mono text-[#5F5E5E] dark:text-[#FFC20E] bg-white dark:bg-[#141823] px-2 py-0.5 rounded border border-[#E5E7EB] dark:border-neutral-700">
                          {detail.code}
                        </span>
                      </div>
                      <p className="text-xs text-[#5F5E5E] dark:text-neutral-400 leading-relaxed pl-5">
                        {detail.scope}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 mt-16 sm:mt-20">
          <div className="bg-[#FFC20E] text-[#111111] rounded-2xl p-8 sm:p-12 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest bg-black/10 px-2.5 py-1 rounded inline-block mb-3">
                Immediate Field Mobilization
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">
                Need QA/QC Inspection For Your Site in Burdwan?
              </h3>
              <p className="text-sm sm:text-base text-black/85 max-w-xl">
                Speak directly with <strong>Rahul Mondal</strong> to schedule urgent material sampling or structural review within 24 hours.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href="tel:+918101274483"
                className="inline-flex items-center justify-center bg-black text-white text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-lg hover:bg-neutral-800 transition-colors shadow-md"
              >
                Call +91 81012 74483
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-white text-black text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-lg hover:bg-neutral-100 transition-colors shadow-md"
              >
                Submit Site Specs
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
