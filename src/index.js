import "./styles.css";
import { getWeatherData, processWeatherData } from "./api.js";

const search = document.querySelector("#search");
const searchInput = document.querySelector("#search-input");
search.addEventListener("submit", async (e) => {
  e.preventDefault();

  const rawWeatherData = await getWeatherData(searchInput.value);
  const weatherData = await processWeatherData(rawWeatherData);
  console.log(weatherData);
});
