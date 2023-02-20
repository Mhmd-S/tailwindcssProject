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
    <div className='w-screen min-h-screen overflow-x-hidden bg-[#141414]'>
      <Header/>
      <Face />
      <div className='w-4/5 mx-auto grid grid-cols-[40%_40%] gap-x-[20%]'>
        {newGuidesEle}
      </div>
    </div>
  )
}

export default App
