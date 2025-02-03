import type { Metadata } from "next";
import "./globals.css";
import {Gabarito} from 'next/font/google'
import Header from "@/components/Header";

const brand = Gabarito({weight: ["400","600", "700"], subsets: ["latin"]})

export const metadata: Metadata = {
  title: "anotherStep",
  description: "We create custom software solutions for your business.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      className={brand.className}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
