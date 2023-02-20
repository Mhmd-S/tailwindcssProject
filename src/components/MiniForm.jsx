import React from 'react'

const MiniForm = () => {
  return (
    <form className='h-full w-full text-white'>
        <h2 className='font-bold mb-4 text-lg'>Looking for weekly updates?</h2>
        <p className='text-sm w-full mb-6'>
            Get the weekly updates by email.
            Unsubscribe anytime.
        </p>
        <label className='hidden'>Name</label>
        <input type='text' placeholder='Name' className='w-full bg-[#212121] p-[0.4rem] text-sm border-2 border-transparent focus:border-2 focus:border-white outline-none'/>
        <label className='hidden'>Email</label>
        <input type='text' placeholder='Email*' className='w-full mt-6 bg-[#212121] p-[0.4rem] text-sm border-2 border-transparent focus:border-2 focus:border-white outline-none' required/>
        <button className='w-full py-[1rem] mt-6 bg-orange-700 hover:bg-orange-600 '>
            Sign Me Up!
        </button>
    </form>
  )
}

export default MiniForm