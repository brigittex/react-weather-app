import React, { useState, useEffect } from "react";
import Loader from "react-loader-spinner";
import axios from "axios";
import ForecastDay from "./ForecastDay.js";
import "./Forecast.css";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    setLoaded(false);
  }, [props.weather.lat]);

  function handleResponse(response) {
    setLoaded(true);
    setForecastData(response.data.daily);
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
        <div className="Forecast-unit">
          All forecast temperatures in Celsius (°C)
        </div>
      </div>
    );
  } else {
    let apiEndpoint = "https://api.openweathermap.org/data/2.5/onecall?";
    //let apiKey = "a825d12564855984e0e5673562cb2c52";
    let apiKey2 = "dce1c16a84262764d038b91391a2c359";
    let units = "metric";
    let apiUrl = `${apiEndpoint}appid=${apiKey2}&units=${units}&lat=${props.weather.lat}&lon=${props.weather.lon}`;
    axios.get(apiUrl).then(handleResponse);
    return (
      <div className="loader">
        <Loader type="BallTriangle" color="#989898" height={80} width={80} />
      </div>
    );
  }
}
