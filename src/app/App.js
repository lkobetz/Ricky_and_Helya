import React from "react";
import "./App.scss";
import bouquet1 from "./images/bouquet-9a.png";
import bouquet2 from "./images/bouquet-10.png";
import header_photo from "./images/header_photo.png";
import NavBar from "../navbar/Navbar";
import RSVP from "../sections/rsvp/RSVP";
import Schedule from "../sections/schedule/Schedule";
import Venue from "../sections/venue/Venue";
import Registry from "../sections/registry/Registry";
import Transportation from "../sections/transportation/Transportation";
import Photos from "../sections/photos/Photos";
import Tourism from "../sections/tourism/Tourism";
import WeddingParty from "../sections/weddingParty/WeddingParty";
import HRgif from "./images/HR_gif.gif";
import HRbeach from "./images/HR_kiss_beach.jpg";
import HRsparkler from "./images/HR_sparkler.jpg";
import CouplePhoto from "./CouplePhoto";
import firebase from "firebase";
import { firebaseConfig } from "../dbconfig";

firebase.initializeApp(firebaseConfig);

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
        <p className="info_text">#AGhaffariTaleWedding</p>
        <p id="date">October 10, 2021</p>
      </div>
      <RSVP />
      <CouplePhoto couple={HRbeach} bouquet1={bouquet1} bouquet2={bouquet2} />
      <Schedule />
      <WeddingParty />
      <CouplePhoto couple={HRgif} bouquet1={bouquet1} bouquet2={bouquet2} />
      <Venue />
      <Transportation />
      <Tourism />
      <Registry />
      <CouplePhoto
        couple={HRsparkler}
        bouquet1={bouquet1}
        bouquet2={bouquet2}
      />
      <Photos />
      <div id="footer">
        <p>
          This website was designed and built by{" "}
          <a href="https://lkobetz.github.io/">Larissa Kobetz</a>.
        </p>
      </div>
    </div>
  );
}

export default App;
