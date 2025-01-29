"use client"

import type React from "react"
import { useState } from "react"
import { addDays } from "date-fns"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import Icon from "@/public/icon.png"
import QuickCheckDashboard from "@/components/QuickDashboard"

export default function Home() {
  const [lastPeriodStart, setLastPeriodStart] = useState<Date | undefined>(addDays(new Date(), -28))
  const [cycleLength, setCycleLength] = useState(28)
  const [showDashboard, setShowDashboard] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowDashboard(true)
  }

  return (
    <div className="container mx-auto p-4 min-h-screen">
      <div className=" mb-8 flex gap-2 items-center justify-center">
        <Image
        width={40}
        height={40}
        alt="logo"
        src={Icon}
        />
       <h1 className="text-lg font-semibold">menstrualmind</h1> 
       </div>


      {!showDashboard ? (
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle>Enter Your Cycle Information</CardTitle>
          </CardHeader>
          <CardContent className="mx-auto w-full">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2 w-full">
                <Label htmlFor="lastPeriodStart">Last Period Start Date</Label>
                <Calendar
                  mode="single"
                  selected={lastPeriodStart}
                  onSelect={setLastPeriodStart}
                  className="rounded-md border w-full"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cycleLength">Average Cycle Length (days)</Label>
                <Input
                  id="cycleLength"
                  type="number"
                  value={cycleLength}
                  onChange={(e) => setCycleLength(Number.parseInt(e.target.value))}
                  min={21}
                  max={35}
                />
              </div>
              <Button type="submit" className="w-full">
                View Dashboard
              </Button>
            </form>
          </CardContent>
        </Card>
      ) : (
        <>
          <QuickCheckDashboard lastPeriodStart={lastPeriodStart!} cycleLength={cycleLength} />
          <div className="mt-8 text-center">
            <Button onClick={() => setShowDashboard(false)}>Update Cycle Information</Button>
          </div>
        </>
      )}
    </div>
  )
}


