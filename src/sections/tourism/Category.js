import React from "react";

export default function Category(props) {
  return (
    <div className="category-item">
      <div className="image-container">
        <img className="category-image" src={props.item.image} alt="" />
      </div>
      <p className="category-name">{props.item.name}</p>
    </div>
  );
}
