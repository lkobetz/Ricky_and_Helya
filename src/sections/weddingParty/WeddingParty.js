import React from "react";
import flower from "../images/flower-3.png";

export default function Schedule() {
  return (
    <div id="wedding_party" className="section">
      <div className="section_title">
        <img className="leftSmallFlower" src={flower} alt="" />
        <p>Wedding Party</p>
        <img className="rightSmallFlower" src={flower} alt="" />
      </div>
    </div>
  );
}
