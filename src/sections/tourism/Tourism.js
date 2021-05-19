import React, { useState } from "react";
import flower from "../images/yello flower.png";
import Category from "./Category";
import "./Tourism.scss";
import dtf from "./images/dtf.jpg";
import annapolis from "./images/annapolis_rock.jpg";
import food from "./images/hooch_food.jpg";
import drink from "./images/tasting_room.jpg";

export default function Tourism() {
  const items = [
    {
      name: "Downtown",
      image: dtf,
    },
    { name: "Nature", image: annapolis, imageCred: "u/jbilous via reddit" },
    { name: "Restaurants", image: food, imageCred: "Hooch and Banter" },
    { name: "Bars", image: drink, imageCred: "The Tasting Room" },
  ];
  const [active, changeActive] = useState("");
  return (
    <div id="tourism" className="outer-container">
      {" "}
      <div className="section">
        <div className="section-title">
          <img className="leftSmallFlower" src={flower} alt="" />
          <p>Tourism</p>
          <img className="rightSmallFlower" src={flower} alt="" />
        </div>
        <div id="tourism-content">
          {items.map((item) => {
            return (
              <Category
                item={item}
                key={item.name}
                active={active}
                changeActive={changeActive}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
