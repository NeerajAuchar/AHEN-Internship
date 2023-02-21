
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Driving from './components/Bookings/Driving'
import Home from './components/Home/Home'
import About from './components/About/About'
import Services from './components/Services/Services'
import Contact from './components/Contact/Contact'
import "bootstrap/dist/css/bootstrap.min.css";

import Form1 from './components/Forms/Form1'
import Form2 from './components/Forms/Form2'
import Form3 from './components/Forms/Form3'
import Form4 from './components/Forms/Form4'
import Form5 from './components/Forms/Form5'
import Form6 from './components/Forms/Form6'
import Form7 from './components/Forms/Form7'
import Form8 from './components/Forms/Form8'
import Form9 from './components/Forms/Form9'
import Login from './components/Sign-up/Login'
import Enter from './components/Sign-up/Enter'
import Error from './components/Sign-up/Error'

export default function App() {
  return (
    <div className='App'>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<  Enter />} />
          <Route path='/Login' element={<Login />} />
   
          <Route path='/Home' element={<Home margin='-10' />} />
          <Route path='/Driving' element={<Driving margin='0' />} />
          <Route path='/About' element={<About margin='0' />} />
          <Route path='/Services' element={<Services margin='0' />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Form1' element={<Form1 margin='-20' />} />
          <Route path='/Form2' element={<Form2 />} />
          <Route path='/Form3' element={<Form3 />} />
          <Route path='/Form4' element={<Form4 />} />
          <Route path='/Form5' element={<Form5 />} />
          <Route path='/Form6' element={<Form6 />} />
          <Route path='/Form7' element={<Form7 />} />
          <Route path='/Form8' element={<Form8 />} />
          <Route path='/Form9' element={<Form9 />} />
          <Route path='*' element={<Error />} />
          {/* <Route path='/Details' element={<Details />} /> */}
       


        </Routes>
      </BrowserRouter>
    </div>

  )
}

