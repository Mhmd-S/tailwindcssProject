import React from 'react'
import MiniForm from './MiniForm'
import Guides from "./Guides"
import guideData from '../assets/guidesInfo.json';

const Face = ({darkMode}) => {


  const newGuides = guideData.new;
  const popularGuides = guideData.popular;

  const newGuidesEle = newGuides.map((guide,i) => <Guides key={i} title={guide.title} desc={guide.desc} urlSite={guide.site} darkMode={darkMode} />)
  const popGuideEle = popularGuides.map((guide,i) => <Guides key={i} title={guide.title} desc={guide.desc} urlSite={guide.site} darkMode={darkMode} />)
  
  return (
    <>
      <div className='w-4/5 h-[75vh]  mt-16 mx-auto grid grid-cols-[75%_25%] tracking-wide'>
        <div>
          <h1 className='text-[#141414] text-9xl font-bold dark:text-white'>
            DEFENSE TRACK            
          </h1>
          <h4 className='text-[#5b5955] mt-4 text-lg font-medium dark:text-[#c7c7c7]'>// Professionally curated guides covering modern bug bounty methodologies</h4>
        </div>
        <MiniForm />
      </div>
        
        <div className="w-4/5 mx-auto flex flex-col justify-center items-center">
          <hr className='w-full border-black dark:border-white'/>
          <h3 className='w-1/5 text-4xl text-center -translate-y-6 bg-[#fcf1e6] text-black dark:bg-[#141414] dark:text-white'>New</h3>
        </div>
        
        <div className='w-4/5 mx-auto grid grid-cols-[40%_40%] gap-x-[20%] pb-12'>
          {newGuidesEle}
        </div>

          <div className="w-4/5 mx-auto flex flex-col justify-center items-center">
          <hr className='w-full border-black dark:border-white'/>
          <h3 className='w-1/5 text-4xl text-center -translate-y-6 bg-[#fcf1e6] text-black dark:bg-[#141414] dark:text-white  '>Popular</h3>
        </div>
        <div className='w-4/5 mx-auto grid grid-cols-[40%_40%] gap-x-[20%] pb-12'>
          {popGuideEle}
        </div>

        <hr className='w-4/5 mx-auto pb-4 text-lg border-black dark:border-white'/>
    </>
  )
}

export default Face