"use client"
import React, { useRef } from 'react';
import { useDrag } from 'react-dnd'

interface BloodTypeDraggableProps {
  type: string
}

const BloodTypeDraggable: React.FC<BloodTypeDraggableProps> = ({ type }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'blood',
    item: { type },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))

  drag(ref)

  return (
    <div
      ref={ref}
      className={`btn btn-lg ${isDragging ? 'opacity-50' : ''}`}
      style={{ cursor: 'move' }}
    >
      {type}
    </div>
  )
}

export default BloodTypeDraggable

