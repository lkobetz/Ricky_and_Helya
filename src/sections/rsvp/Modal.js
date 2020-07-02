import React from "react";
import "./Modal.scss";

export default function Modal(props) {
  return (
    <div className="modal_background">
      <div className="modal_content">
        <p className="info_text">
          Thank you for RSVPing, {props.name}! We can't wait to see you!
        </p>
        <button className="modal_button" onClick={() => props.showModal(false)}>
          <p className="info_text">Close</p>
        </button>
      </div>
    </div>
  );
}
