import React, { useState, useEffect } from "react";
import { source } from "./source";
import SinglePhoto from "./SinglePhoto";
import UploadForm from "./UploadForm";
import firebase from "firebase";

export default function Category(props) {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    async function getPhotos() {
      if (props.type === "wedding") {
        const photosObj = await firebase
          .database()
          .ref("photos")
          .once("value")
          .then(function (snapshot) {
            return snapshot.val();
          });
        let photosArr = [];
        for (let id in photosObj) {
          photosArr.push(photosObj[id]);
        }
        if (!photos.length) {
          setPhotos(photosArr);
        }
      } else {
        setPhotos(source[props.type]);
      }
    }
    getPhotos();
  }, [photos, props]);

  return (
    <div className="category-container">
      <p className="photo-type-title">{props.type}</p>
      <div className="photo-container">
        {photos.length &&
          photos.map((photo) => {
            return <SinglePhoto photo={photo} />;
          })}
      </div>
      {props.type === "wedding" && <UploadForm setPhotos={setPhotos} />}
    </div>
  );
}
