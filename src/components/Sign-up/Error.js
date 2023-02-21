import React from 'react'
import { useNavigate } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";



const Error = () => {

    const history = useNavigate();
    return (
        <>

            <div className="container">
                <section className='error d-flex flex-cloumn justify-content-lg-center align-items-center'>
                    <img src="./error.jpg" alt="error"  width="200px" className='erroring' />
                      <h3  >404 ! Error page not found</h3>
                </section>
            </div>

        </>
    )
}

export default Error