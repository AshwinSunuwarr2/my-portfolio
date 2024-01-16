import React from "react";
import "./Education.css";

export default function Education() {
  return (
    <div className="eduContainer">
      <div className="leftDiv">
        <div className="topContent" id="topContent"></div>
        <div className="schoolName">
          <h1>Siddhasthali English Boarding H.S.School</h1>
          <p>Sindhuli Madhi, 2</p>
        </div>
        <div className="bottomContent"></div>
        <div className="hsebName">
          <h1>Milestone International College</h1>
          <p>Balkumari, Lalitpur</p>
        </div>
      </div>
      <div className="vl"></div>
      <div className="rightDiv">
        <div className="soloContent"></div>
        <div className="collegeName">
          <h1>Nepal College of Information Technology</h1>
          <p>Balkumari, Lalitpur</p>
        </div>
      </div>
    </div>
  );
}
