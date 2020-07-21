import React, { useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

export default function UploadForm(props) {
  const [photo, setPhoto] = useState({});
  const [error, changeError] = useState("");
  const [loading, changeLoading] = useState(null);
  const [submitter, changeSubmitter] = useState("");
  const [caption, changeCaption] = useState("");
  async function handleSubmit(event) {
    event.preventDefault();
    if (firebase.auth().currentUser.email === "guest@email.com") {
      const name = photo.name.replace(/[^a-zA-Z0-9 ]/g, "");
      const storageRef = firebase.storage().ref();
      const uploadTask = storageRef.child(`photos/${name}`).put(photo);

      // Register three observers:
      // 1. 'state_changed' observer, called any time the state changes
      // 2. Error observer, called on failure
      // 3. Completion observer, called on successful completion
      uploadTask.on(
        "state_changed",
        function (snapshot) {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          var progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          changeLoading(Math.round(progress));
          switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED: // or 'paused'
              console.log("Upload is paused");
              break;
            case firebase.storage.TaskState.RUNNING: // or 'running'
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        function (error) {
          changeError(error);
        },
        async function () {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          // uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
          //   console.log('File available at', downloadURL);
          changeLoading(null);
          const url = await storageRef.child(`photos/${name}`).getDownloadURL();
          let page = props.currentPage;
          if (props.lastIdx > 4) {
            page = props.currentPage + 1;
            props.setPage(page);
            firebase.database().ref("photos").child("lastPage").set(page);
            props.setLastPage(page);
          }
          firebase
            .database()
            .ref("photos")
            .child(page)
            .push({ url, name, page, submitter, caption });
          props.setPhotos([
            ...props.photos,
            { url, name, page, submitter, caption },
          ]);
        }
      );
    }
  }

  function fileChange(event) {
    setPhoto(event.target.files[0]);
  }

  return (
    <div>
      <form onSubmit={(event) => handleSubmit(event)} className="upload-form">
        <label className="upload-text">
          Upload a photo:
          <input
            className="upload-input"
            type="file"
            name="photo"
            onChange={(event) => fileChange(event)}
          />
        </label>
        <label className="upload-text">
          Your Name:
          <input
            className="form-input"
            type="text"
            name="submitter"
            value={submitter}
            onChange={(event) => changeSubmitter(event.target.value)}
          />
        </label>
        <label className="upload-text">
          Caption:
          <input
            className="form-input"
            type="text"
            name="caption"
            value={caption}
            maxLength="60"
            onChange={(event) => changeCaption(event.target.value)}
          />
        </label>
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
      {photo && <img src={photo} alt="" />}
      {error && <p className="error-text">{error}</p>}
      {loading !== null && loading < 101 && (
        <p className="info-text">loading... {loading}%</p>
      )}
    </div>
  );
}
