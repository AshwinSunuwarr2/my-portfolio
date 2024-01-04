import React from "react";
import { useState, useEffect } from "react";
import "./AboutMe.css";
import poto from "../../images/photoBG.png";

export default function AboutMe() {
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

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const upTransition = {
    // backgroundColor: scrolling ? "rgb(155 213 189 / 83%)" : "#dee2e6d4",
    transform: scrolling ? "translateY(0px)" : "translateY(450px)",
    transition: "transform 5s ease-out",
  };
  return (
    <div className="aboutme">
      <div className="myImage">
        <img src={poto} alt="merophoto" style={upTransition} />
      </div>
      <div className="myDetails">
        <h2 style={upTransition}>About me.</h2>
        <p>
          I'm Ashwin Sunuwar, a web and mobile app develpoer. I've recently
          completed my Bachelors in Computer Engineering & now I'm a liscensed
          Computer Engineer.
          <br />
          <br />
          I'm from Sindhuli, currently living in Lalitpur, Nepal. I can help
          companies print their ideas into coding. Let's build the tech world
          together.
          <br />
          <br />
        </p>
      </div>
    </div>
  );
}

// export default AboutMe;
