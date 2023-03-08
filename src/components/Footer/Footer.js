import React from 'react'
import { Link } from 'react-router-dom';
import "./Footer.css"



export default function Footer() {
  return (
    <div>
            <footer class="footer-distributed">

    <div class="footer-left">

        <h3>Go Ahead&nbsp;<span>With AHEN</span></h3>

        <p class="footer-links">
            <Link to="/Home" class="link-1">Home</Link>
            
            <Link to="/Driving">Bookings</Link>

            <Link to="/about">About</Link>
            
            <Link to="/services">Services</Link>

            <Link to="/contact">Contact</Link>
        </p>

        <p class="footer-company-name">AHEN © 2023</p>
    </div>

    <div class="footer-center">

        <div>
            <i class="fa fa-map-marker"></i>
            <p><span>444 S. Cedros Ave</span> Solana Beach, California</p>
        </div>

        <div>
            <i class="fa fa-phone"></i>
            <p>+1.555.555.5555</p>
        </div>

        <div>
            <i class="fa fa-envelope"></i>
            <p>support@gmail.com</p>
        </div>

    </div>

    <div class="footer-right">

        <p class="footer-company-about">
            <span>About the company</span>
            Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
        </p>

    </div>

    </footer>

    </div>
  )
}
