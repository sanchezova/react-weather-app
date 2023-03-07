import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>Seattle</h1>
      <ul>
        <li>Wednesday 07:00</li>
        <li>Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/shower-rain-day.png"
            alt="showers"
          />
          8℃
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 40%</li>
            <li>Humidity: 74%</li>
            <li>Wind: 11km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
