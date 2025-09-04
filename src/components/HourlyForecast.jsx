import { getWeatherIcon } from "../utils/weatherCodeMapper"
import { Clock } from "lucide-react"

function HourlyForecast({ data }) {
  const { hourly } = data

  return (
    <div className="relative overflow-hidden rounded-3xl p-6 backdrop-blur-sm bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-white/10 shadow-2xl">
      <div className="flex items-center gap-2 mb-4">
        <Clock className="w-5 h-5 text-white/80" />
        <h3 className="text-lg font-semibold text-white">24-Hour Forecast</h3>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
        {hourly.slice(0, 12).map((hour, i) => (
          <div
            key={i}
            className="flex flex-col items-center min-w-[80px] p-3 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-200"
          >
            <p className="text-sm text-white/70 font-medium mb-2">{hour.time}</p>
            <div className="w-8 h-8 mb-2 flex items-center justify-center">{getWeatherIcon(hour.weathercode)}</div>
            <p className="text-lg font-semibold text-white">{hour.temperature}°</p>
          </div>
        ))}
      </div>

      <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -translate-y-12 translate-x-12"></div>
    </div>
  )
}

export default HourlyForecast
