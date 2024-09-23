import Image from 'next/image'
import React from 'react'
import tinyMiniDog from '@/assets/images/tiny-mini-dog.png'
import arrowRight from '@/assets/images/arrow-right.png'

const UserLevelInfo: React.FC = () => {

  const levelImage = tinyMiniDog
  const currentLevelName = 'Senetor'
  const nextLevelName = 'President'

  return (
    <div>
      <div>
        <Image src={tinyMiniDog} alt='Level profile picture' className='w-[34.4px]'/>
        <p>{currentLevelName}</p>
      </div>
      
      <Image src={arrowRight} alt='Three angles pointing to the right' className='w-[35.2px]' />

      <p className='textDim'>{nextLevelName}</p>
      
    </div>
  )
}

export default UserLevelInfo