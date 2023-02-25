import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai';

const Guides = ({title, desc, urlSite, darkMode}) => {
  return (
    <a className='text-[#212121] group cursor-pointer dark:text-white'>
        <h3 className='text-2xl font-bold mb-4'>{title}</h3>
        <p className='text-[#5b5955] mb-4 dark:text-slate-300'>{desc}</p>
        <div className='transition-transform flex items-center group-hover:text-[#159aec] dark:group-hover:text-orange-300'><span className='text-sm'>Read more</span> <AiOutlineArrowRight size='17.5' color={darkMode ? "orange" : 'blue'} className='transition-all translate-y-[2px] scale-0 group-hover:scale-100 group-hover:translate-x-3'/> </div> 
    </a>
  )
}

export default Guides