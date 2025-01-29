"use client"
import React, { useRef } from 'react';
import { useDrop } from 'react-dnd'

interface BloodTypeDroppableProps {
  type: string
  onDrop: (item: { type: string }) => void
}

const BloodTypeDroppable: React.FC<BloodTypeDroppableProps> = ({ type, onDrop }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'blood',
    drop: onDrop,
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }))

  drop(ref)

  return (
    <div
      ref={ref}
      className={`w-32 h-32 rounded-full flex items-center justify-center text-2xl font-bold ${
        isOver ? 'bg-primary' : 'bg-secondary'
      }`}
    >
      {type}
    </div>
  )
}

export default BloodTypeDroppable

