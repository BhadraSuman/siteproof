"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { User, Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Certifications", href: "/certifications" },
    { label: "Careers", href: "/careers" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#111111] dark:bg-[#0E1017] border-b border-neutral-800/80 transition-colors duration-200">
      <div className="h-16 max-w-[1120px] mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-3.5 h-3.5 bg-[#FFC20E] rounded-none group-hover:rotate-45 transition-transform duration-300" />
          <div className="flex flex-col">
            <span className="text-lg sm:text-xl font-bold tracking-tight text-white leading-tight">
              SiteProof
            </span>
            <span className="text-[9px] font-mono tracking-wider text-neutral-400 uppercase -mt-0.5">
              QA/QC Consultancy
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`text-xs sm:text-[13px] font-medium transition-colors ${
                  isActive
                    ? "text-[#FFC20E] font-semibold"
                    : "text-[#E5E7EB] hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Theme Toggle Button */}
          <ThemeToggle />

          {/* CTA Button */}
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center justify-center bg-[#FFC20E] text-[#111111] text-xs sm:text-sm font-semibold px-3.5 sm:px-4 py-2 rounded hover:bg-[#E5AC00] active:scale-[0.98] transition-all"
          >
            Request Audit
          </Link>

          {/* User Icon / Client Portal */}
          <Link
            href="/contact"
            className="w-8 h-8 rounded-full bg-[#785A00] dark:bg-[#926F00] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
            aria-label="Client Portal"
            title="Client Portal Login"
          >
            <User className="w-4 h-4 text-white" />
          </Link>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 text-neutral-300 hover:text-white rounded focus:outline-none focus:ring-2 focus:ring-[#FFC20E]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#111111] dark:bg-[#0E1017] border-b border-neutral-800 px-4 pt-2 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 text-sm font-medium rounded transition-colors ${
                    isActive
                      ? "text-[#FFC20E] bg-neutral-800/80 font-semibold"
                      : "text-[#E5E7EB] hover:text-white hover:bg-neutral-800/60"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-neutral-800 flex flex-col gap-2">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center bg-[#FFC20E] text-[#111111] text-sm font-semibold py-2.5 rounded hover:bg-[#E5AC00] transition-colors"
            >
              Book Site Visit / Request Audit
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
