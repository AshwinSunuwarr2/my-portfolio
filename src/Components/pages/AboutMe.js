import React, { Component } from "react";
import "./AboutMe.css";
import poto from "../../images/photoBG.png";

export class AboutMe extends Component {
  render() {
    return (
      <div className="aboutme">
        <div className="myImage">
          <img src={poto} alt="merophoto" />
        </div>
        <div className="myDetails">
          <h2>About me.</h2>
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
}

export default AboutMe;
