import { CheckCircle, Calendar, ArrowRight, MessageCircle } from "lucide-react"
import CalendlyWidget from "./calendly"

const benefits = [
  "Custom Automated Business Website",
  "Advanced Analytics Dashboard",
  "30%+ Revenue Increase in 30 Days",
  "14-Day Delivery",
  "100% Money-Back Guarantee",
]

export default function BookingSection() {

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

          <div className="bg-white p-8 rounded-xl shadow-lg overflow-hidden">
            <h2 className="text-2xl font-bold mb-6">Schedule Your Free Consultation</h2>
            <CalendlyWidget/>


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

