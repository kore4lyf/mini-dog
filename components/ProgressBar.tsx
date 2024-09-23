import React from 'react'

const ProgressBar: React.FC = () => {
  return (
    <progress className='w-[137px] h-[5px]' value="0" max="100">Loading...</progress>
  )
}

export default ProgressBar