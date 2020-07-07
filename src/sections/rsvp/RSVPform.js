import React, { useState } from "react";
import Modal from "./Modal";

export default function RSVPForm(props) {
  const [firstName, changeFirstName] = useState("");
  const [lastName, changeLastName] = useState("");
  const [email, changeEmail] = useState("");
  const [plusOne, changePlusOne] = useState("");
  const [diet, changeDiet] = useState("");
  const [attending, going] = useState(false);
  const [notAttending, notGoing] = useState(false);

  function resetForm() {
    changeFirstName("");
    changeLastName("");
    changeEmail("");
    changePlusOne("");
    changeDiet("");
    going(false);
    notGoing(false);
  }
  return (
    <div id="form-container">
      <form
        onSubmit={(event) => {
          props.handleSubmit(
            event,
            firstName,
            lastName,
            email,
            plusOne,
            diet,
            attending,
            notAttending
          );
        }}
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
        <p className="error-text">{props.error}</p>
        {props.showUpdate && (
          <div id="update-buttons">
            <button
              onClick={() => {
                props
                  .deleteRSVP(firstName, lastName)
                  .then(() =>
                    props.addToDB(
                      attending,
                      firstName,
                      lastName,
                      diet,
                      plusOne,
                      email,
                      notAttending
                    )
                  )
                  .then(() => resetForm());
              }}
            >
              Yes
            </button>
            <button
              onClick={() => {
                props.checkUpdate(false);
                props.changeError("");
              }}
            >
              No
            </button>
          </div>
        )}
        {!props.showUpdate && (
          <button type="submit" className="submit-button">
            Submit
          </button>
        )}
      </form>
      {props.modal && (
        <Modal
          name={props.modalName}
          showModal={props.showModal}
          attending={props.modalAttending}
          resetForm={resetForm}
        />
      )}
    </div>
  );
}
