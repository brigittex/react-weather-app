import React from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon.js";
import "./Forecast.css";

export default function Forecast(props) {
  function handleResponse(response) {
    console.log(response);
  }

  let apiEndpoint = "https://api.openweathermap.org/data/2.5/onecall?";
  let apiKey = "a825d12564855984e0e5673562cb2c52";
  let units = "metric";
  let apiUrl = `${apiEndpoint}appid=${apiKey}&units=${units}&lat=${props.weather.lat}&lon=${props.weather.lon}`;
  axios.get(apiUrl).then(handleResponse);

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
