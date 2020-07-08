import React from "react";
import LocationItem from "./LocationItem";
import { locations } from "./locations";

export default function LocationList(props) {
  const category = props.category;

  return (
    <div className={props.class}>
      {locations[category].map((location) => {
        return <LocationItem info={location} key={location.text} />;
      })}
    </div>
  );
}
