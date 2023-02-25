import React, {useState} from 'react'
import Navbar from "../Navbar/Navbar"
import "../Services/Services.css"

function Services() {
  const [form1, setform1] = useState(true);
  const handleClick = () => {
    setform1(!form1);
  };
  const [selectedVehicleType, setSelectedVehicleType] = useState('');
  const handleVehicleTypeChange = (event) => {
    setSelectedVehicleType(event.target.value);
  }
  return (
    <React.Fragment>
      <div className='menu1'>
        <Navbar />
      </div>
      <div className='maincontainer'>
        <div className='serviceblock'>
          <button id='reneworapply' onClick={handleClick}>
            {form1===true?<div>Want to Apply for new License or Renew Your License</div>:
            form1===false?<div>Want to Book an Appointment</div>:
            null}
          </button>
          {form1===true?
          <div>
            <h1>Book an Appointment</h1>
            
          </div>
          :form1===false?<div>
            <h1>Apply for License OR Renew your License</h1>
            <div className='serviceform'>
              <p>Name : </p>
              <input type={'text'} className='serviceforminput' id='name' name='name' required placeholder='Jack Austin'></input>
              <p>Phone Number : </p>
              <input type={'number'} className='serviceforminput' id='number' name={'number'} required placeholder='+91 XXXXXXXXXX'></input>
              <p>Email Id : </p>
              <input type={'email'} className='serviceforminput' id='email' name={'email'} required placeholder='xyz@gmail.com'></input>
              <p>Date Of Birth : </p>
              <input type={'date'} className='serviceforminput' id='date' name={'date'} required placeholder='31-12-2001'></input>
              <p>License Number : </p>
              <input type={'text'} className='serviceforminput' id='license' name={'license'} required placeholder='XYZ123444'></input>
              <p>Address : </p>
              <textarea type={'text'} className='serviceforminput' id='license' name={'license'} rows='4' required></textarea>
              <p className='radioinput'>Select One Option : <br></br>
              <input type={'radio'} name='servicetype' id='servicetype' value={'Apply'}></input>Apply for New License <br></br>
              <input type={'radio'} name='servicetype' id='servicetype' value={'Renew'}></input>Renew your License
              </p>
              <p className='vehicletype'>Select your Vehicle Type : <br></br>
              <select name='dropdownvehicletype' className='dropdownvehicletype' value={selectedVehicleType} onChange={handleVehicleTypeChange}>
              <option className='vehicletyperadio' value={'#'}>Select One Option</option>
              <option className='vehicletyperadio' value={'Non-Geared Motorcycles'}>Non-Geared Motorcycles</option>
              <option className='vehicletyperadio' value={'Geared Motorcycles'}>Geared Motorcycles</option>
              <option className='vehicletyperadio' value={'Light Motor Vehicle'}>Light Motor Vehicle</option>
              <option className='vehicletyperadio' value={'Medium Passenger Vehicle'}>Medium Passenger Vehicle</option>
              <option className='vehicletyperadio' value={'Medium Goods Vehicle'}>Medium Goods Vehicle</option>
              <option className='vehicletyperadio' value={'Heavy Passenger Vehicle'}>Heavy Passenger Vehicle</option>
              <option className='vehicletyperadio' value={'Heavy Goods Vehicle'}>Heavy Goods Vehicle</option>
              <option className='vehicletyperadio' value={'Road Roller'}>Road Roller</option>
              </select>
              </p>
              <div className='serviceformbutton'><button type='submit' name='submit' value={'submit'}>Submit</button></div>
            </div>
          </div>
          :null}
        </div>
      </div>
    </React.Fragment>
  )
}

export default Services;