import React, { useState } from "react";

export default function SinglePhoto(props) {
  const [className, changeClass] = useState("single-photo-container");
  function handleClick() {
    if (className === "single-photo-container") {
      changeClass("active-photo");
    } else {
      changeClass("single-photo-container");
    }
  }
  return (
    <div className="photo-and-caption-container">
      <div className={className} onClick={handleClick}>
        <img src={props.photo.url} alt="" />
      </div>
      {props.photo.caption && (
        <p className="caption-text">
          <i>"{props.photo.caption}"</i>
        </p>
      )}
      {props.photo.submitter && (
        <p className="caption-text">- {props.photo.submitter}</p>
      )}
    </div>
  );
}
