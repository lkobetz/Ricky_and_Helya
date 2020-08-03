import React, { useState } from "react";
import PropTypes from "prop-types";
import useWindowDimensions from "../../useWindowDimensions";

export default function Person(props) {
  const { width, height } = useWindowDimensions();
  const [portrait, changeOrientation] = useState(false);
  if (height > width && !portrait) {
    changeOrientation(true);
  } else if (height < width && portrait) {
    changeOrientation(false);
  }
  const { person } = props;
  const { name, title, photo, description } = person;
  return (
    <div className="person">
      {!portrait ? (
        <div>
          <div className="person-name-container">
            <p className="person-name">{name}</p>
            <p className="person-title">{title}</p>
          </div>
          <div className="person-info-container">
            <img className="person-photo" src={photo} alt="" />
            <p className="person-description">{description}</p>
          </div>
        </div>
      ) : (
        <div>
          <div className="person-container">
            <div className="person-name-container">
              <p className="person-name">{name}</p>
              <p className="person-title">{title}</p>
            </div>
            <img className="person-photo" src={photo} alt="" />
          </div>
          <p className="person-description">{description}</p>
        </div>
      )}
    </div>
  );
}

Person.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};
