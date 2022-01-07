import React from "react";

import "./CurrentIcon.css";

export default function CurrentIcon(props) {
  return (
    <div className="CurrentIcon">
      <img src={props.weather.iconURL} alt={props.weather.description} />
    </div>
  );
}
