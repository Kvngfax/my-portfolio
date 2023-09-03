import React from 'react';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import HeroImg2 from '../components/HeroImg2.js';
import Course from '../components/course.js';


const Certificate = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="Certificates." text="Some awarded certificates"/>
      <Course/>
      <Footer/>
    </div>
  )
} 

export default Certificate;