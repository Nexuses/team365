"use client";

import React from "react";

const BG_IMAGE =
  "https://nexuses.s3.us-east-2.amazonaws.com/footer.jpg";

export function QuoteCTASection() {
  return (
    <section
      className="relative min-h-[360px] md:min-h-[430px] bg-cover bg-center"
      style={{ backgroundImage: `url(${BG_IMAGE})` }}
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "rgba(18, 18, 18, 0.50)",
        }}
      />

      <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-12 h-full min-h-[360px] md:min-h-[430px] flex items-center">
        <div className="w-full max-w-[320px] md:max-w-[460px] bg-white rounded-xl px-6 md:px-8 py-6 md:py-7 shadow-2xl">
          <h4 className="text-[18px] md:text-[30px] leading-tight font-semibold !text-[#2f1d3d] text-center mb-4">
            Please Call For A Quote
          </h4>
          <p className="text-[13px] md:text-[18px] leading-[1.5] !text-gray-800 text-center mb-5">
            To us every project is unique and we do not believe in a "one
            solution fits all" approach.
          </p>
          <div className="flex justify-center">
            <a
              href="tel:+442074743679"
              className="inline-flex items-center justify-center bg-[#8f0ea3] hover:bg-[#370640] text-white font-semibold text-[12px] md:text-[14px] py-2.5 md:py-3 px-8 md:px-10 rounded-[3px] transition-colors duration-300"
            >
              +44 (0) 20 7474 3679
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
