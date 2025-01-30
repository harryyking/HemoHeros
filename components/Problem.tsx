import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function Problem() {
  return (
    <section className="py-12 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">The Problem & Your Solution</h2>
        <p className="text-xl mb-8 text-center">
          Struggling with manual tasks? No website? Can't track business growth?
        </p>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[
            "We automate tasks & save you hours",
            "We build modern websites to attract clients",
            "We provide real-time analytics insights",
          ].map((item, index) => (
            <div key={index} className="flex items-start space-x-2">
              <CheckCircle className="text-green-500 mt-1" />
              <p>{item}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white">
            Let's Fix This – Book a Free Call
          </Button>
        </div>
      </div>
    </section>
  )
}

