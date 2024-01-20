import React from "react";
import "./Education.css";

export default function Education() {
  return (
    <>
      <h1>DEGREE</h1>
      <div className="eduContainer">
        <div className="leftDiv">
          <div className="building">
            <h2>SLC</h2>
            <h1>Siddhasthali English Boarding H.S.School</h1>

            <p>
              Sindhuli Madhi, 2 <span className="completedYear">2072 B.S.</span>
            </p>
          </div>

          <div className="building">
            <h2>HSEB Science</h2>
            <h1>Milestone International College</h1>
            <p>
              Balkumari, Lalitpur{" "}
              <span className="completedYear">2075 B.S.</span>
            </p>
          </div>
        </div>

        <div className="vl"></div>

        <div className="rightDiv">
          <div className="building">
            <h2>Bachelors in Computer Engineering</h2>
            <h1>Nepal College of Information Technology</h1>
            <p>
              Balkumari, Lalitpur{" "}
              <span className="completedYear">2080 B.S.</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
