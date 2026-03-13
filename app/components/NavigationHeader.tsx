"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const LOGO_URL =
  "https://nexuses.s3.us-east-2.amazonaws.com/logo-nobg-1.png";
const PRIMARY_COLOR = "#9e5f98";
const TEXT_COLOR = "#171717";

interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#top", isActive: true },
  { label: "Testimonials", href: "#testimonial" },
  { label: "Services", href: "#service" },
  { label: "Contact Us", href: "#contact" },
];

export const NavigationHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "relative w-full z-50 transition-all duration-300 bg-white mt-[20px]",
        scrolled ? "py-2" : "py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex-shrink-0 pt-[20px] -mt-[10px]">
            <a href="/" className="block">
              <img
                src={LOGO_URL}
                alt="Team 365 Logo"
                className="h-11 md:h-14 w-auto object-contain transition-transform duration-300 hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://via.placeholder.com/276x56?text=Team365";
                }}
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="relative group px-4 py-2">
                <a
                  href={item.href}
                  className={cn(
                    "text-[21px] font-medium transition-colors duration-300 relative z-10",
                    item.isActive
                      ? "text-[#171717]"
                      : "text-[#171717] hover:text-[#9e5f98]"
                  )}
                >
                  <span className="relative">
                    {item.label}
                    <span
                      className={cn(
                        "absolute -bottom-1 left-0 w-full h-[1.4px] bg-[#9e5f98] origin-left transition-transform duration-300",
                        item.isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      )}
                    />
                  </span>
                </a>
              </div>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-[#171717] hover:text-[#9e5f98] focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 space-y-2">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "block px-4 py-3 text-lg font-medium transition-colors duration-200 rounded-md",
                    item.isActive
                      ? "text-white bg-[#9e5f98]"
                      : "text-[#171717] hover:bg-gray-50 hover:text-[#9e5f98]"
                  )}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
