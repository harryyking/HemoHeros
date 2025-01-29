"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import Cycle from '@/public/cycle.svg'
import Background from "@/public/background.svg"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-rose-100 to-rose-200 flex items-center justify-center overflow-hidden">
      <Image src={Background} alt="Background Pattern" fill className="object-cover opacity-10" />
      <div className="hero-content text-center z-10">
        <div className="max-w-4xl px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="lg:text-6xl text-4xl font-bold text-rose-900 mb-6">
              Track Your Cycle, Embrace Your Wellness
            </h1>
            <p className="text-xl text-rose-700 mb-8">
              Simple, Private, and Insightful - Understand Your Body's Rhythms with Ease
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
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
        <Image src={Cycle} alt="Cycle Illustration" width={600} height={300} className="opacity-80" />
      </div>
    </div>
  )
}

