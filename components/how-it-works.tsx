import { Button } from "@/components/ui/button"

export default function HowItWorks() {
  const steps = [
    { number: "1️⃣", description: "Book a free call" },
    { number: "2️⃣", description: "We build your automation/website" },
    { number: "3️⃣", description: "You see results – guaranteed!" },
  ]

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">3 Simple Steps to Transform Your Business</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-4">{step.number}</div>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white">
            Schedule a Free Consultation
          </Button>
        </div>
      </div>
    </section>
  )
}

