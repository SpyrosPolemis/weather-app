export async function getWeatherData(location) {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=AP3KUH89PNZRELZV32SGH5PG2&contentType=json`,
  );
  const weatherData = await response.json();
  console.log(weatherData);
}
