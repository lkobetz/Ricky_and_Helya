import React from "react";
import { source } from "./source";
import SinglePhoto from "./SinglePhoto";

export default function Category(props) {
  const photos = source[props.type];
  return (
    <div className="category-container">
      <p className="photo-type-title">{props.type}</p>
      <div className="photo-container">
        {photos.map((photo) => {
          return <SinglePhoto photo={photo} />;
        })}
      </div>
    </div>
  );
}
