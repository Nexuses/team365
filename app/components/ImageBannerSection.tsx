"use client";

import React from "react";

const BANNER_IMAGE =
  "https://www.team365.co.uk/wp-content/uploads/2019/12/addition-team365-copy.jpg";

export function ImageBannerSection() {
  return (
    <section className="relative -mt-24 pb-8 md:pb-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="relative min-h-[280px] md:min-h-[350px] rounded-lg overflow-hidden shadow-xl">
          <img
            src={BANNER_IMAGE}
            alt="team365"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
