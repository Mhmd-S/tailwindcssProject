import Header from "./components/Header"
import Face from "./components/Face"
import Guides from "./components/Guides"

import guideData from './assets/guidesInfo.json';

function App() {

  const newGuides = guideData.new;
  const popularGuides = guideData.popular;

  const newGuidesEle = newGuides.map(guide => <Guides title={guide.title} desc={guide.desc} urlSite={guide.site} />)
  const popGuideEle = popularGuides.map(guide => <Guides title={guide.title} desc={guide.desc} urlSite={guide.site} />)


  return (
    <div className='w-max-screen bg-[#141414]'>
      <Header/>
      <Face />
      
      <div className="w-4/5 mx-auto flex flex-col justify-center items-center">
        <hr className='w-full'/>
        <h3 className='w-1/5 text-4xl text-center bg-[#141414] text-white -translate-y-6'>New</h3>
      </div>
      <div className='w-4/5 mx-auto grid grid-cols-[40%_40%] gap-x-[20%] pb-12'>
        {newGuidesEle}
      </div>

      <div className="w-4/5 mx-auto flex flex-col justify-center items-center">
        <hr className='w-full'/>
        <h3 className='w-1/5 text-4xl text-center bg-[#141414] text-white -translate-y-6'>Popular</h3>
      </div>
      <div className='w-4/5 mx-auto grid grid-cols-[40%_40%] gap-x-[20%] pb-12'>
        {popGuideEle}
      </div>

      <hr className='w-4/5 mx-auto pb-4 text-lg'/>

    </div>
  )
}

export default App
