import React from "react";
import flower from "../images/flower-3.png";
import PartyPerson from "./Person.js";
import rosie from "./images/rosie.png";
import rita from "./images/rita.png";
import "./weddingParty.scss";

export default function Schedule() {
  const bridePeople = [
    {
      photo: rita,
      title: "Bridesmaid",
      name: "Rita",
      description:
        "Rita has been very close to Helya ever since she was brought home. Every time Helya leaves the room, she cries. She also enjoys taking long walks and barking at dogs who are bigger than her.",
    },
  ];
  const groomPeople = [
    {
      photo: rosie,
      title: "Groomsman",
      name: "Rosie",
      description:
        "Rosie is a very good dog. She enjoys sleeping in the sun and hiding under blankets. She does not enjoy trying to cuddle with her ecollar on.",
    },
    {
      photo: rita,
      title: "Officiant",
      name: "Larissa",
      description:
        "Coming out of my cage And I've been doing just fine Gotta gotta be down Because I want it all It started out with a kiss How did it end up like this? It was only a kiss, it was only a kiss",
    },
    {
      photo: rosie,
      title: "Best Man",
      name: "Ricky's Friend",
      description:
        "There were a king with a large jaw and a queen with a plain face, on the throne of England; there were a king with a large jaw and a queen with a fair face, on the throne of France. In both countries it was clearer than crystal to the lords of the State preserves of loaves and fishes, that things in general were settled for ever.",
    },
  ];
  return (
    <div id="wedding_party" className="section">
      <div className="section_title">
        <img className="leftSmallFlower" src={flower} alt="" />
        <p>Wedding Party</p>
        <img className="rightSmallFlower" src={flower} alt="" />
      </div>
      <div id="party_container">
        {bridePeople.map((person) => {
          return <PartyPerson person={person} key={person.name} />;
        })}
        {groomPeople.map((person) => {
          return <PartyPerson person={person} key={person.name} />;
        })}
      </div>
    </div>
  );
}
