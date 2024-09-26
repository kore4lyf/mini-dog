"use client"

import React, { useReducer, useEffect, useCallback, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import DataBoard from '@/components/DataBoard'
import TapBtn from '@/components/TapBtn'
import UserLevelInfo from '@/components/UserLevelInfo'
import Points from '@/components/MiniDogPoints'
import TapEnergy from '@/components/TapEnergy'
import CircleButton from '@/components/CircleButton'
import NavMenu from '@/components/NavMenu'
import settingsIcon from '@/assets/icons/settings.svg'
import { gameReducer, initialState, LEVEL_MAX_ENERGY } from '@/reducers/gameReducer'

const ENERGY_INCREASE_INTERVAL = 1000 // 1 second
const POINT_INCREASE_INTERVAL = 100 // 0.1 seconds

const HomePage: React.FC = () => {
  const [state, dispatch] = useReducer(gameReducer, initialState)
  const [transformStyle, setTransformStyle] = useState<string>('')

  const handleTap = useCallback((x: number, y: number) => {
    dispatch({ type: 'TAP', payload: { x, y } })
  }, [])

  const handleTapAnimation = useCallback((clickX: number, buttonWidth: number) => {
    const newTransformStyle = clickX < buttonWidth / 2
      ? 'scale(0.95, 0.95) skew(-1deg, 0deg)'
      : 'scale(0.95, 0.95) skew(1deg, 0deg)'
    setTransformStyle(newTransformStyle)
    setTimeout(() => setTransformStyle(''), 300)
  }, [])

  const handleTouchEnd = useCallback((e: React.TouchEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = e.changedTouches[0]
    const button = e.currentTarget
    const buttonRect = button.getBoundingClientRect()
    const clickX = clientX - buttonRect.left
    const buttonWidth = buttonRect.width

    handleTap(clientX, clientY)
    handleTapAnimation(clickX, buttonWidth)
  }, [handleTap, handleTapAnimation])

  useEffect(() => {
    const energyTimer = setInterval(() => {
      dispatch({ type: 'INCREASE_ENERGY' })
    }, ENERGY_INCREASE_INTERVAL)

    return () => clearInterval(energyTimer)
  }, [])

  useEffect(() => {
    if (state.currentTapValue > 0) {
      const pointTimer = setInterval(() => {
        dispatch({ type: 'INCREMENT_POINTS' })
        dispatch({ type: 'DECREASE_TAP_VALUE' })
      }, POINT_INCREASE_INTERVAL)

      return () => clearInterval(pointTimer)
    }
  }, [state.currentTapValue])

  useEffect(() => {
    state.pointDisplays.forEach(point => {
      setTimeout(() => {
        dispatch({ type: 'REMOVE_POINT_DISPLAY', payload: point.id })
      }, 1500) // Match this with the animation duration
    })
  }, [state.pointDisplays])

  return (
    <main className='relative w-[90%] py-4 mx-auto h-screen grid auto-rows-auto gap-4'>
      <UserLevelInfo />
      <DataBoard />
      <div className='row-span-12 flex flex-col justify-between'>
        <div className='mx-auto'>
          <Points points={state.points} />
        </div>
        
        <div className='relative -translate-y-8 mx-auto'>
          <TapBtn action={handleTouchEnd} pressStyle={transformStyle} />
        </div>
        
        <div className='flex justify-between h-fit'>
          <TapEnergy activeEnergy={state.currentEnergy} levelMaxEnergy={LEVEL_MAX_ENERGY}/>
          <CircleButton path="/settings">
            <Image src={settingsIcon} alt="Settings icon" width={23} />
          </CircleButton>
        </div>
      </div>
      <NavMenu />
      <div className='h-20'></div>

      <AnimatePresence>
        {state.pointDisplays.map((point) => (
          <motion.div
            key={point.id}
            initial={{ opacity: 1, scale: 1 }}
            animate={{ y: -100, opacity: 0, scale: 2 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="absolute z-50 font-bold selection:bg-transparent"
            style={{
              left: point.x - 16,
              top: point.y - 16,
            }}
          >
            +{state.pointsPerTap}
          </motion.div>
        ))}
      </AnimatePresence>
    </main>
  )
}

export default HomePage