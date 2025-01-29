import type React from "react"
import { addDays, format, startOfWeek, eachDayOfInterval, isSameMonth } from "date-fns"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface QuickCheckDashboardProps {
  lastPeriodStart: Date
  cycleLength: number
}

const QuickCheckDashboard: React.FC<QuickCheckDashboardProps> = ({ lastPeriodStart, cycleLength }) => {
  const today = new Date()
  const nextPeriod = addDays(lastPeriodStart, cycleLength)
  const ovulationDay = addDays(lastPeriodStart, Math.floor(cycleLength / 2) - 2)
  const fertileWindowStart = addDays(ovulationDay, -5)
  const fertileWindowEnd = addDays(ovulationDay, 1)

  const getCyclePhase = (date: Date) => {
    const daysSinceLastPeriod = Math.floor((date.getTime() - lastPeriodStart.getTime()) / (1000 * 3600 * 24))
    if (daysSinceLastPeriod < 5) return "menstruation"
    if (daysSinceLastPeriod < 14) return "follicular"
    if (daysSinceLastPeriod < 17) return "ovulation"
    return "luteal"
  }

  const modifiers = {
    menstruation: (date: Date) => getCyclePhase(date) === "menstruation",
    follicular: (date: Date) => getCyclePhase(date) === "follicular",
    ovulation: (date: Date) => getCyclePhase(date) === "ovulation",
    luteal: (date: Date) => getCyclePhase(date) === "luteal",
    fertile: (date: Date) => date >= fertileWindowStart && date <= fertileWindowEnd,
    nextPeriod: (date: Date) => date.getTime() === nextPeriod.getTime(),
    ovulationDay: (date: Date) => date.getTime() === ovulationDay.getTime(),
  }

  const modifiersStyles = {
    menstruation: { color: "white", backgroundColor: "#FF9999" },
    follicular: { color: "white", backgroundColor: "#FFD1DC" },
    ovulation: { color: "white", backgroundColor: "#FF69B4" },
    luteal: { color: "white", backgroundColor: "#DDA0DD" },
    fertile: { borderRadius: "50%", border: "2px solid #32CD32" },
    nextPeriod: { borderRadius: "50%", border: "2px solid #FF0000" },
    ovulationDay: { borderRadius: "50%", border: "2px solid #FF69B4" },
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Quick Check Dashboard</h1>
      <p className="text-center mb-8">Your personalized menstrual cycle overview</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <Calendar
            mode="single"
            selected={today}
            month={today}
            className="rounded-md border shadow w-full"
            modifiers={modifiers}
            modifiersStyles={modifiersStyles}
          />
        </div>
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Next Period</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold">{format(nextPeriod, "MMM d, yyyy")}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Ovulation Day</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold">{format(ovulationDay, "MMM d, yyyy")}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Fertile Window</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg">
                {format(fertileWindowStart, "MMM d")} - {format(fertileWindowEnd, "MMM d, yyyy")}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Current Phase</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold capitalize">{getCyclePhase(today)}</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Color Legend</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          <div className="flex items-center">
            <div className="w-4 h-4 rounded-full bg-[#FF9999] mr-2"></div>
            <span>Menstruation</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 rounded-full bg-[#FFD1DC] mr-2"></div>
            <span>Follicular</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 rounded-full bg-[#FF69B4] mr-2"></div>
            <span>Ovulation</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 rounded-full bg-[#DDA0DD] mr-2"></div>
            <span>Luteal</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 rounded-full border-2 border-[#32CD32] mr-2"></div>
            <span>Fertile Window</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 rounded-full border-2 border-[#FF0000] mr-2"></div>
            <span>Next Period</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuickCheckDashboard

