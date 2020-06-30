import React, { useState } from "react";
import "./RSVP.scss";
import firebase from "firebase";

export default function RSVPform() {
  const [firstName, changeFirstName] = useState("");
  const [lastName, changeLastName] = useState("");
  const [email, changeEmail] = useState("");
  const [plusOne, changePlusOne] = useState("");
  const [diet, changeDiet] = useState("");
  const [error, changeError] = useState("");
  // const [modal, showModal] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    if (!findErrors()) {
      changeError("");
      const present = await isInDB();
      if (!present) {
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
        // showModal(true);
      } else if (present) {
        changeError(`It looks like you've already RSVP'd, ${firstName}!`);
      }
    }
  }

  function findErrors() {
    if (!firstName) {
      changeError("Please enter your first name.");
      return true;
    }
    if (!lastName) {
      changeError("Please enter your last name.");
      return true;
    }
    if (!email) {
      changeError("Please enter your email address.");
      return true;
    }
    if (!emailIsValid()) {
      changeError("The email address is not formatted correctly.");
      return true;
    }
    return false;
  }

  async function isInDB() {
    const result = await firebase
      .database()
      .ref("guests")
      .child(lastName)
      .child(firstName)
      .once("value")
      .then(function (snapshot) {
        return snapshot.val();
      });
    return result;
  }

  function emailIsValid() {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  return (
    <div id="form_container">
      <form onSubmit={(event) => handleSubmit(event)} id="rsvpform">
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
        {error && <p className="error_text">{error}</p>}
        <button type="submit" className="submit_button">
          Submit
        </button>
      </form>
    </div>
  );
}
