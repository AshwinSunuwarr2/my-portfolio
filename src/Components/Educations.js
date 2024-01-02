import React, { useState } from "react";
import "./Education.css";

export default function Educations(props) {
  const [isHidden, setIsHidden] = useState(true);

  const handleClick = () => {
    setIsHidden(!isHidden);
  };

  const btnScroll = {
    // backgroundColor: props.handleScroll ? "rgb(155 213 189 / 83%)" : "red",
    // transition: "background-color 3s ease-in-out",
    // height: "10%",
    // transition: "height 3s ease-in-out",
  };

  return (
    <div className="Educations">
      <div className="btnContainer">
        <button
          className="arrow-button-edu"
          onClick={handleClick}
          style={btnScroll}
        >
          Educations
        </button>
      </div>

      {!isHidden
        ? "NEC registered engineer"
        : "Bachelors completed & NEC registered engineer"}
    </div>
  );
}
