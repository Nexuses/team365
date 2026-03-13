"use client";

import React, { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion } from "framer-motion";

const TESTIMONIALS = [
  {
    quote:
      '"You guys are amazing!!!!!!!  If I had me as a client….\'I would fire me\'. Thanks so much for getting the extra quantities in German done and sent out today.   Still don\'t know how you did it, but doesn\'t really matter, now does it?"',
    author: "RS, FTSE100 Company",
  },
  {
    quote: '"I have never seen such amazing customer service.  We could learn a lot from you."',
    author: "DP, FTSE100 Company",
  },
  {
    quote:
      '"Please thank your team for their assistance and professionalism over the last week or so, it was very much appreciated"',
    author: "ET, FTSE100 Company",
  },
  {
    quote:
      '"Wow – thanks ever so much – the Interim Scrip Dividend is therefore officially complete! Thank you for your help throughout this entire process. You\'ve made the process completely painless for me, despite my accidentally shortening the timetable!  Off to sing your praises to the Powers That Be…"',
    author: "DH, FTSE100 Company",
  },
  {
    quote:
      '"I wanted to wait until all the books were in-hand with all the clients – but a belated thank you for all your work in distributing our brochure for us this year. From our perspective all appeared to go seamlessly and we are very grateful to you and your team for your support. We could not have worked with a better partner"',
    author: "AE, Design Agency",
  },
];

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  const goNext = useCallback(() => {
    setDirection(1);
    setIndex((i) => (i + 1) % TESTIMONIALS.length);
  }, []);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    const t = setInterval(() => {
      goNext();
    }, 5000);
    return () => clearInterval(t);
  }, [goNext]);

  const leftIndex = (index - 1 + TESTIMONIALS.length) % TESTIMONIALS.length;
  const centerIndex = index;
  const rightIndex = (index + 1) % TESTIMONIALS.length;

  return (
    <section id="testimonial" className="relative overflow-hidden">
      <div className="bg-[#231834] pb-22 md:pb-24 lg:pb-28 pt-10 md:pt-12">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid md:grid-cols-[1fr_1.35fr] gap-10 md:gap-14 items-start">
            <h2 className="text-[30px] md:text-[34px] leading-tight font-semibold text-white font-['Hind',sans-serif]">
              team365 ... We Deliver.
            </h2>
            <div className="!text-white font-['Hind',sans-serif] space-y-2">
              <p className="text-[21px] md:text-[24px] leading-snug">
                team365 is one of the leading mailing and distribution companies
                for corporate communication and luxury brand literature.
              </p>
              <p className="text-[21px] md:text-[24px] leading-snug mb-[80px]">
                As our testimonials demonstrate, we are renowned for our high
                levels of service and reporting.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f1eef5] pb-10 md:pb-12">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
          <div className="lg:hidden grid grid-cols-1 gap-4 -translate-y-[110px]">
            <motion.div
              key={`mobile-${index}`}
              initial={{ x: direction > 0 ? 36 : -36 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="grid grid-cols-1 gap-4"
            >
              {[leftIndex, centerIndex, rightIndex].map((cardIndex, cardPos) => (
                <article
                  key={`${TESTIMONIALS[cardIndex].author}-${cardPos}`}
                  className="bg-white rounded-xl shadow-xl h-[280px] md:h-[320px] overflow-hidden p-6 md:p-8"
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h5 className="text-[21px] md:text-[23px] leading-tight font-medium text-[#202020] font-['Hind',sans-serif]">
                      {TESTIMONIALS[cardIndex].author}
                    </h5>
                    <ul className="flex gap-1 text-[#9e5f98] pt-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <li key={i}>
                          <Star className="w-3.5 h-3.5 fill-current" />
                        </li>
                      ))}
                    </ul>
                  </div>

                  <blockquote className="mt-2 text-[18px] md:text-[19px] leading-relaxed text-[#8c8c97] italic font-['Hind',sans-serif]">
                    {TESTIMONIALS[cardIndex].quote}
                  </blockquote>
                </article>
              ))}
            </motion.div>
          </div>

          <div className="hidden lg:block overflow-hidden -translate-y-[110px]">
            <div className="flex items-stretch justify-center gap-[2%]">
              <motion.div
                key={`desktop-${index}`}
                initial={{ x: direction > 0 ? 48 : -48 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex items-stretch justify-center gap-[2%]"
              >
                {[leftIndex, centerIndex, rightIndex].map((cardIndex, cardPos) => (
                  <article
                    key={`${TESTIMONIALS[cardIndex].author}-desktop-${cardPos}`}
                    className="w-[48%] flex-none bg-white rounded-xl shadow-xl h-[320px] overflow-hidden p-8"
                  >
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h5 className="text-[24px] leading-tight font-medium text-[#202020] font-['Hind',sans-serif]">
                        {TESTIMONIALS[cardIndex].author}
                      </h5>
                      <ul className="flex gap-1 text-[#9e5f98] pt-1">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <li key={i}>
                            <Star className="w-3.5 h-3.5 fill-current" />
                          </li>
                        ))}
                      </ul>
                    </div>

                    <blockquote className="mt-2 text-[19px] leading-relaxed text-[#8c8c97] italic font-['Hind',sans-serif]">
                      {TESTIMONIALS[cardIndex].quote}
                    </blockquote>
                  </article>
                ))}
              </motion.div>
            </div>
          </div>

          <div className="-mt-20 md:-mt-24 flex items-center gap-4 text-[#1f1f1f]">
            <button
              type="button"
              onClick={goPrev}
              className="inline-flex items-center justify-center text-[#1f1f1f] hover:text-[#9e5f98] transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-8 h-8" strokeWidth={1.8} />
            </button>
            <button
              type="button"
              onClick={goNext}
              className="inline-flex items-center justify-center text-[#1f1f1f] hover:text-[#9e5f98] transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-8 h-8" strokeWidth={1.8} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
