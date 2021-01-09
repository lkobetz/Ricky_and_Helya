import React from "react";
import flower from "../images/flower-11 — копия.png";
import Map from "./Map";
import mansion from "./images/strong_mansion.jpg";
import "./Venue.scss";

export default function Venue() {
  return (
    <div id="venue" className="outer-container">
      <div className="section">
        <div className="section-title">
          <img className="leftSmallFlower" src={flower} alt="" />
          <p>Venue</p>
          <img className="rightSmallFlower" src={flower} alt="" />
        </div>
        <div id="venue-info-container">
          <img src={mansion} alt="" />
          <p id="venue-title">Strong Mansion</p>
          <a href="https://www.google.com/maps/place/7802+Comus+Rd,+Dickerson,+MD+20842/@39.2510303,-77.4033266,17z/data=!3m1!4b1!4m5!3m4!1s0x89b6263588ad03a9:0x6bc1b40a16a42af6!8m2!3d39.2510262!4d-77.4011379">
            <div id="venue-address-container">
              <p>7802B Comus Rd,</p>
              <p>Dickerson, MD 20842</p>
            </div>
          </a>
          <p className="info-text">
            <i>
              "...those who appreciate natural beauty will be better people,
              people who treat each other better."
            </i>
          </p>
          <p className="info-text">-Gordon Strong, Founder of Strong Mansion</p>
        </div>
        <Map />
      </div>
    </div>
  );
}

// The mountain was used as a signal station during the Civil War.
// President Roosevelt made numerous trips to Sugarloaf to enjoy the
// views and tranquility. Gordon Strong, a native of Chicago,
// 'discovered' the mountain while cycling with a friend and began
// acquiring the land in 'woodlots' in 1903. He and his wife, Louise,
// made Sugarloaf their home. The mansion was completed in 1915. Mr.
// Strong believed that, "...those who appreciate natural beauty will
// be better people, people who treat each other better." Description
// from http://pubs.hawthornpublications.com/strongmansion/
