import React from "react";
import flower from "../images/flower-6 — копия.png";
import RSVPform from "./RSVPform";

export default function RSVP() {
  return (
    <div id="rsvp" className="section">
      <div className="section_title">
        <img className="leftSmallFlower" src={flower} alt="" />
        <p id="rsvp_title">Rsvp </p>
        <img className="rightSmallFlower" src={flower} alt="" />
      </div>
      <p className="info_text">
        To RSVP, complete and submit the following form:
      </p>
      <RSVPform />
      <p className="info_text">
        Alternatively, you can email Helya Ghaffari at ghelya1@gmail.com.
      </p>
      <p className="info_text">
        *Please note that due to space restrictions of the venue, all guests
        must be 16 or over.
      </p>
    </div>
  );
}
