"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { 
  CheckCircle, 
  XCircle, 
  Clock, 
  BarChart, 
  Shield, 
  Calendar,
  ArrowRight,
  MessageCircle
} from "lucide-react"

const ResultsStats = [
  {
    stat: "30%+",
    label: "Revenue Increase",
    timeframe: "First 30 Days",
    icon: BarChart
  },
  {
    stat: "10+",
    label: "Hours Saved Weekly",
    timeframe: "From Day One",
    icon: Clock
  },
  {
    stat: "2X",
    label: "Customer Conversion",
    timeframe: "Guaranteed",
    icon: CheckCircle
  }
]

const PastResults = [
  {
    client: "E-commerce Store",
    result: "42% increase in sales",
    timeframe: "3 months"
  },
  {
    client: "Retail Shop",
    result: "50% more inquiries",
    timeframe: "2 months"
  },
  {
    client: "Logistics Company",
    result: "8+ hours saved weekly",
    timeframe: "1 month"
  }
]

export default function SalesSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  
  const handleSubmit = (event: any) => {
    event.preventDefault();
    // Here you would typically send this data to a backend or use a form submission service
    console.log({ name, email, phone, message });
    // Reset form after submission
    setName(''); setEmail(''); setPhone(''); setMessage('');
  }

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      {/* Main Headline */}
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Get a Custom Automated Business Website & Analytics Dashboard
          </h2>
          <p className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
            Increase Your Revenue by 30%+ in Just 30 Days – or You Don't Pay!
          </p>
        </div>

        {/* Pain Points */}
        <div className="max-w-3xl mx-auto mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Are You Struggling with...?
          </h3>
          <div className="space-y-4">
            {[
              "Losing customers because your business isn't online",
              "Manually tracking sales and orders, wasting hours every week",
              "Not knowing which products or services bring in the most profit"
            ].map((point, index) => (
              <div key={index} className="flex items-center bg-red-50 p-4 rounded-lg">
                <XCircle className="text-red-500 mr-3 flex-shrink-0" />
                <p className="text-gray-800">{point}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Solution */}
        <div className="max-w-3xl mx-auto mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Here's What You'll Get
          </h3>
          <div className="space-y-4">
            {[
              {
                title: "High-Performing Website",
                desc: "A professional brand website that brings in more customers & integrates mobile money payments"
              },
              {
                title: "Business Automation",
                desc: "Eliminate manual work by automating orders, invoices, and customer interactions"
              },
              {
                title: "Advanced Analytics Dashboard",
                desc: "Track your sales, customers, and trends in real-time to make data-driven decisions"
              },
              {
                title: "Mobile-Friendly & SEO-Optimized",
                desc: "Your business will appear on Google when people search for your services"
              }
            ].map((solution, index) => (
              <div key={index} className="flex items-start bg-green-50 p-4 rounded-lg">
                <CheckCircle className="text-green-500 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">{solution.title}</h4>
                  <p className="text-gray-700">{solution.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Results Stats */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Quantifiable Results You Can Expect
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {ResultsStats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.stat}
                </div>
                <div className="text-lg font-semibold text-gray-800 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.timeframe}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline & Guarantee */}
        <div className="max-w-3xl mx-auto mb-16 grid md:grid-cols-2 gap-8">
          <div className="bg-blue-50 p-6 rounded-xl">
            <Calendar className="w-12 h-12 text-blue-600 mb-4" />
            <h4 className="text-xl font-bold mb-2">14-Day Delivery</h4>
            <p className="text-gray-700">
              Get your fully functional website and automation within 2 weeks - start seeing results immediately!
            </p>
          </div>
          <div className="bg-purple-50 p-6 rounded-xl">
            <Shield className="w-12 h-12 text-purple-600 mb-4" />
            <h4 className="text-xl font-bold mb-2">100% Money-Back Guarantee</h4>
            <p className="text-gray-700">
              Don't see results within 30 days? Get a full refund - no questions asked!
            </p>
          </div>
        </div>

        {/* Past Results */}
        <div className="max-w-3xl mx-auto mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Proven Results for Businesses Like Yours
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {PastResults.map((result, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="font-semibold text-gray-900 mb-2">
                  {result.client}
                </div>
                <div className="text-green-600 font-bold mb-1">
                  {result.result}
                </div>
                <div className="text-sm text-gray-600">
                  in {result.timeframe}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section with Form */}
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-green-500 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">
              Limited Time Offer - Only 3 Spots Available!
            </h3>
            <p className="text-gray-300 mb-6">
              Book your free consultation now to secure your spot and start growing your business!
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input 
                  id="name" 
                  placeholder="Your Name" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  className="bg-white text-gray-900"
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
                  className="bg-white text-gray-900"
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
                  className="bg-white text-gray-900"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your business..." 
                  value={message} 
                  onChange={(e) => setMessage(e.target.value)} 
                  className="bg-white text-gray-900"
                />
              </div>
              <Button 
                type="submit"
                size="lg"
                className="bg-white text-green-600 hover:bg-green-100 group"
              >
                Book Your Free Strategy Call
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>

            <div className="mt-4 flex items-center justify-center text-sm text-gray-300">
              <MessageCircle className="mr-2" size={16} />
              Usually responds within 24 hours
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}