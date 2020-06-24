import React from "react";
import flower from "../images/flower-5a.png";

export default function Schedule() {
  return (
    <div id="registry" className="section">
      <div className="section_title">
        <img className="leftSmallFlower" src={flower} alt="" />
        <p>Registry</p>
        <img className="rightSmallFlower" src={flower} alt="" />
      </div>
    </div>
  );
}
