import React, { useState } from "react";
import PropTypes from "prop-types";
import Modal from "./Modal";

export default function RSVPForm(props) {
  const {
    error,
    showUpdate,
    modal,
    modalName,
    showModal,
    modalAttending,
  } = props;

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
            className="form-input"
            type="text"
            value={firstName}
            onChange={(event) => changeFirstName(event.target.value)}
          />
        </div>
        <div className="form-item">
          <p>Last Name</p>
          <input
            className="form-input"
            type="text"
            value={lastName}
            onChange={(event) => changeLastName(event.target.value)}
          />
        </div>
        <div className="form-item">
          <p>Email Address</p>
          <input
            className="form-input"
            type="text"
            value={email}
            onChange={(event) => changeEmail(event.target.value)}
          />
        </div>
        <div className="form-item">
          <p>Name of Your Plus One</p>
          <input
            className="form-input"
            type="text"
            value={plusOne}
            onChange={(event) => changePlusOne(event.target.value)}
          />
        </div>
        <div className="form-item">
          <p>Dietary Restrictions</p>
          <input
            className="form-input"
            type="text"
            value={diet}
            onChange={(event) => changeDiet(event.target.value)}
          />
        </div>
        <div className="form-checkbox">
          <p>I can&apos;t wait to join you!</p>
          <input
            className="checkbox"
            type="checkbox"
            checked={attending}
            onChange={() => going(!attending)}
          />
        </div>
        <div className="form-checkbox">
          <p>Unfortunately, I won&apos;t be able to make it.</p>
          <input
            className="checkbox"
            type="checkbox"
            checked={notAttending}
            onChange={() => notGoing(!notAttending)}
          />
        </div>
        <p className="error-text">{error}</p>
        {showUpdate && (
          <div id="update-buttons">
            <button
              type="submit"
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
              type="submit"
              onClick={() => {
                props.checkUpdate(false);
                props.changeError("");
              }}
            >
              No
            </button>
          </div>
        )}
        {!showUpdate && (
          <button type="submit" className="submit-button">
            Submit
          </button>
        )}
      </form>
      {modal && (
        <Modal
          name={modalName}
          showModal={showModal}
          attending={modalAttending}
          resetForm={resetForm}
        />
      )}
    </div>
  );
}

RSVPForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
  showUpdate: PropTypes.bool.isRequired,
  deleteRSVP: PropTypes.func.isRequired,
  addToDB: PropTypes.func.isRequired,
  checkUpdate: PropTypes.func.isRequired,
  changeError: PropTypes.func.isRequired,
  modal: PropTypes.bool.isRequired,
  modalName: PropTypes.string.isRequired,
  showModal: PropTypes.func.isRequired,
  modalAttending: PropTypes.bool.isRequired,
};
