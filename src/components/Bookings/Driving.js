import React from 'react';
import "./Driving.css";
import Forms from '../Forms/Forms';
import Navbar from '../Navbar/Navbar';
import "../Navbar/Navbar.css";


function Driving() {
  return (
    <React.Fragment>
      <div className='menu1'>
        <Navbar/>  
      </div>

      <div className="container">
        <div className='cards'>
          <div className="card" >
            <img class="card-img-top" src="/images/card1.jpg" alt='' />
            <div className="card-body">
              <h5 className="card-title"><h1>Maruti Suzuki driving school </h1></h5>
              <p className="card-text">Address : Bhosari bus terminal , Pune</p>
              <button type='Button' onClick={Forms}>Book you class</button>
            </div>
          </div>

          <div className="card" >
            <img class="card-img-top" src="/images/card2.jpg" alt='' />
            <div className="card-body">
              <h5 className="card-title"><h1>Om Driving school</h1>  </h5>
              <p className="card-text">Address : Dighi  , Pune</p>
              <button type='Button' >Book you class</button>
            </div>
          </div>

          <div className="card" >
            <img class="card-img-top" src="/images/card3.jpg" alt='' />
            <div className="card-body">
              <h5 className="card-title"><h1>Hrithik driving school</h1>  </h5>
              <p className="card-text">Address : Near Phule Nagar RTO  , Pune</p>
              <button type='Button' >Book you class</button>
            </div>
          </div> 


          <div className="card" >
            <img class="card-img-top" src="/images/card4.jpg" alt='' />
            <div className="card-body">
              <h5 className="card-title"><h1>Gourav driving school </h1>  </h5>
              <p className="card-text">Address : Ghorpadi   , Pune</p>
              <button type='Button' >Book you class</button>
            </div>
          </div>

          <div className="card" >
            <img class="card-img-top" src="/images/card5.jpg" alt='' />
            <div className="card-body">
              <h5 className="card-title"><h1>Ahen driving school</h1>  </h5>
              <p className="card-text">Address : Moshi  , Pune</p>
              <button type='Button' >Book you class</button>
            </div>
          </div>

          <div className="card" >
            <img class="card-img-top" src="/images/card6.jpg" alt='' />
            <div className="card-body">
              <h5 className="card-title"><h1>Rahul driving school </h1>  </h5>
              <p className="card-text">Address : Shanivar peth , Pune</p>
              <button type='Button' >Book you class</button>
            </div>
          </div>

          <div className="card" >
            <img class="card-img-top" src="/images/card7.jpg" alt='' />
            <div className="card-body">
              <h5 className="card-title"><h1>Yogiraj driving school </h1>  </h5>
              <p className="card-text">Address : Ravivar peth , Pune</p>
              <button type='Button' >Book you class</button>
            </div>
          </div>

          <div className="card" >
            <img class="card-img-top" src="/images/card8.jpg" alt='' />
            <div className="card-body">
              <h5 className="card-title"><h1>Bhagyavati driving school </h1>  </h5>
              <p className="card-text">Address : Chakan , Pune</p>
              <button type='Button' >Book you class</button>
            </div>
          </div>

          <div className="card" >
            <img class="card-img-top" src="/images/card9.jpeg" alt='' />
            <div className="card-body">
              <h5 className="card-title"><h1>Pragati  driving school </h1>  </h5>
              <p className="card-text">Address : Hadapsar  , Pune</p>
              <button type='Button' >Book you class</button>
            </div>
          </div>
        </div>
      </div>    
    </React.Fragment>
  )
}

export default Driving