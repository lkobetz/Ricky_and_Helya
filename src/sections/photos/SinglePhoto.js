import React from "react";

export default function SinglePhoto(props) {
  return (
    <div className="single-photo-container">
      <img src={props.photo.src} alt="" />
    </div>
  );
}
