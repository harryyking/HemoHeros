import { Button } from "@/components/ui/button"
import { Monitor, Globe, BarChart } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: <Monitor className="w-12 h-12 mb-4" />,
      title: "Business Automation",
      description: "Automate repetitive work",
    },
    {
      icon: <Globe className="w-12 h-12 mb-4" />,
      title: "Website Dev",
      description: "Get a sleek, professional website",
    },
    {
      icon: <BarChart className="w-12 h-12 mb-4" />,
      title: "Analytics",
      description: "Understand & grow with data-driven insights",
    },
  ]

  return (
    <section id="services" className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">What We Offer</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {services.map((service, index) => (
            <div key={index} className="text-center">
              {service.icon}
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button size="lg">See How It Works</Button>
        </div>
      </div>
    </section>
  )
}

