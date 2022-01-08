import React from "react";
import WeatherIcon from "./WeatherIcon.js";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col">
          <div className="Forecast-day">Thu</div>
          <WeatherIcon icon={"01d"} size={50} />
          <div>
            <span className="Forecast-min">-19°</span>
            <span className="Forecast-max">-10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
