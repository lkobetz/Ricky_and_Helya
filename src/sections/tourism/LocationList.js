import React from "react";
import PropTypes from "prop-types";
import LocationItem from "./LocationItem";
import locations from "./locations";

export default function LocationList(props) {
  const { category, className } = props;

  return (
    <div className={className}>
      {locations[category].map((location) => {
        return <LocationItem info={location} key={location.text} />;
      })}
    </div>
  );
}

LocationList.propTypes = {
  category: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};
