import axios from 'axios';
import React, { useState } from 'react'
import "./Forms.css"
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import "../Navbar/Navbar.css"

function App() {

    
//input feilds
const [username , setUsername]=useState('');
const [number , setNumber]=useState('');
const [email , setEmail]=useState('');
const [vehicle , setvehicle]=useState('');
const [duration , setDuration]=useState('');
const [nav , setNav]=useState('Swastik Motor Driving School');

//submit event

const handleSubmit=(e)=>{
    e.preventDefault();
  
    // console.table(username,number,email,vehicle,services,duration);
    const data={
      Name:username,
      PhNumber:number,
      Email:email,
      Vehicle:vehicle,
      Duration: duration,
      School_Name: nav,
    }
  
    axios.post('https://sheet.best/api/sheets/1e02ecc8-a0b7-401b-8d87-29b198cf808b', data).then((response)=>{
      console.log(response);
      setUsername('');
      setNumber('');
      setEmail('');
      setDuration('');
      setNav('Swastik Motor Driving School ');
    })
}

    return (
        <React.Fragment>
            <div className='menu1' >
                <Navbar />
            </div>

            <div className="maincontainer">
                <div className="headline"><b>Book your first Driving class here !!!</b></div>
                <form onSubmit={handleSubmit}>
                    <div className="form">
                        <h2 className='form-heading'>REGISTRATION FORM</h2>
                        <div className='textinputs'>
                            <h3>Contact Information</h3>

                            <p>Name : </p> <input className='formcssinput' type="text" name="username" placeholder="Jack Austin" required  onChange={(e)=>setUsername(e.target.value)} value={username}></input>

                            <p>Contact Number : </p> <input className='formcssinput' type="number" name="number" placeholder="+91XXXXXXXXXX" required  onChange={(e)=>setNumber(e.target.value)} value={number}></input>

                            <p>Email : </p> <input className='formcssinput' type="email" name="email" placeholder="abcxyz123@gmail.com" required onChange={(e)=>setEmail(e.target.value)} value={email} ></input>
                        </div>

                        {/* 
                            <p>Services Offered : </p>
                            <select name="services" id="services" required >
                                <option value="">Select One Option</option>
                                <option value="Enquiry">Enquiry about License</option>
                                <option value="Training">Training for a Vehicle</option>
                                <option value="Renew">Renew Driving License</option>
                            </select> */}

                        <div className='radiosDurationFeesbox'>

                            <p className='radio1'>Driving Class for : <br></br>
                                <input type={"radio"} name="vehicle" id="vehicle"onChange={(e)=>setvehicle(e.target.value)} value={"Bike"}  ></input> Bike <br></br>
                                <input type={"radio"} name="vehicle" id="vehicle"  onChange={(e)=>setvehicle(e.target.value)} value={"Car"}></input> Car <br></br>
                                <input type={"radio"} name="vehicle" id="vehicle"  onChange={(e)=>setvehicle(e.target.value)} value={"None"} ></input> None <br></br>
                            </p>

                            <p>Duration: </p>
                            <select name='duration' className='formcssinput' id='duration' required  onChange={(e)=>setDuration(e.target.value)}  value={duration}>
                                <option value="">Select One Option</option>
                                <option value="3">3 Weeks</option>
                                <option value="6">6 Weeks</option>
                                <option value="9">9 Weeks</option>
                            </select>
                        </div>

                        <p>DRIVING SCHOOL INFO :</p>
                        <p>SWASTIK MOTOR DRIVING SCHOOL</p>
                        <p>ADDRESS : Shop No 24 Pride Purple Square, Kalewadi Phata, Wakad, Behind State Bank Of India, Pune </p>
                        <p>CONTACT NUMBER : (91)-20-30136181</p>

                        <p><input type="submit" value="Submit"></input></p>
                        <p className='TextInForm'>Fees for your your Driving Classes based on your Vehicle & Duration selection will be informed shortly.</p>

                    </div>
                </form>

                <div className='location' > <h2><b >Locate it here !!</b></h2></div>
                <iframe title='maps' className="maps" width="200" height="200" id="gmap_canvas" src="https://maps.google.com/maps?q=SWASTIK%20MOTOR%20DRIVING%20SCHOOL%20%20Shop%20No%2024%20Pride%20Purple%20Square,%20&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>

              
            <Footer/>
            </div>
        </React.Fragment>

    );
}

export default App;
