import React from 'react'
import HeroSection from './layouts/HeroSection'
import 'bootstrap/dist/css/bootstrap.min.css'
import FeaturesSection from './layouts/FeaturesSection'
import Navbar from './layouts/Navbar'

import 'bootstrap/dist/js/bootstrap.bundle.js'
import FindDoctor from './layouts/ChooseDoctor'


const App = () => {
  return (
    <>
        <Navbar/>
        {/* <HeroSection/> */}
        <FeaturesSection/>
        <FindDoctor/>
    </> 
  )
}

export default App