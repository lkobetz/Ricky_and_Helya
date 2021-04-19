import React, { useState } from "react";
import "./RSVP.scss";
import firebase from "firebase/app";
import RSVPForm from "./RSVPForm";
import "firebase/auth";
import "firebase/database";

export default function RSVPform() {
  const [error, changeError] = useState("");
  const [modal, showModal] = useState(false);
  const [modalName, changeModalName] = useState("");
  const [modalAttending, changeModalAttending] = useState(false);
  const [showUpdate, checkUpdate] = useState(false);

  function user() {
    return firebase.auth().currentUser.email;
  }

  function parseName(name) {
    return name
      .toLowerCase()
      .trim()
      .replace(/[^a-z]/g, "");
  }

  function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function findErrors(firstName, lastName, email, attending, notAttending) {
    if (firebase.auth().currentUser.email === "viewer@email.com") {
      changeError("Sorry, you don't appear to be on the guest list!");
      return true;
    }
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

  async function isInDB(ln, fn) {
    let notAttending = null;
    const attending = await firebase
      .database()
      .ref("guests")
      .child(ln)
      .child(fn)
      .once("value")
      .then((snapshot) => {
        return snapshot.val();
      });
    if (!attending) {
      notAttending = await firebase
        .database()
        .ref("notAttending")
        .child(ln)
        .child(fn)
        .once("value")
        .then((snapshot) => {
          return snapshot.val();
        });
    }
    return [attending, notAttending];
  }

  async function adjustGuestCount(op, plusOne) {
    const oldCount = await firebase
      .database()
      .ref("guestCount")
      .once("value")
      .then((snapshot) => {
        return snapshot.val();
      });
    const guestCount = plusOne ? 2 : 1;
    const newCount = op === "add" ? oldCount + guestCount : oldCount - guestCount;
    await firebase.database().ref("guestCount").set(newCount);
  }

  function prepareModal(firstName, attending) {
    changeModalName(firstName[0].toUpperCase() + firstName.slice(1));
    changeModalAttending(attending);
    checkUpdate(false);
    changeError("");
    showModal(true);
  }

  function addToDB(attending, fn, ln, diet, plusOne, email, notAttending) {
    const firstName = parseName(fn);
    const lastName = parseName(ln);
    if (attending) {
      firebase
        .database()
        .ref("guests")
        .child(lastName)
        .child(firstName)
        .set({ dietaryRestrictions: diet, plusOne, email });
      adjustGuestCount("add", plusOne);
    } else if (notAttending) {
      firebase
        .database()
        .ref("notAttending")
        .child(lastName)
        .child(firstName)
        .set({ email });
    }
    prepareModal(firstName, attending);
  }
  async function handleSubmit(
    event,
    fn,
    ln,
    email,
    plusOne,
    diet,
    attending,
    notAttending
  ) {
    event.preventDefault();
    const firstName = parseName(fn);
    const lastName = parseName(ln);
    if (!findErrors(firstName, lastName, email, attending, notAttending)) {
      changeError("");
      const alreadyRSVPd = await isInDB(lastName, firstName);
      if (
        !alreadyRSVPd[0] &&
        !alreadyRSVPd[1] &&
        user() === "guest@email.com"
      ) {
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
          `It looks like you've already RSVP'd, ${
            firstName[0].toUpperCase() + firstName.slice(1)
          }! Would you like to update your information?`
        );
      }
    }
  }

  async function deleteRSVP(fn, ln) {
    const firstName = parseName(fn);
    const lastName = parseName(ln);
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
