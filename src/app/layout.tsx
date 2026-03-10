import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MBNECOM LLC | AI Automation & Business Solutions",
  description:
    "MBNECOM LLC provides cutting-edge AI automation services, custom app development, and intelligent business solutions to help companies scale and innovate.",
  keywords: [
    "AI automation",
    "business solutions",
    "app development",
    "artificial intelligence",
    "MBNECOM",
    "MBN LLC",
  ],
  openGraph: {
    title: "MBNECOM LLC | AI Automation & Business Solutions",
    description:
      "Cutting-edge AI automation services and intelligent business solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
