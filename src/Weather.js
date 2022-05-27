import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      date: "Friday 15:15",
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="weather-app">
          <form>
            <div className="row">
              <div className="col float-start">
                <button type="button" className="btn current">
                  Current
                </button>
              </div>
              <div className="col-6">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Enter a location..."
                  autoFocus="on"
                />
              </div>
              <div className="col">
                <input className="form-control search-button" type="submit" />
              </div>
            </div>
          </form>
          <h1>{weatherData.city}</h1>
          <h2>{weatherData.date}</h2>

          <div className="col float-end">
            <ul>
              <li className="weather-condition">
                Humidity: {weatherData.humidity}%
              </li>
              <li className="weather-condition">
                Wind: {Math.round(weatherData.wind)} km/h
              </li>
            </ul>
          </div>

          <p className=" weather-description">{weatherData.description}</p>
          <div className="row weather-today">
            <div className="col">
              <ul>
                <li>
                  {" "}
                  <span className="temperature">
                    {Math.round(weatherData.temperature)}
                  </span>
                  <span className="unit">°C</span>
                </li>

                <li>
                  <img src={weatherData.icon} alt={weatherData.description} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "064c71138727cd858b6ec37d95b7b5d3";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }
  return "Loading...";
}
