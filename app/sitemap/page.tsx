import Link from "next/link";
import { FooterSection } from "../components/FooterSection";

export default function SiteMap() {
  const sections = [
    { name: "Top", href: "/#top" },
    { name: "Testimonials", href: "/#testimonials" },
    { name: "Services", href: "/#services" },
    { name: "Our Approach", href: "/#approach" },
    { name: "Quote", href: "/#quote" },
    { name: "Contact Us", href: "/#contact" },
  ];

  const pages = [
    { name: "Home", href: "/" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Site Map", href: "/sitemap" },
  ];

  return (
    <div className="min-h-screen flex flex-col pt-32 lg:pt-40">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-[1280px] flex-grow pb-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-[#2f1d3d] font-hind">
          Site Map
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-[16px]">
          <div>
            <h2 className="text-2xl font-semibold text-[#8d4f92] mb-6">Pages</h2>
            <ul className="space-y-4">
              {pages.map((page) => (
                <li key={page.name}>
                  <Link 
                    href={page.href}
                    className="text-[#555] hover:text-[#8d4f92] font-medium text-lg transition-colors"
                  >
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#8d4f92] mb-6">Home Sections</h2>
            <ul className="space-y-4">
              {sections.map((section) => (
                <li key={section.name}>
                  <Link 
                    href={section.href}
                    className="text-[#555] hover:text-[#8d4f92] font-medium text-lg transition-colors"
                  >
                    {section.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <FooterSection />
    </div>
  );
}
