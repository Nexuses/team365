import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ContactInfoHeader } from "./components/ContactInfoHeader";
import { NavigationHeader } from "./components/NavigationHeader";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "team365 - Managing the distribution and mailing for corporate",
  description:
    "team365 is one of the leading mailing and distribution companies for shareholder and corporate communications.",
  icons: {
    icon: "https://nexuses.s3.us-east-2.amazonaws.com/logo-nobg-1.png",
    shortcut: "https://nexuses.s3.us-east-2.amazonaws.com/logo-nobg-1.png",
    apple: "https://nexuses.s3.us-east-2.amazonaws.com/logo-nobg-1.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ContactInfoHeader />
        <NavigationHeader />
        <main className="pt-4 md:pt-6">{children}</main>
      </body>
    </html>
  );
}
