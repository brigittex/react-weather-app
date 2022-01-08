import React from "react";
import "./City.css";

export default function City(props) {
  return (
    <div className="City">
      <div className="row location">{props.weather.location}</div>
    </div>
  );
}
