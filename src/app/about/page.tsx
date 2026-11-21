"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShieldCheck, Award, FlaskConical, Target, CheckCircle2, ArrowRight, UserCheck } from "lucide-react";

export default function AboutPage() {
  const methodology = [
    {
      step: "01",
      title: "Physical On-Site Sampling",
      desc: "Our accredited civil engineers arrive unannounced to collect fresh concrete, mortar, rebar, and aggregate samples under strict chain-of-custody protocols.",
    },
    {
      step: "02",
      title: "Structural Design & Drawings Review",
      desc: "Cross-verification of architectural and structural drawings against BIS (IS 456, IS 13920) and IRC standards before physical casting milestones.",
    },
    {
      step: "03",
      title: "Accelerated NABL Lab Testing",
      desc: "Leveraging strategic laboratory tie-ups to execute compressive, tensile, chemical, and compaction tests with expedited reporting turnaround.",
    },
    {
      step: "04",
      title: "Work Certification & Sign-Off",
      desc: "Immutably publishing pass/fail quality compliance certificates to client dashboards, empowering milestone-linked contractor payments.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#0B0D11] text-[#111111] dark:text-[#F3F4F6]">
      <Navbar />

      <main className="flex-1 w-full pt-20 sm:pt-24 pb-16">
        {/* Hero Section */}
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 bg-[#F1F3F5] dark:bg-[#1A1D27] text-[#111111] dark:text-[#E2E8F0] rounded text-xs font-semibold border border-[#E5E7EB] dark:border-neutral-800 font-mono">
            <span className="w-2 h-2 rounded-full bg-[#15803D]" />
            Corporate Identity & Engineering Credibility
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111111] dark:text-white mb-6 leading-tight max-w-3xl">
            Independent Civil Engineering & Quality Assurance Consultancy
          </h1>
          <p className="text-base sm:text-xl text-[#5F5E5E] dark:text-[#9CA3AF] max-w-2xl leading-relaxed">
            Founded by <strong>Rahul Mondal</strong> in Burdwan, West Bengal, our consultancy bridges the critical gap between contractor execution and structural integrity through scientific testing and rigorous audits.
          </p>
        </div>

        {/* Vision & Mission Cards */}
        <div className="bg-[#F8F9FA] dark:bg-[#0E1118] border-y border-[#E5E7EB] dark:border-neutral-800 py-12 sm:py-16 mb-16 sm:mb-20">
          <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-[#141823] p-6 sm:p-8 rounded-xl border border-[#E5E7EB] dark:border-neutral-800 shadow-sm">
                <div className="w-12 h-12 rounded-lg bg-[#FFC20E]/20 text-[#785A00] dark:text-[#FFC20E] flex items-center justify-center mb-5">
                  <Target className="w-6 h-6" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold mb-3">Our Core Vision</h2>
                <p className="text-sm sm:text-base text-[#5F5E5E] dark:text-[#9CA3AF] leading-relaxed">
                  To become the most dependable and tender-compliant third-party quality inspection firm in Eastern India, ensuring every road, railway track, building, and water tank stands as a testament to structural safety and uncompromised materials.
                </p>
              </div>

              <div className="bg-white dark:bg-[#141823] p-6 sm:p-8 rounded-xl border border-[#E5E7EB] dark:border-neutral-800 shadow-sm">
                <div className="w-12 h-12 rounded-lg bg-[#15803D]/15 text-[#15803D] dark:text-[#22C55E] flex items-center justify-center mb-5">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold mb-3">Our Engineering Mission</h2>
                <p className="text-sm sm:text-base text-[#5F5E5E] dark:text-[#9CA3AF] leading-relaxed">
                  Protecting public infrastructure funds and private capital through zero-compromise physical inspections, accredited laboratory testing tie-ups, and data-backed work certification before contractor invoices are released.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Stage Methodology */}
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 mb-16 sm:mb-20">
          <div className="mb-10 sm:mb-12">
            <span className="text-xs uppercase tracking-wider text-[#5F5E5E] dark:text-[#9CA3AF] block mb-2 font-semibold font-mono">
              Operational Protocol
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Our 4-Stage QA/QC Methodology
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodology.map((m) => (
              <div
                key={m.step}
                className="bg-white dark:bg-[#141823] border border-[#E5E7EB] dark:border-neutral-800 rounded-xl p-6 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl font-black text-[#FFC20E] block mb-3 font-mono">
                    {m.step}
                  </span>
                  <h3 className="text-lg font-bold mb-2 leading-snug">{m.title}</h3>
                  <p className="text-xs sm:text-sm text-[#5F5E5E] dark:text-[#9CA3AF] leading-relaxed">
                    {m.desc}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-[#E5E7EB] dark:border-neutral-800 flex items-center gap-1.5 text-xs text-[#15803D] dark:text-[#22C55E] font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Quality Assurance Standard</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Strategic Lab Tie-ups Section */}
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 mb-16 sm:mb-20">
          <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 text-white rounded-2xl p-8 sm:p-12 border border-neutral-800 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <span className="text-xs font-mono uppercase tracking-widest text-[#FFC20E] font-bold block mb-2">
                  Laboratory Infrastructure & Partnerships
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 leading-snug">
                  Strategic Laboratory Tie-Ups for Rapid Testing Turnaround
                </h2>
                <p className="text-sm sm:text-base text-neutral-300 mb-6 leading-relaxed">
                  Unlike traditional consultancies that suffer from weeks of laboratory backlog, we maintain dedicated SLA agreements with partnered <strong>ISO/IEC 17025 accredited NABL testing laboratories</strong> across West Bengal. This ensures standard concrete compressive results, soil CBR curves, and steel tensile test reports are delivered in record turnaround times.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-medium">
                  <div className="flex items-center gap-2">
                    <FlaskConical className="w-4 h-4 text-[#FFC20E]" />
                    <span>Calibrated CTM & UTM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#FFC20E]" />
                    <span>NABL ISO/IEC 17025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#FFC20E]" />
                    <span>BIS & IRC Calibrated</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 bg-neutral-900/80 border border-neutral-700/60 rounded-xl p-6 text-center">
                <div className="text-4xl font-extrabold text-[#FFC20E] mb-1 font-mono">
                  48-72h
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-4">
                  Standard Testing Turnaround
                </div>
                <p className="text-xs text-neutral-300 leading-relaxed mb-4">
                  Emergency 24-hour expedited test certificates available for government tender bid deadlines and critical structural pours.
                </p>
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-[#FFC20E] text-black font-semibold text-xs py-2.5 px-4 rounded hover:bg-[#E5AC00] transition-colors"
                >
                  <span>Inquire Lab SLA</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership & Credentials Section */}
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
          <div className="mb-10 sm:mb-12">
            <span className="text-xs uppercase tracking-wider text-[#5F5E5E] dark:text-[#9CA3AF] block mb-2 font-semibold font-mono">
              Leadership & Technical Team
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Civil Engineering Governance
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Rahul Mondal Profile Card */}
            <div className="bg-white dark:bg-[#141823] border border-[#E5E7EB] dark:border-neutral-800 rounded-xl p-6 sm:p-8 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-16 h-16 rounded-full bg-[#111111] dark:bg-[#1F2432] text-[#FFC20E] flex items-center justify-center text-xl font-bold border-2 border-[#FFC20E]">
                    RM
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#111111] dark:text-white">
                      Rahul Mondal
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-[#785A00] dark:text-[#FFC20E]">
                      Founder & Principal Civil Consultant
                    </p>
                    <p className="text-xs text-[#5F5E5E] dark:text-neutral-400 font-mono mt-0.5">
                      Burdwan, West Bengal • +91 81012 74483
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#5F5E5E] dark:text-[#9CA3AF] leading-relaxed mb-4">
                  Civil engineering practitioner with focused expertise in structural quality assurance, contractor auditing, and construction material testing. Oversees technical methodology, regulatory alignment, and tender compliance reviews for all client engagements.
                </p>

                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-[#111111] dark:text-neutral-200">
                    <UserCheck className="w-4 h-4 text-[#15803D]" />
                    <span>Specialization: Road CBR, Concrete Mix Designs & NDT Audits</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#111111] dark:text-neutral-200">
                    <UserCheck className="w-4 h-4 text-[#15803D]" />
                    <span>Direct Oversight: Government Tender & Private Quality Verifications</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E5E7EB] dark:border-neutral-800 flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#5F5E5E] dark:text-neutral-400">
                  Etah, Burdwan Office
                </span>
                <a
                  href="tel:+918101274483"
                  className="text-xs font-semibold text-[#111111] dark:text-[#FFC20E] hover:underline"
                >
                  Direct Consultation →
                </a>
              </div>
            </div>

            {/* Technical Team & Field Staff */}
            <div className="bg-white dark:bg-[#141823] border border-[#E5E7EB] dark:border-neutral-800 rounded-xl p-6 sm:p-8 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#111111] dark:bg-[#1F2432] text-white flex items-center justify-center mb-5">
                  <ShieldCheck className="w-6 h-6 text-[#FFC20E]" />
                </div>
                <h3 className="text-xl font-bold mb-3">Field Inspection & Quality Cadre</h3>
                <p className="text-xs sm:text-sm text-[#5F5E5E] dark:text-[#9CA3AF] leading-relaxed mb-6">
                  Our field inspection team consists of qualified site QA/QC engineers, ultrasonic testing technicians, and laboratory sampling officers trained in Bureau of Indian Standards (BIS) and Ministry of Road Transport and Highways (MoRTH) standards.
                </p>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="bg-[#F8F9FA] dark:bg-[#1B202D] p-3 rounded-lg border border-[#E5E7EB] dark:border-neutral-800">
                    <span className="font-bold block text-sm mb-1 text-[#111111] dark:text-white">100%</span>
                    <span className="text-neutral-500 text-[11px]">Unannounced Site Audits</span>
                  </div>
                  <div className="bg-[#F8F9FA] dark:bg-[#1B202D] p-3 rounded-lg border border-[#E5E7EB] dark:border-neutral-800">
                    <span className="font-bold block text-sm mb-1 text-[#111111] dark:text-white">IS & IRC</span>
                    <span className="text-neutral-500 text-[11px]">Strict Code Adherence</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E5E7EB] dark:border-neutral-800 flex items-center justify-between">
                <span className="text-xs font-semibold text-[#5F5E5E] dark:text-neutral-400">
                  Join our engineering team
                </span>
                <Link
                  href="/careers"
                  className="text-xs font-semibold text-[#111111] dark:text-[#FFC20E] hover:underline"
                >
                  View Open Roles →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
