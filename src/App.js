import React from "react";
import "./App.css";
import bouquet1 from "./images/bouquet-9a.png";
import bouquet2 from "./images/bouquet-10.png";
import header_photo from "./images/header_photo.png";

function App() {
  return (
    <div className="App">
      <header id="flowers">
        <img id="leftleftFlower" src={bouquet2} alt={""} />
        <img id="leftFlower" src={bouquet1} alt={""} />
        <img id="rightFlower" src={bouquet2} alt={""} />
        <img id="rightrightFlower" src={bouquet1} alt={""} />
      </header>
      <img id="header_photo" src={header_photo} alt={""} />
    </div>
  );
}

export default App;
