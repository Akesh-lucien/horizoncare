import type { Metadata } from "next";
import { Crimson_Pro, Geist, Geist_Mono, Onest } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import { Lenis } from "@/lib/lenis/lenis-config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const crimSonPro = Crimson_Pro({
  variable: "--font-crimson-pro",
  subsets: ["latin"],
});

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Horizon Care",
  description:
    "Horizon Care: Your trusted partner in comprehensive health insurance coverage. We provide affordable plans, expert guidance, and dedicated support to protect your family's health and wellbeing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${crimSonPro.variable} ${onest.variable} antialiased`}
      >
        <Lenis options={{ lerp: 0.15 }} />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
