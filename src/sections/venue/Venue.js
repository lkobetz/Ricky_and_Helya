import React from "react";
import flower from "../images/flower-11 — копия.png";
import Map from "./Map";
import mansion from "./images/strong_mansion.jpg";
import "./Venue.scss";

export default function Schedule() {
  return (
    <div id="venue" className="section">
      <div className="section_title">
        <img className="leftSmallFlower" src={flower} alt="" />
        <p>Venue</p>
        <img className="rightSmallFlower" src={flower} alt="" />
      </div>
      <div id="venue_info_container">
        <img src={mansion} alt="" />
        <p id="venue_title">Strong Mansion</p>
        <div id="venue_address_container">
          <p>7802B Comus Rd,</p>
          <p>Dickerson, MD 20842</p>
        </div>
        <p className="info_text">
          The mountain was used as a signal station during the Civil War.
          President Roosevelt made numerous trips to Sugarloaf to enjoy the
          views and tranquility. Gordon Strong, a native of Chicago,
          'discovered' the mountain while cycling with a friend and began
          acquiring the land in 'woodlots' in 1903. He and his wife, Louise,
          made Sugarloaf their home. The mansion was completed in 1915. Mr.
          Strong believed that, "...those who appreciate natural beauty will be
          better people, people who treat each other better." Description from
          http://pubs.hawthornpublications.com/strongmansion/
        </p>
      </div>
      <Map />
    </div>
  );
}
