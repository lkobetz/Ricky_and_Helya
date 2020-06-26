import React from "react";

export default function ScheduleItem(props) {
  let name = Object.keys(props.item);
  name = name.join("_");
  return (
    <div className={name}>
      {props.item.time ? (
        <div className="schedule_time">
          <p className="time">{props.item.time}</p>
        </div>
      ) : (
        <div className="schedule_event">
          <div className="description_container">
            <p className="description_title">{props.item.title}</p>
            <p className="description_text">{props.item.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
