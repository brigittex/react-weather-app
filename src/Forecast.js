import React, { useState } from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon.js";
import "./Forecast.css";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState();

  function handleResponse(response) {
    console.log(response);
    setForecastData(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="Forecast">
        <div className="row">
          <div className="col">
            <div className="Forecast-day">Thu</div>
            <WeatherIcon icon={"01d"} size={50} />
            <WeatherIcon icon={forecastData[0].weather} size={50} />
            <div>
              <span className="Forecast-min">
                -19° {Math.round(forecastData[0].temp.min)}
              </span>
              <span className="Forecast-max">
                -10° {Math.round(forecastData[0].temp.max)}
              </span>
            </div>
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
