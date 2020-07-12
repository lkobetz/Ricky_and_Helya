import React, { useState } from "react";
import "./Navbar.scss";
import useWindowDimensions from "../useWindowDimensions";
import Menu from "./Menu";

export default function Navbar() {
  const { width, height } = useWindowDimensions();
  const [portrait, changeOrientation] = useState(false);
  if (height > width && !portrait) {
    changeOrientation(true);
  } else if (height < width && portrait) {
    changeOrientation(false);
  }
  const [menu, toggleMenu] = useState(false);
  return (
    <div id="nav-outer-container">
      {!portrait ? (
        <div id={"navbar-container"}>
          <p className={"navbar-item"}>
            <a href="#rsvp">RSVP</a>
          </p>
          <p>|</p>
          <p className={"navbar-item"}>
            <a href="#schedule">Schedule</a>
          </p>
          <p>|</p>
          <p className={"navbar-item"}>
            <a href="#wedding-party">Wedding Party</a>
          </p>
          <p>|</p>
          <p className={"navbar-item"}>
            <a href="#venue">Venue</a>
          </p>
          <p>|</p>
          <p className={"navbar-item"}>
            <a href="#transportation">Transportation</a>
          </p>
          <p>|</p>
          <p className={"navbar-item"}>
            <a href="#tourism">Tourism</a>
          </p>
          <p>|</p>
          <p className={"navbar-item"}>
            <a href="#registry">Registry</a>
          </p>
          <p>|</p>
          <p className={"navbar-item"}>
            <a href="#photos">Photos</a>
          </p>
        </div>
      ) : (
        <div id="navbar-container-portrait">
          <p className="initials">H&R</p>
          <p>October 10, 2021</p>
          <p>#AGhaffariTaleWedding</p>
          <p id="nav-toggle" onClick={() => toggleMenu(!menu)}>
            &#9776;
          </p>
        </div>
      )}
      <Menu menu={menu} portrait={portrait} toggleMenu={toggleMenu} />
    </div>
  );
}
