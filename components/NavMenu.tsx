"use client"

import React from 'react'
import UpgradeOpt from './icons/UpgrageOpt'
import { usePathname } from 'next/navigation'

const NavMenu = () => {
  const currentPath = usePathname()

  return (
    <div className='fixed bottom-5 h-fit w-[90%] backdrop-blur-sm bg-[#282828] bg-opacity-50 p-4'>
      <div>
        <div className='w-fit flex flex-col gap-2 items-center'>
          <UpgradeOpt active={false} />
          <p className={`text-xs ${null === null ? 'white' : "text-['#48484A']"}`}>Upgrade</p>
        </div>
      </div>
    </div>
  )
}

export default NavMenu