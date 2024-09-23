import DataBoard from '@/components/DataBoard'
import TapBtn from '@/components/TapBtn'
import UserLevelInfo from '@/components/UserLevelInfo'
import React from 'react'

const homePage = () => {
  return (
    <main className='w-[90%] py-4 mx-auto grid auto-rows-auto gap-4'>
      <UserLevelInfo />
      <DataBoard />
      <TapBtn />
    </main>
  )
}

export default homePage