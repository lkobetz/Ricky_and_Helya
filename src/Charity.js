import React from "react";
import flower from "./images/flower-6.png";

export default function Schedule() {
  return (
    <div id="charity" className="section">
      <div className="section_title">
        <img className="leftSmallFlower" src={flower} alt="" />
        <p>Charity</p>
        <img className="rightSmallFlower" src={flower} alt="" />
      </div>
    </div>
  );
}
