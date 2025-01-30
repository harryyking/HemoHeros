import { Button } from "@/components/ui/button"
import { Star, Check } from "lucide-react"

export default function TrustSection() {
  return (
    <section className="py-12 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Us?</h2>
        <div className="flex justify-center mb-6">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="text-yellow-400 w-8 h-8" fill="currentColor" />
          ))}
        </div>
        <div className="text-center mb-8">
          <p className="text-lg mb-2">"Saved 10+ hours weekly for clients"</p>
          <p className="text-lg mb-4">"Increased website leads by 50%"</p>
          <blockquote className="italic">
            "Working with this team has transformed our business operations. Highly recommended!"
          </blockquote>
        </div>
        <div className="flex items-center justify-center space-x-2 mb-8">
          <Check className="text-green-500" />
          <p className="font-semibold">Risk-Free: "Satisfaction or Free Work"</p>
        </div>
        <div className="text-center">
          <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white">
            Get Started Today
          </Button>
        </div>
      </div>
    </section>
  )
}

