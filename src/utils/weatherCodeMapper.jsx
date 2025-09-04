import { Sun, Cloud, CloudRain, CloudSnow, CloudLightning } from "lucide-react";

export function getWeatherDescription(code) {
  if (code === 0) return "Clear sky";
  if ([1, 2, 3].includes(code)) return "Partly cloudy";
  if ([45, 48].includes(code)) return "Fog";
  if ([51, 53, 55, 61, 63, 65].includes(code)) return "Rain showers";
  if ([71, 73, 75].includes(code)) return "Snow";
  if ([95, 96, 99].includes(code)) return "Thunderstorm";
  return "Unknown";
}

export function getWeatherIcon(code) {
  if (code === 0) return <Sun />;
  if ([1, 2, 3].includes(code)) return <Cloud />;
  if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(code)) return <CloudRain />;
  if ([71, 73, 75, 77, 85, 86].includes(code)) return <CloudSnow />;
  if ([95, 96, 99].includes(code)) return <CloudLightning />;
  return <Cloud />;
}
