import React from 'react';
import Navbar from "../Navbar/Navbar";
import Footer from '../Footer/Footer';
import "../Home/Home.css";

const Home = () => {
  return (
    <React.Fragment>
      <div className='menu1'>
        <Navbar />
      </div>
      <div className='maincontainer'>
        <img src='../images/AHEN.png' alt='' className='ahenlogo'></img>
      <div className='info'>
        <div className='firstrow'>
          <div className='item-info box1'><span className='textindiv'>Download the AHEN App from Play Store </span><a href='https://play.google.com/store/apps/details?id=com.samrattechnology.ahen' rel="noreferrer" target={"_blank"}> Download</a></div>
          <div className='item-info box2'><span className='textindiv'>Your First Driving Class Here !!! </span><a href='../Driving'>Click Here</a></div>
        </div>
        <div className='secondrow'>
          <div className='item-info box3'><span className='textindiv'>Who Are We ?</span><a href='../About'>About Us</a></div>
          <div className='item-info box4'><span className='textindiv'>24 Hours Available</span><a href='../Contact'>Contact Us</a></div>
        </div>
      </div>
      <Footer/>
      </div>
    </React.Fragment>
  )
}

export default Home