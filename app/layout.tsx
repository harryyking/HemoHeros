import type { Metadata } from "next";
import "./globals.css";
import {Roboto} from 'next/font/google'

const brand = Roboto({weight: ["100","400", "500", "700"], subsets: ["latin"]})

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
      >
        {children}
      </body>
    </html>
  );
}
