import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <a
        href="https://github.com/brigittex/react-weather-app"
        target="_blank"
        rel="noreferrer"
      >
        Open-source code
      </a>{" "}
      by Brigitte Giguère <i class="fab fa-canadian-maple-leaf"></i>
    </div>
  );
}
