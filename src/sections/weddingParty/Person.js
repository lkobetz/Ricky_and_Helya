import React from "react";

export default function Person(props) {
  const person = props.person;
  return (
    <div className="person">
      <img className="person-photo" src={person.photo} alt="" />
      <div className="person-text-container">
        <p className="person-name">{person.name}</p>
        <p className="person-title">{person.title}</p>
        <p className="person-description">{person.description}</p>
      </div>
    </div>
  );
}
