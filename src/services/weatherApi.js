// Real Weather API service using Open-Meteo
const GEOCODE_URL = "https://geocoding-api.open-meteo.com/v1/search";
const WEATHER_URL = "https://api.open-meteo.com/v1/forecast";

export async function fetchWeatherData(city) {
  try {
    // Step 1: Get coordinates for the city
    const geoRes = await fetch(`${GEOCODE_URL}?name=${encodeURIComponent(city)}&count=1`);
    if (!geoRes.ok) throw new Error("Failed to fetch city coordinates");

    const geoData = await geoRes.json();
    if (!geoData.results || geoData.results.length === 0) {
      throw new Error("City not found. Please check the name and try again.");
    }

    const { latitude, longitude, name, country } = geoData.results[0];

    // Step 2: Fetch weather data
    const weatherRes = await fetch(
      `${WEATHER_URL}?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m,weathercode&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto`
    );

    if (!weatherRes.ok) throw new Error("Failed to fetch weather data");

    const weatherData = await weatherRes.json();

    // Step 3: Structure the response
    return {
      city: `${name}, ${country}`,
      current: {
        time: weatherData.current_weather.time,
        temperature: weatherData.current_weather.temperature,
        weathercode: weatherData.current_weather.weathercode,
        windspeed: weatherData.current_weather.windspeed,
        humidity: weatherData.hourly.relativehumidity_2m
          ? weatherData.hourly.relativehumidity_2m[0]
          : null, // Fallback if not available
      },
      hourly: weatherData.hourly.time.map((t, i) => ({
        time: t,
        temperature: weatherData.hourly.temperature_2m[i],
        weathercode: weatherData.hourly.weathercode[i],
      })),
      daily: weatherData.daily.time.map((day, i) => ({
        day,
        max: weatherData.daily.temperature_2m_max[i],
        min: weatherData.daily.temperature_2m_min[i],
        weathercode: weatherData.daily.weathercode[i],
      })),
    };
  } catch (error) {
    throw new Error(error.message || "Unexpected error fetching weather data");
  }
}
