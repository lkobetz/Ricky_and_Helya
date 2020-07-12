import React, { useState } from "react";
import LocationList from "./LocationList";

export default function Category(props) {
  const [className, changeClass] = useState("location-list");
  function handleClick() {
    if (className === "location-list") {
      changeClass("animate-list");
    } else {
      changeClass("location-list");
    }
  }
  return (
    <div className="category-item-container">
      <div className="category-item">
        <div className="image-container" onClick={() => handleClick()}>
          <img className="category-image" src={props.item.image} alt="" />
        </div>
        <p className="category-name">{props.item.name}</p>
      </div>
      <LocationList category={props.item.name} class={className} />
    </div>
  );
}
