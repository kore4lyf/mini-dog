"use client"
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const TapToEarn: React.FC = () => {
  const [count, setCount] = useState(0)
  const [pointsPerTap, setPointsPerTap] = useState(5)
  const [points, setPoints] = useState<{ x: number; y: number; id: number; value: number }[]>([])
  const [currentTapValue, setCurrentTapValue] = useState(0)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = e
    setPoints((prev) => [
      ...prev,
      { x: clientX, y: clientY, id: Date.now(), value: pointsPerTap },
    ])
    setCurrentTapValue(pointsPerTap)
  }

  useEffect(() => {
    if (currentTapValue > 0) {
      const interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1)
        setCurrentTapValue((prevValue) => prevValue - 1)
      }, 100)

      return () => clearInterval(interval)
    }
  }, [currentTapValue])

  return (
    <div className="relative flex flex-col items-center justify-center h-screen">
      <div className="text-4xl font-bold mb-4">Points: {count}</div>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        onClick={handleClick}
      >
        Tap to Earn {pointsPerTap}
      </button>

      <AnimatePresence>
        {points.map((point) => (
          <motion.div
            key={point.id}
            initial={{ opacity: 1, scale: 1 }}
            animate={{ y: -100, opacity: 0, scale: 2 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="absolute selection:bg-transparent"
            style={{
              left: point.x - 16,
              top: point.y - 16,
            }}
          >
            +5
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

export default TapToEarn