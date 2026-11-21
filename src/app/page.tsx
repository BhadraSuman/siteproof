import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectVerticals from "@/components/ProjectVerticals";
import RiskAnalysis from "@/components/RiskAnalysis";
import HowItWorks from "@/components/HowItWorks";
import WhatWeTest from "@/components/WhatWeTest";
import DashboardPreview from "@/components/DashboardPreview";
import TrustSection from "@/components/TrustSection";
import FAQ from "@/components/FAQ";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#0B0D11] text-[#111111] dark:text-[#F3F4F6] selection:bg-[#FFC20E] selection:text-black">
      {/* 1. Sticky Navigation Bar */}
      <Navbar />

      {/* Main Content Flow */}
      <main className="flex-1 w-full pt-16">
        {/* 1. Authoritative Hero Section */}
        <Hero />

        {/* 2. Core Project Verticals (Roads, Railways, Buildings, Water Tanks) */}
        <ProjectVerticals />

        {/* 3. Risk Analysis - Why Owners Lose Money */}
        <RiskAnalysis />

        {/* 4. Operational Protocol / 4-Stage Engineering Workflow */}
        <HowItWorks />

        {/* 5. What We Test / Bureau of Indian Standards Matrix */}
        <WhatWeTest />

        {/* 6. Real-Time Online Verification Dashboard Preview */}
        <DashboardPreview />

        {/* 7. Institutional Reliability / Trust Factors */}
        <TrustSection />

        {/* 8. Frequently Asked Questions */}
        <FAQ />

        {/* 9. Assessment Booking & WhatsApp CTA Banner */}
        <BookingForm />
      </main>

      {/* Footer with SOW Attribution to Uddipta Tech Solutions */}
      <Footer />
    </div>
  );
}
