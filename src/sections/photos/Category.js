import React, { useState, useEffect } from "react";
import { source } from "./source";
import SinglePhoto from "./SinglePhoto";
import UploadForm from "./UploadForm";
import firebase from "firebase/app";
import "firebase/database";

export default function Category(props) {
  const [photos, setPhotos] = useState([]);
  const [currentPage, setPage] = useState(0);
  const [lastIdx, setLastIdx] = useState(0);
  useEffect(() => {
    async function getPhotos() {
      if (!photos.length || photos[photos.length - 1].page !== currentPage) {
        if (props.type === "wedding") {
          const photosRef = await firebase.database().ref("photos");
          const photosObj = await photosRef
            .child(currentPage)
            .once("value")
            .then(function (snapshot) {
              return snapshot.val();
            });
          let photosArr = [];
          for (let name in photosObj) {
            photosArr.push(photosObj[name]);
          }
          setPhotos(photosArr);
        } else {
          setPhotos(source[props.type]);
        }
      }
    }
    getPhotos();
    if (photos.length) setLastIdx(photos.length - 1);
  }, [photos, props, currentPage]);
  return (
    <div className="category-container">
      <p className="photo-type-title">{props.type}</p>
      <div className="photo-container">
        {photos.length ? (
          photos.map((photo) => {
            return <SinglePhoto photo={photo} key={photo.name} />;
          })
        ) : (
          <p className="info-text">No photos yet</p>
        )}
      </div>
      <div>
        <button onClick={() => setPage(currentPage - 1)}>Back</button>
        <button onClick={() => setPage(currentPage + 1)}>Next</button>
      </div>
      {props.type === "wedding" &&
        firebase.auth().currentUser.email === "guest@email.com" && (
          <UploadForm
            setPhotos={setPhotos}
            photos={photos}
            lastIdx={lastIdx}
            currentPage={currentPage}
            setPage={setPage}
          />
        )}
    </div>
  );
}
