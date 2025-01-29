import { motion } from "framer-motion"
import type React from "react" // Added import for React

interface ScoreBoardProps {
  score: number
  level: number
}

const ScoreBoard: React.FC<ScoreBoardProps> = ({ score, level }) => {
  return (
    <motion.div
      className="flex justify-between mb-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="stat">
        <div className="stat-title">Score</div>
        <div className="stat-value">{score}</div>
      </div>
      <div className="stat">
        <div className="stat-title">Level</div>
        <div className="stat-value">{level}</div>
      </div>
    </motion.div>
  )
}

export default ScoreBoard

