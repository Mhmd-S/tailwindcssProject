import React from 'react'


const MiniForm = () => {

  return (
    <form className='h-full w-full mt-4 md:mt-8 lg:mt-10 text-[#141414] border-t-2 border-[#141414] md:border-none dark:border-white dark:text-white'>
        <h2 className='font-bold mb-2 pt-2 md:mb-4 text-lg'>Looking for weekly updates?</h2>
        <p className='text-sm w-full mb-2 md:mb-6'>
            Get the weekly updates by email.
            Unsubscribe anytime.
        </p>
        <label className='hidden'>Name</label>
        <input type='text' placeholder='Name' className='w-full bg-[white] p-[0.4rem] text-sm border-[3px] border-[#212121] outline-none dark:bg-[#212121] dark:border-white dark:focus:border-[3px] focus:border-[#159aec] dark:focus:border-[#159aec]'/>
        <label className='hidden'>Email</label>
        <input type='text' placeholder='Email*' className='w-full mt-6 bg-[white] p-[0.4rem] text-sm border-[3px] border-[#212121] outline-none dark:bg-[#212121] dark:border-white dark:focus:border-[3px] focus:border-[#159aec] dark:focus:border-[#159aec]' required/>
        <button className='w-full text-white py-[1rem] mt-6 bg-[#3312d2] hover:bg-[#3815ec] dark:bg-orange-700 dark:hover:bg-orange-600'>
            Sign Me Up!
        </button>
    </form>
  )
}

export default MiniForm