import React from "react";
import flower from "../images/flower-8.png";

export default function Schedule() {
  return (
    <div id="registry" className="outer-container">
      <div className="section">
        <div className="section-title">
          <img className="leftSmallFlower" src={flower} alt="" />
          <p>Registry</p>
          <img className="rightSmallFlower" src={flower} alt="" />
        </div>
      </div>
    </div>
  );
}
