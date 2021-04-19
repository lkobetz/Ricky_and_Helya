import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import firebase from "firebase/app";
import source from "./source";
import SinglePhoto from "./SinglePhoto";
import UploadForm from "./UploadForm";
import Pagination from "./Pagination";
import "firebase/database";

export default function Category(props) {
  const { type } = props;
  const [photos, setPhotos] = useState([]);
  const [currentPage, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [lastIdx, setLastIdx] = useState(0);
  useEffect(() => {
    async function getPhotos() {
      if (!photos.length || photos[photos.length - 1].page !== currentPage) {
        if (type === "wedding") {
          const photosRef = await firebase.database().ref("photos");
          const photosObj = await photosRef
            .child(currentPage)
            .once("value")
            .then((snapshot) => {
              return snapshot.val();
            });
          if (photosObj !== null) {
            const photosArr = Object.values(photosObj);
            setPhotos(photosArr);
          }
        } else {
          setPhotos(source[type]);
        }
      }
    }
    async function getLastItem() {
      if (photos.length) {
        const newLastPage = await firebase
          .database()
          .ref("photos")
          .child("lastPage")
          .once("value")
          .then((snapshot) => {
            return snapshot.val();
          });
        if (newLastPage) setLastPage(newLastPage);
        const newLastIdx = await firebase
          .database()
          .ref("photos")
          .child("lastIdx")
          .once("value")
          .then((snapshot) => {
            return snapshot.val();
          });
        if (newLastIdx) setLastIdx(newLastIdx);
      }
    }
    getLastItem();
    getPhotos();
  }, [photos, props, currentPage, lastPage, type]);
  return (
    <div className="category-container">
      <p className="photo-type-title">{type}</p>
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
      {type === "wedding" &&
        firebase.auth().currentUser !== null &&
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

Category.propTypes = {
  type: PropTypes.string.isRequired,
};
