import React from "react";

export default function LocationItem({ info }) {
  const { url, map, text } = info
  return (
    <div className="list-item">
      <p className="list-text">➺ {text}</p>
      {url && (
        <a href={url} className="link-item">
          <p className="list-link">Site</p>
        </a>
      )}
      {map && (
        <a href={map} className="link-item">
          <p className="list-link">Map</p>
        </a>
      )}
    </div>
  );
}
