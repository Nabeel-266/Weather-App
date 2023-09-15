//? Assets Imports
import mostlyClouds from "../Assets/mostlyClouds.mp4";
import partlyClouds from "../Assets/partlyClouds.mov";
import haze from "../Assets/haze.mp4";
import clearSky from "../Assets/clearSky.mp4";
import lightRain from "../Assets/lightRain.mp4";
import overcastClouds from "../Assets/overcastClouds.mp4";
import rainy from "../Assets/rainy.mp4";
import generally from "../Assets/generally.mp4";

// Set background image depend on weather condition
export default function setBgImageDependOnWeatherMode(weatherMode) {
  if (weatherMode === "clear sky") {
    return clearSky;
  } else if (
    weatherMode === "smoke" ||
    weatherMode === "haze" ||
    weatherMode === "mist" ||
    weatherMode === "dust" ||
    weatherMode === "fog"
  ) {
    return haze;
  } else if (
    weatherMode === "scattered clouds" ||
    weatherMode === "few clouds"
  ) {
    return partlyClouds;
  } else if (weatherMode === "broken clouds") {
    return mostlyClouds;
  } else if (
    weatherMode === "overcast clouds" ||
    weatherMode === "moderate rain"
  ) {
    return overcastClouds;
  } else if (weatherMode === "light rain") {
    return lightRain;
  } else if (weatherMode === "rain") {
    return rainy;
  } else {
    return generally;
  }
}
