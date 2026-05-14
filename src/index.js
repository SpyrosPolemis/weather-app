import "./styles.css";
import { getWeatherData, processWeatherData } from "./api.js";
import { uiController } from "./uiController.js";

const search = document.querySelector("#search");
const searchInput = document.querySelector("#search-input");
search.addEventListener("submit", async (e) => {
  e.preventDefault();

  const rawWeatherData = await getWeatherData(searchInput.value);
  const weatherData = await processWeatherData(rawWeatherData);
  uiController.displayDate(weatherData.days[0]);
  uiController.displayWeek(weatherData.days);
});
