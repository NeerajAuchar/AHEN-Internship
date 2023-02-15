import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Driving from "./components/Driving_classes/Driving"
import Form from './components/Forms/Forms'
import Navbar from './components/Navbar/Navbar'
import Home from './screens/Home'

export default function App() {
  return (
    <div className='App'>
   
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Form' element={<Form />} />
            <Route path='/Driving' element={<Driving />} />


        </Routes>
      </BrowserRouter>
    </div>

  )
}

