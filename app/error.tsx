"use client"

import React, { useEffect, useState } from 'react'


const Error = () => {

  const [isOnline, setIsOnline] = useState(true);
    const [queuedTasks, setQueuedTasks] = useState<string[]>([]); // Example of storing tasks
  
    useEffect(() => {
      // Set initial online/offline status
      setIsOnline(navigator.onLine);
  
      // Add event listeners for online and offline events
      const handleOnline = () => {
        setIsOnline(true);
        resumeQueuedTasks();
      };
  
      const handleOffline = () => {
        setIsOnline(false);
      };
  
      window.addEventListener('online', handleOnline);
      window.addEventListener('offline', handleOffline);
  
      return () => {
        window.removeEventListener('online', handleOnline);
        window.removeEventListener('offline', handleOffline);
      };
    }, []);
  
    // Function to queue tasks if offline
    const performTask = (task: string) => {
      if (!isOnline) {
        console.log(`Task "${task}" queued due to no internet.`);
        setQueuedTasks((prevTasks) => [...prevTasks, task]);
      } else {
        console.log(`Task "${task}" performed successfully.`);
        // Perform the task (e.g., API call)
      }
    };
  
    // Function to resume tasks once online
    const resumeQueuedTasks = () => {
      queuedTasks.forEach((task) => {
        console.log(`Resuming task "${task}" now that internet is back.`);
        // Retry the task (e.g., API call)
      });
      setQueuedTasks([]); // Clear queued tasks after resuming
    };

  return (
    <div>
      {isOnline ? (
        <div>
          <h1>Your App</h1>
          <button onClick={() => performTask('Fetch data')}>Perform Task</button>
        </div>
      ) : (
        <div>
          <h1>No Internet Connection</h1>
          <p>Please check your connection and try again.</p>
        </div>
      )}
    </div>
  );
}

export default Error