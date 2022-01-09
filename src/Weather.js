import React, { useState } from "react";
import Loader from "react-loader-spinner";
import Footer from "./Footer.js";
import CurrentWeather from "./CurrentWeather.js";
import WeatherIcon from "./WeatherIcon.js";
import CurrentTemp from "./CurrentTemp.js";
import City from "./City.js";
import Forecast from "./Forecast.js";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  let [location, setLocation] = useState(props.city);
  let [weather, setWeather] = useState({ loaded: false });

  function logWeather(response) {
    setWeather({
      location: response.data.name,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].main,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed * 3.6), //converting from m/s to km/h
      //iconURL: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      icon: response.data.weather[0].icon,
      feels_like: Math.round(response.data.main.feels_like),
      dt: new Date(response.data.dt * 1000),
      lat: response.data.coord.lat,
      lon: response.data.coord.lon,
      loaded: true,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateLocation(event) {
    setLocation(event.target.value);
  }

  function search() {
    let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather?";
    let apiKey = "a825d12564855984e0e5673562cb2c52";
    let units = "metric";
    let apiUrl = `${apiEndpoint}appid=${apiKey}&units=${units}&q=${location}`;
    axios.get(apiUrl).then(logWeather);
  }

  function searchCurrent(lat, lon) {
    let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather?";
    let apiKey = "a825d12564855984e0e5673562cb2c52";
    let units = "metric";
    let apiUrl = `${apiEndpoint}appid=${apiKey}&units=${units}&lat=${lat}&lon=${lon}`;
    axios.get(apiUrl).then(logWeather);
  }

  function handleCurrentLocation(location) {
    let lat = location.coords.latitude;
    let lon = location.coords.longitude;
    searchCurrent(lat, lon);
  }

  function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(handleCurrentLocation);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-8">
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

        <div className="col-4">
          <button type="submit" className="btn btn-primary w-100 float-end">
            <i className="fas fa-search"></i> Search
          </button>
        </div>
      </div>
    </form>
  );

  let form2 = (
    <form>
      <div className="row">
        <div className="col-8"></div>
        <div className="col-4">
          <button
            type="submit"
            className="btn btn-success w-100 float-end"
            onClick={getCurrentLocation}
          >
            <i className="fas fa-map-marker-alt"></i> Current Location
          </button>
        </div>
      </div>
    </form>
  );
  if (weather.loaded) {
    return (
      <div className="Weather">
        <div className="container">
          <div className="weather-app-wrapper">
            <div className="weather-app">
              {form}
              {form2}
              <City weather={weather} />
              <div className="row">
                <div className="col-4">
                  <CurrentWeather weather={weather} />
                </div>
                <div className="col-3">
                  <WeatherIcon icon={weather.icon} size={130} />
                </div>
                <div className="col-5">
                  <CurrentTemp weather={weather} />
                </div>
              </div>
              <hr />
              <Forecast weather={weather} />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  } else {
    search();
    return (
      <div className="Weather">
        <div className="container">
          <div className="weather-app-wrapper">
            <div className="weather-app">
              {form}
              {form2}
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
