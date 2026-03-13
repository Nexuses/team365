import { HeroSection } from "./components/HeroSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { ServicesSection } from "./components/ServicesSection";
import { WhatMakesUsSpecialSection } from "./components/WhatMakesUsSpecialSection";
import { QuoteCTASection } from "./components/QuoteCTASection";
import { FooterSection } from "./components/FooterSection";
import { ImageBannerSection } from "./components/ImageBannerSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div id="top" className="absolute top-0 left-0" aria-hidden />
      <HeroSection />
      <TestimonialsSection />
      <ServicesSection />
      <ImageBannerSection />
      <WhatMakesUsSpecialSection />
      <QuoteCTASection />
      <FooterSection />
    </div>
  );
}
