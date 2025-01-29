// utils/cycleCalculator.ts
export function calculateCycle(lastPeriodStart: Date, cycleLength: number = 28) {
    const today = new Date();
    const daysSinceLastPeriod = Math.floor((today.getTime() - lastPeriodStart.getTime()) / (1000 * 60 * 60 * 24));
    const nextPeriod = new Date(lastPeriodStart.getTime() + (cycleLength * 24 * 60 * 60 * 1000));
    const ovulationDay = new Date(lastPeriodStart.getTime() + (14 * 24 * 60 * 60 * 1000)); // Assuming day 14 for ovulation
  
    return {
      daysUntilNextPeriod: Math.ceil((nextPeriod.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)),
      ovulationDay: ovulationDay.toLocaleDateString(),
      fertileWindow: [
        new Date(ovulationDay.getTime() - (5 * 24 * 60 * 60 * 1000)).toLocaleDateString(),
        new Date(ovulationDay.getTime() + (5 * 24 * 60 * 60 * 1000)).toLocaleDateString()
      ],
      currentPhase: daysSinceLastPeriod < 7 ? 'Menstrual' : (daysSinceLastPeriod < 14 ? 'Follicular' : (daysSinceLastPeriod < 21 ? 'Ovulatory' : 'Luteal'))
    };
  }