"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  ArrowRight, 
  Search, 
  BarChart, 
  Rocket, 
  DollarSign,
  ExternalLink
} from "lucide-react"
import Image from "next/image"


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
  };



// Sample case studies data
const caseStudies = [
  {
    id: 1,
    title: "Kiosk - Online Shop Builder",
    client: "The Riri Shop",
    category: "E-commerce",
    image: "/api/placeholder/600/400",
    stats: {
      revenue: "+127%",
      conversion: "2.4x",
      timeframe: "2 months"
    },
    tags: ["Digital Marketing", "UX Design", "SEO"],
    description: "Built a robust system for online store creation for any ecommerce brand in Ghana."
  },
  {
    id: 2,
    title: "Rental Listings Platform",
    client: "Renters in Ghana",
    category: "Real Estate",
    image: "/api/placeholder/600/400",
    stats: {
      leads: "+235%",
      cost: "-40%",
      timeframe: "3 months"
    },
    tags: ["Marketplace", "Real Estate", "Marketing Automation"],
    description: "Built a modern rental listings platform for the Ghanaian rental marketplace."
  },
  {
    id: 3,
    title: "Global Inclusion Nextwork International",
    client: "GINI",
    category: "NGOs",
    image: "/api/placeholder/600/400",
    stats: {
      engagement: "+187%",
      footfall: "+82%",
      timeframe: "2 weeks"
    },
    tags: ["Branding", "Social Media", "Local SEO"],
    description: "Built a professional website for a team on a mission to empower children with disability."
  }
]

// Type for categories
type Category = 'All' | CaseStudy['category'];

// Function to get all unique categories from case studies with 'All' as the first option
const getCategories = (studies: CaseStudy[]): Category[] => {
  return ['All', ...new Set(studies.map(study => study.category))];
};

export default function CaseStudies() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

// Generate categories based on current data
const categories = getCategories(caseStudies);

const filteredStudies = caseStudies.filter(study => {
  const matchesCategory = selectedCategory === "All" || study.category === selectedCategory;
  const lowerQuery = searchQuery.toLowerCase();
  const matchesSearch = 
    study.title.toLowerCase().includes(lowerQuery) ||
    study.description.toLowerCase().includes(lowerQuery) ||
    study.tags.some(tag => tag.toLowerCase().includes(lowerQuery));
  return matchesCategory && matchesSearch;
});

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden border-b flex items-center justify between max-w-7xl">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary">
            Our Success Stories
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
            Discover how we've helped businesses like yours achieve exceptional results through innovative digital solutions.
          </p>
        </div>

        <div className="lg:block hidden">
          <Image 
          src="https://utfs.io/f/Bilqtug6OUkPEPwNatOCIDWBNeqZUyTK951RAP72txLYXzdh"
          alt="success logo"
          width={200}
          height={200}
          />
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="whitespace-nowrap"
                >
                  {category}
                </Button>
              ))}
            </div>
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input
                type="text"
                placeholder="Search case studies..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStudies.map((study) => (
              <div key={study.id} className="border rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 border border-white bg-black text-white px-3 py-1 rounded-full text-sm">
                    {study.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                  <p className="text-gray-600 mb-4">{study.description}</p>
                  
                  {/* Key Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-4 bg-gray-100 p-4 rounded-lg">
                    {Object.entries(study.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-xl font-bold text-green-600">{value}</div>
                        <div className="text-sm text-gray-600 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Button className="w-full group">
                    View Case Study
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className=" py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help your business achieve exceptional results.
          </p>
          <Button size="lg">
            Schedule a Free Strategy Call
          </Button>
        </div>
      </section>
    </div>
  )
}