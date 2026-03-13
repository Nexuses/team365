"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const HERO_VIDEO = "https://nexuses.s3.us-east-2.amazonaws.com/team365_720P.mp4";

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#231834]">
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
       
        <div
          className="absolute inset-0 z-10"
          style={{ background: "rgba(80, 3, 94, 0.66)" }}
        />
      </div>

      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-4xl">
          <h1
            className={cn(
              "text-5xl sm:text-6xl md:text-7xl lg:text-[125px] font-semibold leading-[1.1] text-white",
              "font-['Hind',sans-serif]"
            )}
          >
            We Deliver.
          </h1>
          <p
            className={cn(
              "mt-2 text-xl sm:text-2xl md:text-[26px] leading-snug text-white max-w-2xl",
              "font-['Hind',sans-serif]"
            )}
          >
            From corporate communication to luxury brand literature.
          </p>
          <a
            href="#service"
            className={cn(
              "inline-flex items-center gap-2 mt-8 py-3 px-6 text-white text-base font-bold tracking-[0.2em] uppercase",
              "border border-white hover:bg-white/10 transition-colors duration-300",
              "font-['Hind',sans-serif]"
            )}
          >
            <span>Learn More</span>
            <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
          </a>
        </div>
      </div>
    </section>
  );
}
