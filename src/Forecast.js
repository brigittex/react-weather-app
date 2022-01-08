import React from "react";
import WeatherIcon from "./WeatherIcon.js";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col-2">
          <div>Thu</div>
          <WeatherIcon icon={"01d"} size={65} />
          <div>
            <span>19</span>
            <span>10</span>
          </div>
        </div>
      </div>
    </div>
  );
}
//<WeatherIcon weather={(icon = "01d")} />
