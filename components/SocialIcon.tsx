import React, { ReactNode, ReactPortal } from 'react'

interface SocialIconProps {
  children: ReactNode; 
}

const SocialIcon: React.FC<SocialIconProps> = ({ children }) => {
  return (
    <div className='socialIcon w-[47px] h-[47px]'>
      {children}
    </div>
  )
}

export default SocialIcon