import React from "react";
import "./App.css";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Experience from "./components/Experience";
import AcademicProjects from "./components/AcademicProjects";
import Leadership from "./components/Leadership";
import Honors from "./components/Honors";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <header className="navbar">
        <div className="container">
          <h1 className="logo">Sarah Muennink Saathoff</h1>
          <nav>
            <ul className="nav-links">
              <li><a href="#about">About</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#leadership">Leadership</a></li>
              <li><a href="#honors">Honors</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Sections */}
      <Hero />
      <Education />
      <Experience />
      <AcademicProjects />
      <Leadership />
      <Honors />
      <Contact />
    </div>
  );
}

export default App;
