/* eslint-disable no-undef */
import "./Map.scss";
import mapApiKey from "./secrets";
import React, { Component } from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
class Map extends Component {
  render() {
    const GoogleMapComponent = withScriptjs(
      withGoogleMap((props) => (
        <GoogleMap
          defaultCenter={{ lat: 39.2554715, lng: -77.3977137 }}
          defaultZoom={15}
        ></GoogleMap>
      ))
    );
    return (
      <div id="map_container">
        <GoogleMapComponent
          containerElement={<div id="map" />}
          mapElement={<div style={{ height: `100%` }} />}
          loadingElement={<div style={{ height: `100%` }} />}
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${mapApiKey}`}
        />
      </div>
    );
  }
}
export default Map;
