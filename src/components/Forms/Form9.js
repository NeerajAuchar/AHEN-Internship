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
const [nav , setNav]=useState('Mahesh Motor Driving Schools');

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
      setNav('Mahesh Motor Driving Schools');
    })
}



    return (
        <React.Fragment>
            <div className='menu1'>
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
                        <p>MAHESH MOTOR DRIVING SCHOOL</p>
                        <p>ADDRESS :Survey No 84, Shop 4, Manik Moti Complex, Pune Satara Road, Katraj, Near Shivneri Hospital, Near Morebaug, Pune</p>
                        <p>CONTACT NUMBER :(91)-20-39632457</p>




                        <p><input type="submit" value="Submit"></input></p>
                        <p className='TextInForm'>Fees for your your Driving Classes based on your Vehicle & Duration selection will be informed shortly.</p>





                    </div>

                </form>


                <div className='loation' > <h2><b >Locate it here !!</b></h2></div>
                <iframe title='maps' className="maps" width="200" height="200"
                    id="gmap_canvas" src="https://maps.google.com/maps?q=MAHESH%20MOTOR%20DRIVING%20SCHOOL%20Survey%20No%2084,%20Shop%204,%20Manik%20Moti%20Complex,%20Pune%20Satara%20Road,%20Katraj,%20Near%20Shivneri%20Hospital,%20Near%20Morebaug,%20Pune&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" ></iframe>


            <Footer/>


            </div>
        </React.Fragment>

    );

}


export default App;


