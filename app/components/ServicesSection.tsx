"use client";

import React, { useState } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const SERVICES = [
  {
    id: "printing",
    title: "Printing & Personalisation",
    icon: "printing",
    image: "https://www.team365.co.uk/wp-content/uploads/2019/10/printing.jpg",
    description:
      "team365's ancillary document knowledge, gained through years of experience, means that we are able to offer a service that is second-to-none. We guide you through the document design process and advise on the nuances of registrars' requirements. Our clients trust our knowledge and often turn to us to manage the design, printing and personalisation of their proxy cards, and other AGM documents.",
  },
  {
    id: "distribution",
    title: "Worldwide Distribution",
    icon: "distribution",
    image: "https://www.team365.co.uk/wp-content/uploads/2019/10/footer-lonodn.jpg",
    description:
      "We have securely packed and despatched complex distribution projects ranging from hybrid bill deposits through to worldwide brand relaunches and time-sensitive product launches. Our experience of delivering into international destinations means we advise on potential pitfalls and timings. We keep you up-to-date at all stages of your distribution project and provide a proof-of-delivery schedule on project completion.",
  },
  {
    id: "storage",
    title: "Storage and Inventory",
    icon: "storage",
    image: "https://www.team365.co.uk/wp-content/uploads/2019/11/Storage-and-Inventory-Control-.jpg",
    description:
      "With office rentals at a premium many of our clients turn to us to store their backdated corporate communication, and brand literature and marketing products. We pick, pack and dispatch any requests to UK and worldwide destinations and our state-of-the-art inventory control ensures accurate and up-to-date stock reports.",
  },
  {
    id: "data",
    title: "Data Processing",
    icon: "data",
    image: "https://www.team365.co.uk/wp-content/uploads/2019/12/Data-Processing.jpg",
    description:
      "Due to the complex nature of many of the projects we handle, our data processors are experienced in writing bespoke programmes and combining this with current industry software. So knowledgeable are our programmers that we are often asked by Registrars to advise other mailing houses how to manage and manipulate their data!",
  },
  {
    id: "project",
    title: "Project Management",
    icon: "project",
    image: "https://www.team365.co.uk/wp-content/uploads/2019/10/Project-mgt.jpg",
    description:
      "Our exceptional team of experienced account managers will guide you through every stage of your project—no matter how complex—to ensure it runs smoothly, accurately, and delivers exactly what you need. We are large enough to manage substantial mailing and distribution campaigns, yet small enough to remain flexible and provide a truly personal service that sets us apart. Every project is treated as unique, and we work closely with you to create a bespoke solution that achieves your goals efficiently and effectively.",
  },
  {
    id: "polywrapping",
    title: "Postage",
    icon: "postage",
    image: "https://www.team365.co.uk/wp-content/uploads/2020/01/img32.jpg",
    description:
      "Our team of experts will advise the most cost-effective and efficient postal service for your project using our network of UK and global postal providers.",
  },
  {
    id: "enclosing",
    title: "Enclosing",
    icon: "enclosing",
    image: "https://www.team365.co.uk/wp-content/uploads/2019/12/envelop.jpg",
    description:
      "We advise the most suitable way of enclosing your project taking budget and timings into account.",
  },
  {
    id: "pickup",
    title: "Picking & Packing",
    icon: "pickup",
    image: "https://www.team365.co.uk/wp-content/uploads/2020/02/pick.jpg",
    description:
      "Whether we are picking and packing from existing client stock we hold or for a one-off project, each request is tailored to meet clients' needs and hand-packed with the utmost care to ensure the product arrives securely at the final destination.",
  },
];

