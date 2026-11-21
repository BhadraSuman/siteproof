"use client";

import React from "react";

export default function WhatWeTest() {
  const testMatrix = [
    {
      material: "Concrete",
      test: "Cube strength",
      standard: "IS 516",
      when: "7 and 28 days",
    },
    {
      material: "Cement",
      test: "Setting time and strength",
      standard: "IS 4031",
      when: "On delivery",
    },
    {
      material: "Bricks",
      test: "Compressive strength",
      standard: "IS 3495",
      when: "Per batch",
    },
    {
      material: "Steel",
      test: "Tensile and bend test",
      standard: "IS 1786",
      when: "Per lot",
    },
    {
      material: "Soil",
      test: "Bearing capacity",
      standard: "IS 2720",
      when: "Before foundation",
    },
  ];

  return (
    <section id="what-we-test" className="w-full bg-[#F8F9FA] dark:bg-[#0E1118] py-10 sm:py-20 border-y border-[#E5E7EB] dark:border-neutral-800 transition-colors duration-200">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-5 sm:mb-10 gap-2 sm:gap-3">
          <div>
            <span className="text-[11px] sm:text-xs uppercase tracking-wider text-[#5F5E5E] dark:text-[#9CA3AF] block mb-1.5 sm:mb-2 font-semibold font-mono">
              Laboratory & Field Scope
            </span>
            <h2 className="text-xl sm:text-3xl lg:text-[34px] text-[#111111] dark:text-white font-semibold tracking-tight">
              What we test
            </h2>
          </div>
          <div className="text-[11px] sm:text-xs text-[#5F5E5E] dark:text-neutral-400 font-mono">
            Governed strictly by Bureau of Indian Standards (BIS) specifications
          </div>
        </div>

        {/* Table Container */}
        <div className="bg-white dark:bg-[#141823] border border-[#E5E7EB] dark:border-neutral-800 rounded-lg overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[500px]">
              <thead>
                <tr className="bg-[#F1F3F5] dark:bg-[#1B202D] border-b border-[#E5E7EB] dark:border-neutral-800 text-[#111111] dark:text-white">
                  <th className="py-2.5 px-3 sm:py-4 sm:px-6 text-[11px] sm:text-xs font-semibold uppercase tracking-wider">
                    Material
                  </th>
                  <th className="py-2.5 px-3 sm:py-4 sm:px-6 text-[11px] sm:text-xs font-semibold uppercase tracking-wider">
                    Test
                  </th>
                  <th className="py-2.5 px-3 sm:py-4 sm:px-6 text-[11px] sm:text-xs font-semibold uppercase tracking-wider">
                    Standard
                  </th>
                  <th className="py-2.5 px-3 sm:py-4 sm:px-6 text-[11px] sm:text-xs font-semibold uppercase tracking-wider">
                    When
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E7EB] dark:divide-neutral-800 text-[#111111] dark:text-neutral-200 text-xs sm:text-[15px]">
                {testMatrix.map((row, idx) => (
                  <tr
                    key={row.material}
                    className={`transition-colors ${
                      idx % 2 === 1
                        ? "bg-[#FAFAFA] dark:bg-[#161B27]"
                        : "bg-white dark:bg-[#141823]"
                    } hover:bg-[#F1F3F5]/80 dark:hover:bg-[#1D2332]`}
                  >
                    <td className="py-2.5 px-3 sm:py-4 sm:px-6 font-semibold flex items-center gap-2">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#111111] dark:bg-[#FFC20E]" />
                      {row.material}
                    </td>
                    <td className="py-2.5 px-3 sm:py-4 sm:px-6 text-[#474646] dark:text-neutral-300">
                      {row.test}
                    </td>
                    <td className="py-2.5 px-3 sm:py-4 sm:px-6 font-mono text-xs sm:text-sm font-medium text-[#111111] dark:text-[#FFC20E]">
                      {row.standard}
                    </td>
                    <td className="py-2.5 px-3 sm:py-4 sm:px-6 text-[#474646] dark:text-neutral-300">
                      {row.when}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
