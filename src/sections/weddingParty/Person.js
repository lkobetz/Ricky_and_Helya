import React from "react";

export default function Person(props) {
  const person = props.person;
  return (
    <div className="person">
      <img className="person_photo" src={person.photo} alt="" />
      <div className="person_text_container">
        <p className="person_name">{person.name}</p>
        <p className="person_title">{person.title}</p>
        <p className="person_description">{person.description}</p>
      </div>
    </div>
  );
}
