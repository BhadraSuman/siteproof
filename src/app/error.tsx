"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RotateCcw, Home } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to console or error reporter
    console.error("Application error boundary triggered:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-20 bg-white dark:bg-[#0B0D11] text-[#111111] dark:text-[#F3F4F6]">
      <div className="max-w-md w-full text-center">
        <div className="w-16 h-16 rounded-2xl bg-red-100 dark:bg-red-950/40 text-red-600 dark:text-red-400 flex items-center justify-center mx-auto mb-6 border border-red-200 dark:border-red-900">
          <AlertTriangle className="w-8 h-8" />
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3">
          Something went wrong
        </h1>

        <p className="text-xs sm:text-sm text-[#5F5E5E] dark:text-[#9CA3AF] mb-8 leading-relaxed">
          An unexpected display glitch occurred while rendering this view. You can reload the section safely.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => reset()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FFC20E] text-black text-xs sm:text-sm font-semibold px-5 py-3 rounded-lg hover:bg-[#E5AC00] transition-colors shadow-sm"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Try Again</span>
          </button>

          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-neutral-100 dark:bg-neutral-800 text-[#111111] dark:text-white text-xs sm:text-sm font-semibold px-5 py-3 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
