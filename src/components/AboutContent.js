import { Link } from "react-router-dom";
import "./AboutContentStyles.css";
import React1 from "../assets/react1.jpg"
import React2 from "../assets/react2.webp";

import css3 from "../assets/css3-logo.svg";
import react from "../assets/react-logo.svg";
import html5 from "../assets/html5-logo.svg";
import javascript from "../assets/javascript-logo.svg";
import tailwind from "../assets/tailwind-logo.svg";
import wordpress from "../assets/wordpress-logo.svg";
import vite from "../assets/vite-logo.svg";
import figma from "../assets/figma-logo.svg";

import React from 'react';

const AboutContent = () => {
  return (
    <div className="about-section">
      <div className="about">
        <div className="left">
              <h1>Who Am I?</h1>
              <p>I'm a react front-end developer. I create responsive secure websites for my client. I use different languages and frameworks for best performance. I'm very Excited to work with you</p>
              <Link to="/contact">
                <button className="btn">CONTACT</button>
              </Link>
          </div>

          <div className="right">
              <div className="img-container">
                  <div className="img-stack top">
                      <img src={React1} className="img" alt="true"/>
                  </div>

                  <div className="img-stack bottom">
                      <img src={React2} className="img" alt="true"/>
                  </div>
              </div>
          </div>
      </div>

      <div className="languages">
        <h1>LANGUAGES USED</h1>
        <div>
          <img src={html5} alt="html5-logo"/>
          <img src={css3} alt="css3-logo"/>
          <img src={javascript} alt="javascript-logo"/>
          <img src={react} alt="react-logo"/>
          <img src={tailwind} alt="tailwind-logo"/>
          <img src={wordpress} alt="wordpress-logo"/>
          <img src={vite} alt="vite-logo"/>
          <img src={figma} alt="figma-logo"/>
        </div>
      </div>
    </div>
  )
}

export default AboutContent;
