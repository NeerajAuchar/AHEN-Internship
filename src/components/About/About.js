import React from "react";
import "./About.css";
import Navbar from "../Navbar/Navbar";
import Footer from '../Footer/Footer';
import "../Navbar/Navbar.css";


function About() {
    return (
        <React.Fragment>
            <div className="menu1">
                <Navbar />
            </div>
            <div className="maincontainer">

                <div className="aboutcontent">
                <h1 className="abouttitle">AHEN</h1>
                <h3 className="aboutsubtitle">A Driving School</h3>
                    <p>We are a team of highly skilled and experienced driving instructors dedicated to helping you become a safe and confident driver. Our driving school has been serving the community for many years, and we pride ourselves on providing high-quality driving lessons at affordable prices. Our instructors are trained professionals who understand the unique challenges of teaching new drivers. They are patient, friendly, and knowledgeable, and they will work with you to develop the skills you need to pass your driving test and drive safely on the road. </p>
                    <p>We offer a range of driving lesson packages to suit your needs, including individual lessons, intensive courses, and refresher lessons for experienced drivers. We also provide specialized training for nervous drivers and those with specific learning needs.</p> 
                    <p>At our driving school, we use modern, well-maintained cars equipped with the latest safety features. Our cars are also fitted with dual controls, which means that your instructor can take control of the vehicle if necessary, ensuring your safety at all times.</p> 
                    <p>We understand that learning to drive can be a daunting experience, which is why we strive to make our lessons as comfortable and stress-free as possible. Our instructors will create a supportive and encouraging environment that will help you to build your confidence behind the wheel. Our driving school has a proven track record of success, with many of our students passing their driving tests on the first attempt.</p> 
                    <p>We take pride in our students' achievements and are committed to helping each and every one of them reach their full driving potential. Thank you for considering our driving school for your driving lessons. We look forward to helping you become a safe and confident driver.</p>
                </div>
            <Footer/>
            </div>
        </React.Fragment>
    )
}

export default About