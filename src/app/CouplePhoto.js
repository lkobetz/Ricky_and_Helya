import React, { useState } from "react";
import PropTypes from "prop-types";
import useWindowDimensions from "../useWindowDimensions";
import "./CouplePhoto.scss";

export default function CouplePhoto(props) {
  const { couple, bouquet1, bouquet2 } = props;
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
          <img className="background-flower" src={bouquet2} alt="" />
          <img className="HR-photos" src={couple} alt="" />
          <img className="background-flower" src={bouquet1} alt="" />
        </div>
      ) : (
        <img className="HR-photos-portrait" src={couple} alt="" />
      )}
    </div>
  );
}

CouplePhoto.propTypes = {
  couple: PropTypes.string.isRequired,
  bouquet1: PropTypes.string.isRequired,
  bouquet2: PropTypes.string.isRequired,
};
