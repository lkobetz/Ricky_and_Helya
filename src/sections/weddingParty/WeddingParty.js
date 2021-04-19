import React from "react";
import flower from "../images/flower-3.png";
import PartyPerson from "./Person";
import { bridePeople, groomPeople } from "./People";
import "./weddingParty.scss";

export default function WeddingParty() {
  return (
    <div id="wedding-party" className="outer-container">
      {" "}
      <div className="section">
        <div className="section-title">
          <img className="leftSmallFlower" src={flower} alt="" />
          <p>Wedding Party</p>
          <img className="rightSmallFlower" src={flower} alt="" />
        </div>
        <div className="people-list">
          {bridePeople.map((person) => {
            return <PartyPerson person={person} key={person.name} />;
          })}
          {groomPeople.map((person) => {
            return <PartyPerson person={person} key={person.name} />;
          })}
        </div>
      </div>
    </div>
  );
}
