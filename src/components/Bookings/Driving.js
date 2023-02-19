import React from 'react'
import "./Driving.css"
import Navbar from '../Navbar/Navbar'
import "../Navbar/Navbar.css"
import { useNavigate} from "react-router-dom";


function Driving() {
  const navigate = useNavigate();
  const redirectToFrom1 = () => {
    //Redirect to the home page
    navigate("/Form1");
  };
  const redirectToFrom2 = () => {
    //Redirect to the home page
    navigate("/Form2");
  };

  const redirectToFrom3 = () => {
    //Redirect to the home page
    navigate("/Form3");
  };

  const redirectToFrom4 = () => {
    //Redirect to the home page
    navigate("/Form4");
  };

  const redirectToFrom5 = () => {
    //Redirect to the home page
    navigate("/Form5");
  };

  const redirectToFrom6 = () => {
    //Redirect to the home page
    navigate("/Form6");
  };

  const redirectToFrom7 = () => {
    //Redirect to the home page
    navigate("/Form7");
  };

  const redirectToFrom8 = () => {
    //Redirect to the home page
    navigate("/Form8");
  };

  const redirectToFrom9 = () => {
    //Redirect to the home page
    navigate("/Form9");
  };
  return (
    <React.Fragment>
      <div className='menu1'>
        <Navbar />
      </div>



      <div className="container">

      <div className="cards">
        <div className="card1" >

          <img class="card-img-top" src="/images/card1.jpg" alt="" />
          <div className="card-body">
            <h5 className="card-title"><h1>Mahalaxmi Automotives Pvt Ltd </h1></h5>
            <p className="card-text">59/B, Mundhwa, Near Bank Of Maharashtra Opposite Mundhwa Police Station, Pune</p>
            <p className="phone">(91)-20-39619549</p>
            <div className='button'>
              <button type='Button' className='buttontag' onClick={redirectToFrom1}>Book your class</button>
            </div>
          </div>
        </div>

        <div className="card2" >
          <img class="card-img-top" src="/images/card2.jpg" alt="" />
          <div className="card-body">
            <h5 className="card-title"><h1>Om Driving School</h1>  </h5>
            <p className="card-text">Shop No 12A, Plot No 22/B Gera Landmark, North Avenue Road, Kalyani Nagar, Near ICICI Bank, Pune</p>
            <p className="phone">(91)-20-39611342</p>
            <div className='button'>
              <button type='Button' className='buttontag' onClick={redirectToFrom2} >Book your class</button>
            </div>
          </div>
        </div>


        <div className="card3" >
          <img class="card-img-top" src="/images/card3.jpg" alt="" />
          <div className="card-body">
            <h5 className="card-title"><h1>Aditya Motor Driving School</h1>  </h5>
            <p className="card-text">Shop No 6 Laxmi Plaza Building, Main Road, Baner, Near Pan Card Club, Pune</p>
            <p className="phone">(91)-20-39612874</p>
            <div className='button'>
              <button type='Button' className='buttontag' onClick={redirectToFrom3}>Book your class</button>
            </div>
          </div>

        </div>


        <div className="card4" >
          <img class="card-img-top" src="/images/card4.jpg" alt="" />
          <div className="card-body">
            <h5 className="card-title"><h1>Bhagyawanti Motor Driving School</h1>  </h5>
            <p className="card-text">Khanekar Complex 2nd Floor Shop No 2, Hinjewadi, Above Allahabad Bank Hinjewadi Main Chowk, Pune</p>
            <p className="phone">(91)-20-30020232</p>
            <div className='button'>
              <button type='Button' className='buttontag' onClick={redirectToFrom4}>Book your class</button>
            </div>
          </div>

        </div>


        <div className="card5" >
          <img class="card-img-top" src="/images/card5.jpg" alt="" />
          <div className="card-body">
            <h5 className="card-title"><h1>Swastik Motor Driving School</h1>  </h5>
            <p className="card-text">Shop No 24 Pride Purple Square, Kalewadi Phata, Wakad, Behind State Bank Of India, Pune</p>
            <p className="phone">(91)-20-30136181</p>
            <div className='button'>
              <button type='Button' className='buttontag' onClick={redirectToFrom5}>Book your class</button>
            </div>
          </div>

        </div>

        <div className="card6" >
          <img class="card-img-top" src="/images/card6.jpg" alt="" />
          <div className="card-body">
            <h5 className="card-title"><h1>Sai Siddhi Motor Driving School </h1>  </h5>
            <p className="card-text">Shop No 12, Sohrab Hall, Dhole Patil Road, Pune Station, Opposite Jahangir Hospital, Pune</p>
            <p className="phone">(91)-20-39547346</p>
            <div className='button'>
              <button type='Button' className='buttontag' onClick={redirectToFrom6}>Book your class</button>
            </div>
          </div>

        </div>

        <div className="card7" >
          <img class="card-img-top" src="/images/card7.jpg" alt="" />
          <div className="card-body">
            <h5 className="card-title"><h1>Mankar Motor Driving School
            </h1>  </h5>
            <p className="card-text">Shop No 3 Ground Floor, Akurdi Station Road, Pradhikaran, Abc Square Sambhaji Chowk Near Lic Office, Pune</p>
            <p className="phone">(91)-20-39616007</p>
            <div className='button'>
              <button type='Button' className='buttontag' onClick={redirectToFrom7}>Book your class</button>
            </div>
          </div>

        </div>

        <div className="card8" >
          <img class="card-img-top" src="/images/card8.jpg" alt="" />
          <div className="card-body">
            <h5 className="card-title"><h1>Shree Gajanan Motor Driving School</h1>  </h5>
            <p className="card-text">Survey No 73, Handewadi Road, Hadapsar, Shriram Chowk Opposite Runwal Seagull Near Ganga Village, Pune</p>
            <p className="phone">(91)-20-39619622</p>
            <div className='button'>
              <button type='Button' className='buttontag' onClick={redirectToFrom8}>Book your class</button>
            </div>
          </div>

        </div>


        <div className="card9" >
          <img class="card-img-top" src="/images/card9.jpeg" alt="" />
          <div className="card-body">
            <h5 className="card-title"><h1>Mahesh Motor Driving Schools </h1>  </h5>
            <p className="card-text">Survey No 84, Shop 4, Manik Moti Complex, Pune Satara Road, Katraj, Near Shivneri Hospital, Near Morebaug, Pune</p>
            <p className="phone">(91)-20-39632457</p>
            <div className='button'>
              <button type='Button' className='buttontag' onClick={redirectToFrom9}>Book your class</button>
            </div>
          </div>

        </div>



      </div>
      </div>



  </React.Fragment>
)
}

export default Driving
