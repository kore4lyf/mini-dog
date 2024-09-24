"use client"

import React, { ReactNode, useEffect, useState } from 'react'
import ConnectionError from '@/components/ConnectionError'

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
          <ConnectionError/>
        </>
      )}
    </div>
  )

}

export default Providers