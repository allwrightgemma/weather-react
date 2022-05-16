import React from "react";
import "./Time.css";

export default function Time() {
  let weatherData = {
    time: "Tuesday 13:00",
  };

  return (
    <div className="Time">
      <h2>Last updated: {weatherData.time} </h2>
    </div>
  );
}
