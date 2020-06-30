import React from "react";

export default function CouplePhoto(props) {
  return (
    <div className="couple_photo">
      <img className="background_flower" src={props.bouquet2} alt="" />
      <img className="HR_photos" src={props.couple} alt="" />
      <img className="background_flower" src={props.bouquet1} alt="" />
    </div>
  );
}
