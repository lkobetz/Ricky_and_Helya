import React from "react";
import "./Modal.scss";

export default function Modal(props) {
  return (
    <div className="show-modal">
      <div className="modal_content">
        <p className="info_text">
          Thank you for RSVPing, {props.name}! We look forward to seeing you!
        </p>
        <button className="modal_button" onClick={() => props.showModal(false)}>
          <p className="info_text">Close</p>
        </button>
      </div>
    </div>
  );
}
