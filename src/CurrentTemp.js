import React from "react";
import "./CurrentTemp.css";

export default function CurrentTemp(props) {
  return (
    <div className="CurrentTemp">
      <span>{props.weather.temperature}</span>
      <small>°C</small>
    </div>
  );
}
