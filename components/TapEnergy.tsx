import Image from 'next/image'
import React from 'react'
import energyIcon from '@/assets/icons/energy.svg'

interface TapEnergyProps {
  activeEnergy: number,
  levelMaxEnergy: number
}

const TapEnergy: React.FC<TapEnergyProps> = ({ activeEnergy, levelMaxEnergy }) => {
  return (
    <div className='flex gap-3 items-center font-light bg-gradient-to-r from-transparent to-[#0a84ff69] border border-[#999999] w-fit py-2 px-3 rounded-full h-fit'>
      <Image src={energyIcon} alt='Tap energy icon' width={18} />
      <p className='text-sm'>{activeEnergy.toLocaleString()} / {levelMaxEnergy.toLocaleString()}</p>
    </div>
  )
}

export default TapEnergy