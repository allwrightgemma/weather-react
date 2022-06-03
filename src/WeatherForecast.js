import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="day">Thu</div>
          <WeatherIcon code="01d" size={40} />
          <div className="temperatures">
            <span className="temperature-max">22°</span>
            <span className="temperature-min">14°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
