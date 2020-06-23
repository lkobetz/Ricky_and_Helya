import React from "react";
import flower from "./images/flower-11 — копия.png";

export default function Schedule() {
  return (
    <div id="venue" className="section">
      <div className="section_title">
        <img className="leftSmallFlower" src={flower} alt="" />
        <p>Venue</p>
        <img className="rightSmallFlower" src={flower} alt="" />
      </div>
    </div>
  );
}
