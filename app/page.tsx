import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Home() {

  return(
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="lg:text-6xl text-4xl font-bold">Track Your Cycle, Embrace Your Wellness</h1>
      <p className="py-6">
      Simple, Private, and Insightful - Understand Your Body's Rhythms with Ease
      </p>
      <Link href="/tracker">
      <Button size={"lg"}>Track Now</Button>
      </Link>
    </div>
  </div>
</div>
  )

}