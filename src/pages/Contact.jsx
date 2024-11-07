import React from 'react';
import './Contact.css';
import { BsFillTelephoneFill } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import image from "../assets/fronted.png"

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-image">
        <img src={image} alt="Contact Us" />
      </div>
      <div className="contact-content">
        <h1>Let’s Talk</h1>
        <form className="contact-form">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" name="name" placeholder="Full Name" />

          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" name="email" placeholder="E-mail" />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Message"></textarea>

          <button type="submit">Send Message</button>
        </form>
        <div className="contact-info">
          <p><strong>Contact</strong></p>
          <p><BsFillTelephoneFill/>+234 902 537 5109 </p>
          <p><CiMail />mustaphasharafa70@gmail.com</p>
          <p><strong>Based in</strong></p>
          <p>Lagos, Nigeria</p>
          <div className="social-icons">
          <a href="https://github.com/investor-wallflex" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://x.com/wallflex2?s=21" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
          <a href="https://www.linkedin.com/in/sharafa-wale-mustapha-a20a88109?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
