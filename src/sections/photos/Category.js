import React, { useState, useEffect } from "react";
import { source } from "./source";
import SinglePhoto from "./SinglePhoto";
import UploadForm from "./UploadForm";
import firebase from "firebase/app";
import "firebase/database";

export default function Category(props) {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    async function getPhotos() {
      if (!photos.length) {
        if (props.type === "wedding") {
          const photosObj = await firebase
            .database()
            .ref("photos")
            .once("value")
            .then(function (snapshot) {
              return snapshot.val();
            });
          let photosArr = [];
          for (let name in photosObj) {
            photosArr.push(photosObj[name].url);
          }
          if (!photos.length) {
            setPhotos(photosArr);
          }
        } else {
          setPhotos(source[props.type]);
        }
      }
    }
    getPhotos();
  }, [photos, props]);
  return (
    <div className="category-container">
      <p className="photo-type-title">{props.type}</p>
      <div className="photo-container">
        {photos.length ? (
          photos.map((photo) => {
            return <SinglePhoto photo={photo} key={photo} />;
          })
        ) : (
          <p className="info-text">No photos yet</p>
        )}
      </div>
      {props.type === "wedding" &&
        firebase.auth().currentUser.email === "guest@email.com" && (
          <UploadForm setPhotos={setPhotos} photos={photos} />
        )}
    </div>
  );
}
