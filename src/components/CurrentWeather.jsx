import { getWeatherDescription, getWeatherIcon } from "../utils/weatherCodeMapper";

function CurrentWeather({ data }) {
  const { current, city } = data;
  return (
    <div className="bg-blue-800 rounded-2xl p-6 shadow-lg">
      <h2 className="text-2xl font-semibold">{city}</h2>
      <p className="text-sm">{current.time}</p>
      <div className="flex justify-between items-center mt-4">
        <div>
          <p className="text-6xl font-bold">{current.temperature}°</p>
          <p>{getWeatherDescription(current.weathercode)}</p>
          <p className="text-sm">Feels like {current.temperature}°</p>
        </div>
        <div className="text-6xl">
          {getWeatherIcon(current.weathercode)}
        </div>
      </div>
      <div className="flex justify-between text-sm mt-4">
        <span>💨 {current.windspeed} km/h</span>
        <span>💧 {current.humidity}%</span>
      </div>
    </div>
  );
}

export default CurrentWeather;
