import React, { useState } from "react";
import "./projectCard.css";

export default function ProjectCard(props) {
  const [isHovering, setIsHovering] = useState(false);

  const MouseOver = () => {
    setIsHovering(true);
  };
  const MouseOut = () => {
    setIsHovering(false);
  };
  return (
    <div className="cardContainer">
      <div className="project" onMouseOver={MouseOver} onMouseLeave={MouseOut}>
        {isHovering && (
          <div
            className="overlay"
            style={{
              backgroundImage: `url(${props.logo})`,
            }}
          ></div>
        )}
        <div>
          <h2>{props.title}</h2>
        </div>
        <div>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}
