"use client";

import React from "react";
import { Phone, MapPin, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * ContactInfoHeader Component
 * A high-fidelity reproduction of the provided header section.
 * Features: Responsive layout, Lucide icons, and matching color palette.
 */

interface ContactItemProps {
  icon: React.ElementType;
  text: string;
  href?: string;
  className?: string;
  align?: "left" | "right";
}

const ContactItem = ({
  icon: Icon,
  text,
  href = "#",
  className,
  align = "left",
}: ContactItemProps) => {
  const isRightAlign = align === "right";

  return (
    <div
      className={cn(
        "flex items-center gap-4 transition-all duration-300",
        isRightAlign ? "flex-row" : "flex-row",
        className
      )}
    >
      <div className="flex items-center justify-center min-w-[20px] h-[20px]">
        <Icon
          size={20}
          className="text-[#9E5F98] transition-transform duration-300 hover:scale-110"
          strokeWidth={2.5}
        />
      </div>
      <a
        href={href}
        onClick={(e) => e.preventDefault()}
        className={cn(
          "text-[17px] font-medium text-[#282828] hover:text-[#9E5F98] transition-colors duration-300 whitespace-nowrap",
          "font-['Hind',sans-serif]"
        )}
      >
        {text}
      </a>
    </div>
  );
};

export const ContactInfoHeader = () => {
  return (
    <section className="w-full bg-[#F9F8FC] py-3 md:py-2 border-b border-gray-100">
      <div className="max-w-[1170px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-0">
          {/* Left Column: Phone and Address */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 flex-[2]">
            <ContactItem icon={Phone} text="+ 44 (0)20 7474 3679" />

            <div className="hidden lg:block w-[1px] h-4 bg-gray-300 mx-2" />

            <ContactItem
              icon={MapPin}
              text="Unit 80, London Industrial Park, Roding Rd, London E6 6LS"
              className="hidden sm:flex"
            />
          </div>

          {/* Right Column: Email */}
          <div className="flex justify-start md:justify-end flex-1">
            <ContactItem
              icon={Mail}
              text="af@team365.co.uk"
              className="md:flex-row-reverse"
            />
          </div>
        </div>
      </div>

      {/* Mobile-only view for the address if hidden above */}
      <div className="sm:hidden px-4 pt-2 border-t border-gray-100 mt-2">
        <ContactItem
          icon={MapPin}
          text="London Industrial Park, E6 6LS"
          className="text-sm"
        />
      </div>
    </section>
  );
};
