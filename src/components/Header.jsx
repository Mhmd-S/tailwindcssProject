import React from 'react'
import { AiOutlineBug, AiFillBug } from 'react-icons/ai';
import { BsSun, BsMoon } from 'react-icons/bs';

const Header = () => {
  return (
    <header className='w-4/5 grid grid-cols-[100px_100px_fit-content] border-b-4 mx-auto py-10 border-white '>
        <AiOutlineBug size={30} color={"white"}  className='mr-100'/>
        <button className='justify-self-end text-white font-bold tracking-wider border-b-4 border-transparent pb-1 hover:border-b-4 hover:border-orange-500 ease-in duration-300'>Posts</button>
        <button className='justify-self-end'><BsSun size={20} color={"white"} /></button>
    </header>
  )
}

export default Header