import React from "react";

export default function CouplePhoto(props) {
  return (
    <div className="couple-photo">
      <img className="background-flower" src={props.bouquet2} alt="" />
      <img className="HR-photos" src={props.couple} alt="" />
      <img className="background-flower" src={props.bouquet1} alt="" />
    </div>
  );
}
