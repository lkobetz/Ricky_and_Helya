import React, { useState, useEffect } from "react";
import { source } from "./source";
import SinglePhoto from "./SinglePhoto";
import UploadForm from "./UploadForm";
import Pagination from "./Pagination";
import firebase from "firebase/app";
import "firebase/database";

export default function Category(props) {
  const [photos, setPhotos] = useState([]);
  const [currentPage, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
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
    async function getLastItem() {
      if (photos.length) {
        const lastPage = await firebase
          .database()
          .ref("photos")
          .child("lastPage")
          .once("value")
          .then(function (snapshot) {
            return snapshot.val();
          });
        if (lastPage) setLastPage(lastPage);
        const lastIdx = await firebase
          .database()
          .ref("photos")
          .child("lastIdx")
          .once("value")
          .then(function (snapshot) {
            return snapshot.val();
          });
        if (lastIdx) setLastIdx(lastIdx);
      }
    }
    getLastItem();
    getPhotos();
  }, [photos, props, currentPage, lastPage]);
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
      <Pagination
        setPage={setPage}
        currentPage={currentPage}
        lastPage={lastPage}
      />
      {props.type === "wedding" &&
        firebase.auth().currentUser.email === "guest@email.com" && (
          <UploadForm
            setPhotos={setPhotos}
            photos={photos}
            lastIdx={lastIdx}
            lastPage={lastPage}
            setLastIdx={setLastIdx}
            currentPage={currentPage}
            setPage={setPage}
            setLastPage={setLastPage}
          />
        )}
    </div>
  );
}

// {props.type === "wedding" &&
//         firebase.auth().currentUser.email === "guest@email.com" &&
//         (currentPage === lastPage ? (
//           <UploadForm
//             setPhotos={setPhotos}
//             photos={photos}
//             lastIdx={lastIdx}
//             lastPage={lastPage}
//             setLastIdx={setLastIdx}
//             currentPage={currentPage}
//             setPage={setPage}
//             setLastPage={setLastPage}
//           />
//         ) : (
//           <p className="photo-button" onClick={() => setPage(lastPage)}>
//             Upload a photo →
//           </p>
//         ))}
