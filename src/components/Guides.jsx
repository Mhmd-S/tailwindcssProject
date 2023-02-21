import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai';

const Guides = ({title, desc, urlSite}) => {
  return (
    <a className='text-white group cursor-pointer'>
        <h3 className='text-2xl font-bold mb-4'>{title}</h3>
        <p className='text-slate-300 mb-4'>{desc}</p>
        <div className='transition-transform flex items-center  group-hover:text-orange-300'><span className='text-sm'>Read more</span> <AiOutlineArrowRight size='17.5' color='orange' className='transition-all translate-y-px scale-0 group-hover:scale-100 group-hover:translate-x-3'/> </div> 
    </a>
  )
}

export default Guides