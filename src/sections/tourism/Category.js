import React from "react";

export default function Category(props) {
  return (
    <div className="category_item">
      <img className="category_image" src={props.item.image} alt="" />
      <p>{props.item.name}</p>
    </div>
  );
}
