import type { Metadata } from "next";
import "./globals.css";
import {Gabarito} from 'next/font/google'

const brand = Gabarito({weight: ["400","500","600","700"], subsets: ["latin"]})

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
    <html lang="en" >
      <body
      data-theme="emerald"
      className={brand.className}
      >
        {children}
      </body>
    </html>
  );
}
