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
      <div className='w-4/5 lg:h-[75vh] mt-6 mx-auto flex flex-col md:grid md:grid-cols-[70%_30%] tracking-wide'>
        <div className='py-6'>
          <h1 className='text-[#141414] text-6xl md:text-8xl lg:text-9xl font-bold md:text-7xl dark:text-white'>
            DEFENSE TRACK            
          </h1>
          <h4 className='text-[#5b5955] mt-4 text-sm md:text-xl font-medium dark:text-[#c7c7c7]'>// Professionally curated guides covering modern bug bounty methodologies</h4>
        </div>
        <MiniForm />
      </div>
      <div className='mt-20'>
        <div> 
          <div className="w-4/5 mx-auto flex flex-col justify-center items-center">
            <hr className='w-full border-black dark:border-white'/>
            <h3 className='w-2/5 md:w-1/5 text-4xl text-center -translate-y-6 bg-[#fcf1e6] text-black dark:bg-[#141414] dark:text-white'>New</h3>
          </div>
          <div className='w-4/5 mx-auto flex flex-col lg:grid lg:grid-cols-[40%_40%] lg:gap-x-[20%] pb-4 lg:pb-12'>
            {newGuidesEle}
          </div>
        </div>

        <div>
            <div className="w-4/5 mx-auto flex flex-col justify-center items-center">
              <hr className='w-full border-black dark:border-white'/>
              <h3 className='w-2/5 md:w-1/5 text-4xl text-center -translate-y-6 bg-[#fcf1e6] text-black dark:bg-[#141414] dark:text-white  '>Hot</h3>
            </div>
            <div className='w-4/5 mx-auto flex flex-col lg:grid lg:grid-cols-[40%_40%] lg:gap-x-[20%] pb-4 lg:pb-12'>
              {popGuideEle}
            </div>
        </div>
      </div>
        <hr className='w-4/5 mx-auto pb-4 text-lg border-black dark:border-white'/>
    </>
  )
}

export default Face