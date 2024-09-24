import Image from 'next/image'
import React from 'react'
import miniDog from '@/assets/images/mini-dog.svg'
import arrowRight from '@/assets/images/arrow-right.svg'
import star from '@/assets/images/star.svg'

const UserLevelInfo: React.FC = () => {

  const levelImage = miniDog
  const currentLevelName = 'Senetor'
  const nextLevelName = 'President'

  return (
    <section className='flex gap-3 justify-between items-center'>
      <div className='flex gap-4 justify-between w-full items-center bg-gradient-to-r from-[#0a84ff69] to-transparent border border-[#999999] rounded-full pr-4'>
        <div className='flex gap-4 items-center'>
          <Image src={levelImage} alt='Level profile picture' className='w-9 scale-[1.6]'/>
          <p>{currentLevelName}</p>
        </div>
        
        <Image src={arrowRight} alt='Three angles pointing to the right' className='w-[35.2px]' />

        <p className='textDim'>{nextLevelName} </p>
      </div>

      <Image src={star} alt="" className='w-[40px]'/>
      
    </section>
  )
}

export default UserLevelInfo