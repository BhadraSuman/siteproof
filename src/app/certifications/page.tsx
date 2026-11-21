"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Award, FileText, Download, ShieldCheck, CheckCircle2, AlertCircle, ExternalLink } from "lucide-react";

export default function CertificationsPage() {
  const [downloadModal, setDownloadModal] = useState(false);
  const [downloadEmail, setDownloadEmail] = useState("");
  const [downloaded, setDownloaded] = useState(false);

  const codes = [
    { code: "IS 456:2000", title: "Plain and Reinforced Concrete", authority: "Bureau of Indian Standards", scope: "General structural design, minimum cement content, cover tolerances, durability criteria." },
    { code: "IS 516:2021", title: "Hardened Concrete Testing", authority: "Bureau of Indian Standards", scope: "Compressive strength of concrete cubes, flexural strength, cores, modulus of elasticity." },
    { code: "IS 1786:2008", title: "High Strength Deformed Steel Bars (TMT)", authority: "Bureau of Indian Standards", scope: "Proof stress, tensile strength, elongation limits, bend & rebend criteria for Fe 500D/550D." },
    { code: "IS 2720", title: "Methods of Test for Soils (Parts 1-41)", authority: "Bureau of Indian Standards", scope: "Standard proctor density, optimum moisture content, dry density, grain size, CBR calculation." },
    { code: "IS 3495:2019", title: "Common Burnt Clay Building Bricks", authority: "Bureau of Indian Standards", scope: "Compressive strength classification, 24-hour immersion water absorption, efflorescence rating." },
    { code: "IS 13311 (Parts 1 & 2)", title: "Non-Destructive Testing of Concrete", authority: "Bureau of Indian Standards", scope: "Ultrasonic Pulse Velocity (UPV) & Rebound Hammer assessment of existing structural members." },
    { code: "MoRTH Section 900", title: "Quality Control for Road Works", authority: "Ministry of Road Transport & Highways", scope: "Pavement QA/QC, sub-base density, bituminous layer tolerance, riding quality benchmarks." },
    { code: "IRC:SP:112", title: "Code of Practice for Concrete Road Bridges", authority: "Indian Roads Congress", scope: "Structural safety, prestressing steel standards, crack control in bridge decks and piers." },
  ];

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    setDownloaded(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#0B0D11] text-[#111111] dark:text-[#F3F4F6]">
      <Navbar />

      <main className="flex-1 w-full pt-20 sm:pt-24 pb-16">
        {/* Header */}
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 bg-[#F1F3F5] dark:bg-[#1A1D27] text-[#111111] dark:text-[#E2E8F0] rounded text-xs font-semibold border border-[#E5E7EB] dark:border-neutral-800 font-mono">
            <span className="w-2 h-2 rounded-full bg-[#15803D]" />
            Regulatory Compliance & Technical Accreditations
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111111] dark:text-white mb-6 leading-tight max-w-3xl">
            Certifications, Accreditations & Code Compliance
          </h1>
          <p className="text-base sm:text-xl text-[#5F5E5E] dark:text-[#9CA3AF] max-w-2xl leading-relaxed">
            Our quality control protocols, partner testing laboratories, and structural assessments strictly adhere to statutory Indian engineering standards and international testing norms.
          </p>

          {/* SOW Pre-Launch Readiness Notice */}
          <div className="mt-8 p-4 sm:p-5 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60 rounded-xl flex items-start gap-3.5">
            <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-amber-900 dark:text-amber-200 mb-1">
                Official Documentation Notice
              </h4>
              <p className="text-xs text-amber-800/90 dark:text-amber-300/80 leading-relaxed">
                As the firm is currently in its operational setup phase under the leadership of <strong>Rahul Mondal</strong>, official statutory registration certificates, GSTIN, and final laboratory MOUs will be seamlessly embedded here prior to live commercial launch.
              </p>
            </div>
          </div>
        </div>

        {/* NABL Lab Accreditation Highlights */}
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 mb-16 sm:mb-20">
          <div className="bg-[#F8F9FA] dark:bg-[#141823] border border-[#E5E7EB] dark:border-neutral-800 rounded-2xl p-6 sm:p-10 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <span className="text-xs font-mono uppercase tracking-wider text-[#785A00] dark:text-[#FFC20E] font-bold block mb-2">
                  Laboratory Partnership Standard
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold mb-3 leading-snug">
                  ISO/IEC 17025 Accredited Testing Capabilities
                </h2>
                <p className="text-sm text-[#5F5E5E] dark:text-[#9CA3AF] leading-relaxed mb-6">
                  All formal material testing conducted for our clients is performed exclusively through accredited NABL (National Accreditation Board for Testing and Calibration Laboratories) facilities equipped with periodically calibrated compressive testing machines (CTM) and universal testing machines (UTM).
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#15803D] shrink-0" />
                    <span>Calibrated Hydraulic Load Cells</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#15803D] shrink-0" />
                    <span>Traceable Master Proving Rings</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#15803D] shrink-0" />
                    <span>Digital Data Logging Without Manual Distortion</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#15803D] shrink-0" />
                    <span>Government Tender Legally Admissible</span>
                  </div>
                </div>
              </div>

              {/* Download Brochure Card */}
              <div className="lg:col-span-4 bg-white dark:bg-[#1B202D] border border-[#E5E7EB] dark:border-neutral-700 rounded-xl p-6 shadow-md text-center">
                <div className="w-12 h-12 bg-[#FFC20E]/20 text-[#785A00] dark:text-[#FFC20E] rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-1">Company Profile</h3>
                <p className="text-xs text-[#5F5E5E] dark:text-neutral-400 mb-4">
                  Download our QA/QC Capability Statement & Laboratory Scope Deck (PDF).
                </p>
                <button
                  type="button"
                  onClick={() => setDownloadModal(true)}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#111111] dark:bg-[#FFC20E] text-white dark:text-black text-xs font-semibold py-2.5 px-4 rounded-lg hover:bg-neutral-800 dark:hover:bg-[#E5AC00] transition-colors shadow-sm"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Profile PDF</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bureau of Indian Standards (BIS) Matrix */}
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
          <div className="mb-8 sm:mb-10">
            <span className="text-xs uppercase tracking-wider text-[#5F5E5E] dark:text-[#9CA3AF] block mb-2 font-semibold font-mono">
              Governing Specifications
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Indian Standards & Statutory Code Governance
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {codes.map((item) => (
              <div
                key={item.code}
                className="bg-white dark:bg-[#141823] border border-[#E5E7EB] dark:border-neutral-800 rounded-xl p-5 sm:p-6 shadow-sm hover:border-[#FFC20E] dark:hover:border-[#FFC20E]/50 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-bold text-[#FFC20E] bg-[#111111] px-2.5 py-0.5 rounded font-mono">
                    {item.code}
                  </span>
                  <span className="text-[11px] font-mono text-[#5F5E5E] dark:text-neutral-400">
                    {item.authority}
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#111111] dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-[#5F5E5E] dark:text-[#9CA3AF] leading-relaxed">
                  {item.scope}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Download Profile Modal */}
      {downloadModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white dark:bg-[#141823] border border-neutral-200 dark:border-neutral-800 rounded-2xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative text-[#111111] dark:text-white">
            {!downloaded ? (
              <>
                <div className="w-12 h-12 rounded-full bg-[#FFC20E]/20 text-[#785A00] dark:text-[#FFC20E] flex items-center justify-center mb-4">
                  <Download className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-1">
                  Request Official Company Profile
                </h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-6 leading-relaxed">
                  Enter your email address to receive our comprehensive QA/QC technical credential dossier, laboratory test rate cards, and methodology profile.
                </p>

                <form onSubmit={handleDownload} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold mb-1" htmlFor="profile-email">
                      Work / Personal Email
                    </label>
                    <input
                      type="email"
                      id="profile-email"
                      required
                      value={downloadEmail}
                      onChange={(e) => setDownloadEmail(e.target.value)}
                      placeholder="e.g. engineer@infrastructure.gov.in"
                      className="w-full bg-[#F8F9FA] dark:bg-[#1B202D] border border-neutral-300 dark:border-neutral-700 rounded-lg px-3.5 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-[#FFC20E]"
                    />
                  </div>

                  <div className="flex gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setDownloadModal(false)}
                      className="w-1/2 py-2.5 text-xs font-semibold border border-neutral-300 dark:border-neutral-700 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="w-1/2 py-2.5 text-xs font-semibold bg-[#FFC20E] text-black rounded-lg hover:bg-[#E5AC00] shadow-sm"
                    >
                      Send & Download
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="text-center py-4">
                <div className="w-12 h-12 rounded-full bg-[#ECFDF5] text-[#15803D] flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold mb-1">Profile Link Dispatched</h4>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-5 leading-relaxed">
                  We have forwarded the download link for the SiteProof QA/QC Profile dossier to <strong>{downloadEmail}</strong>.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setDownloadModal(false);
                    setDownloaded(false);
                  }}
                  className="w-full py-2.5 text-xs font-semibold bg-[#111111] dark:bg-white text-white dark:text-black rounded-lg"
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
