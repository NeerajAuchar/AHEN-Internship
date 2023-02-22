import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Image from './Image'
import { NavLink } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";

const Enter = () => {

    const [inputval , setInputval]=useState({
        name:"",
        email:"",
        date:"",
        password:"",

    })
    // eslint-disable-next-line
    const [data , setData] =useState([]);
    console.log(inputval)


    const getData = (e)=>{
        // console.log(e.target.value)

        const {value , name}=e.target;
      console.log(value,name)

      setInputval(()=>{
        return{
            ...inputval,
            [name]:value
        }
      })


    }



    const addData = (e) =>{
        e.preventDefault();

        // console.table(inputval);
        const{name , email, date,password } =inputval;
        if(name === ""){
            alert("Please Enter your Name")
        }else if(email === ""){
            alert("Please enter your Email")
        }else if(!email.includes("@")){
            alert("Please enter vaild email address ")
        }else if(date === ""){
            alert("Please enter your date of birth")
        }else if( password === ""){
            alert("Please enter your password")
        }else if(password.length < 5){
            alert("Length of password should be greater than 5 ")
        }else{
            console.log("data add successfully")


            localStorage.setItem("neeraj" , JSON.stringify(...data,[inputval]));
        }

        

    }

    return (
        <>
            <div className="container" mt-3>
                <section className='d-flex justify-content-between'>
                    <div className="left-data mt-5 p-3" style={{ width: "100%" }} >  <h3 className='text-center col-lg-6' >SIGN-UP</h3>
                        <Form>
                            <Form.Group className="mb-3 col-lg-7" controlId="formBasicEmail">

                                <Form.Control type="text" name='name' onChange={getData} placeholder="Enter your name " />

                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-7" controlId="formBasicEmail">

                                <Form.Control type="email"  name='email' onChange={getData} placeholder="Enter your Email " />

                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-7" controlId="formBasicEmail">

                                <Form.Control type="date" name='date' onChange={getData} />

                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-7" controlId="formBasicPassword">

                                <Form.Control type="password"  name='password' onChange={getData} placeholder="Password" />
                            </Form.Group>
                            <Form.Group >
                                <Button variant="primary" type="submit" className='col-7' onClick={addData} >Submit</Button>
                            </Form.Group>

                        </Form>
                        <p className='mt-3'>Already Have an Account <span> <NavLink to="/Login" > Sign-In</NavLink></span></p>
                    </div>
                    <Image />

                    
                </section>
            </div>
        </>
    )
}

export default Enter