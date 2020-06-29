import React from "react";

export default function Category(props) {
  return (
    <div className="category_item">
      <div className="image_container">
        <img className="category_image" src={props.item.image} alt="" />
      </div>
      <p className="info_text">{props.item.name}</p>
    </div>
  );
}
