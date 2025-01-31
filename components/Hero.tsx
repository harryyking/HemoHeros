"use client"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <div className="h-[40rem] w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
      <p className="border rounded-xl p-2 border-blue-200 bg-blue-100">Get Set Up in Days, Not Months. Let’s Build Your Digital Backend!</p>
      <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
        Transform your Business with smart automation & analytics
      </h1>
      <div className="flex flex-col items-center justify-center mt-4 text-white">
        <p className="text-xl text-center mb-4">Launch, Automate, and Grow <br /> 
        Get a branded website, custom automation workflows, and real-time business analytics tailored to your needs. Streamline operations, 
        boost efficiency, and scale effortlessly.</p>

      <Button size="lg" className="bg-blue-500 text-white">Book A Call</Button>
      </div>
    </div>
  )
}
