"use client";

import React from "react";

const VIDEO_SRC =
  "https://ik.imagekit.io/nexuses/video/Cars_on_the_Road_Night_time_lapse_-_No_Copyright_Video_-__4K_CrlAU42nn.mp4";

export function WhatMakesUsSpecialSection() {
  return (
    <section className="relative min-h-[400px] md:min-h-[450px] flex items-center justify-center overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover hidden md:block"
        >
          <source src={VIDEO_SRC} type="video/mp4" />
        </video>
        <div
          className="absolute inset-0 bg-cover bg-center md:hidden"
          style={{
            backgroundImage: `url(https://img.youtube.com/vi/nyVo-nEAnzc/maxresdefault.jpg)`,
          }}
        />
        <div
          className="absolute inset-0 z-10"
          style={{ background: "rgba(42, 0, 50, 0.72)" }}
        />
      </div>

      <div className="relative z-20 container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 md:mb-8">
          What Make Us Special?
        </h2>
        <p className="text-base md:text-lg text-white max-w-3xl mx-auto leading-relaxed">
          Our team cares. We manage the process, anticipate pitfalls and
          constantly feed back progress to ensure the successful completion of
          your mailing and distribution project. This is the key to our
          continued success and growth. We look at each project individually and
          work closely with you to reach a bespoke solution that is reliable
          and achieves your goals.
        </p>
      </div>
    </section>
  );
}
