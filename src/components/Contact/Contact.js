import React, { useState } from "react";
import "./Contact.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "../Navbar/Navbar.css";
import axios from 'axios';


function Contact() {

    //input feilds
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');





    //submit event

    const handleSubmit = (e) => {
        e.preventDefault();

        // console.table(username,number,email,vehicle,services,duration);
        const data = {
            Name: name,
            Email: email,
            Subject: subject,
            Message: message,
        }

        axios.post('https://sheet.best/api/sheets/0a4c838f-b55b-43af-80ad-427647f2324e', data).then((response) => {
            console.log(response);
            setName('');
            setEmail('');
            setSubject('');
            setMessage('');

        })
    }

    return (
        <React.Fragment>
            <div className="menu1">
                <Navbar />
            </div>
            
                <div className="maincontainer">
                    <div className="anothercontainer">
                        <h1 className="h1tag">Contact Us</h1>
                        <form id="contact-form"  onSubmit={handleSubmit}>
                            <label className=".cf-form" for="name" >Name</label>
                            <input type="text" className="cf-input" id="name" name="name" required onChange={(e) => setName(e.target.value)} value={name}></input>
                            <label className=".cf-form" for="email">Email</label>
                            <input type="email" className="cf-input" id="email" name="email" required  onChange={(e) => setEmail(e.target.value)} value={email}></input>
                            <label className=".cf-form" for="subject" >Subject</label>
                            <input type="text" className="cf-input" id="subject" name="subject" required onChange={(e) => setSubject(e.target.value)} value={subject}></input>
                            <label className=".cf-form" for="message" >Message</label>
                            <textarea id="message" className="cf-textarea" name="message" required onChange={(e) => setMessage(e.target.value)} value={message}></textarea>
                            <input type="submit" value="Submit"></input>
                        </form>
                    </div>
                    <Footer />
                </div>
           

        </React.Fragment>
    )
}

export default Contact
