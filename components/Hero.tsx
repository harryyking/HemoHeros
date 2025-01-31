"use client";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="relative h-[40rem] w-full flex items-center justify-center overflow-hidden rounded-md bg-gradient-to-br from-blue-500 to-indigo-700">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-25"></div>

      {/* Content Container */}
      <div className="z-10 flex flex-col items-center justify-center text-center text-white p-4">
        {/* Tagline */}
        <p className="mb-4 px-6 py-3 border border-blue-200 bg-blue-100 text-blue-800 rounded-full backdrop-blur-sm">
          Get Set Up in Days, Not Months. Let's Build Your Digital Backend!
        </p>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-tight max-w-4xl">
          Transform Your Business with Smart Automation & Analytics
        </h1>

        {/* Description */}
        <p className="mt-6 mb-8 text-lg md:text-xl max-w-xl">
          Launch, Automate, and Grow. 
          Get a branded website, custom automation workflows, and real-time business analytics tailored to your needs. Streamline operations, boost efficiency, and scale effortlessly.
        </p>

        {/* Call to Action */}
        <Button 
          size="lg" 
          className="bg-white hover:bg-blue-200 text-blue-600 hover:text-blue-800 transition-colors duration-200"
        >
          Book A Call
        </Button>
      </div>
    </div>
  );
}