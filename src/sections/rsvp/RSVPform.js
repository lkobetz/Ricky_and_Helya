import React, { useState } from "react";
import "./RSVP.scss";
import { handleSubmit, deleteRSVP, addToDB, resetForm } from "./formFunctions";
import Modal from "./Modal";

export default function RSVPform() {
  const [firstName, changeFirstName] = useState("");
  const [lastName, changeLastName] = useState("");
  const [email, changeEmail] = useState("");
  const [plusOne, changePlusOne] = useState("");
  const [diet, changeDiet] = useState("");
  const [error, changeError] = useState("");
  const [modal, showModal] = useState(false);
  const [modalName, changeModalName] = useState("");
  const [attending, going] = useState(false);
  const [notAttending, notGoing] = useState(false);
  const [modalAttending, changeModalAttending] = useState(false);
  const [showUpdate, checkUpdate] = useState(false);

  const submitProps = [
    changeError,
    lastName,
    firstName,
    diet,
    plusOne,
    email,
    changeFirstName,
    changeLastName,
    changeEmail,
    changePlusOne,
    changeDiet,
    showModal,
    changeModalName,
    attending,
    notAttending,
    going,
    notGoing,
    changeModalAttending,
    checkUpdate,
    false,
  ];

  return (
    <div id="form-container">
      <form
        onSubmit={(event) => handleSubmit(event, ...submitProps)}
        id="rsvpform"
      >
        <div className="form-item">
          <p>First Name</p>
          <input
            className={"form-input"}
            type="text"
            value={firstName}
            onChange={(event) => changeFirstName(event.target.value)}
          />
        </div>
        <div className="form-item">
          <p>Last Name</p>
          <input
            className={"form-input"}
            type="text"
            value={lastName}
            onChange={(event) => changeLastName(event.target.value)}
          />
        </div>
        <div className="form-item">
          <p>Email Address</p>
          <input
            className={"form-input"}
            type="text"
            value={email}
            onChange={(event) => changeEmail(event.target.value)}
          />
        </div>
        <div className="form-item">
          <p>Name of Your Plus One</p>
          <input
            className={"form-input"}
            type="text"
            value={plusOne}
            onChange={(event) => changePlusOne(event.target.value)}
          />
        </div>
        <div className="form-item">
          <p>Dietary Restrictions</p>
          <input
            className={"form-input"}
            type="text"
            value={diet}
            onChange={(event) => changeDiet(event.target.value)}
          />
        </div>
        <div className="form-checkbox">
          <p>I can't wait to join you!</p>
          <input
            className={"checkbox"}
            type="checkbox"
            checked={attending}
            onChange={() => going(!attending)}
          />
        </div>
        <div className="form-checkbox">
          <p>Unfortunately, I won't be able to make it.</p>
          <input
            className={"checkbox"}
            type="checkbox"
            checked={notAttending}
            onChange={() => notGoing(!notAttending)}
          />
        </div>
        <p className="error-text">{error}</p>
        {showUpdate && (
          <div>
            <button
              className="submit-button"
              onClick={() => {
                deleteRSVP(firstName, lastName, changeError, checkUpdate)
                  .then(() =>
                    addToDB(
                      attending,
                      firstName,
                      lastName,
                      diet,
                      plusOne,
                      email,
                      notAttending,
                      changeModalName,
                      changeModalAttending,
                      showModal
                    )
                  )
                  .then(() =>
                    resetForm(
                      changeFirstName,
                      changeLastName,
                      changeEmail,
                      changePlusOne,
                      changeDiet,
                      going,
                      notGoing
                    )
                  );
              }}
            >
              Yes
            </button>
            <button
              className="submit-button"
              onClick={() => {
                checkUpdate(false);
                changeError("");
              }}
            >
              No
            </button>
          </div>
        )}
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
      {modal && (
        <Modal
          name={modalName}
          showModal={showModal}
          attending={modalAttending}
        />
      )}
    </div>
  );
}
