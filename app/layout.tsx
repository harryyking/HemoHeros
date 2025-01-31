import type { Metadata } from "next";
import "./globals.css";
import {Gabarito} from 'next/font/google'
import Header from "@/components/Header";

const brand = Gabarito({weight: ["400","600", "700"], subsets: ["latin"]})

export const metadata: Metadata = {
  title: "HemoHeros",
  description: "Become a Blood & Genotype Expert in Minutes!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
      data-theme={"black"}
      className={brand.className}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
