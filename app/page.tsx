"use client"

import type React from "react"
import { useState } from "react"
import { addDays } from "date-fns"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
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
      <h1 className="text-3xl font-bold text-center mb-8">Menstrual Cycle Tracker</h1>

      {!showDashboard ? (
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle>Enter Your Cycle Information</CardTitle>
          </CardHeader>
          <CardContent className="p-2 mx-auto w-full">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
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


