import React from 'react'
import { AiOutlineBug, AiFillBug } from 'react-icons/ai';
import { BsSun, BsMoon } from 'react-icons/bs';

const Header = () => {
  return (
    <header className='w-4/5 grid grid-cols-[80%_10%_10%] border-b-4 mx-auto py-8 border-white '>
        <AiOutlineBug size={50} color={"white"}  className='mr-100'/>
        <button className='relative justify-self-end text-white font-bold tracking-wider before:block before:absolute before:w-full  before:top-10 before:scale-x-0 before:origin-bottom-right before:h-[0.25rem] before:bg-orange-500 before:hover:scale-x-100 before:hover:origin-top-left before:transition-transform'>Posts</button>
        <button className='justify-self-end'><BsSun size={20} color={"white"} /></button>
    </header>
  )
}

export default Header