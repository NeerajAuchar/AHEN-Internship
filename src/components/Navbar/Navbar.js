import React from 'react'
import "./Navbar.css"
import "../Driving_classes/Driving.css"
import { FaBars } from 'react-icons/fa';
import Driving from "../Driving_classes/Driving"



export default function Navbar() {
  return (
    <div className='navbody' style={{cursor: "pointer", margin: -10, }}>
<div class="menu">
 <div style={{fontSize: 20, float: "right", padding:5}}>
 <FaBars />

 </div>
		<nav>
			<ul>
				<li><a href="/">Home</a></li>
				<li><a href="/Driving">Driving Classes</a></li>
				<li><a href="">About</a></li>
				<li><a href="#">Contacts</a></li>
			</ul>
		</nav>
	</div>

	</div>
   
  )
}
