import React from "react";
import Weather from "./Weather.js";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <div className="App">
        {" "}
        <Weather defaultCity="New York" />
        <footer>
          Coded by {""}{" "}
          <a
            href="https://github.com/ainovi/react-weather-app"
            rel="noreferrer"
            target="_blank"
          >
            Aino
          </a>
        </footer>
      </div>
    </div>
  );
}
