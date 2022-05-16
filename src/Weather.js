import "./Weather.css";
import Search from "./Search";
import Location from "./Location";
import Time from "./Time";
import Description from "./Description";
import Today from "./Today";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="weather-app">
        <Search />
        <Location />
        <Time />
        <Description />
        <Today />
      </div>
    </div>
  );
}
