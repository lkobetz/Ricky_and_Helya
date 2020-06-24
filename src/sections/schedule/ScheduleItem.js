import React from "react";

export default function ScheduleItem(props) {
  return (
    <div className="schedule_item">
      <p className="time">{props.item.time}</p>
      {/* <p className="dot">●</p> */}
      <div className="description_container">
        <p className="description_title">{props.item.title}</p>
        <p className="description_text">{props.item.description}</p>
      </div>
    </div>
  );
}
