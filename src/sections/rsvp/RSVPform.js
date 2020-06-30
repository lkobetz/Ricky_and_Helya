import React, { useState } from "react";
import "./RSVP.scss";
import firebase from "firebase";

export default function RSVPform() {
  const [firstName, changeFirstName] = useState("");
  const [lastName, changeLastName] = useState("");
  const [email, changeEmail] = useState("");
  const [plusOne, changePlusOne] = useState("");
  const [diet, changeDiet] = useState("");

  function logState(event) {
    event.preventDefault();
    console.log(firstName, lastName, email, plusOne, diet);
    firebase
      .database()
      .ref("guests")
      .child(lastName)
      .child(firstName)
      .set({ dietaryRestrictions: diet, plusOne: plusOne, email: email });
    changeFirstName("");
    changeLastName("");
    changeEmail("");
    changePlusOne("");
    changeDiet("");
  }

  return (
    <div id="form_container">
      <form onSubmit={(event) => logState(event)} id="rsvpform">
        <div className="form_item">
          <p>First Name</p>
          <input
            className={"form_input"}
            type="text"
            value={firstName}
            onChange={(event) => changeFirstName(event.target.value)}
          />
        </div>
        <div className="form_item">
          <p>Last Name</p>
          <input
            className={"form_input"}
            type="text"
            value={lastName}
            onChange={(event) => changeLastName(event.target.value)}
          />
        </div>
        <div className="form_item">
          <p>Email Address</p>
          <input
            className={"form_input"}
            type="text"
            value={email}
            onChange={(event) => changeEmail(event.target.value)}
          />
        </div>
        <div className="form_item">
          <p>Name of Your Plus One</p>
          <input
            className={"form_input"}
            type="text"
            value={plusOne}
            onChange={(event) => changePlusOne(event.target.value)}
          />
        </div>
        <div className="form_item">
          <p>Dietary Restrictions</p>
          <input
            className={"form_input"}
            type="text"
            value={diet}
            onChange={(event) => changeDiet(event.target.value)}
          />
        </div>
        <button type="submit" className="submit_button">
          Submit
        </button>
      </form>
    </div>
  );
}
