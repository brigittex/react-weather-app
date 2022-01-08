import React from "react";

export default function UnitConversion() {
  return (
    <div className="UnitConversion">
      <div className="btn-group float-end">
        <a
          href="/"
          className="btn btn-secondary"
          aria-current="page"
          id="toCelsius"
        >
          °C
        </a>
        <a href="/" className="btn btn-outline-secondary" id="toFahrenheit">
          °F
        </a>
      </div>
    </div>
  );
}
