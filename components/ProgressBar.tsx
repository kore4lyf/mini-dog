"use client"
import { useRouter } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'


const ProgressBar: React.FC = () => {

  const router = useRouter()

  const progressBar = useRef<HTMLProgressElement | null>(null)
  
  const [progress, setProgress] = useState<number>(0)

  const handleProgress = () => {
    if(progress != 100) {
      const increaseProgress = setInterval(() => {
        setProgress((prev: number) => prev + 1)
      }, 30)

      // End increase Progress
      setTimeout(() => {
        clearInterval(increaseProgress)
      }, 1500)

      // Redirect to offline page
      setTimeout(() => {
        clearInterval(increaseProgress)
        router.push('/home')
      }, 2300)
    }
  }

  useEffect(() => {
    if(progressBar.current) {
      setTimeout(() => {
        handleProgress()
      } , 100)
    }
  }, [])

  return (
    <progress ref={progressBar} className='w-[137px] h-[5px]' value={progress} max="80">Loading...</progress>
  )
}

export default ProgressBar