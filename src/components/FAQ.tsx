"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Do you replace my contractor?",
      answer:
        "No. We do not manage labor or execute construction. We provide third-party verification of materials and workmanship so you have verified data before releasing stage payments.",
    },
    {
      question: "Which labs do you use?",
      answer:
        "We partner exclusively with government-approved and NABL ISO/IEC 17025 accredited testing laboratories across major cities in India.",
    },
    {
      question: "How often are tests done?",
      answer:
        "Tests occur at every critical milestone: before foundation (soil), during each concrete pour (cement & cubes), at brickwork, and whenever a new material lot arrives on site.",
    },
    {
      question: "Can I see updates on my phone?",
      answer:
        "Yes. Your private client dashboard works smoothly on mobile browsers and sends instant notifications via WhatsApp or email whenever an inspection or test report is ready.",
    },
    {
      question: "What happens if a test fails?",
      answer:
        "You receive an immediate alert and a formal non-conformance notice. The contractor is notified to replace the batch or pause until rectified, preventing payment for substandard work.",
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full bg-white dark:bg-[#0B0D11] py-10 sm:py-20 transition-colors duration-200">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-6 sm:mb-12">
          <span className="text-[11px] sm:text-xs uppercase tracking-wider text-[#5F5E5E] dark:text-[#9CA3AF] block mb-1.5 sm:mb-2 font-semibold font-mono">
            Common Questions
          </span>
          <h2 className="text-xl sm:text-3xl lg:text-[34px] text-[#111111] dark:text-white font-semibold tracking-tight">
            Frequently asked questions
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-2.5 sm:space-y-3 max-w-3xl">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="bg-white dark:bg-[#141823] border border-[#E5E7EB] dark:border-neutral-800 rounded-lg p-3.5 sm:p-5 shadow-sm transition-all"
              >
                <button
                  type="button"
                  onClick={() => handleToggle(index)}
                  className="w-full flex justify-between items-center text-left cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-[17px] text-[#111111] dark:text-white font-semibold pr-3">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 sm:w-5 sm:h-5 text-[#5F5E5E] dark:text-neutral-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#111111] dark:text-white" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="mt-2.5 sm:mt-4 pt-2.5 sm:pt-4 border-t border-[#E5E7EB] dark:border-neutral-800 text-[#5F5E5E] dark:text-[#9CA3AF] text-xs sm:text-[15px] leading-relaxed animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
