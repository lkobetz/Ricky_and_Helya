import React from "react";
import flower from "../images/flower-9.png";
import "./Schedule.scss";
import ScheduleItem from "./ScheduleItem";

export default class Schedule extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [
        {
          time: "3:30pm",
        },
        {
          title: "First Shuttle Pick Up from Hotel",
        },
        {
          time: "4:00pm",
        },
        {
          title: "Guests Arrive at Strong Mansion",
        },
        {
          time: "4:30pm",
        },
        {
          title: "Second Shuttle Pick Up from Hotel",
        },
        {
          time: "5:15pm",
        },
        {
          title: "Ceremony",
        },
        {
          time: "6:00pm",
        },
        {
          title: "Cocktail Hour",
        },
        {
          time: "7:00pm",
        },
        {
          title: "Dinner and Reception",
        },
        {
          time: "10:30pm",
        },
        {
          title: "First Trip Back to Hotel",
        },
        {
          time: "11:30pm",
        },
        {
          title: "Second Trip Back to Hotel",
        },
        {
          time: "11:00pm",
        },
        {
          title: "After Party",
        },
      ],
    };
  }

  render() {
    const { items } = this.state;
    return (
      <div id="schedule" className="outer-container">
        <div className="section">
          <div className="section-title">
            <img className="leftSmallFlower" src={flower} alt="" />
            <p>Schedule</p>
            <img className="rightSmallFlower" src={flower} alt="" />
          </div>
          <div id="schedule-container">
            {items.map((item) => {
              return (
                <ScheduleItem
                  item={item}
                  key={item.title ? item.title : item.time}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
