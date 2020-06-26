import React from "react";

export default function ScheduleItem(props) {
  let type = Object.keys(props.item);
  type = type.join("_");
  return (
    <div className={type}>
      {props.item.time ? (
        <p className="time">{props.item.time}</p>
      ) : (
        <div className="description_container">
          <p className="description_title">{props.item.title}</p>
          <p className="description_text">{props.item.description}</p>
        </div>
      )}
    </div>
  );
}
