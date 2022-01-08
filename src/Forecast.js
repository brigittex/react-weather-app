import React, { useState } from "react";
import axios from "axios";
import ForecastDay from "./ForecastDay.js";
import "./Forecast.css";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState();

  function handleResponse(response) {
    setLoaded(true);
    setForecastData(response.data.daily); //is this working?
    console.log(forecastData);
  }

  if (loaded) {
    return (
      <div className="Forecast">
        <div className="row">
          <div className="col">
            <ForecastDay data={forecastData[0]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiEndpoint = "https://api.openweathermap.org/data/2.5/onecall?";
    let apiKey = "a825d12564855984e0e5673562cb2c52";
    let units = "metric";
    let apiUrl = `${apiEndpoint}appid=${apiKey}&units=${units}&lat=${props.weather.lat}&lon=${props.weather.lon}`;
    //axios.get(apiUrl).then(handleResponse);
    return <div>Loading...</div>;
  }
}
