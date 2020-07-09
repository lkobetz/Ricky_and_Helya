import React, { useState } from "react";
import firebase from "firebase";

export default function UploadForm() {
  const [photo, setPhoto] = useState({});
  async function handleSubmit(event) {
    event.preventDefault();
    const storageRef = firebase.storage().ref();
    storageRef.child(`photos/${photo.name}`).put(photo);
  }
  function fileChange(event) {
    setPhoto(event.target.files[0]);
    console.log(photo);
  }
  return (
    <div>
      <form onSubmit={(event) => handleSubmit(event)}>
        <label>
          Upload a photo:
          <input
            type="file"
            name="photo"
            onChange={(event) => fileChange(event)}
          />
        </label>
        <button type="submit">Upload</button>
      </form>
      {photo && <img src={photo} alt="" />}
    </div>
  );
}
