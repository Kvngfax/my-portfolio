import React from "react";
import "./index.css";
import Home from "./routes/Home.js";
import Project from "./routes/Project";
import About from "./routes/About";
import Contact from "./routes/Contact";
import { Route, Routes } from "react-router-dom";
import Certificate from "./routes/Certficate";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element= {<Home />} />
        <Route path="/project" element= {<Project />} />
        <Route path="/about" element= {<About />} />
        <Route path="/certificate" element={<Certificate />}/>
        <Route path="/contact" element= {<Contact />} />
      </Routes>
    </>
  );
}

export default App;
