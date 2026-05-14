async function getWeatherData(location) {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/next7days?unitGroup=metric&key=AP3KUH89PNZRELZV32SGH5PG2&contentType=json`,
  );
  const weatherData = await response.json();
  return weatherData;
}

function processWeatherData(weatherData) {
  const processedData = {
    resolvedAddress: weatherData.resolvedAddress,
    days: weatherData.days.map((day) => ({
      datetime: new Date(day.datetime),
      description: day.description,
      conditions: day.conditions,
      humidity: day.humidity,
      temp: day.temp,
      tempmin: day.tempmin,
      tempmax: day.tempmax,
      precip: day.precip,
      uvindex: day.uvindex,
    })),
  };
  processedData.days.pop(); // Only need 7 days
  return processedData;
}

export { getWeatherData, processWeatherData };

// address,
