import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <div className="space-y-10 rounded bg-primary shadow-md">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Are you ready to take your business further?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white leading-8 text-muted-foreground">
            Claim Your Free Consultation
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" variant={"secondary"} className="w-96">
              Book a Call
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
