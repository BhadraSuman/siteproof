"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, MessageSquare, CheckCircle2, Send, Calendar, Clock, Compass } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    clientCategory: "Government / Institutional Tender",
    phone: "",
    email: "",
    projectType: "Roads & Highways",
    projectLocation: "Burdwan, West Bengal",
    requirements: "",
  });

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
            Consultancy Inquiries • Tender & Private Audits
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111111] dark:text-white mb-6 leading-tight max-w-3xl">
            Contact Us & Request Project Assessment
          </h1>
          <p className="text-base sm:text-xl text-[#5F5E5E] dark:text-[#9CA3AF] max-w-2xl leading-relaxed">
            Reach out directly to <strong>Rahul Mondal</strong> to discuss your tender testing schedules, structural drawing verification, or site QA/QC audits.
          </p>
        </div>

        <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 items-start">
            {/* Left Column: Official Contact Info & Map Card */}
            <div className="lg:col-span-5 space-y-6">
              {/* Official Credentials Box */}
              <div className="bg-[#F8F9FA] dark:bg-[#141823] border border-[#E5E7EB] dark:border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-sm">
                <h3 className="text-lg font-bold mb-4 text-[#111111] dark:text-white">
                  Head Office & Technical Point of Contact
                </h3>

                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#FFC20E]/20 text-[#785A00] dark:text-[#FFC20E] flex items-center justify-center shrink-0 mt-0.5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase text-neutral-500 block">Direct Calling Line</span>
                      <a href="tel:+918101274483" className="font-bold text-[#111111] dark:text-white hover:text-[#785A00] dark:hover:text-[#FFC20E]">
                        +91 81012 74483
                      </a>
                      <span className="text-[11px] text-neutral-500 block mt-0.5">Rahul Mondal (Principal Consultant)</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#25D366]/20 text-[#15803D] flex items-center justify-center shrink-0 mt-0.5">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase text-neutral-500 block">WhatsApp Technical Desk</span>
                      <a
                        href="https://wa.me/918101274483?text=Hello%20Rahul%20Mondal%2C%20I%20would%20like%20to%20discuss%20a%20construction%20project%20inquiry."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-[#111111] dark:text-white hover:underline"
                      >
                        +91 81012 74483
                      </a>
                      <span className="text-[11px] text-[#15803D] block mt-0.5 font-medium">Instant Response under 15 mins</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 flex items-center justify-center shrink-0 mt-0.5">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase text-neutral-500 block">Official Inquiry Email</span>
                      <a href="mailto:contact@siteproof.in" className="font-bold text-[#111111] dark:text-white hover:underline">
                        contact@siteproof.in
                      </a>
                      <span className="text-[11px] text-neutral-500 block mt-0.5">Tender bids & test requests</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase text-neutral-500 block">Office & Sampling Hub</span>
                      <p className="font-semibold text-[#111111] dark:text-white leading-relaxed">
                        Etah, Burdwan, West Bengal, India
                      </p>
                      <span className="text-[11px] text-neutral-500 block mt-0.5">Serving Burdwan, Durgapur, Asansol & Kolkata</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Embedded Google Map / Location Card */}
              <div className="bg-white dark:bg-[#141823] border border-[#E5E7EB] dark:border-neutral-800 rounded-2xl overflow-hidden shadow-sm">
                <div className="p-4 border-b border-[#E5E7EB] dark:border-neutral-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Compass className="w-4 h-4 text-[#FFC20E]" />
                    <span className="text-xs font-bold text-[#111111] dark:text-white">Burdwan Hub Location Map</span>
                  </div>
                  <span className="text-[10px] font-mono text-neutral-500">Etah, Burdwan, WB</span>
                </div>
                
                {/* Visual Map Mockup / Embed */}
                <div className="relative h-56 bg-neutral-100 dark:bg-neutral-900 overflow-hidden flex items-center justify-center text-center p-6">
                  <iframe
                    title="Burdwan West Bengal Office Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117173.22019446487!2d87.80802778749444!3d23.249454174360676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8482483011327%3A0x6b8f3957cc977e58!2sBardhaman%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    className="absolute inset-0 w-full h-full border-0 filter grayscale dark:invert-[0.9] opacity-80"
                    loading="lazy"
                  />
                  <div className="relative z-10 bg-white/95 dark:bg-[#111111]/95 backdrop-blur-md p-3.5 rounded-xl border border-neutral-300 dark:border-neutral-700 shadow-lg max-w-xs">
                    <div className="flex items-center gap-1.5 justify-center mb-1 text-xs font-bold text-[#111111] dark:text-white">
                      <MapPin className="w-4 h-4 text-red-500 fill-red-500" />
                      <span>Etah, Burdwan Office</span>
                    </div>
                    <p className="text-[11px] text-neutral-600 dark:text-neutral-400">
                      Rapid on-site engineer dispatch across West Bengal
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Project & Consultancy Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="bg-white dark:bg-[#141823] border border-[#E5E7EB] dark:border-neutral-800 rounded-2xl p-6 sm:p-10 shadow-lg text-[#111111] dark:text-white">
                {!submitted ? (
                  <>
                    <h2 className="text-xl sm:text-2xl font-bold mb-2">
                      Project & Consultancy Inquiry Form
                    </h2>
                    <p className="text-xs sm:text-sm text-[#5F5E5E] dark:text-[#9CA3AF] mb-6">
                      Specify your project details and testing scope below for an immediate technical callback.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* Client Category (Government vs Private vs Personal) */}
                      <div>
                        <label className="block text-xs font-semibold mb-1.5" htmlFor="client-category">
                          Client / Evaluator Category *
                        </label>
                        <select
                          id="client-category"
                          required
                          value={formData.clientCategory}
                          onChange={(e) => setFormData({ ...formData, clientCategory: e.target.value })}
                          className="w-full bg-[#F8F9FA] dark:bg-[#1B202D] border border-neutral-300 dark:border-neutral-700 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#FFC20E]"
                        >
                          <option value="Government / Institutional Tender">Government / Institutional Tender Evaluator</option>
                          <option value="Private Infrastructure Contractor">Private Infrastructure Contractor / Subcontractor</option>
                          <option value="Commercial Real Estate Developer">Commercial Real Estate Developer</option>
                          <option value="Personal Construction / Individual Homeowner">Personal Construction / Individual Homeowner</option>
                        </select>
                      </div>

                      {/* Client Name & Phone */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold mb-1.5" htmlFor="client-name">
                            Your Name / Agency Name *
                          </label>
                          <input
                            type="text"
                            id="client-name"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="e.g. Alok Roy (Executive Engineer)"
                            className="w-full bg-[#F8F9FA] dark:bg-[#1B202D] border border-neutral-300 dark:border-neutral-700 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#FFC20E]"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold mb-1.5" htmlFor="client-phone">
                            Phone Number *
                          </label>
                          <div className="flex rounded-lg overflow-hidden border border-neutral-300 dark:border-neutral-700">
                            <span className="inline-flex items-center px-3 text-xs bg-[#F1F3F5] dark:bg-[#1F2432] text-neutral-500 font-mono">
                              +91
                            </span>
                            <input
                              type="tel"
                              id="client-phone"
                              required
                              pattern="[0-9]{10}"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              placeholder="81012 74483"
                              className="w-full bg-[#F8F9FA] dark:bg-[#1B202D] px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Email & Project Type */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold mb-1.5" htmlFor="client-email">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="client-email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="e.g. contact@project.org"
                            className="w-full bg-[#F8F9FA] dark:bg-[#1B202D] border border-neutral-300 dark:border-neutral-700 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#FFC20E]"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold mb-1.5" htmlFor="project-type">
                            Core Project Vertical *
                          </label>
                          <select
                            id="project-type"
                            required
                            value={formData.projectType}
                            onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                            className="w-full bg-[#F8F9FA] dark:bg-[#1B202D] border border-neutral-300 dark:border-neutral-700 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#FFC20E]"
                          >
                            <option value="Roads & Highways">Roads & Highways (PWD / NHAI)</option>
                            <option value="Railways Infrastructure">Railways Track & Ballast Infrastructure</option>
                            <option value="Building Construction">Building Construction (Commercial / Residential)</option>
                            <option value="Water Tanks & Overheads">Water Tanks & Utility Reservoirs (PHE / OHSR)</option>
                            <option value="Independent Material Testing">Independent Laboratory Material Testing (NABL)</option>
                            <option value="Structural Health Assessment">Structural Health Assessment & NDT</option>
                          </select>
                        </div>
                      </div>

                      {/* Project Location */}
                      <div>
                        <label className="block text-xs font-semibold mb-1.5" htmlFor="project-location">
                          Project Location in West Bengal / Eastern India *
                        </label>
                        <input
                          type="text"
                          id="project-location"
                          required
                          value={formData.projectLocation}
                          onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
                          placeholder="e.g. Katwa Road, Burdwan"
                          className="w-full bg-[#F8F9FA] dark:bg-[#1B202D] border border-neutral-300 dark:border-neutral-700 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#FFC20E]"
                        />
                      </div>

                      {/* Requirements */}
                      <div>
                        <label className="block text-xs font-semibold mb-1.5" htmlFor="client-req">
                          Specific Quality Audit & Material Testing Requirements
                        </label>
                        <textarea
                          id="client-req"
                          rows={3}
                          value={formData.requirements}
                          onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                          placeholder="Please mention test requirements (e.g., Concrete cube 28-day break, soil CBR, steel tensile test, or third-party stage audit)..."
                          className="w-full bg-[#F8F9FA] dark:bg-[#1B202D] border border-neutral-300 dark:border-neutral-700 rounded-lg p-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#FFC20E]"
                        />
                      </div>

                      {/* Submit Button */}
                      <div className="pt-2">
                        <button
                          type="submit"
                          className="w-full inline-flex items-center justify-center gap-2 bg-[#FFC20E] hover:bg-[#E5AC00] text-black font-semibold text-xs sm:text-sm py-3.5 px-6 rounded-lg transition-colors shadow-md"
                        >
                          <Send className="w-4 h-4" />
                          <span>Submit Project Inquiry</span>
                        </button>
                      </div>

                      <div className="text-center pt-1 text-[11px] text-neutral-500">
                        Direct notification to <strong>Rahul Mondal</strong> (+91 81012 74483). Technical response within 24 hours.
                      </div>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-10">
                    <div className="w-16 h-16 rounded-full bg-[#ECFDF5] text-[#15803D] flex items-center justify-center mx-auto mb-4 border border-[#15803D]/30">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Inquiry Registered</h3>
                    <p className="text-sm text-[#5F5E5E] dark:text-[#9CA3AF] max-w-md mx-auto leading-relaxed mb-6">
                      Thank you, <strong>{formData.name}</strong>. Your inquiry for <em>{formData.projectType}</em> in {formData.projectLocation} has been recorded. Our lead civil engineering consultant will contact you at <strong>+91 {formData.phone}</strong> shortly.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: "",
                          clientCategory: "Government / Institutional Tender",
                          phone: "",
                          email: "",
                          projectType: "Roads & Highways",
                          projectLocation: "Burdwan, West Bengal",
                          requirements: "",
                        });
                      }}
                      className="text-xs font-semibold underline text-[#111111] dark:text-[#FFC20E]"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
