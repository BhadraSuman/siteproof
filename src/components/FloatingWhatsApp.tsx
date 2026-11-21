"use client";

import React, { useState } from "react";
import { MessageSquare, X } from "lucide-react";

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "918101274483"; // Rahul Mondal
  const defaultMessage = encodeURIComponent(
    "Hello Rahul Mondal / SiteProof QA Team, I would like to inquire about your civil engineering QA/QC, material testing & third-party audit services."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end print:hidden">
      {/* Quick Greeting Popup */}
      {isOpen && (
        <div className="mb-3 w-72 sm:w-80 bg-white dark:bg-[#141823] border border-neutral-200 dark:border-neutral-800 rounded-xl shadow-2xl p-4 text-[#111111] dark:text-white animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-neutral-200 dark:border-neutral-800">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse" />
              <span className="text-xs font-semibold">QA/QC Technical Helpline</span>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200"
              aria-label="Close WhatsApp prompt"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-xs text-neutral-600 dark:text-neutral-300 mb-3 leading-relaxed">
            Need urgent material testing or structural assessment for your site in West Bengal? Chat directly with <strong>Rahul Mondal</strong>.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-semibold py-2.5 px-3 rounded-lg transition-colors shadow-sm"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Start WhatsApp Chat</span>
          </a>
        </div>
      )}

      {/* Floating Trigger Button */}
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="relative group flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full shadow-lg hover:shadow-xl active:scale-95 transition-all duration-200"
          aria-label="Chat on WhatsApp"
        >
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white dark:border-[#0B0D11]" />
          <MessageSquare className="w-6 h-6 sm:w-7 sm:h-7" />
          <span className="sr-only">Open WhatsApp chat</span>
        </button>
      </div>
    </div>
  );
}
