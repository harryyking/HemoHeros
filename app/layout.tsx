import type { Metadata } from "next";
import "./globals.css";
import {Inter} from 'next/font/google'

const brand = Inter({weight: ["100", "200", "300", "400", "500"], subsets: ["latin"]})

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
      data-theme="dracula"
      className={brand.className}
      >
        {children}
      </body>
    </html>
  );
}
