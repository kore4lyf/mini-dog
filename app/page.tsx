import React from 'react'
import Image from 'next/image'
import launchDog from '@/assets/images/dogs-official-removebg-preview 2.png'
import ProgressBar from '@/components/ProgressBar'
import SocialIcon from '@/components/SocialIcon';
import telegramIcon from '@/assets/icons/telegram.png'
import xIcon from '@/assets/icons/x.png'


const LaunchPage: React.FC = () => {
  return (
    <div className='grid grid-rows-4 min-h-screen border border-white'>
      <div>d</div>

      <div className='row-span-2 grid place-content-center'>
        <Image src={launchDog} alt='Dogs Image' className='w-[238px]'/>
      </div>

      <div className='flex flex-col items-center gap-5 font-light'>
        <ProgressBar />
        <div className='w-52 text-lg text-center'>
          <p className='textDim'>Stay tuned</p>
          <p>More info official channels</p>
        </div>
        <div className='flex gap-4'>
          <SocialIcon>
            <Image src={telegramIcon} alt="Telegram Icon" /> 
          </SocialIcon>
          <SocialIcon>
            <Image src={xIcon} alt="X Icon" width="21"/> 
          </SocialIcon>
        </div>
      </div>
      
    </div>
  )
}

export default LaunchPage