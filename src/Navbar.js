import React from "react";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <div id={"navbar_container"}>
      <p className={"navbar_item"}>
        <a href="#rsvp">RSVP</a>
      </p>
      <p>|</p>
      <p className={"navbar_item"}>
        <a href="#schedule">Schedule</a>
      </p>
      <p>|</p>
      <p className={"navbar_item"}>
        <a href="#wedding_party">Wedding Party</a>
      </p>
      <p>|</p>
      <p className={"navbar_item"}>
        <a href="#venue">Venue</a>
      </p>
      <p>|</p>
      <p className={"navbar_item"}>
        <a href="#transportation">Transportation</a>
      </p>
      <p>|</p>
      <p className={"navbar_item"}>
        <a href="#tourism">Tourism</a>
      </p>
      <p>|</p>
      <p className={"navbar_item"}>
        <a href="#registry">Registry</a>
      </p>
      <p>|</p>
      <p className={"navbar_item"}>
        <a href="#photos">Photos</a>
      </p>
    </div>
  );
}
