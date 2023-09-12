import "./App.css";
import { useEffect, useState } from "react";
import cloudy from "../Assets/cloudy-logo.png";
import sunny from "../Assets/sunny-logo.png";
import myVideo from "../Assets/myVideo.mp4";

function WeatherApp() {
  const [weather, setWeather] = useState([]);
  const [search, setSearch] = useState("karachi");

  useEffect(() => {
    async function findWeather() {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=49cc8c821cd2aff9af04c9f98c36eb74&units=metric`
      );
      const data = await response.json();
      setWeather(data);
      console.log(data);
      // setData(apiJson);
    }

    findWeather();
  }, [search]);

  return (
    <div className="weatherApp">
      <video className="bgVideo" autoPlay loop muted>
        <source src={myVideo} />
      </video>

      <div className="innerCont">
        <div className="searchArea">
          <input
            className="searchInput"
            type="search"
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
          display={
            weather.cod === "404" || weather.cod === "400" ? "none" : "flex"
          }
        />
        <InfoArea
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

const ResultArea = ({ search, display, temperature, feelLike, status }) => {
  return (
    <div className="resultArea" style={{ display: display }}>
      <div className="cityName">
        <h2>{search.toUpperCase()}</h2>
      </div>
      <div className="cityTemperature">
        <div className="tempText">
          <h1>
            {temperature}
            °C
          </h1>
          <p>Feels Like {feelLike}°C</p>
        </div>
        <div className="tempVisual">
          <img src={sunny} alt="sunny" />
          <p>{status}</p>
        </div>
      </div>
    </div>
  );
};

const InfoArea = ({ display }) => {
  return (
    <div className="infoArea" style={{ display: display }}>
      <div className="infoOne">
        <h3>Humidity</h3>
        <p>51%</p>
      </div>

      <div className="infoOne">
        <h3>Humidity</h3>
        <p>51%</p>
      </div>

      <div className="infoOne">
        <h3>Humidity</h3>
        <p>51%</p>
      </div>

      <div className="infoOne">
        <h3>Humidity</h3>
        <p>51%</p>
      </div>

      <div className="infoOne">
        <h3>Humidity</h3>
        <p>51%</p>
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
