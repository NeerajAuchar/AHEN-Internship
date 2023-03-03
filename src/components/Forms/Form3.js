
import "./Forms.css"
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import "../Navbar/Navbar.css"
import axios from 'axios';
import React, { useState } from 'react'

function App() {

    
//input feilds
const [username , setUsername]=useState('');
const [number , setNumber]=useState('');
const [email , setEmail]=useState('');
const [vehicle , setvehicle]=useState('');
const [duration , setDuration]=useState('');
const [nav , setNav]=useState('Aditya Motor Driving School');

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
      setNav('Aditya Motor Driving School');
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
                    <p>ADITYA MOTOR DRIVING SCHOOL</p>
                    <p>ADDRESS :Shop No 6 Laxmi Plaza Building, Main Road, Baner, Near Pan Card Club, Pune </p>
                    <p>CONTACT NUMBER : (91)-20-39612874</p>

                        <p><input type="submit" value="Submit"></input></p>
                        <p className='TextInForm'>Fees for your your Driving Classes based on your Vehicle & Duration selection will be informed shortly.</p>
                    </div>
                </form>

                <div className='loation' > <h2><b >Locate it here !!</b></h2></div>
                <iframe title='maps' className="maps" width="200" height="200" id="gmap_canvas" src="https://maps.google.com/maps?q=ADITYA%20MOTOR%20DRIVING%20SCHOOL%20:Shop%20No%206%20Laxmi%20Plaza%20Building,%20Main%20Road,%20Baner,%20Near%20Pan%20Card%20Club,%20Pune&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>


            <Footer/>
            </div>
        </React.Fragment>

    );
}

export default App;
