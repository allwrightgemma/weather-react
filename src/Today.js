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
        <div className="col">
          <ul>
            <li>
              {" "}
              <span className="temperature">{weatherData.highTemperature}</span>
              <span className="unit">°C</span>
            </li>

            <li>
              <img src={weatherData.imgUrl} alt={weatherData.description} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
