import React from "react";
import flower from "../images/yello flower.png";

export default function Schedule() {
  return (
    <div id="tourism" className="section">
      <div className="section_title">
        <img className="leftSmallFlower" src={flower} alt="" />
        <p>Tourism</p>
        <img className="rightSmallFlower" src={flower} alt="" />
      </div>
    </div>
  );
}
