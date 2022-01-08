import React from "react";
import WeatherIcon from "./WeatherIcon.js";

export default function ForecastDay(props) {
  return (
    <div>
      <div className="Forecast-day">Thu</div>
      <WeatherIcon icon={props.data[0].weather[0].icon} size={50} />
      <div>
        <span className="Forecast-min">
          {Math.round(props.data[0].temp.min)}°
        </span>
        <span className="Forecast-max">
          {Math.round(props.data[0].temp.max)}°
        </span>
      </div>
    </div>
  );
}
