import React from "react";
import FormattedDate from "./FormattedDate.js";
import WeatherIcon from "./WeatherIcon.js";
import WeatherTemperature from "./WeatherTemperature.js";
import "./Weatherinfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="feature-box-1 col-lg-6">
          <h1>{props.data.city}</h1>
          <ul>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
        </div>
        <div className="feature-box-2 col-md-3">
          <WeatherIcon code={props.data.icon} size={92} />
        </div>
        <div className="feature-box-3 col-md-3">
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
      </div>
      <div className="bottom-box">
        <ul>
          <li>Humidity: {props.data.humidity}%</li>
          <li>Wind: {Math.round(props.data.wind)}km</li>
        </ul>
      </div>
    </div>
  );
}
