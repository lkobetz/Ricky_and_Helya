import React from "react";
import { source } from "./source";
import SinglePhoto from "./SinglePhoto";
import UploadForm from "./UploadForm";
import firebase from "firebase";

export default class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
    };
  }
  async componentDidMount() {
    if (this.props.type === "uploads") {
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
      if (!this.state.photos.length) {
        this.setState({ photos: photosArr });
      }
    } else {
      this.setState({ photos: source[this.props.type] });
    }
  }
  render() {
    return (
      <div className="category-container">
        <p className="photo-type-title">{this.props.type}</p>
        <div className="photo-container">
          {this.state.photos.length &&
            this.state.photos.map((photo) => {
              return <SinglePhoto photo={photo} />;
            })}
        </div>
        {this.props.type === "uploads" && <UploadForm />}
      </div>
    );
  }
}
