import { useState } from "react";

import Header from "./components/Header"
import Face from "./components/Face"
import Guides from "./components/Guides"

import guideData from './assets/guidesInfo.json';

function App() {


  // Fix the dark mode. You switched things up

  const [darkMode, setDarkMode] = useState(false);

  const newGuides = guideData.new;
  const popularGuides = guideData.popular;

  const newGuidesEle = newGuides.map(guide => <Guides title={guide.title} desc={guide.desc} urlSite={guide.site} darkMode={darkMode} />)
  const popGuideEle = popularGuides.map(guide => <Guides title={guide.title} desc={guide.desc} urlSite={guide.site} darkMode={darkMode} />)


  return (
    <div className={darkMode ? 'dark w-max-screen bg-[#141414]' :  ' w-max-screen bg-[#fcf1e6]'}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Face />
      
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

    </div>
  )
}

export default App
