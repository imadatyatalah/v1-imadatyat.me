import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Footer from "@/components/footer";
import Header from "@/components/header";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://imadatyat.me"),
  title: {
    default: "Imad Atyat-Allah",
    template: "%s | Imad Atyat-Allah",
  },
  description:
    "Self-taught Full Stack JavaScript/TypeScript developer with passion for Front-End.",
  openGraph: {
    title: "Imad Atyat-Allah",
    description:
      "Self-taught Full Stack JavaScript/TypeScript developer with passion for Front-End.",
    url: "https://imadatyat.me",
    siteName: "Imad Atyat-Allah",
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Imad Atyat-Allah",
    card: "summary_large_image",
  },
  verification: {
    google: "J3GXVYPGqR-UnaYIC2CVLE1MJUbW3mBbLnYtNfJZwNU",
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#090117]  text-[#dedede]`}>
        <Header />

        {children}

        <Footer />

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
};

export default RootLayout;
