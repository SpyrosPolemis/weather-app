import "./styles.css";
import { getWeatherData } from "./api.js";

const search = document.querySelector("#search");
const searchInput = document.querySelector("#search-input");
search.addEventListener("submit", async (e) => {
  e.preventDefault();

  getWeatherData(searchInput.value);
});
