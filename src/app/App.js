import React from "react";
import "./App.scss";
import bouquet1 from "../images/bouquet-9a.png";
import bouquet2 from "../images/bouquet-10.png";
import NavBar from "../navbar/Navbar";
import RSVP from "../sections/rsvp/RSVP";
import Schedule from "../sections/schedule/Schedule";
import Venue from "../sections/venue/Venue";
// import Registry from "../sections/registry/Registry";
import Accommodations from "../sections/accommodations/Accommodations";
import Photos from "../sections/photos/Photos";
import Tourism from "../sections/tourism/Tourism";
import WeddingParty from "../sections/weddingParty/WeddingParty";
import HRgif from "../images/HR_gif.gif";
import HRbeach from "../images/HR_kiss_beach.jpg";
import HRsparkler from "../images/HR_sparkler.jpg";
import CouplePhoto from "./CouplePhoto";
import Hero from "./Hero";

function App() {
  return (
    <div className="App">
      <NavBar />
      <header id="flowers">
        <img id="leftleftFlower" src={bouquet2} alt="" />
        <img id="leftFlower" src={bouquet1} alt="" />
        <img id="rightFlower" src={bouquet2} alt="" />
        <img id="rightrightFlower" src={bouquet1} alt="" />
      </header>
      <Hero />
      <RSVP />
      <CouplePhoto couple={HRbeach} bouquet1={bouquet1} bouquet2={bouquet2} />
      <Schedule />
      <WeddingParty />
      <CouplePhoto couple={HRgif} bouquet1={bouquet1} bouquet2={bouquet2} />
      <Venue />
      <Accommodations />
      <Tourism />
      {/* <Registry /> */}
      <CouplePhoto
        couple={HRsparkler}
        bouquet1={bouquet1}
        bouquet2={bouquet2}
      />
      <Photos />
      <div id="footer">
        <p>
          This website was designed and built by Larissa Kobetz.
          {/* <a href="https://lkobetz.github.io/">Larissa Kobetz</a>. */}
        </p>
      </div>
    </div>
  );
}

export default App;
