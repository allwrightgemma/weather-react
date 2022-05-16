import React from "react";
import "./Description.css";

export default function Description() {
  let weatherData = {
    description: "Cloudy",
    humidity: 80,
    wind: 10,
  };
  return (
    <div className="Description">
      <div className="col float-end">
        <ul>
          <li className="weather-condition">
            Humidity: {weatherData.humidity}%
          </li>
          <li className="weather-condition">Wind: {weatherData.wind} km/h</li>
        </ul>
      </div>

      <p className=" weather-description">{weatherData.description}</p>
    </div>
  );
}
