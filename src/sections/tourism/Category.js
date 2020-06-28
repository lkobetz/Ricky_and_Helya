import React from "react";

export default function Category(props) {
  return (
    <div className="category_item">
      <img className="category_image" src={props.item.image} alt="" />
      <p className="info_text">{props.item.name}</p>
    </div>
  );
}
