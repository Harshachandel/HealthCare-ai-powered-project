import React from 'react'
import HeroSection from './layouts/HeroSection'
import 'bootstrap/dist/css/bootstrap.min.css'
import FeaturesSection from './layouts/FeaturesSection'
import Navbar from './layouts/Navbar'

const App = () => {
  return (
    <>
        <Navbar/>
        <HeroSection/>
        <FeaturesSection/>
    </> 
  )
}

export default App