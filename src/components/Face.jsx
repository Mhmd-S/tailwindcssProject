import React from 'react'
import MiniForm from './MiniForm'

const Face = () => {
  return (
    <div className='w-4/5 mt-16 mx-auto grid grid-cols-[70%_30%]'>
        <div>
            <h1 className='text-white text-9xl font-bold'>
                BUG <br/> BOUNTY            
            </h1>
            <h4 className='text-[#c7c7c7] mt-4 text-lg font-medium'>// Professionally curated guides covering modern bug bounty methodologies</h4>
        </div>
        <MiniForm />
    </div>
  )
}

export default Face