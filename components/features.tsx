"use client"

import { HoverEffect } from "./ui/card-hover-effect"
import { Smartphone, Zap, Search, Sparkles, HeadphonesIcon, RefreshCw } from "lucide-react"

export default function Features() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <h2 className="text-4xl font-bold text-center mb-8 mt-16">Our Features</h2>
      <HoverEffect
        items={[
          {
            title: "Responsive Design",
            description: "Our websites look great on any device, from mobile to desktop.",
            icon: <Smartphone className="w-6 h-6" />,
          },
          {
            title: "Fast Performance",
            description: "Lightning-fast load times for an optimal user experience.",
            icon: <Zap className="w-6 h-6" />,
          },
          {
            title: "SEO Optimized",
            description: "Built-in SEO features to help your site rank higher in search results.",
            icon: <Search className="w-6 h-6" />,
          },
          {
            title: "Custom Animations",
            description: "Engage your visitors with smooth, custom animations.",
            icon: <Sparkles className="w-6 h-6" />,
          },
          {
            title: "24/7 Support",
            description: "Round-the-clock support to assist you whenever you need help.",
            icon: <HeadphonesIcon className="w-6 h-6" />,
          },
          {
            title: "Regular Updates",
            description: "Stay current with regular updates and new features.",
            icon: <RefreshCw className="w-6 h-6" />,
          },
        ]}
      />
    </div>
  )
}

