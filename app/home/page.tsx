import React from 'react'
import DataBoard from '@/components/DataBoard'
import TapBtn from '@/components/TapBtn'
import UserLevelInfo from '@/components/UserLevelInfo'
import Points from '@/components/MiniDogPoints'
import TapEnergy from '@/components/TapEnergy'
import CircleButton from '@/components/CircleButton'
import settingsIcon from '@/assets/icons/settings.svg'
import Image from 'next/image'

const homePage = () => {
  const points = 324293
  const activeEnergy = 1392
  const levelMaxEnergy = 1500

  return (
    <main className='w-[90%] py-4 mx-auto h-screen grid auto-rows-auto gap-4'>
      <UserLevelInfo />
      <DataBoard />
      <div className='mx-auto'>
        <Points points={points} />
      </div>
      <div className='-translate-y-8 mx-auto'>
        <TapBtn />
      </div>
      <div className='flex justify-between h-fit'>
        <TapEnergy activeEnergy={activeEnergy} levelMaxEnergy={levelMaxEnergy}/>
        <CircleButton path="/settings">
          <Image src={settingsIcon} alt="Settings icon" width="23" />
        </CircleButton>
      </div>
      {/* <div className='h-20'></div> */}
    </main>
  )
}

export default homePage