import React from "react";
import "./Today.css";

export default function Today() {
  let weatherData = {
    highTemperature: 20,
    lowTemperature: 10,
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    description: "cloudy",
  };
  return (
    <div className="Today">
      <div className="row">
        <div className="col-12">
          <ul>
            <li className="high-low">High</li>
            <li className="temperature">{weatherData.highTemperature}°C</li>
            <li className="high-low">Low</li>
            <li className="temperature">{weatherData.lowTemperature}°C</li>
            <li>
              <img
                className="today-weather-icon"
                src={weatherData.imgUrl}
                alt={weatherData.description}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
