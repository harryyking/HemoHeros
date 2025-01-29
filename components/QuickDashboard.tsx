import type React from "react"
import { addDays, format, isSameDay } from "date-fns"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

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
    nextPeriod: (date: Date) => isSameDay(date, nextPeriod),
    ovulationDay: (date: Date) => isSameDay(date, ovulationDay),
    today: (date: Date) => isSameDay(date, today),
  }

  const modifiersStyles = {
    menstruation: { color: "white", backgroundColor: "rgba(255, 153, 153, 0.8)" },
    follicular: { color: "white", backgroundColor: "rgba(255, 209, 220, 0.8)" },
    ovulation: { color: "white", backgroundColor: "rgba(255, 105, 180, 0.8)" },
    luteal: { color: "white", backgroundColor: "rgba(221, 160, 221, 0.8)" },
    fertile: { boxShadow: "0 0 0 2px rgba(50, 205, 50, 0.5)" },
    nextPeriod: { boxShadow: "0 0 0 2px rgba(255, 0, 0, 0.5)" },
    ovulationDay: { boxShadow: "0 0 0 2px rgba(255, 105, 180, 0.5)" },
    today: { fontWeight: "bold", border: "2px solid currentColor" },
  }

  const InfoCard: React.FC<{ title: string; value: string; color: string }> = ({ title, value, color }) => (
    <Card className="shadow-md border">
      <CardContent className="p-4">
        <h3 className="text-sm font-medium text-gray-500 mb-1">{title}</h3>
        <p className="text-2xl font-bold" style={{ color }}>
          {value}
        </p>
      </CardContent>
    </Card>
  )

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-2">Cycle Insights</h1>
      <p className="text-center mb-8">Your personalized menstrual cycle overview</p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="col-span-1 lg:col-span-2 shadow-md w-full">
          <CardContent className="p-0 mx-auto w-full">
            <Calendar
              mode="single"
              selected={today}
              month={today}
              className="w-full h-full rounded-md"
              modifiers={modifiers}
              modifiersStyles={modifiersStyles}
            />
          </CardContent>
        </Card>

        <div className="space-y-4">
          <InfoCard title="Next Period" value={format(nextPeriod, "MMM d, yyyy")} color="#FF6B6B" />
          <InfoCard title="Ovulation Day" value={format(ovulationDay, "MMM d, yyyy")} color="#FF69B4" />
          <InfoCard
            title="Fertile Window"
            value={`${format(fertileWindowStart, "MMM d")} - ${format(fertileWindowEnd, "MMM d")}`}
            color="#32CD32"
          />
          <InfoCard title="Current Phase" value={getCyclePhase(today)} color="#8A2BE2" />
        </div>
      </div>

      <div className="mt-8 bg-white p-4 rounded-lg shadow-md border">
        <h2 className="text-xl font-semibold mb-4 text-purple-800">Cycle Phase Legend</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { label: "Menstruation", color: "#FF9999" },
            { label: "Follicular", color: "#FFD1DC" },
            { label: "Ovulation", color: "#FF69B4" },
            { label: "Luteal", color: "#DDA0DD" },
            { label: "Fertile Window", color: "#32CD32" },
            { label: "Next Period", color: "#FF0000" },
          ].map(({ label, color }) => (
            <Badge
              key={label}
              variant="outline"
              className="justify-center py-2"
              style={{ borderColor: color, color: color }}
            >
              {label}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
}

export default QuickCheckDashboard

