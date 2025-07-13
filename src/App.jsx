import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import Gallery from './pages/Gallery';
import Facility from './pages/facility';
import Addmission from './pages/Addmission';
import Login from './pages/Admin/Login'
import { Toaster } from 'react-hot-toast';
import Admin from './pages/Admin/Admin';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/Gallery' element={<Gallery />} />
        <Route path='/facility' element={<Facility />} />
        <Route path='/addmission-inquiry' element={<Addmission />} />
        <Route path='/login' element={<Login />} />
        <Route
          path="/admin/dashboard"
          element={
            <PrivateRoute>
              <Admin />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  )
}

export default App