function ServiceSvgIcon({ name }: { name: string }) {
  const common =
    "service-svg mt-[25px] h-9 w-9 text-white transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-0.5";

  switch (name) {
    case "printing":
      return (
        <svg viewBox="0 0 64 64" className={common} fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="16" y="1" width="32" height="19" />
          <polyline points="16,52 1,52 1,20 63,20 63,52 48,52" />
          <rect x="16" y="39" width="32" height="24" />
          <line x1="6" y1="27" x2="10" y2="27" />
          <line x1="12" y1="27" x2="16" y2="27" />
          <line x1="22" y1="47" x2="42" y2="47" />
          <line x1="22" y1="55" x2="42" y2="55" />
        </svg>
      );
    case "distribution":
      return (
        <svg viewBox="0 0 64 64" className={common} fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="bevel">
          <polygon points="1,30 63,1 23,41" />
          <polygon points="34,63 63,1 23,41" />
        </svg>
      );
    case "storage":
      return (
        <svg viewBox="0 0 64 64" className={common} fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="1" y="1" width="27" height="27" />
          <rect x="36" y="1" width="27" height="27" />
          <rect x="1" y="36" width="27" height="27" />
          <rect x="36" y="36" width="27" height="27" />
        </svg>
      );
    case "data":
      return (
        <svg viewBox="0 0 64 64" className={common} fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="5.3" y="4.6" width="18.4" height="19.8" transform="rotate(-45 14.5 14.5)" />
          <rect x="22.2" y="15.1" width="29.7" height="43.8" transform="rotate(-45 37 37)" />
          <line x1="7" y1="13" x2="16" y2="22" />
          <line x1="13" y1="7" x2="22" y2="16" />
        </svg>
      );
    case "project":
      return (
        <svg viewBox="0 0 64 64" className={common} fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21,40v5h22l0.001-5.107C49,36.195,53,29.564,53,22c0-11.598-9.402-21-21-21s-21,9.402-21,21C11,29.565,14.998,36.304,21,40z" />
          <line x1="28" y1="45" x2="25" y2="25" />
          <line x1="36" y1="45" x2="39" y2="25" />
          <polyline points="25,26 29,29 32,26 35,29 39,26" />
          <rect x="21" y="45" width="22" height="6" />
          <rect x="23" y="51" width="18" height="6" />
          <rect x="25" y="57" width="14" height="6" />
        </svg>
      );
    case "postage":
      return (
        <svg viewBox="0 0 64 64" className={common} fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="1" y="13" width="62" height="37" />
          <polyline points="1,13 32,33 63,13" />
        </svg>
      );
    case "enclosing":
      return (
        <svg viewBox="0 0 64 64" className={common} fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="44,18 54,18 54,63 10,63 10,18 20,18" />
          <path d="M22,24V11c0-5.523,4.477-10,10-10s10,4.477,10,10v13" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 64 64" className={common} fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="1" y="18" width="62" height="9" />
          <rect x="6" y="27" width="52" height="31" />
          <line x1="32" y1="58" x2="32" y2="18" />
          <path d="M32,18c0,0-13,0.101-13-9c0-7,13-4.068,13,2C32,17.067,32,18,32,18z" />
          <path d="M32,18c0,0,13,0.101,13-9c0-7-13-4.068-13,2C32,17.067,32,18,32,18z" />
        </svg>
      );
  }
}

export function ServicesSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="service" className="bg-[#231834] py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 md:px-8 lg:px-8">
        <h2 className="text-[32px] md:text-[46px] leading-[1.2] font-semibold text-white mb-4 md:mb-5">
          team365 have worked with, or managed projects for, over{" "}
          <strong>55% of the FTSE 100</strong> companies.
        </h2>
        <p className="text-[20px] md:text-[28px] leading-[1.68] text-[#d6d6e0] max-w-6xl">
          Our new business wins have always been via word-of-mouth which is proof
          that we deliver.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 md:mt-12">
          {SERVICES.map((s) => {
            return (
              <div
                key={s.id}
                className="service-card group relative rounded-lg border border-white/10 bg-transparent p-8 md:p-10 min-h-[280px] shadow-[0_10px_25px_rgba(0,0,0,0.25)] transition-all duration-300 hover:bg-[rgba(119,5,140,0.59)]"
              >
                <div className="flex flex-col items-center text-white text-center mb-6">
                  <ServiceSvgIcon name={s.icon} />
                  <h3 className="mt-4 font-normal text-[22px] leading-[1.2]">
                    {s.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setOpenId(s.id)}
                  className="block mx-auto text-[#e3afff] text-[15px] font-medium underline underline-offset-4"
                >
                  Learn more
                </button>
              </div>
            );
          })}
        </div>

        <p className="text-[22px] md:text-[32px] leading-[1.68] text-white mt-12 md:mt-14 mb-[70px]">
          In addition to financial projects, we also work with global brands
          where we store, pack and distribute marketing brochures and
          promotional materials worldwide.
        </p>
      </div>

      {/* Modals */}
      {SERVICES.map((s) => (
        <div
          key={s.id}
          className={cn(
            "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 transition-opacity",
            openId === s.id ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
          onClick={() => setOpenId(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby={`modal-title-${s.id}`}
        >
          <div
            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex">
              <div
                className="hidden md:block w-1/2 min-h-[200px] bg-cover bg-center"
                style={{ backgroundImage: `url(${s.image})` }}
              />
              <div className="flex-1 p-6 md:p-8">
                <div className="flex justify-between items-start gap-4">
                  <h3
                    id={`modal-title-${s.id}`}
                    className="text-2xl md:text-3xl font-semibold text-black"
                  >
                    {s.title}
                  </h3>
                  <button
                    type="button"
                    onClick={() => setOpenId(null)}
                    className="p-2 text-gray-500 hover:text-black"
                    aria-label="Close"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <p className="mt-4 text-base md:text-lg text-[#1a1a1a] leading-relaxed">
                  {s.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
