import { Button } from "@/components/ui/button"
import { Phone, Mail } from "lucide-react"

export default function FinalCTA() {
  return (
    <section className="py-12 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Are you ready to take your business further?</h2>
        <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white mb-6">
          Claim Your Free Consultation
        </Button>
        <div className="flex justify-center space-x-4">
          <a href="#" className="flex items-center">
            <Phone className="mr-2" /> WhatsApp
          </a>
          <a href="#" className="flex items-center">
            <Mail className="mr-2" /> Email
          </a>
        </div>
      </div>
    </section>
  )
}

