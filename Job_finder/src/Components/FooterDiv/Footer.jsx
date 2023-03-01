import React from "react";
import "./Footer.css";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <div className="footer-logo">
          <strong>Job</strong>Search <i className="fab fa-typo3"></i>
        </div>
        <p className="p-div">
          We always make our seekers and companies find the best jobs and
          employers find the best candidates
        </p>
      </div>
      <div className="left-side">
        <span className="span-div1">Company</span>
        <div className="left-side2">
          <li className="li-div">About us</li>
          <li className="li-div">Features</li>
          <li className="li-div">News</li>
          <li className="li-div">FAQ</li>
        </div>
      </div>
      <div className="left-side">
        <span className="span-div1">Resources</span>
        <div className="left-side2">
          <li className="li-div">Account</li>
          <li className="li-div">Support Center</li>
          <li className="li-div">Feedback</li>
          <li className="li-div">Contact Us</li>
        </div>
      </div>
      <div className="left-side">
        <span className="span-div1">Support</span>
        <div className="left-side2">
          <li className="li-div">Events</li>
          <li className="li-div">Promo</li>
          <li className="li-div">Req Demo</li>
          <li className="li-div">Careers</li>
        </div>
      </div>
      <div className="left-side">
        <span className="span-div1">Contact info</span>
        <div className="infos">
          <small className="email">yassinetouisse99@gmail.com</small>
          <div className="icons">
            <AiFillInstagram className="icon"  />
            <BsFacebook className="icon"  />
            <AiOutlineTwitter className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
