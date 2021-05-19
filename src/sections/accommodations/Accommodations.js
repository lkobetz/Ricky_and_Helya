import React from "react";
import flower from "../images/flower-6.png";
import "./Accommodations.scss";
import hampton from "./hampton-inn.jpeg";
import hilton from "./hilton-garden-inn.webp";

export default function Accommodations() {
  return (
    <div id="accommodations" className="outer-container">
      <div className="section">
        <div className="section-title">
          <img className="leftSmallFlower" src={flower} alt="" />
          <p>Accommodations</p>
          <img className="rightSmallFlower" src={flower} alt="" />
        </div>
        <p className="info-text-link">
          We've reserved blocks at the following two hotels:
        </p>
        <div className="hotel-columns">
          <div className="hotel-info">
            <img src={hampton} className="hotel-photo" alt="Hampton Inn" />
            <a className="info-text-link" href="https://www.google.com/maps/place/Hampton+Inn+Frederick/@39.3788564,-77.410569,17z/data=!4m16!1m7!3m6!1s0x89c9da2740540f33:0xae36842dae99e0c5!2s5311+Buckeystown+Pike,+Frederick,+MD+21704!3b1!8m2!3d39.3788523!4d-77.4083803!3m7!1s0x89c9da2746d4354b:0x8bd45c4eaadbf15d!5m2!4m1!1i2!8m2!3d39.3789638!4d-77.4083579">
              Hampton Inn
              <br />
              5311 Buckeystown Pike,
              <br />
              Frederick, MD 21704
              <br />
              (301) 698-2500
            </a>
            <a className="info-text-link" href="https://group.hamptoninn.com/jx53p">
              Book a room!
            </a>
          </div>
          <div className="hotel-info">
            <img src={hilton} className="hotel-photo" alt="Hilton Inn" />
            <a className="info-text-link" href="https://www.google.com/maps/place/Hilton+Garden+Inn+Frederick/@39.379012,-77.4159945,17z/data=!4m16!1m7!3m6!1s0x89c9da2810dda605:0xb92d6ae187717f21!2s7226+Corporate+Ct,+Frederick,+MD+21703!3b1!8m2!3d39.3790079!4d-77.4138058!3m7!1s0x89c9da2822d6d941:0x53dfcbdf62a87600!5m2!4m1!1i2!8m2!3d39.3790037!4d-77.4138984">
              Hilton Garden Inn
              <br />
              7226 Corporate Ct,
              <br />
              Frederick, MD 21703
              <br />
              (240) 566-1500
            </a>
            <a className="info-text-link" href="https://www.hilton.com/en/book/reservation/deeplink/?&ctyhocn=IADFRGI&groupCode=GBWO10&arrival=20211007&departure=20211011&cid=OM,WW,HILTONLINK,en,DirectLink&fromId=HILTONLINKDIRECT">
              Book a room!
            </a>
          </div>
        </div>
        <p className="info-text">
          Rooms are available from October 8-11.
        </p>
        <p className="info-text">
          <b>
            Space is limited and rooms will only be held until a month before the wedding, so please act fast!
          </b>
        </p>
        <p className="info-text">
          Transportation will be provided. A shuttle van will pick guests up guests at these hotels at 3:30pm and 4:30pm, and will drop them off after the reception at 10:30pm and 11:30pm.
        </p>
      </div>
    </div>
  );
}

// pickup at 3:30 and 4:30 from the hotel
// air-conditioned minibus
