import "./Weather.css";

export default function Weather() {
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
        <h1>London</h1>
        <h2>Last updated: Friday 2:00 </h2>

        <div className="col float-end">
          <ul>
            <li className="weather-condition">Humidity: 10%</li>
            <li className="weather-condition">Wind: 10 km/h</li>
          </ul>
        </div>

        <p className=" weather-description">Cloudy</p>
        <div className="row weather-today">
          <div className="col">
            <ul>
              <li>
                {" "}
                <span className="temperature">10</span>
                <span className="unit">°C</span>
              </li>

              <li>
                <img src="#" alt="image" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
