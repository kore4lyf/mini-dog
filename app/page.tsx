import React from 'react'
import Image from 'next/image'
import launchDog from '@/assets/images/loading-dog.png'
import ProgressBar from '@/components/ProgressBar'
import telegramIcon from '@/assets/icons/telegram.png'
import xIcon from '@/assets/icons/x.png'
import CircleButton from '@/components/CircleButton';


const LaunchPage: React.FC = () => {
  return (
    <div className='grid auto-rows-auto h-screen'>
      <div></div>
      <div></div>
      <div></div>

      <div className='row-span-2 grid place-content-center'>
        <Image src={launchDog} alt='Dogs Image' className='w-[238px]'/>
      </div>

      <div className='flex flex-col items-center gap-4 font-light'>
        <ProgressBar />
        <div className='w-52 text-lg text-center'>
          <p className='textDim'>Stay tuned</p>
          <p>More info official channels</p>
        </div>
        <div className='flex gap-4'>
          <CircleButton path='https://t.me/'>
            <Image className='p-1' src={telegramIcon} alt='Telegram Icon' /> 
          </CircleButton>
          <CircleButton path='https://x.com'>
            <Image className='p-1' src={xIcon} alt='X Icon' width='21'/> 
          </CircleButton>
        </div>
      </div>
      
    </div>
  )
}

export default LaunchPage