"use client"

import React, { ReactNode, useEffect, useState } from 'react'
import offlinePage from './offline/page'
import ErrorPage from '@/components/ErrorPage'

interface providerProps {
  children: ReactNode
}

const providers: React.FC<providerProps> = ({children}) => {
    const [isOnline, setIsOnline] = useState(true)
    const [queuedTasks, setQueuedTasks] = useState<string[]>([]) // Example of storing tasks
  
    useEffect(() => {
      // Set initial online/offline status
      setIsOnline(navigator.onLine)
  
      // Add event listeners for online and offline events
      const handleOnline = () => {
        setIsOnline(true)
        resumeQueuedTasks()
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
  
    // Function to queue tasks if offline
    const performTask = (task: string) => {
      if (!isOnline) {
        console.log(`Task "${task}" queued due to no internet.`)
        setQueuedTasks((prevTasks) => [...prevTasks, task])
      } else {
        console.log(`Task "${task}" performed successfully.`)
        // Perform the task (e.g., API call)
      }
    }
  
    // Function to resume tasks once online
    const resumeQueuedTasks = () => {
      queuedTasks.forEach((task) => {
        console.log(`Resuming task "${task}" now that internet is back.`)
        // Retry the task (e.g., API call)
      })
      setQueuedTasks([]) // Clear queued tasks after resuming
    }

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

export default providers