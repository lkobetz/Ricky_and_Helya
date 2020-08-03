import React from "react";
import flower from "../images/flower-6 — копия.png";
import RSVPFormFunctions from "./RSVPFormFunctions";

export default function RSVP() {
  return (
    <div id="rsvp" className="outer-container">
      {" "}
      <div className="section">
        <div className="section-title">
          <img className="leftSmallFlower" src={flower} alt="" />
          <p id="rsvp-title">Rsvp </p>
          <img className="rightSmallFlower" src={flower} alt="" />
        </div>
        <p className="info-text">To RSVP, submit the following information:</p>
        <RSVPFormFunctions />
        <p className="info-text">
          Alternatively, you can email Helya at ghelya1@gmail.com.
        </p>
        <p className="info-text">
          If you need to edit your information, just resubmit the form.
        </p>
        <p className="info-text">
          *Please note that due to space restrictions of the venue, all guests
          must be 16 or over.
        </p>
      </div>
    </div>
  );
}
