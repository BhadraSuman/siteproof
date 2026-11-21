"use client";

import React, { useState } from "react";
import { MessageSquare, Calendar, CheckCircle, ArrowRight } from "lucide-react";

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    projectType: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({ name: "", phone: "", city: "", projectType: "" });
    setSubmitted(false);
  };

  return (
    <section id="book-visit" className="w-full bg-[#FFC20E] text-[#111111] py-10 sm:py-20 transition-colors">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="text-[10px] sm:text-xs uppercase tracking-widest font-mono font-bold text-[#111111] bg-[#111111]/10 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded mb-2.5 sm:mb-4">
              Zero Obligation Audit Consult
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight mb-2 sm:mb-4 leading-tight text-[#111111]">
              Book a free site visit
            </h2>
            <p className="text-xs sm:text-base lg:text-lg text-[#111111]/90 mb-5 sm:mb-8 max-w-md leading-relaxed">
              Speak with an experienced civil engineer to discuss your project timeline, testing plan, and contractor agreement.
            </p>

            {/* WhatsApp CTA */}
            <div className="w-full sm:w-auto">
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 sm:gap-3 bg-[#111111] text-white px-4 py-3 sm:px-6 sm:py-4 rounded-lg font-semibold text-xs sm:text-sm hover:bg-[#262626] active:scale-[0.98] transition-all w-full sm:w-auto justify-center shadow-md group"
              >
                <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#25D366] text-white flex items-center justify-center text-[10px] sm:text-xs font-bold shrink-0">
                  <MessageSquare className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
                </span>
                <span>Chat on WhatsApp (+91 98765 43210)</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-neutral-400 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <p className="text-[10px] sm:text-xs text-[#111111]/75 mt-1.5 sm:mt-2.5 font-mono">
                Average engineer response time: under 15 minutes
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Form Card */}
          <div className="lg:col-span-6">
            <div className="bg-white dark:bg-[#141823] border border-[#111111]/15 dark:border-neutral-800 rounded-xl p-4 sm:p-8 shadow-xl text-[#111111] dark:text-white transition-colors">
              {!submitted ? (
                <>
                  <h3 className="text-lg sm:text-2xl font-bold mb-1 sm:mb-2">
                    Request Project Assessment
                  </h3>
                  <p className="text-[11px] sm:text-sm text-[#5F5E5E] dark:text-[#9CA3AF] mb-4 sm:mb-6">
                    Our regional technical director will get in touch within 24 hours.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="owner-name"
                        className="block text-xs sm:text-sm font-semibold mb-1"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="owner-name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rajesh Kumar"
                        className="w-full bg-white dark:bg-[#1B202D] border border-[#E5E7EB] dark:border-neutral-700 rounded-lg px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#FFC20E] transition-all text-[#111111] dark:text-white placeholder:text-[#A1A1AA]"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="owner-phone"
                        className="block text-xs sm:text-sm font-semibold mb-1"
                      >
                        Phone
                      </label>
                      <div className="flex rounded-lg overflow-hidden border border-[#E5E7EB] dark:border-neutral-700 focus-within:ring-2 focus-within:ring-[#FFC20E]">
                        <span className="inline-flex items-center px-2.5 sm:px-3.5 text-xs sm:text-sm text-[#5F5E5E] dark:text-neutral-300 bg-[#F1F3F5] dark:bg-[#1F2432] border-r border-[#E5E7EB] dark:border-neutral-700 font-mono">
                          +91
                        </span>
                        <input
                          type="tel"
                          id="owner-phone"
                          required
                          pattern="[0-9]{10}"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="98765 43210"
                          className="w-full bg-white dark:bg-[#1B202D] px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm focus:outline-none transition-all text-[#111111] dark:text-white placeholder:text-[#A1A1AA]"
                        />
                      </div>
                    </div>

                    {/* City */}
                    <div>
                      <label
                        htmlFor="project-city"
                        className="block text-xs sm:text-sm font-semibold mb-1"
                      >
                        City
                      </label>
                      <select
                        id="project-city"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full bg-white dark:bg-[#1B202D] border border-[#E5E7EB] dark:border-neutral-700 rounded-lg px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#FFC20E] transition-all text-[#111111] dark:text-white"
                      >
                        <option value="" disabled>
                          Select site location
                        </option>
                        <option value="kolkata">Kolkata</option>
                        <option value="bengaluru">Bengaluru</option>
                        <option value="hyderabad">Hyderabad</option>
                        <option value="delhi-ncr">Delhi NCR</option>
                        <option value="mumbai">Mumbai</option>
                        <option value="other">Other City in India</option>
                      </select>
                    </div>

                    {/* Project Type */}
                    <div>
                      <label
                        htmlFor="project-type"
                        className="block text-xs sm:text-sm font-semibold mb-1"
                      >
                        Project type
                      </label>
                      <select
                        id="project-type"
                        required
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full bg-white dark:bg-[#1B202D] border border-[#E5E7EB] dark:border-neutral-700 rounded-lg px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#FFC20E] transition-all text-[#111111] dark:text-white"
                      >
                        <option value="" disabled>
                          Select structure classification
                        </option>
                        <option value="house">Independent House / Villa</option>
                        <option value="residential">G+2 / G+3 Residential</option>
                        <option value="apartment">Boutique Apartment</option>
                        <option value="commercial">Commercial</option>
                      </select>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-1.5 sm:pt-2">
                      <button
                        type="submit"
                        className="w-full bg-[#111111] dark:bg-[#FFC20E] text-white dark:text-[#111111] font-semibold py-3 sm:py-3.5 px-5 sm:px-6 rounded-lg hover:bg-[#262626] dark:hover:bg-[#E5AC00] active:scale-[0.99] transition-all flex items-center justify-center gap-2 text-xs sm:text-sm shadow-md"
                      >
                        <span>Request a visit</span>
                        <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </button>
                    </div>

                    <div className="text-center pt-1">
                      <span className="text-[10px] sm:text-[12px] text-[#5F5E5E] dark:text-[#9CA3AF]">
                        Strict confidentiality. Your data is never sold to contractors or suppliers.
                      </span>
                    </div>
                  </form>
                </>
              ) : (
                <div className="text-center py-6 sm:py-8 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#ECFDF5] dark:bg-[#064E3B]/60 text-[#15803D] dark:text-[#34D399] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 border border-[#15803D]/40">
                    <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold mb-1.5 sm:mb-2">Visit Request Registered</h4>
                  <p className="text-xs sm:text-sm text-[#5F5E5E] dark:text-[#9CA3AF] mb-4 sm:mb-6 max-w-sm mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-[#111111] dark:text-white">{formData.name || "Client"}</span>! Our site engineer will call you shortly to schedule the inspection window.
                  </p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="text-xs sm:text-sm text-[#111111] dark:text-[#FFC20E] underline font-semibold hover:opacity-80 transition-opacity"
                  >
                    Submit another request
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
