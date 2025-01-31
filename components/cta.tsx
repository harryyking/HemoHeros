import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Are you ready to take your business further?.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Claim Your Free Consultation
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg">
              Book a Call
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
