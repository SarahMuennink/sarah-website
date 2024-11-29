import React from "react";
import "./App.css";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import WhatIDo from "./components/WhatIDo";

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <header className="navbar">
        <div className="container">
          <h1 className="logo">Sarah Muennink Saathoff</h1>
          <nav>
            <ul className="nav-links">
              <li><a href="#whatIDo">What I Do</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Sections */}
      <Hero />
      <WhatIDo />
      <Experience />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
