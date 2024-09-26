'use client'

import React, { MouseEventHandler, TouchEventHandler } from 'react'
import Image from 'next/image'
import miniDog from '@/assets/images/mini-dog.svg';

interface TapBtnProps {
  action: TouchEventHandler<HTMLButtonElement>,
  pressStyle: string
}

const TapBtn: React.FC<TapBtnProps> = ({ action, pressStyle  }) => {
  return (
    <button onTouchEnd={action} style={ { transform: pressStyle}} className='tapButton row-span-2 grid place-content-center pt-10'>
      <Image className='scale-125 w-[256px]' src={miniDog} alt='Dogs Image'/>
    </button>
  )
}

export default TapBtn