import React, { useState } from "react";
import Loader from "react-loader-spinner";
import Footer from "./Footer.js";
import CurrentWeather from "./CurrentWeather.js";
import CurrentIcon from "./CurrentIcon.js";
import CurrentTemp from "./CurrentTemp.js";
import UnitConversion from "./UnitConversion.js";
import City from "./City.js";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  let [location, setLocation] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [weather, setWeather] = useState({});

  function displayWeather(response) {
    setWeather({
      location: response.data.name,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].main,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed * 3.6), //converting from m/s to km/h
      iconURL: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      icon: response.data.weather[0].icon,
      feels_like: Math.round(response.data.main.feels_like),
      dt: response.data.dt * 1000,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setLoaded(true);
    let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather?";
    let apiKey = "a825d12564855984e0e5673562cb2c52";
    let units = "metric";
    let apiUrl = `${apiEndpoint}appid=${apiKey}&units=${units}&q=${location}`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateLocation(event) {
    setLocation(event.target.value);
  }

  function defaultSearch() {
    setLoaded(true);
    let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather?";
    let apiKey = "a825d12564855984e0e5673562cb2c52";
    let units = "metric";
    let apiUrl = `${apiEndpoint}appid=${apiKey}&units=${units}&q=${props.city}`;
    axios.get(apiUrl).then(displayWeather);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-9">
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter location"
              autoFocus
              autoComplete="off"
              onChange={updateLocation}
            />
          </div>
        </div>

        <div className="col-3">
          <button type="submit" className="btn btn-primary w-100 float-end">
            <i className="fas fa-search"></i> Search
          </button>
        </div>
      </div>
    </form>
  );
  if (loaded) {
    return (
      <div className="Weather">
        <div className="container">
          <div className="weather-app-wrapper">
            <div className="weather-app">
              {form}
              <City weather={weather} />
              <div className="row">
                <div className="col-3">
                  <CurrentWeather weather={weather} />
                </div>
                <div className="col-4">
                  <CurrentIcon weather={weather} />
                </div>
                <div className="col-3">
                  <CurrentTemp weather={weather} />
                </div>
                <div className="col-2">
                  <UnitConversion />
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  } else {
    defaultSearch();
    return (
      <div className="Weather">
        <div className="container">
          <div className="weather-app-wrapper">
            <div className="weather-app">
              {form}
              <div className="loader">
                <Loader
                  type="BallTriangle"
                  color="#989898"
                  height={100}
                  width={100}
                />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}
