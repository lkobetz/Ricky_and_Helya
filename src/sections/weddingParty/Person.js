import React, { useState } from "react";
import useWindowDimensions from "../../useWindowDimensions";

export default function Person(props) {
  const { width, height } = useWindowDimensions();
  const [portrait, changeOrientation] = useState(false);
  if (height > width && !portrait) {
    changeOrientation(true);
  } else if (height < width && portrait) {
    changeOrientation(false);
  }
  const person = props.person;
  return (
    <div className="person">
      {!portrait ? (
        <div>
          <div className="person-name-container">
            <p className="person-name">{person.name}</p>
            <p className="person-title">{person.title}</p>
          </div>
          <div className="person-info-container">
            <img className="person-photo" src={person.photo} alt="" />
            <p className="person-description">{person.description}</p>
          </div>
        </div>
      ) : (
        <div>
          <div className="person-container">
            <div className="person-name-container">
              <p className="person-name">{person.name}</p>
              <p className="person-title">{person.title}</p>
            </div>
            <img className="person-photo" src={person.photo} alt="" />
          </div>
          <p className="person-description">{person.description}</p>
        </div>
      )}
    </div>
  );
}
