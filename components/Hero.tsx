import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row items-center justify-between">
        <div className="text-center lg:text-left lg:max-w-[50%] mb-8 lg:mb-0">
          <h1 className="text-3xl lg:text-5xl font-bold text-green-800 mb-6">
            Transform your business with Smart Automation & Analytics
          </h1>
          <p className="text-lg text-green-700 mb-8">
            Launch, Automate, and Grow <br />
            Get a branded website, custom automation workflows, and real-time business analytics tailored to your needs.
          </p>
          <Link href="/book">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
              Book A Call
            </Button>
          </Link>
        </div>
        <div className="hidden lg:block lg:w-[45%]">
          <Image
            src="/placeholder.svg?height=400&width=400"
            alt="Business Automation and Analytics"
            width={400}
            height={400}
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </div>
  )
}

