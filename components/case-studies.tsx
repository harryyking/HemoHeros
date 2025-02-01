"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { 
  ArrowRight, 
  Search
} from "lucide-react"

// Define types for better type checking
type Stat = {
    revenue?: string;
    conversion?: string;
    timeframe?: string;
    leads?: string;
    cost?: string;
    engagement?: string;
    footfall?: string;
  };
  
  type CaseStudy = {
    id: number;
    title: string;
    client: string;
    category: string;
    image: string;
    stats: Stat;
    tags: string[];
    description: string;
    website: string;
  };

// Sample case studies data
const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Kiosk - Online Shop Builder",
    client: "The Riri Shop",
    category: "E-commerce",
    image: "https://utfs.io/f/Bilqtug6OUkP6hrSE3UzYsHfjPlBRumNMgDoZJQGey8TUzSh",
    stats: {
      revenue: "+127%",
      conversion: "2.4x",
      timeframe: "2 months"
    },
    tags: ["Digital Marketing", "UX Design", "SEO"],
    description: "Built a robust system for online store creation for any ecommerce brand in Ghana.",
    website: "https://kiosk-jade.vercel.app"
  },
  {
    id: 2,
    title: "Rental Listings Platform",
    client: "Renters in Ghana",
    category: "Real Estate",
    image: "https://utfs.io/f/Bilqtug6OUkPUaw6rxXTkzX5wa1RyQEGdAnc6b2VfPM7ILgZ",
    stats: {
      leads: "+235%",
      cost: "-40%",
      timeframe: "3 months"
    },
    tags: ["Marketplace", "Real Estate", "Marketing Automation"],
    description: "Built a modern rental listings platform for the Ghanaian rental marketplace.",
    website: "https://www.rentcomghana.com"
  },
  {
    id: 3,
    title: "Global Inclusion Nextwork International",
    client: "GINI",
    category: "NGOs",
    image: "https://utfs.io/f/Bilqtug6OUkPCGVDIKcp5Ect3SQwXmI0ldhjfObD4T7nBWvo",
    stats: {
      engagement: "+187%",
      footfall: "+82%",
      timeframe: "2 weeks"
    },
    tags: ["Branding", "Social Media", "Local SEO"],
    description: "Built a professional website for a team on a mission to empower children with disability.",
    website: "https://www.globalinclusionnetworkintl.org"
  }
]

export default function CaseStudies() {
  return (
    <div className="min-h-screen">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div key={study.id} className="border rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img src={study.image} alt={study.title} className="w-full h-48 object-cover" />
                  <div className="absolute top-4 right-4 border border-white bg-black text-white px-3 py-1 rounded-full text-sm">
                    {study.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                  <p className="text-gray-600 mb-4">{study.description}</p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-4 bg-gray-100 p-4 rounded-lg">
                    {Object.entries(study.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-xl font-bold text-green-600">{value}</div>
                        <div className="text-sm text-gray-600 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.tags.map((tag) => (
                      <span key={tag} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link href={study.website} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full group">
                      View Case Study
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
