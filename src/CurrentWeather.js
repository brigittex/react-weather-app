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
  let now = new Date(response);
  let day = days[now.getDay()];
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

  let now = new Date(response);
  let month = months[now.getMonth()];
  let date = now.getDate();
  let year = now.getFullYear();
  let fullDate = `${month} ${date}, ${year}`;
  return fullDate;
}

function findTime(response) {
  let now = new Date(response);
  let hour = now.getHours();
  let minute = now.getMinutes();

  //moving from 24hr clock to 12hr clock
  let half = null;
  if (hour > 12) {
    hour = hour - 12;
    half = "pm";
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
      <div>{time}</div>
      <hr />
      <div>{props.weather.description}</div>
      <div>
        Feels like: <span>{props.weather.feels_like}</span>°C
      </div>
      <div>
        Humidity: <span>{props.weather.humidity}</span> %
      </div>
      <div>
        Wind: <span>{props.weather.wind}</span> km/h
      </div>
    </div>
  );
}
