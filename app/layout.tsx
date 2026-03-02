import type { Metadata } from "next";
import { Manrope, Orbitron } from "next/font/google";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";
import PageTransition from "@/components/PageTransition";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800'],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: "LMSZONE — The Most Advanced Learning Ecosystem",
  description: "Empowering institutions and individuals with world-class virtual classroom tools, AI-powered analytics, and enterprise-grade security.",
  keywords: "LMS, online learning, virtual classroom, education platform, e-learning",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${manrope.variable} ${orbitron.variable} antialiased`}>
        <PageTransition>
          {children}
        </PageTransition>
        <CookieConsent />
      </body>
    </html>
  );
}
