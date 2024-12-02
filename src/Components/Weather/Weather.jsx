import React from "react";
import "./weather.css";
function Weather() {
  return (
    <div class="whether_container">
      <div class="weather__header">
        <form class="weather__search">
          <input
            type="text"
            placeholder="Search for a city..."
            class="weather__searchform"
          />
          <i class="fa-solid fa-magnifying-glass"></i>
        </form>
        <div class="weather__units">
          <span class="weather_unit_celsius">°C</span>
          <span class="weather_unit_farenheit">°F</span>
        </div>
      </div>
      <div class="weather__body">
        <h1 class="weather__city">London, United Kingdom</h1>
        <div class="weather__datetime">Monday, December 2, 2024 at 7:53 AM</div>
        <div class="weather__forecast">Clouds</div>
        <div class="weather__icon">
          <img src="https://openweathermap.org/img/wn/02d@4x.png" alt="" />
        </div>
        <p class="weather__temperature"></p>
        <div class="weather__minmax">
          <p>Min: 8°</p>
          <p>Max: 10°</p>
        </div>
      </div>

      <div class="weather__info">
        <div class="weather__card">
          <i class="fa-solid fa-temperature-full"></i>
          <div>
            <p>Real Feel</p>
            <p class="weather__realfeel">6°</p>
          </div>
        </div>
        <div class="weather__card">
          <i class="fa-solid fa-droplet"></i>
          <div>
            <p>Humidity</p>
            <p class="weather__humidity">87%</p>
          </div>
        </div>
        <div class="weather__card">
          <i class="fa-solid fa-wind"></i>
          <div>
            <p>Wind</p>
            <p class="weather__wind">5.66 m/s</p>
          </div>
        </div>
        <div class="weather__card">
          <i class="fa-solid fa-gauge-high"></i>
          <div>
            <p>Pressure</p>
            <p class="weather__pressure">1012 hPa</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
