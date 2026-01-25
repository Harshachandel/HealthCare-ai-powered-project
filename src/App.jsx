import React from 'react'
import HeroSection from './layouts/HeroSection'
import 'bootstrap/dist/css/bootstrap.min.css'
import FeaturesSection from './layouts/FeaturesSection'
import Navbar from './layouts/Navbar'

import 'bootstrap/dist/js/bootstrap.bundle.js'
import FindDoctor from './layouts/ChooseDoctor'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import DoctorTalk from './layouts/DoctorTalk'


const App = () => {
  return (
    <>
        {/* <HeroSection/> */}
        {/* <FeaturesSection/> */}
        {/* <FindDoctor/> */}

        <Router>
        <Navbar/>
          <Routes>
            {/* <Route path='/' element={<HeroSection/>} /> */}
            <Route path='/' element={<FeaturesSection/>} />
            {/* <Route path='/feature' element={<FeaturesSection/>} /> */}
            <Route path='/findDoctor' element={<FindDoctor/>} />
            {/* <Route path='/DoctorChat' element={<DoctorTalk/>} /> */}
            <Route path='/DoctorChat/:id' element={<DoctorTalk/>} />
          </Routes>
        </Router>
        
    </> 
  )
}

export default App