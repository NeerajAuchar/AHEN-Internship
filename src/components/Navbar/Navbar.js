import React from 'react'
import "./Navbar.css"
import { FaBars } from 'react-icons/fa';



export default function Navbar(props) {
  return (
    <div className='navbody' style={{cursor: "pointer", margin: -10, marginTop:-1.5 }}>
<div class="menu">	
 <div className='icon' style={{fontSize: 20, float: "right", padding:15}}>
 <FaBars />
 </div>
		<nav>
			<ul>
				<li><a href="/">Home</a></li>
				<li><a href="/Driving">Bookings</a></li>
				<li><a href="/About">About</a></li>
				<li><a href="/Services">Services</a></li>
				<li><a href="/Contact">Contact Us</a></li>
			</ul>
		</nav>
	</div>

	</div>
   
  )
}
