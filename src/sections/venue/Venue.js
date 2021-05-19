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
          <br />
          <br />
          <p className="info-text">
            Located in Sugarloaf Mountain, Strong Mansion was built in 1912 and served as the home of Gordon and Louise Strong, where they raised their 9 adopted sons. Gordon fell in love with Sugarloaf Mountain when cycling with a friend. He began acquiring woodlots, eventually owning 3,000 acres. Now the property and home is owned by Stronghold Incorporated, a nonprofit organization founded by Gordon and Louise Strong, with the mission of preserving the natural beauty of Sugarloaf mountain while keeping it open for public enjoyment.
          </p>
          <br />
          <p className="info-text">
            <i>
              "...those who appreciate natural beauty will be better people,
              people who treat each other better."
            </i>
          </p>
          <p className="info-text">
            -Gordon Strong, Founder of Strong Mansion
          </p>
          <br />
          <p className="info-text">
            <b>
              Catering services provided by Celebrations Catering.
            </b>
            </p>
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
