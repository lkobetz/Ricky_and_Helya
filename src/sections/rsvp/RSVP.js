import React from "react";
import flower from "../images/flower-5a.png";

export default function RSVP() {
  return (
    <div id="rsvp" className="section">
      <div className="section_title">
        <img className="leftSmallFlower" src={flower} alt="" />
        <p>R.S.V.P.</p>
        <img className="rightSmallFlower" src={flower} alt="" />
      </div>
    </div>
  );
}
