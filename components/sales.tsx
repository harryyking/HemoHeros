"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, Calendar, ArrowRight, MessageCircle } from "lucide-react"

const benefits = [
  "Custom Automated Business Website",
  "Advanced Analytics Dashboard",
  "30%+ Revenue Increase in 30 Days",
  "14-Day Delivery",
  "100% Money-Back Guarantee",
]

export default function BookingSection() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    const formData = { name, email, phone, message }

    try {
      const response = await fetch('api/post/', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        // Reset form fields on successful submission
        setName("")
        setEmail("")
        setPhone("")
        setMessage("")
      } else {
        console.error("Form submission failed")
      }
    } catch (error) {
      console.error("Error submitting form", error)
    }
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-primary">
            Book Your Free Call
          </h1>
          <p className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
            Discover How We Can Boost Your Business Growth
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">What You'll Get:</h2>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-800">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-4">Why Book a Call?</h3>
              <p className="text-gray-700 mb-4">
                Our expert team will analyze your business needs and provide a tailored strategy to boost your online
                presence and revenue. Don't miss this opportunity to transform your business!
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Schedule Your Free Consultation</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Your Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">Message (Optional)</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your business..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <Button type="submit" size="lg" className="w-full">
                Book Your Free Strategy Call
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>

            <div className="mt-4 flex items-center justify-center text-sm text-gray-600">
              <Calendar className="mr-2" size={16} />
              Available time slots will be sent to your email
            </div>

            <div className="mt-2 flex items-center justify-center text-sm text-gray-600">
              <MessageCircle className="mr-2" size={16} />
              Usually responds within 24 hours
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

