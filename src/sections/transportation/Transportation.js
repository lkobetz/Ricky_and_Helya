import React from "react";
import flower from "../images/flower-6.png";

export default function Transportation() {
  return (
    <div id="transportation" className="outer-container">
      <div className="section">
        <div className="section-title">
          <img className="leftSmallFlower" src={flower} alt="" />
          <p>Transportation</p>
          <img className="rightSmallFlower" src={flower} alt="" />
        </div>
      </div>
    </div>
  );
}

// pickup at 3:30 and 4:30 from the hotel
// air-conditioned minibus
