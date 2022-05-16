import React from "react";
import "./Location.css";

export default function Location() {
  let weatherData = {
    city: "London",
  };
  return (
    <div className="Location">
      <h1>{weatherData.city}</h1>
    </div>
  );
}
