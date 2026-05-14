async function getWeatherData(location) {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/next7days?unitGroup=metric&key=AP3KUH89PNZRELZV32SGH5PG2&contentType=json`,
  );
  const weatherData = await response.json();
  return weatherData;
}

function processWeatherData(weatherData) {
  return {
    resolvedAddress: weatherData.resolvedAddress,
    days: weatherData.days.map((day) => ({
      description: day.description,
      feelsLike: day.feelsLike,
      humidity: day.humidity,
      temp: day.temp,
      tempmin: day.tempmin,
      tempmax: day.tempmax,
      precip: day.precip,
      uvindex: day.uvindex,
    })),
  };
}

export { getWeatherData, processWeatherData };

// address,
