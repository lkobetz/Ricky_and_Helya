/* eslint-disable no-undef */
import React, { Component } from "react";
import firebase from "firebase/app";
import "firebase/database";
import "./Map.scss";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

class Map extends Component {
  constructor() {
    super();
    this.state = {
      apiKey: "",
    };
  }

  async componentDidMount() {
    const apiKey = await firebase
      .database()
      .ref("mapApiKey")
      .once("value")
      .then((snapshot) => {
        return snapshot.val();
      });
    this.setState({ apiKey });
  }

  render() {
    const { apiKey } = this.state;
    const GoogleMapComponent = withScriptjs(
      withGoogleMap((props) => (
        <GoogleMap
          defaultCenter={{ lat: 39.2554674, lng: -77.395525 }}
          defaultZoom={15}
        >
          {props.isMarkerShown && (
            <Marker position={{ lat: 39.2554674, lng: -77.395525 }} />
          )}
        </GoogleMap>
      ))
    );
    return (
      <div id="map-container">
        {apiKey && (
          <GoogleMapComponent
            containerElement={<div id="map" />}
            mapElement={<div style={{ height: `100%` }} />}
            loadingElement={<div style={{ height: `100%` }} />}
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${apiKey}`}
            isMarkerShown
          />
        )}
      </div>
    );
  }
}
export default Map;
