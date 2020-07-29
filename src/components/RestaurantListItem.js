import React from "react";
import "../styles/RestaurantListItem.css";
import "../styles/Details.css";

const RestaurantListItem = (props) => {
  return (
    <div className="media content content-container">
      <div className="restaurant-name">
        <b>NAME:</b> {props.name}
        <br></br>
        <b>ADDRESS:</b> {props.address}
        <br></br>
        <b>AREA:</b> {props.area}
      </div>
    </div>
  );
};
export default RestaurantListItem;
