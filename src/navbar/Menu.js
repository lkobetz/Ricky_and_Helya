import React from "react";
import PropTypes from "prop-types";

export default function Menu(props) {
  const { menu, portrait, toggleMenu } = props;
  const id = menu && portrait ? "menu-container-hide" : "menu-container-show";
  return (
    <div id={id}>
      <div
        className="close"
        onClick={() => props.toggleMenu(false)}
        role="button"
        tabIndex={0}
        onKeyPress={() => {}}
      >
        <p>Close Menu</p>
      </div>
      <a
        href="#rsvp"
        className="navbar-item"
        onClick={() => props.toggleMenu(false)}
      >
        <p>RSVP</p>
      </a>
      <a
        href="#schedule"
        className="navbar-item"
        onClick={() => toggleMenu(false)}
      >
        <p>Schedule</p>
      </a>
      <a
        href="#wedding-party"
        className="navbar-item"
        onClick={() => props.toggleMenu(false)}
      >
        <p>Wedding Party</p>
      </a>
      <a
        href="#venue"
        className="navbar-item"
        onClick={() => props.toggleMenu(false)}
      >
        <p>Venue</p>
      </a>
      <a
        href="#accommodations"
        className="navbar-item"
        onClick={() => props.toggleMenu(false)}
      >
        <p>Accommodations</p>
      </a>
      <a
        href="#tourism"
        className="navbar-item"
        onClick={() => props.toggleMenu(false)}
      >
        <p>Tourism</p>
      </a>
      {/* <a
        href="#registry"
        className="navbar-item"
        onClick={() => props.toggleMenu(false)}
      >
        <p>Registry</p>
      </a> */}
      <a
        href="#photos"
        className="navbar-item"
        onClick={() => props.toggleMenu(false)}
      >
        <p>Photos</p>
      </a>
    </div>
  );
}

Menu.propTypes = {
  menu: PropTypes.bool.isRequired,
  portrait: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};
