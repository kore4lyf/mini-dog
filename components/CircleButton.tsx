import { Url } from 'next/dist/shared/lib/router/router';
import Link from 'next/link';
import React, { ReactNode, ReactPortal } from 'react'

interface CircleButtonProps {
  path: Url | string,
  children: ReactNode
}

const CircleButton: React.FC<CircleButtonProps> = ({ path, children }) => {
  return (
    <Link href={path} className='circleButton w-[40px] h-[40px]'>
      {children}
    </Link >
  )
}

export default CircleButton