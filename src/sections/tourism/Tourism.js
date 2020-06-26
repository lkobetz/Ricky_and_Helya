import React from "react";
import flower from "../images/yello flower.png";
import Category from "./Category.js";
import "./Tourism.scss";

export default function Schedule() {
  const items = [
    { name: "Downtown" },
    { name: "Nature" },
    { name: "Restaurants" },
    { name: "Bars" },
  ];
  return (
    <div id="tourism" className="section">
      <div className="section_title">
        <img className="leftSmallFlower" src={flower} alt="" />
        <p>Tourism</p>
        <img className="rightSmallFlower" src={flower} alt="" />
      </div>
      <div id="tourism_content">
        {items.map((item) => {
          return <Category item={item} />;
        })}
      </div>
    </div>
  );
}
