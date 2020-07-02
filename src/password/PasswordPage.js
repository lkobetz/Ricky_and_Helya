import React, { useState } from "react";
import "./Password.scss";
import { secretPassword } from "./secretPassword";
import App from "../app/App";
import bouquet1 from "../images/bouquet-9a.png";
import bouquet2 from "../images/bouquet-10.png";

export default function PasswordPage() {
  const [password, changePassword] = useState("");
  const [correct, changeCorrect] = useState(false);
  function checkPassword() {
    if (password === secretPassword) {
      changeCorrect(true);
    }
  }
  return correct ? (
    <App />
  ) : (
    <div id="pw-container">
      <div id="pw-flowers">
        <img id="leftBouquet" src={bouquet1} alt="" />
        <div id="pw-box">
          <p className="info-text">
            Welcome to Helya and Ricky's wedding website!
          </p>{" "}
          <p className="info-text">
            Please enter the password from your invitation to enter:
          </p>
          <input
            className={"pw-input"}
            type="password"
            value={password}
            onChange={(event) => changePassword(event.target.value)}
          />
          <button className="submit-button" onClick={checkPassword}>
            Enter
          </button>
        </div>
        <img id="rightBouquet" src={bouquet2} alt="" />
      </div>
    </div>
  );
}
