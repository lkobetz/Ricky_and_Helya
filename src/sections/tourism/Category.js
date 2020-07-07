import React from "react";
import LocationList from "./LocationList";

export default function Category(props) {
  function handleClick() {
    if (props.active !== props.item.name) {
      props.changeActive(props.item.name);
    } else props.changeActive("");
  }
  return (
    <div className="category-item-container">
      <div className="category-item">
        <div className="image-container" onClick={() => handleClick()}>
          <img className="category-image" src={props.item.image} alt="" />
        </div>
        <p className="category-name">{props.item.name}</p>
      </div>
      {props.active === props.item.name && <LocationList />}
    </div>
  );
}
