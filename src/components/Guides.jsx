import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai';

const Guides = ({title, desc, urlSite}) => {
  return (
    <div className='text-white'>
        <h3 className='text-2xl font-bold mb-4'>{title}</h3>
        <p className='text-slate-300 mb-4'>{desc}</p>
        <a className=''>Read more <AiOutlineArrowRight /> </a> //Continue here
    </div>
  )
}

export default Guides