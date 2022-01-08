import React, { useState } from "react";
import "./CurrentTemp.css";

export default function CurrentTemp(props) {
  let celsius = props.weather.temperature;
  let fahrenheit = Math.round(celsius * (9 / 5) + 32);
  let [unit, setUnit] = useState("C");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("F");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("C");
  }

  if (unit === "C") {
    return (
      <div className="CurrentTemp">
        <span>{celsius}</span>
        <small>
          °C |{" "}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </small>
      </div>
    );
  } else {
    return (
      <div className="CurrentTemp">
        <span>{fahrenheit}</span>
        <small>
          <a href="/" onClick={showCelsius}>
            °C
          </a>{" "}
          | °F
        </small>
      </div>
    );
  }
}
