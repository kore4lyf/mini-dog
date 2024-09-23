import React, { ReactNode, ReactPortal } from 'react'

interface SocialIconProps {
  children: ReactNode; 
}

const SocialIcon: React.FC<SocialIconProps> = ({ children }) => {
  return (
    <button className='socialIcon w-[47px] h-[47px]'>
      {children}
    </button>
  )
}

export default SocialIcon