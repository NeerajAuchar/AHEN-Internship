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
            <Footer/>
            </div>
        </React.Fragment>
    )
}

export default About