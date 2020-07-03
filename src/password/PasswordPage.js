import React, { useState } from "react";
import "./Password.scss";
import { secretPassword } from "./secretPassword";
import App from "../app/App";
import bouquet1 from "../images/bouquet-9a.png";
import bouquet2 from "../images/bouquet-10.png";

export default function PasswordPage() {
  const [password, changePassword] = useState("");
  const [correct, changeCorrect] = useState(false);
  const [text1, changeText1] = useState(
    `Welcome to Helya and Ricky's wedding website!`
  );
  const [text2, changeText2] = useState(
    `Please enter the password from your invitation to enter:`
  );
  function checkPassword(event) {
    event.preventDefault();
    if (password === secretPassword) {
      changeCorrect(true);
    } else {
      changeText1(`Sorry, that password is incorrect!`);
      changeText2(`Please try again:`);
    }
  }
  return correct ? (
    <App />
  ) : (
    <div id="pw-container">
      <div id="pw-flowers">
        <img id="leftBouquet" src={bouquet1} alt="" />
        <div id="pw-box">
          <p className="info-text">{text1}</p>{" "}
          <p className="info-text">{text2}</p>
          <form onSubmit={(event) => checkPassword(event)}>
            <input
              className={"pw-input"}
              type="password"
              value={password}
              onChange={(event) => changePassword(event.target.value)}
            />
            <button className="submit-button" type="submit">
              Enter
            </button>
          </form>
        </div>
        <img id="rightBouquet" src={bouquet2} alt="" />
      </div>
    </div>
  );
}
