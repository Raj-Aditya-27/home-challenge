"use client";

import { useState } from "react";
import { fetchWeatherData } from "../services/weatherApi";

export function useWeather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async (city) => {
    if (!city || city.trim() === "") {
      setError("Please enter a valid city name");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const data = await fetchWeatherData(city);
      setWeather(data);
    } catch (err) {
      setError(err.message || "Failed to fetch weather data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return { weather, loading, error, fetchWeather };
}
