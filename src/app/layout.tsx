import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0B0D11" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://siteproof.in"),
  title: {
    default: "SiteProof - Civil Engineering QA/QC & Third-Party Inspection Consultancy",
    template: "%s | SiteProof Civil QA/QC",
  },
  description:
    "Third-party inspection, quality assurance, NABL material testing, structural assessment, and contractor work certification across Roads, Railways, Buildings, and Water Tanks in West Bengal. Led by Rahul Mondal.",
  keywords: [
    "Civil Engineering Consultancy",
    "QA/QC Inspection India",
    "Third Party Quality Audit",
    "Material Testing Burdwan West Bengal",
    "Rahul Mondal Civil Engineer",
    "Roads and Highways QA/QC",
    "Railways Track Quality Inspection",
    "Concrete Cube Test IS 516",
    "IS 456 Structural Audit",
    "Uddipta Tech Solutions",
  ],
  authors: [{ name: "Uddipta Tech Solutions", url: "https://uddiptatech.com" }],
  openGraph: {
    title: "SiteProof - Civil Engineering QA/QC & Material Testing",
    description: "Third-party inspection, structural review, and NABL material testing across Roads, Railways, Buildings, and Water Tanks in West Bengal.",
    siteName: "SiteProof",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://siteproof.in/#organization",
        "name": "SiteProof - Civil Engineering & QA/QC Consultancy",
        "founder": {
          "@type": "Person",
          "name": "Rahul Mondal",
        },
        "telephone": "+918101274483",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Burdwan",
          "addressRegion": "West Bengal",
          "addressCountry": "IN",
        },
        "description":
          "Third-party civil engineering quality assurance, material testing, structural assessment, and contractor work certification.",
        "areaServed": "West Bengal & Eastern India",
      },
      {
        "@type": "Service",
        "name": "Civil Engineering QA/QC & Material Testing",
        "provider": {
          "@id": "https://siteproof.in/#organization",
        },
        "serviceType": "Third-Party Construction Inspection & Laboratory Testing",
      },
    ],
  };

  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('siteproof-theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (stored === 'dark' || (!stored && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="bg-white dark:bg-[#0B0D11] text-[#111111] dark:text-[#F3F4F6] min-h-screen antialiased selection:bg-[#FFC20E] selection:text-black transition-colors duration-200"
      >
        <ThemeProvider>
          {children}
          {/* Floating WhatsApp Button across all pages */}
          <FloatingWhatsApp />
        </ThemeProvider>
      </body>
    </html>
  );
}
