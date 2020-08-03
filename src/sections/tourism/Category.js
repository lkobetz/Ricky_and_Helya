import React, { useState } from "react";
import PropTypes from "prop-types";
import LocationList from "./LocationList";

export default function Category(props) {
  const { item } = props;
  const { image, name } = item;
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
        <div
          className="image-container"
          onClick={() => handleClick()}
          role="button"
          tabIndex={0}
          onKeyPress={() => {}}
        >
          <img className="category-image" src={image} alt="" />
        </div>
        <p className="category-name">{name}</p>
      </div>
      <LocationList category={name} className={className} />
    </div>
  );
}

Category.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
