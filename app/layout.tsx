import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

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
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />

        <main className="flex-1 w-full">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
