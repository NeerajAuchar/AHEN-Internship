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

            <div className="maincontainer">
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
                    <p>ADITYA MOTOR DRIVING SCHOOL</p>
                    <p>ADDRESS :Shop No 6 Laxmi Plaza Building, Main Road, Baner, Near Pan Card Club, Pune </p>
                    <p>CONTACT NUMBER : (91)-20-39612874</p>

                        <p><input type="submit" value="Submit"></input></p>
                        <p className='TextInForm'>Fees for your your Driving Classes based on your Service, Vehicle & Duration selection is displayed.</p>
                    </div>
                </form>

                <div className='loation' > <h2><b >Locate it here !!</b></h2></div>
               <iframe title='maps' className="maps" width="200" height="200" id="gmap_canvas" src="https://maps.google.com/maps?q=ADITYA%20MOTOR%20DRIVING%20SCHOOL%20:Shop%20No%206%20Laxmi%20Plaza%20Building,%20Main%20Road,%20Baner,%20Near%20Pan%20Card%20Club,%20Pune&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>


            </div>
        </React.Fragment>

    );
}

export default App;
