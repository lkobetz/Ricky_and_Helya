import React from "react";
import "./App.scss";
import bouquet1 from "./images/bouquet-9a.png";
import bouquet2 from "./images/bouquet-10.png";
import header_photo from "./images/header_photo.png";
import NavBar from "./Navbar";
import RSVP from "./sections/rsvp/RSVP";
import Schedule from "./sections/schedule/Schedule";
import Venue from "./sections/venue/Venue";
import Registry from "./sections/registry/Registry";
import Charity from "./sections/charity/Charity";
import Photos from "./sections/photos/Photos";
import FAQs from "./sections/faqs/FAQs";

function App() {
  return (
    <div className="App">
      <NavBar />
      <header id="flowers">
        <img id="leftleftFlower" src={bouquet2} alt={""} />
        <img id="leftFlower" src={bouquet1} alt={""} />
        <img id="rightFlower" src={bouquet2} alt={""} />
        <img id="rightrightFlower" src={bouquet1} alt={""} />
      </header>
      <div id="hero">
        <img id="header_photo" src={header_photo} alt={""} />
        <p id="hero_title">Helya and Ricky are Getting Married!</p>
      </div>
      <RSVP />
      <Schedule />
      <Venue />
      <Registry />
      <Charity />
      <Photos />
      <FAQs />
    </div>
  );
}

export default App;
