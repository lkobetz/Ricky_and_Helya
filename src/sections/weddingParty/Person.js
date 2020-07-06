import React from "react";

export default function Person(props) {
  const person = props.person;
  return (
    <div className="person">
      <div className="person-name-container">
        <p className="person-name">{person.name}</p>
        <p className="person-title">{person.title}</p>
      </div>
      <div className="person-info-container">
        <img className="person-photo" src={person.photo} alt="" />
        <p className="person-description">{person.description}</p>
      </div>
    </div>
  );
}
