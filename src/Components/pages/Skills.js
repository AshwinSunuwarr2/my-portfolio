import React, { useState } from "react";
import "./Skills.css";
import {
  FaPython,
  FaStar,
  FaStarHalfAlt,
  FaReact,
  FaPlus,
} from "react-icons/fa";
import { FaC } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { SiDjango } from "react-icons/si";

function Skills() {
  const [skills, setSkills] = useState([
    {
      title: "Python",
      rating: "5",
      icon: (
        <FaPython style={{ color: "#48aadb", height: "55px", width: "55px" }} />
      ),
    },
    {
      title: "JS",
      rating: "5",
      icon: (
        <IoLogoJavascript
          style={{ color: "orange", height: "55px", width: "55px" }}
        />
      ),
    },
    {
      title: "React",
      rating: "5",
      icon: (
        <FaReact style={{ color: "orange", height: "55px", width: "55px" }} />
      ),
    },
    {
      title: "Django",
      rating: "5",
      icon: (
        <SiDjango style={{ color: "orange", height: "55px", width: "55px" }} />
      ),
    },
    {
      title: "React Native",
      rating: "5",
      icon: (
        <FaReact style={{ color: "orange", height: "55px", width: "55px" }} />
      ),
    },
    {
      title: ".Net",
      rating: "5",
      icon: (
        <IoLogoJavascript
          style={{ color: "orange", height: "55px", width: "55px" }}
        />
      ),
    },
    {
      title: "C",
      rating: "5",
      icon: <FaC style={{ color: "orange", height: "55px", width: "55px" }} />,
    },
    {
      title: "C++",
      rating: "5",
      icon: (
        <FaPlus style={{ color: "orange", height: "16px", width: "16px" }} />
      ),
    },
  ]);
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
            <div className="kalaaHaru">
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
              <div className="iconTest">{item.icon}</div>
            </div>
          ))}
        </div>
        <div>others</div>
      </div>
    </div>
  );
}

export default Skills;

const iconStyle = {
  width: "12px",
  height: "12px",
};
