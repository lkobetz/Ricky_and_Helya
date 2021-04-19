import React, { useState } from "react";
import "./Password.scss";
import * as firebase from "firebase/app";
import App from "../app/App";
import bouquet1 from "../images/bouquet-9a.png";
import bouquet2 from "../images/bouquet-10.png";
import "firebase/auth";

export default function PasswordPage() {
  const [password, changePassword] = useState("");
  const [correct, changeCorrect] = useState(false);
  const [text1, changeText1] = useState(
    `Welcome to Helya and Ricky's wedding website!`
  );
  const [text2, changeText2] = useState(
    `Please enter the password from your invitation to enter:`
  );
  async function checkPassword(event) {
    event.preventDefault();
    let email = "";
    if (password === "portfolio") {
      email = "viewer@email.com";
    } else {
      email = "guest@email.com";
    }
    if (email) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
      } catch (error) {
        changeText1(`Sorry, that password is incorrect!`);
        changeText2(`Please try again:`);
        return error;
      }
      changeCorrect(true);
    }
    return true;
  }
  return correct ? (
    <App password={password} />
  ) : (
    <div id="pw-container">
      <div id="pw-flowers">
        <img id="leftBouquet" src={bouquet1} alt="" />
        <div id="pw-box">
          <p className="info-text">{text1}</p>{" "}
          <p className="info-text">{text2}</p>
          <form
            className="password-form"
            onSubmit={(event) => checkPassword(event)}
          >
            <input
              className="pw-input"
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
