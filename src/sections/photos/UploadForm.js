import React, { useState } from "react";
import firebase from "firebase/app";
import PropTypes from "prop-types";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

export default function UploadForm(props) {
  const [photo, setPhoto] = useState(null);
  const [error, changeError] = useState("");
  const [loading, changeLoading] = useState(null);
  const [submitter, changeSubmitter] = useState("");
  const [caption, changeCaption] = useState("");
  let { lastPage } = props;
  const {
    lastIdx,
    setLastPage,
    setLastIdx,
    photos,
    setPhotos,
    setPage,
  } = props;
  async function handleSubmit(event) {
    event.preventDefault();
    if (firebase.auth().currentUser.email === "guest@email.com") {
      const name = photo.name.replace(/[^a-zA-Z0-9 ]/g, "");
      const storageRef = firebase.storage().ref();
      const uploadTask = storageRef.child(`photos/${name}`).put(photo);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          // console.log("Upload is " + progress + "% done");
          changeLoading(Math.round(progress));
          switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED: // or 'paused'
              // console.log("Upload is paused");
              break;
            case firebase.storage.TaskState.RUNNING: // or 'running'
              // console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        function catchError(err) {
          changeError(err);
        },
        async function onSuccess() {
          changeLoading(null);
          const url = await storageRef.child(`photos/${name}`).getDownloadURL();
          if (lastIdx > 5) {
            lastPage += 1;
            firebase.database().ref("photos").child("lastPage").set(lastPage);
            setLastPage(lastPage);
            firebase.database().ref("photos").child("lastIdx").set(0);
            setLastIdx(0);
          } else {
            firebase
              .database()
              .ref("photos")
              .child("lastIdx")
              .set(lastIdx + 1);
          }
          firebase
            .database()
            .ref("photos")
            .child(lastPage)
            .push({ url, name, lastPage, submitter, caption });
          setPhotos([...photos, { url, name, lastPage, submitter, caption }]);
          changeSubmitter("");
          changeCaption("");
          setPhoto(null);
          setPage(lastPage);
        }
      );
    }
  }

  function fileChange(event) {
    setPhoto(event.target.files[0]);
  }

  return (
    <div className="form-container">
      <form onSubmit={(event) => handleSubmit(event)} className="upload-form">
        <div className="input-container">
          <p className="upload-text">Upload a photo:</p>
          <input
            className="upload-input"
            type="file"
            name="photo"
            onChange={(event) => fileChange(event)}
          />
        </div>
        <div className="input-container">
          <p className="upload-text">Your Name:</p>
          <input
            className="form-input"
            type="text"
            name="submitter"
            value={submitter}
            onChange={(event) => changeSubmitter(event.target.value)}
          />
        </div>
        <div className="input-container">
          <p className="upload-text">Caption:</p>
          <input
            className="form-input"
            type="text"
            name="caption"
            value={caption}
            maxLength="60"
            onChange={(event) => changeCaption(event.target.value)}
          />
        </div>
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

UploadForm.propTypes = {
  lastPage: PropTypes.number.isRequired,
  lastIdx: PropTypes.number.isRequired,
  setLastPage: PropTypes.func.isRequired,
  setLastIdx: PropTypes.func.isRequired,
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      lastPage: PropTypes.number.isRequired,
      submitter: PropTypes.string,
      caption: PropTypes.string,
    })
  ).isRequired,
  setPhotos: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired,
};
