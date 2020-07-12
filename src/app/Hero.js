import React, { useState } from "react";
import header_photo from "../images/header_photo.png";
import useWindowDimensions from "../useWindowDimensions";

export default function Hero() {
  const { width, height } = useWindowDimensions();
  const [portrait, changeOrientation] = useState(false);
  if (height > width && !portrait) {
    changeOrientation(true);
  } else if (height < width && portrait) {
    changeOrientation(false);
  }
  return (
    <div id="hero">
      {!portrait ? (
        <div id="hero-row">
          <p className="hero-text">October 10, 2021</p>
          <img id="header-photo" src={header_photo} alt={""} />
          <p className="hero-text">#AGhaffariTaleWedding</p>
        </div>
      ) : (
        <img id="header-photo" src={header_photo} alt={""} />
      )}
      <p id="hero-title">Helya and Ricky are Getting Married!</p>
    </div>
  );
}