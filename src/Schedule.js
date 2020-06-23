import React from "react";
import flower from "./images/flower-9.png";

export default function Schedule() {
  return (
    <div id="schedule" className="section">
      <div className="section_title">
        <img className="leftSmallFlower" src={flower} alt="" />
        <p>Schedule</p>
        <img className="rightSmallFlower" src={flower} alt="" />
      </div>
    </div>
  );
}
