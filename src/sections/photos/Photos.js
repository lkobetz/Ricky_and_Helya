import React from "react";
import flower from "../images/flower-4.png";
import Category from "./Category";
import "./Photos.scss";

export default function Photos(props) {
  const photoTypes = ["wedding", "instagram"];
  return (
    <div id="photos" className="outer-container">
      <div className="section">
        <div className="section-title">
          <img className="leftSmallFlower" src={flower} alt="" />
          <p>Photos</p>
          <img className="rightSmallFlower" src={flower} alt="" />
        </div>
        {photoTypes.map((type) => {
          return <Category type={type} key={type} />;
        })}
      </div>
    </div>
  );
}
