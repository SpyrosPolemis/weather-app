const day = document.querySelector("#daily-view");
const week = document.querySelector("#weekly-view");
import { format } from "date-fns";

export const uiController = {
  displayDate(date) {
    const time = document.createElement("div");
    time.textContent = format(date.datetime, "MMMM co");

    day.append(time);
  },

  displayWeek(week) {
    return;
  },
};
