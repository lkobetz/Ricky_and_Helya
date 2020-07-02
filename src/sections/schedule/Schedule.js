import React from "react";
import flower from "../images/flower-9.png";
import "./Schedule.scss";
import ScheduleItem from "./ScheduleItem.js";

export default class Schedule extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [
        {
          time: "12:00-1:00",
        },
        {
          title: "Ceremony",
          description: `Our ceremony will include both modern and traditional Persian elements. The following will provide some background information on the Persian traditions we've decided to include.`,
        },
        {
          time: "1:00-2:00",
        },
        {
          title: "Photos / Refreshments",
          description: `While the wedding party sticks around the garden for photos, all
          other guests may help themselves to refreshments in the
          reception tent. There will be alcoholic as well as non-alcoholic
          options.`,
        },
        {
          time: "2:00-12:00",
        },
        {
          title: "Reception",
          description: `There will be champagne, speeches, dinner and dancing! Bring your dancing shoes! Or take them off and go wild!`,
        },
      ],
    };
  }
  render() {
    return (
      <div id="schedule" className="section">
        <div className="section-title">
          <img className="leftSmallFlower" src={flower} alt="" />
          <p>Schedule</p>
          <img className="rightSmallFlower" src={flower} alt="" />
        </div>
        <div id="schedule-container">
          {this.state.items.map((item) => {
            return (
              <ScheduleItem
                item={item}
                key={item.title ? item.title : item.time}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
