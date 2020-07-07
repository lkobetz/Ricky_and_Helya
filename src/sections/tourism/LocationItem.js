import React from "react";

export default function LocationItem(props) {
  const site = props.info.url ? true : false;
  const map = props.info.map ? true : false;
  return (
    <div className="list-item">
      <p className="list-text">➺ {props.info.text}</p>
      {site && (
        <a href={props.info.url}>
          <p className="list-link">Site</p>
        </a>
      )}
      {map && (
        <a href={props.info.map}>
          <p className="list-link">Map</p>
        </a>
      )}
    </div>
  );
}
