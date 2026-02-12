import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
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
  title: "Logos — Where Language Meets Action",
  description:
    "An intelligence platform tracking discourse that shapes reality. Energy policy, public health, scientific consensus, and democratic processes.",
  keywords: [
    "logos",
    "intelligence",
    "discourse analysis",
    "energy policy",
    "misinformation",
    "science policy",
    "provenance",
  ],
  openGraph: {
    title: "Logos — Where Language Meets Action",
    description:
      "An intelligence platform tracking discourse that shapes reality.",
    type: "website",
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
        {children}
        <Analytics />
      </body>
    </html>
  );
}
