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
    <div className="min-h-screen flex flex-col pt-32 lg:pt-40 bg-white">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-[1000px] flex-grow pb-24">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-10 !text-[#2f1d3d] font-hind">
          Site Map
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-[17px]">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold !text-[#2f1d3d] mb-6 pb-2 border-b border-gray-100">Pages</h2>
            <ul className="space-y-4">
              {pages.map((page) => (
                <li key={page.name}>
                  <Link 
                    href={page.href}
                    className="!text-gray-600 hover:text-[#8d4f92] font-medium text-lg transition-colors flex items-center"
                  >
                    <span className="w-2 h-2 rounded-full !bg-gray-300 mr-3"></span>
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-semibold !text-[#2f1d3d] mb-6 pb-2 border-b border-gray-100">Home Sections</h2>
            <ul className="space-y-4">
              {sections.map((section) => (
                <li key={section.name}>
                  <Link 
                    href={section.href}
                    className="!text-gray-600 hover:text-[#8d4f92] font-medium text-lg transition-colors flex items-center"
                  >
                    <span className="w-2 h-2 rounded-full !bg-gray-300 mr-3"></span>
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
