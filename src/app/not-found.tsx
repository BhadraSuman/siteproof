import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#0B0D11] text-[#111111] dark:text-[#F3F4F6]">
      <Navbar />

      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 py-24 sm:py-32">
        <div className="max-w-md w-full text-center">
          <div className="w-16 h-16 rounded-2xl bg-[#FFC20E]/20 text-[#785A00] dark:text-[#FFC20E] flex items-center justify-center mx-auto mb-6">
            <Search className="w-8 h-8" />
          </div>

          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FFC20E] bg-neutral-900 px-3 py-1 rounded inline-block mb-3">
            Error 404
          </span>

          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3">
            Page Not Found
          </h1>

          <p className="text-sm text-[#5F5E5E] dark:text-[#9CA3AF] mb-8 leading-relaxed">
            The civil QA/QC page or documentation you are looking for does not exist or may have been relocated.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FFC20E] text-black text-xs sm:text-sm font-semibold px-5 py-3 rounded-lg hover:bg-[#E5AC00] transition-colors shadow-sm"
            >
              <Home className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>

            <Link
              href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-neutral-100 dark:bg-neutral-800 text-[#111111] dark:text-white text-xs sm:text-sm font-semibold px-5 py-3 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
            >
              <span>Explore Services</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
