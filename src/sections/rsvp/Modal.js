import React from "react";
import PropTypes from "prop-types";
import "./Modal.scss";

export default function Modal(props) {
  const { name, attending, showModal, resetForm } = props;
  return (
    <div className="modal-background">
      <div className="modal-content">
        <p className="info-text">
          {attending
            ? `Thank you for RSVPing, ${name}! We can't wait to see you!`
            : `We're sorry you can't make it, ${name}! Thank you for letting us know!`}
        </p>
        <button
          type="submit"
          className="submit-button"
          onClick={() => {
            showModal(false);
            resetForm();
          }}
        >
          <p className="info-text">Close</p>
        </button>
      </div>
    </div>
  );
}

Modal.propTypes = {
  name: PropTypes.string.isRequired,
  attending: PropTypes.bool.isRequired,
  showModal: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
};
