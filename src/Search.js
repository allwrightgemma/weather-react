import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form>
        <div className="row">
          <div className="col float-start">
            <button type="button" className="btn current">
              Current
            </button>
          </div>
          <div className="col-6 float-end">
            <input
              className="form-control"
              type="search"
              placeholder="Enter a location..."
            />
          </div>
          <div className="col-sm">
            <input className="form-control search-button" type="submit" />
          </div>
        </div>
      </form>
    </div>
  );
}
