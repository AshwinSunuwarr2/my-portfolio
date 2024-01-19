import React from "react";
import "./MyBody.css";
import Navbar from "./Navbar";
import AboutMe from "./pages/AboutMe";
import Skills from "./pages/Skills";
import Education from "./pages/Education";
import Project from "./pages/Project";
// import Projects from "./Projects";
// import Contact from "./Contact";

export default function MyBody() {
  return (
    <>
      <div className="mainBody">
        <div className="myPic">
          <div>
            <Navbar />
          </div>
          <div className="mainTitle">
            <h1 style={{ color: "white" }}>Ashwin Sunuwar</h1>
            <p>
              Hi, I'm Ashwin Sunuwar, recently registered computer engineer by
              NEC(Nepal Engineering Council). Let's explore cutting-edge
              solutions and contribute to the ever-evolving world of technology
              together!🤝
            </p>
          </div>
          {/* <p>
          👋 Greetings! I'm Ashwin Sunuwar, Registered computer engineer by
          NEC(Nepal Engineering Council), an avid tech enthusiast with a passion
          for coding. <br /> I'm on a mission to delve deep into the intricate
          workings of cutting-edge technologies. Let's explore cutting-edge
          solutions and contribute to the ever-evolving world of technology
          together!🤝
        </p> */}
        </div>
      </div>
      <AboutMe />
      <Skills />
      <Education />
      <Project />
    </>
  );
}
