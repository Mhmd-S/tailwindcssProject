import React from 'react'
import guideData from '../assets/guidesInfo.json';
import Guides from "./Guides"

const Posts = ({darkMode}) => {

  const newGuides = guideData.new;
  const popularGuides = guideData.popular;

  const newGuidesEle = newGuides.map((guide,i) => <Guides key={i} title={guide.title} desc={guide.desc} urlSite={guide.site} darkMode={darkMode} />)
  const popGuideEle = popularGuides.map((guide,i) => <Guides key={i} title={guide.title} desc={guide.desc} urlSite={guide.site} darkMode={darkMode} />)
 
  return (
    <div className='w-4/5 mx-auto mt-10'>
       <div className="w-full mx-auto flex flex-col justify-center items-center">
          <hr className='w-full border-black dark:border-white'/>
          <h3 className='w-1/5 text-4xl text-center -translate-y-6 bg-[#fcf1e6] text-black dark:bg-[#141414] dark:text-white'>Posts</h3>
        </div>
        
        <div className='w-4/5 mx-auto flex flex-col pb-12'>
          {newGuidesEle}
          {popGuideEle}         
        </div>
    </div>
  )
}

export default Posts