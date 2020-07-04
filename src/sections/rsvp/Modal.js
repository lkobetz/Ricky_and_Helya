import React from "react";
import "./Modal.scss";

export default function Modal(props) {
  return (
    <div className="modal-background">
      <div className="modal-content">
        <p className="info-text">
          {props.attending
            ? `Thank you for RSVPing, ${props.name}! We can't wait to see you!`
            : `We're sorry you can't make it, ${props.name}! Thank you for letting us know!`}
        </p>
        <button
          className="submit-button"
          onClick={() => props.showModal(false)}
        >
          <p className="info-text">Close</p>
        </button>
      </div>
    </div>
  );
}
