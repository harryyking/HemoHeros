"use client"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import { useState } from "react"

export default function VideoSalesSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold mb-6 text-center">
          See How We Transform Your Business
        </h2>
        <p className="text-xl mb-8 text-center text-gray-600">
          Watch a quick demo of how we solve your biggest business challenges
        </p>
        
        <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg mb-8 border">
          {!isVideoPlaying ? (
            <>
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: 'url("/api/placeholder/1200/675")'
                }}
              />
              <button 
                onClick={handleVideoPlay}
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-40 transition-all"
              >
                <div className="border border-white p-4 rounded-full shadow-lg">
                  <Play className="text-green-500" size={48} />
                </div>
              </button>
            </>
          ) : (
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=0"
              title="Business Transformation Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              className="absolute inset-0 w-full h-full"
              allowFullScreen
            />
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[
            "Automated workflows that save hours",
            "Professional websites that attract clients",
            "Real-time business analytics insights",
          ].map((item, index) => (
            <div key={index} className="flex items-start space-x-2">
              <Play className="text-green-500 mt-1" size={20} />
              <p>{item}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-green-500 hover:bg-green-600 text-white"
          >
            Schedule Your Free Strategy Call
          </Button>
        </div>
      </div>
    </section>
  )
}