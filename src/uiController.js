const day = document.querySelector("#daily-view");
const dayDate = document.querySelector("#daily-date");
const dayDesc = document.querySelector("#daily-desc");
const dayTemp = document.querySelector("#avg-temp");
const tempMax = document.querySelector("#max-temp");
const tempMin = document.querySelector("#min-temp");
const dayHumidity = document.querySelector("#humidity");
const dayPrecipitation = document.querySelector("#precipitation");
const dayUV = document.querySelector("#uv-index");

const week = document.querySelector("#weekly-view");
import { format } from "date-fns";

export const uiController = {
  displayDate(date) {
    console.log(date);
    dayDate.textContent = format(date.datetime, "MMMM co");
    dayDesc.textContent = date.description;
    dayTemp.textContent = date.temp;
    tempMax.textContent = date.tempmax;
    tempMin.textContent = date.tempmin;
    dayHumidity.textContent = date.humidity + "humid";
    dayPrecipitation.textContent = date.precip + "rain";
    dayUV.textContent = date.uvindex + "uv";
  },

  displayWeek(week) {
    return;
  },
};
