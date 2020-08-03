import React from "react";
import PropTypes from "prop-types";

export default function ScheduleItem(props) {
  const { item } = props;
  const { time, title, description } = item;
  let type = Object.keys(item);
  type = type.join("-");
  return (
    <div className={type}>
      {time ? (
        <p className="time">{time}</p>
      ) : (
        <div className="description-container">
          <p className="description-title">{title}</p>
          <p className="description-text">{description}</p>
        </div>
      )}
    </div>
  );
}

ScheduleItem.propTypes = {
  item: PropTypes.shape({
    time: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};
