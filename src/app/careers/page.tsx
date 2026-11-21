"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Briefcase, MapPin, Clock, CheckCircle2, Upload, Send, User } from "lucide-react";

export default function CareerPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    role: "",
    experience: "",
    summary: "",
    resumeName: "",
  });

  const jobs = [
    {
      id: "civil-qaqc",
      title: "Senior Civil QA/QC Engineer",
      location: "Burdwan & Site Locations, WB",
      type: "Full-Time",
      experience: "3–6 Years",
      description:
        "Lead physical site inspections, concrete mix design approvals, rebar verification, and compliance audits for highway and building projects.",
      requirements: [
        "B.Tech / Diploma in Civil Engineering",
        "Demonstrated experience with IS 456, IS 516 & MoRTH specifications",
        "Prior experience in third-party testing or consulting firms preferred",
      ],
    },
    {
      id: "site-inspector",
      title: "Site Quality Inspector (Roads & Highways)",
      location: "Burdwan, Durgapur, Asansol Region",
      type: "Full-Time",
      experience: "1–3 Years",
      description:
        "Conduct on-site compaction tests, core cutting sampling, bitumen layer checks, and maintain unannounced audit registers.",
      requirements: [
        "Diploma in Civil Engineering or equivalent field experience",
        "Hands-on familiarity with field density and CBR testing equipment",
        "Willingness to travel locally between road project sites",
      ],
    },
    {
      id: "lab-coordinator",
      title: "Materials Laboratory Coordinator",
      location: "Etah / Burdwan Technical Hub",
      type: "Full-Time",
      experience: "2–4 Years",
      description:
        "Manage sample intake, register chain-of-custody, liaise with partner NABL testing laboratories, and ensure reporting turnaround SLAs.",
      requirements: [
        "Civil Engineering / Science background with laboratory testing knowledge",
        "Experience in CTM, sieve analysis, and tensile testing procedures",
        "Strong documentation and digital reporting skills",
      ],
    },
    {
      id: "intern",
      title: "Graduate Engineering Trainee (GET) - QA/QC Intern",
      location: "Burdwan, West Bengal",
      type: "Internship (6 Months)",
      experience: "Fresh Graduate / Final Year",
      description:
        "Assist senior civil consultants in drafting inspection reports, shadowing on-site cube testing, and understanding IS/IRC statutory norms.",
      requirements: [
        "Currently pursuing or recently completed B.Tech/Diploma in Civil Engineering",
        "Eager to specialize in construction quality assurance and laboratory testing",
        "High attention to technical details and ethics",
      ],
    },
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, resumeName: e.target.files[0].name });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#0B0D11] text-[#111111] dark:text-[#F3F4F6]">
      <Navbar />

      <main className="flex-1 w-full pt-20 sm:pt-24 pb-16">
        {/* Header */}
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 bg-[#F1F3F5] dark:bg-[#1A1D27] text-[#111111] dark:text-[#E2E8F0] rounded text-xs font-semibold border border-[#E5E7EB] dark:border-neutral-800 font-mono">
            <span className="w-2 h-2 rounded-full bg-[#15803D]" />
            Career Opportunities • Engineering Openings
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111111] dark:text-white mb-6 leading-tight max-w-3xl">
            Build Your Career in Civil Quality Engineering
          </h1>
          <p className="text-base sm:text-xl text-[#5F5E5E] dark:text-[#9CA3AF] max-w-2xl leading-relaxed">
            Join our rapidly growing civil engineering consultancy led by <strong>Rahul Mondal</strong>. We are recruiting talented civil engineers, laboratory technicians, and QA/QC inspectors across West Bengal.
          </p>
        </div>

        {/* Current Job Openings */}
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 mb-16 sm:mb-20">
          <div className="mb-8">
            <span className="text-xs uppercase tracking-wider text-[#5F5E5E] dark:text-[#9CA3AF] block mb-2 font-semibold font-mono">
              Active Vacancies
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Open Positions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="bg-white dark:bg-[#141823] border border-[#E5E7EB] dark:border-neutral-800 rounded-xl p-6 shadow-sm flex flex-col justify-between hover:border-[#FFC20E] dark:hover:border-[#FFC20E]/50 transition-colors"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="text-xs font-semibold bg-[#FFC20E]/20 text-[#785A00] dark:text-[#FFC20E] px-2.5 py-0.5 rounded font-mono">
                      {job.type}
                    </span>
                    <span className="text-xs text-[#5F5E5E] dark:text-neutral-400 flex items-center gap-1 font-mono">
                      <Clock className="w-3 h-3" />
                      {job.experience}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold mb-2 text-[#111111] dark:text-white">
                    {job.title}
                  </h3>

                  <p className="text-xs text-[#5F5E5E] dark:text-neutral-400 flex items-center gap-1 mb-3">
                    <MapPin className="w-3.5 h-3.5 text-[#FFC20E]" />
                    <span>{job.location}</span>
                  </p>

                  <p className="text-xs sm:text-sm text-[#5F5E5E] dark:text-[#9CA3AF] leading-relaxed mb-4">
                    {job.description}
                  </p>

                  <div className="border-t border-[#E5E7EB] dark:border-neutral-800 pt-3">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#111111] dark:text-white block mb-1.5 font-mono">
                      Candidate Profile:
                    </span>
                    <ul className="space-y-1 text-xs text-[#5F5E5E] dark:text-neutral-300">
                      {job.requirements.map((req) => (
                        <li key={req} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#15803D] shrink-0 mt-0.5" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E5E7EB] dark:border-neutral-800">
                  <a
                    href="#career-form"
                    onClick={() => setFormData({ ...formData, role: job.title })}
                    className="w-full inline-flex items-center justify-center gap-1.5 bg-[#F1F3F5] dark:bg-[#1B202D] hover:bg-[#FFC20E] dark:hover:bg-[#FFC20E] text-[#111111] dark:text-white dark:hover:text-black text-xs font-semibold py-2.5 px-4 rounded-lg transition-colors"
                  >
                    <span>Apply For This Role</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Application Form Section */}
        <div id="career-form" className="max-w-[800px] mx-auto px-4 sm:px-6">
          <div className="bg-white dark:bg-[#141823] border border-[#E5E7EB] dark:border-neutral-800 rounded-2xl p-6 sm:p-10 shadow-lg text-[#111111] dark:text-white">
            {!submitted ? (
              <>
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#E5E7EB] dark:border-neutral-800">
                  <div className="w-10 h-10 rounded-lg bg-[#FFC20E] text-[#111111] flex items-center justify-center">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold">
                      Career Application Form
                    </h2>
                    <p className="text-xs text-[#5F5E5E] dark:text-neutral-400">
                      Submissions route directly to the principal consultancy recruitment inbox.
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold mb-1" htmlFor="applicant-name">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="applicant-name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Subir Mukherjee"
                        className="w-full bg-[#F8F9FA] dark:bg-[#1B202D] border border-neutral-300 dark:border-neutral-700 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#FFC20E]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold mb-1" htmlFor="applicant-phone">
                        Phone Number *
                      </label>
                      <div className="flex rounded-lg overflow-hidden border border-neutral-300 dark:border-neutral-700">
                        <span className="inline-flex items-center px-3 text-xs bg-[#F1F3F5] dark:bg-[#1F2432] text-neutral-500 font-mono">
                          +91
                        </span>
                        <input
                          type="tel"
                          id="applicant-phone"
                          required
                          pattern="[0-9]{10}"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="98765 43210"
                          className="w-full bg-[#F8F9FA] dark:bg-[#1B202D] px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Email & Desired Role */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold mb-1" htmlFor="applicant-email">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="applicant-email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. civil.engineer@gmail.com"
                        className="w-full bg-[#F8F9FA] dark:bg-[#1B202D] border border-neutral-300 dark:border-neutral-700 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#FFC20E]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold mb-1" htmlFor="applicant-role">
                        Desired Role *
                      </label>
                      <select
                        id="applicant-role"
                        required
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className="w-full bg-[#F8F9FA] dark:bg-[#1B202D] border border-neutral-300 dark:border-neutral-700 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#FFC20E]"
                      >
                        <option value="" disabled>Select position</option>
                        <option value="Senior Civil QA/QC Engineer">Senior Civil QA/QC Engineer</option>
                        <option value="Site Quality Inspector (Roads & Highways)">Site Quality Inspector (Roads & Highways)</option>
                        <option value="Materials Laboratory Coordinator">Materials Laboratory Coordinator</option>
                        <option value="Graduate Engineering Trainee (GET) - QA/QC Intern">Graduate Engineering Trainee (GET) - QA/QC Intern</option>
                        <option value="Other Technical Role">Other Technical Civil Role</option>
                      </select>
                    </div>
                  </div>

                  {/* Experience Level */}
                  <div>
                    <label className="block text-xs font-semibold mb-1" htmlFor="applicant-exp">
                      Total Civil Engineering / Field Experience *
                    </label>
                    <select
                      id="applicant-exp"
                      required
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      className="w-full bg-[#F8F9FA] dark:bg-[#1B202D] border border-neutral-300 dark:border-neutral-700 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#FFC20E]"
                    >
                      <option value="" disabled>Select experience bracket</option>
                      <option value="Fresh Graduate / Final Year">Fresh Graduate / Final Year</option>
                      <option value="1 to 2 Years">1 to 2 Years</option>
                      <option value="3 to 5 Years">3 to 5 Years</option>
                      <option value="6+ Years">6+ Years (Senior Lead)</option>
                    </select>
                  </div>

                  {/* Experience Summary */}
                  <div>
                    <label className="block text-xs font-semibold mb-1" htmlFor="applicant-summary">
                      Key Projects & Technical Skills Summary
                    </label>
                    <textarea
                      id="applicant-summary"
                      rows={3}
                      value={formData.summary}
                      onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                      placeholder="Briefly describe your familiarity with concrete cube testing, soil CBR, rebar inspection, or road works..."
                      className="w-full bg-[#F8F9FA] dark:bg-[#1B202D] border border-neutral-300 dark:border-neutral-700 rounded-lg p-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#FFC20E]"
                    />
                  </div>

                  {/* Resume Upload Box */}
                  <div>
                    <label className="block text-xs font-semibold mb-1">
                      Resume / Curriculum Vitae (PDF / DOCX) *
                    </label>
                    <div className="border-2 border-dashed border-neutral-300 dark:border-neutral-700 rounded-xl p-4 text-center hover:border-[#FFC20E] transition-colors relative cursor-pointer bg-[#F8F9FA]/50 dark:bg-[#1B202D]/40">
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="absolute inset-0 opacity-0 cursor-pointer"
                      />
                      <Upload className="w-6 h-6 mx-auto mb-1.5 text-[#785A00] dark:text-[#FFC20E]" />
                      <p className="text-xs font-semibold text-[#111111] dark:text-white">
                        {formData.resumeName ? formData.resumeName : "Click to select or drag and drop your Resume file"}
                      </p>
                      <span className="text-[10px] text-neutral-500">
                        PDF or DOCX format (Max 10MB)
                      </span>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#FFC20E] hover:bg-[#E5AC00] text-black font-semibold text-xs sm:text-sm py-3.5 px-6 rounded-lg transition-colors shadow-md"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Career Application</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-center text-neutral-500">
                    Your application will be personally reviewed by <strong>Rahul Mondal</strong> and our technical recruitment panel.
                  </p>
                </form>
              </>
            ) : (
              <div className="text-center py-10">
                <div className="w-16 h-16 rounded-full bg-[#ECFDF5] text-[#15803D] flex items-center justify-center mx-auto mb-4 border border-[#15803D]/30">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Application Received Successfully</h3>
                <p className="text-sm text-[#5F5E5E] dark:text-[#9CA3AF] max-w-md mx-auto leading-relaxed mb-6">
                  Thank you, <strong>{formData.name}</strong>. Your profile for the position of <em>{formData.role || "Civil Engineer"}</em> has been routed to our recruitment inbox. Shortlisted candidates will be contacted via phone or email for a technical interview.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", phone: "", email: "", role: "", experience: "", summary: "", resumeName: "" });
                  }}
                  className="text-xs font-semibold underline text-[#111111] dark:text-[#FFC20E]"
                >
                  Submit Another Profile
                </button>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
