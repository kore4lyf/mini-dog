"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import DataBoard from '@/components/DataBoard'
import TapBtn from '@/components/TapBtn'
import UserLevelInfo from '@/components/UserLevelInfo'
import Points from '@/components/MiniDogPoints'
import TapEnergy from '@/components/TapEnergy'
import CircleButton from '@/components/CircleButton'
import settingsIcon from '@/assets/icons/settings.svg'
import Image from 'next/image'
import NavMenu from '@/components/NavMenu'

const homePage = () => {
  const activeEnergy = 1392
  const levelMaxEnergy = 1500

  const [count, setCount] = useState(324293)
  const [pointsPerTap, setPointsPerTap] = useState(2)
  const [points, setPoints] = useState<{ x: number; y: number; id: number; value: number }[]>([])
  const [currentEnergy, setCurrentEnergy] = useState(1392)
  const [currentTapValue, setCurrentTapValue] = useState(0)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = e
    setPoints((prev) => [
      ...prev,
      { x: clientX , y: clientY, id: Date.now(), value: pointsPerTap },
    ])
    setCurrentTapValue(pointsPerTap)
  }

  
  const IncreaseEnergy = () => {
    setInterval(() => {
      setCurrentEnergy((prevValue) => prevValue + 1)
    }, 1000)
  }
  
  useEffect(() => IncreaseEnergy(), [])

  useEffect(() => {
    if (currentTapValue > 0) {
      const interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1)
        setCurrentTapValue((prevValue) => prevValue - 1)
        setCurrentEnergy((prevValue) => prevValue - 1)
      }, 100)

      return () => clearInterval(interval)
    }
  }, [currentTapValue])

  return (
    <main className='relative w-[90%] py-4 mx-auto h-screen grid auto-rows-auto gap-4'>
      <UserLevelInfo />
      <DataBoard />
      <div className='row-span-12 flex flex-col justify-between'>

        <div className='mx-auto'>
          <Points points={count} />
        </div>
        
        <div className='relative -translate-y-8 mx-auto'>
          <TapBtn action={handleClick} />
        </div>
        
        <div className='flex justify-between h-fit'>
          <TapEnergy activeEnergy={currentEnergy} levelMaxEnergy={levelMaxEnergy}/>
          <CircleButton path="/settings">
            <Image src={settingsIcon} alt="Settings icon" width="23" />
          </CircleButton>
        </div>
      </div>
      <NavMenu />
      <div className='h-20'></div>

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
            +{pointsPerTap}
          </motion.div>
        ))}
      </AnimatePresence>
    </main>
  )
}

export default homePage