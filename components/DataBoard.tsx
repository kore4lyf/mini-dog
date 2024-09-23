import React from 'react'

const DataBoard = () => {
  const levelCompletionPercentage = 50
  const totalVotes = 21730
  const totalGoals = 25000
  return (
    <div className='dataBoard overflow-hidden  rounded-2xl bg-gradient-to-r from-[#446f9c] to-[#053c73] relative'>
      <div className='flex justify-between p-4 pb-7 '>
        <div>
          <p className='text-xl'>{totalVotes.toLocaleString()} votes</p>
          <p className='text-xs font-light'>Excellent</p>
        </div>
        <div>
          <p className='text-xl'>{totalGoals.toLocaleString()}</p>
          <p className='text-xs font-light'>Daily goal</p>
        </div>
      </div>
      <div>
        <progress className='absolute bottom-0 w-full h-[10px]' value={levelCompletionPercentage} max="100">{levelCompletionPercentage}</progress>
      </div>
    </div>
  )
}

export default DataBoard