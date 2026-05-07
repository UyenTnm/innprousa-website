import "./globals.css";

import { Plus_Jakarta_Sans } from "next/font/google";

import LayoutWrapper from "@/components/layout/LayoutWrapper";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: "InnPro - Plant Protein Solutions",
  description: "High-quality plant protein ingredients...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
