import React from "react";
import "./Project.css";
import ProjectCard from "../cards/ProjectCard";
import python from "../images/python.png";
import flutter from "../images/flutter.png";
import react from "../images/react.png";

export default function Project() {
  return (
    <div className="projectContainer">
      <h1>My projects and experience.</h1>
      <div className="project">
        <ProjectCard
          title="NewsBud"
          description="NewsBud is the news feed app created with reactJS. It showcases the managed usage of free news api and feeds the user with latest news possible."
          logo={react}
        />

        <ProjectCard
          title="Criminal Face Recognition System"
          description="Criminal Face Recognition System(CFRS) is the sucurity-based system that detects and recognizes the recorded person in CFRS's warehouse. Built using python and systematic use of machine learning and AI. "
          logo={python}
        />
        <ProjectCard
          title="FreeL"
          description="FreeL, a mobile app, is a freelancing platform with integrated payment portal. Built using flutter and dart."
          logo={flutter}
        />

        <ProjectCard
          title="Text Analyzer"
          description="Text analyzer is the app to interpret the given text like analyzing letter/words length, average reading time, case sensitivity conversion and so on. Built using reactJS."
          logo={react}
        />
      </div>
    </div>
  );
}
