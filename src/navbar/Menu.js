import React from "react";

export default function Menu() {
  return (
    <div id={"menu-container"}>
      <p className={"navbar-item"}>
        <a href="#rsvp">RSVP</a>
      </p>
      <p className={"navbar-item"}>
        <a href="#schedule">Schedule</a>
      </p>
      <p className={"navbar-item"}>
        <a href="#wedding-party">Wedding Party</a>
      </p>
      <p className={"navbar-item"}>
        <a href="#venue">Venue</a>
      </p>
      <p className={"navbar-item"}>
        <a href="#transportation">Transportation</a>
      </p>
      <p className={"navbar-item"}>
        <a href="#tourism">Tourism</a>
      </p>
      <p className={"navbar-item"}>
        <a href="#registry">Registry</a>
      </p>
      <p className={"navbar-item"}>
        <a href="#photos">Photos</a>
      </p>
    </div>
  );
}
