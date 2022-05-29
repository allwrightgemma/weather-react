import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <FormattedDate date={props.data.date} />

      <div className="col float-end">
        <ul>
          <li className="weather-condition">
            Humidity: {props.data.humidity}%
          </li>
          <li className="weather-condition">
            Wind: {Math.round(props.data.wind)} km/h
          </li>
        </ul>
      </div>

      <p className=" weather-description">{props.data.description}</p>
      <div className="row weather-today">
        <div className="col">
          <ul>
            <li>
              {" "}
              <span className="temperature">
                {Math.round(props.data.temperature)}
              </span>
              <span className="unit">°C</span>
            </li>

            <li>
              <img src={props.data.icon} alt={props.data.description} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
