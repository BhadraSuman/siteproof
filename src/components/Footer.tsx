"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#111111] dark:bg-[#07090D] text-white border-t border-[#1C1B1B] dark:border-neutral-900 transition-colors print:hidden">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-8 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-4">
            <Link href="/" className="flex items-center gap-2 mb-3 group">
              <div className="w-3.5 h-3.5 bg-[#FFC20E] rounded-none group-hover:rotate-45 transition-transform duration-300" />
              <span className="text-xl font-bold tracking-tight text-white">
                SiteProof
              </span>
            </Link>
            <p className="text-xs text-[#A1A1AA] max-w-sm leading-relaxed mb-4">
              Civil Engineering & Quality Assurance Consultancy led by <strong>Rahul Mondal</strong>. Specializing in third-party inspection, NABL material testing, structural audits, and contractor work certification across West Bengal.
            </p>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-neutral-900 border border-neutral-800 rounded text-[11px] text-neutral-300 font-mono">
              <span className="w-2 h-2 rounded-full bg-[#15803D]" />
              Government Tender & Private Audits
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3 font-mono">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="text-[#A1A1AA] hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#A1A1AA] hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-[#A1A1AA] hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/certifications" className="text-[#A1A1AA] hover:text-white transition-colors">
                  Certifications
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-[#A1A1AA] hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#A1A1AA] hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Specialized Verticals */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3 font-mono">
              Core Verticals
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/services#roads" className="text-[#A1A1AA] hover:text-white transition-colors">
                  Roads & Highways QA/QC
                </Link>
              </li>
              <li>
                <Link href="/services#railways" className="text-[#A1A1AA] hover:text-white transition-colors">
                  Railways Track & Ballast Audits
                </Link>
              </li>
              <li>
                <Link href="/services#buildings" className="text-[#A1A1AA] hover:text-white transition-colors">
                  High-Rise & Residential Buildings
                </Link>
              </li>
              <li>
                <Link href="/services#watertanks" className="text-[#A1A1AA] hover:text-white transition-colors">
                  Water Tanks & Utility Storage
                </Link>
              </li>
              <li>
                <Link href="/services#materials" className="text-[#A1A1AA] hover:text-white transition-colors">
                  NABL Partnered Material Testing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3 font-mono">
              Consultancy Office
            </h4>
            <div className="space-y-2.5 text-xs text-[#A1A1AA]">
              <p className="flex items-center gap-2 text-white font-medium">
                <Phone className="w-3.5 h-3.5 text-[#FFC20E]" />
                <a href="tel:+918101274483" className="hover:text-[#FFC20E] transition-colors">
                  +91 81012 74483
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#FFC20E]" />
                <a href="mailto:contact@siteproof.in" className="hover:text-white transition-colors">
                  contact@siteproof.in
                </a>
              </p>
              <p className="flex items-start gap-2 pt-1 leading-relaxed">
                <MapPin className="w-3.5 h-3.5 text-[#FFC20E] shrink-0 mt-0.5" />
                <span>Etah, Burdwan, West Bengal, India</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Attribution */}
        <div className="pt-6 border-t border-[#262626] dark:border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <p className="text-[#71717A] text-[11px] sm:text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Civil Engineering Consultancy (Led by Rahul Mondal). All rights reserved.
          </p>

          <div className="flex items-center gap-2">
            <span className="text-neutral-400 text-[11px]">Designed & Engineered by</span>
            <a
              href="https://uddiptatech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-[#FFC20E] hover:text-white transition-colors text-[11px] bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800"
            >
              <span>Uddipta Tech Solutions</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
