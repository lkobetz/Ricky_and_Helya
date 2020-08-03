import React, { useState } from "react";
import PropTypes from "prop-types";

export default function SinglePhoto(props) {
  const { photo } = props;
  const { url, caption, submitter } = photo;
  const [imageWrapperClass, changeClass] = useState("single-photo-container");
  function handleClick() {
    if (imageWrapperClass === "single-photo-container")
      changeClass("active-photo");
    else changeClass("single-photo-container");
  }
  return (
    <div className="photo-and-caption-container">
      <div
        className={imageWrapperClass}
        onClick={handleClick}
        role="button"
        tabIndex={0}
        onKeyPress={() => {}}
      >
        <img src={url} alt="" />
      </div>
      {caption && (
        <p className="caption-text">
          <i>&quot;{caption}&quot;</i>
        </p>
      )}
      {submitter && <p className="caption-text">- {submitter}</p>}
    </div>
  );
}

SinglePhoto.propTypes = {
  photo: PropTypes.shape({
    url: PropTypes.string.isRequired,
    caption: PropTypes.string,
    submitter: PropTypes.string,
  }).isRequired,
};
