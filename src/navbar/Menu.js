import React from "react";

export default function Menu(props) {
  const id =
    props.menu && props.portrait
      ? "menu-container-hide"
      : "menu-container-show";
  return (
    <div id={id}>
      <p className="close" onClick={() => props.toggleMenu(false)}>
        Close Menu
      </p>
      <a
        href="#rsvp"
        className={"navbar-item"}
        onClick={() => props.toggleMenu(false)}
      >
        <p>RSVP</p>
      </a>
      <a
        href="#schedule"
        className={"navbar-item"}
        onClick={() => props.toggleMenu(false)}
      >
        <p>Schedule</p>
      </a>
      <a
        href="#wedding-party"
        className={"navbar-item"}
        onClick={() => props.toggleMenu(false)}
      >
        <p>Wedding Party</p>
      </a>
      <a
        href="#venue"
        className={"navbar-item"}
        onClick={() => props.toggleMenu(false)}
      >
        <p>Venue</p>
      </a>
      <a
        href="#transportation"
        className={"navbar-item"}
        onClick={() => props.toggleMenu(false)}
      >
        <p>Transportation</p>
      </a>
      <a
        href="#tourism"
        className={"navbar-item"}
        onClick={() => props.toggleMenu(false)}
      >
        <p>Tourism</p>
      </a>
      <a
        href="#registry"
        className={"navbar-item"}
        onClick={() => props.toggleMenu(false)}
      >
        <p>Registry</p>
      </a>
      <a
        href="#photos"
        className={"navbar-item"}
        onClick={() => props.toggleMenu(false)}
      >
        <p>Photos</p>
      </a>
    </div>
  );
}
