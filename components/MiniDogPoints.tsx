
import React from 'react'
import miniDog from '@/assets/images/mini-dog.svg';
import Image from 'next/image';

interface PointProps {
  points: number
}

const MiniDogPoints: React.FC<PointProps> = ({ points }) => {
  return (
    <div className='flex text-2xl items-center'>
      <Image src={miniDog} alt='Mini dog image' width={50}/>
      <p>{points.toLocaleString()}</p>
    </div>
  )
}

export default MiniDogPoints