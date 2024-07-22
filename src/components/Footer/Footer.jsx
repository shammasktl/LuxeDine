import React from "react";
import "./Footer.css";
import { assets } from "../../assests/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" id="logo"/>
          <p>
            At LuxeDine, we deliver gourmet dishes from top-rated hotels to your
            doorstep, ensuring a luxurious dining experience at home. Committed
            to quality, convenience, and customer satisfaction, LuxeDine is your
            trusted partner for culinary indulgence.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook} alt="" />
            <img src={assets.x_twitter} alt="" />
            <img src={assets.linkedin} alt="" />
            <a href="https://github.com/archi-pelago/LuxeDine" target="_blank"><img src={assets.github} alt="" /></a>
          </div>
        </div>
        <div className="footer-content-center">
            <h2>LuxeDine</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>Get in Touch</h2>
            <li>+91 987-654-3210</li>
            <li>contact@luxedine.com</li>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 © Luxedine.com - All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
