import Header from "@/components/header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Imad Atyat-Allah",
  description:
    "Self-taught Full Stack JavaScript/TypeScript developer with passion for Front-End.",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#090117]  text-[#dedede]`}>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
