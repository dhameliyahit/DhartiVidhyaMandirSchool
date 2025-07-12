import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import Gallery from './pages/Gallery';
import Facility from './pages/facility';
import Addmission from './pages/Addmission';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/Gallery' element={<Gallery />} />
        <Route path='/facility' element={<Facility />} />
        <Route path='/addmission-inquiry' element={<Addmission />} />
      </Routes>
    </>
  )
}

export default App