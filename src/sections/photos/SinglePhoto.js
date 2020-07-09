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
    <div className={className} onClick={handleClick}>
      <img src={props.photo.src} alt="" />
    </div>
  );
}
