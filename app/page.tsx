"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-rose-100 to-rose-200 overflow-hidden">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="absolute object-cover opacity-10">
        <defs>
          <pattern id="pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="1" fill="#fda4af" opacity="0.3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#pattern)" />
      </svg>

      <div className="container mx-auto px-4 h-screen flex items-center">
        <div className="max-w-2xl z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
          >
            <h1 className="lg:text-6xl text-4xl font-bold text-rose-900 mb-6">
              Track Your Cycle, Embrace Your Wellness
            </h1>
            <p className="text-xl text-rose-700 mb-8">
              Simple, Private, and Insightful - Understand Your Body's Rhythms with Ease
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/tracker">
                <Button size="lg" className="bg-rose-600 hover:bg-rose-700 text-white">
                  Start Tracking Now
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg" className="border-rose-600 text-rose-600 hover:bg-rose-100">
                  Learn More
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
        <svg width="600" height="300" viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" className="opacity-80">
          <circle cx="300" cy="150" r="120" fill="none" stroke="#fda4af" strokeWidth="4" />
          <circle cx="300" cy="150" r="100" fill="none" stroke="#f43f5e" strokeWidth="4" strokeDasharray="628,628" strokeDashoffset="157" />
          <circle cx="300" cy="30" r="20" fill="#e11d48" />
          <circle cx="300" cy="270" r="20" fill="#be123c" />
          <circle cx="180" cy="150" r="20" fill="#9f1239" />
          <circle cx="420" cy="150" r="20" fill="#881337" />
        </svg>
      </div>
    </div>
  )
}