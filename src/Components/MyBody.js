import React, { useEffect, useState } from "react";
import "./MyBody.css";
import Navbar from "./Navbar";
import AboutMe from "./pages/AboutMe";
// import Projects from "./Projects";
// import Contact from "./Contact";

export default function MyBody() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // return () => {
    //   window.removeEventListener("scroll", handleScroll);
    // };
  }, []);

  const mainStyle = {
    backgroundColor: scrolling ? "rgb(155 213 189 / 83%)" : "#dee2e6d4",
    transition: "background-color 1.5s ease-in-out",
  };

  return (
    <div className="mainBody" style={mainStyle}>
      <div className="myPic">
        <div>
          <Navbar />
        </div>
        <div className="mainTitle">
          <h1 style={{ color: "white" }}>Ashwin Sunuwar</h1>
          <p>
            Hi, I'm Ashwin Sunuwar, recently registered computer engineer by
            NEC(Nepal Engineering Council). Let's explore cutting-edge solutions
            and contribute to the ever-evolving world of technology together!🤝
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

      <AboutMe />
      {/* <Educations handleScroll={scrolling} />
      <Academics /> */}
      {/* <Projects />
      <Contact /> */}
    </div>
  );
}
