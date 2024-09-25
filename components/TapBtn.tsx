'use client'

import React, { MouseEventHandler } from 'react'
import Image from 'next/image'
import miniDog from '@/assets/images/mini-dog.svg';

interface TapBtnProps {
  action: MouseEventHandler<HTMLButtonElement>
}

const TapBtn: React.FC<TapBtnProps> = ({ action }) => {
  return (
    <button onClick={action} className='row-span-2 grid place-content-center translate-y-7'>
      <Image className='scale-125 w-[256px]' src={miniDog} alt='Dogs Image'/>
    </button>
  )
}

export default TapBtn