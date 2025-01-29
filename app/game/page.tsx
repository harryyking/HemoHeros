"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import BloodTypeDraggable from "@/components/BloodTypeDraggable"
import BloodTypeDroppable from "@/components/BloodTypeDroppable"
import ScoreBoard from "@/components/ScoreCard"
import InfoModal from "@/components/InfoModal"

const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]

const compatibilityMap: { [key: string]: string[] } = {
  "A+": ["A+", "A-", "O+", "O-"],
  "A-": ["A-", "O-"],
  "B+": ["B+", "B-", "O+", "O-"],
  "B-": ["B-", "O-"],
  "AB+": ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
  "AB-": ["A-", "B-", "AB-", "O-"],
  "O+": ["O+", "O-"],
  "O-": ["O-"],
}

export default function BloodTypeGame() {
  const [score, setScore] = useState(0)
  const [currentLevel, setCurrentLevel] = useState(1)
  const [draggableTypes, setDraggableTypes] = useState<string[]>([])
  const [droppableType, setDroppableType] = useState("")
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    startNewRound()
  }, []) // Removed unnecessary dependency: currentLevel

  const startNewRound = () => {
    const recipient = bloodTypes[Math.floor(Math.random() * bloodTypes.length)]
    setDroppableType(recipient)
    const compatibleTypes = compatibilityMap[recipient]
    const incompatibleTypes = bloodTypes.filter((type) => !compatibleTypes.includes(type))

    let options: string[] = []
    if (currentLevel === 1) {
      options = [...compatibleTypes.slice(0, 2), ...incompatibleTypes.slice(0, 2)]
    } else if (currentLevel === 2) {
      options = [...compatibleTypes.slice(0, 3), ...incompatibleTypes.slice(0, 3)]
    } else {
      options = [...compatibleTypes, ...incompatibleTypes]
    }

    setDraggableTypes(shuffleArray(options.slice(0, 6)))
  }

  const shuffleArray = (array: string[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[array[i], array[j]] = [array[j], array[i]]
    }
    return array
  }

  const handleDrop = (item: { type: string }) => {
    if (compatibilityMap[droppableType].includes(item.type)) {
      setScore((prevScore) => prevScore + 10)
      if (score + 10 >= currentLevel * 50 && currentLevel < 3) {
        setCurrentLevel((prevLevel) => prevLevel + 1)
      }
    } else {
      setScore((prevScore) => Math.max(0, prevScore - 5))
    }
    startNewRound()
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="min-h-screen bg-base-200 p-8">
        <motion.h1
          className="text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Blood Type Compatibility Game
        </motion.h1>

        <ScoreBoard score={score} level={currentLevel} />

        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <BloodTypeDroppable type={droppableType} onDrop={handleDrop} />
        </motion.div>

        <motion.div
          className="grid grid-cols-3 gap-4 justify-items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <AnimatePresence>
            {draggableTypes.map((type, index) => (
              <motion.div
                key={type}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <BloodTypeDraggable type={type} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="text-center mt-8">
          <button className="btn btn-primary" onClick={() => setShowModal(true)}>
            Learn More About Blood Types
          </button>
        </div>

        <InfoModal isOpen={showModal} onClose={() => setShowModal(false)} />
      </div>
    </DndProvider>
  )
}

