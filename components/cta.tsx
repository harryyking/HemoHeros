import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight, Clock, Shield } from "lucide-react"
import Link from "next/link"


export default function CTA() {
  return (
    <div className="relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-800 to-emerald-500 opacity-90" />
      
      <div className="relative mx-auto max-w-5xl p-8 md:p-12">
        {/* Main Content */}
        <div className="text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Ready to Transform Your Business?
          </h2>

          {/* Feature Badges */}
          <div className="flex flex-wrap justify-center gap-4 my-8">
            {[
              { icon: Clock, text: "30-Minute Deep Dive" },
              { icon: Calendar, text: "Same-Week Availability" },
              { icon: Shield, text: "No Obligation" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center bg-green-500/10 backdrop-blur-sm rounded-full px-4 py-2 text-white border border-white/10"
              >
                <item.icon className="w-5 h-5 mr-2" />
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex flex-col items-center space-y-4">
            <Link href="/book">
            
            <Button 
              size="lg" 
              variant="secondary"
              className="group bg-white hover:bg-white/90 text-green-700 px-8 py-6 text-lg font-semibold transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Book Your Free Strategy Call
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            </Link>
            <p className="text-white/80 text-sm">
              Limited to 3 Spots This Week | No Credit Card Required
            </p>
          </div>

          {/* What You'll Get */}
          <div className="mt-8 grid md:grid-cols-3 gap-4 text-left">
            {[
              "Brand Website",
              "Custom workflows & automation",
              "Analytical Tools"
            ].map((benefit, index) => (
              <div 
                key={index}
                className="flex items-center bg-green-500/10 backdrop-blur-sm rounded-lg p-4 border border-white/10"
              >
                <div className="h-2 w-2 rounded-full bg-emerald-400 mr-3" />
                <p className="text-white text-sm">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}