import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Driving from './components/Bookings/Driving'
import Form from './components/Forms/Forms'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'

export default function App() {
  return (
    <div className='App'>
   
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Form' element={<Form />} />
          <Route path='/Driving' element={<Driving />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />


        </Routes>
      </BrowserRouter>
    </div>

  )
}

