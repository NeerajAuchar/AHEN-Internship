import React from "react";
import "./Contact.css";
import Navbar from "../Navbar/Navbar";
import "../Navbar/Navbar.css";


function Contact() {
    return (
        <React.Fragment>
            <div className="menu1">
                <Navbar />
            </div>
            <div className="container">
                <h1 className="h1tag">Contact Us</h1>
                <form id="contact-form">
                <label className=".cf-form" for="name">Name</label>
                <input type="text" className="cf-input" id="name" name="name" required></input>
                <label className=".cf-form" for="email">Email</label>
                <input type="email" className="cf-input" id="email" name="email" required></input>
                <label className=".cf-form" for="subject">Subject</label>
                <input type="text" className="cf-input" id="subject" name="subject" required></input>
                <label className=".cf-form" for="message">Message</label>
                <textarea id="message" className="cf-textarea" name="message" required></textarea>
                <button type="submit" className="cf-button" id="submit-button">Submit</button> </form>
            </div>
        </React.Fragment>
    )
}

export default Contact