import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <div>
        Project coded by Brigitte Giguère{" "}
        <i className="fab fa-canadian-maple-leaf"></i>
      </div>
      <div>
        Open-source code on{" "}
        <a
          href="https://github.com/brigittex/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
      <div>
        Hosted on{" "}
        <a
          href="https://nostalgic-ptolemy-985870.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
      </div>
    </div>
  );
}
