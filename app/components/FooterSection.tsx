"use client";

import React from "react";

const LOGO_URL =
  "https://nexuses.s3.us-east-2.amazonaws.com/logo-nobg-1.png";
const MAP_EMBED =
  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d39725.57372133723!2d0.070229!3d51.515998!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9c8fb5ddc3c893b7!2sTeam365!5e0!3m2!1sen!2sus!4v1570446562799!5m2!1sen!2sus";

const FOOTER_SERVICES = [
  "Data Processing",
  "Project Management",
  "Printing and Personalisation",
  "Enclosing",
  "Postage",
  "Worldwide Distribution",
  "Storage and Inventory Control",
  "Picking & Packing",
];

export function FooterSection() {
  return (
    <>
      <section id="contact" className="bg-[#f3f3f5] pt-14 md:pt-16 pb-16 md:pb-20">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-[1280px]">
          <div className="grid grid-cols-1 lg:grid-cols-[1.55fr_0.8fr_0.9fr] gap-10 lg:gap-12 items-start">
            <div>
              <img
                src={LOGO_URL}
                alt="team365"
                className="h-12 md:h-20 w-auto object-contain mb-5"
              />

              <div className="grid grid-cols-1 md:grid-cols-[0.95fr_1.05fr] gap-6 text-[#2f2f2f]">
                <div>
                  <p className="text-[#8d4f92] font-semibold text-[20px] leading-none mb-2">
                    Equipe52 Ltd t/a team365
                  </p>
                  <p className="text-[16px] leading-[1.4] font-normal">
                    Unit 80
                    <br />
                    London Industrial Park
                    <br />
                    Roding Rd
                    <br />
                    London
                    <br />
                    E6 6LS
                  </p>
                </div>

                <div>
                  <p className="text-[#8d4f92] text-[12px] font-semibold mb-2 uppercase tracking-wide">
                    Registered office
                  </p>
                  <p className="text-[11px] leading-[1.45]">
                    Brockbourne House, 77 Mount Ephraim,
                    <br />
                    Tunbridge Wells, Kent, TN4 8BS
                    <br />
                    Registered Company number: 5048228
                  </p>
                </div>
              </div>

              <div className="flex gap-4 mt-6">
                <a
                  href="https://www.team365.co.uk/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[15px] text-[#555] hover:text-[#9e5f98]"
                >
                  Privacy Policy
                </a>
                <a
                  href="https://www.team365.co.uk/page-sitemap.xml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[15px] text-[#555] hover:text-[#9e5f98]"
                >
                  Site Map
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-[#2f1d3d] font-semibold text-[18px] md:text-[20px] leading-none mb-4">
                Our Services
              </h4>
              <ul className="space-y-2">
                {FOOTER_SERVICES.map((label) => (
                  <li key={label}>
                    <a
                      href="#service"
                      className="text-[#3a3a3a] hover:text-[#9e5f98] text-[15px] leading-none"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[#2f1d3d] font-semibold text-[18px] md:text-[20px] leading-none mb-4">
                Get In Touch
              </h4>
              <p className="text-[#8d4f92] font-semibold text-[16px] leading-tight">
                Call us: +44 (0) 20 7474 3679
              </p>
              <p className="mt-3">
                <a
                  href="mailto:af@team365.co.uk"
                  className="text-[#8d4f92] font-semibold text-[16px] hover:underline"
                >
                  Email: af@team365.co.uk
                </a>
              </p>

              <div className="mt-5 rounded-sm overflow-hidden border border-gray-300 w-full max-w-[260px]">
                <iframe
                  src={MAP_EMBED}
                  width="100%"
                  height="150"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Team365 location"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1f1230] py-3">
        <div className="container mx-auto px-4 text-center">
          <p className="text-[15px] md:text-[16px] font-semibold text-white">
            2026 © Copyright <strong>team365</strong>. All rights Reserved.
          </p>
        </div>
      </section>
    </>
  );
}
