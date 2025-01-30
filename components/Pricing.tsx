"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false)

  const plans = [
    {
      name: "Starter",
      price: isAnnual ? 99 : 9,
      features: ["1 user", "10 projects", "5GB storage", "Basic support"],
    },
    {
      name: "Pro",
      price: isAnnual ? 199 : 19,
      features: ["5 users", "50 projects", "100GB storage", "Priority support", "Advanced analytics"],
    },
    {
      name: "Enterprise",
      price: isAnnual ? 299 : 29,
      features: ["Unlimited users", "Unlimited projects", "1TB storage", "24/7 support", "Custom integrations"],
    },
  ]

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Pricing</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Pricing plans for teams of&nbsp;all&nbsp;sizes
          </p>
        </div>
        <div className="mt-6 flex justify-center">
          <div className="flex items-center gap-3">
            <span>Monthly</span>
            <Switch checked={isAnnual} onCheckedChange={setIsAnnual} />
            <span>Annual</span>
          </div>
        </div>
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {plans.map((plan) => (
            <Card key={plan.name}>
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>
                  <span className="text-3xl font-bold">${plan.price}</span>
                  {isAnnual ? "/year" : "/month"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside">
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Get Started</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
