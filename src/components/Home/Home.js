import React from 'react'
import Navbar from "../Navbar/Navbar"
import "../Home/Home.css"

const Home = () => {
  return (
    <React.Fragment>
      <div className='menu1'>
        <Navbar />
      </div>
      <div className='container'>
        <img src='../images/AHEN.png' alt='' className='ahenlogo'></img>
      </div>
      <div className='info'>
        <div className='firstrow'>
          <div className='item-info box1'><div>Download the AHEN App from Play Store </div><a href='https://play.google.com/store/apps/details?id=com.samrattechnology.ahen'> Download</a></div>
          <div className='item-info box2'><div>Your First Driving Class Here !!! </div><a href='../Driving'> Click Here</a></div>
        </div>
        <div className='secondrow'>
          <div className='item-info box3'><a href='../About'>What is AHEN ?</a><div>About Us</div></div>
          <div className='item-info box4'><div>24 Hours Available</div><a href='../Contact'>Contact Us</a></div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Home