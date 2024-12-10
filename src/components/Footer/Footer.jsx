import React from 'react'
import "./Footer.css"
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
        <div className="footer-content">
            <div className="footer-content-left">
               <div className="logo">
                <img src={assets.logo} alt=""/> 
                <h1>FastGrab</h1>
                </div>
                <p>In a small village, a cat named Whiskers discovered an ancient book filled with magical spells beneath an oak tree. This discovery led Whiskers to extraordinary adventures, unlocking the secrets of the universe.</p>
                <div className="footer-social-icon">
                    <img src={assets.facebook_icon} alt=""/>
                    <img src={assets.twitter_icon} alt=""/>
                    <img src={assets.linkedin_icon} alt=""/>
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+264-81-123-4567</li>
                    <li>contact@fastgrab.com.na</li>
                </ul>
            </div>
        </div>
        <hr />
         <p className="footer-copyright">Copyright 2024 © FastGrab - All Rights Reserved. </p>
    </div>
  )
}

export default Footer