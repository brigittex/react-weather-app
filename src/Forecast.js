import React, { useState } from "react";
import Loader from "react-loader-spinner";
import axios from "axios";
import ForecastDay from "./ForecastDay.js";
import "./Forecast.css";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState();

  function handleResponse(response) {
    setLoaded(true);
    //setForecastData(response.data.daily); //is this working?
    //console.log(forecastData);
  }

  if (loaded) {
    return (
      <div className="Forecast">
        <div className="row">
          {forecastData.map(function (dailyForecast, index) {
            if (index < 6 && index > 0) {
              return (
                <div className="col" key={index}>
                  <ForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiEndpoint = "https://api.openweathermap.org/data/2.5/onecall?";
    let apiKey = "a825d12564855984e0e5673562cb2c52";
    let units = "metric";
    let apiUrl = `${apiEndpoint}appid=${apiKey}&units=${units}&lat=${props.weather.lat}&lon=${props.weather.lon}`;
    console.log(apiUrl);
    //axios.get(apiUrl).then(handleResponse);
    return (
      <div>
        Loading...
        <div className="loader">
          <Loader
            type="BallTriangle"
            color="#989898"
            height={100}
            width={100}
          />
        </div>
      </div>
    );
  }
}
