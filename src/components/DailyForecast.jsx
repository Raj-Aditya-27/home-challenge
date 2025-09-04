import { getWeatherIcon } from "../utils/weatherCodeMapper";

function DailyForecast({ data }) {
  const { daily } = data;

  return (
    <div className="bg-blue-800 rounded-2xl p-4 shadow-lg">
      <h3 className="mb-2 font-semibold">7-Day Forecast</h3>
      <div className="flex space-x-4 overflow-x-auto md:grid md:grid-cols-7 md:gap-4 scrollbar-hide">
        {daily.map((day, i) => (
          <div
            key={i}
            className="flex flex-col items-center min-w-[70px] md:min-w-0"
          >
            <p className="text-sm">{day.day}</p>
            <div className="text-2xl">{getWeatherIcon(day.weathercode)}</div>
            <p className="text-sm">
              {day.max}° / {day.min}°
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DailyForecast;
