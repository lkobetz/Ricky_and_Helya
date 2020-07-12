import React, { useState } from "react";
import useWindowDimensions from "../useWindowDimensions";
import "./CouplePhoto.scss";

export default function CouplePhoto(props) {
  const { width, height } = useWindowDimensions();
  const [portrait, changeOrientation] = useState(false);
  if (height > width && !portrait) {
    changeOrientation(true);
  } else if (height < width && portrait) {
    changeOrientation(false);
  }
  return (
    <div className="couple-photo-container">
      {!portrait ? (
        <div className="couple-photo">
          <img className="background-flower" src={props.bouquet2} alt="" />
          <img className="HR-photos" src={props.couple} alt="" />
          <img className="background-flower" src={props.bouquet1} alt="" />
        </div>
      ) : (
        <img className="HR-photos-portrait" src={props.couple} alt="" />
      )}
    </div>
  );
}
