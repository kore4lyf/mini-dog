"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const FriendsPage = () => {
  const router = useRouter()

  return (
    <div className='selection:bg-red-50 h-screen'>
      <h1>Friends</h1>
      <button onClick={() => router.back()} className='bg-blue-600 p-4 rounded-xl'> Go Back</button>
    </div>
  )
}

export default FriendsPage