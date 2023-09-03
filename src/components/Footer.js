import "./FooterStyles.css";

import React from 'react';
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
            <div className="location">
                <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }}/>
                <div>
                    <p>Leadway Estate, Erunwen</p>
                    <p>Lagos State</p>
                </div>
            </div>
            <div className="phone">
                <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }}/>
                +2348098230905</h4>                
            </div>
            <div className="mail">
                <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }}/>
                abdulbasitfasasi23@gmail.com</h4>                
            </div>

        </div>
        <div className="right">
            <h4>About myself</h4>
            <p>This is me Abdulbasit Fasasi. I'm a freelancer. I'm currently working on personal project and available for work.</p>
            <div className="social">
            <a href="https://web.facebook.com/abdulbasit.fasasi.1/" target="_blank" rel="noopener noreferrer"><FaFacebook size={30} style={{ color: "#fff", marginRight: "2rem" }}/></a>
            <a href="https://linkedin.com/in/fasasiabdulbasit123" target="_blank" rel="noopener noreferrer"><FaLinkedin size={30} style={{ color: "#fff", marginRight: "2rem" }}/></a>
            <a href="https://twitter.com/kvngfax" target="_blank" rel="noopener noreferrer"><FaTwitter size={30} style={{ color: "#fff", marginRight: "2rem" }}/></a>
            <a href="https://github.com/Kvngfax" target="_blank" rel="noopener noreferrer"><FaGithub size={30} style={{ color: "#fff", marginRight: "2rem" }}/></a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
