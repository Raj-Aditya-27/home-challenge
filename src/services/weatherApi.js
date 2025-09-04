import axios from "axios";

const geocodeApi = "https://geocoding-api.open-meteo.com/v1/search";
const weatherApi = "https://api.open-meteo.com/v1/forecast";

export async function fetchWeatherData(city) {
  // Step 1: Get city coordinates
  const geoRes = await axios.get(geocodeApi, { params: { name: city } });
  const location = geoRes.data.results[0];
  const { latitude, longitude, name, country } = location;

  // Step 2: Fetch weather data
  const res = await axios.get(weatherApi, {
    params: {
      latitude,
      longitude,
      current_weather: true,
      hourly: "temperature_2m,relative_humidity_2m,weathercode",
      daily: "temperature_2m_max,temperature_2m_min,weathercode",
      timezone: "auto",
    },
  });

  const current = {
    temperature: res.data.current_weather.temperature,
    weathercode: res.data.current_weather.weathercode,
    windspeed: res.data.current_weather.windspeed,
    humidity: res.data.hourly.relative_humidity_2m[0],
    time: res.data.current_weather.time,
  };

  const hourly = res.data.hourly.time.slice(0, 6).map((t, i) => ({
    time: new Date(t).getHours() + ":00",
    temperature: res.data.hourly.temperature_2m[i],
    weathercode: res.data.hourly.weathercode[i],
  }));

  const daily = res.data.daily.time.map((t, i) => ({
    day: new Date(t).toLocaleDateString("en-US", { weekday: "short" }),
    max: res.data.daily.temperature_2m_max[i],
    min: res.data.daily.temperature_2m_min[i],
    weathercode: res.data.daily.weathercode[i],
  }));

  return {
    city: `${name}, ${country}`,
    current,
    hourly,
    daily,
  };
}
