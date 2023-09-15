import "./App.css";
import "./ResponsiveApp.css";
import { useEffect, useState } from "react";
import setBgImageDependOnWeatherMode from "./ChangeBg.js";
import setWeatherIconDependOnWeatherMode from "./ChangeIcon";

// Import Weather Info Icons
import { FaDroplet } from "react-icons/fa6";
import { RiWindyFill } from "react-icons/ri";
import { FaTemperatureThreeQuarters } from "react-icons/fa6";
import { FaTemperatureQuarter } from "react-icons/fa6";

function WeatherApp() {
  const [weather, setWeather] = useState([]);
  const [search, setSearch] = useState("karachi");
  const [weatherMode, setWeatherMode] = useState();
  // const [weatherIcon, setWeatherIcon] = useState();

  useEffect(() => {
    async function findWeather() {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=49cc8c821cd2aff9af04c9f98c36eb74&units=metric`
        );
        const data = await response.json();
        setWeather(data);
        setWeatherMode(data?.weather?.[0]?.description);
      } catch (error) {
        console.error("404: City not found");
      }
    }

    findWeather();
  }, [search]);

  return (
    <div className="weatherApp">
      <div key={weatherMode} className="bgVideoWrapper">
        <video className="bgVideo" autoPlay loop muted>
          <source src={setBgImageDependOnWeatherMode(weatherMode)} />
        </video>
      </div>

      <div className="innerCont">
        <div className="searchArea">
          <input
            className="searchInput"
            type="search"
            placeholder="Location"
            onChange={(event) => {
              setSearch(event.target.value.toLowerCase());
            }}
          />
        </div>
        <ResultArea
          search={search}
          temperature={Math.round(weather?.main?.temp)}
          feelLike={Math.round(weather?.main?.feels_like)}
          status={weather?.weather?.[0]?.description}
          weatherMode={weatherMode}
          display={
            weather.cod === "404" || weather.cod === "400" ? "none" : "flex"
          }
        />
        <InfoArea
          humidity={weather?.main?.humidity}
          wind={weather?.wind?.speed}
          minTemp={Math.round(weather?.main?.temp_min)}
          maxTemp={Math.round(weather?.main?.temp_max)}
          display={
            weather.cod === "404" || weather.cod === "400" ? "none" : "flex"
          }
        />
        <Message
          display={
            weather.cod === "404" || weather.cod === "400" ? "flex" : "none"
          }
        />
      </div>
    </div>
  );
}

const ResultArea = ({
  search,
  display,
  temperature,
  feelLike,
  status,
  weatherMode,
}) => {
  return (
    <div className="resultArea" style={{ display: display }}>
      <div className="cityTemp">
        <h1>
          {temperature}
          °C
        </h1>
        <p>Feels Like {feelLike}°C</p>
      </div>
      <div className="cityStatus">
        <div className="textually">
          <h2>{search.slice(0, 1).toUpperCase() + search.slice(1)}</h2>
          <p>
            {!!status ? status.slice(0, 1).toUpperCase() + status.slice(1) : ""}
          </p>
        </div>
        <div className="visually">
          {setWeatherIconDependOnWeatherMode(weatherMode)}
        </div>
      </div>
    </div>
  );
};

// -----------------------------------------------------------
const InfoArea = ({ display, humidity, wind, minTemp, maxTemp }) => {
  return (
    <div className="infoArea" style={{ display: display }}>
      <div className="info">
        <div className="icon">
          <FaDroplet className="infoIcon" />
        </div>
        <div className="infoText">
          <h3>Humidity</h3>
          <p>{humidity}%</p>
        </div>
      </div>

      <div className="info">
        <div className="icon">
          <RiWindyFill className="infoIcon" />
        </div>
        <div className="infoText">
          <h3>Wind</h3>
          <p>{wind}mph</p>
        </div>
      </div>

      <div className="info">
        <div className="icon">
          <FaTemperatureQuarter className="infoIcon" />
        </div>
        <div className="infoText">
          <h3>Min Temp</h3>
          <p>{minTemp}°C</p>
        </div>
      </div>

      <div className="info">
        <div className="icon">
          <FaTemperatureThreeQuarters className="infoIcon" />
        </div>
        <div className="infoText">
          <h3>Max Temp</h3>
          <p>{maxTemp}°C</p>
        </div>
      </div>
    </div>
  );
};

const Message = ({ display }) => {
  return (
    <div className="messageArea" style={{ display: display }}>
      <h1>OopsS!</h1>
      <p>City Not Found</p>
    </div>
  );
};

export default WeatherApp;
