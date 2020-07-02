import React from "react";

export default function ScheduleItem(props) {
  let type = Object.keys(props.item);
  type = type.join("-");
  return (
    <div className={type}>
      {props.item.time ? (
        <p className="time">{props.item.time}</p>
      ) : (
        <div className="description-container">
          <p className="description-title">{props.item.title}</p>
          <p className="description-text">{props.item.description}</p>
        </div>
      )}
    </div>
  );
}
