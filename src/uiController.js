import { format } from "date-fns";

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

let selectedDay = null;

export const uiController = {
  displayDate(date) {
    dayDate.textContent = format(date.datetime, "MMMM do");
    dayDesc.textContent = date.description;
    dayTemp.textContent = date.temp;
    tempMax.textContent = date.tempmax;
    tempMin.textContent = date.tempmin;
    dayHumidity.textContent = "Humidity: " + date.humidity;
    dayPrecipitation.textContent = "Precipitation: " + date.precip;
    dayUV.textContent = "UV Index: " + date.uvindex;

    selectedDay = date;
  },

  displayWeek(weekToDisplay) {
    week.innerHTML = "";
    weekToDisplay.forEach((day) => {
      const dayCard = document.createElement("button");
      dayCard.addEventListener("click", () => {
        this.displayDate(day);
        this.displayWeek(weekToDisplay);
      });
      dayCard.classList.add("day-card");
      dayCard.classList.add(setCondition(day));
      if (selectedDay === day) {
        dayCard.classList.add("selected");
      }
      dayCard.append(populateWeekCard(day));
      week.append(dayCard);
    });
  },
};

function populateWeekCard(day) {
  const details = document.createElement("div");
  // date, temp, conditions,
  const date = document.createElement("div");
  const temp = document.createElement("div");

  date.textContent = format(day.datetime, "MMMM do");
  temp.textContent = day.temp;

  details.append(date, temp);
  return details;
}

function setCondition(day) {
  // condition can be cloudy-day or cloudy-night, this if block will just make it cloudy
  // otherwise, just returns the condition
  if (day.conditions.endsWith("day")) {
    return day.conditions.slice(0, -4);
  } else if (day.conditions.endsWith("night")) {
    return day.conditions.slice(0, -6);
  } else {
    return day.conditions;
  }
}
