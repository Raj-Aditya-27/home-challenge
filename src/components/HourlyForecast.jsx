import { getWeatherIcon } from "../utils/weatherCodeMapper";

function HourlyForecast({ data }) {
  const { hourly } = data;

  return (
    <div className="bg-blue-800 rounded-2xl p-4 shadow-lg">
      <h3 className="mb-2 font-semibold">Hourly Forecast</h3>
      <div className="flex space-x-4 overflow-x-auto md:grid md:grid-cols-6 md:gap-4 scrollbar-hide">
        {hourly.map((hour, i) => (
          <div
            key={i}
            className="flex flex-col items-center min-w-[60px] md:min-w-0"
          >
            <p className="text-xs">{hour.time}</p>
            <div className="text-2xl">{getWeatherIcon(hour.weathercode)}</div>
            <p className="text-sm">{hour.temperature}°</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HourlyForecast;
