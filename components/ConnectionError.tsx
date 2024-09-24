'use client'

import React from 'react'
import Image from 'next/image'
import miniDog from '@/assets/images/mini-dog.svg'
import refresh from "@/assets/icons/refresh.svg"
import { useRouter } from 'next/navigation'

const ConnectionError = () => {
  const router = useRouter()

  return (
    <main className='grid auto-rows-auto h-screen'>
      <div className='row-span-2 grid place-content-center translate-y-7'>
        <Image src={miniDog} alt='Dogs Image' className='w-[320px]'/>
      </div>

      <div className='flex flex-col items-center gap-6 font-light -translate-y-7'>
        <p className='text-3xl font-normal'>Hey</p>
          <p className='w-72 text-2xl text-center'>Sorry Something went wrong</p>
          <p className='textDim text-lg text-center'>We already on the issue</p>
        
        <button onClick={() => router.refresh()} className='primaryBtn btn px-5 py-3 rounded-xl'>
          <Image src={refresh} alt='refresh page' width={31} />
        </button>
      </div>
      
    </main>
  )
}

export default ConnectionError