import React from 'react'
import './Footer.css'
import footer_logo from "../Assets 3/logo_big.png"
import {Instagram, Facebook} from "lucide-react"


const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>KOKO_GARB</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icons">
            <div className="footer-icons-container">
               <Instagram />
            </div>
            <div className="footer-icons-container">
               <Facebook/>
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2024 - All Right Reserved. </p>
        </div>
    </div>
  )
}
// mount the footer component in the app.js component
//  then create the shop categories but first context api

export default Footer