import React, { useState } from "react";
import "./RSVP.scss";
import firebase from "firebase";
import RSVPForm from "./RSVPForm";

export default function RSVPform() {
  const [error, changeError] = useState("");
  const [modal, showModal] = useState(false);
  const [modalName, changeModalName] = useState("");
  const [modalAttending, changeModalAttending] = useState(false);
  const [showUpdate, checkUpdate] = useState(false);

  async function handleSubmit(
    event,
    firstName,
    lastName,
    email,
    plusOne,
    diet,
    attending,
    notAttending
  ) {
    event.preventDefault();
    if (!findErrors(firstName, lastName, email, attending, notAttending)) {
      changeError("");
      const alreadyRSVPd = await isInDB(lastName, firstName);
      if (!alreadyRSVPd[0] && !alreadyRSVPd[1]) {
        addToDB(
          attending,
          firstName,
          lastName,
          diet,
          plusOne,
          email,
          notAttending
        );
      } else if (alreadyRSVPd[0] || alreadyRSVPd[1]) {
        checkUpdate(true);
        changeError(
          `It looks like you've already RSVP'd, ${firstName}! Would you like to update your information?`
        );
      }
    }
  }

  function parseName(name) {
    return name
      .toLowerCase()
      .trim()
      .replace(/[^a-z]/g, "");
  }

  function addToDB(
    attending,
    firstName,
    lastName,
    diet,
    plusOne,
    email,
    notAttending
  ) {
    firstName = parseName(firstName);
    lastName = parseName(lastName);
    console.log(firstName, lastName);
    if (attending) {
      firebase
        .database()
        .ref("guests")
        .child(lastName)
        .child(firstName)
        .set({ dietaryRestrictions: diet, plusOne: plusOne, email: email });
      adjustGuestCount("add");
    } else if (notAttending) {
      firebase
        .database()
        .ref("notAttending")
        .child(lastName)
        .child(firstName)
        .set({ email: email });
    }
    prepareModal(firstName, attending);
  }

  function prepareModal(firstName, attending) {
    changeModalName(firstName);
    changeModalAttending(attending);
    checkUpdate(false);
    changeError("");
    showModal(true);
  }

  function findErrors(firstName, lastName, email, attending, notAttending) {
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
    if (!emailIsValid(email)) {
      changeError("The email address is not formatted correctly.");
      return true;
    }
    if (!attending && !notAttending) {
      changeError("Please check one of the boxes.");
      return true;
    }
    if (attending && notAttending) {
      changeError("Please select only one box.");
      return true;
    }
    return false;
  }

  async function isInDB(lastName, firstName) {
    lastName = parseName(lastName);
    firstName = parseName(firstName);
    let notAttending = null;
    let attending = await firebase
      .database()
      .ref("guests")
      .child(lastName)
      .child(firstName)
      .once("value")
      .then(function (snapshot) {
        return snapshot.val();
      });
    if (!attending) {
      notAttending = await firebase
        .database()
        .ref("notAttending")
        .child(lastName)
        .child(firstName)
        .once("value")
        .then(function (snapshot) {
          return snapshot.val();
        });
    }
    return [attending, notAttending];
  }

  function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  async function adjustGuestCount(op) {
    const oldCount = await firebase
      .database()
      .ref("guestCount")
      .once("value")
      .then(function (snapshot) {
        return snapshot.val();
      });
    const newCount = op === "add" ? oldCount + 1 : oldCount - 1;
    await firebase.database().ref("guestCount").set(newCount);
  }

  async function deleteRSVP(firstName, lastName) {
    firstName = parseName(firstName);
    lastName = parseName(lastName);
    const attending = await isInDB(lastName, firstName);
    const ref = attending[0] ? "guests" : "notAttending";
    firebase.database().ref(ref).child(lastName).child(firstName).remove();
    if (ref === "guests") {
      await adjustGuestCount("minus");
    }
    changeError("");
    checkUpdate(false);
  }

  return (
    <RSVPForm
      handleSubmit={handleSubmit}
      error={error}
      showUpdate={showUpdate}
      addToDB={addToDB}
      deleteRSVP={deleteRSVP}
      checkUpdate={checkUpdate}
      changeError={changeError}
      modal={modal}
      modalName={modalName}
      modalAttending={modalAttending}
      showModal={showModal}
    />
  );
}
