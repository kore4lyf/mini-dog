'use client'

import React from 'react'
import Image from 'next/image'
import miniDog from '@/assets/images/mini-dog.svg';

const TapBtn: React.FC = () => {
  return (
    <button className='row-span-2 grid place-content-center translate-y-7'>
        <Image src={miniDog} alt='Dogs Image' className='w-[320px]'/>

    </button>
  )
}

export default TapBtn