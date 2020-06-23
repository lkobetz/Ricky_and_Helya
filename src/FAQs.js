import React from "react";
import flower from "./images/yello flower.png";

export default function Schedule() {
  return (
    <div id="faqs" className="section">
      <div className="section_title">
        <img className="leftSmallFlower" src={flower} alt="" />
        <p>FAQs</p>
        <img className="rightSmallFlower" src={flower} alt="" />
      </div>
    </div>
  );
}
