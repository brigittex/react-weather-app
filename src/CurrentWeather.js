import React from "react";

function findWeekday(response) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[response.getDay()];
  return day;
}

function findDate(response) {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let month = months[response.getMonth()];
  let date = response.getDate();
  let year = response.getFullYear();
  let fullDate = `${month} ${date}, ${year}`;
  return fullDate;
}

function findTime(response) {
  let hour = response.getHours();
  let minute = response.getMinutes();

  //moving from 24hr clock to 12hr clock
  let half = null;
  if (hour > 12) {
    hour = hour - 12;
    half = "pm";
  } else if (hour === 0) {
    hour = 12;
    half = "am";
  } else {
    half = "am";
  }

  //adding 0 in front of single digit minutes
  if (minute < 10) {
    minute = `0${minute}`;
  }

  let time = `${hour}:${minute}${half}`;

  return time;
}
export default function CurrentWeather(props) {
  let weekday = findWeekday(props.weather.dt);
  let date = findDate(props.weather.dt);
  let time = findTime(props.weather.dt);

  return (
    <div className="CurrentWeather">
      <div>{weekday}</div>
      <div>{date}</div>
      <div>Last update: {time}</div>
      <hr />
      <div>
        <i className="fas fa-play"></i> {props.weather.description}
      </div>
      <div>
        <i className="fas fa-thermometer-half"></i> Feels like:{" "}
        <span>{props.weather.feels_like}</span>°C
      </div>
      <div>
        <i className="fas fa-tint"></i> Humidity:{" "}
        <span>{props.weather.humidity}</span> %
      </div>
      <div>
        <i className="fas fa-wind"></i> Wind: <span>{props.weather.wind}</span>{" "}
        km/h
      </div>
    </div>
  );
}
