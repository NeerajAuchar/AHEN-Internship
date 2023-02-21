import Image from './Image'
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from 'react-router-dom'

const Login = () => {

    const history = useNavigate();

    const [inputval, setInputval] = useState({

        email: "",

        password: "",

    })

    const [data, setData] = useState([]);
    console.log(inputval)


    const getData = (e) => {
        // console.log(e.target.value)

        const { value, name } = e.target;
        console.log(value, name)

        setInputval(() => {
            return {
                ...inputval,
                [name]: value
            }
        })


    }



    const addData = (e) => {
        e.preventDefault();

        const getuserArr = localStorage.getItem("neeraj");
        console.log(getuserArr);

        // console.table(inputval);
        const { email, password } = inputval;
        if (email === "") {
            alert("Please enter your Email")
        } else if (!email.includes("@")) {
            alert("Please enter vaild email address ")
        } else if (password === "") {
            alert("Please enter your password")
        } else if (password.length < 5) {
            alert("Length of password should be greater than 5 ")
        } else {
            if(getuserArr && getuserArr.length){
                const userdata = JSON.parse(getuserArr);
              const userlogin =userdata.filter((el,k) =>{
                return el.email === email && el.password === password
              });
             
              if(userlogin.length === 0){
                alert("Invalid Details")    
              }else{
                console.log("User Login Succesfully <3")

                localStorage.setItem("user_login" , JSON.stringify(userlogin))


                history("/Home")
              }


            }


        }



    }


    return (
        <>
            <div className="container" mt-3>
                <section className='d-flex justify-content-between'>
                    <div className="left-data mt-5 p-3" style={{ width: "100%" }} >  <h3 className='text-center col-lg-6' >SIGN-IN</h3>
                        <Form>

                            <Form.Group className="mb-3 col-lg-7" controlId="formBasicEmail">

                                <Form.Control type="email" name='email' onChange={getData} placeholder="Enter your Email " />

                            </Form.Group>


                            <Form.Group className="mb-3 col-lg-7" controlId="formBasicPassword">

                                <Form.Control type="password" name='password' onChange={getData} placeholder="Password" />
                            </Form.Group>
                            <Form.Group >
                                <Button variant="primary" type="submit" className='col-7' onClick={addData} >Submit</Button>
                            </Form.Group>

                        </Form>
                        <p className='mt-3'><span> <NavLink to='/'>Forgot-Password</NavLink></span></p>
                    </div>
                    <Image />


                </section>
            </div>
        </>
    )
}

export default Login