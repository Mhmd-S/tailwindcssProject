import React from 'react'
import { AiOutlineBug, AiFillBug } from 'react-icons/ai';
import { BsSun, BsMoon } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Header = ({  darkMode , setDarkMode }) => {
  return (
    <header className='w-4/5 grid grid-cols-[80%_10%_10%] border-b-4 mx-auto py-8 border-[#141414] dark:border-white'>
        <Link to='/'><AiOutlineBug size={50} color={darkMode ? "white" : "black"}  className='mr-100'/></Link>
        
        <Link to='/posts' className='relative justify-self-end self-center text-[#121212] font-bold tracking-wider before:block before:absolute before:w-full  before:top-10 before:scale-x-0 before:origin-bottom-right before:h-[0.25rem] before:bg-[#3513dc] before:hover:scale-x-100 before:hover:origin-top-left before:transition-transform dark:text-white dark:before:bg-orange-500'>Posts</Link>

        <button className='justify-self-end'>{darkMode ?  <BsSun size={20} color={"white"} onClick={()=>{setDarkMode(!darkMode)}} /> : <BsMoon size={20} color={"black"} onClick={()=>{setDarkMode(!darkMode)}  } /> }</button>
    </header>
  )
}

export default Header