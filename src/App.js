import React, { useEffect, useState } from 'react';
import './App.css';

const appID = process.env.REACT_APP_MY_API_ID;

const App = () => {
  const city = 'London';

  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${appID}`,
    )
      .then((response) => response.json())
      .then((json) => {
        setWeather(json);
      });
  }, []);

  console.log(weather);

  return (
    <div className="App">
      <div className="container">
        <h1>My Weather App</h1>
        <div className="weather">
          {/* <div className="button-group">
            <button className="button">City01</button>
            <button className="button">City02</button>
            <button className="button">City03</button>
          </div> */}
          <div className="weather__current">
            <h2 className="weather__city" id="mesto">
              City, Country
            </h2>
            <div className="weather__inner weather__inner--center">
              <div className="weather__section weather__section--temp">
                <span className="weather__temp-value" id="teplota">
                  {weather ? Math.round(weather.main.temp) : 'neni'}
                </span>
                <span className="weather__temp-unit">°C</span>
                <div className="weather__description" id="popis">
                  --
                </div>
              </div>
              <div
                className="weather__section weather__section--icon"
                id="ikona"
              >
                --
                <img
                  src={
                    weather
                      ? `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
                      : 'nic'
                  }
                  alt="current weather icon"
                />
              </div>
            </div>
            <div className="weather__inner">
              <div className="weather__section">
                <h3 className="weather__title">Wind</h3>
                <div className="weather__value">
                  <span id="wind">--</span> km/h
                </div>
              </div>
              <div className="weather__section">
                <h3 className="weather__title">Humidity</h3>
                <div className="weather__value">
                  <span id="humidity">--</span> %
                </div>
              </div>
            </div>
            <div className="weather__inner">
              <div className="weather__section">
                <h3 className="weather__title">Sunrise</h3>
                <div className="weather__value">
                  <span id="sunrise">
                    {weather ? Date(weather.sys.sunrise) : 'null'}
                  </span>
                </div>
              </div>
              <div className="weather__section">
                <h3 className="weather__title">Sunset</h3>
                <div className="weather__value">
                  <span id="sunset">
                    {weather ? Date(weather.sys.sunset) : 'null'}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="weather__forecast" id="predpoved">
            <div className="forecast">
              <div className="forecast__day">Day, date</div>
              <div className="forecast__icon">
                {/* <img
                  src={URL FROM OPEN WEATHER}
                  style={{ height: "100%" }}
                  alt="current weather icon"
                /> */}
              </div>
              <div className="forecast__temp">-- °C</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
