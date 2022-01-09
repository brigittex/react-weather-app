import React from "react";
import WeatherIcon from "./WeatherIcon.js";

export default function ForecastDay(props) {
  function weekday() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  function minTemp() {
    let min = Math.round(props.data.temp.min);
    return `${min}°`;
  }

  function maxTemp() {
    let max = Math.round(props.data.temp.max);
    return `${max}°`;
  }

  return (
    <div>
      <div className="Forecast-day">{weekday()}</div>
      <WeatherIcon icon={props.data.weather[0].icon} size={50} />
      <div>
        <span className="Forecast-min">{minTemp()}</span>
        <span className="Forecast-max">{maxTemp()}</span>
      </div>
    </div>
  );
}
