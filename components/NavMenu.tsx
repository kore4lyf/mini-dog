"use client"

import React from 'react'
import UpgradeOpt from './icons/UpgrageOpt'
import { usePathname } from 'next/navigation'
import MiniDogsOpt from './icons/MiniDogsOpt'
import FriendsOpt from './icons/FriendsOpt'
import TaskOpt from './icons/TaskOpt'
import Link from 'next/link';

const NavMenu = () => {
  const currentPath = usePathname()
  const paths: {
    'home': string,
    'friends': string
  } = {
    'home': '/home',
    'friends': '/friends'
  }

  return (
    <div className='navMenu fixed bottom-5 h-fit w-[90%] backdrop-blur-sm bg-[#282828] bg-opacity-50 p-2 rounded-full border border-[#48484A]'>
      <div className='px-6 flex gap-4 justify-between items-end'>
        <button className='navMenuItem w-fit flex flex-col gap-2 items-center'>
          <MiniDogsOpt active={false} />
          <p className='text-xs text-[#48484A]'>Mini Dogs</p>
        </button>
        <Link href={paths['home']} className='navMenuItem w-fit flex flex-col gap-2 items-center'>
          <TaskOpt active={currentPath === paths['home'] ? true : false} />
          <p className={`text-xs ${currentPath === paths['home'] ? 'white' : "text-[#48484A]"}`}>Tasks</p>
        </Link>
        <button className='navMenuItem w-fit flex flex-col gap-2 items-center'>
          <UpgradeOpt active={false} />
          <p className='text-xs text-[#48484A]'>Upgrade</p>
        </button>
        <Link href={paths['friends']} className='navMenuItem w-fit flex flex-col gap-2 items-center'>
          <FriendsOpt active={currentPath === paths['friends'] ? true : false} />
          <p className={`text-xs ${currentPath === paths['friends'] ? 'white' : 'text-[#48484A]'}`}>Friends</p>
        </Link>
      </div>
    </div>
  )
}

export default NavMenu