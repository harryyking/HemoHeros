import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex justify-center items-center">
      <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row items-center gap-8 justify-between">
        <div className="text-center lg:text-left lg:max-w-[50%] mb-8 lg:mb-0">
          <h1 className="text-3xl lg:text-5xl font-bold text-green-800 mb-6">
            Your Technical Partner
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
        <div className="hidden lg:block lg:w-[50%]">
          <Image
            src="https://utfs.io/f/Bilqtug6OUkPI6EM7h5tlwPKMk2gQWBGDXoyHV7Ap0nSc9dZ"
            alt="Business Automation and Analytics"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  )
}

