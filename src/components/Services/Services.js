  import React, { useState } from 'react';
  import Navbar from "../Navbar/Navbar";
  import Footer from '../Footer/Footer';
  import "../Services/Services.css";
  import axios from 'axios';

  function Services() {


    const [name, setName] = useState('');
    const [pnnumber, setPhnumber] = useState('');
    const [email, setEmail] = useState('');
    const [apdate, setApdate] = useState('');
    const [aptime, setAptime] = useState('');
    const [driving, setDriving] = useState('');
    const [dob, setDob] = useState('');
    const [lcnum, setLcnum] = useState('');
    const [add, setAdd] = useState('');
    const[chang , setChange]=useState('');
    const [option, setOption] = useState('');


    const handleSubmit = (e) => {
      e.preventDefault();

      // console.table(username,number,email,vehicle,services,duration);
      const data = {
        Name: name,
        PhNumber:pnnumber,
        Email: email,
        AppDate : apdate,
        AppTime : aptime,
        Driving_School : driving,
        DOB  : dob,
        License_Number: lcnum,
        Address : add,
        Applying_for : chang,

        Vehicle_Type: option,
        
      }

      axios.post('https://sheet.best/api/sheets/fc96cbe5-489b-46d2-90d3-782fdbb1752b', data).then((response) => {
        console.log(response);
        setName('');
        setPhnumber('');
        setEmail('');
        setApdate('');
        setAptime('');
        setDriving('');
        setDob('');
        setLcnum('');
        setAdd('');
        setChange('');
        setOption('');
        
        
      })
    }


    const [form1, setform1] = useState(true);
    const handleClick = () => {
      setform1(!form1);
    };
    const [selectedVehicleType, setSelectedVehicleType] = useState('');
    const handleVehicleTypeChange = (event) => {
      setSelectedVehicleType(event.target.value);
    };
    const [selectedSchoolName, setSelectedSchoolName] = useState('');
    const handleSchoolNameChange = (event) => {
      setSelectedSchoolName(event.target.value);
    }
    return (
      <React.Fragment>
        <div className='menu1'>
          <Navbar />
        </div>
          <div className='maincontainer'>
        <form onSubmit={handleSubmit} >
            <div className='maincontainerforflex'>
              <div className='serviceblock'>
                <button id='reneworapply' onClick={handleClick}>
                  {form1 === true ? <div className='togglebutton'>Want to Apply for new License or Renew Your License</div> :
                    form1 === false ? <div className='togglebutton'>Want to Book an Appointment</div> :
                      null}
                </button>
                {form1 === true ?
                  <div>
                    <br></br>
                    <h1>Book an Appointment</h1>
                    <div className='serviceform'>
                      <p>Name : </p>
                      <input type={'text'} className='serviceforminput' id='name' name='name' required placeholder='Jack Austin' onChange={(e) => setName(e.target.value)} value={name}></input>
                      <p>Phone Number : </p>
                      <input type={'number'} className='serviceforminput' id='number' name={'number'} required placeholder='+91 XXXXXXXXXX' onChange={(e) => setPhnumber(e.target.value)} value={pnnumber}></input>
                      <p>Email Id : </p>
                      <input type={'email'} className='serviceforminput' id='email' name={'email'} required placeholder='xyz@gmail.com' onChange={(e) => setEmail(e.target.value)} value={email}></input>
                      <p>Appointment Date : </p>
                      <input type={'date'} className='serviceforminput' id='apdate' name={'apdate'} required placeholder='31-12-2001' onChange={(e) => setApdate(e.target.value)} value={apdate}></input>
                      <p>Appointment Time : </p>
                      <input type={'time'} className='serviceforminput' id='aptime' name={'aptime'} required placeholder='15:00' onChange={(e) => setAptime(e.target.value)} value={aptime}></input>
                      <p className='schoolname'>Driving School : <br></br>
                        <select name='dropdownschoolname' className='dropdownschoolname' onChange={(e) => setDriving(e.target.value)} value={driving}>
                          <option className='schoolnameradio' >Select One Option</option>
                          <option className='schoolnameradio' value="Mahalaxmi Automotives Pvt Ltd" >Mahalaxmi Automotives Pvt Ltd</option>
                          <option className='schoolnameradio' value="Om Shri Sai Driving School">Om Shri Sai Driving School</option>
                          <option className='schoolnameradio' value="Aditya Motor Driving School">Aditya Motor Driving School</option>
                          <option className='schoolnameradio' value="Bhagyawanti Motor Driving School">Bhagyawanti Motor Driving School</option>
                          <option className='schoolnameradio' value="Swastik Motor Driving School">Swastik Motor Driving School</option>
                          <option className='schoolnameradio' value="Sai Siddhi Driving School">Sai Siddhi Driving School</option>
                          <option className='schoolnameradio' value="Mankar Motor Driving School">Mankar Motor Driving School</option>
                          <option className='schoolnameradio' value="Shree Gajanan Motor Driving School">Shree Gajanan Motor Driving School</option>
                          <option className='schoolnameradio' value="Mahesh Motor Driving School">Mahesh Motor Driving School</option>
                        </select>
                      </p>
                      <br></br>
                      <div className='serviceformbutton'><button type='submit' name='submit' value={'submit'}>Submit</button></div>
                      <br></br>
                    </div>
                  </div>
                  : form1 === false ?
                    <div>
                      <br></br>
                      <h1>Apply for License OR Renew your License</h1>
                      <div className='serviceform'>
                        <p>Name : </p>
                        <input type={'text'} className='serviceforminput' id='name' name='name' required placeholder='Jack Austin' onChange={(e) => setName(e.target.value)} value={name}></input>
                        <p>Phone Number : </p>
                        <input type={'number'} className='serviceforminput' id='number' name={'number'} required placeholder='+91 XXXXXXXXXX' onChange={(e) => setPhnumber(e.target.value)} value={pnnumber}></input>
                        <p>Email Id : </p>
                        <input type={'email'} className='serviceforminput' id='email' name={'email'} required placeholder='xyz@gmail.com' onChange={(e) => setEmail(e.target.value)} value={email}></input>
                        <p>Date Of Birth : </p>
                        <input type={'date'} className='serviceforminput' id='date' name={'dob'} required placeholder='31-12-2001' onChange={(e) => setDob(e.target.value)} value={dob}></input>
                        <p>License Number : </p>
                        <input type={'text'} className='serviceforminput' id='license' name={'aplic'} required placeholder='XYZ123444' onChange={(e) => setLcnum(e.target.value)} value={lcnum}></input>
                        <p>Address : </p>
                        <textarea type={'text'} className='serviceforminput' id='license' name={'license'} rows='4' required onChange={(e) => setAdd(e.target.value)} value={add}></textarea>
                        <p className='radioinput'>Select One Option : <br></br>
                          <input type={'radio'} name='servicetype' id='servicetype' required
                            onChange={(e) => setChange(e.target.value)} value={'New License'}></input>Apply for New License <br></br>
                          <input type={'radio'} name='servicetype' id='servicetype' required onChange={(e) => setChange(e.target.value)} value={'Renew Lincense'}></input>Renew your License
                        </p>
                        <p className='vehicletype'>Select your Vehicle Type : <br></br>
                          <select name='dropdownvehicletype' className='dropdownvehicletype' onChange={(e) => setOption(e.target.value)} value={option} >
                            <option className='vehicletyperadio' >Select One Option</option>
                            <option className='vehicletyperadio' value="Non-Geared Motorcycles">Non-Geared Motorcycles</option>
                            <option className='vehicletyperadio' value="Geared Motorcycles">Geared Motorcycles</option>
                            <option className='vehicletyperadio' value="Light Motor Vehicle">Light Motor Vehicle</option>
                            <option className='vehicletyperadio' value="Medium Passenger Vehicle">Medium Passenger Vehicle</option>
                            <option className='vehicletyperadio' value="Medium Goods Vehicle">Medium Goods Vehicle</option>
                            <option className='vehicletyperadio' value="Heavy Passenger Vehicle">Heavy Passenger Vehicle</option>
                            <option className='vehicletyperadio' value="Heavy Goods Vehicle">Heavy Goods Vehicle</option>
                            <option className='vehicletyperadio' value="Road Roller">Road Roller</option>
                          </select>
                        </p>
                        <br></br>
                        <div className='serviceformbutton'><button type='submit' name='submit' value={'submit'}>Submit</button></div>
                        <br></br>
                      </div>
                    </div>
                    : null}
              </div>
            </div>

            <Footer />
          </form>
          </div>
      </React.Fragment>
    )
  }

  export default Services;
