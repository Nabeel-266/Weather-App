//? React Icons Imports
import { TiWeatherCloudy } from "react-icons/ti";
import { TiWeatherSunny } from "react-icons/ti";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { TiWeatherDownpour } from "react-icons/ti";
import { TiWeatherStormy } from "react-icons/ti";
import { TiWeatherShower } from "react-icons/ti";
import { TiWeatherWindyCloudy } from "react-icons/ti";

export default function setWeatherIconDependOnWeatherMode(weatherMode) {
  if (weatherMode === "clear sky") {
    return <TiWeatherSunny className="weatherIcon" />;
  } else if (
    weatherMode === "smoke" ||
    weatherMode === "haze" ||
    weatherMode === "mist" ||
    weatherMode === "dust" ||
    weatherMode === "fog"
  ) {
    return <TiWeatherWindyCloudy className="weatherIcon" />;
  } else if (
    weatherMode === "scattered clouds" ||
    weatherMode === "few clouds"
  ) {
    return <TiWeatherPartlySunny className="weatherIcon" />;
  } else if (weatherMode === "broken clouds") {
    return <TiWeatherCloudy className="weatherIcon" />;
  } else if (
    weatherMode === "overcast clouds" ||
    weatherMode === "moderate rain"
  ) {
    return <TiWeatherStormy className="weatherIcon" />;
  } else if (weatherMode === "light rain") {
    return <TiWeatherShower className="weatherIcon" />;
  } else if (weatherMode === "rain") {
    return <TiWeatherDownpour className="weatherIcon" />;
  } else {
    return <TiWeatherSunny className="weatherIcon" />;
  }
}
