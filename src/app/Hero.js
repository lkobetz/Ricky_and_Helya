import React, { useState } from "react";
import headerPhoto from "../images/header_photo.png";
import useWindowDimensions from "../useWindowDimensions";
import "./Hero.scss";

export default function Hero() {
  const { width, height } = useWindowDimensions();
  const [portrait, changeOrientation] = useState(false);
  if (height > width && !portrait) {
    changeOrientation(true);
  } else if (height < width && portrait) {
    changeOrientation(false);
  }
  return (
    <div>
      {!portrait ? (
        <div className="hero">
          <div id="hero-row">
            <p className="hero-text">October 10, 2021</p>
            <img id="header-photo" src={headerPhoto} alt="" />
            <p className="hero-text">#AGhaffariTaleWedding</p>
          </div>
          <p id="hero-title">Helya and Ricky are Getting Married!</p>
        </div>
      ) : (
        <div className="hero">
          <img id="header-photo" src={headerPhoto} alt="" />
          <p id="hero-title">Helya and Ricky are Getting Married!</p>
          <p className="hero-text">October 10, 2021</p>
          <p id="hashtag">#AGhaffariTaleWedding</p>
        </div>
      )}
    </div>
  );
}
