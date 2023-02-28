import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header"
import Face from "./components/Face"
import Posts from "./components/Posts";


function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <BrowserRouter>
        <div className={darkMode ? 'dark w-max-screen bg-[#141414]' :  ' w-max-screen bg-[#fcf1e6]'}>
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
           <Routes>
            <Route path='/' element={<Face darkMode={darkMode} />}/>
            <Route path='/posts' element={<Posts darkMode={darkMode} setDarkMode={setDarkMode} />}/>
          </Routes>
        </div>
      </BrowserRouter>
      </>
  )
}

export default App
