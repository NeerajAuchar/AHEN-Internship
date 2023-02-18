import React from 'react'
import "./Driving.css"
import Navbar from '../Navbar/Navbar'
import "../Navbar/Navbar.css"
import { Route, useNavigate, Link, Routes } from "react-router-dom";


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

      <div className="card">
        <div className="card1" >

          <img class="card-img-top" src="https://www.marutisuzukidrivingschool.com/blog/driving-school/marutisuzukidrivingschoolcdn.azureedge.net/-/media/feature/maruti-driving-school/blog/driving-tips/new/842-x-377.jpg?rev=a6723c4419ae4dd8af257e1fb602701f&modified=20200326090210&h=377&w=842&la=en&hash=48831EDE6B2A64E5ACB4F8147EE96F78" width="350px" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title"><h1>Mahalaxmi Automotives Pvt Ltd </h1></h5>
            <p className="card-text">59/B, Mundhwa, Near Bank Of Maharashtra Opposite Mundhwa Police Station, Pune</p>
            <p>(91)-20-39619549</p>
            <button type='Button' onClick={redirectToFrom1}>Book you class</button>
          </div>
        </div>




        <div className="card2" >
          <img class="card-img-top" src="https://th.bing.com/th/id/OIP.Vk9vouv-geEFig4FpFkCewHaEK?pid=ImgDet&w=600&h=337&rs=1" width="350px" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title"><h1>Om Driving School</h1>  </h5>
            <p className="card-text">Shop No 12 A Plot No 22/B Gera Landmark, North Avenue Road, Kalyani Nagar, Opposite Baba Kalyani Bungalow Near Icici Bank, Pune</p>
            <p>(91)-20-39611342</p>
            <button type='Button' onClick={redirectToFrom2} >Book you class</button>
          </div>

        </div>


        <div className="card3" >
          <img class="card-img-top" src="https://media.istockphoto.com/vectors/driving-lessons-in-driving-school-autoclass-vector-id1162801618?k=6&m=1162801618&s=170667a&w=0&h=dTqL6y-sJFKqSbI4hWYBSAx668Loo47W-gbpP-Zs9jw=" width="350px" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title"><h1>Aditya Motor Driving School</h1>  </h5>
            <p className="card-text">Shop No 6 Laxmi Plaza Building, Main Road, Baner, Near Pan Card Club, Pune</p><p>(91)-20-39612874</p>
            <button type='Button' onClick={redirectToFrom3} >Book you class</button>
          </div>

        </div>


        <div className="card4" >
          <img class="card-img-top" src="https://th.bing.com/th/id/OIP.v--_VLs-T58aWn0DK2fFVAHaEK?pid=ImgDet&rs=1" width="250px" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title"><h1>Bhagyawanti Motor Driving School</h1>  </h5>
            <p className="card-text">Khanekar Complex 2nd Floor Shop No 2, Hinjewadi, Above Allahabad Bank Hinjewadi Main Chowk, Pune</p>
            <p>(91)-20-30020232</p>
            <button type='Button' onClick={redirectToFrom4} >Book you class</button>
          </div>

        </div>


        <div className="card5" >
          <img class="card-img-top" src="https://netstorage-briefly.akamaized.net/images/7eb4cea0ee52ac8b.jpg" width="250px" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title"><h1>Swastik Motor Driving School</h1>  </h5>
            <p className="card-text">Shop No 24 Pride Purple Square, Kalewadi Phata, Wakad, Behind State Bank Of India, Pune</p>
            <p>(91)-20-30136181</p>
            <button type='Button' onClick={redirectToFrom5} >Book you class</button>
          </div>

        </div>

        <div className="card6" >
          <img class="card-img-top" src="https://autonexa.com/wp-content/uploads/2021/01/driving-school2.jpg" width="250px" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title"><h1>Sai Siddhi Motor Driving School </h1>  </h5>
            <p className="card-text">Shop No 12, Sohrab Hall, Dhole Patil Road, Pune Station, Opposite Jahangir Hospital, Pune</p>
            <p>(91)-20-39547346</p>
            <button type='Button'  onClick={redirectToFrom6}  >Book you class</button>
          </div>

        </div>

        <div className="card7" >
          <img class="card-img-top" src="https://lh5.googleusercontent.com/-hKnxVG4zTjE/WvrB3WEyPWI/AAAAAAAAAaI/9ZcJ0KeGxikYbpKZOQnDJvhn3bt8LsHMwCLIBGAYYCw/w1440-h810-k-no/" width="250px" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title"><h1>Mankar Motor Driving School
            </h1>  </h5>
            <p className="card-text">Shop No 3 Ground Floor, Akurdi Station Road, Pradhikaran, Abc Square Sambhaji Chowk Near Lic Office, Pune</p>
            <p>(91)-20-39616007
            </p>
            <button type='Button' onClick={redirectToFrom7}>Book you class</button>
          </div>

        </div>

        <div className="card8" >
          <img class="card-img-top" src="https://im.whatshot.in/img/2020/Aug/bhagyawanti-motor-driving-school-hinjawadi-pune-motor-training-schools-3tkf0-1598412947.jpg" width="260px" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title"><h1>Shree Gajanan Motor Driving School</h1>  </h5>
            <p className="card-text">Survey No 73, Handewadi Road, Hadapsar, Shriram Chowk Opposite Runwal Seagull Near Ganga Village, Pune</p>
            <p>(91)-20-39619622</p>
            <button type='Button' onClick={redirectToFrom8}  >Book you class</button>
          </div>

        </div>


        <div className="card9" >
          <img class="card-img-top" src="https://sulcdn.azureedge.net/biz-live/img/2504688-525167-19092016172329.jpeg" width="260px" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title"><h1>Mahesh Motor Driving Schools </h1>  </h5>
            <p className="card-text">Survey No 84, Shop 4, Manik Moti Complex, Pune Satara Road, Katraj, Near Shivneri Hospital, Near Morebaug, Pune</p>
            <p>(91)-20-39632457</p>
            <button type='Button' onClick={redirectToFrom9} >Book you class</button>
          </div>

        </div>



      </div>
    </div>



  </React.Fragment>
)
}

export default Driving
