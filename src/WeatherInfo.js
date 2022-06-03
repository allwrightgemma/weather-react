import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

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
        <div className="col-6">
          <WeatherTemperature celsius={props.data.temperature} />
        </div>

        <div className="col-6">
          <WeatherIcon code={props.data.icon} size={75} />
        </div>
      </div>
    </div>
  );
}
