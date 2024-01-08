import React from "react";
import "./Skills.css";
import { FaStar } from "react-icons/fa";
import python from "../images/python.png";
import c from "../images/c.png";
import cplus from "../images/cplus.png";
import dotnet from "../images/dotnet.png";
import js from "../images/js.png";
// import Django from "../images/Django.png";
import react from "../images/react.png";
import dj from "../images/django.svg";
import html from "../images/html.png";
import css from "../images/css.png";
import git from "../images/git.png";
import github from "../images/github.png";
// import * as icons from "../images";

function Skills() {
  const skills = [
    {
      id: "1",
      title: "Python",
      rating: "5",
      icon: python,
    },
    {
      id: "2",
      title: "JS",
      rating: "5",
      icon: js,
    },
    {
      id: "3",
      title: "React",
      rating: "5",
      icon: react,
    },
    {
      id: "4",
      title: "Django",
      rating: "5",
      icon: dj,
    },
    {
      id: "5",
      title: "React Native",
      rating: "5",
      icon: react,
    },
    {
      id: "6",
      title: ".Net",
      rating: "5",
      icon: dotnet,
    },
    {
      id: "7",
      title: "C",
      rating: "5",
      icon: c,
    },
    {
      id: "8",
      title: "C++",
      rating: "5",
      icon: cplus,
    },
  ];

  const otherSkills = [
    {
      title: "HTML",
      icon: html,
    },
    {
      title: "CSS",
      icon: css,
    },
    {
      title: "Git",
      icon: git,
    },
    {
      title: "GitHub",
      icon: github,
    },
  ];
  return (
    <div className="Skills">
      <div className="skillsAcquired">
        <h2>
          <span>
            S<br />
            K<br />I<br />L<br />L<br />S
          </span>
        </h2>
      </div>
      <div className="kalaaContainer">
        <div className="mains">
          {skills.map((item, index) => (
            <div className="kalaaHaru" key={index}>
              <div className="box">
                <p>{item.title}</p>
                <div>
                  <FaStar style={iconStyle} />
                  <FaStar style={iconStyle} />
                  <FaStar style={iconStyle} />
                  <FaStar style={iconStyle} />
                  <FaStar style={iconStyle} />
                  {/* <FaStarHalfAlt /> */}
                </div>
              </div>
              <div className="iconTest">
                <img
                  src={item.icon}
                  alt="PLicons"
                  style={{ width: "55px", height: "55px", fill: "red" }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="otherSkills">
          {otherSkills.map(
            (item, index) => (
              <img src={item.icon} alt="icons" width="55px" height="55px" />
            )
            // console.log(items.title);
          )}
        </div>
      </div>
    </div>
  );
}

export default Skills;

const iconStyle = {
  width: "12px",
  height: "12px",
};
