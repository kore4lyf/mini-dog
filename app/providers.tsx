"use client"

import React, { ReactNode, useEffect, useState } from 'react'
import ErrorPage from '@/components/ErrorPage'

interface providerProps {
  children: ReactNode
}

const Providers: React.FC<providerProps> = ({children}) => {
    const [isOnline, setIsOnline] = useState(true)
    const [queuedTasks, setQueuedTasks] = useState<string[]>([]) // Example of storing tasks
  
    useEffect(() => {
      // Set initial online/offline status
      setIsOnline(navigator.onLine)
  
      // Add event listeners for online and offline events
      const handleOnline = () => {
        setIsOnline(true)
      }
  
      const handleOffline = () => {
        setIsOnline(false)
      }
  
      window.addEventListener('online', handleOnline)
      window.addEventListener('offline', handleOffline)
  
      return () => {
        window.removeEventListener('online', handleOnline)
        window.removeEventListener('offline', handleOffline)
      }
    }, [])
  

  return (
    <div>
      {isOnline ? (
        <>
          {children}
        </>
      ) : (
        <>
          <ErrorPage/>
        </>
      )}
    </div>
  )

}

export default Providers