import React from 'react';
import "./Forms.css"
import Navbar from '../Navbar/Navbar';
import "../Navbar/Navbar.css"

function App() {

    return (
        <React.Fragment>
            <div className='menu1' >
                <Navbar />
            </div>

            <div className="container">
                <div className="headline"><b>Book your first Driving class here !!!</b></div>
                <form>
                    <div className="form">
                        <h2 className='form-heading'>REGISTRATION FORM</h2>
                        <div className='textinputs'>
                            <h3>Contact Information</h3>

                            <p>Name : </p> <input className='formcssinput' type="text" name="username" placeholder="Jack Austin" required ></input>

                            <p>Contact Number : </p> <input className='formcssinput' type="number" name="number" placeholder="+91XXXXXXXXXX" required ></input>

                            <p>Email : </p> <input className='formcssinput' type="email" name="email" placeholder="abcxyz123@gmail.com" required  ></input>
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
                                <input type={"radio"} name="vehicle" id="vehicle"  ></input> Bike <br></br>
                                <input type={"radio"} name="vehicle" id="vehicle"  ></input> Car <br></br>
                                <input type={"radio"} name="vehicle" id="vehicle"  ></input> None <br></br>
                            </p>

                            <p>Duration: </p>
                            <select name='duration' className='formcssinput' id='duration' required >
                                <option value="">Select One Option</option>
                                <option value="3">3 Weeks</option>
                                <option value="6">6 Weeks</option>
                                <option value="9">9 Weeks</option>
                            </select>
                        </div>

                    <p>DRIVING SCHOOL INFO :</p>
                   <p>BHAGYAWANTI MOTOR DRIVING SCHOOL</p>
                   <p>ADDRESS : Khanekar Complex 2nd Floor Shop No 2, Hinjewadi, Above Allahabad Bank Hinjewadi Main Chowk, Pune</p>
                   <p>CONTACT NUMBER : (91)-20-30020232</p>

                        <p><input type="submit" value="Submit"></input></p>
                        <p className='TextInForm'>Fees for your your Driving Classes based on your Service, Vehicle & Duration selection is displayed.</p>
                    </div>
                </form>

                <div className='loation' > <h2><b >Locate it here !!</b></h2></div>
                <iframe title='maps' className="maps" width="200" height="200" id="gmap_canvas" src="https://maps.google.com/maps?q=%20Mahalaxmi%20Automotives%20Pvt%20Ltd%2059/B,%20Mundhwa,%20Near%20Bank%20Of%20Maharashtra%20Opposite%20Mundhwa%20Police%20Station,%20Pune&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>

            </div>
        </React.Fragment>

    );
}

export default App;