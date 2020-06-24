import React from "react";
import flower from "../images/flower-4.png";

export default function Schedule() {
  return (
    <div id="photos" className="section">
      <div className="section_title">
        <img className="leftSmallFlower" src={flower} alt="" />
        <p>Photos</p>
        <img className="rightSmallFlower" src={flower} alt="" />
      </div>
    </div>
  );
}
